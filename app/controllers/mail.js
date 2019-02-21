
var nodemailer = require('nodemailer');



   
   
exports.getMail2 = function(req1, res){

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'usacenlinea2018@gmail.com',
               pass: 'ocitocit'
           }
       });
  const mailOptions = {
    from: 'usacenlinea2018@gmail.com', // sender address
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
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'usacenlinea2018@gmail.com',
               pass: 'ocitocit'
           }
       });
       
  const mailOptions = {
    from: 'usacenlinea2018@gmail.com', // sender address
    to: req.body.destino+';mario.morales@mcloude.com', // list of receivers
    subject: req.body.subjet, // Subject line
    html: req.body.html
   
  };

 //console.log(req.body.actualiza);
  transporter.sendMail(mailOptions, function (err, info) {
    if(err){
        console.log(err);
    res.status(500).send(err.sqlMessage);
  
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
