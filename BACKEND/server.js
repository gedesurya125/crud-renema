const express = require('express');
const bodyParser = require('body-parser');
const programmerRouter = require('./src/routes/programmer.route');
const programmerSkillRouter = require('./src/routes/programmer-skill.route');


//create an express app
const app = express();

//set the server port

const port = process.env.PORT || 5000;

//parse request url encoded
app.use(bodyParser.urlencoded({ extended: true }));

//parse request json
app.use(bodyParser.json());

//define a root route
app.get("/", (req, res) => {
  res.send("HELLO BRO");
})
//using programmerRouter as midd
app.use('/api/programmer',programmerRouter);
app.use('/api/programmer-skill',programmerSkillRouter);

//listen for request
app.listen(port, () => {
  console.log(`Server is listeneing at PORT : ${port}`);
})


/*
dbConn.getConnection().then(conn => {
  conn.query("INSERT INTO user_tb set ?", newProgrammer)
  .then( res => {
    console.log(res);
    conn.end();
  })
});
*/