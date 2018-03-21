
exports.up = function(knex, Promise) {
  return knex.schema.createTable("groups", table => {
    table.increments("id").primary();
    table.text("url");
    table.text("name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("groups");
};
