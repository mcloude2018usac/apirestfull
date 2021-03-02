
var express  = require('express');
const fileUpload = require('express-fileupload');
const cron = require("node-cron");
var crntt = require('./app/controllers/crontabfunc');
var correop= require('./app/controllers/mailprueba');
var multer  = require('multer');

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
let UPLOAD_PATH = 'uploads'
const WORKERS = process.env.WEB_CONCURRENCY || 1
process.env.NODE_TLS_REJECT_UNAUTHORIZED=1

throng({
  workers: WORKERS,
  lifetime: Infinity
}, start)

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, UPLOAD_PATH)
  },
  filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
  }
})
let upload = multer({ storage: storage })


function start() {
//mongoose.set('useFindAndModify', false);
  mongoose.connect(databaseConfig.url, { useNewUrlParser: true ,useCreateIndex: true 
    , useUnifiedTopology: true ,useFindAndModify: false});
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
app.use(express.static('www'));



app.use(fileUpload({  createParentPath: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json({limit: '150mb'})); // Send JSON responses
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

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
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
    res.status(422).send({ error: 'Something failed!' });
  } else {
    next(err);
  }
}

function errorHandler(err, req, res, next) {
  res.status(422);
  res.render('error', { error: err });
}

/*
var CryptoJS = require("crypto-js")



var key = CryptoJS.enc.Utf8.parse('N0T!3n3%');
   
var iv = CryptoJS.enc.Utf8.parse('N0T!3n3%');

var decrypted = CryptoJS.AES.decrypt('4ET+fXArweOEOA3Bf72xAY7BFC9lYQB7E9yXVjyrg+lEqUrpQthjjajqOSXoatCCDu8rFf1hrg+JEv9EvS8rul4lxKFYwP4+DyeLUyukSQa0f0DdCQmrIOZbCz8GZaBh', key, {
    keySize: 128 / 8,
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
});

var originalText= decrypted.toString(CryptoJS.enc.Utf8);

 
console.log(originalText); // 'my message'
*/

//correop.mandacorreoprueba2(['mario.morales@mcloude.com'],'Solicitando salon para Unidad academica:', 'Solicitud de nuevo salon',['mario.morales@mcloude.com'])

//correop.mandacorreoprueba2('mensaje xxxxxxxxxxxxxxx')
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
/*
const qrcode = require('qrcode')
const generatePayload = require('promptpay-qr')

const mobileNumber = '000-000-0000'
const amount = 4.22
const payload = generatePayload(mobileNumber, { amount })
console.log(payload)

const options = { type: 'svg', color: { dark: '#003b6a', light: '#f7f8f7' } }

  qrcode.toString(payload, options, (err, svg) => {
    if (err) return reject(err)
    console.log(svg)
  })





var  fps = require('node-fps-hk')

// set custom variables
fps.setMerchantID("0000001");
fps.setBillNumber("0002");
fps.setStoreLabel("0003");
fps.setLoyaltyNumber("0004");
fps.setCustomerLabel("0005");
fps.setTerminalLabel("0006");
fps.setPurposeOfTransaction("0007");
fps.setMobileNumber("12345678");
fps.setTransactionAmount("5000");
fps.setReferenceLabel("ABCD");

//generate qr content string
var  qrContent = fps.generate();





const options = { type: 'svg', color: { dark: '#003b6a', light: '#f7f8f7' } }
await new Promise((resolve, reject) => {
  qrcode.toString(payload, options, (err, svg) => {
    if (err) return reject(err)
    resolve(svg)
  })
})



const generatePayload = require('promptpay-qr')

const mobileNumber = '1234444'
const amount = 4.22
const payload = generatePayload(mobileNumber, { amount })
console.log(payload)

var parser = require('promptpay-emvco-parser');
var input = '00020101021229370016A000000677010111011300668711111115802TH53037645406500.006304ABAC';
var info = parser(payload);
console.log(info)
*/

