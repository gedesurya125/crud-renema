const express = require('express');
const router = express.Router();
const programmerController = require('../controllers/programmer.controller');


//Fetch all programmer data
router.get("/", programmerController.findAll);

//Insert new programmer
router.post("/", programmerController.create);

//Find programmer by ID
router.get("/:id", programmerController.findById);

//Update programer data with given ID
router.put("/:id", programmerController.update);

//Delete programmer based on given id
router.delete("/:id", programmerController.delete)


module.exports = router;