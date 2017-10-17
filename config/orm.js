var connection = require("../config/connection.js");

connection.connect(function(err) {
  if(err) {
    console.log("Error", err.stack);
  }
  console.log("Connected as id: %s", connection.threadId)
});

var orm = {
  addBurger: function(burger, cb) {
    var burgerName = burger;
    var mySQLQuery = "insert into burgers (burger_name) values ('" + burgerName + "')";
    console.log("doing the insert burger = " + burger);
    if (burgerName != ""){
      connection.query(mySQLQuery, function(err, result) {
      if (err) throw err;
      cb(result);  
    });
   } else {
   // alert("burger must have a name");
   } 
  },
  eatBurger: function(burgerId, cb) {
    var id = burgerId;
    connection.query("update burgers set devoured=1 where id=?", [id], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  showBurgers: function(tableName, cb) {
  connection.query('SELECT * FROM burgers', function(err, result) {
      if (err) throw err;
      cb(result);
  });
 }
};

module.exports = orm;
