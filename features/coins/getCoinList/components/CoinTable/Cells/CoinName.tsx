type TProps = {
  image: string;
  name: string;
  symbol: string;
};

export default function CoinInfo({ image, name, symbol }: TProps) {
  return (
    <div className="flex items-center gap-3">
      <img src={image} alt={name} className="size-8 rounded-full" />

      <div className="flex flex-col">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-gray-500 uppercase">{symbol}</span>
      </div>
    </div>
  );
}
