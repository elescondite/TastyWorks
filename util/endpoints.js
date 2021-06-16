const baseURL = 'https://api.tastyworks.com';
//trade.dough.com

module.exports = {
    // Authentication
    login: () => `${baseURL}/sessions`,
    validateLogin: () => `${baseURL}/sessions/validate`,
    streamer: () => `${baseURL}/quote-streamer-tokens`,
    // Account specific
    accounts: () => `${baseURL}/customers/me/accounts`,
    balances: (account_id) => `${baseURL}/accounts/${account_id}/balances`,
    positions: (account_id) => `${baseURL}/accounts/${account_id}/positions`,
    liveOrders: (account_id) => `${baseURL}/accounts/${account_id}/orders/live`,
    executeOrder: (account_id) => `${baseURL}/accounts/${account_id}/orders`,
    cancelOrder: (account_id, order_id) => `${baseURL}/accounts/${account_id}/orders/${order_id}`,
  	optionChain: (ticker) => `${baseURL}/option-chains/${ticker}/nested`,
    history: (account_id) => `${baseURL}/accounts/${account_id}/transactions`,
    marketMetrics: (tickers) => `${baseURL}/market-metrics?symbols=${tickers}`,
    watchlists: () => `${baseURL}/watchlists`,
    publicWatchlists: () => `${baseURL}/public-watchlists`,
    tradingStatus: (account_id) => `${baseURL}/accounts/${account_id}/trading-status`,
    margin: (account_id) => `${baseURL}/margin/accounts/${account_id}`,
    // Generic (non-account specific)
    futures: () => `${baseURL}/instruments/futures`,
    decimals: () => `${baseURL}/instruments/quantity-decimal-precisions`,
    cryptos: () => `${baseURL}/instruments/cryptocurrencies`

    // TODO: '{url}/dry-run'
    // https://api.tastyworks.com/position-groups/A0001635099
    // /traders
    // /public_orders
}
