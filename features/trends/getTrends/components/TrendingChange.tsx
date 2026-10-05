import { ArrowDown, ArrowUp } from "lucide-react";

type Props = {
  value: number;
};

export function TrendingChange({ value }: Props) {
  const positive = value >= 0;

  return (
    <span
      className={`flex items-center gap-0.5 text-xs font-medium ${
        positive
          ? "text-emerald-600"
          : "text-red-500"
      }`}
    >
      {positive ? (
        <ArrowUp className="size-3" />
      ) : (
        <ArrowDown className="size-3" />
      )}

      {Math.abs(value).toFixed(2)}%
    </span>
  );
}