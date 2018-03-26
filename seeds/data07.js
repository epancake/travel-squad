
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function () {
      // Inserts seed entries
      return knex('activities').insert([
        {id: 1, activitySuggestion:"May 2-8", group_id: 1},
        {id: 2, activitySuggestion:"May 1-8", group_id: 1},
        {id: 3, activitySuggestion:"May 5-10", group_id: 1},
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE activities_id_seq RESTART WITH 4;");
    });
};
