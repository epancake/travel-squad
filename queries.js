const database = require("./database-connection");

module.exports = {
  list(table) {
    return database(table).select();
  },
  // read(table, id) {
  //   return database(table).select().where("id", id).first()
  // },
  // create(table, item) {
  //   return database(table)
  //     .insert(item)
  //     .returning("*")
  //     .then(record => record[0])
  // },
  // update(table, id, question) {
  //   return database(table).update(question)
  //     .where("id", id).returning("*").then(record => record[0])
  // },
  // delete(table, id) {
  //   return database(table).delete().where("id", id)
  // },
};
