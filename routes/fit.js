'use strict';

const Joi = require('joi');
var FitbitApiClient = require("fitbit-node");

var client = new FitbitApiClient("227H7Z", "d9a1cd45ceb53e96d4b9eeac77af5c60");
const API_BASE_PATH = '/api/fit';

const routes = [];

// GET /api/fit
routes.push({
    method: 'GET',
    path: API_BASE_PATH,
    config: {
        auth: false,
        handler: function (request, reply) {
          reply(true);
        },
        tags: ['api']
    }
});

// GET /api/fit/{id}
routes.push({
    method: 'GET',
    path: API_BASE_PATH + '/{id}',
    config: {
        auth: false,
        handler: function (request, reply) {
          reply(true);
        },
        tags: ['api'],
        validate: {
            params: {
              id: Joi.number().integer().required()
            }
      }
    }
});

routes.push({
    method: 'GET',
    path: API_BASE_PATH + '/authorize',
    config: {
        auth: false,
        handler: function (request, reply) {
            reply(client.getAuthorizeUrl('activity heartrate location nutrition profile settings sleep social weight', 'http://localhost:3000/api/fit/callback'));
        },
        tags: ['api']
    }
});

routes.push({
    method: 'GET',
    path: API_BASE_PATH + '/callback',
    config: {
        auth: false,
        handler: function (request, reply) {
            console.log(request.query.code);
            client.getAccessToken(request.query.code, 'http://localhost:3000/api/fit/callback').then(function (result) {
                client.get("/profile.json", result.access_token).then(function (results) {
                    reply(results[0]);
                });
            }).catch(function (error) {
                reply(false);
            });
        },
        tags: ['api']
    }
});

module.exports = routes;
