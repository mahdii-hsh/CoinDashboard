import { THeader } from "../../types/headerTypes";

type TProps = {
  header: THeader;
};
export default function HeaderTable({ header }: TProps) {
  return (
    <>
      <colgroup>
        {header.map(
          (item) =>
            item.view && (
              <col
                key={item.title}
                style={{ width: `${item.size ? `${item.size}%` : ""}` }}
              />
            ),
        )}
      </colgroup>
      <thead>
        <tr>
          {header?.length !== 0 &&
            header?.map(
              (item) =>
                item.view && (
                  <th key={item.title}>
                    <div className="w-full flex justify-start items-center p-2">
                      {item.symbol}
                    </div>
                  </th>
                ),
            )}
        </tr>
      </thead>
    </>
  );
}
