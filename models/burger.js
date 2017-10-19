var orm = require("../config/orm.js");

var burgerQueries = {
  selectAll: function (cb) {
    orm.selectAll('tableName', function (res) {
      cb(res);
    });
  },
  insertOne: function (burgerName, cb) {
    console.log('in insertOne burger burgerName = ' + burgerName);
      orm.insertOne(burgerName, function(res){
      cb(res);
    });
  },
  updateOne: function (burgerId, cb) {
    console.log("in orm eat");
    orm.updateOne(burgerId, function (res){
      cb(res);
    })
  }
};

module.exports = burgerQueries;
