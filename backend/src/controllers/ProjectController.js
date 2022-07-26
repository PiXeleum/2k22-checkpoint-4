const models = require("../models");

class ProjectController {
  static browse = (req, res) => {
    models.project
      .findAll()
      .then(([rows]) => {
        res.send(
          rows.reduce((projectsWithTechno, project) => {
            const existingProject = projectsWithTechno.find(
              (projectWithTechno) => projectWithTechno.id === project.id
            );

            if (existingProject) {
              existingProject.technoList.push({
                id: project.techno_id,
                logo: project.techno_logo,
                name: project.techno_name,
              });
            } else {
              // eslint-disable-next-line camelcase
              const { techno_id, techno_logo, techno_name, ...projectData } =
                project;
              // eslint-disable-next-line camelcase
              if (techno_id != null) {
                projectData.technoList = [
                  {
                    // eslint-disable-next-line camelcase
                    id: techno_id,
                    // eslint-disable-next-line camelcase
                    logo: techno_logo,
                    // eslint-disable-next-line camelcase
                    name: techno_name,
                  },
                ];
              } else {
                projectData.technoList = [];
              }

              projectsWithTechno.push(projectData);
            }

            return projectsWithTechno;
          }, [])
        );
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.project
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const project = req.body;

    // TODO validations (length, format...)

    project.id = parseInt(req.params.id, 10);

    models.project
      .update(project)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const project = req.body;

    // TODO validations (length, format...)

    models.project
      .insert(project)
      .then(([result]) => {
        res.status(201).send({ ...project, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.project
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ProjectController;
