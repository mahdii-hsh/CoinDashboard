type TProps = {
  price: number;
};

export default function CoinCurrPrice({ price }: TProps) {
  return <span>${price.toLocaleString("en-US")}</span>;
}
