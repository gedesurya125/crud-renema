const express = require('express');
const bodyParser = require('body-parser');

//create an express app
const app = express();

//set the server port

const port = process.env.PORT || 5000;

//parse request url encoded
app.use(bodyParser.urlencoded({ extended: true }));

//parse request json
app.use(bodyParser.json());


//define a default route
app.get("/", (req, res) => {
  res.send("Hello World");
})

//listen for request
app.listen(port, () => {
  console.log(`Server is listeneing at PORT : ${port}`);
})
