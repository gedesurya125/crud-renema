const express = require('express');
const router = express.Router();
const programmerSkilController = require('../controllers/programmer-skill.contorller');

//fetch all programmer skill
router.get("/", programmerSkilController.findAll);

//insert new skill for given programmer id
router.post("/", programmerSkilController.create);

//find skill based on given programmer userId
router.get("/:userId", programmerSkilController.findByProgId);

//update skill for given skillId
router.put("/:skillId", programmerSkilController.update);

//delete skill based on given skillId
router.delete("/:skillId", programmerSkilController.delete);

module.exports = router;
