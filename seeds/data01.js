
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("groups").del()
    .then(function () {
      // Inserts seed entries
      return knex("groups").insert([
        {id: 1, url: "123456789", name:"The Wilsons in Miami"},
        {id: 2, url: "234567890", name:"Mark turns 40"},
        {id: 3, url: "345678901", name:"Team Colombia"}
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE groups_id_seq RESTART WITH 4;");
    });
};
