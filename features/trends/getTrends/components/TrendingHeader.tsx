import { Flame } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function TrendingHeader() {
  return (
    <div className="flex items-end justify-between">
      <div>
        <div className="flex items-center gap-2">
          <Flame className="size-5 text-orange-500" />

          <h2 className="text-xl font-semibold tracking-tight">
            Trending
          </h2>
        </div>

        <p className="mt-1 text-sm text-muted-foreground">
          What&apos;s trending in the last 24 hours
        </p>
      </div>

      <Badge variant="secondary" className="rounded-full">
        Last 24h
      </Badge>
    </div>
  );
}