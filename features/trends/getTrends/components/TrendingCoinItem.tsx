import Image from "next/image";

import { TrendingChange } from "./TrendingChange";
import { TTrends } from "@/entities/trending";

type Props = {
  coin: TTrends["coins"][number]["item"];
  rank: number;
};

export function TrendingCoinItem({ coin, rank }: Props) {
  return (
    <div
      className="
        group flex items-center gap-3
        rounded-xl px-2 py-2.5
        transition-colors
        hover:bg-black/[0.03]
      "
    >
      <span className="w-4 text-xs text-muted-foreground">{rank}</span>

      <Image
        src={coin.small}
        alt={coin.name}
        width={32}
        height={32}
        className="rounded-full"
      />

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">{coin.name}</p>

        <p className="text-xs uppercase text-muted-foreground">{coin.symbol}</p>
      </div>

      <div className="text-right">
        <p>${coin.data?.price ?? "N/A"}</p>
        <span className="flex justify-end">
        <TrendingChange value={coin.data?.price_change_percentage_24h?.usd} />

        </span>
      </div>
    </div>
  );
}
