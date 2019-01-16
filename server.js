var express  = require('express');

const cron = require("node-cron");
var crntt = require('./app/controllers/crontabfunc');
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


mongoose.connect(databaseConfig.url);

  // schedule tasks to be run on the server
  cron.schedule("59 23 * * *", function() {
   
    crntt.mandaeventos();
  
   /* fs.unlink("./error.log", err => {
      if (err) throw err;
   
    });
    */
  });

 
app.listen(process.env.PORT || 9090);
console.log("App listening on port 9090");
//app.use(express.favicon());
//app.use(express.logger('dev'));

//app.use(express.methodOverride());

app.use(bodyParser.urlencoded({limit: '10mb', extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json({limit: '50mb'})); // Send JSON responses
app.use(methodOverride());
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);
app.use(logger('dev')); // Log requests to API using morgan
app.use(cors());
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
}); 
router(app);



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

/*

// Instruct node to run the socket server on the following port
http.listen(process.env.PORT || 9191, function()
{
  console.log('listening on port 9191' );
});
*/