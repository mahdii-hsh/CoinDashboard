'use client';

import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';

export type Spring = {
  value: number;
  velocity: number;
  target: number;
  stiffness: number;
  damping: number;
  precision: number;
};

/*
 * Springs take a response and a bounce: response is the period of the
 * undamped oscillation in seconds, and bounce 0 is critically damped. For
 * unit mass that is stiffness (2π / response)² and damping
 * 4π (1 - bounce) / response.
 */
export const createSpring = (
  response: number,
  bounce: number,
  value: number,
  precision = 0.001,
): Spring => ({
  value,
  velocity: 0,
  target: value,
  stiffness: ((2 * Math.PI) / response) ** 2,
  damping: (4 * Math.PI * (1 - bounce)) / response,
  precision,
});

// Changes how a spring moves without stopping it, so it carries its velocity
// into the new motion.
export const retuneSpring = (spring: Spring, response: number, bounce: number) => {
  spring.stiffness = ((2 * Math.PI) / response) ** 2;
  spring.damping = (4 * Math.PI * (1 - bounce)) / response;
};

// Semi-implicit Euler in steps of at most 1/120 s is stable for every spring
// here. Returns whether the spring is still moving.
export const stepSpring = (spring: Spring, dt: number, snap: boolean) => {
  if (snap || (spring.value === spring.target && spring.velocity === 0)) {
    spring.value = spring.target;
    spring.velocity = 0;

    return false;
  }

  const steps = Math.max(1, Math.ceil(dt * 120));
  const step = dt / steps;

  for (let index = 0; index < steps; index += 1) {
    spring.velocity +=
      (-spring.stiffness * (spring.value - spring.target) - spring.damping * spring.velocity) *
      step;
    spring.value += spring.velocity * step;
  }

  if (
    Math.abs(spring.value - spring.target) < spring.precision &&
    Math.abs(spring.velocity) < spring.precision * 10
  ) {
    spring.value = spring.target;
    spring.velocity = 0;

    return false;
  }

  return true;
};

let motionQuery: MediaQueryList | undefined;

// The provider mirrors its preference onto <html>; the system setting always
// counts, as it does in liquid.css.
export function motionReduced() {
  motionQuery ??= window.matchMedia('(prefers-reduced-motion: reduce)');

  return (
    document.documentElement.getAttribute('data-lg-reduce-motion') === '1' || motionQuery.matches
  );
}

export type FrameLoop = {
  start: () => void;
  stop: () => void;
};

// Calls step once a frame with the seconds since the last one until it
// returns false. A long pause counts as one short frame.
export function createFrameLoop(step: (dt: number) => boolean): FrameLoop {
  let frame = 0;
  let last = 0;

  const tick = (now: number) => {
    const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60;

    last = now;
    frame = 0;

    if (step(dt)) {
      frame = requestAnimationFrame(tick);

      return;
    }

    last = 0;
  };

  return {
    start() {
      if (!frame) frame = requestAnimationFrame(tick);
    },
    stop() {
      cancelAnimationFrame(frame);
      frame = 0;
      last = 0;
    },
  };
}

type Edge = 'left' | 'top' | 'right' | 'bottom';

type Box = Record<Edge, number>;

type Feel = readonly [response: number, bounce: number];

const EDGES: readonly Edge[] = ['left', 'top', 'right', 'bottom'];

// The edge heading for the new item leads and the far edge follows, so the
// bubble stretches into a drop on the way and rounds off when it lands. The
// leading edge overshoots a little and rings back, which is what makes the
// landing feel like a drop settling rather than a slide stopping.
const LEAD: Feel = [0.2, 0.32];

const TRAIL: Feel = [0.3, 0.12];

const EVEN: Feel = [0.26, 0.22];

// Under a finger the bubble keeps up closely but still leans into the drag.
const DRAG_LEAD: Feel = [0.1, 0.12];

const DRAG_TRAIL: Feel = [0.18, 0.04];

// How far a lifted bubble grows past its item, in CSS pixels. It never grows
// past the control's own edge. Kept to a hair: more reads as the bubble
// zooming out of its track.
const SWELL = 1;

