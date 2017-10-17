
var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  port: 3306,
  user:'root',
  password: 'h3ckl3r',
  database:'burgers_db'
}); 
 
module.exports = connection;

//used to test the database connection
// connection.connect(function(err) {
//   if(err) {
//     console.log("Error", err.stack);
//   }
//   console.log("Connected as id: %s", connection.threadId)
// });

// connection.query('SELECT * FROM burgers', function(err, rows, fields) {                                                   
//     if (err) throw err;
//     console.log("The burger connection test :" + rows[0].burger_name);                 
// });
