const _knex = require('knex');
const knexfile =
  process.env.NODE_ENV !== 'development'
    ? require('./knexfile').development
    : require('./knexfile').production;
const knex = _knex(knexfile);

const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
