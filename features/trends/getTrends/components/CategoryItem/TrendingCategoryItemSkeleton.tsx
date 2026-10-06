import { Skeleton } from "@/components/ui/skeleton";

export function TrendingCategoryItemSkeleton() {
  return (
    <div className="flex items-center gap-3 rounded-xl px-2 py-2.5">
      {/* Rank */}
      <Skeleton className="h-4 w-4" />

      {/* Coin images */}
      <div className="flex -space-x-2">
        <Skeleton className="h-8 w-8 rounded-full border-2 border-white" />
        <Skeleton className="h-8 w-8 rounded-full border-2 border-white" />
        <Skeleton className="h-8 w-8 rounded-full border-2 border-white" />
      </div>

      {/* Category name + count */}
      <div className="min-w-0 flex-1 space-y-1.5">
        <Skeleton className="h-4 w-28 max-w-full" />
        <Skeleton className="h-3 w-16" />
      </div>

      {/* Change */}
      <Skeleton className="h-4 w-12" />
    </div>
  );
}
