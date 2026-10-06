import { Loader2 } from "lucide-react";

import { TableCell, TableRow } from "@/components/ui/table";

type Props = {
  colSpan: number;
};

export function BodyTableLoading({ colSpan }: Props) {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} className="h-64">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
          </div>

          <div className="text-center">
            <p className="text-sm font-medium">Loading coins</p>

            <p className="mt-1 text-xs text-muted-foreground">
              Fetching the latest market data...
            </p>
          </div>

          <div className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted-foreground/40" />
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted-foreground/40 [animation-delay:150ms]" />
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted-foreground/40 [animation-delay:300ms]" />
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
}
