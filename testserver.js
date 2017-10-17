//used to test the database connection, queries, express, express-handlebars
//and body-parser
var express = require('express')
var app = express()
var expressHandlebars = require('express-handlebars')
var mysql = require('mysql')
var bodyParser = require('body-parser')
var app = express()
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: false}));

var connection = mysql.createConnection({
  host:'localhost',
  port:3306,
  user:'root',
  password:'',
  database:'burgers_db'
});


app.get('/',function(req,res){
  connection.query("SELECT * FROM burgers", function(err, results) {
    if(err) {
      throw err;
    }
    var data = {
      burgerData: results
    }
    //res.send(results);
    res.render('index', data);
  });
});

app.post('/create', function(req, res) {
  console.log(req.body.burger_name);
  var mySQLQuery = "INSERT INTO burgers (burger_name) VALUES ('" + req.body.item + "')";

  connection.query(mySQLQuery, function(err) {
    if (err) {
      throw err
    }
    res.redirect('/');
  });
});

app.post('/update/:id', function(req, res) {
  var mySQLQuery = "UPDATE burgers SET devoured=1 WHERE id=" + connection.escape(req.params.id);

  connection.query(mySQLQuery, function(err) {
    if (err) {
      throw err
    }
    res.redirect('/');
  });
});


// app.get('/delete/:id', function(req, res) {
//   var mySQLQuery = "DELETE FROM burgers WHERE id=" + req.params.id;

//   connection.query(mySQLQuery, function(err) {
//     if (err) {
//       throw err
//     }
//     res.redirect('/');
//   });
// });


app.listen(PORT, function(){
  console.log('Listening on %s', PORT)
})
