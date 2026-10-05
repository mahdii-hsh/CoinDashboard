"use client";

import type { TTrends } from "@/entities/trending";

import { TrendingHeader } from "./TrendingHeader";
import { TrendingGrid } from "./TrendingGrid";

// type Props = {
//   coins: { item: TTrends["coins"] }[];
//   nfts: TTrends["nfts"];
//   categories: TTrends["categories"];
// };

export const coins = [
  {
    id: "bitcoin",
    coin_id: 1,
    name: "Bitcoin",
    symbol: "btc",
    market_cap_rank: 1,
    thumb: "https://coin-images.coingecko.com/coins/images/1/thumb/bitcoin.png",
    small: "https://coin-images.coingecko.com/coins/images/1/small/bitcoin.png",
    large: "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png",
    slug: "bitcoin",
    price_btc: 1,
    score: 0,
    data: {
      price: 68000,
      price_btc: "1",
      price_change_percentage_24h: {
        usd: 2.35,
        btc: 0,
      },
      market_cap: "$1.34T",
      market_cap_btc: "1.34T",
      total_volume: "$32.5B",
      total_volume_btc: "480K",
      sparkline: "",
      content: null,
    },
  },
  {
    id: "bitcoidddn",
    coin_id: 123,
    name: "Bitcoin",
    symbol: "btc",
    market_cap_rank: 1,
    thumb: "https://coin-images.coingecko.com/coins/images/1/thumb/bitcoin.png",
    small: "https://coin-images.coingecko.com/coins/images/1/small/bitcoin.png",
    large: "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png",
    slug: "bitcoin",
    price_btc: 1,
    score: 0,
    data: {
      price: 68000,
      price_btc: "1",
      price_change_percentage_24h: {
        usd: 2.35,
        btc: 0,
      },
      market_cap: "$1.34T",
      market_cap_btc: "1.34T",
      total_volume: "$32.5B",
      total_volume_btc: "480K",
      sparkline: "",
      content: null,
    },
  },
  {
    id: "ethereum",
    coin_id: 279,
    name: "Ethereum",
    symbol: "eth",
    market_cap_rank: 2,
    thumb:
      "https://coin-images.coingecko.com/coins/images/279/thumb/ethereum.png",
    small:
      "https://coin-images.coingecko.com/coins/images/279/small/ethereum.png",
    large:
      "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png",
    slug: "ethereum",
    price_btc: 0.052,
    score: 1,
    data: {
      price: 3500,
      price_btc: "0.052",
      price_change_percentage_24h: {
        usd: 1.82,
        btc: -0.3,
      },
      market_cap: "$420B",
      market_cap_btc: "6.2M",
      total_volume: "$18.2B",
      total_volume_btc: "268K",
      sparkline: "",
      content: null,
    },
  },

  {
    id: "solana",
    coin_id: 4128,
    name: "Solana",
    symbol: "sol",
    market_cap_rank: 5,
    thumb:
      "https://coin-images.coingecko.com/coins/images/4128/thumb/solana.png",
    small:
      "https://coin-images.coingecko.com/coins/images/4128/small/solana.png",
    large:
      "https://coin-images.coingecko.com/coins/images/4128/large/solana.png",
    slug: "solana",
    price_btc: 0.0021,
    score: 2,
    data: {
      price: 142,
      price_btc: "0.0021",
      price_change_percentage_24h: {
        usd: 4.67,
        btc: 2.1,
      },
      market_cap: "$68B",
      market_cap_btc: "1.01M",
      total_volume: "$4.8B",
      total_volume_btc: "70K",
      sparkline: "",
      content: null,
    },
  },

  {
    id: "dogecoin",
    coin_id: 5,
    name: "Dogecoin",
    symbol: "doge",
    market_cap_rank: 8,
    thumb:
      "https://coin-images.coingecko.com/coins/images/5/thumb/dogecoin.png",
    small:
      "https://coin-images.coingecko.com/coins/images/5/small/dogecoin.png",
    large:
      "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png",
    slug: "dogecoin",
    price_btc: 0.0000021,
    score: 3,
    data: {
      price: 0.18,
      price_btc: "0.0000021",
      price_change_percentage_24h: {
        usd: -2.14,
        btc: -3.1,
      },
      market_cap: "$26B",
      market_cap_btc: "390K",
      total_volume: "$2.1B",
      total_volume_btc: "31K",
      sparkline: "",
      content: null,
    },
  },

  {
    id: "pepe",
    coin_id: 29850,
    name: "Pepe",
    symbol: "pepe",
    market_cap_rank: 25,
    thumb:
      "https://coin-images.coingecko.com/coins/images/29850/thumb/pepe-token.jpeg",
    small:
      "https://coin-images.coingecko.com/coins/images/29850/small/pepe-token.jpeg",
    large:
      "https://coin-images.coingecko.com/coins/images/29850/large/pepe-token.jpeg",
    slug: "pepe",
    price_btc: 0.00000000015,
    score: 4,
    data: {
      price: 0.000012,
      price_btc: "0.00000000015",
      price_change_percentage_24h: {
        usd: 7.42,
        btc: 5.8,
      },
      market_cap: "$5.1B",
      market_cap_btc: "75K",
      total_volume: "$950M",
      total_volume_btc: "14K",
      sparkline: "",
      content: null,
    },
  },
];

