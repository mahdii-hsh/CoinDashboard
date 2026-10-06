import { Skeleton } from "@/components/ui/skeleton";

export function TrendingCoinItemSkeleton() {
  return (
    <div className="flex items-center gap-3 rounded-xl px-2 py-2.5">
      {/* Rank */}
      <Skeleton className="h-4 w-4" />

      {/* Coin image */}
      <Skeleton className="h-8 w-8 shrink-0 rounded-full" />

      {/* Name + symbol */}
      <div className="min-w-0 flex-1 space-y-1.5">
        <Skeleton className="h-4 w-24 max-w-full" />
        <Skeleton className="h-3 w-12" />
      </div>

      {/* Price + change */}
      <div className="flex flex-col items-end gap-1.5">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-3 w-12" />
      </div>
    </div>
  );
}
