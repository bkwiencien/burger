var orm = require("../config/orm.js");

var burgerQueries = {
  selectAll: function (cb) {
    orm.selectAll('tableName', function (res) {
      cb(res);
    });
  },
  add: function (burgerName, cb) {
    console.log('in add burger burgerName = ' + burgerName);
      orm.insertOne(burgerName, function(res){
      cb(res);
    });
  },
  eat: function (burgerId, cb) {
    console.log("in orm eat");
    orm.eatBurger(burgerId, function (res){
      cb(res);
    })
  }
};

module.exports = burgerQueries;
