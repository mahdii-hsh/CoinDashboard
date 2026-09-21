import Table from "@/shared/components/Table";
import React from "react";

export default function GetCoinList() {
  return (
    <div>
      GetCoinList
      <Table
        headerBase={[
          { headerItemTitle: "#", headerItemView: true },
          { headerItemTitle: "name", headerItemView: true, headerItemSize: 1 },
        ]}
      />
    </div>
  );
}
