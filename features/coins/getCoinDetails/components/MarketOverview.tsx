import { BarChart3, CircleDollarSign, Coins, Layers3 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { TCoinDetails } from "@/entities/coin";


type Props = {
  coin: TCoinDetails;
};

export function MarketOverview({ coin }: Props) {
  const data = [
    {
      label: "Market Cap",
      value: `$${coin.market_data.market_cap.usd.toLocaleString()}`,
      icon: CircleDollarSign,
    },
    {
      label: "24h Volume",
      value: `$${coin.market_data.total_volume.usd.toLocaleString()}`,
      icon: BarChart3,
    },
    {
      label: "Circulating Supply",
      value: coin.market_data.circulating_supply.toLocaleString(),
      icon: Coins,
    },
    {
      label: "FDV",
      value: `$${coin.market_data.fully_diluted_valuation.usd.toLocaleString()}`,
      icon: Layers3,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {data.map((item) => {
        const Icon = item.icon;

        return (
          <Card
            key={item.label}
            className="rounded-2xl border-white/70 bg-white/80 shadow-sm"
          >
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {item.label}
                </span>

                <div className="flex size-9 items-center justify-center rounded-xl bg-slate-100">
                  <Icon className="size-4 text-slate-600" />
                </div>
              </div>

              <p className="mt-4 truncate text-lg font-semibold">
                {item.value}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
