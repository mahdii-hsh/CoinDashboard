import { Users, ThumbsDown, ThumbsUp } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TCoinDetails } from "@/entities/coin";


type Props = {
  coin: TCoinDetails;
};

export function Community({ coin }: Props) {
  const up = coin.sentiment_votes_up_percentage;
  const down = coin.sentiment_votes_down_percentage;

  return (
    <Card className="rounded-3xl border-white/70 bg-white/80 shadow-sm">
      <CardHeader>
        <CardTitle>Community Sentiment</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="flex justify-between text-sm">
              <div className="flex items-center gap-2">
                <ThumbsUp className="size-4 text-emerald-600" />
                Positive
              </div>

              <span className="font-semibold">{up.toFixed(1)}%</span>
            </div>

            <Progress value={up} className="mt-3" />
          </div>

          <div>
            <div className="flex justify-between text-sm">
              <div className="flex items-center gap-2">
                <ThumbsDown className="size-4 text-red-500" />
                Negative
              </div>

              <span className="font-semibold">{down.toFixed(1)}%</span>
            </div>

            <Progress value={down} className="mt-3" />
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
          <div className="flex size-10 items-center justify-center rounded-xl bg-white">
            <Users className="size-5" />
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Watchlist users</p>

            <p className="font-semibold">
              {coin.watchlist_portfolio_users.toLocaleString()}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
