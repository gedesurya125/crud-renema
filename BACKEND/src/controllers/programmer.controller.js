'use strict';
const Programmer = require('../models/programmer.model');

//===CREATE===
//Insert new programmer to Programmer.user_tb
exports.create = (req, res) => {
  //create new Programmer object based on req.body
  const newProgramer = new Programmer(req.body);
  console.log(newProgramer.name);
  //Chect if req.body is empty
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    //case empty send to browser error object
    res.status(400).send({
      error: true,
      message: 'Please provide all required field'
    })
  }else{
    //case not empty add the programmer to programmer.user_tb
    Programmer.create(newProgramer, (err, programmer) => {

      err ? res.send(err) : res.json({
        error: false,
        message: "New Programmer added succesfully",
        data: programmer //response the sql status
      }) 
    })
  }
}

//===FIND BY ID===
//Find Progammer by id
exports.findById = (req, res) => {
  Programmer.findById(req.params.id, (err, programmer) => {
    //resulting programmer data based on given id
    err ? res.send(err) : res.json(programmer);
  })
}


//===FETCH ALL PROGRAMMER DATA===
//Fetch all programmer in the Programmer.user_tb
exports.findAll = (req, res) => {
  Programmer.findAll((err, programer) => {
    console.log('controller');
    err ? res.send(err) : res.send(programer);//res.json(programmer);
  })
}

//===UPDATE PROGRAMMER DATA WITH GIVEN ID===
//Update programmer data based on the ID
exports.update = (req, res) => {
  //chec if req.body is empty
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    //case empty send status 400 (bad request message required request body is missing)
    res.status(400).send({
      error: true,
      message : 'please provide all required Field'
    })
  }else{
    //case req.body not empty run update from model/porgrammer.model.js
    Programmer.update(req.params.id, new Programmer(req.body), (err, response) => {
      err ? res.send(err) : res.json({
        error: false,
        message : `programmer succesfully updated`,
        response
      });
    })
  }
}

//===DELETE PROGRAMMER BASED ON GIVEN ID===
//delete programer based on given id
exports.delete = (req, res) => {
  //model/programer.model.js
  Programmer.delete(req.params.id, (err, response) => {
    err ? res.send(err) : res.json({
      error: false,
      message: `programmer with ID = ${req.params.id} successfully deleted`
    })
  })
}