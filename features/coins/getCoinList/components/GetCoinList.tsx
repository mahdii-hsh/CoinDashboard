"use client";

import React from "react";
import CoinTable from "./CoinTable/CoinTable";
import { headerBase } from "../model/constants/headerBase";

export default function GetCoinList() {
  return (
    <div>

      <CoinTable
        headerBase={headerBase}
      />
    </div>
  );
}
