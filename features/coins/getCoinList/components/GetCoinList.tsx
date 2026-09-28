import React from "react";
import CoinTable from "./CoinTable/CoinTable";

export default function GetCoinList() {
  return (
    <div>
      GetCoinList
      <CoinTable
        headerBase={[
          { headerItemTitle: "id", headerItemView: true },
          { headerItemTitle: "name", headerItemView: true, headerItemSize: 1 },
          {
            headerItemTitle: "current_price",
            headerItemView: true,
            headerItemSize: 1,
          },
          {
            headerItemTitle: "price_change_percentage_1h_in_currency",
            headerItemView: true,
          },
          {
            headerItemTitle: "price_change_percentage_24h_in_currency",
            headerItemView: true,
          },
          {
            headerItemTitle: "price_change_percentage_7d_in_currency",
            headerItemView: true,
          },
          {
            headerItemTitle: "market_cap",
            headerItemView: true,
          },
          {
            headerItemTitle: "total_volume",
            headerItemView: true,
          },
        ]}
      />
    </div>
  );
}
