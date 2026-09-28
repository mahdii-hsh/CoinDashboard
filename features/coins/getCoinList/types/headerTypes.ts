import { TCoinItem } from "@/entities/coin";

type THeaderItem = {
  title:
    | "name"
    | "high_24h"
    | "id"
    | "current_price"
    | "price_change_percentage_1h_in_currency"
    | "price_change_percentage_24h_in_currency"
    | "price_change_percentage_7d_in_currency"
    | "market_cap"
    | "total_volume";
  symbol: string;
  size?: number;
  view: boolean;
  render: (...args: any) => React.ReactElement;
};

export type THeader = THeaderItem[];

type THeaderBaseItem = {
  headerItemSymbol?: THeaderItem["symbol"];
  headerItemTitle: THeaderItem["title"];
  headerItemSize?: THeaderItem["size"];
  headerItemView: THeaderItem["view"];
  headerItemRenderCell: THeaderItem["render"];
};

export type THeaderBase = THeaderBaseItem[];
