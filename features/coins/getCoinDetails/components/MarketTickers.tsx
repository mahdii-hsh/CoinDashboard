import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import type { TCoinDetails } from "@/entities/coin";

type Props = {
  tickers: TCoinDetails["tickers"];
};

export function MarketTickers({ tickers }: Props) {
  return (
    <Card className="overflow-hidden rounded-3xl border-white/70 bg-white/80 shadow-sm">
      <CardHeader>
        <CardTitle>Markets</CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Exchange</TableHead>
              <TableHead>Pair</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Volume</TableHead>
              <TableHead>Spread</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {tickers.map((ticker) => (
              <TableRow key={`${ticker.market.identifier}-${ticker.target}`}>
                <TableCell className="font-medium">
                  {ticker.market.name}
                </TableCell>

                <TableCell>
                  {ticker.base} / {ticker.target}
                </TableCell>

                <TableCell>${ticker.last.toLocaleString()}</TableCell>

                <TableCell>
                  ${ticker.converted_volume.usd.toLocaleString()}
                </TableCell>

                <TableCell>
                  {ticker.bid_ask_spread_percentage && ticker.bid_ask_spread_percentage.toFixed(3)}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
