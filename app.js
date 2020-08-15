var express = require("express");
var bodyParser = require('body-parser');
var fs = require('fs');
var database = require('./models/transactions.js');

/* for testing purpose only */


var app = express();
app.use(bodyParser.json()) ;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  

    var P1 = new Promise(function(resolve, reject){
      database.getData(function (result) {
        // var history = JSON.stringify(result);
        // console.log('result : ', result);
        resolve(result);
      });
    });
    var proArr = [P1];
    Promise.all(proArr).then(function (final) {
      var history = JSON.parse(final[0]);
      console.log('final : : : ', history);
      console.log('length : ', final[0].length);
      var pageData = { title: "Homepage", pageName: 'home', list: history };
      res.render('layout', pageData);
    });
    
    /* var p1 = Promise.resolve('list');
    var p2 = Promise.resolve('test');
    var final = [p1,p2];
    Promise.all(final).then(function(data){
      console.log('result: ',data);
    }); */
});

app.get('/products', function(req, res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if (!req.headers.authorization){
    // throw new Error('You must send an Authorization header');
    var data = {status:204, message:'Authorization token is missing'};
    res.json(data);
  }
  else{
    // var verified_token = [{0 : 'Bearer partnerA', 1: 'Bearer partnerB'}];
    var authToken = req.headers.authorization;
    var verified_token = ['Bearer partnerA','Bearer partnerB'];
    var output = verified_token.find(function (token){
      if(authToken==token){
        var insertObj = { token: req.headers.authorization, ip: req.ip, status: 1};
        database.saveData(insertObj);
        var data = { 0: { id: 1, title: 'Samsung note 9', price: 45000 }, 1: { id: 2, title: 'Samsung note 10 lite', price: 35000 } };
        res.json(data);
      }
    });
    var response = { status: 205,
      error: 'You are not authorized to access the API',
      note: `For staging purpose only : available tokens are ${verified_token}`,
      ip : req.ip
    }
    res.json(response);
  }
});

app.listen('2500',function(){
  console.log('Server Start');
});