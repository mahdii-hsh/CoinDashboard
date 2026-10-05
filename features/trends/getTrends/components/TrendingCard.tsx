"use client";

import { ChevronDown, Coins, Layers3, Palette } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  title: string;
  type: "coin" | "nft" | "category";
  children: React.ReactNode;
};

const icons = {
  coin: Coins,
  nft: Palette,
  category: Layers3,
};

export function TrendingCard({ title, type, children }: Props) {
  const [showMore, setShowMore] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const Icon = icons[type];

  useEffect(() => {
    const root = scrollRef.current;
    const sentinel = sentinelRef.current;

    if (!root || !sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowMore(!entry.isIntersecting);
      },
      {
        root,
        threshold: 0.1,
      },
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  return (
    <Card className="overflow-hidden rounded-2xl border-white/60 bg-white/70 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-sm">
          <span className="flex size-8 items-center justify-center rounded-lg bg-black/[0.04]">
            <Icon className="size-4" />
          </span>

          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="relative">
        <div
          ref={scrollRef}
          className="h-[310px] overflow-y-auto scrollbar-none"
        >
          <div className="space-y-1">
            {children}

            {/* Sentinel */}
            <div ref={sentinelRef} aria-hidden="true" className="h-4" />
          </div>
        </div>

        {showMore && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex h-20 items-end justify-center bg-gradient-to-t from-white via-white/80 to-transparent pb-3">
            <div className="flex items-center gap-1 rounded-full bg-white/80 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-md">
              <span>More</span>
              <ChevronDown className="size-3.5 animate-bounce" />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
