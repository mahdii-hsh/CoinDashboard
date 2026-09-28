import { TCoins } from "@/entities/coin";
import React from "react";
import { THeader } from "../../types/headerTypes";
import CoinName from "./Cells/CoinName";
import CoinHigh24 from "./Cells/CoinHigh24";

type TProps = {
  coins: TCoins;
  header: THeader;
};
export default function BodyTable({ coins, header }: TProps) {
  return coins.map((item) => (
    <tr>
      {header.map((cell) => (
        <td>
          {cell.title === "name" ? (
            <CoinName data={item[cell.title]} />
          ) : (
            <CoinHigh24 />
          )}
        </td>
      ))}
    </tr>
  ));
}
