import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import type { TCoinDetails } from "@/entities/coin";

type Props = {
  coin: TCoinDetails;
};

export function SupplyOverview({ coin }: Props) {
  const { circulating_supply, total_supply, max_supply } = coin.market_data;

  const percentage = max_supply ? (circulating_supply / max_supply) * 100 : 0;

  return (
    <Card className="rounded-3xl border-white/70 bg-white/80 shadow-sm">
      <CardHeader>
        <CardTitle>Supply</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Circulating Supply</span>

            <span className="font-medium">{percentage.toFixed(1)}%</span>
          </div>

          <Progress value={percentage} className="mt-3" />
        </div>

        <div className="space-y-4">
          <SupplyRow label="Circulating" value={circulating_supply} />

          <SupplyRow label="Total Supply" value={total_supply} />

          <SupplyRow label="Max Supply" value={max_supply} />
        </div>
      </CardContent>
    </Card>
  );
}

function SupplyRow({ label, value }: { label: string; value: number | null }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">{label}</span>

      <span className="text-sm font-medium">
        {value ? value.toLocaleString() : "∞"}
      </span>
    </div>
  );
}
