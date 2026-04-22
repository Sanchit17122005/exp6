const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/studentController");

router.get("/", ctrl.getAll);
router.get("/new", ctrl.showForm);
router.post("/", ctrl.create);
router.get("/:id/edit", ctrl.editForm);
router.put("/:id", ctrl.update);
router.delete("/:id", ctrl.delete);

module.exports = router;