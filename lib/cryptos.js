'use strict';

/**
 * Get futures
 * @param {object} headers
 * @return {object} array of futures
 */

const request = require('superagent');
const endpoints = require('../util/endpoints');

module.exports = (headers) => {
    const endpoint = endpoints['cryptos']();
    return request
        .get(`${endpoint}`)
        .set(headers)
        .then(res => {
            const {
                body: {
                    data
                }
            } = res;

            return data;
        });
}
