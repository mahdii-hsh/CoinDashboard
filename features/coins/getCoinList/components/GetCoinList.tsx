import React from "react";
import CoinTable from "./CoinTable/CoinTable";

export default function GetCoinList() {
  return (
    <div>
      GetCoinList
      <CoinTable
        headerBase={[
          {
            headerItemTitle: "id",
            headerItemSymbol: "#",
            headerItemView: true,
          },
          {
            headerItemTitle: "name",
            headerItemSymbol: "Coin",
            headerItemView: true,
            headerItemSize: 1,
          },
          {
            headerItemTitle: "current_price",
            headerItemSymbol: "Price",
            headerItemView: true,
            headerItemSize: 1,
          },
          {
            headerItemTitle: "price_change_percentage_1h_in_currency",
            headerItemSymbol: "1h",

            headerItemView: true,
          },
          {
            headerItemTitle: "price_change_percentage_24h_in_currency",
            headerItemSymbol: "24h",

            headerItemView: true,
          },
          {
            headerItemTitle: "price_change_percentage_7d_in_currency",
            headerItemSymbol: "7d",

            headerItemView: true,
          },
          {
            headerItemTitle: "market_cap",
            headerItemSymbol: "Market Cap",

            headerItemView: true,
          },
          {
            headerItemTitle: "total_volume",
            headerItemSymbol: "Total Volume",
            headerItemView: true,
          },
        ]}
      />
    </div>
  );
}
