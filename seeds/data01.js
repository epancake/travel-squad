
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('groups').insert([
        {id: 1, url: '123456789'},
        {id: 2, url: '234567890'},
        {id: 3, url: '345678901'}
      ]);
    });
};
