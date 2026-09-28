import { ArrowDown, ArrowUp } from "lucide-react";

type CoinChangePrice1hProps = {
  value: number;
};

export default function CoinChangePrice1h({
  value,
}: CoinChangePrice1hProps) {
  const isPositive = value >= 0;

  return (
    <span
      className={`flex items-center gap-1 ${
        isPositive ? "text-green-500" : "text-red-500"
      }`}
    >
      {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}

      {Math.abs(value).toFixed(1)}%
    </span>
  );
}

