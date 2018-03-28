

exports.up = function(knex, Promise) {
  return knex.schema.createTable("bnbbuttons", table => {
    table.increments("id").primary();
    table.integer("group_id").references("groups.id");
    table.boolean("row1col1");
    table.boolean("row1col2");
    table.boolean("row1col3");
    table.boolean("row1col4");
    table.boolean("row1col5");
    table.boolean("row2col1");
    table.boolean("row2col2");
    table.boolean("row2col3");
    table.boolean("row2col4");
    table.boolean("row2col5");
    table.boolean("row3col1");
    table.boolean("row3col2");
    table.boolean("row3col3");
    table.boolean("row3col4");
    table.boolean("row3col5");
    table.boolean("row4col1");
    table.boolean("row4col2");
    table.boolean("row4col3");
    table.boolean("row4col4");
    table.boolean("row4col5");
    table.boolean("row5col1");
    table.boolean("row5col2");
    table.boolean("row5col3");
    table.boolean("row5col4");
    table.boolean("row5col5");
    table.boolean("row6col1");
    table.boolean("row6col2");
    table.boolean("row6col3");
    table.boolean("row6col4");
    table.boolean("row6col5");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("bnbbuttons");
};
