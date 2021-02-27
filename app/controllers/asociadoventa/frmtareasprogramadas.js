var frmtareasprogramadas = require('../../models/asociadoventa/frmtareasprogramadas');
var Bitacora = require('../../models/bitacora');
var Image = require('../../models/image2');
var functool = require('../../controllers/funcionesnode');
var Frmmovil = require('../../models/frmmovil');
var Frmmovild = require('../../models/frmmovild');
var frmtareasprogramadasfotos = require('../../models/asociadoventa/frmtareasprogramadasfotos');
var frmtareasprogramadasservicios = require('../../models/asociadoventa/frmtareasprogramadasservicios');

function datipo(value) {
    var tt='';
    switch(value) {
        case 'Alfanumerico':  tt='String';   break;
       case 'Numerico':  tt='Number';   break;
       case 'Moneda':  tt='Number';   break;
       case 'TextArea':   tt='String';   break;
       case 'Etiqueta':   tt='String';   break;
       case 'Rango':   tt='Number';   break;
       case 'Fecha':   tt='Date';   break;
       case 'Fecha y Hora':   tt='Date';   break;
       case 'Hora':   tt='Date';   break;
       case 'Check':   tt='String';   break;
       case 'Imagen':   tt='String';   break;
       
        default:
          // code block
      }
        return tt;
      }

