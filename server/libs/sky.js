/*jshint node: true */
(function () {
    'use strict';

    var promise;

    promise = require('request-promise');


    /**
     * Wrap all GET proxy calls.
     * @private
     * @name get
     * @param {Object} request
     * @param {String} endpoint
     * @param {Function} callback
     */
    function get(request, endpoint, callback) {
        console.log('GET ' + endpoint);
        return proxy(request, 'GET', endpoint, '', callback);
    }


    /**
     * Gets the requested constituent
     * @name getConstituent
     * @param {Object} request
     * @param {string} constituentId Id of the constituent to retrieve
     * @param {Function} callback
     */
    function getConstituent(request, constituentId, callback) {
        get(request, 'constituents/' + constituentId, callback);
    }


    /**
     * Searches for a constituent.
     * @name getConstituent
     * @param {Object} request
     * @param {string} name Name of the constituent to search for.
     * @param {Function} callback
     */
    function getConstituentSearch(request, searchText, callback) {
        get(request, 'constituents/search?searchText=' + searchText, callback);
    }


    /**
     * Wrap all POST proxy calls.
     * @private
     * @name get
     * @param {Object} request
     * @param {String} endpoint
     * @param {Function} callback
     */
    function post(request, endpoint, body, callback) {
        return proxy(request, 'POST', endpoint, body, callback);
    }


    /**
     * Posts a note to the specified constituent
     * @name postNotes
     * @param {Object} request
     * @param {string} constituentId Id of the constituent to retrieve
     * @param {Function} callback
     */
    function postNotes(request, constituentId, body, callback) {
        post(request, 'constituents/' + constituentId + '/notes', body, callback);
    }


    /**
     * Proxy method to the RENXT api.
     * Validates the session before initiating request.
     * @private
     * @name getProxy
     * @param {Object} request
     * @param {string} method
     * @param {string} endpoint
     * @param {Function} callback
     */
    function proxy(request, method, endpoint, body, callback) {
        var options;

        options = {
            json: true,
            method: method,
            body: body,
            url: 'https://api.sky.blackbaud.com/constituent/' + endpoint,
            headers: {
                'bb-api-subscription-key': process.env.AUTH_SUBSCRIPTION_KEY,
                'Authorization': 'Bearer ' + request.session.ticket.access_token
            }
        };

        promise(options)
            .then(callback)
            .catch(function (err) {
                console.log('Proxy Error: ', err);
            });
    }


    /**
     * Class which lightly wraps a few of SKY API endpoints.
     * @constructor
     * @returns {Object}
     *  {@link getConstituent}
     */
    module.exports = {
        getConstituent: getConstituent,
        getConstituentSearch: getConstituentSearch,
        postNotes: postNotes
    };
}());