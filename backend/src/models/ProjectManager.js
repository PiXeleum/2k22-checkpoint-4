const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  static table = "project";

  insert(projectID) {
    return this.connection.query(
      `insert into ${ProjectManager.table} (name, description, date, link ) values (?, ?, ?, ?)`,
      [projectID.name, projectID.description, projectID.date, projectID.link]
    );
  }

  update(projectID) {
    return this.connection.query(
      `update ${ProjectManager.table} set name = ? and description = ? and date = ? and link = ? where id = ?`,
      [
        projectID.name,
        projectID.description,
        projectID.date,
        projectID.link,
        projectID.id,
      ]
    );
  }
}

module.exports = ProjectManager;
