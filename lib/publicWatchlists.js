'use strict';

/**
 * Get Accounts
 * @param {object} headers
 * @return {object} array of (public) watchlists 
 */

const request = require('superagent');
const endpoints = require('../util/endpoints');

module.exports = (headers) => {
    const endpoint = endpoints['publicWatchlists']();
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
