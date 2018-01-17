/*
  Data soruce exctract from BD pg with the ORM Bookshelf(BS) and knex
  Bookshelf (BS)
*/

const bookshelf = require('../bookshelf');

const exampleBS = () => {
  const exampleBSM = bookshelf.Model.extend({
    tableName: 'modelsCatalog',
  });

  return {
    fetchAll: async () => {
      const data = await exampleBSM.fetchAll();
      const AllExamples = await data.toJSON();
      return AllExamples;
    },
    fetchByUID: async UID => {
      const modelPromise = await exampleBSM.where('uid', UID).fetch();
      return modelPromise.toJSON();
    },
  };
};

module.exports = exampleBS;