function dafiltrocad(todos,id2,id3) {
    var cad=''
    var cadxx=''
   
    for(var i = 0; i < todos.length;i++){
                                      
     
        switch(todos[i].type) {
            case 'Rango':  
            if(todos[i].name==id2){cadxx='"' +id2 + '":' +id3 + ''  }
            if(todos[i].required=='false')
            {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
            }
            else
            {
                cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
            }
            break;
             case 'Fecha': //ISODate("2018-08-08T15:00:56.875Z"),
             if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
             else{cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
             if(todos[i].required=='false')
             {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
             }
             else
             {
                
                 cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
             }
              break;
              case 'Hora': //ISODate("2018-08-08T15:00:56.875Z"),
              if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
              else{cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
              if(todos[i].required=='false')
              {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
              }
              else
              {
                 
                  cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
              }
               break;
              case 'Fecha y Hora': //ISODate("2018-08-08T15:00:56.875Z"),
              if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
              else{cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
              if(todos[i].required=='false')
              {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
              }
              else
              {
                 
                  cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
              }
               break;
              case 'Check': 
              if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
              else{cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
              if(todos[i].required=='false')
              {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
              }
              else
              {
                 
                  cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
              }
               break;
               case 'Imagen': 
               if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
               else{cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
               if(todos[i].required=='false')
               {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
               }
               else
               {
                  
                   cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
               }
                break;
         case 'Alfanumerico': 
         if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
         else{cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
         if(todos[i].required=='false')
         {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
         }
         else
         {
            
             cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
         }
          break;
        case 'Numerico':  
        if(todos[i].name==id2){cadxx='"' +id2 + '":' +id3 + ''  }
        if(todos[i].required=='false')
        {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
        }
        else
        {
            cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
        }
        break;
        case 'Moneda':  
        if(todos[i].name==id2){cadxx='"' +id2 + '":' +id3 + ''  }
        if(todos[i].required=='false')
        {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
        }
        else
        {
            cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
        }
        break;
        case 'TextArea':  
        if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
        else{cadxx='"' +id2 + '": { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
//        if(todos[i].name==id2){cadxx='"' +id2 + '":"' +id3 + '"'  }
   
        if(todos[i].required=='false')
        {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
        }
        else
        {
            cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
        }
          break;
        case 'Etiqueta':   
         break;
        case 'Lista de valores': 
        if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '.label":"' +id3 + '"' }
         else{cadxx='"' +id2 + '.label": { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
        if(todos[i].required=='false')
             {cad=cad+'"'+todos[i].name+'":{"type" : "String"},';
                 //cad=cad+'"'+todos[i].name+'":{"key"	: { "type" : "String"},   "label"	: { "type" : "String" }},';
             }
             else
             {cad=cad+'"'+todos[i].name+'":{"type" : "String", "required" : "true"},';
                //     cad=cad+'"'+todos[i].name+'":{"key"	: { "type" : "String", "required" : "true" },   "label"	: { "type" : "String", "required" : "true" }},';
             }

          break;
          case 'Check List': 
          if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '.label":"' +id3 + '"' }
           else{cadxx='"' +id2 + '.label": { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
          if(todos[i].required=='false')
               {cad=cad+'"'+todos[i].name+'":{"type" : "String"},';
                   //cad=cad+'"'+todos[i].name+'":{"key"	: { "type" : "String"},   "label"	: { "type" : "String" }},';
               }
               else
               {cad=cad+'"'+todos[i].name+'":{"type" : "String", "required" : "true"},';
                  //     cad=cad+'"'+todos[i].name+'":{"key"	: { "type" : "String", "required" : "true" },   "label"	: { "type" : "String", "required" : "true" }},';
               }
  
            break;
            case 'Check List Detalle': 
            if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '.label":"' +id3 + '"' }
             else{cadxx='"' +id2 + '.label": { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
            if(todos[i].required=='false')
                 {cad=cad+'"'+todos[i].name+'":{"type" : "String"},';
                     //cad=cad+'"'+todos[i].name+'":{"key"	: { "type" : "String"},   "label"	: { "type" : "String" }},';
                 }
                 else
                 {cad=cad+'"'+todos[i].name+'":{"type" : "String", "required" : "true"},';
                    //     cad=cad+'"'+todos[i].name+'":{"key"	: { "type" : "String", "required" : "true" },   "label"	: { "type" : "String", "required" : "true" }},';
                 }
    
              break;
         default:
           // code block
       }

     
     }
     return cad +'°'+cadxx
}


function stringToObject(JSONString) {
    var jsonObject = JSON.parse(JSONString);
    return jsonObject;
}



function eliminaformulario(namess,recordID,idempresa)
{
    return new Promise(resolve => { 

        Frmmovild.find({idmovil:namess, display : "true",idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
          
     //   console.log(todos)
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'

                               //  console.log(cad)
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    delete mongoose.connection.models[namess];
                                    var  frmtt= mongoose.model(namess,tt);

                                    frmtt.findByIdAndRemove({ _id: recordID }, function(err, todo) {
                                        resolve(todo); 
                                    });
                                 
                                }


    });
        
                                    
                                   
                             
                
        
    

                                });

}


function dadatosformularioidfinal  (namess,filtro,idempresa,namess2)
{
    return new Promise(resolve => { 

        Frmmovild.find({idmovil:namess, idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
          
     //   console.log(todos)
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'

                               //  console.log(cad)
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    delete mongoose.connection.models[namess2];
                                    var  frmtt= mongoose.model(namess2,tt);


                                    frmtt.findById(filtro).exec(function(err, todos2) {
                                        if (err){  res.send(err); }

                                        resolve(todos2); 
                                       // res.json(todos2);

                                    });
                                }


    });
        
                                    
                                   
                             
                
        
    

                                });

}
function dadatosformulariogruposuma(namess,filtro,idempresa,namess2,filtrogrupo,filtrosuma)
{
    return new Promise(resolve => { 

        Frmmovild.find({idmovil:namess, display : "true",idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
          
     //   console.log(todos)
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'

                               //  console.log(cad)
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    delete mongoose.connection.models[namess2];
                                    var  frmtt= mongoose.model(namess2,tt);


                                    frmtt.aggregate( [
                                        { $match: filtro},
                                        { 
                                            "$group" : filtrogrupo
                                        }, 
                                        { 
                                            "$project" : filtrosuma
                                        }
                                    ]).exec(function(err, todos2) {
                                        if (err){  res.send(err); }

                                        resolve(todos2); 
                                       // res.json(todos2);

                                    });
                                }


    });
        
                                    
                                   
                             
                
        
    

                                });

}
function dadatosformulariogrupo(namess,filtro,idempresa,namess2,campo)
{
    return new Promise(resolve => { 

        Frmmovild.find({idmovil:namess, display : "true",idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
          
     //   console.log(todos)
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'

                               //  console.log(cad)
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    delete mongoose.connection.models[namess2];
                                    var  frmtt= mongoose.model(namess2,tt);


                                    frmtt.aggregate( [
                                        { $match: filtro},
                                        { 
                                            "$group" : {
                                                "_id" : {
                                                    "nombre" : campo
                                                }, 
                                                "COUNT(*)" : {
                                                    "$sum" : 1
                                                }
                                            }
                                        }, 
                                        { 
                                            "$project" : {
                                                "nombre" : "$_id.nombre", 
                                                "cantidad" : "$COUNT(*)", 
                                                "_id" :0
                                            }
                                        }
                                    ]).exec(function(err, todos2) {
                                        if (err){  res.send(err); }

                                        resolve(todos2); 
                                       // res.json(todos2);

                                    });
                                }


    });
        
                                    
                                   
                             
                
        
    

                                });

}
function dadatosformulario(namess,filtro,idempresa,namess2)
{
    return new Promise(resolve => { 

        Frmmovild.find({idmovil:namess, display : "true",idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
          
     //   console.log(todos)
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + ' "idpapa"	: { "type" : "String" }, "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'

                               //  console.log(cad)
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    delete mongoose.connection.models[namess2];
                                    var  frmtt= mongoose.model(namess2,tt);


                                    frmtt.find(filtro).exec(function(err, todos2) {
                                        if (err){  res.send(err); }

                                        resolve(todos2); 
                                       // res.json(todos2);

                                    });
                                }


    });
        
                                    
                                   
                             
                
        
    

                                });

}

function dadatosformulariosort(namess,filtro,idempresa,namess2,ss)
{
    return new Promise(resolve => { 

        Frmmovild.find({idmovil:namess, display : "true",idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
          
     //   console.log(todos)
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + ' "idpapa"	: { "type" : "String" }, "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'

                               //  console.log(cad)
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    delete mongoose.connection.models[namess2];
                                    var  frmtt= mongoose.model(namess2,tt);


                                    frmtt.find(filtro).sort(ss).exec(function(err, todos2) {
                                        if (err){  res.send(err); }

                                        resolve(todos2); 
                                       // res.json(todos2);

                                    });
                                }


    });
        
                                    
                                   
                             
                
        
    

                                });

}

function dadatosformularioproceso(namess,filtro,idempresa,namess2)
{
    return new Promise(resolve => { 

        Frmmovild.find({idmovil:namess, display : "true",idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
          
     //   console.log(todos)
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"idusuariosasigna":{"type":"Array"},"geoposicionxxx":{"type":"String"},"idactividadxxx":{"type":"String"},"ejecutainicio":{"type":"String"},"ejecutafinal":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"estadoordenxxx":{"type":"String"},  "pmodulo": { "type" :"Array"}'

                                    
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'

                               //  console.log(cad)
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    delete mongoose.connection.models[namess2];
                                    var  frmtt= mongoose.model(namess2,tt);


                                    frmtt.find(filtro).exec(function(err, todos2) {
                                        if (err){  res.send(err); }

                                        resolve(todos2); 
                                       // res.json(todos2);

                                    });
                                }


    });
        
                                    
                                   
                             
                
        
    

                                });

}

 
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

