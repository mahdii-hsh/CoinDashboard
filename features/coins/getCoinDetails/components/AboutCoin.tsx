import { ExternalLink, Globe, FileText, GitBranch } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TCoinDetails } from "@/entities/coin";

type Props = {
  coin: TCoinDetails;
};

export function AboutCoin({ coin }: Props) {
  return (
    <Card className="rounded-3xl border-white/70 bg-white/80 shadow-sm">
      <CardHeader>
        <CardTitle>About {coin.name}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div
          className="text-sm leading-7 text-muted-foreground"
          dangerouslySetInnerHTML={{
            __html: coin.description.en,
          }}
        />

        <div className="flex flex-wrap gap-2">
          {coin.categories.map((category) => (
            <Badge key={category} variant="secondary">
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Info label="Genesis Date" value={coin.genesis_date} />

          <Info
            label="Block Time"
            value={`${coin.block_time_in_minutes} minutes`}
          />

          <Info label="Hashing Algorithm" value={coin.hashing_algorithm} />

          <Info label="Symbol" value={coin.symbol.toUpperCase()} />
        </div>

        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            <a
              href={coin.links.homepage[0]}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center"
            >
              <Globe className="mr-2 size-4" />
              Website
            </a>
          </Button>

          <Button asChild variant="outline" size="sm">
            <a
              href={coin.links.whitepaper}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center"
            >
              <FileText className="mr-2 size-4" />
              Whitepaper
            </a>
          </Button>

          <Button asChild variant="outline" size="sm">
            <a
              href={coin.links.repos_url.github[0]}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center"
            >
              <GitBranch className="mr-2 size-4" />
              GitHub
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>

      <p className="mt-1 font-medium">{value}</p>
    </div>
  );
}
