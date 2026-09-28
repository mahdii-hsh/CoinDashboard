import { THeader } from "../../types/headerTypes";

type TProps = {
  header: THeader;
};
export default function HeaderTable({ header }: TProps) {
  return (
    <tr>
      {header?.length !== 0 &&
        header?.map(
          (item) =>
            item.view && (
              <th key={item.title} colSpan={item.size}>
                {item.symbol}
              </th>
            ),
        )}
    </tr>
  );
}
