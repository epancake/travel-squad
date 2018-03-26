
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("activitiesbuttons").del()
    .then(function () {
      // Inserts seed entries
      return knex("activitiesbuttons").insert([
        {id: 1, group_id: 1, row1col1: true, row1col2: false, row1col3: false, row1col4: false, row1col5: false, row2col1: true, row2col2: false, row2col3: false, row2col4: false, row2col5: false, row3col1: false, row3col2: false, row3col3: false, row3col4: false, row3col5: false},
        {id: 2, group_id: 2, row1col1: true, row1col2: true, row1col3: false, row1col4: false, row1col5: false, row2col1: true, row2col2: false, row2col3: false, row2col4: false, row2col5: false, row3col1: false, row3col2: false, row3col3: false, row3col4: false, row3col5: false},
        {id: 3, group_id: 2, row1col1: true, row1col2: false, row1col3: false, row1col4: false, row1col5: false, row2col1: true, row2col2: true, row2col3: false, row2col4: false, row2col5: false, row3col1: false, row3col2: false, row3col3: false, row3col4: false, row3col5: false},
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE activitiesbuttons_id_seq RESTART WITH 4;");
    });
};
