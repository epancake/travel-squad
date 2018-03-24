
exports.up = function(knex, Promise) {
  return knex.schema.createTable("dates", table => {
    table.increments("id").primary();
    table.text("dateSuggestion");
    table.integer("group_id").references("groups.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dates");
};
