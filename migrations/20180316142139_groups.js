
exports.up = function(knex, Promise) {
  return knex.schema.createTable("groups", table => {
    table.increments("id").primary();
    table.text("url");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("groups");
};
