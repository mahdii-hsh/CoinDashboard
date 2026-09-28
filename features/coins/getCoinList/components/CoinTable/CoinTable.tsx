"use client";

import React, { useEffect } from "react";
import { THeader, THeaderBase } from "../../types/headerTypes";
import { useHeader } from "../../hooks/useHeader";
import HeaderTable from "./HeaderTable";
import BodyTable from "./BodyTable";
import { TCoins } from "@/entities/coin";

type TProps = {
  headerBase: THeaderBase;
};
const coins : TCoins = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    image:
      "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    current_price: 77671,
    market_cap: 1555886872303,
    market_cap_rank: 1,
    fully_diluted_valuation: 1555914058873,
    total_volume: 33235034316,
    high_24h: 78419,
    low_24h: 76696,
    price_change_24h: -747.3360347281705,
    price_change_percentage_24h: -0.95302,
    market_cap_change_24h: -15184401491.513184,
    market_cap_change_percentage_24h: -0.9665,
    circulating_supply: 20030493,
    total_supply: 20030843,
    max_supply: 21000000,
    ath: 126080,
    ath_change_percentage: -38.39571,
    ath_date: "2025-10-06T18:57:42.558Z",
    atl: 67.81,
    atl_change_percentage: 114443.23093,
    atl_date: "2013-07-06T00:00:00.000Z",
    roi: null,
    last_updated: "2026-05-18T12:49:21.599Z",
    market_cap_rank_with_rehypothecated: 1,
    sparkline_in_7d: {
      price: [81045.84776489827, 81001.73089268175, 80898.20817826076],
    },
    price_change_percentage_1h_in_currency: 0.5823392426906319,
    price_change_percentage_24h_in_currency: -0.9530164743774191,
    price_change_percentage_7d_in_currency: -4.042267423689584,
    price_change_percentage_14d_in_currency: -1.5720857443461431,
    price_change_percentage_30d_in_currency: 1.9453890367549207,
    price_change_percentage_200d_in_currency: -29.452371850925864,
    price_change_percentage_1y_in_currency: -25.214612207475373,
  },
];
export default function CoinTable({ headerBase }: TProps) {
  const { header, initHeader } = useHeader();

  useEffect(() => {
    initHeader(headerBase);
  }, []);

  return (
    <table>
      <HeaderTable header={header} />
      <BodyTable coins={coins} header={header} />
    </table>
  );
}
