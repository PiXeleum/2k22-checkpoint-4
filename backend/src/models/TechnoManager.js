const AbstractManager = require("./AbstractManager");

class TechnoManager extends AbstractManager {
  static table = "techno";

  insert(technoID) {
    return this.connection.query(
      `insert into ${TechnoManager.table} (name, logo) values (?, ?)`,
      [technoID.name, technoID.logo]
    );
  }

  update(technoID) {
    return this.connection.query(
      `update ${TechnoManager.table} set name = ? and logo = ? where id = ?`,
      [technoID.name, technoID.logo, technoID.id]
    );
  }
}

module.exports = TechnoManager;
