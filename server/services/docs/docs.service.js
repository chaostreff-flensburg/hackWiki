// Initializes the `docs` service on path `/docs`
const createService = require('feathers-nedb');
const createModel = require('../../models/docs.model');
const hooks = require('./docs.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'docs',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/docs', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('docs');

  service.hooks(hooks);
};
