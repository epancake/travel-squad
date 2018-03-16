
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", table => {
    table.text("email").primary();
    table.text("fname");
    table.text("lname");
    table.integer("group_id").references('groups.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
