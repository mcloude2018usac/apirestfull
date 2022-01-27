
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
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


exports.getMailofice356 = function(req, res, next){

  let transporter = nodemailer.createTransport(smtpTransport({
  
    host: 'smtp.office365.com',
    secureConnection: false,
    tls: { ciphers: 'SSLv3' },
    auth: {
        user: req.body.origencorreo,
        pass: req.body.clavecorreo
    }
  }));
  
  const mailOptions = {
    from: req.body.origencorreo,
    to: req.body.destino,
    subject: req.body.subjet,
    html:  req.body.html
};


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
      console.log(error);
  } else {
    res.json(info);
  }
});

} 

exports.getMailgoogle = function(req, res, next){

  if(req.params.id3==='GMAIL')
  {
    let transporter = nodemailer.createTransport(smtpTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
          user: req.body.origencorreo,
          pass: req.body.clavecorreo
      }
    }));
    
    const mailOptions = {
      from: req.body.origencorreo,
      to: req.body.destino,
      subject: req.body.subjet,
      html:  req.body.html
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
        res.status(500).send('error al enviar correo');
    } else {
      res.json(info);
    }
  });
  }

  if(req.params.id3==='USAC')
  {
    let transporter = nodemailer.createTransport(smtpTransport({
      service: 'mail',
      host: 'mail.usac.edu.gt',
      port:  587,
      auth: {
          user: req.body.origencorreo,
          pass:' req.body.clavecorreo'
      }
    }));
    
    const mailOptions = {
      from: req.body.origencorreo,
      to: req.body.destino,
      subject: req.body.subjet,
      html:  req.body.html
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
        res.status(500).send('error al enviar correo');
    } else {
      res.json(info);
    }
  });
  }

  if(req.params.id3==='OFFICE365')
  {
  
    let transporter = nodemailer.createTransport(smtpTransport({
  
      host: 'smtp.office365.com',
      port:  Number(req.body.puertocorreo),
      secureConnection: false,
      tls: { ciphers: 'SSLv3' },
      auth: {
          user: req.body.origencorreo,
          pass: req.body.clavecorreo
      }
    }));
    
    const mailOptions = {
      from: req.body.origencorreo,
      to: req.body.destino,
      subject: req.body.subjet,
      html:  req.body.html
  };
  
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);  res.status(500).send('error al enviar correo');
        
    } else {
      res.json(info);
    }
  });
  }


}  
//user: 'usacenlinea1.0@usacenlinea.net',
exports.getMail = function(req, res, next){

  let transporter = nodemailer.createTransport(smtpTransport({
   
    host: 'mail.usac.edu.gt',
    port:587,
  //  requireTLS :true,
  secureConnection: false,
      tls: { ciphers: 'SSLv3' },
    auth: {
   //   type: 'OAuth2',
        user: 'notificacion-webapp@usac.edu.gt',
        pass: 'Calari90!'
    }
  }));

  
  const mailOptions = {
    from: 'notificacion-webapp@usac.edu.gt',
    to: req.body.destino,
    subject: req.body.subjet,
    html:  req.body.html
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
      console.log(error);
      res.status(500).send('error al enviar correo');
  } else {
    res.json(info);
  }
});



/*  let params = {
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

*/
  




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
