const express = require("express");

const { ProjectController, TechnoController } = require("./controllers");

const router = express.Router();

router.get("/project", ProjectController.browse);
router.get("/project/:id", ProjectController.read);
router.put("/project/:id", ProjectController.edit);
router.post("/project", ProjectController.add);
router.delete("/project/:id", ProjectController.delete);

router.get("/techno", TechnoController.browse);
router.get("/techno/:id", TechnoController.read);
router.put("/techno/:id", TechnoController.edit);
router.post("/techno", TechnoController.add);
router.delete("/techno/:id", TechnoController.delete);

module.exports = router;
