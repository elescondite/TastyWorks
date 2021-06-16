'use strict';

/**
 * Get Accounts
 * @param {object} headers
 * @return {object} array of (private) watchlists 
 */

const request = require('superagent');
const endpoints = require('../util/endpoints');

module.exports = (headers) => {
    const endpoint = endpoints['watchlists']();
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
