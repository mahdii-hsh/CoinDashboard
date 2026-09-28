import React from "react";

type TProps = {
  id: number;
};
export default function CoinID({ id }: TProps) {
  return (
    <div className="w-full h-full flex justify-center items-center">{id}</div>
  );
}
