
var nodemailer = require('nodemailer');
/*var transporter = nodemailer.createTransport({
    host: 'email-smtp.us-west-2.amazonaws.com',
    port: 587,
   
    auth: {
           user: 'AKIAIT7X75D5KB4GSILQ',
           pass: 'BO9iQ1hEr/JmGpqSrE32JakwkIP2SjjdY70TL3jg7gE6'
       }
   });
   */
  

var mandacorreoprueba= function(){

   console.log('entrarr')
                                                var cc=0;
                                                var chtml='';

                                             chtml="  <table style='width:100%; border: 1px solid black; border-collapse: collapse'><tr> <th>Evento</th> <th>No participantes</th> </tr>"

                                             var transporter = nodemailer.createTransport({
                                              service: 'gmail',
                                              auth: {
                                                     user: 'usacenlinea1.0@usacenlinea.net',
                                                     pass: 'Amazon1518'
                                                 }
                                             });
                                          
  

                                                
                                                chtml=chtml+ "</table>"

                                                const mailOptions = {
                                                        from: 'usacenlinea1.0@usacenlinea.net', // sender address
                                                        to: 'usacenlinea1.0@usacenlinea.net;mario.morales@mcloude.com', // list of receivers
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


module.exports = {
    mandacorreoprueba: mandacorreoprueba
      }
