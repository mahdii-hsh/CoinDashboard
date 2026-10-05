"use client";

import { TrendingHeader } from "./TrendingHeader";
import { TrendingGrid } from "./TrendingGrid";
import { useQuery } from "@tanstack/react-query";
import { trendsQueryOption } from "../api/queries";
import { useEffect } from "react";

export default function Trending() {
  const { data, isLoading, isSuccess } = useQuery(trendsQueryOption);

  useEffect(() => {
    console.log("ADS", data);
  }, [isSuccess]);

  return (
    <section className="space-y-5">
      <TrendingHeader />

      {isLoading && <p>isloading</p>}
      {isSuccess && (
        <TrendingGrid
          coins={data?.coins}
          nfts={data?.nfts}
          categories={data?.categories}
        />
      )}
    </section>
  );
}
