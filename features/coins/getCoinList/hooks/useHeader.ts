import { THeader, THeaderBase } from "@/entities/coin";
import { useState } from "react";

function useHeader() {
  const [header, setHeader] = useState<THeader | any[]>([]);

  const initialHeader = (base: THeaderBase) => {
    if (base.length == 0) return;
    setHeader(() =>
      base.map((item, index) => {
        return {
          id: index,
          symbol: item.headerItemSymbol
            ? item.headerItemSymbol
            : item.headerItemTitle,
          render: item.headerItemRenderCell,
          title: item.headerItemTitle,
          view: item.headerItemView,
          size: item.headerItemSize,
        };
      }),
    );
  };

  return {
    header: header,
    initHeader: (base: THeaderBase) => initialHeader(base),
  };
}

export { useHeader };
