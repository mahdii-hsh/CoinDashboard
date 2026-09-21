type THeaderItem = {
  id: number;
  title: string;
  size?: number;
  view: boolean;
};

export type THeader = THeaderItem[];

type THeaderBaseItem = {
  headerItemTitle: THeaderItem["title"];
  headerItemSize?: THeaderItem["size"];
  headerItemView: THeaderItem["view"];
};

export type THeaderBase = THeaderBaseItem[];

