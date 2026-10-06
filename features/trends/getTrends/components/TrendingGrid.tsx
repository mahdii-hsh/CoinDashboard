import type { TTrends } from "@/entities/trending";

import { TrendingCard } from "./TrendingCard";
import { TrendingCoinItem } from "./CoinItem/TrendingCoinItem";
import { TrendingCategoryItem } from "./CategoryItem/TrendingCategoryItem";
import { TrendingCoinItemSkeleton } from "./CoinItem/TrendingCoinItemSkeleton";
import { TrendingNFTItemSkeleton } from "./NFTSItem/TrendingNFTItemSkeleton";
import { TrendingCategoryItemSkeleton } from "./CategoryItem/TrendingCategoryItemSkeleton";
import { TrendingNFTItem } from "./NFTSItem/TrendingNFTItem";

type Props = {
  isLoading: boolean;
  coins: TTrends["coins"] | undefined;
  nfts: TTrends["nfts"] | undefined;
  categories: TTrends["categories"] | undefined;
};

export function TrendingGrid({
  isLoading = true,
  coins,
  nfts,
  categories,
}: Props) {
  return (
    <div className="grid items-start gap-4 lg:grid-cols-3">
      <TrendingCard title="Trending Coins" type="coin">
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <TrendingCoinItemSkeleton key={index} />
            ))
          : coins?.map(({ item }, index) => (
              <TrendingCoinItem key={item.id} coin={item} rank={index + 1} />
            ))}
      </TrendingCard>
      <TrendingCard title="Trending NFTs" type="nft">
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <TrendingNFTItemSkeleton key={index} />
            ))
          : nfts?.map((nft, index) => (
              <TrendingNFTItem key={nft.id} nft={nft} rank={index + 1} />
            ))}
      </TrendingCard>
      <TrendingCard title="Trending Categories" type="category">
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <TrendingCategoryItemSkeleton key={index} />
            ))
          : categories?.map((category, index) => (
              <TrendingCategoryItem
                key={category.id}
                category={category}
                rank={index + 1}
              />
            ))}
      </TrendingCard>
    </div>
  );
}