export const nfts = [
  {
    id: "cryptopunks",
    name: "CryptoPunks",
    symbol: "cryptopunks",
    thumb: "https://assets.coingecko.com/nft/images/301/thumb/cryptopunks.png",
    nft_contract_id: 301,
    native_currency_symbol: "ETH",
    floor_price_in_native_currency: 38.5,
    floor_price_24h_percentage_change: 3.24,
    data: {
      floor_price: "38.5 ETH",
      floor_price_in_usd_24h_percentage_change: "3.24",
      h24_volume: "1250 ETH",
      h24_average_sale_price: "41.2 ETH",
      sparkline: "",
      content: null,
    },
  },

  {
    id: "bored-ape-yacht-club",
    name: "Bored Ape Yacht Club",
    symbol: "bayc",
    thumb:
      "https://assets.coingecko.com/nft/images/4/thumb/bored-ape-yacht-club.png",
    nft_contract_id: 4,
    native_currency_symbol: "ETH",
    floor_price_in_native_currency: 9.82,
    floor_price_24h_percentage_change: -1.85,
    data: {
      floor_price: "9.82 ETH",
      floor_price_in_usd_24h_percentage_change: "-1.85",
      h24_volume: "420 ETH",
      h24_average_sale_price: "11.1 ETH",
      sparkline: "",
      content: null,
    },
  },

  {
    id: "mutant-ape-yacht-club",
    name: "Mutant Ape Yacht Club",
    symbol: "mayc",
    thumb:
      "https://assets.coingecko.com/nft/images/5/thumb/mutant-ape-yacht-club.png",
    nft_contract_id: 5,
    native_currency_symbol: "ETH",
    floor_price_in_native_currency: 2.74,
    floor_price_24h_percentage_change: 5.67,
    data: {
      floor_price: "2.74 ETH",
      floor_price_in_usd_24h_percentage_change: "5.67",
      h24_volume: "180 ETH",
      h24_average_sale_price: "3.1 ETH",
      sparkline: "",
      content: null,
    },
  },

  {
    id: "pudgy-penguins",
    name: "Pudgy Penguins",
    symbol: "ppg",
    thumb: "https://assets.coingecko.com/nft/images/6/thumb/pudgy-penguins.png",
    nft_contract_id: 6,
    native_currency_symbol: "ETH",
    floor_price_in_native_currency: 14.2,
    floor_price_24h_percentage_change: 2.18,
    data: {
      floor_price: "14.2 ETH",
      floor_price_in_usd_24h_percentage_change: "2.18",
      h24_volume: "310 ETH",
      h24_average_sale_price: "15.4 ETH",
      sparkline: "",
      content: null,
    },
  },

  {
    id: "azuki",
    name: "Azuki",
    symbol: "azuki",
    thumb: "https://assets.coingecko.com/nft/images/7/thumb/azuki.png",
    nft_contract_id: 7,
    native_currency_symbol: "ETH",
    floor_price_in_native_currency: 4.35,
    floor_price_24h_percentage_change: -3.12,
    data: {
      floor_price: "4.35 ETH",
      floor_price_in_usd_24h_percentage_change: "-3.12",
      h24_volume: "205 ETH",
      h24_average_sale_price: "4.8 ETH",
      sparkline: "",
      content: null,
    },
  },
];

