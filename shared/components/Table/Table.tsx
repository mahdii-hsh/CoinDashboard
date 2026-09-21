"use client";

import React, { useEffect } from "react";
import { THeader, THeaderBase } from "./types/headerTypes";
import { useHeader } from "./hooks/useHeader";
import HeaderTable from "./ui/HeaderTable";

type TProps = {
  headerBase: THeaderBase;
};
export default function Table({ headerBase }: TProps) {
  const { header, initHeader } = useHeader();

  useEffect(() => {
    initHeader(headerBase);
  }, []);

  return (
    <div>
      <HeaderTable header={header} />
    </div>
  );
}
