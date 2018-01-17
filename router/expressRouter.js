/*
  Implementation of interface Router with Expressjs
*/
const express = require('express');
const app = express();
/*
  Implemantation of interface router using Expressjs
*/

app.use(express.static('build'));

const Router = {
  init: () => {
    const PORT = process.env.PORT || '8080';
    app.listen(PORT, () => {
      console.info(`Server Express Runnig on port ${PORT}`);
    });
  },
  get: (path, callback) => {
    app.get(path, callback);
  },
  post: (path, callback) => {
    app.post(path, callback);
  },
  put: (path, callback) => {
    app.put(path, callback);
  },
  delete: (path, callback) => {
    app.delete(path, callback);
  },
};

module.exports = Router;
