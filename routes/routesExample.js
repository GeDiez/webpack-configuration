/*
  define routes to one specific resource
*/

const exampleService = require('../services/modelsCatalogService');

const routesForExample = async Router => {
  Router.get('/example/', await exampleService.getAll);
  Router.post('/example/:id', await exampleService.getAll);
  Router.put('/example/:id', await exampleService.getAll);
  Router.delete('/example/:id', await exampleService.getAll);
};

module.exports = {
  routesForExample,
};
