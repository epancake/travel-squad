
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dates').del()
    .then(function () {
      // Inserts seed entries
      return knex('dates').insert([
        {id: 1, dateSuggestion:"May 2-8", group_id: 1},
        {id: 2, dateSuggestion:"May 1-8", group_id: 1},
        {id: 3, dateSuggestion:"May 5-10", group_id: 1},
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE dates_id_seq RESTART WITH 4;");
    });
};
