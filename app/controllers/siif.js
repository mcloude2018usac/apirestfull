
var request = require('request');
var xml2js = require ('xml2js'); 
var Asignacalusac = require('../models/calusac/asignacalusac');
var generator = require('generate-password');
var Facplan3 = require('../models/calusac/unidadplan3');
var Operadores = require('../models/calusac/operadores');
var Conveniocalusac = require('../models/calusac/conveniocalusac');

function remove_accents(strAccents) {
    var strAccents = strAccents.split('');
    var strAccentsOut = new Array();
    var strAccentsLen = strAccents.length;
    var accents =    "ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž´";
    var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz ";
    for (var y = 0; y < strAccentsLen; y++) {
        if (accents.indexOf(strAccents[y]) != -1) {
            strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
        } else
            strAccentsOut[y] = strAccents[y];
    }
    strAccentsOut = strAccentsOut.join('');

    return strAccentsOut;
}

//http://127.0.0.1:9090/api/siifs/1/2
exports.getsiif = function(req, res, next){

    if(req.params.id7)
    {  //http://127.0.0.1:9090/api/siifs/escobar.adoss/Escobar%20Cant%C3%A9/45/asssd@gmail.com/5ea2177d08c34a001e5853ea/3/calusacmoodle2

       

        switch(req.params.id7)  {

            case 'calusacmoodle2a':
                var options = {
                    'method': 'POST',
                    'url': 'http://calusacvirtual.usac.edu.gt/app/api/api.php?apicall=matricular_usuario',
                    'headers': {
                    },
                    formData: {
                      'user': 'asc3df',
                      'firstname': 'mario',
                      'lastname':'na',
                      'email': 'mario.morales@mcloude.com',
                      'course': '318'
                    }
                  };
                
                  request(options, function (error, response) { 
                    if (error) throw new Error(error);
                    console.log(response.body);
                    var cad=response.body;
                    var arr1=cad.split(',');
                    var aar2=arr1[0].split(':')
                    var aar3=arr1[2].split(':')
                    var usercod=aar2[1].replace('"','').replace('"','')
                    var userpass=aar3[1].replace('"','').replace('"','')
                    console.log(usercod + ' ' + userpass)
                    
                    //{"user_cod":"4105","username":"asc3df","password":"538bb3","user_assing":1}
                    if(response.body.indexOf('Error')>0)
                    {
                        console.log('error al asignar usuario ya existe')
                      res.json({estado:'error'});
    
                      
                    }
                    else{
                        res.json({estado:'si'});

                    }
                });
                break;

                case 'calusacmoodle2p':

              
                    console.log({ idmoodle:  req.params.id3 })
                    Facplan3.find({_id:req.params.id6},function(err, todospla) {
                        if (err){ res.send(err); }
            
                        var codigott=''
            
                        
                        if(todospla.length>0)
                        {
                            codigott=todospla[0].codfac
                            console.log('encuentra plan: ' + codigott)
                        }
            
                        if(todospla[0].codfac){}else
                        {
                            codigott='';
                        }
            
                        if(codigott=='' || codigott=='0' || codigott=='1')
                        {
                            res.json({estado:'exitosinusuario',password: ''});
                        }
                        else
                        {
            
                       
            Asignacalusac.find({ correo:  req.params.id ,_id:req.params.id5 }, function (err, todo100aaa)  {
                if (err) {  res.send(err);  }
                else
                { 

                    console.log(todo100aaa[0]._id)
                    var password2= generator.generate({
                        length: 4,
                        numbers: true
                    });    
                
               var idmodlex=0;
               var idmodlexpass='';
               var iduser='';
               
                        for(var i = 0; i < todo100aaa.length;i++){
                            iduser=todo100aaa[i].noboletapago
                           
                            if(todo100aaa[i].idmoodle)
                            {
                                idmodlex=todo100aaa[i].idmoodle;
                                idmodlexpass=todo100aaa[i].idmoodlepass;
                                break;
                            }
                        }
                        console.log('busca='+idmodlex)
                  
            
                        console.log('NOOOOOOOOOOO encuentra encuentra usuario lo crea todo')    
                        var options = {
                            'method': 'POST',
                            'url': 'http://calusacvirtual.usac.edu.gt/app/api/api.php?apicall=matricular_usuario',
                            'headers': {
                            },
                            formData: {
                              'user': iduser,
                              'firstname': req.params.id2,
                              'lastname':'na',
                              'email': req.params.id4,
                              'course': codigott
                            }
                          };
                        console.log(options)
                          request(options, function (error, response) { 
                            if (error) throw new Error(error);
                            console.log(response.body);
            
                            if(response.body.indexOf('Error')>0)
                            {
                                console.log('error al asignar usuario ya existe')
                              res.json({estado:'error'});
            
                              
                            }
                            else{
                                var cad=response.body;
                                var arr1=cad.split(',');
                                var aar2=arr1[0].split(':')
                                var aar3=arr1[2].split(':')
                                var aar5=arr1[4].split(':')
                                var aar5b=aar5[1].split('}')

                                var code=aar2[1].replace('"','').replace('"','')
                                var password2=aar3[1].replace('"','').replace('"','')
                                var type2=aar5b[0].replace('"','').replace('"','')
                              var aaa=response.body
                              console.log('crea curso')
                              console.log(code)
                                          
                              Asignacalusac.findById({ _id:  req.params.id5 }, function (err, todo100)  {
                                  if (err) {  res.send(err);  }
                                  else
                                  { 
                                      todo100.idmoodle          =       code;
                                      todo100.idmoodlepass          =   password2;
                                    
                          
                                      todo100.save(function (err, todo200){
                                          if (err)     {  console.log(err.message)   }
                                  
                                          res.json({estado:'exito',password: password2,user:code,type:type2});
                      
                                    
                                     
                                          
                                      });
                                  }
                              });
            
            
            
                  
            
            
            
                             
                            }
            
                          
            
                          });
            
                    
            
                }
                    
                 
            
                        });           
            
            
                    }
                    });
                
                            break
                        

            case 'calusacmoodle2':
            Operadores.find({}).sort([['encola', 1]]).exec(function(err, todosb) {
                res.json(todosb);
            });
                break;

            case 'calusacmoodle':

              
        console.log({ idmoodle:  req.params.id3 })
        Facplan3.find({_id:req.params.id6},function(err, todospla) {
            if (err){ res.send(err); }

            var codigott=''

            
            if(todospla.length>0)
            {
                codigott=todospla[0].codfac
                console.log('encuentra plan: ' + codigott)
            }

            if(todospla[0].codfac){}else
            {
                codigott='';
            }

            if(codigott=='' || codigott=='0' || codigott=='1')
            {
                res.json({estado:'exitosinusuario',password: ''});
            }
            else
            {

           
Asignacalusac.find({ correo:  req.params.id }, function (err, todo100aaa)  {
    if (err) {  res.send(err);  }
    else
    { 
        var password2= generator.generate({
            length: 4,
            numbers: true
        });    
    
   var idmodlex=0;
   var idmodlexpass='';
            for(var i = 0; i < todo100aaa.length;i++){
                if(todo100aaa[i].idmoodle)
                {
                    idmodlex=todo100aaa[i].idmoodle;
                    idmodlexpass=todo100aaa[i].idmoodlepass;
                    break;
                }
            }
            console.log('busca='+idmodlex)
            if(idmodlex>0)
            {
                console.log('encuentra data idmodle (usuario)='+idmodlex)
            
            var options = {
                'method': 'POST',
                'url': 'http://calusacvirtual.usac.edu.gt/app/api/api.php?apicall=asignar_usuario',
                'headers': {
                },
                formData: {
                  'username': idmodlex,
                  'curso': codigott,
                  'rol': '5'
                }
              };
              console.log('envia a crear solo curso')
              console.log(options)
              request(options, function (error, response) { 
                if (error) throw new Error(error);
                console.log(response.body);

                res.json({estado:'exito',password: idmodlexpass});
              });

        }
        else
        {

            console.log('NOOOOOOOOOOO encuentra encuentra usuario lo crea todo')    
            var options = {
                'method': 'POST',
                'url': 'http://calusacvirtual.usac.edu.gt/app/api/api.php?apicall=crear_usuario',
                'headers': {
                },
                formData: {
                  'usuario': req.params.id,
                  'password': password2+'1234!',
                  'firstname': req.params.id2,
                  'lastname':'na',
                  'email': req.params.id4
                }
              };
              console.log({
                'usuario': req.params.id,
                'password': password2+'1234!',
                'firstname': req.params.id2,
                'lastname':'na',
                'email': req.params.id4
              })
              request(options, function (error, response) { 
                if (error) throw new Error(error);
                console.log(response.body);
                if(response.body.indexOf('Error')>0)
                {
                    console.log('error al asignar usuario ya existe')
                  res.json({estado:'error'});

                  
                }
                else{

                  var aaa=response.body
                  var code =aaa.substring(aaa.indexOf(':')+1,aaa.indexOf(','))
                  console.log('crea curso')
                  console.log(code)
                              
                  Asignacalusac.findById({ _id:  req.params.id5 }, function (err, todo100)  {
                      if (err) {  res.send(err);  }
                      else
                      { 
                          todo100.idmoodle          =       code;
                          todo100.idmoodlepass          =   password2+'1234!';
                        
              
                          todo100.save(function (err, todo200){
                              if (err)     {  console.log(err.message)   }
                      
                           
          
                              var options = {
                                  'method': 'POST',
                                  'url': 'http://calusacvirtual.usac.edu.gt/app/api/api.php?apicall=asignar_usuario',
                                  'headers': {
                                  },
                                  formData: {
                                    'username': code,
                                    'curso': codigott,
                                    'rol': '5'
                                  }
                                };
                                console.log(options)
                                request(options, function (error, response) { 
                                  if (error) throw new Error(error);
                                  console.log(response.body);
          
                                  res.json({estado:'exito',password: password2+'1234!'});
                                });
                         
                              
                          });
                      }
                  });



      



                 
                }

              

              });

        }

    }
        
     

            });           


        }
        });
    
                break
            default:
//' + remove_accents(req.params.id2) + '
//this.cui+ '/'+this.nombre+'/' +this.monto +".00" + '/00/2020/22/1'
console.log(req.params)

                    myXMLText=remove_accents("\n<Envelope xmlns=\"http://schemas.xmlsoap.org/soap/envelope/\"><Body><getData xmlns=\"urn:miserviciowsdl\"><carnet>"+ req.params.id +"</carnet><unidad>"+req.params.id4+"</unidad><extension>00</extension><carrera>00</carrera><nombre>" +req.params.id2+ "</nombre><monto>" + req.params.id3 + "</monto><anio>"+ req.params.id5 +"</anio><rubro>"+ req.params.id6 +"</rubro><variante_rubro>"+ req.params.id7 +"</variante_rubro><subtotal>"+ req.params.id3 +"</subtotal></getData></Body></Envelope>")

                    console.log(myXMLText)
                    console.log(myXMLText.length)

                    let strLengthInBytes = Buffer.byteLength(myXMLText); 
                    console.log(strLengthInBytes)

                    var options = {
                        'method': 'POST',
                        gzip: true,
                        'url': 'http://calusacvirtual.usac.edu.gt/app/api/order.php',
                        'headers': {
                        'Content-Type': 'text/xml;charset=UTF-8',
                        'User-Agent': 'PostmanRuntime/7.22.0',
                        'Accept': '*/*',
                        'Cache-Control': 'no-cache',
                        'Postman-Token': '40c97521-3534-4293-a411-6d48339c8328',
                        'Host': 'calusacvirtual.usac.edu.gt',
                        'Accept-Encoding': 'gzip, deflate, br',
                        'Content-Length': myXMLText.length,
                        'Connection': 'keep-alive',
                        'cache-control': 'no-cache'
                        },
                        body: myXMLText
                    
                    };
                    request(options, function (error, response) { 
                        if (error) throw new Error(error);
                    //  console.log(response.body);
                        res.send({cadena:response.body});
                    //  res.send('error');
                    
                    });


     
        }
        


    }
    else
    {
    if(req.params.id3)
    {  
      
        if(req.params.id3=='busca2')
        {
            //req.params.id2
//, estado:'ordenpago2' 
                console.log({ noboletapago:  req.params.id2, estado:'pagada' })
                Conveniocalusac.find({ noboletapago:  req.params.id2, estado:'pagada' }, function (err, todo100aaa)  {
                if (err) {  res.send(err);  }
                else
                { 
                    console.log(todo100aaa)
                    if(todo100aaa.length>0)
                    {
console.log('no')
res.send({cadena:'Orden pago ya ha sido utilizada en el sistema.'});
                    //    res.status(404).send({estado:'Orden pago ya ha sido utilizada en el sistema.'});   
                    }
                    else{

                                    var myXMLText = '<?xml version="1.0" encoding="utf-8"?><Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Body><getData xmlns="urn:miserviciowsdl"><carnet>'+req.params.id+ '</carnet><id_ordenpago>'+req.params.id2+'</id_ordenpago></getData></Body></Envelope>'


                                    console.log(myXMLText)

                                    request({
                                        url: "http://calusacvirtual.usac.edu.gt/app/api/validate_order.php",
                                        method: "POST",
                                        gzip: true,
                                        headers: {
                                            'Content-Type': 'text/xml;charset=UTF-8',
                                            'User-Agent': 'PostmanRuntime/7.15.2',
                                            'Accept': '*/*',
                                            'Cache-Control': 'no-cache',
                                            'Host': 'calusacvirtual.usac.edu.gt',
                                            'Accept-Encoding': 'gzip, deflate',
                                            'Content-Length': myXMLText.length,
                                            'Connection': 'keep-alive',
                                            'cache-control': 'no-cache',
                            
                            
                                            
                                        },
                                        body: myXMLText
                                    }, function (error, response, body){
                            
                                        if (error){  console.log(error); res.send(error);  }
                            
                                        res.send({cadena:body});
                            
                                    });
                                }}
                            });
     
        }
        else
        {
        if(req.params.id3=='busca')
        {
            //req.params.id2

                console.log({ noboletapago:  req.params.id2 ,estadopago:'Asignación exitosa'})
            Asignacalusac.find({ noboletapago:  req.params.id2 ,estadopago:'Asignación exitosa'}, function (err, todo100aaa)  {
                if (err) {  res.send(err);  }
                else
                { 
                    if(todo100aaa.length>0)
                    {  console.log(todo100aaa)

                        res.send({cadena:'Orden pago ya ha sido utilizada en el sistema.'}); 
                    }
                    else{

                                    var myXMLText = '<?xml version="1.0" encoding="utf-8"?><Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Body><getData xmlns="urn:miserviciowsdl"><carnet>'+req.params.id+ '</carnet><id_ordenpago>'+req.params.id2+'</id_ordenpago></getData></Body></Envelope>'


                                    console.log(myXMLText)

                                    request({
                                        url: "http://calusacvirtual.usac.edu.gt/app/api/validate_order.php",
                                        method: "POST",
                                        gzip: true,
                                        headers: {
                                            'Content-Type': 'text/xml;charset=UTF-8',
                                            'User-Agent': 'PostmanRuntime/7.15.2',
                                            'Accept': '*/*',
                                            'Cache-Control': 'no-cache',
                                            'Host': 'calusacvirtual.usac.edu.gt',
                                            'Accept-Encoding': 'gzip, deflate',
                                            'Content-Length': myXMLText.length,
                                            'Connection': 'keep-alive',
                                            'cache-control': 'no-cache',
                            
                            
                                            
                                        },
                                        body: myXMLText
                                    }, function (error, response, body){
                            
                                        if (error){  console.log(error); res.send(error);  }
                            
                                        res.send({cadena:body});
                            
                                    });
                                }}
                            });
     
        }
        else
        {

            
        if(req.params.id2=='calusac')
        {
            var myXMLText = '<?xml version="1.0" encoding="utf-8"?><Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Body><getData xmlns="urn:miserviciowsdl"><carnet>29993154</carnet><unidad>00</unidad><extension>00</extension><carrera>00</carrera><nombre>Carmen Maria Cante</nombre><monto>240</monto><anio>2019</anio><rubro>145</rubro><variante_rubro>1</variante_rubro><subtotal>240</subtotal></getData></Body></Envelope>'


     

            request({
                url: "http://calusacvirtual.usac.edu.gt/app/api/order.php",
                method: "POST",
                gzip: true,
                headers: {
                    'Content-Type': 'text/xml;charset=UTF-8',
                    'User-Agent': 'PostmanRuntime/7.15.2',
                    'Accept': '*/*',
                    'Cache-Control': 'no-cache',
                    'Host': 'calusacvirtual.usac.edu.gt',
                    'Accept-Encoding': 'gzip, deflate',
                    'Content-Length': myXMLText.length,
                    'Connection': 'keep-alive',
                    'cache-control': 'no-cache',
    
    
                    
                },
                body: myXMLText
            }, function (error, response, body){
       
                if (error){  console.log(error); res.send(error);  }
               
            
    
                var xml2js = require('xml2js');
                var parser = new xml2js.Parser({explicitArray: false, trim: true});
                parser.parseString(body, (err, result) => {
              
                  res.send(result);
                });
    
    
    
            });
    



            }
          


        }
    }
          

        
       
    }
}


}