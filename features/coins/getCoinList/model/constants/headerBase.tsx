import { TCoinItem, THeaderBase } from "@/entities/coin";
import CoinInfo from "../../components/CoinTable/Cells/CoinInfo";
import CoinID from "../../components/CoinTable/Cells/CoinID";
import CoinCurrPrice from "../../components/CoinTable/Cells/CoinCurrPrice";
import CoinChangePrice from "../../components/CoinTable/Cells/CoinChangePrice";

const headerBase: THeaderBase = [
  {
    headerItemTitle: "id",
    headerItemSymbol: "#",
    headerItemView: true,
    headerItemRenderCell: (_, id: number) => <CoinID id={id} />,
  },
  {
    headerItemTitle: "name",
    headerItemSymbol: "Coin",
    headerItemView: true,
    headerItemSize: 20,
    headerItemRenderCell: (coin: TCoinItem) => (
      <CoinInfo image={coin.image} name={coin.name} symbol={coin.symbol} />
    ),
  },
  {
    headerItemTitle: "current_price",
    headerItemSymbol: "Price",
    headerItemView: true,
    headerItemSize: 10,
    headerItemRenderCell: (coin: TCoinItem) => (
      <CoinCurrPrice price={coin.current_price} />
    ),
  },
  {
    headerItemTitle: "price_change_percentage_1h_in_currency",
    headerItemSymbol: "1h",

    headerItemView: true,
    headerItemRenderCell: (coin: TCoinItem) => (
      <CoinChangePrice value={coin.price_change_percentage_1h_in_currency} />
    ),
  },
  {
    headerItemTitle: "price_change_percentage_24h_in_currency",
    headerItemSymbol: "24h",

    headerItemView: true,
    headerItemRenderCell: (coin: TCoinItem) => (
      <CoinChangePrice value={coin.price_change_percentage_24h_in_currency} />
    ),
  },
  {
    headerItemTitle: "price_change_percentage_7d_in_currency",
    headerItemSymbol: "7d",

    headerItemView: true,
    headerItemRenderCell: (coin: TCoinItem) => (
      <CoinChangePrice value={coin.price_change_percentage_7d_in_currency} />
    ),
  },
  {
    headerItemTitle: "market_cap",
    headerItemSymbol: "Market Cap",

    headerItemView: true,
    headerItemRenderCell: (coin: TCoinItem) => (
      <CoinChangePrice value={coin.market_cap} />
    ),
  },
  {
    headerItemTitle: "total_volume",
    headerItemSymbol: "Total Volume",
    headerItemView: true,
    headerItemRenderCell: (coin: TCoinItem) => (
      <CoinChangePrice value={coin.total_volume} />
    ),
  },
];

export { headerBase };
