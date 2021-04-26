
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'usacenlinea1.0@usacenlinea.net',
               pass: 'Amazon1518'
           }
       });

var Evento = require('../models/eventos');

var Participa = require('../models/participa');

var cleanName = function(str) {
        if (str == '') return str; // jQuery
      
        var special = ['&', 'O', 'Z', '-', 'o', 'z', 'Y', 'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ', 'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ð', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'à', 'á', 'â', 'ã', 'ä', 'å', 'æ', 'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ð', 'ñ', 'ò', 'ó', 'ô', 'õ', 'ö', 'ù', 'ú', 'û', 'ü', 'ý', 'ÿ', '.', ' ', '+'],
            normal = ['et', 'o', 'z', '-', 'o', 'z', 'y', 'a', 'a', 'a', 'a', 'a', 'a', 'ae', 'c', 'e', 'e', 'e', 'e', 'i', 'i', 'i', 'i', 'd', 'n', 'o', 'o', 'o', 'o', 'o', 'u', 'u', 'u', 'u', 'y', 'a', 'a', 'a', 'a', 'a', 'a', 'ae', 'c', 'e', 'e', 'e', 'e', 'i', 'i', 'i', 'i', 'o', 'n', 'o', 'o', 'o', 'o', 'o', 'u', 'u', 'u', 'u', 'y', 'y', '.', ' ', '+'];
        for (var i = 0; i < str.length; i++) {
            for (var j = 0; j < special.length; j++) {
                if (str[i] == special[j]) {
                    str = str.replace(new RegExp(str[i], 'gi'), normal[j]);
                }
            }
        }

        return str.toUpperCase();
    };


var mandaeventos = function(){

        

              
       var sql='';
 
                        var filename   = "eventos.csv";

                        Participa.find({},function(err, todos2) {
                                if (err){ res.send(err); }
                                

                                if(todos2.length>0)   {  

                                     //   res.json(todos2);

                                        Evento.find({impresion:'Activo',idempresa:'WebApp Usacenlinea'}).lean().exec({}, function(err,todos) {
                                                if (err) res.send(err);
                                                var myData = [];
                                                var cc=0;
                                                var chtml='';

                                             chtml="  <table style='width:100%; border: 1px solid black; border-collapse: collapse'><tr> <th>Evento</th> <th>No participantes</th> </tr>"

  
  



                                                for(var i = 0; i < todos.length;i++){
                                                       
                                                        for(var j = 0; j < todos2.length;j++){
                                                             
                                                                if(todos[i]._id==todos2[j].idevento)
                                                                {
                                                                        cc=cc+1;
                                                                }
                                                                        
                                                        }       


 
                                                        chtml=chtml+ "<tr><td>"+cleanName(todos[i].nombre)+"</td> <td>"+cc+"</td>  </tr>"
                                                
                                                cc=0;
                                                }
                                                
                                                chtml=chtml+ "</table>"

                                                const mailOptions = {
                                                        from: 'usacenlinea1.0@usacenlinea.net', // sender address
                                                        to: 'mario.morales@mcloude.com;sararuiz_4@hotmail.com', // list of receivers
                                                        subject: 'Gestion de Eventos', // Subject line
                                                        html:chtml,// plain text body
                                                        actualiza: ''// plain text body
                                                      };
                                                 
                                                        transporter.sendMail(mailOptions, function (err, info) {
                                                                if(err){
                                                                res.status(500).send(err.sqlMessage);
                                                                }
                                                                else
                                                                {
                                                        
                                                                        console.log("Envio correo");
                                                        
                                                                }
                                                                
                                                                
                                                        });



                                        });

                                         
                                }
                               
                        });



       

    
}


module.exports = {
        mandaeventos: mandaeventos
      }
