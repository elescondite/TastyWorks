'use strict';

/**
 * Get Account Orders
 * @param {object} headers
 * @param {string} accountId
 * @return {object} tradingStatus
 */

const request = require('superagent');
const endpoints = require('../util/endpoints');

module.exports = (headers, account_id) => {
    const endpoint = endpoints['tradingStatus'](account_id);
    return request
        .get(`${endpoint}`)
        .set(headers)
        .send()
        .then(res => {
            const {
                body: {
                    data
                }
            } = res;

            return data;
        });
}
