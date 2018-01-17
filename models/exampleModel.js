/*
  interface of model Object with functions
  here can added more function to our model (example)
*/

const exampleBS = require('../data_source/exampleBS')();

const exampleModel = {
  getById: async id => {
    return await exampleBS.fetch({ id });
  },
  getAll: () => {
    return exampleBS.fetchAll();
  },
};

module.exports = exampleModel;
