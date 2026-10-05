import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TCoinDetails } from "@/entities/coin";


type Props = {
  coin: TCoinDetails;
};

export function MarketPerformance({ coin }: Props) {
  const data = [
    ["1H", coin.market_data.price_change_percentage_1h_in_currency.usd],
    ["24H", coin.market_data.price_change_percentage_24h],
    ["7D", coin.market_data.price_change_percentage_7d],
    ["14D", coin.market_data.price_change_percentage_14d],
    ["30D", coin.market_data.price_change_percentage_30d],
    ["60D", coin.market_data.price_change_percentage_60d],
    ["200D", coin.market_data.price_change_percentage_200d],
    ["1Y", coin.market_data.price_change_percentage_1y],
  ];

  return (
    <Card className="rounded-3xl border-white/70 bg-white/80 shadow-sm">
      <CardHeader>
        <CardTitle>Market Performance</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-1">
          {data.map(([period, value]) => {
            const change = Number(value);
            const positive = change >= 0;

            return (
              <div
                key={period}
                className="flex items-center justify-between rounded-xl px-3 py-3 hover:bg-slate-50"
              >
                <span className="text-sm text-muted-foreground">{period}</span>

                <span
                  className={
                    positive
                      ? "font-medium text-emerald-600"
                      : "font-medium text-red-500"
                  }
                >
                  {positive ? "+" : ""}
                  {change.toFixed(2)}%
                </span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
