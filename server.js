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



//mongoose.set('useCreateIndex', true);
mongoose.connect(databaseConfig.url, { useNewUrlParser: true ,useCreateIndex: true });

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

var registrationToken = "eLrosvO4YMg:APA91bEmdUFHl0GrZizado454Jru-hWb6tLoLOzGdn8VJNNsYvUdkHoWrntq7Vj26VWZooGQmNj0Wy_NJBDgdSa7LanHPnQSjMnbT_cVF95V19mpjIKXnQcm8Ed6pgR2JJyNQu8Bppfn";


var message = {
  data: {
    score: '850',
    time: '2:45'
  },
  token: registrationToken
};

// Send a message to the device corresponding to the provided
// registration token.
admin.messaging().send(message)
  .then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });
*/
  /*


  var payload = {
        notification: {
          title: message.title,
          body: message.body,
          icon: "https://placeimg.com/250/250/people"
        }
      };


var payload = {
  notification: {
    title: "This is a Notification",
    body: "This is the body of the notification message."
  }
};

var options = {
  priority: "high",
  timeToLive: 60 * 60 *24
};

admin.messaging().sendToDevice(registrationToken, payload, options)
  .then(function(response) {
    console.log("Successfully sent message:", response);
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
  });
*/

//correop.mandacorreoprueba();

/*

// Instruct node to run the socket server on the following port
http.listen(process.env.PORT || 9191, function()
{
  console.log('listening on port 9191' );
});
*/