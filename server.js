const Router = require('./router/expressRouter');

const { routesModelsCatalog } = require('./routes/modelsCatalog');

routesModelsCatalog(Router);

if (process.env.NODE_ENV === 'development') {
}

Router.init();
