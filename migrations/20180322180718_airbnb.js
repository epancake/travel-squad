
exports.up = function(knex, Promise) {
  return knex.schema.createTable("airbnb", table => {
    table.increments("id").primary();
    table.text("bnbTitle");
    table.text("bnbUrl");
    table.text("bnbImageSrc");
    table.integer("group_id").references("groups.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("airbnb");
};