function dadatosformularioispapaarray(namess,idpapa,idempresa)
{
    return new Promise(resolve => { 

        Frmmovild.find({idmovil:namess, display : "true",idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
          
     //   console.log(todos)
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + ' "usuarionew"	: { "type" : "String" },     "idpapa"	: { "type" : "String" },  "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'

                               //  console.log(cad)
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    delete mongoose.connection.models[namess];
                                    var  frmtt= mongoose.model(namess,tt);

                             
                                    frmtt.find({idpapa:{$in:idpapa},idempresa:idempresa}).exec(function(err, todos2) {
                                        if (err){  res.send(err); }

                                        resolve(todos2); 
                                       // res.json(todos2);

                                    });
                                }


    });
        
                                    
                                   
                             
                
        
    

                                });

}

exports.getfrmtareasprogramadas = async  function(req, res, next){
    console.log(req.params)
    if(req.params.id5)
    {
        if(req.params.id2=='dashboard1periodo')
        {
            var contratosv= []


            if(req.params.id4=='1')
            {

                if(req.params.id=='periodo')
                {
                    contratosv = await dadatosformulario('5fc55f5994568f50c4cdcb47',
                    {idempresa:req.params.id3},req.params.id3,'5fc55f5994568f50c4cdcb47'); 
                }
                else
                {
                contratosv = await dadatosformulariogrupo('5f729c2487c9e33bd4ada798',
                {estado:'Activo',idempresa:req.params.id3},req.params.id3,'5f729c2487c9e33bd4ada798','$' + req.params.id); 
                }
            }
            else
            {
                
                contratosv = await dadatosformulariogrupo('5f729c2487c9e33bd4ada798',
                {estado:'Activo',empresa:req.params.id4,idempresa:req.params.id3},req.params.id3,'5f729c2487c9e33bd4ada798','$' + req.params.id); 
            }

        
            res.json(contratosv);

        }
        else{
            if(req.params.id2=='dashboard2')
        { 
            
            var entradas= []
            var entradasvv= []
            var empresav= []
            var salidas= []
            var salidasvv= []
            var proyectosv= []
            var proyectosvv= []

 

            if(req.params.id4==='Empresa')
            {
                empresav = await dadatosformulario('5f58197323db5a1bdc6591ca',
                {estado:'Activo',_id:replaceAll( req.params.id ,'ë','/').split('¬')[1],idempresa:req.params.id3},req.params.id3,'5f58197323db5a1bdc6591cas'); 
            }
            else
            {
                empresav = await dadatosformulario('5f58197323db5a1bdc6591ca',
                {estado:'Activo',idempresa:req.params.id3},req.params.id3,'5f58197323db5a1bdc6591cas'); 

            }

          
            var datajson=[]
            for(var i0 = 0; i0 < empresav.length;i0++){

            var filtro;
        
            if(req.params.id4==='Periodo')
            {
                filtro= {idempresa:req.params.id3,empresa:'<strong>NIT</strong>: '+empresav[i0].nit+'<br><strong>Nombre empresa</strong>: ' + empresav[i0].nombreempresa+
                '<br>¬'+empresav[i0]._id,idempresa:req.params.id3,actividadclasexxx:'FINAL'}
            }
     
            if(req.params.id4==='Empresa')
            {
                filtro= {estado:'Activo',empresa:'<strong>NIT</strong>: '+empresav[i0].nit+'<br><strong>Nombre empresa</strong>: ' + empresav[i0].nombreempresa+
                '<br>¬'+empresav[i0]._id,idempresa:req.params.id3}
            }

            if(req.params.id4==='Proyecto')
            {
                filtro= {estado:'Activo',proyecto:req.params.id,empresa:'<strong>NIT</strong>: '+empresav[i0].nit+'<br><strong>Nombre empresa</strong>: ' + empresav[i0].nombreempresa+
                '<br>¬'+empresav[i0]._id,idempresa:req.params.id3}
            }

            console.log(filtro)

      
           


            

            entradas = await dadatosformulariogruposuma('5fda36fa5ebb614c04ce781e',
           filtro,req.params.id3,'5fda36fa5ebb614c04ce781es', 
           {   "_id" : {      "nombre" : "$proyecto"   },   "COUNT(*)" : {"$sum" : "$cantidaddegalones" }  }
           ,{   "nombre" : "$_id.nombre",  "cantidad" : "$COUNT(*)",  "_id" :0  }); 

           salidas = await dadatosformulariogruposuma('5fdfa1f904c19d3bb0a3d74b',
           filtro,req.params.id3,'5fdfa1f904c19d3bb0a3d74bs',
           {   "_id" : {      "nombre" : "$proyecto"   },   "COUNT(*)" : {"$sum" : "$cantidad" }  },
           {   "nombre" : "$_id.nombre",  "cantidad" : "$COUNT(*)",  "_id" :0  }); 

           var entradasvv=[]
           var cinicial=0
           var cretiro=0
           var csaldo=0


    proyectosvv=[]

            for(var i = 0; i < entradas.length;i++){
               
                    cinicial=cinicial+entradas[i].cantidad
                    console.log(entradas[i].nombre.split('¬')[1])
               
                
                
             
            }

            for(var i = 0; i < salidas.length;i++){
                
                
                    cretiro=cretiro+salidas[i].cantidad
                    console.log(salidas[i].nombre.split('¬')[1])
                
                
                
             
            }

            var cretiro2=0
            var csaldo2=0
          var cinicial2=0
            for(var i = 0; i < entradas.length;i++){
                cinicial2=cinicial2+entradas[i].cantidad
               
                for(var ii = 0; ii < salidas.length;ii++){
                    if(entradas[i].nombre.split('¬')[1]===salidas[i].nombre.split('¬')[1])
                    { cretiro2=cretiro2+salidas[i].cantidad

                    }


                }
                console.log(entradas[i].nombre.split('</strong>'))
                proyectosvv.push({proyecto:entradas[i].nombre.split('</strong>')[4].split('<br>')[0],cinicial:cinicial2,cretiro:cretiro2,csaldo:cinicial2-cretiro2})
                cinicial2=0
                cretiro2=0
                
            
            
         
        }


if((cinicial+ cretiro)>0)
{
    datajson.push({_id:empresav[i0]._id,empresa:empresav[i0].nombreempresa,
                
        cinicial:cinicial,
        cretiro:cretiro,
        csaldo:cinicial-cretiro,
       
       
        proyectos:proyectosvv
    
    })
}
      
       
        }
            // 127.0.0.1:9090/api/frmtareasprogramadass/1/dashboard1/5f503bededa4710798a79b84/1/role
           
            res.json(datajson);

        }
        else{
        if(req.params.id2=='dashboard1')
        { 
            var contratosv= []
            var contratosvv= []
            var empresav= []
            var enmiendasv= []
            var enmiendasvv= []
            var pagosv= []
            var pagosvv= []

            var sancionesv= []
            var sancionesvv= []

            if(req.params.id4==='Empresa')
            {
                var idt=replaceAll( req.params.id ,'ë','/');
                idt='' + idt.split('¬')[1]
                empresav = await dadatosformulario('5f58197323db5a1bdc6591ca',
                {estado:'Activo',_id:{$in:[idt]},idempresa:req.params.id3},req.params.id3,'5f58197323db5a1bdc6591cas'); 
            }
            else
            {
                empresav = await dadatosformulario('5f58197323db5a1bdc6591ca',
                {estado:'Activo',idempresa:req.params.id3},req.params.id3,'5f58197323db5a1bdc6591cas'); 

            }


            var ffempresa=[]
            for(var i0 = 0; i0 < empresav.length;i0++){
                ffempresa.push('<strong>NIT</strong>: '+empresav[i0].nit+'<br><strong>Nombre empresa</strong>: ' + empresav[i0].nombreempresa+
                '<br>¬'+empresav[i0]._id)
            }
            var filtro;
            
            if(req.params.id4==='Periodo')
            {
                filtro= {estado:'Activo',multasporperiodo:'<strong>Periodo</strong>: '+req.params.id.split('°')[0]+'<br>¬'+req.params.id.split('°')[1],idempresa:req.params.id3}

             
 
               

            }
          
            if(req.params.id4==='Grupo')
            {
                filtro= {estado:'Activo',grupo:req.params.id,empresa:{$in:ffempresa},idempresa:req.params.id3}
            }

            if(req.params.id4==='Empresa')
            {
                filtro= {estado:'Activo',empresa:{$in:ffempresa},idempresa:req.params.id3}
            }

            if(req.params.id4==='Proyecto')
            {
                var idt2=replaceAll( req.params.id ,'ë','/');
                filtro= {estado:'Activo',proyecto:idt2,empresa:{$in:ffempresa},idempresa:req.params.id3}
            }


           

           
            console.log(filtro)
            var ffcontrato=[]

            if(req.params.id4==='Periodo')
            {
                var ffenmiendaperido=[]
                enmiendaperiodov = await dadatosformulariosort('5f72a12587c9e33bd4ada7ab',
               filtro,req.params.id3,'5f72a12587c9e33bd4ada7abs',{_id:1}); 
               for(var i = 0; i < enmiendaperiodov.length;i++){
               
                ffenmiendaperido.push('' + enmiendaperiodov[i].idpapa)
            }

            filtro= {estado:'Activo',_id:{$in:ffenmiendaperido},idempresa:req.params.id3}

             

            contratosv = await dadatosformulariosort('5f729c2487c9e33bd4ada798',
                filtro,req.params.id3,'5f729c2487c9e33bd4ada798',{_id:1}); 



     
            }
            else
            {
                contratosv = await dadatosformulariosort('5f729c2487c9e33bd4ada798',
                filtro,req.params.id3,'5f729c2487c9e33bd4ada798',{_id:1}); 
            }

           for(var i = 0; i < contratosv.length;i++){
               console.log(contratosv[i].empresa)
            ffcontrato.push('' + contratosv[i]._id)
           }

           enmiendasvv= []
           var ffenmienda=[]
                enmiendasv = await dadatosformulariosort('5f72a12587c9e33bd4ada7ab',
                {estado:'Activo',idpapa: {$in:ffcontrato},idempresa:req.params.id3},req.params.id3,'5f72a12587c9e33bd4ada7abs',{idpapa:1}); 


                for(var i = 0; i < enmiendasv.length;i++){
                    ffenmienda.push('' +enmiendasv[i]._id)
                   }


                   var ffpagos=[]
                   

                pagosv = await dadatosformulariosort('5f595df92521cd38c8fe3126',
                {estado:'Cancelado',idpapa:  {$in:ffenmienda},idempresa:req.params.id3},req.params.id3,'5f595df92521cd38c8fe3126',{idpapa:1}); 

                  
                for(var i = 0; i < pagosv.length;i++){
                    ffpagos.push('' +pagosv[i]._id)
                   }


                
                sancionesv = await dadatosformulario('5f74c0fff22ed14ea01c1cbe',
                {estado:'Activo',idpapa:   {$in:ffpagos},idempresa:req.params.id3},req.params.id3,'5f74c0fff22ed14ea01c1cbes'); 
          
            var datajson=[]
     
           

            for(var i0 = 0; i0 < empresav.length;i0++){
                if(i0!==20){

           var montoenmienda0=0
           var montoenmiendaejecutado0=0
           var montoenmiendaejecutadosancion0=0
           var montosaldo0=0
           contratosvv=[]
           sancionesvv= []
  
        
            for(var i = 0; i < contratosv.length;i++){
          
                var empresita='<strong>NIT</strong>: '+empresav[i0].nit+'<br><strong>Nombre empresa</strong>: ' + empresav[i0].nombreempresa+
                '<br>¬'+empresav[i0]._id

              if(empresita===contratosv[i].empresa)  
              {
                
                
                var montoenmienda=0
                var montoenmiendaejecutado=0
                var montoenmiendaejecutadosancion=0
              
                enmiendasvv=[]
                for(var i2 = 0; i2 < enmiendasv.length;i2++){
                    var llav1='' +contratosv[i]._id
                    var llav1a=enmiendasv[i2].idpapa
                  
                    if(llav1a===llav1)
                    {
              

                    var montopago=0    
                    var montossaldo0=0    
                    var montosancion0=0    
                   
                    pagosvv= []
                    for(var i3 = 0; i3 < pagosv.length;i3++){
                        var llav2=''+ enmiendasv[i2]._id
                        if(pagosv[i3].idpapa===llav2)
                        {

                       
                      
                        var montosancion=0
                        sancionesvv= []
                        for(var i4 = 0; i4 < sancionesv.length;i4++){
                            var llav3=''+ pagosv[i3]._id
                            if(sancionesv[i4].idpapa=== llav3)
                            {
                            sancionesvv.push(
                                {
                                    "_id" : ''+sancionesv[i4]._id,
                                    "idtiposancion" :  sancionesv[i4].tiposancion.split('°')[0].split(':')[1].trim(), 
                                    
                                    "tiposancion" :  sancionesv[i4].tiposancion.split('¬')[1],
                                    "fechasancion" : sancionesv[i4].fechasancion,
                                    "monto" :  sancionesv[i4].monto,
                                    "imposicion" :  sancionesv[i4].imposicion,
                                    "observaciones" : sancionesv[i4].observaciones,
                                    "estado" :  sancionesv[i4].estado,
                                    "createdAt" : sancionesv[i4].createdAt,

                                }
                            )
                            montosancion=montosancion + sancionesv[i4].monto
                            montoenmiendaejecutadosancion=montoenmiendaejecutadosancion+ sancionesv[i4].monto
                            }
                        }

                

                        pagosvv.push(
                            { "_id" : ''+pagosv[i3]._id,
                            "tipodeaporte" : pagosv[i3].tipodeaporte,
                            "fechapago" : pagosv[i3].fechapago,
                            "nofactura" : pagosv[i3].nofactura,
                            "descripcionpago" : pagosv[i3].descripcionpago,
                            "montopago" : pagosv[i3].montopago,
                            "montosanciones" : pagosv[i3].montosanciones,
                            "montosancion":montosancion,
                            "montosaldo":pagosv[i3].montopago ,
                            "bancotransferencia" : pagosv[i3].bancotransferencia,
                            "nocuenta" : pagosv[i3].nocuenta,
                            "observaciones" : pagosv[i3].observaciones,
                            "estado" : pagosv[i3].estado,
                            "idempresa" : pagosv[i3].idempresa,
                            "idpapa" : pagosv[i3].idpapa,
                            "createdAt" : pagosv[i3].createdAt,
                            "montoapagar" : pagosv[i3].montoapagar,
                            "montoemergencia" : pagosv[i3].montoemergencia,
                            "nopago" : pagosv[i3].nopago,
                            "periodopago" : pagosv[i3].periodopago,
                            sanciones:sancionesvv
                        }
                        )
                        montopago=montopago +pagosv[i3].montopago
                        montoenmiendaejecutado=montoenmiendaejecutado+pagosv[i3].montopago
                        montosancion0=montosancion0+montosancion
                        montossaldo0=montossaldo0+pagosv[i3].montopago 
                    }
                    }

                

                enmiendasvv.push(
                    {
                        _id: enmiendasv[i2]._id,
                        tiporecurso: enmiendasv[i2].tiporecurso,
                        descripcion: enmiendasv[i2].descripcion,
                        fecharegistro: enmiendasv[i2].fecharegistro,
                        fechainicial: enmiendasv[i2].fechainicial,
                        fechafinalizacion:enmiendasv[i2].fechainicial,
                        montoinicial: enmiendasv[i2].montoinicial,
                        montoejecutado: enmiendasv[i2].montoejecutado,
                        estado: enmiendasv[i2].estado,
                        createdAt: enmiendasv[i2].createdAt,
                        tipo: enmiendasv[i2].tipo,
                        montototalenmienda: enmiendasv[i2].montototalenmienda,
                        multasporperiodo: enmiendasv[i2].multasporperiodo.split('¬')[0].split(':')[1].split('<br>')[0] ,
                        idmultasporperiodo:enmiendasv[i2].multasporperiodo.split('¬')[1],
                        montopagos:montopago,
                        montosancion:montosancion0,
                        montosaldo: enmiendasv[i2].montototalenmienda - montopago ,
                        pagos:pagosvv
                      }

                )
                 montoenmienda=montoenmienda+enmiendasv[i2].montototalenmienda
                 
                    }

                }

          
                contratosvv.push({
                    _id:''+contratosv[i]._id,
                    "nocontrato" : contratosv[i].nocontrato,
                    "descripcion" : contratosv[i].descripcion,
                    "imagenareageografica" : contratosv[i].imagenareageografica,
                    
                    "empresa" : contratosv[i].empresa.split(':')[2].split('<br>')[0],
                     
                    "idempresa" : contratosv[i].empresa.split('¬')[1],
                    "proyecto" : contratosv[i].proyecto.split(':')[2].split('<br>')[0],
                    "idproyecto" : contratosv[i].proyecto.split('¬')[1],
                    "estado" : contratosv[i].estado,
                    "idempresa" :contratosv[i].idempresa,
                    "fechafinalizacioncontrato" : contratosv[i].fechafinalizacion,
                    "fechainicialcontrato" :  contratosv[i].fechainicial,
                    "montoestimadocontrato" :  contratosv[i].montoestimado,
                    "plazomaximocontrato" :  contratosv[i].plazomaximo,
                    "fecharegistrocontrato" :  contratosv[i].fecharegistro,
                    "montoejecutadocontrato" :  contratosv[i].montoejecutado,
                    "montoglobalcontrato" :  contratosv[i].montoglobal,
                    "periodo" :  contratosv[i].periodo,
                    "montototal":montoenmienda,
                    "montototalejecutado":montoenmiendaejecutado,
                    "montoenmiendaejecutadosancion":montoenmiendaejecutadosancion,
                    "montosaldo":montoenmienda - montoenmiendaejecutado ,
                    "enmiensasvv": enmiendasvv
                  })
           
                  montoenmienda0=montoenmienda0+montoenmienda;
                  montoenmiendaejecutado0=montoenmiendaejecutado0+montoenmiendaejecutado;
                  montoenmiendaejecutadosancion0=montoenmiendaejecutadosancion0+montoenmiendaejecutadosancion;
                  montosaldo0=montosaldo0+montoenmienda - montoenmiendaejecutado 
                
                }
            }
            if(montoenmienda0+montoenmiendaejecutado0+montoenmiendaejecutadosancion0+montosaldo0 >0  )
            {
            datajson.push({_id:''+ empresav[i0]._id,empresa:empresav[i0].nombreempresa,
                montototal:montoenmienda0,
                montototalejecutado:montoenmiendaejecutado0,
                montoenmiendaejecutadosancion:montoenmiendaejecutadosancion0,
                montosaldo:montosaldo0,
                contratos:contratosvv
            
            })
            
        }
    }
        }
            // 127.0.0.1:9090/api/frmtareasprogramadass/1/dashboard1/5f503bededa4710798a79b84/1/role
            console.log(datajson)
            res.json(datajson);
          
        }
        else{
        if(req.params.id2=='todos0')
        { 
            console.log('entraaaaaaaaaaaaaaaaaaaaaaaaaaaa')
            var planificaciones= []
            var Supervisores= []
            var Inspectores= []
            var Proyectos = []
            planificaciones = await dadatosformulario('5f7f5df385f18458404125e9',{estado:'Activo',idempresa:req.params.id3},req.params.id3,'5f7f5df385f18458404125e9'); 
           
            var papasuper=[];

            for(var i = 0; i < planificaciones.length;i++){
                papasuper.push('' + planificaciones[i]._id + '')
            }


             Supervisores = await dadatosformularioispapaarray('5f7f5f4485f18458404125f8',papasuper,req.params.id3); 
        
            var papainsp=[];

            for(var i = 0; i < Supervisores.length;i++){
                papainsp.push('' + Supervisores[i]._id+ '')
            }

            Inspectores = await dadatosformularioispapaarray('5f7f5f5e85f18458404125fa',papainsp,req.params.id3); 

            var papaproy=[];

            for(var i = 0; i < Inspectores.length;i++){
                papaproy.push(''+ Inspectores[i]._id + '')
            }


            Proyectos = await dadatosformularioispapaarray('5f7f5f7b85f18458404125fd',papaproy,req.params.id3); 


        var  datat= []
            if(req.params.id5==='Supervisor planificación')
            {

                for(var i = 0; i < planificaciones.length;i++){
                   
                    for(var i2 = 0; i2 < Supervisores.length;i2++){

                        if(planificaciones[i]._id===Supervisores[i2].idpapa 
                            && (Supervisores[i2].usuario).split('¬')[1]===req.params.id4 )
                        {


                            for(var i3 = 0; i3 < Inspectores.length;i3++){

                                if(String(Supervisores[i2]._id)===Inspectores[i3].idpapa  )
                                {
                           
                                    for(var i4 = 0; i4 < Proyectos.length;i4++){

                                        if(Inspectores[i3]._id===Proyectos[i4].idpapa  )
                                        {

                                            var aarr=Proyectos[i4].proyecto.split('¬')

                                                    
            contrato = await dadatosformularioidfinal('5f729c2487c9e33bd4ada798',{ _id:aarr[1]},req.params.id3,'5f729c2487c9e33bd4ada798'); 


                                                datat.push({idplanificar:planificaciones[i]._id,
                                                    planificar:planificaciones[i].nombre,
                                                idsupervisor:(Supervisores[i2].usuario).split('¬')[1],
                                                supervisor:(Supervisores[i2].usuario).split('¬')[0],
                                                idinspector:(Inspectores[i3].usuario).split('¬')[1],
                                                inspector:(Inspectores[i3].usuario).split('¬')[0],
                                                idproyecto0:Proyectos[i4]._id,
                                                idcontrato:''+ contrato._id,
                                                "idempresa" : contrato.empresa.split('¬')[1],
                                                "idproyecto" : contrato.proyecto.split('¬')[1],
                                                proyecto: Proyectos[i4].proyecto
                                                
                                                
                                                    })
                                        }
                                    
                                    }
                                }
                    
                            }

                        }

                     
            
                        
                    }
        
                }
                
            }
            else
            {

                if(req.params.id5==='Inspector planificación')
                {
    
               
                    for(var i = 0; i < planificaciones.length;i++){
                       
                        for(var i2 = 0; i2 < Supervisores.length;i2++){
                          
    
                            if(String(planificaciones[i]._id)===Supervisores[i2].idpapa              )
                            {
                            
    
                                for(var i3 = 0; i3 < Inspectores.length;i3++){
    
                                   
                                    if(String(Supervisores[i2]._id)===Inspectores[i3].idpapa 
                                        && (Inspectores[i3].usuario).split('¬')[1]===req.params.id4  )
                                    {
                              
                                        for(var i4 = 0; i4 < Proyectos.length;i4++){
    
                                            if(String(Inspectores[i3]._id)===Proyectos[i4].idpapa  )
                                            {
    
                                                var aarr=Proyectos[i4].proyecto.split('¬')
                                                
                                                    
            contrato = await dadatosformularioidfinal('5f729c2487c9e33bd4ada798',{ _id:aarr[1]},req.params.id3,'5f729c2487c9e33bd4ada798'); 

                                                    datat.push({idplanificar:planificaciones[i]._id,
                                                        planificar:planificaciones[i].nombre,
                                                    idsupervisor:(Supervisores[i2].usuario).split('¬')[1],
                                                    supervisor:(Supervisores[i2].usuario).split('¬')[0],
                                                    idinspector:(Inspectores[i3].usuario).split('¬')[1],
                                                    inspector:(Inspectores[i3].usuario).split('¬')[0],
                                                    idproyecto0:'' + Proyectos[i4]._id + '',
                                                    idinspector0:'' + Inspectores[i3]._id + '',
                                                    idsupervisor0:'' + Supervisores[i2]._id + '',
                                                    "idempresa" :  contrato.empresa.split('¬')[1],
                                                    "idproyecto" : contrato.proyecto.split('¬')[1],
                                                    idcontrato:'' + contrato._id,
                                                    proyecto: Proyectos[i4].proyecto,
                                                    idpapa: Proyectos[i4]._id 
                                                    
                                                    
                                                        })
                                            }
                                        
                                        }
                                    }
                        
                                }
    
                            }
    
                         
                
                            
                        }
            
                    }
                    
                }
                else
                {
                }



            }
           
            res.json(datat);
            console.log(datat)


        }
        else
        { 
            if(req.params.id2=='todos')
            { 
                frmtareasprogramadas.find({idempresa:req.params.id3,idpapa:req.params.id4}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
            else
            { 
                
                Frmmovild.find({idmovil:'5f81d95fc07d6532900465a4', display : "true",idempresa:req.params.id3}).sort([['order', 1]]).exec(function(err, todos) {
                    if (err){ res.send(err); }
                  
             //   console.log(todos)
                                        if(todos.length>0)   {  
                                       
                                            var cad=''
                                            var cadxx=''
                                            var cad3=(dafiltrocad(todos,'','')).split('°')
                                          
                                      
                                         
                                            cad=cad3[0]
                                            cadxx='{'+ cad3[1] + '}'
                                            cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                            cad='{' + cad + '}'
                                            cadxx='{' + cadxx + '}'
    
                                       //  console.log(cad)
                                            var jsonObject = stringToObject(cad);
                                          
                                            var mongoose = require("mongoose");
                                            var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                            delete mongoose.connection.models['5f81d95fc07d6532900465a4'];
                                            var  frmtt= mongoose.model('5f81d95fc07d6532900465a4',tt);

                                            var filtro={idempresa:req.params.id3,idinspector:req.params.id4, estado:req.params.id2} ;
                                            if(req.params.id5==='Supervisor planificación')
                                            {
                                                filtro={idempresa:req.params.id3,idsupervisor:req.params.id4, estado:req.params.id2} ;
                                            }
                                            console.log(filtro)
                                            frmtt.find(filtro).sort({fechaasignada:1}).exec(function(err, todos2) {
                                                if (err){  res.send(err); }
                                                res.json(todos2);

                                            });
                                        }


            });
                
                
                
                
                
             
              }}}}}


               
    }
    else
    {
        frmtareasprogramadas.find({_id:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
        });
    }
}
exports.deletefrmtareasprogramadas = async function(req, res, next){

    console.log(' cccccccccccccccccccreaaaaaaaaaaaaa ')
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina visitas orden de campo '});
  var elimit= []
  console.log(req.params.recordID +  ' ----   ' + req.params.idempresa)
  elimit = await eliminaformulario('5f81d95fc07d6532900465a4',req.params.recordID,req.params.idempresa); 


  frmtareasprogramadasservicios.deleteMany({ idpapa: req.params.recordID }, function(err, todo) {
    
frmtareasprogramadasfotos.deleteMany({ idpapa: req.params.recordID  }, function(err, todo) {
    res.json(elimit);  
});
});


  

  
}
exports.creafrmtareasprogramadas2s = function(req, res, next){
    Bitacora.create(req.body.bitacora);
if(req.params.recordID!=='crea')
{ 
    frmtareasprogramadas.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   
 todo.idempresa       	=	req.body.idempresa        	||	todo.idempresa;   
 todo.idpapa       	=	req.body.idpapa        	||	todo.idpapa;   
 todo.orden       	=	req.body.orden        	||	todo.orden;   
 todo.nombre       	=	req.body.nombre        	||	todo.nombre;   
 todo.estado       	=	req.body.estado        	||	todo.estado;   
            todo.usuarioup=req.body.bitacora.email;
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });
}
else{

    var namess=req.body.idform

    console.log(req.body)

    Frmmovild.find({idmovil:req.body.idform}).exec(function(err, todos) {
     
        if (err){ res.send(err); }
                            if(todos.length>0)   {  

                        

                    
                                var cad=''
                                var cad3=(dafiltrocad(todos,'','')).split('°')
                                cad=cad3[0]
                              
                                if(req.body.idpapa)
                                {
                                   
                                     cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"}'
                                    
                                 
                                }
                                else
                                {
 
                                 
                                         cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"}'
                                     
                                 
 
                                }
                                
                           
                               
                                
                              
                               cad='{' + cad + '}'
                               var jsonObject = stringToObject(cad);
                         
                               var mongoose = require("mongoose");
                               delete mongoose.connection.models[namess];
                               var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                             
                                //GRABA TODO BIEN------------------------------------------------------------------------------

   
    var  frmtt=  mongoose.model(namess ,tt);
   
    console.log('sigueeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000')
 
    frmtt.create(req.body.estructura
        , function(err, todo3) {
        if (err){  console.log(err.message);    res.status(500).send(err.message)    }
        res.json(todo3);
      
    
        });
  



        }
    });


}
}
