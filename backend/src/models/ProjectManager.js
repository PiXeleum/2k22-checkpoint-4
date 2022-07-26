const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  static table = "project";

  findAll() {
    return this.connection.query(
      `select project.id, project.name, project.description, project.date, project.link, project_techno.techno_id, techno.logo as techno_logo, techno.name as techno_name from  ${ProjectManager.table} left join project_techno on project.id = project_techno.project_id left join techno on project_techno.techno_id = techno.id`
    );
  }

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
