import React from "react";
import CoinTable from "./CoinTable/CoinTable";

export default function GetCoinList() {
  return (
    <div>
      GetCoinList
      <CoinTable
        headerBase={[
          { headerItemTitle: "#", headerItemView: true },
          { headerItemTitle: "name", headerItemView: true, headerItemSize: 1 },
        ]}
      />
    </div>
  );
}
