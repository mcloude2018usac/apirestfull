
var express  = require('express');

const cron = require("node-cron");
var crntt = require('./app/controllers/crontabfunc');
var correop= require('./app/controllers/mailprueba');
//const fs = require("fs");
var app      = express();
var mongoose = require('mongoose');
var logger = require('morgan');

var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');
var databaseConfig = require('./config/database');
var router = require('./app/routes');

var mailt = require('./app/controllers/mail');
const throng = require('throng')

const WORKERS = process.env.WEB_CONCURRENCY || 1
process.env.NODE_TLS_REJECT_UNAUTHORIZED=1

throng({
  workers: WORKERS,
  lifetime: Infinity
}, start)

function start() {

  mongoose.connect(databaseConfig.url, { useNewUrlParser: true ,useCreateIndex: true });
  cron.schedule("59 23 * * *", function() {
    crntt.mandaeventos();
  });
app
.get('/cpu', cpuBound)
.get('/memory', memoryBound)
.get('/io', ioBound)
.listen(process.env.PORT || 9090);
console.log("App listening on port 9090");

//app.use(express.static('app/controllers'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json({limit: '50mb'})); // Send JSON responses
app.use(methodOverride());
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);
app.use(logger('dev')); // Log requests to API using morgan
app.use(cors());
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Rest api full 5.0!');
}); 
router(app);




  function hello(req, res, next) {
    res.send('Hello, world')
  }

  function cpuBound(req, res, next) {
    const key = Math.random() < 0.5 ? 'ninjaturtles' : 'powerrangers'
    const hmac = crypto.createHmac('sha512WithRSAEncryption', key)
    const date = Date.now() + ''
    hmac.setEncoding('base64')
    hmac.end(date, () => res.send('A hashed date for you! ' + hmac.read()))
  }

  function memoryBound(req, res, next) {
    const large = Buffer.alloc(10 * 1024 * 1024, 'X')
    setTimeout(() => {
      const len = large.length  // close over the Buffer for 1s to try to foil V8's optimizations and bloat memory
      console.log(len)
    }, 1000).unref()
    res.send('Allocated 10 MB buffer')
  }

  function ioBound(req, res, next) {
    setTimeout(function SimulateDb() {
      res.send('Got response from fake db!')
    }, 300).unref()
  }

  function onListen() {
    console.log('Listening on', PORT)
  }
}




function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}


function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' });
  } else {
    next(err);
  }
}

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}

//correop.mandacorreoprueba2()
//correop.mandanoti(); 
/*

var querystring = require('querystring');
var MailParser = require("mailparser").MailParser;

var server = require('http').createServer();
server.addListener('request', function(req, res) {
  var chunks = [];
  req.on('data', chunks.push.bind(chunks));
  req.on('end', function() {
    var mailparser = new MailParser();
    mailparser.on("end", function(mail_object) {
      // TODO: use 'mail_object'
      // see API for https://github.com/andris9/mailparser
      res.writeHead(200, {'content-type': 'text/plain'});
      res.end();
    });
    var params = querystring.parse(chunks.join("").toString());
    mailparser.write(params['message']);
    mailparser.end();
  });
});
var port = 3000;
console.log(' [*] Listening on 0.0.0.0:' + port);
server.listen(port, '0.0.0.0');
*/