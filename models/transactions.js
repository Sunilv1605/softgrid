// var conn = require('../config/database.js');

var mysql = require('mysql');
var con = mysql.createConnection({
  connectTimeout : 5000,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'softgrid',
});

var apiHitory = 'sg_api_transactions';

/* con.connect(function (err) {
  if (err) {
    console.log('Database Connection Error');
    return;
  }
}); */

module.exports.saveData = function(insertObj){
  con.connect(function (err) {
  if (err) {
    console.log('Database Connection Error');
    return;
  }
    var token = insertObj.token;
    var status = insertObj.status;
    // var tbd = 'bearer qweqwrqwDafas';
    var qry = `INSERT INTO ${apiHitory}(token,ip, status) VALUES('${token}','${insertObj.ip}','${status}')`;
    // var qry = "INSERT INTO sg_api_transaction(token, status) VALUES('"+tbd+"')";
    con.query(qry, function(err, result){
      if(err){
        throw err;
      }
      console.log('Record Inserted');
    });
  console.log('Db Connected Successfully 01');
  })
}

/* 
* To get api history data
*/
module.exports.getData = function (cb) {
  con.connect(function (err) {
    if (err) {
      console.log('Database Connection Error', err);
      return;
    }
    // con.end();
  })
  var qry = `SELECT *, count(*) as total FROM sg_api_transactions where status='1' GROUP BY token `;
  con.query(qry, function (err, result) {
    if (err) {
      throw err;
    }
    cb(JSON.stringify(result));
  });
  // con.end();
}