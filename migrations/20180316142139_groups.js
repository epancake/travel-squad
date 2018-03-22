
exports.up = function(knex, Promise) {
  return knex.schema.createTable("groups", table => {
    table.increments("id").primary();
    table.text("url");
    table.text("name");
    table.text("airbnblink1");
    table.text("airbnblink2");
    table.text("airbnblink3");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("groups");
};
