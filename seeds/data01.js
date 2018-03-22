
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("groups").del()
    .then(function () {
      // Inserts seed entries
      return knex("groups").insert([
        {id: 1, url: "123456789", name:"The Wilsons in Miami", airbnblink1:"https://www.airbnb.com/rooms/4293449?s=51", airbnblink2:"https://www.airbnb.com/rooms/4293449?s=51", airbnblink3:"https://www.airbnb.com/rooms/4293449?s=51"},
        {id: 2, url: "234567890", name:"Mark turns 40", airbnblink1:"https://www.airbnb.com/rooms/7989797?s=51", airbnblink2:"https://www.airbnb.com/rooms/4293449?s=51", airbnblink3:"https://www.airbnb.com/rooms/4293449?s=51"},
        {id: 3, url: "345678901", name:"Team Colombia", airbnblink1:"https://www.airbnb.com/rooms/4293449?s=51", airbnblink2:"https://www.airbnb.com/rooms/7989797?s=51", airbnblink3:"https://www.airbnb.com/rooms/4293449?s=51"}
      ]);
    });
};
