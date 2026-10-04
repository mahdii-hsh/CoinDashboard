"use client";

import React, { useEffect } from "react";
import { useHeader } from "../../hooks/useHeader";
import HeaderTable from "./HeaderTable";
import BodyTable from "./BodyTable";
import { TCoins, THeaderBase } from "@/entities/coin";
import { useQuery } from "@tanstack/react-query";
import { coinQueryOption } from "../../api/queries";

type TProps = {
  headerBase: THeaderBase;
};
export default function CoinTable({ headerBase }: TProps) {
  const { header, initHeader } = useHeader();
  const { data: coins, isLoading } = useQuery(coinQueryOption);
  useEffect(() => {
    initHeader(headerBase);
  }, []);

  return (
    <table className="w-full table-fixed mt-4 ">
      <HeaderTable header={header} />
      {isLoading ? <>isloding</> : <BodyTable coins={coins} header={header} />}
    </table>
  );
}
