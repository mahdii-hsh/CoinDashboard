import React from "react";

// ???? change
type TProps = {
  data: string;
};
export default function CoinName({ data }: TProps) {
  return <div>{data}</div>;
}
