// TrendingNFTItem.tsx

import Image from "next/image";

import { TTrends } from "@/entities/trending";
import { TrendingChange } from "../TrendingChange";

type Props = {
  nft: TTrends["nfts"][number];
  rank: number;
};

export function TrendingNFTItem({ nft, rank }: Props) {
  return (
    <div className="flex items-center gap-3 rounded-xl px-2 py-2.5 hover:bg-black/[0.03]">
      <span className="w-4 text-xs text-muted-foreground">
        {rank}
      </span>

      <Image
        src={nft.thumb}
        alt={nft.name}
        width={32}
        height={32}
        className="rounded-lg object-cover"
      />

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">
          {nft.name}
        </p>

        <p className="text-xs text-muted-foreground">
          {nft.symbol}
        </p>
      </div>

      <div className="text-start">
        <p className="text-sm font-medium">
          {nft.floor_price_in_native_currency}{" "}
          {nft.native_currency_symbol.toUpperCase()}
        </p>
        <span className="flex justify-end">
        <TrendingChange
          value={nft.floor_price_24h_percentage_change}
        />

        </span>
      </div>
    </div>
  );
}