var connection = require("../config/connection.js");

connection.connect(function(err) {
  if(err) {
    console.log("Error", err.stack);
  }
  console.log("Connected as id: %s", connection.threadId)
});

var orm = {
    insertOne: function(burger,cb) {
    var burgerName = burger;
    var mySQLQuery = "insert into burgers (burger_name) values ('" + burgerName + "')";
    console.log("doing the insert burger = " + burger);
    if (burgerName != ""){
      connection.query(mySQLQuery, function(err, result) {
      if (err) throw err;
      cb(result);  
    });
   } else {
     console.log("burgerName must not be blank");
   } 
  },
    updateOne: function(burgerId,cb) {
    var id = burgerId;
    connection.query("update burgers set devoured=1 where id=?", [id], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  selectAll: function(tableName,cb){  
  connection.query('select  * from burgers', function(err, result) {
      if (err) throw err;
      cb(result);
  });
 }
};

module.exports = orm;
