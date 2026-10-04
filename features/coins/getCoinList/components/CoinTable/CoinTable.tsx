"use client";

import React, { useEffect, useState } from "react";
import { useHeader } from "../../hooks/useHeader";
import HeaderTable from "./HeaderTable";
import BodyTable from "./BodyTable";
import { TCoins, THeaderBase } from "@/entities/coin";
import { useQuery } from "@tanstack/react-query";
import { coinQueryOption } from "../../api/queries";
import HeaderVisibility from "./HeaderVisibility";
import { useCoinFilter } from "../../hooks/useCoinFilter";
import CoinFilterBox from "./CoinFilterBox";

type TProps = {
  headerBase: THeaderBase;
};
export default function CoinTable({ headerBase }: TProps) {
  const { header, initHeader, toggleView } = useHeader();
  const { data: coins, isLoading } = useQuery(coinQueryOption);
  const {
    data: filteredCoins,
    filter,
    setFilter,
    initData,
    resetFilter,
  } = useCoinFilter();

  useEffect(() => {
    initHeader(headerBase);
  }, [headerBase]);

  useEffect(() => {
    if (coins) {
      initData(coins);
    }
  }, [coins, initData]);

  return (
    <>
      <div className="w-full flex items-center justify-between  px-16">
        <div>
          <CoinFilterBox
            value={filter}
            onChange={setFilter}
            onReset={() =>
              setFilter({
                search: "",
                minPrice: "",
                maxPrice: "",
                minMarketCap: "",
              })
            }
          />
        </div>
        <HeaderVisibility header={header} onToggle={toggleView} />
      </div>
      <table className="w-full table-fixed mt-4 ">
        <HeaderTable header={header} />
        {isLoading ? (
          <p>isloding</p>
        ) : (
          <BodyTable coins={filteredCoins} header={header} />
        )}
      </table>
    </>
  );
}
