import { TTrends } from "@/entities/trending";

export type TTrendsQueryDTO = {
  coins: TTrends["coins"];
  nfts: TTrends["nfts"];
  categories: TTrends["categories"];
};
