import { TCoins } from "@/entities/coin";
import React from "react";
import { THeader } from "../../types/headerTypes";
import CoinName from "./Cells/CoinName";
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
    <tr key={item.id}>
      {header.map((cell) => (
        <td key={cell.id}>
          {cell.title === "name" ? (
            <CoinName
              name={item["name"]}
              image={item["image"]}
              symbol={item["symbol"]}
            />
          ) : cell.title === "high_24h" ? (
            <CoinHigh24 />
          ) : cell.title === "id" ? (
            <CoinID id={coinIndex} />
          ) : cell.title === "current_price" ? (
            <CoinCurrPrice price={item[cell.title]} />
          ) : cell.title === "price_change_percentage_1h_in_currency" ? (
            <CoinChangePrice1h value={item[cell.title]} />
          ) : cell.title === "price_change_percentage_24h_in_currency" ? (
            <CoinChangePrice1h value={item[cell.title]} />
          ) : cell.title === "price_change_percentage_7d_in_currency" ? (
            <CoinChangePrice1h value={item[cell.title]} />
          ) : cell.title === "market_cap" ? (
            <CoinCurrPrice price={item[cell.title]} />
          ) : cell.title === "total_volume" ? (
            <CoinCurrPrice price={item[cell.title]} />
          ) : (
            <></>
          )}
        </td>
      ))}
    </tr>
  ));
}
