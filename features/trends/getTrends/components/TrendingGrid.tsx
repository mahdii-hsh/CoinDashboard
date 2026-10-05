import type {
  TTrends,
} from "@/entities/trending";

import { TrendingCard } from "./TrendingCard";
import { TrendingCoinItem } from "./TrendingCoinItem";
import { TrendingNFTItem } from "./TrendingNFTItem";
import { TrendingCategoryItem } from "./TrendingCategoryItem";

type Props = {
  coins: TTrends["coins"];
  nfts: TTrends["nfts"];
  categories: TTrends["categories"];
};

export function TrendingGrid({ coins, nfts, categories }: Props) {
  return (
    <div className="grid items-start gap-4 lg:grid-cols-3">
      <TrendingCard
        title="Trending Coins"
        type="coin"
      >
        {coins.map((item , index) => (
          <TrendingCoinItem key={item.id} coin={item} rank={index + 1} />
        ))}
      </TrendingCard>

      <TrendingCard title="Trending NFTs" type="nft">
        {nfts.map((nft, index) => (
          <TrendingNFTItem key={nft.id} nft={nft} rank={index + 1} />
        ))}
      </TrendingCard>

      <TrendingCard title="Trending Categories" type="category">
        {categories.map((category, index) => (
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
