
var nodemailer = require('nodemailer');
//var ses = require('nodemailer-ses-transport');
   
   
exports.getMail2 = function(req1, res){

    var transporter = nodemailer.createTransport({
        pool: true,
        host: 'email-smtp.us-west-2.amazonaws.com',
        port: 587,
       
        auth: {
               user: 'AKIAIT7X75D5KB4GSILQ',
               pass: 'BO9iQ1hEr/JmGpqSrE32JakwkIP2SjjdY70TL3jg7gE6'
           }
       });


  
  const mailOptions = {
    from: 'usacenlinea1.0@gmail.com', // sender address
    to: req1.destino, // list of receivers
    subject: req1.subjet, // Subject line
    html: req1.html
  };

 
  transporter.sendMail(mailOptions, function (err, info) {
    if(err){
    res.status(500).send(err.sqlMessage);
    }
        
 });
  



    
}

exports.getMail = function(req, res, next){
/*
    var transporter = nodemailer.createTransport(ses({
        accessKeyId: 'AKIAIT7X75D5KB4GSILQ',
        secretAccessKey: 'BO9iQ1hEr/JmGpqSrE32JakwkIP2SjjdY70TL3jg7gE6'
    }));

    var transporter = nodemailer.createTransport({
        host: 'email-smtp.us-west-2.amazonaws.com',
        port: 587,
       
        auth: {
               user: 'AKIAIT7X75D5KB4GSILQ',
               pass: 'BO9iQ1hEr/JmGpqSrE32JakwkIP2SjjdY70TL3jg7gE6'
           }
       });
*/
var transporter = nodemailer.createTransport({
    pool: true,
    host: 'email-smtp.us-west-2.amazonaws.com',
    port: 587,
   
    auth: {
           user: 'AKIAIT7X75D5KB4GSILQ',
           pass: 'BO9iQ1hEr/JmGpqSrE32JakwkIP2SjjdY70TL3jg7gE6'
       }
   });

  const mailOptions = {
    from: 'usacenlinea1.0@gmail.com', // sender address
    to: req.body.destino+';mario.morales@mcloude.com', // list of receivers
    subject: req.body.subjet, // Subject line
    html: req.body.html
   
  };

 //console.log(req.body.actualiza);
  transporter.sendMail(mailOptions, function (err, info) {
    if(err){
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                   user: 'mario.morales@mcloude.com',
                   pass: 'ocitocit'
               }
           });
      const mailOptions = {
        from: 'mario.morales@mcloude.com', // sender address
        to: req.body.destino+';mario.morales@mcloude.com', // list of receivers
        subject: req.body.subjet, // Subject line
        html: req.body.html
       
      };
      transporter.sendMail(mailOptions, function (err, info) {
        if(err){  res.status(500).send(err.sqlMessage); }
        else
        {res.json(info);}
     });
    }
    else
    {
/*
      switch(req.body.actualiza.tipo) {
        case 'participantes':
        cosnole.log('actualiza entra participa333333333333332');
                      Participa.findById({ _id: req.body.actualiza.id}, function (err, todo)  {
                        if (err) {  res.status(500).send(err.sqlMessage);  }
                        else
                        {  
                            todo.estado 	=	req.body.actualiza.estado 	||req.body.actualiza.estado 	;
                            todo.otros 	=	req.body.actualiza.otros 	||	req.body.actualiza.otros 	;
                          
                            todo.save(function (err, todo){
                                if (err)     {  res.status(500).send(err.message)   }
                                res.json(todo);
                            });
                        }
                    });
            break;
        case 'participantes2':
        cosnole.log('actualiza entra participa2ddddddddddddddddddddddd');
                      Participa2.findById({ _id: req.body.actualiza.id}, function (err, todo)  {
                        if (err) {  res.status(500).send(err.sqlMessage);  }
                        else
                        {  
                          cosnole.log('actualiza entra participa2');
                          console.log(req.body.actualiza);
                            todo.estado 	=	req.body.actualiza.estado 	||req.body.actualiza.estado 	;
                        //  todo.otros 	=	req.body.actualiza.otros 	||	req.body.actualiza.otros 	;
                          
                            todo.save(function (err, todo){
                                if (err)     {  res.status(500).send(err.message)   }
                                res.json(todo);
                            });
                        }
                    });
            break;
        default:
        res.json(info);
    }
*/
res.json(info);
                 
                      

    }
    
      
 });
  



    
}
