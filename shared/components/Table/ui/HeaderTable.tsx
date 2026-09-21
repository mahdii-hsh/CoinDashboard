import { THeader } from "../types/headerTypes";

type TProps = {
  header: THeader;
};
export default function HeaderTable({ header }: TProps) {
  return (
    <div className="flex">
      {header?.length !== 0 &&
        header?.map(
          (item) =>
            item.view && (
              <div
                key={item.id}
                className={`flex ${item.size ? "flex-" + item.size : ""}`}
              >
                {item.title}
              </div>
            ),
        )}
    </div>
  );
}
