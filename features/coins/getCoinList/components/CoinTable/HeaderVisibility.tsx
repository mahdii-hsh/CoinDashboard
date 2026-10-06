"use client";

import { Settings2 } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { THeader } from "@/entities/coin";


type Props = {
  header: THeader;
  onToggle: (title: THeader[number]["title"]) => void;
};

export default function HeaderVisibility({ header, onToggle }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button type="button" className="rounded-md border p-2 hover:bg-muted">
          <Settings2 size={18} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-52">
        {header.map((item) => (
          <DropdownMenuCheckboxItem
            key={item.title}
            checked={item.view}
            onCheckedChange={() => onToggle(item.title)}
          >
            {item.symbol}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
