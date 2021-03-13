'use strict';
const mariadb = require('mariadb');

//local mysql db connection
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: 'karisma125',
  connectionLimit: 5,
  port: 3307,
  database: "programmer"
});

pool.getConnection()
  .then(conn => {
    if(conn) console.log("Database Connected !!")

    /*
    conn.query("SELECT 1 as val")
      .then((rows) => {
        console.log(rows);
        return conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
      })
      .then( res => {
        console.log(res);
        conn.end();
      })
      .catch(err => {
        //handle error
        console.log(err);
        conn.end();
      })
      */
  }).catch(err => {
    console.log("Database not connected");
    conn.end();
  })

module.exports = pool;