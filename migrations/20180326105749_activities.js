
exports.up = function(knex, Promise) {
  return knex.schema.createTable("activities", table => {
    table.increments("id").primary();
    table.text("activitySuggestion");
    table.integer("group_id").references("groups.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("activities");
};
