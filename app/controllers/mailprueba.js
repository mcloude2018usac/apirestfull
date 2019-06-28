
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

//new massMailer(); 
//var mas = new massMailer();
module.exports = {
    mandacorreoprueba: mandacorreoprueba,
    massMailer: massMailer
      }
