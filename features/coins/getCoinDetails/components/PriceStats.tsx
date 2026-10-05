import { ArrowDown, ArrowUp } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { TCoinDetails } from "@/entities/coin";

type Props = {
  coin: TCoinDetails;
};

export function PriceStats({ coin }: Props) {
  const { market_data } = coin;

  return (
    <Card className="rounded-3xl border-white/70 bg-white/80 shadow-sm">
      <CardHeader>
        <CardTitle>Price Statistics</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <Stat
            label="24h High"
            value={`$${market_data.high_24h.usd.toLocaleString()}`}
            icon={<ArrowUp className="size-4 text-emerald-600" />}
          />

          <Stat
            label="24h Low"
            value={`$${market_data.low_24h.usd.toLocaleString()}`}
            icon={<ArrowDown className="size-4 text-red-500" />}
          />
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm text-muted-foreground">All-Time High</p>

          <p className="mt-1 text-xl font-semibold">
            ${market_data.ath.usd.toLocaleString()}
          </p>

          <p className="mt-1 text-sm text-red-500">
            {market_data.ath_change_percentage.usd.toFixed(2)}% from ATH
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm text-muted-foreground">All-Time Low</p>

          <p className="mt-1 text-xl font-semibold">
            ${market_data.atl.usd.toLocaleString()}
          </p>

          <p className="mt-1 text-sm text-emerald-600">
            +{market_data.atl_change_percentage.usd.toFixed(2)}% from ATL
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function Stat({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border bg-white p-4">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>

      <p className="mt-2 font-semibold">{value}</p>
    </div>
  );
}
