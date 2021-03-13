//require db.config
const dbConn = require('../../config/db.config');
const Programmer = require('./programmer.model');

//membuat skill object
const ProgrammerSkill = function(skill){
  this.skillId = skill.id,
  this.skillName = skill.name,
  this.userId = skill.userId
}

//insert new skil to a programmer with known id
ProgrammerSkill.create = (newProgrammerSkill, result) => {
  dbConn.query(
    "INSERT INTO skill_tb VALUE (?,?,?)",
    [null,newProgrammerSkill.skillName, newProgrammerSkill.userId]
  ).then(
    //if success fill the callback with res
    res => {
      console.log(res);
      result(null, res);
    }
  ).catch(
    //if fail fill the callback with err
    err => {
      console.log(err);
      result(err, null);
    }
  )
};

//Find the skill based on programmer ID
ProgrammerSkill.findByProgId = (id, result) => {
  dbConn.query(
    "SELECT * FROM skill_tb WHERE user_id=?",
    [id]
  ).then(
    res => {
      console.log(res);
      result(null, res);
    }
  ).catch(
    err => {
      console.log(err);
      result(err, null);
    }
  )
}

ProgrammerSkill.findAll = (result) => {
  dbConn.query(
    "SELECT skill_tb.id, skill_tb.skill_name, user_tb.name FROM skill_tb INNER JOIN user_tb ON skill_tb.user_id = user_tb.id"
    //"SELECT * FROM skill_tb"
  ).then(res => {
      console.log('ini response dari model :',res);
      result(null, res);
    }
  ).catch(err => {
      console.log(err);
      result(err, null);
    }
  );
}

ProgrammerSkill.update = (skillId, newSkill, result) => {
  dbConn.query(
    "UPDATE skill_tb SET skill_name=? WHERE id=?",
    [newSkill, skillId]
  ).then(
    res => {
      console.log(res);
      result(null, res);
    }
  ).catch(
    err => {
      console.log(err);
      result(err, null)
    }
  )
}

ProgrammerSkill.delete = (skill_id, result) => {
  dbConn.query(
    "DELETE FROM skill_tb WHERE id=?",
    [skill_id]
  ).then(
    res => {
      console.log(res);
      result(null, res);
    }
  ).catch(
    err => {
      console.log(err);
      result(err, null)
    }
  )
}

module.exports = ProgrammerSkill;