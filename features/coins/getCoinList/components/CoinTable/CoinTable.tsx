"use client";

import React, { useEffect } from "react";
import { useHeader } from "../../hooks/useHeader";
import HeaderTable from "./HeaderTable";
import BodyTable from "./BodyTable";
import { TCoins, THeaderBase } from "@/entities/coin";
import { useQuery } from "@tanstack/react-query";
import { coinQueryOption } from "../../api/queries";
import HeaderVisibility from "./HeaderVisibility";

type TProps = {
  headerBase: THeaderBase;
};
export default function CoinTable({ headerBase }: TProps) {
  const { header, initHeader, toggleView } = useHeader();
  const { data: coins, isLoading } = useQuery(coinQueryOption);
  useEffect(() => {
    initHeader(headerBase);
  }, []);

  return (
    <>
      <div className="w-full flex items-center justify-between  px-16">
        <div>fliter</div>
        <HeaderVisibility header={header} onToggle={toggleView} />
      </div>
      <table className="w-full table-fixed mt-4 ">
        <HeaderTable header={header} />
        {isLoading ? (
          <p>isloding</p>
        ) : (
          <BodyTable coins={coins} header={header} />
        )}
      </table>
    </>
  );
}
