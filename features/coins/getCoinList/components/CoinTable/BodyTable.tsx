import { Skeleton } from "@/components/ui/skeleton";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";

import { TCoins, THeader } from "@/entities/coin";
import { BodyTableLoading } from "./BodyTableLoading";

type TProps = {
  isLoading: boolean;
  coins: TCoins;
  header: THeader;
};

export default function BodyTable({ isLoading, coins, header }: TProps) {
  return (
    <TableBody>
      {isLoading ? (
        <BodyTableLoading colSpan={header.filter((cell) => cell.view).length} />
      ) : (
        coins.map((item, coinIndex) => (
          <TableRow key={item.id}>
            {header.map(
              (cell) =>
                cell.view && (
                  <TableCell key={cell.title}>
                    {cell.render(item, coinIndex)}
                  </TableCell>
                ),
            )}
          </TableRow>
        ))
      )}
    </TableBody>
  );
}
