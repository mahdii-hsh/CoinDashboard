export type TCoinDetails = {
  id: string;
  symbol: string;
  name: string;
  web_slug: string;

  asset_platform_id: string | null;

  platforms: Record<string, string>;

  detail_platforms: Record<
    string,
    {
      decimal_place: number | null;
      contract_address: string;
    }
  >;

  block_time_in_minutes: number;
  hashing_algorithm: string | null;

  categories: string[];

  preview_listing: boolean;
  public_notice: string | null;
  additional_notices: string[];

  has_supply_breakdown: boolean;

  description: {
    en: string;
  };

  links: {
    homepage: string[];
    whitepaper: string;
    blockchain_site: string[];
    official_forum_url: string[];
    chat_url: string[];
    announcement_url: string[];
    snapshot_url: string | null;

    twitter_screen_name: string | null;
    facebook_username: string | null;

    bitcointalk_thread_identifier: number | null;
    telegram_channel_identifier: string;

    subreddit_url: string;

    repos_url: {
      github: string[];
      bitbucket: string[];
    };
  };

  image: {
    thumb: string;
    small: string;
    large: string;
  };

  country_origin: string;
  genesis_date: string | null;

  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;

  watchlist_portfolio_users: number;

  market_cap_rank: number;
  market_cap_rank_with_rehypothecated: number;

  status_updates: unknown[];

  last_updated: string;

  market_data: {
    current_price: TCurrencyValues;

    total_value_locked: number | null;
    mcap_to_tvl_ratio: number | null;
    fdv_to_tvl_ratio: number | null;

    roi: unknown | null;

    ath: TCurrencyValues;
    ath_change_percentage: TCurrencyValues;
    ath_date: TCurrencyDateValues;

    atl: TCurrencyValues;
    atl_change_percentage: TCurrencyValues;
    atl_date: TCurrencyDateValues;

    market_cap: TCurrencyValues;

    fully_diluted_valuation: TCurrencyValues;

    market_cap_fdv_ratio: number;

    market_cap_rank: number;

    outstanding_token_value_usd: number | null;

    market_cap_rank_with_rehypothecated: number;

    total_volume: TCurrencyValues;

    high_24h: TCurrencyValues;
    low_24h: TCurrencyValues;

    price_change_24h: number;
    price_change_percentage_24h: number;

    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_200d: number;
    price_change_percentage_1y: number;

    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;

    price_change_24h_in_currency: TCurrencyValues;

    price_change_percentage_1h_in_currency: TCurrencyValues;
    price_change_percentage_24h_in_currency: TCurrencyValues;
    price_change_percentage_7d_in_currency: TCurrencyValues;
    price_change_percentage_14d_in_currency: TCurrencyValues;
    price_change_percentage_30d_in_currency: TCurrencyValues;
    price_change_percentage_60d_in_currency: TCurrencyValues;
    price_change_percentage_200d_in_currency: TCurrencyValues;
    price_change_percentage_1y_in_currency: TCurrencyValues;

    market_cap_change_24h_in_currency: TCurrencyValues;
    market_cap_change_percentage_24h_in_currency: TCurrencyValues;

    total_supply: number | null;
    max_supply: number | null;
    max_supply_infinite: boolean;

    circulating_supply: number;

    outstanding_supply: number | null;

    last_updated: string;
  };

  tickers: TCoinTicker[];
};

export type TCurrencyValues = {
  btc: number;
  eur: number;
  usd: number;
};

export type TCurrencyDateValues = {
  btc: string;
  eur: string;
  usd: string;
};

export type TCoinTicker = {
  base: string;
  target: string;

  market: {
    name: string;
    identifier: string;
    has_trading_incentive: boolean;
  };

  last: number;
  volume: number;

  converted_last: {
    btc: number;
    eth: number;
    usd: number;
  };

  converted_volume: {
    btc: number;
    eth: number;
    usd: number;
  };

  trust_score: string | null;

  bid_ask_spread_percentage: number;

  timestamp: string;
  last_traded_at: string;
  last_fetch_at: string;

  is_anomaly: boolean;
  is_stale: boolean;

  trade_url: string | null;
  token_info_url: string | null;

  coin_id: string;
  target_coin_id: string | null;

  coin_mcap_usd: number | null;
};
