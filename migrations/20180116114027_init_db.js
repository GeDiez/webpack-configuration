exports.up = function(knex) {
  return knex.schema.createTable('exampleTable', t => {
    //Generate a table with knexs
  });
};

exports.down = function(knex) {
  //Drop table
  return knex.schema.dropTable('exampleTable');
};
