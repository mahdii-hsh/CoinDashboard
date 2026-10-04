import { useMemo, useState } from "react";
import type { TCoinItem, TCoins } from "@/entities/coin";

export type CoinFilterValue = {
  search: string;
  minPrice: string;
  maxPrice: string;
  minMarketCap: string;
};

const initialFilter: CoinFilterValue = {
  search: "",
  minPrice: "",
  maxPrice: "",
  minMarketCap: "",
};

export function useCoinFilter() {
  const [data, setData] = useState<TCoins>([]);
  const [filter, setFilter] = useState<CoinFilterValue>(initialFilter);

  const initData = (coins: TCoins) => {
    setData(coins);
  };

  const resetFilter = () => {
    setFilter(initialFilter);
  };

  const filteredData = useMemo(() => {
    return data.filter((coin) => {
      const search = filter.search.toLowerCase();

      const matchesSearch =
        !search ||
        coin.name.toLowerCase().includes(search) ||
        coin.name.toUpperCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search) ||
        coin.symbol.toUpperCase().includes(search);

      const matchesMinPrice =
        !filter.minPrice || coin.current_price >= Number(filter.minPrice);

      const matchesMaxPrice =
        !filter.maxPrice || coin.current_price <= Number(filter.maxPrice);

      const matchesMarketCap =
        !filter.minMarketCap || coin.market_cap >= Number(filter.minMarketCap);

      return (
        matchesSearch &&
        // matchesSymbol &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesMarketCap
      );
    });
  }, [data, filter]);

  return {
    data: filteredData,
    filter,
    setFilter,
    initData,
    resetFilter,
  };
}