export const categories = [
  {
    id: 1,
    name: "Smart Contract Platform",
    top_3_coins_images: [
      "https://coin-images.coingecko.com/coins/images/1/thumb/bitcoin.png",
      "https://coin-images.coingecko.com/coins/images/279/thumb/ethereum.png",
      "https://coin-images.coingecko.com/coins/images/4128/thumb/solana.png",
    ],
    market_cap_1h_change: 0.42,
    slug: "smart-contract-platform",
    coins_count: "184",
    data: {
      market_cap: 820000000000,
      market_cap_btc: 12000000,
      total_volume: 42000000000,
      total_volume_btc: 620000,
      market_cap_change_percentage_24h: {
        usd: 2.84,
        btc: 1.2,
      },
      sparkline: "",
    },
  },

  {
    id: 2,
    name: "Meme",
    top_3_coins_images: [
      "https://coin-images.coingecko.com/coins/images/5/thumb/dogecoin.png",
      "https://coin-images.coingecko.com/coins/images/29850/thumb/pepe-token.jpeg",
      "https://coin-images.coingecko.com/coins/images/325/thumb/shiba.png",
    ],
    market_cap_1h_change: -0.18,
    slug: "meme-token",
    coins_count: "392",
    data: {
      market_cap: 56000000000,
      market_cap_btc: 820000,
      total_volume: 8200000000,
      total_volume_btc: 120000,
      market_cap_change_percentage_24h: {
        usd: 4.12,
        btc: 2.7,
      },
      sparkline: "",
    },
  },

  {
    id: 3,
    name: "Layer 1",
    top_3_coins_images: [
      "https://coin-images.coingecko.com/coins/images/4128/thumb/solana.png",
      "https://coin-images.coingecko.com/coins/images/279/thumb/ethereum.png",
      "https://coin-images.coingecko.com/coins/images/44/thumb/stellar.png",
    ],
    market_cap_1h_change: 0.71,
    slug: "layer-1",
    coins_count: "97",
    data: {
      market_cap: 690000000000,
      market_cap_btc: 10100000,
      total_volume: 31000000000,
      total_volume_btc: 460000,
      market_cap_change_percentage_24h: {
        usd: 1.94,
        btc: 0.85,
      },
      sparkline: "",
    },
  },

  {
    id: 4,
    name: "Artificial Intelligence",
    top_3_coins_images: [
      "https://coin-images.coingecko.com/coins/images/19708/thumb/render-token.png",
      "https://coin-images.coingecko.com/coins/images/11636/thumb/bittensor.png",
      "https://coin-images.coingecko.com/coins/images/30958/thumb/fetch-ai.png",
    ],
    market_cap_1h_change: 1.15,
    slug: "artificial-intelligence",
    coins_count: "156",
    data: {
      market_cap: 42000000000,
      market_cap_btc: 620000,
      total_volume: 5600000000,
      total_volume_btc: 82000,
      market_cap_change_percentage_24h: {
        usd: 6.32,
        btc: 4.18,
      },
      sparkline: "",
    },
  },

  {
    id: 5,
    name: "DeFi",
    top_3_coins_images: [
      "https://coin-images.coingecko.com/coins/images/5/thumb/uniswap.png",
      "https://coin-images.coingecko.com/coins/images/13469/thumb/aave.png",
      "https://coin-images.coingecko.com/coins/images/8183/thumb/chainlink.png",
    ],
    market_cap_1h_change: -0.32,
    slug: "decentralized-finance-defi",
    coins_count: "218",
    data: {
      market_cap: 78000000000,
      market_cap_btc: 1150000,
      total_volume: 9100000000,
      total_volume_btc: 134000,
      market_cap_change_percentage_24h: {
        usd: -0.84,
        btc: -1.12,
      },
      sparkline: "",
    },
  },
];

export default function Trending() {
  return (
    <section className="space-y-5">
      <TrendingHeader />

      <TrendingGrid coins={coins} nfts={nfts} categories={categories} />
    </section>
  );
}
