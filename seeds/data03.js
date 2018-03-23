
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('airbnb').del()
    .then(function () {
      // Inserts seed entries
      return knex('airbnb').insert([
        {id: 1, bnbTitle: "Copa Cabana", bnbUrl: "airbnb.com", bnbImageSrc: "image.com", group_id: 1},
        {id: 2, bnbTitle: "Copa Cabanas", bnbUrl: "airbnb.com", bnbImageSrc: "image.com", group_id: 1},
        {id: 3, bnbTitle: "Copa Cabanan", bnbUrl: "airbnb.com", bnbImageSrc: "image.com", group_id: 1},
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE airbnb_id_seq RESTART WITH 4;");
    });
};
