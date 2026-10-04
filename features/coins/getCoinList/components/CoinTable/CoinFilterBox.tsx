"use client";

import { Filter, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CoinFilterValue = {
  search: string;
  minPrice: string;
  maxPrice: string;
  minMarketCap: string;
};

type Props = {
  value: CoinFilterValue;
  onChange: (value: CoinFilterValue) => void;
  onReset: () => void;
};

export default function CoinFilterBox({ value, onChange, onReset }: Props) {
  const update = <K extends keyof CoinFilterValue>(
    key: K,
    newValue: CoinFilterValue[K],
  ) => {
    onChange({
      ...value,
      [key]: newValue,
    });
  };

  const hasFilter = Object.values(value).some(Boolean);

  return (
    <Popover>
      <PopoverTrigger >
        <Button variant="outline" className="gap-2">
          <Filter size={16} />
          Filter
          {hasFilter && (
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs text-primary-foreground">
              {Object.values(value).filter(Boolean).length}
            </span>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent align="start" className="w-80 p-4">
        <div className="space-y-5">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Filter Coins</h3>
              <p className="text-xs text-muted-foreground">
                Narrow down the coin list
              </p>
            </div>

            {hasFilter && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onReset}
                className="gap-1 text-xs"
              >
                <RotateCcw size={13} />
                Reset
              </Button>
            )}
          </div>

          {/* Search */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Search</label>

            <Input
              placeholder="Bitcoin, Ethereum..."
              value={value.search}
              onChange={(e) => update("search", e.target.value)}
            />
          </div>

          {/* Price */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Price</label>

            <div className="grid grid-cols-2 gap-2">
              <Input
                type="number"
                placeholder="Min"
                value={value.minPrice}
                onChange={(e) => update("minPrice", e.target.value)}
              />

              <Input
                type="number"
                placeholder="Max"
                value={value.maxPrice}
                onChange={(e) => update("maxPrice", e.target.value)}
              />
            </div>
          </div>

          {/* Market Cap */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Minimum Market Cap</label>

            <Input
              type="number"
              placeholder="e.g. 1000000000"
              value={value.minMarketCap}
              onChange={(e) => update("minMarketCap", e.target.value)}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
