import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { THeader } from "@/entities/coin";

type TProps = {
  header: THeader;
};
export default function HeaderTable({ header }: TProps) {
  return (
    <>
      {/* <colgroup>
        {header.map(
          (item) =>
            item.view && (
              <col
                key={item.title}
                style={{ width: `${item.size ? `${item.size}%` : ""}` }}
              />
            ),
        )}
      </colgroup> */}
      <TableHeader>
        <TableRow>
          {header?.length !== 0 &&
            header?.map(
              (item) =>
                item.view && (
                  <TableHead key={item.title}>
                    <div>
                      {item.symbol}
                    </div>
                  </TableHead>
                ),
            )}
        </TableRow>
      </TableHeader>
    </>
  );
}
