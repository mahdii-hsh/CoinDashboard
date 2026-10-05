import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

import type { TCoinDetails } from "@/entities/coin";

type Props = {
  coin: TCoinDetails;
};

export function PriceChart({ coin }: Props) {
  return (
    <Card className="rounded-3xl border-white/70 bg-white/80 shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="size-5" />
              {coin.name} Price
            </CardTitle>

            <p className="mt-1 text-sm text-muted-foreground">
              Price performance over time
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex h-[420px] items-center justify-center rounded-2xl border border-dashed bg-slate-50/70">
          <div className="text-center">
            <BarChart3 className="mx-auto size-10 text-muted-foreground/40" />

            <p className="mt-3 font-medium text-muted-foreground">
              Price chart
            </p>

            <p className="mt-1 text-sm text-muted-foreground/70">
              Chart will be added here
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
