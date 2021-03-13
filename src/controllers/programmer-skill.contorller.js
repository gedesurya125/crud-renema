const ProgrammerSkill = require('../models/programmer-skill.model');

exports.create = (req, res) => {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).json({
      error: true,
      message: 'please provide all required field'
    })
  }else{
    newProgrammerSkill = new ProgrammerSkill(req.body);
    ProgrammerSkill.create(newProgrammerSkill, (err, result) => {
      err ? res.send(err) :res.json({
        errror: false,
        message: 'New Skill added succesfully',
        result
      })
    })
  }
};

exports.findByProgId = (req, res) => {
  ProgrammerSkill.findByProgId(req.params.userId, (err, result) => {
    err ? res.send(err) : res.json(result);
  })
};

exports.findAll = (req, res) => {
  console.log('controller');
  ProgrammerSkill.findAll((err, result) => {
    console.log('controller');
    err ? res.send(err) : res.send(result);
  });
};

exports.update = (req, res) => {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).json({
      error: true,
      message: 'please provide all required field'
    })
  }else{
    const newProgrammerSkill = new ProgrammerSkill(req.body);
    ProgrammerSkill.update(req.params.skillId, newProgrammerSkill.skillName, (err, result) => {
      err ? res.send(err) : res.json({
        error: false,
        message: 'programmer succesfully update',
        data: result
      });
    })
  }
}

exports.delete = (req, res) => {
  ProgrammerSkill.delete(req.params.skillId, (err, result) => {
    err ? res.send(err) : res.json({
      error: false,
      message: `skill with ID = ${req.params.skillId} sucessfully deletes!`,
      result
    });
  })
}