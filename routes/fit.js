'use strict';

const Joi           = require('joi');

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

// GET /api/products/{id}
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

module.exports = routes;
