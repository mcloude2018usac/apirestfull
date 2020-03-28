
var nodemailer = require('nodemailer');


var async = require("async");
var http = require("http");
var events = require('events').prototype;
// This will store emails needed to send.
// We can fetch it from DB (MySQL,Mongo) and store here.
var listofemails = ["mario.morales@mcloude.com",
"jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com",
"jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com",
"jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com",
"jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com",
"jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com",
"jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com",
"jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com",
"jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com",
"jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com",
"jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com","jggm.meph@gmail.com"

]; 
// Will store email sent successfully.
var success_email = [];
// Will store email whose sending is failed. 
var failure_email = [];

var transporter;


const REGION = 'us-east-1'
const PROFILE = 'ses'
const CREDENTIALS_FILE = 'credentials'
const SOURCE = 'noreply@usacenlinea.info'
const CHARSET = 'UTF-8'
const RETURN_PATH = 'noreply@usacenlinea.info'
const MULTIPART_TYPE = 'multipart/alternate'
const HTML_TYPE = 'text/html;charset=utf-8'

const util = require('util')
const fs = require('fs')
const AWS = require('aws-sdk')
const mimemessage = require('mimemessage')

const credentials = new AWS.SharedIniFileCredentials({filename: CREDENTIALS_FILE, profile: PROFILE})
AWS.config.update({region: REGION})
AWS.config.credentials = credentials
const ses = new AWS.SES()


var mandacorreoprueba2= function(){
  sendEmail(['mario.morales@mcloude.com'],'pruebA','MENSAJE DE PRUEBA',['mario.morales@mcloude.com'])

}

var mandacorreo= function(){
  sendEmail(['mario.morales@mcloude.com'],'pruebA','MENSAJE DE PRUEBA',['mario.morales@mcloude.com'])

}

function sendMails(bccAddresses, message, subject, replyToAddresses, attachments){
  let i
  let j
  let batch
  let batchSize = 50
  if(attachments){
    let msg
    let alternateEntity
    let htmlEntity
    let attachmentEntity

    msg = mimemessage.factory({
      contentType: 'multipart/mixed',
      body: []
    })
    msg.header('Subject', subject)
    msg.header('From', SOURCE)

    alternateEntity = mimemessage.factory({
      contentType: MULTIPART_TYPE,
      body: []
    })
    htmlEntity = mimemessage.factory({
      contentType: HTML_TYPE,
      body: message
    })
    alternateEntity.body.push(htmlEntity)
    msg.body.push(alternateEntity)

    attachments.forEach((attachment) => {
      attachmentEntity = mimemessage.factory({
        contentType: attachment.contentType,
        contentTransferEncoding: 'base64',
        body: base64_encode(attachment.url)
      })
      attachmentEntity.header('Content-Disposition', util.format('attachment ;filename="%s"', attachment.filename))
      msg.body.push(attachmentEntity)
    })

    for (i=0, j=bccAddresses.length; i<j; i+=batchSize) {
      batch = bccAddresses.slice(i,i+batchSize)
      msg.header('Bcc', batch.join(','))
      setTimeout(
        sendRawEmail,
        80 * i/batchSize,
        msg
      )
    }
  } else{
    for (i=0, j=bccAddresses.length; i<j; i+=batchSize) {
      batch = bccAddresses.slice(i,i+batchSize)
      setTimeout(
        sendEmail,
        80 * i/batchSize,
        batch, message, subject, replyToAddresses
      )
    }
  }
}

function sendEmail(bccAddresses, message, subject, replyToAddresses){
  let params = {
    Destination: {
      BccAddresses: bccAddresses
    },
    Message: {
    
      Body: {
        Html: {
          Charset: CHARSET,
          Data: message
        }
      },
      Subject: {
        Charset: CHARSET,
        Data: subject
      }
    },
    ReplyToAddresses: replyToAddresses,
    ReturnPath: RETURN_PATH,
    Source: SOURCE
  }

  ses.sendEmail(params, function(err, data) {
    if (err) {
      console.log(err, err.stack)
      return
    }
   
  })
}

function sendRawEmail(mimeMessage){
  let params = {
    Destinations: [
    ],
    RawMessage: {
      Data: mimeMessage.toString()
    },
    Source: SOURCE,
  }
  ses.sendRawEmail(params, function(err, data) {
    if (err) {
      console.log(err, err.stack)
      return
    }
    console.log(data)
  })
}

function base64_encode(file) {
  let bitmap = fs.readFileSync(file)
  return new Buffer(bitmap).toString('base64')
}


  var massMailer= function(){
 // var self = this;
  transporter = nodemailer.createTransport({
    service: 'gmail',
    socketTimeout: 5000,
    auth: {
           user: 'usacenlinea1.0@usacenlinea.net',
           pass: 'Amazon1518@'
       }
  });
  // Fetch all the emails from database and push it in listofemails
      // Will do it later.
  invokeOperation();
};


/* Invoking email sending operation at once */

