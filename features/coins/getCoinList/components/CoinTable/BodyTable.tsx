import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { TCoins, THeader } from "@/entities/coin";

type TProps = {
  coins: TCoins;
  header: THeader;
};

export default function BodyTable({ coins, header }: TProps) {
  return coins.map((item, coinIndex) => (
    <TableBody>
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
    </TableBody>
  ));
}
