require('dotenv').config();
module.exports = {
  production: {
    client: 'pg',
    connection: {
      host: process.env.HOST || 'localhost:5432',
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: '',
      charset: 'utf8',
    },
  },
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'postgres',
      database: 'curtains_app',
      charset: 'utf8',
    },
  },
};