invokeOperation = function() {
//  var self = this;
  async.each(listofemails,SendEmail,function(){
      console.log(success_email);
      console.log(failure_email);
  });
}

/* 
* This function will be called by multiple instance.
* Each instance will contain one email ID
* After successfull email operation, it will be pushed in failed or success array.
*/
var status = false;
SendEmail = function(Email,callback) {
  console.log("Sending email to " + Email);
 // var self = this;
 
  // waterfall will go one after another
  // So first email will be sent
  // Callback will jump us to next function
  // in that we will update DB
  // Once done that instance is done.
  // Once every instance is done final callback will be called.
  async.waterfall([
      function(callback) {                
          var mailOptions = {
              from: 'usacenlinea1.0@usacenlinea.net',     
              to: Email,
              subject: 'Hi ! This is atact innova mails', 
              text: "Innova mails!"
          };
          transporter.sendMail(mailOptions, function(error, info) {               
              if(error) {
                  console.log(error)
                  failure_email.push(Email);
              } else {
                status = true;
                  success_email.push(Email);
              }
              callback(null,status,Email);
          });
      },
      function(statusCode,Email,callback) {
              console.log("Will update DB here for " + Email + "With " + statusCode);
              callback();
      }
      ],function(){
          //When everything is done return back to caller.
          callback();
  });
}




process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; 
var transporter = nodemailer.createTransport({
    host: 'smtp3.innovatelco.net',
    port: 25,
    secure: false,
    ignoreTLS: true,
   
    auth: {
           user: 'usac@innovagt.net',
           pass: 'Inn0va19!'
       }
   });
  

var mandacorreoprueba= function(){

                                                var cc=0;
                                                var chtml='';

                                             chtml="  <table style='width:100%; border: 1px solid black; border-collapse: collapse'><tr> <th>Evento</th> <th>No participantes</th> </tr>"

                                            /* var transporter = nodemailer.createTransport({
                                              service: 'gmail',
                                              auth: {
                                                     user: 'usacenlinea1.0@usacenlinea.net',
                                                     pass: 'Amazon1518'
                                                 }
                                             });
                                          
  
*/
                                                
                                                chtml=chtml+ "</table>"

                                                const mailOptions = {
                                                        from: 'usac@innovagt.net', // sender address
                                                        to: 'usacenlinea1.0@gmail.com;mario.morales@mcloude.com', // list of receivers
                                                        subject: 'Gestion de Eventos', // Subject line
                                                        html:chtml,
                                                        text:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                                                      
                                                      };
                                                 
                                                        transporter.sendMail(mailOptions, function (err, info) {
                                                                if(err){
                                                                 
                                                                    console.log(err);
                                                                //info.status(500).send(err.sqlMessage);
                                                                }
                                                                else
                                                                {
                                                        
                                                                        console.log(info);
                                                        
                                                                }
                                                                
                                                                
                                                        });



       

    
}
//var serviceAccount = require("./adminsdk.json");

const fetch = require('node-fetch');
var mandanoti= function(){
  
    var key = 'AAAAQdgXqn0:APA91bGPmzDyRlrXuLxDcFG4NZTwIZSJDSFdmEXK2RpS18PIODjyN7g53nNPldgL8RsTOpb1KlFyV2vLqSdhkX88yM7bBXsDJevURqxvAnZHqzXxKUFBh07iU6hyeci4O_EjRJOGtATb'; //put your server key here
    var to = 'cy1xkyrrRuY:APA91bGJd4tH0rLQXOXfLSQkBhJ1KDNvt7lhhfIAwzSxURbyfK5v4meMzzvIrQNHG6v-ccxoNRdMOIzrTMN7dA-xj4qVwANiotzIR4HGQG-HKASR6laT-DQiv1tewUYfL4hrbQXH4iHf';
    var notification = {
      'title': 'Portugal vs. Denmark',
      'body': '5 to 1',
      'icon': 'firebase-logo.png',
      'click_action': 'http://localhost:8081'
      
    };
    
    fetch('https://fcm.googleapis.com/fcm/send', {
      'method': 'POST',
      'headers': {
        'Authorization': 'key=' + key,
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify({
        'notification': notification,
        'to': to
      })
    }).then(function(response) {
      console.log(response);
    }).catch(function(error) {
      console.error(error);
    })


}
var soap = require('soap');
var dasoap= function(){

  var url = 'https://pruebassiif.usac.edu.gt/WSGeneracionOrdenPagoV2/WSGeneracionOrdenPagoV2SoapHttpPort?wsdl';
var args = {UNIDAD: '30',EXTENSION:'2'};
soap.createClient(url, function(err, client) {
  client.generarOrdenPago(args, function(err, result) {
      console.log(result);
  });
});


}

//new massMailer(); 
//var mas = new massMailer();
module.exports = {
    mandacorreoprueba: mandacorreoprueba,
    mandacorreoprueba2: mandacorreoprueba2,
    massMailer: massMailer,
    sendMails:sendMails,
    mandanoti:mandanoti,
    dasoap:dasoap,
    sendEmail:sendEmail
      }
