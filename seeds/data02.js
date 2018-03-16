
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: "epancake24@gmail.com", fname: "Emily", lname: "Pancake", group_id:1},
        {email: "something@gmail.com", fname: "David", lname: "Oppenheim", group_id:1},
        {email: "another@hotmail.com", fname: "Olivia", lname: "Pancake-Steeg", group_id:2}
      ]);
    });
};
