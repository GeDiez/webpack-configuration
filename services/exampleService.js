const exampleModel = require('../models/exampleModel');

const exampleService = {
  getAll: async (req, res) => {
    //handle request and response
    const _exampleData = await exampleModel.getAll();
    res.send(_exampleData);
  },
};

module.exports = exampleService;
