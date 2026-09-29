import { TCoins } from "@/entities/coin";
import React from "react";
import { THeader } from "../../../../../entities/coin/model/types/headerTypes";
import CoinName from "./Cells/CoinInfo";
import CoinHigh24 from "./Cells/CoinHigh24";
import CoinID from "./Cells/CoinID";
import CoinCurrPrice from "./Cells/CoinCurrPrice";
import CoinChangePrice1h from "./Cells/CoinChangePrice";

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
