import { TCoins, THeader } from "@/entities/coin";

type TProps = {
  coins: TCoins;
  header: THeader;
};

export default function BodyTable({ coins, header }: TProps) {
  return coins.map((item, coinIndex) => (
    <tbody>
      <tr key={item.id} className="hover:bg-slate-100 h-20">
        {header.map(
          (cell) =>
            cell.view && (
              <td key={cell.title}>{cell.render(item, coinIndex)}</td>
            ),
        )}
      </tr>
    </tbody>
  ));
}
