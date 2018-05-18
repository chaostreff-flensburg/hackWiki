const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('winston');

const feathers = require('@feathersjs/feathers');
const configuration = require('@feathersjs/configuration');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');


const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');
const channels = require('./channels');

const authentication = require('./authentication');

const api = express(feathers());

// Load app configuration
api.configure(configuration());
// Enable CORS, security, compression and body parsing
api.use(cors());
api.use(helmet());
api.use(compress());
api.use(express.json());
api.use(express.urlencoded({ extended: true }));

// Set up Plugins and providers
api.configure(express.rest());
api.configure(socketio({
  path: '/ws/',
}));

// Configure other middleware (see `middleware/index.js`)
api.configure(middleware);
api.configure(authentication);
// Set up our services (see `services/index.js`)
api.configure(services);
// Set up event channels (see channels.js)
api.configure(channels);

// Configure a middleware for 404s and the error handler
api.use(express.notFound());
api.use(express.errorHandler({ logger }));

api.hooks(appHooks);

module.exports = api;