const DRAG_THRESHOLD = 4;

// The bubble counts as travelling, and stays lifted, while an edge moves faster
// than this in CSS pixels a second, so it settles the moment it slows down.
const TRAVEL_SPEED = 90;

// How far a press on another item wakes the bubble before it moves.
const ANTICIPATION = 0.5;

type Frame = { element: HTMLElement; rect: DOMRect; scale: number };

// The element the bubble is positioned in, with the scale of any scaled
// ancestor, such as a dialog that is still opening. offsetWidth is rounded,
// so a ratio within that rounding of 1 is no scaling at all.
function measureFrame(element: HTMLElement): Frame {
  const rect = element.getBoundingClientRect();
  const ratio = rect.width / Math.max(element.offsetWidth, 1);

  return { element, rect, scale: Math.abs(ratio - 1) * element.offsetWidth <= 0.5 ? 1 : ratio };
}

// Client rectangles keep the sub-pixel positions that layout offsets round
// away, so the bubble lines up exactly. The bubble is placed in the frame's
// scrolled content, so any scroll is added back.
function boxWithin(element: HTMLElement, frame: Frame): Box {
  const rect = element.getBoundingClientRect();
  const width = rect.width / frame.scale;
  const height = rect.height / frame.scale;
  const { clientLeft, clientTop, scrollLeft, scrollTop } = frame.element;

  const centreX =
    (rect.left + rect.width / 2 - frame.rect.left) / frame.scale - clientLeft + scrollLeft;

  const centreY =
    (rect.top + rect.height / 2 - frame.rect.top) / frame.scale - clientTop + scrollTop;

  return {
    left: centreX - width / 2,
    top: centreY - height / 2,
    right: centreX + width / 2,
    bottom: centreY + height / 2,
  };
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export type LiquidIndicatorOptions = {
  /** Matches the item the bubble sits under. */
  selected: string;
  /** Matches every item the bubble can move to. */
  item: string;
  /** Lets a pointer pick the bubble up and drop it on another item. */
  draggable?: boolean;
  /** Strength of the bubble's stretch and lift. */
  deformation?: number;
};

/**
 * Moves a selection bubble between items like a drop of liquid glass: it
 * lifts, stretches toward the new item and lands with a little bounce.
 * Labels stay fixed while the bubble moves. CSS places the bubble until this
 * runs. Reduced motion jumps instead.
 */
export function useLiquidIndicator(
  rootRef: RefObject<HTMLElement | null>,
  indicatorRef: RefObject<HTMLElement | null>,
  { selected, item, draggable = false, deformation = 1 }: LiquidIndicatorOptions,
) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    const indicator = indicatorRef.current;

    if (!root || !indicator) return;

    const edges: Record<Edge, Spring> = {
      left: createSpring(...EVEN, 0, 0.05),
      top: createSpring(...EVEN, 0, 0.05),
      right: createSpring(...EVEN, 0, 0.05),
      bottom: createSpring(...EVEN, 0, 0.05),
    };

    const lift = createSpring(0.22, 0.2, 0);
    let items: HTMLElement[] = [];
    let centres: number[] = [];
    let room = 0;
    let placed = false;
    let held: Element | null = null;
    let drag: { pointer: number; startX: number; offset: number; active: boolean } | null = null;

    const frameOf = () =>
      indicator.offsetParent instanceof HTMLElement ? indicator.offsetParent : root;

    const paint = () => {
      const width = edges.right.value - edges.left.value;
      const height = edges.bottom.value - edges.top.value;
      const restWidth = Math.max(edges.right.target - edges.left.target, 1);
      const restHeight = Math.max(edges.bottom.target - edges.top.target, 1);
      // A stretched drop keeps its volume, so it thins across its travel.
      const thinY = clamp(1 / Math.sqrt(Math.max(width / restWidth, 1)), 0.8, 1);
      const thinX = clamp(1 / Math.sqrt(Math.max(height / restHeight, 1)), 0.8, 1);
      // A spring that rings past rest must not lift the bubble below its resting size.
      const raised = Math.max(lift.value, 0) * deformation;
      const swell = raised * Math.min(room, SWELL);
      const drawnWidth = restWidth + (width * thinX - restWidth) * deformation + swell * 2;
      const drawnHeight = restHeight + (height * thinY - restHeight) * deformation + swell * 2;
      const centreX = (edges.left.value + edges.right.value) / 2;
      const centreY = (edges.top.value + edges.bottom.value) / 2;

      indicator.style.translate = `${centreX - drawnWidth / 2}px ${centreY - drawnHeight / 2}px`;
      indicator.style.width = `${drawnWidth}px`;
      indicator.style.height = `${drawnHeight}px`;
      indicator.style.setProperty('--lg-lift', raised.toFixed(3));
    };

    const step = (dt: number) => {
      const reduced = motionReduced();
      const travelling = EDGES.some((edge) => Math.abs(edges[edge].velocity) > TRAVEL_SPEED);
      const pressed = held?.matches(selected) ?? false;
      const woken = held !== null ? ANTICIPATION : 0;

      lift.target = reduced ? 0 : pressed || drag?.active || travelling ? 1 : woken;
      let moving = false;

      for (const edge of EDGES) {
        moving = stepSpring(edges[edge], dt, reduced) || moving;
      }

      moving = stepSpring(lift, dt, reduced) || moving;
      paint();

      return moving;
    };

    const loop = createFrameLoop(step);

    const current = (): Box => ({
      left: edges.left.value,
      top: edges.top.value,
      right: edges.right.value,
      bottom: edges.bottom.value,
    });

    // Tunes each axis so the edge in front leads and the one behind trails.
    const lean = (from: Box, to: Box, lead: Feel, trail: Feel) => {
      const axes: [Edge, Edge, number][] = [
        ['left', 'right', (to.left + to.right - from.left - from.right) / 2],
        ['top', 'bottom', (to.top + to.bottom - from.top - from.bottom) / 2],
      ];

      for (const [start, end, distance] of axes) {
        if (Math.abs(distance) < 1) {
          retuneSpring(edges[start], ...EVEN);
          retuneSpring(edges[end], ...EVEN);
        } else {
          retuneSpring(edges[distance > 0 ? end : start], ...lead);
          retuneSpring(edges[distance > 0 ? start : end], ...trail);
        }
      }
    };

    const aim = (to: Box, jump: boolean) => {
      for (const edge of EDGES) {
        edges[edge].target = to[edge];

        if (jump) {
          edges[edge].value = to[edge];
          edges[edge].velocity = 0;
        }
      }
    };

    const sync = (snap: boolean) => {
      const frame = measureFrame(frameOf());
      const target = root.querySelector<HTMLElement>(selected);

      items = Array.from(root.querySelectorAll<HTMLElement>(item));

      const boxes = items.map((element) => boxWithin(element, frame));

      centres = boxes.map((box) => (box.left + box.right) / 2);

      // A pointer owns the bubble until it lets go.
      if (drag?.active) return;

      if (!target) {
        indicator.setAttribute('data-lg-empty', '');
        placed = false;

        return;
      }

      const box = boxWithin(target, frame);
      const jump = snap || !placed || motionReduced();

      indicator.removeAttribute('data-lg-empty');
      room = Math.max(0, Math.min(box.top, frame.element.clientHeight - box.bottom));

      if (!jump) lean(current(), box, LEAD, TRAIL);

      aim(box, jump);
      placed = true;

      if (jump) paint();

      loop.start();
    };

    const toLocalX = (clientX: number) => {
      const frame = measureFrame(frameOf());

      return (
        (clientX - frame.rect.left) / frame.scale -
        frame.element.clientLeft +
        frame.element.scrollLeft
      );
    };

    const follow = (clientX: number) => {
      if (!drag || centres.length === 0) return;

      const width = edges.right.target - edges.left.target;

      const centre = clamp(
        toLocalX(clientX) - drag.offset,
        Math.min(...centres),
        Math.max(...centres),
      );

      const from = current();
      const to = { ...from, left: centre - width / 2, right: centre + width / 2 };

      lean(from, to, DRAG_LEAD, DRAG_TRAIL);
      aim({ ...to, top: edges.top.target, bottom: edges.bottom.target }, motionReduced());
      loop.start();
    };

    // Drops a dragged bubble on the nearest enabled item, or puts it back.
    const release = (commit: boolean) => {
      if (!drag) return;

      const { active, pointer } = drag;

      drag = null;
      held = null;
      root.removeAttribute('data-lg-dragging');

      if (root.hasPointerCapture(pointer)) root.releasePointerCapture(pointer);

      if (active && commit) {
        const centre = (edges.left.target + edges.right.target) / 2;
        let nearest = -1;

        centres.forEach((value, index) => {
          if (items[index].matches('[data-disabled]')) return;

          if (nearest < 0 || Math.abs(value - centre) < Math.abs(centres[nearest] - centre))
            nearest = index;
        });

        if (nearest >= 0) {
          if (root.contains(document.activeElement)) items[nearest].focus({ preventScroll: true });

          items[nearest].click();
        }
      }

      sync(false);
    };

    const onPointerDown = (event: PointerEvent) => {
      if (!event.isPrimary || event.button !== 0 || !(event.target instanceof Element)) return;

      const pressed = event.target.closest(item);

      if (
        !(pressed instanceof HTMLElement) ||
        !root.contains(pressed) ||
        pressed.matches('[data-disabled]')
      )
        return;

      held = pressed;
      loop.start();

      if (!draggable || !pressed.matches(selected)) return;

      const centre = (edges.left.target + edges.right.target) / 2;

      drag = {
        pointer: event.pointerId,
        startX: event.clientX,
        offset: toLocalX(event.clientX) - centre,
        active: false,
      };
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!drag || event.pointerId !== drag.pointer) return;

      if (!drag.active) {
        if (Math.abs(event.clientX - drag.startX) < DRAG_THRESHOLD) return;

        drag.active = true;
        root.setAttribute('data-lg-dragging', '');
        root.setPointerCapture(event.pointerId);
      }

      follow(event.clientX);
    };

    // Listens on the window, so a press that ends outside the control still ends.
    const onPointerUp = (event: PointerEvent) => {
      if (drag && event.pointerId === drag.pointer) {
        release(event.type === 'pointerup');

        return;
      }

      if (!held) return;

      held = null;
      loop.start();
    };

    // Taking the pointer from a touched item fires this on the item; only the
    // root losing it ends a drag.
    const onLostCapture = (event: PointerEvent) => {
      if (event.target === root && drag?.active && event.pointerId === drag.pointer) release(false);
    };

    const resizes = new ResizeObserver(() => sync(true));

    const observeSizes = () => {
      resizes.disconnect();
      resizes.observe(root);
      root.querySelectorAll<HTMLElement>(item).forEach((element) => resizes.observe(element));
    };

    const mutations = new MutationObserver((records) => {
      if (records.some((record) => record.type === 'childList')) observeSizes();

      sync(false);
    });

    root.setAttribute('data-lg-indicator', 'ready');
    sync(true);
    observeSizes();
    mutations.observe(root, {
      attributes: true,
      attributeFilter: ['data-state', 'data-disabled'],
      childList: true,
      subtree: true,
    });
    root.addEventListener('pointerdown', onPointerDown);
    root.addEventListener('pointermove', onPointerMove);
    root.addEventListener('lostpointercapture', onLostCapture);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);

    return () => {
      loop.stop();
      mutations.disconnect();
      resizes.disconnect();
      root.removeEventListener('pointerdown', onPointerDown);
      root.removeEventListener('pointermove', onPointerMove);
      root.removeEventListener('lostpointercapture', onLostCapture);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
      root.removeAttribute('data-lg-indicator');
      root.removeAttribute('data-lg-dragging');
      indicator.removeAttribute('data-lg-empty');
      ['translate', 'width', 'height', '--lg-lift'].forEach((property) =>
        indicator.style.removeProperty(property),
      );
    };
  }, [deformation, draggable, indicatorRef, item, rootRef, selected]);
}
