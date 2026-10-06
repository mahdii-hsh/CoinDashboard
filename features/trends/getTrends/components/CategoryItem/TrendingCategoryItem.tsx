// TrendingCategoryItem.tsx

import Image from "next/image";

import { TrendingChange } from "../TrendingChange";
import { TTrends } from "@/entities/trending";

type Props = {
  category: TTrends["categories"][number];
  rank: number;
};

export function TrendingCategoryItem({ category, rank }: Props) {
  return (
    <div className="flex items-center gap-3 rounded-xl px-2 py-2.5 hover:bg-black/[0.03]">
      <span className="w-4 text-xs text-muted-foreground">{rank}</span>

      <div className="flex -space-x-2">
        {category.top_3_coins_images.slice(0, 3).map((image, index) => (
          <Image
            key={index}
            src={image}
            alt=""
            width={30}
            height={30}
            className="rounded-full border-2 border-white"
          />
        ))}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">{category.name}</p>

        <p className="text-xs text-muted-foreground">
          {category.coins_count} coins
        </p>
      </div>

      <TrendingChange
        value={category.data.market_cap_change_percentage_24h.usd}
      />
    </div>
  );
}
