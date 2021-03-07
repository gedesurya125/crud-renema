'use strict';
const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'karisma125',
  database: 'programmer'
});

dbConn.connect((err) => {
  if(err) throw err;
  console.log('connection success!!')
});

module.exports = dbConn;