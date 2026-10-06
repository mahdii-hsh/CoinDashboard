"use client";

import React from "react";
import CoinTable from "./CoinTable/CoinTable";
import { headerBase } from "../model/constants/headerBase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GetCoinList() {
  return (
    <Card className="overflow-hidden rounded-3xl border-white/70 bg-white/80 shadow-sm mt-8">
      <CardHeader>
        <CardTitle>Market Coins</CardTitle>
      </CardHeader>
      <CardContent>
        <CoinTable headerBase={headerBase} />
      </CardContent>
    </Card>
  );
}
