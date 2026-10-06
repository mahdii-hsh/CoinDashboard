import Link from "next/link";

type TProps = {
  image: string;
  name: string;
  symbol: string;
  coinID: string;
};

export default function CoinInfo({ image, name, symbol, coinID }: TProps) {
  return (
    <Link
      href={`/coin/${coinID}`}
      className="flex items-center justify-start gap-x-1"
    >
      <img src={image} alt={name} className="size-8 rounded-full" />

      {/* <div className="flex"> */}
      <span className="font-medium">{name}</span>
      <span className="text-sm text-gray-500 uppercase">{symbol}</span>
      {/* </div> */}
    </Link>
  );
}
