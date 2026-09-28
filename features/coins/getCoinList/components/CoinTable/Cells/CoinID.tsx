import React from "react";

type TProps = {
  id: number;
};
export default function CoinID({ id }: TProps) {
  return (
    <div className="w-full h-full flex justify-start items-center">{id}</div>
  );
}
