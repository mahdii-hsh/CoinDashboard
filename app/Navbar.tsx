"use client";

import Link from "next/link";

import { GlassHeader } from "@/components/glassyui/glass-header";
import { GlassButton } from "@/components/glassyui/glass-button";

export function Navbar() {
  return (
    <GlassHeader
      condenseOnScroll
      className="text-slate-950"
      brand={
        <Link
          href="/"
          className="
            text-lg
            font-semibold
            tracking-tight
            text-slate-950
          "
        >
          TaskFlow
        </Link>
      }
      actions={
        <GlassButton
          asChild
          size="sm"
          variant="ghost"
          className="
            rounded-full
            text-slate-950
            hover:bg-black/5
            hover:text-slate-950
          "
        >
          <Link href="/login">Get Started</Link>
        </GlassButton>
      }
    >
      <Link
        href="/"
        className="
          text-slate-950
          transition-colors
          hover:text-slate-600
        "
      >
        Home
      </Link>

      <Link
        href="/projects"
        className="
          text-slate-950
          transition-colors
          hover:text-slate-600
        "
      >
        Projects
      </Link>

      <Link
        href="/features"
        className="
          text-slate-950
          transition-colors
          hover:text-slate-600
        "
      >
        Features
      </Link>

      <Link
        href="/pricing"
        className="
          text-slate-950
          transition-colors
          hover:text-slate-600
        "
      >
        Pricing
      </Link>

      <Link
        href="/docs"
        className="
          text-slate-950
          transition-colors
          hover:text-slate-600
        "
      >
        Docs
      </Link>
    </GlassHeader>
  );
}
