"use client";

import Image from "next/image";
import { Star, TrendingUp, TrendingDown } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TCoinDetails } from "@/entities/coin";


type Props = {
  coin: TCoinDetails;
};

export function CoinHero({ coin }: Props) {
  const change = coin.market_data.price_change_percentage_24h;
  const positive = change >= 0;

  return (
    <Card className="overflow-hidden rounded-3xl border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl md:p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-slate-100">
            <Image
              src={coin.image.large}
              alt={coin.name}
              width={52}
              height={52}
              className="rounded-full"
            />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-bold tracking-tight">{coin.name}</h1>

              <Badge variant="secondary">{coin.symbol.toUpperCase()}</Badge>

              <Badge variant="outline">
                Rank #{coin.market_data.market_cap_rank}
              </Badge>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {coin.categories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="rounded-full font-normal"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 sm:items-end">
          <div className="text-3xl font-bold tracking-tight">
            ${coin.market_data.current_price.usd.toLocaleString()}
          </div>

          <div className="flex items-center gap-3">
            <span
              className={
                positive
                  ? "flex items-center gap-1 font-medium text-emerald-600"
                  : "flex items-center gap-1 font-medium text-red-500"
              }
            >
              {positive ? (
                <TrendingUp className="size-4" />
              ) : (
                <TrendingDown className="size-4" />
              )}
              {Math.abs(change).toFixed(2)}%
            </span>

            <span className="text-sm text-muted-foreground">in 24h</span>

            <Button size="icon" variant="outline" className="rounded-full">
              <Star className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
