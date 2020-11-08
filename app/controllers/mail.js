
var nodemailer = require('nodemailer');
//var ses = require('nodemailer-ses-transport');
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

   
exports.getMail2 = function(req1, res){

  let params = {
    Destination: {
      BccAddresses:[req1.destino]
    },
    Message: {
      Body: {
        Html: {
          Charset: CHARSET,
          Data: req1.html
        }
      },
      Subject: {
        Charset: CHARSET,
        Data:  req1.subjet
      }
    },
    ReplyToAddresses: [],
    ReturnPath: RETURN_PATH,
    Source: SOURCE
  }

  ses.sendEmail(params, function(err, data) {
    if (err) {
      res.status(500).send(err);
      return
    }
  
  })


}   

  
//user: 'usacenlinea1.0@usacenlinea.net',
exports.getMail = function(req, res, next){

  let params = {
    Destination: {
      BccAddresses:[req.body.destino]
    },
    Message: {
      Body: {
        Html: {
          Charset: CHARSET,
          Data: req.body.html
        }
      },
      Subject: {
        Charset: CHARSET,
        Data:  req.body.subjet
      }
    },
    ReplyToAddresses: [],
    ReturnPath: RETURN_PATH,
    Source: SOURCE
  }

  ses.sendEmail(params, function(err, data) {
   
    if (err) {
      res.status(500).send('error al enviar correo');
      console.log(err)
      return
    }
    res.json(data);
  })


  




}


exports.getMailarray = function(req, res, next){

  let params = {
    Destination: {
      BccAddresses:req.body.destino
    },
    Message: {
      Body: {
        Html: {
          Charset: CHARSET,
          Data: req.body.html
        }
      },
      Subject: {
        Charset: CHARSET,
        Data:  req.body.subjet
      }
    },
    ReplyToAddresses: [],
    ReturnPath: RETURN_PATH,
    Source: SOURCE
  }

  ses.sendEmail(params, function(err, data) {
   
    if (err) {
      res.status(500).send('error al enviar correo');
      console.log(err)
      return
    }
    res.json(data);
  })


  




}
