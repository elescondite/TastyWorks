'use strict';

const TastyWorks = require('../lib/index');
const credentials = {
    username: process.env.TASTY_USERNAME,
    password: process.env.TASTY_PASSWORD
};

let TASTY_ACCOUNT_ID;

// Set the username and password
TastyWorks.setUser(credentials);

// Before making any calls, get the session-token via the authorization endpoint
TastyWorks.authorization()
    .then(token => {
        // Set the authorization in the headers
        TastyWorks.setAuthorizationToken(token);
        //console.log('// Session is active, continue with other calls.');
        return true;
    })
    .then(() => TastyWorks.accounts())
    .catch(err => console.log(err.status))
    .then(accounts => {
        TASTY_ACCOUNT_ID = accounts[0]['account-number'];
        TastyWorks.setUser({accounts});
    })
    .then(() => {
        console.log('======= USER OBJECT =======');
        console.log(TastyWorks.getUser());
    })
    .then(() => TastyWorks.balances(TASTY_ACCOUNT_ID))
    .catch(err => console.log(err.status))
    .then(balances => {
        console.log('======= ACCOUNT BALANCES =======');
        console.log(balances)
    })
    .then(() => TastyWorks.positions(TASTY_ACCOUNT_ID))
    .catch(err => console.log(err.status))
    .then(positions => {
        console.log('======= ACCOUNT POSITIONS =======');
        console.log(positions)
    })
    .then(() => TastyWorks.liveOrders(TASTY_ACCOUNT_ID))
    .catch(err => console.log(err.status))
    .then(liveOrders => {
        console.log('======= ACCOUNT LIVEORDERS =======');
        console.log(JSON.stringify(liveOrders, null, 4))
    })
    .then(() => TastyWorks.history(TASTY_ACCOUNT_ID, '27/11/2020', '27/11/2020'))
    .catch(err => console.log(err.status))
    .then(history => {
        console.log('======= ACCOUNT HISTORY =======');
        console.log(history)
    })
    .then(() => TastyWorks.marketMetrics(['AMZN', 'SPX']))
    .catch(err => console.log(err.status))
    .then(marketData => {
        console.log('======= Market Data =======');
        console.log(JSON.stringify(marketData, null, 4))
    })
    .then(() => TastyWorks.optionChain('TSLA'))
    .catch(err => console.log(err.status))
    .then(chain => {
        console.log('======= Option chain =======');
        console.log(chain)
        console.table(chain.items[0].expirations)
    })
    .then(() => TastyWorks.watchlists())
    .catch(err => console.log(err.status))
    .then(watchlists => {
        console.log('======= (Private) Watchlists =======');
        console.log(watchlists)
    })
    .then(() => TastyWorks.publicWatchlists())
    .catch(err => console.log(err.status))
    .then(publicWatchlists => {
        console.log('======= (Public) Watchlists =======');
        console.log(publicWatchlists)
    })
    .then(() => TastyWorks.margin(TASTY_ACCOUNT_ID))
    .catch(err => console.log(err.status))
    .then(margin => {
        console.log('======= Margin =======');
        console.log(JSON.stringify(margin, null, 4))
    })
    .then(() => TastyWorks.tradingStatus(TASTY_ACCOUNT_ID))
    .catch(err => console.log(err.status))
    .then(tradingStatus => {
        console.log('======= Trading Status =======');
        console.log(tradingStatus)
    })
    .then(() => TastyWorks.futures())
    .catch(err => console.log(err.status))
    .then(futures => {
        console.log('======= Futures =======');
        console.log(JSON.stringify(futures, null, 4))
    })
    .then(() => TastyWorks.decimals())
    .catch(err => console.log(err.status))
    .then(decimals => {
        console.log('======= Decimals =======');
        console.log(decimals)
    })
    .then(() => TastyWorks.cryptos())
    .catch(err => console.log(err.status))
    .then(cryptos => {
        console.log('======= Cryptos =======');
        console.log(cryptos)
    })


