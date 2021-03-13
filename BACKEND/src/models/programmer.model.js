//Require databases configuration (programmer database)
const dbConn = require('../../config/db.config');

//membuat programer object
const Programmer = function(programmer){
  this.name = programmer.name;
  this.photo = programmer.photo;
};

//Insert new Programer to databases
Programmer.create = (newProgramer, result) => {
  dbConn.query(
    "INSERT INTO user_tb VALUE (?,?,?)", 
    [null, newProgramer.name, newProgramer.photo]
    )
    //if sucess fill the callback function with result(null, insertID)
    .then(res => {
      console.log(res);
      result(null, res.insertId);
      //dbConn.end()
    })
    //if fail fill the callback function with result(err, null)
    .catch(err => {
      console.log("error :", err);
      result(err, null);
      //dbConn.end();
    });
}

//Find by ID from Programmer.user_tb
Programmer.findById = (id, result) => {
  dbConn.query(
    "SELECT * FROM user_tb WHERE id=?", 
    [id]
    )
    //if found fill the callback function with result(null, res)
    .then(res => {
      console.log(res);
      result(null, res);
      //dbConn.end()
    })
    //if not found / err fill the callback function with result(err, null)
    .catch(err => {
      console.log("error :", err);
      result(err, null);
      //dbConn.end();
    });
}

//Find All
Programmer.findAll = (result) => {
  dbConn.query(
    "SELECT * FROM user_tb"
    )
    //if found fill the callback function with result(null, res)
    .then(res => {
      console.log(res);
      result(null, res);
      //dbConn.end()
    })
    //if not found / err fill the callback function with result(err, null)
    .catch(err => {
      console.log("error :", err);
      result(err, null);
      //dbConn.end();
    });
}

//Update programer user_tb with given id and new Programmer data
Programmer.update = (id, programmer, result) => {
  dbConn.query(
    "UPDATE user_tb SET name=?, photo=? WHERE id=?", [programmer.name, programmer.photo, id]
  )
  //if success fill the callback function with response with id update
  .then(res => {
    console.log(res);
    result(null, res);
    //dbConn.end();
  })
  .catch( err => {
    console.log("error : ", err);
    result(err, null);
    //dbConn.end();
  });
}

//Delete programer from user_tb with given id
Programmer.delete = (id, result) => {
  dbConn.query(
    "DELETE FROM user_tb WHERE id=?", [id]
  )
  //if success fill the callback function with response with id update
  .then(res => {
    console.log(res);
    result(null, res);
    //dbConn.end();
  })
  .catch( err => {
    console.log("error : ", err);
    result(err, null);
    //dbConn.end();
  });
}

//Export the model
module.exports = Programmer;