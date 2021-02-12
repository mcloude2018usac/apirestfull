
var Frmmovil = require('../models/frmmovil');
var Frmmovild = require('../models/frmmovild');
var Bitacora = require('../models/bitacora');
var Catusuario = require('../models/catusuario');
var Formcat2 = require('../models/frmcat2');
var formulariousrd = require('../models/formulariousrd');
var formulariousr = require('../models/formulariousr');
var functool = require('../controllers/funcionesnode');
var kardex = require('../models/asociadoventa/kardexcorreos');
var kardexproducto = require('../models/asociadoventa/kardexcorreosproducto');
                            
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

    
function dadatosformulariofinal  (namess,filtro,idempresa,namess2)
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


                                    frmtt.find(filtro).exec(function(err, todos2) {
                                        if (err){  res.send(err); }

                                        resolve(todos2); 
                                       // res.json(todos2);

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

function actualizaformularioidfinal  (namess,filtro,idempresa,namess2,est)
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

                                    frmtt.update(filtro, est, function(err, todos2) {
                                   
                                        if (err){  res.send(err); }

                                        resolve(todos2); 
                                       // res.json(todos2);

                                    });
                                }


    });
        
                                    
                                   
                             
                
        
    

                                });

}

function dadatosformulario(namess,filtro,idempresa)
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

                                 
                                    frmtt.find(filtro).exec(function(err, todos2) {
                                        if (err){  res.send(err); }

                                        resolve(todos2); 
                                       // res.json(todos2);

                                    });
                                }


    });
        
                                    
                                   
                             
                
        
    

                                });

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

  function datipo2(value) {
    var tt='';
    switch(value) {
        case 'Alfanumerico':  tt='text';   break;
       case 'Numerico':  tt='Number';   break;
       case 'Moneda':  tt='moneda';   break;
       case 'TextArea':   tt='textarea';   break;
       case 'Etiqueta':   tt='label';   break;
       case 'Lista de valores':   tt='select';   break;
       case 'Check List':   tt='select2';   break;
       case 'Check List Detalle':   tt='select3';   break;
       case 'Rango':   tt='rango';   break;
       case 'Fecha':   tt='fecha';   break;
       case 'Fecha y Hora':   tt='fechahora';   break;
       case 'Hora':   tt='hora';   break;
       case 'Check':   tt='check';   break;
       case 'Imagen':   tt='imagen';   break;
        default:
          // code block
      }
        return tt;
      }

  function stringToObject(JSONString) {
      var jsonObject = JSON.parse(JSONString);
      return jsonObject;
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
  function objectFindByKey(array, key, value) {
    return array[0][0];
  //  return this.array(function(x) { return x[key] })

}


  
  // Convert javascript object to json string.
  function objectToString(jsObject) {
  
      var jsonString = JSON.stringify(jsObject);
  
   
      return jsonString;
  }

  var dafecha = function(ff) {
      var fecha= new Date(ff).toISOString().substr(0,10);   
      var  ffa=fecha.split('-')
    
    return ffa[2] + '-' + ffa[1] + '-' + ffa[0];
};

  var getDaysArray = function(start, end) {
    for(var arr=[],dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
      var fecha=new Date(dt)
        arr.push(fecha.toISOString() );
    }
    return arr;
};
  
 
  function daarreglo(data,op) {
  
    var val=[]

    //return data.map(function(item,index){      return item.idunidad === op;   });
     //val = data.filter(function(item){        return item.idunidad === op;   });
   // val= data.forEach(function(item,index){      return item.idunidad === op;   });
  
    for(var i = 0; i <data.length; i++) {
             if(data[i].idunidad==op)
             {

                val.push({key:data[i]._id,label:data[i].nombre});
             }
    }
    
   return val;

    
}

var creafrmregistro= function(req, res, next,namess,idform,estructura,responde,datat,idpapa,idtipo){


   // Bitacora.create(req.body.bitacora);
    Frmmovild.find({idmovil:idform}).exec(function(err, todos) {
  
        if (err){ res.send(err); }
                            if(todos.length>0)   {  

                               //validar si ya existe algunos de los que son llave 
                                var validarcampos =[];
                                var filtrovalida=''
                               for(var i = 0; i <todos.length; i++) {
                                   if(todos[i].usarunaves==='true')
                                   {
                                   if(i===0)
                                   {
                                    filtrovalida=  '{"' +todos[i].name + '":"' + req.body.estructura[todos[i].name] + '"' 
                                   }
                                   else
                                   {
                                    filtrovalida= filtrovalida + ',"' +todos[i].name + '":"' + req.body.estructura[todos[i].name]  + '"' 
                                   }
                                    
                                         
                                   }

                               }
                            //   filtrovalida=filtrovalida.substring(0,filtrovalida.length-1)
                               console.log('filtroooooooooo ::::::::::::::::: '+filtrovalida + ' ::::::::')
                               

                               if(filtrovalida ==='')
                               {

                                var cad=''
                                var cad3=(dafiltrocad(todos,'','')).split('°')
                                cad=cad3[0]
                              
                                if(idpapa)
                                {
                                    if(idtipo==='proceso')
                                    {
                                     cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"estadoordenxxx":{"type":"String"}'
                                    }
                                    else
                                    {
                                     cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"}'
                                    }
                                 
                                }
                                else
                                {
 
                                     if(idtipo==='proceso')
                                     {
                                         cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"estadoordenxxx":{"type":"String"}'
                                       
                                     }
                                     else
                                     {
                                         cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"}'
                                     }
                                 
 
                                }
                                
                           
                               
                                
                              
                               cad='{' + cad + '}'
                               var jsonObject = stringToObject(cad);
                         
                               var mongoose = require("mongoose");
                               delete mongoose.connection.models[namess];
                               var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                             
                                //GRABA TODO BIEN------------------------------------------------------------------------------
try {
   
    var  frmtt=  mongoose.model(namess ,tt);
   
    console.log('sigueeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000')
 
    frmtt.create(estructura
        , function(err, todo3) {
        if (err){  console.log(err.message);    res.status(500).send(err.message)    }
       if(responde==='siresponde'){     res.json(datat);}
       if(responde==='siregistro'){     res.json(todo3);}
        console.log('finallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll0000000000000000000000')
     
      
    
        });
  
  } catch(e) {
    
    console.log(e)
    //ya no le pongo esquema eso dice la solucion// pero no graba lo nuevo campo
    //aqui tendria que se un sabe
    console.log('sigueeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
  
    var  frmtt= mongoose.model(namess);
  
 
    frmtt.create(estructura
        , function(err, todo3) {
        if (err){       res.status(500).send(err.message)    }
   
        if(responde==='siresponde'){     res.json(datat);}
        if(responde==='siregistro'){     res.json(todo3);}
        console.log('finallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll')
      
    
        });
  }
 //FIN GRABA TODO BIENNNNNNNNN--------------------------------------------------
                               }
                               else
                               {
                                filtrovalida='{' +filtrovalida + '}'
                                console.log(filtrovalida)
                        

                                var cad=''
                                var cad3=(dafiltrocad(todos,'','')).split('°')
                                cad=cad3[0]
                                if(idpapa)
                                {
                                    if(idtipo==='proceso')
                                    {
                                     cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"estadoordenxxx":{"type":"String"}'
                                    }
                                    else
                                    {
                                     cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"}'
                                    }
                                 
                                }
                                else
                                {
 
                                     if(idtipo==='proceso')
                                     {
                                         cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"},"idactividadxxx":{"type":"String"},"estadoxxx":{"type":"String"},"actividadxxx":{"type":"String"},"idaccionxxx":{"type":"String"},"accionxxx":{"type":"String"},"tipoaccionxxx":{"type":"String"},"subtipoaccionxxx":{"type":"String"},"idactorxxx":{"type":"String"},"actorxxx":{"type":"String"},"actividadclasexxx":{"type":"String"},"actividadtipoxxx":{"type":"String"},"leidoxxx":{"type":"Boolean"},"enviadoporxxx":{"type":"String"},"estadoordenxxx":{"type":"String"}'
                                     }
                                     else
                                     {
                                         cad=cad + 'usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" },"geoposicionxxx":{"type":"String"}'
                                     }
                                 
 
                                }
                                
                               
                               cad='{' + cad + '}'
                               var jsonObject = stringToObject(cad);
                             
                               var mongoose = require("mongoose");
                               var tt=  new mongoose.Schema(jsonObject, {timestamps:true });


                               //BUSCAR UNO EXISTENTE-----------------------------------------------------------------------------------
                               try {
                                   var  frmbusca= mongoose.model(namess,tt);
                                //{"contrato":"descripcion: descripción del contrato , nocontrato: a1 ,        °5f7648b37e8d091240017cc3"}
                                   frmbusca.find(JSON.parse(filtrovalida) ,function(err, todos2a) {
                                       if (err){  res.send(err);  }
                               
                                       if(todos2a.length>0)
                                       {
                                          
                                           res.status(500).send('Este registro Ya existe en base de datos, no pueden haber repetidos') 
                                        
                                       }
                                       else
                                       {
                                       //GRABA TODO BIEN------------------------------------------------------------------------------
                               try {
                                   var  frmtt=  mongoose.model(namess,tt);
                                
                                   frmtt.create(estructura
                                       , function(err, todo3) {
                                       if (err){  console.log(err.message);    res.status(500).send(err.message)    }
                                           
                                       if(responde==='siresponde'){     res.json(datat);}
       if(responde==='siregistro'){     res.json(todo3);}
                                       });
                                 
                                 } catch(e) {
                                   
                                   console.log(e)
                                   //ya no le pongo esquema eso dice la solucion// pero no graba lo nuevo campo
                                   //aqui tendria que se un sabe
                                   var  frmtt= mongoose.model(namess);
                                  
                                   frmtt.create(estructura
                                       , function(err, todo3) {
                                       if (err){       res.status(500).send(err.message)    }
                                  
                                       if(responde==='siresponde'){     res.json(datat);}
                                       if(responde==='siregistro'){     res.json(todo3);}
                                   
                                       });
                                 }
//FIN GRABA TODO BIENNNNNNNNN--------------------------------------------------
   
                                          
                                       }
                                     
                                     
                                   });
                                 } catch(e) {
                                    
                                   var  frmbusca= mongoose.model(namess);
                                  
                                   frmbusca.find(JSON.parse(filtrovalida),function(err, todos2a) {
                                        if (err){  res.send(err);  }
                                     
                                        if(todos2a.length>0)
                                        {
                                           res.status(500).send('Este registro Ya existe en base de datos, no pueden haber repetidos') 
                                        
                                          
                                         } else
                                           {

//GRABA TODO BIEN------------------------------------------------------------------------------
try {
   var  frmtt=  mongoose.model(namess,tt);

   frmtt.create(estructura
       , function(err, todo3) {
       if (err){  console.log(err.message);    res.status(500).send(err.message)    }
           
       if(responde==='siresponde'){     res.json(datat);}
       if(responde==='siregistro'){     res.json(todo3);}
   
       });
 
 } catch(e) {
   
   console.log(e)
   //ya no le pongo esquema eso dice la solucion// pero no graba lo nuevo campo
   //aqui tendria que se un sabe
   var  frmtt= mongoose.model(namess);
  
   frmtt.create(estructura
       , function(err, todo3) {
       if (err){       res.status(500).send(err.message)    }
  
       if(responde==='siresponde'){     res.json(datat);}
       if(responde==='siregistro'){     res.json(todo3);}
   
       });
 }
//FIN GRABA TODO BIENNNNNNNNN--------------------------------------------------


                                           }
                                    
                                    });
                                 }

                               }
                         














                                
                  

        }
    });



}

function currencyFormatDE(num) {
  return (
    num
      .toFixed(2) // always two decimal digits
      .replace('.', ',') // replace decimal point character with ,
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' Q.'
  ) // use . as a separator
}
function formatNumber(num) {
  return 'Q.' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function numberWithCommas(x) {


  return formatNumber(Number(x))
}


    var dareporteexcel= async function(req, res, next,dataanterior){
        console.log(req.params)
        return new Promise(resolve => {
            var reportefrm=req.params.id.split('°')
            switch(reportefrm[1]) {
                case '5ff67ee82977bb360c526f8a': //REQUISICION

            (async () => {


                var markup =  '';

                master = await dadatosformularioidfinal(reportefrm[1],{ _id:req.params.id2},req.params.id3,reportefrm[1]); 
     
             
                if(master)
                {
                    markup =  '    ';
                    markup=markup+'<table id="excel-table" border="1"> <tr><td contenteditable="true" colspan="25"></td></tr><tr><td contenteditable="true" colspan="9">'+  master.departamento +'</td> '

                    markup=markup+'<td contenteditable="true" colspan="11"></td> '

                    markup=markup+'<td contenteditable="true" colspan="5">'+  master.nombrejefesolicitante +'</td></tr> '

                    markup = markup + '   <tr><td contenteditable="true" colspan="25"></td></tr>  ';
                    markup = markup +  '  <tr><td contenteditable="true" colspan="25"></td></tr>  ';
                    
                    markup=markup+'<tr><td contenteditable="true" colspan="9">'+  master.cargodelsolicitante +'</td> '

                    markup=markup+'<td contenteditable="true" colspan="11"></td> '

                    markup=markup+'<td contenteditable="true" colspan="5">'+  master.nombresolicitante +'</td></tr> '

                    markup = markup +  '   <tr><td contenteditable="true" colspan="25"></td></tr>  ';
                    markup = markup +  '  <tr><td contenteditable="true" colspan="25"></td></tr>  ';
                    markup = markup +  '   <tr><td contenteditable="true" colspan="25"></td></tr>  ';

                    markup=markup+'<tr><td contenteditable="true" colspan="9">'+  master.fecha +'</td> '
                    markup=markup+'<td contenteditable="true" colspan="11"></td> '
                    markup=markup+'<td contenteditable="true" colspan="5">'+  master.personaquerecibe +'</td></tr> '

                    markup = markup +  '   <tr><td contenteditable="true" colspan="25"></td></tr>  ';
                    markup = markup +  '   <tr><td contenteditable="true" colspan="25"></td></tr>  ';
                    markup = markup +  '   <tr><td contenteditable="true" colspan="25"></td></tr>  ';
                    markup = markup +  '   <tr><td contenteditable="true" colspan="25"></td></tr>  ';
                    markup = markup +  '   <tr><td contenteditable="true" colspan="25"></td></tr>  ';
                    markup = markup +  '   <tr><td contenteditable="true" colspan="25"></td></tr>  ';

                    detalle = await dadatosformulariofinal('5fc03c79ab0f6448b877eb5c',{idpapa:'' + master._id},req.params.id3,'5fc03c79ab0f6448b877eb5cs'); 

                    markup=markup+''

                for(var i = 0; i < detalle.length;i++){
                    var articulon=detalle[i].articulo.split('<br>')
              

                    markup=markup+'<tr><td contenteditable="true" colspan="3">'+  detalle[i].cantidadsolicitada +'</td> '

                    markup=markup+'<td contenteditable="true" colspan="1"></td> '

                    markup=markup+'<td contenteditable="true" colspan="4">'+  detalle[i].cantidaddespachada +'</td> '
                    markup=markup+'<td contenteditable="true" colspan="4">'+  articulon[3].split(':')[0] +'</td> '

                    markup=markup+'<td contenteditable="true" colspan="11">'+ articulon[2].split(':')[1].trim() +'</td></tr>'


                    
                
                }

                markup=markup+'<tr><td contenteditable="true" colspan="3"></td> '

                markup=markup+'<td contenteditable="true" colspan="1"></td> '

                markup=markup+'<td contenteditable="true" colspan="4"></td> '
                markup=markup+'<td contenteditable="true" colspan="4"></td> '

                markup=markup+'<td contenteditable="true" style="font-weight:bold" colspan="11">ULTIMA LINEA</td></tr>'
                
                markup=markup+''
                markup=markup+'</table>'

                }
                

              
                resolve({estado:markup}); 

                
            })();
                break;
                case '5fc02f572fc3552d1014792f': //FORMULARIO 1-H

                (async () => {
    
    
                    var markup =  '';
    
                    master = await dadatosformularioidfinal(reportefrm[1],{ _id:req.params.id2},req.params.id3,reportefrm[1]); 
         console.log(master)
                
                    if(master)
                    {
                        markup =  '    ';
                        markup=markup+'<table id="excel-table" border="1"><tr><td contenteditable="true" colspan="1"></td><td contenteditable="true" colspan="1"></td><td contenteditable="true" colspan="5">'+  master.dependencia +'</td></tr>'
    
                        markup=markup+'<tr><td contenteditable="true" colspan="1"></td><td contenteditable="true" colspan="1"></td><td contenteditable="true" colspan="5">'+ master.programa +'</td> <td contenteditable="true" colspan="1"></td><td contenteditable="true" colspan="3">' + master.fecha +'</td></tr>'
    
                        markup=markup+'<tr><td contenteditable="true" colspan="1"></td><td contenteditable="true" colspan="1"></td><td contenteditable="true" colspan="5">'+  master.proveedor.split('<br>')[1].split(':')[1].trim() +'</td></tr>'

    
                        detalle = await dadatosformulariofinal('5fc0308c2fc3552d10147947',{idpapa:'' + master._id},req.params.id3,'5fc0308c2fc3552d10147947'); 

                        markup=markup+''

                        var grantotal=0
    
                    for(var i = 0; i < detalle.length;i++){
                        var articulon=detalle[i].articulo.split('<br>')
                        var preciou=0
                       
                        if(detalle[i].preciounitario===undefined)
                        {
                            preciou=0
                        }
                        else
                        {
                             preciou=detalle[i].preciounitario
                        }
                        
    
                        markup=markup+'<tr><td contenteditable="true" colspan="1">'+  detalle[i].cantidad +'</td> '
    
                        markup=markup+'<td contenteditable="true" colspan="3">'+ detalle[i].descripciondelarticulaenfactura +'</td> '
    
                        markup=markup+'<td contenteditable="true" colspan="1">'+  detalle[i].codigogastoreglon +'</td> '

                        markup=markup+'<td contenteditable="true" colspan="1">'+  master.foliolibroalmacen +'</td> '
                        
                        markup=markup+'<td contenteditable="true" colspan="1">'+  preciou +'</td> '
                    
                        var tottal=0
                        total=preciou*detalle[i].cantidad
                        markup=markup+'<td contenteditable="true" colspan="1">Q.'+ total +'</td></tr>'
                        grantotal=grantotal+total
    
                        
                    
                    }
    
                    markup=markup+'<tr><td contenteditable="true" colspan="1"></td> '
    
                    markup=markup+'<td contenteditable="true" colspan="3">TOTAL</td> '

                    markup=markup+'<td contenteditable="true" colspan="1"></td> '

                    markup=markup+'<td contenteditable="true" colspan="1"></td> '
                    
                    markup=markup+'<td contenteditable="true" colspan="1"></td> '
                
                    
                    markup=markup+'<td contenteditable="true" colspan="1">Q.'+ grantotal +'</td></tr>'
                    

                    markup=markup+'<tr><td contenteditable="true" colspan="1"></td></tr> '
                    markup=markup+'<tr><td contenteditable="true" colspan="1"></td></tr> '

                    markup=markup+'<tr><td contenteditable="true" colspan="1"></td><td contenteditable="true" colspan="3">FACTURA ELECTRONICA</td></tr> '

                    markup=markup+'<tr><td contenteditable="true" colspan="1"></td><td contenteditable="true" colspan="3">SERIE:'+ master.seriefactura +'</td></tr> '

                    markup=markup+'<tr><td contenteditable="true" colspan="1"></td><td contenteditable="true" colspan="3">No.'+  master.nofactura+'</td></tr> '

                    markup=markup+'<tr><td contenteditable="true" colspan="1"></td><td contenteditable="true" colspan="3">NIT:'+ master.proveedor.split('<br>')[2].split(':')[1].trim() +' FECHA:'+ String(master.fechafactura).substr(0,10) +'</td></tr> '

                    markup=markup+''
                    markup=markup+'</table>'
    
                    }
                    
    
                  
                    resolve({estado:markup}); 
    
                    
                })();
                    break;
                default:
                  // code block
                  resolve({estado:'exito'}); 
              }
        });
    }

    var dareportepdf= async function(req, res, next,dataanterior){
        console.log(req.params)
        return new Promise(resolve => {
            var reportefrm=req.params.id.split('°')
            switch(reportefrm[1]) {
                case '5ff67ee82977bb360c526f8a': //REQUISICION

            (async () => {


                var markup =  '';
                let jsonx= [];

                master = await dadatosformularioidfinal(reportefrm[1],{ _id:req.params.id2},req.params.id3,reportefrm[1]); 
     
             
                if(master)
                {
                    
                    jsonx.push( [
                        { 
                            columns: [
                              {
                                // auto-sized columns have their widths based on their content
                                width: 360,
                               
                                text:  master.departamento ,
                               
                              },
                              {
                                // star-sized columns fill the remaining space
                                // if there's more than one star-column, available width is divided equally
                                width: 150,
                               
                                text: master.nombrejefesolicitante,
                               
                              },
                             
                            ],
                            // optional space between columns
                            columnGap: 1,
                            margin: [ 45, 80, 10, 1 ] ,
                          
                           
                            fontSize: 8
                          }
                        
                    ]);

                    jsonx.push( [
                        { 
                            columns: [
                              {
                                // auto-sized columns have their widths based on their content
                                width: 360,
                               
                                text:  master.cargodelsolicitante ,
                               
                              },
                              {
                                // star-sized columns fill the remaining space
                                // if there's more than one star-column, available width is divided equally
                                width: 150,
                               
                                text: master.nombresolicitante ,
                               
                              },
                             
                            ],
                            // optional space between columns
                            columnGap: 1,
                            margin: [ 45, 40, 10, 1 ] ,
                           
                           
                            fontSize: 8
                          }
                        
                    ]);

                    jsonx.push( [
                        { 
                            columns: [
                              {
                                // auto-sized columns have their widths based on their content
                                width: 360,
                               
                                text: dafecha( master.fecha) ,
                               
                              },
                              {
                                // star-sized columns fill the remaining space
                                // if there's more than one star-column, available width is divided equally
                                width: 150,
                             
                                text: master.personaquerecibe ,
                               
                              },
                             
                            ],
                            // optional space between columns
                            columnGap: 1,
                            margin: [ 45, 45, 10, 1 ] ,
                            
                           
                            fontSize: 8
                          }
                        
                    ]);

                    jsonx.push( [
                      { 
                          columns: [
                            {
                              // auto-sized columns have their widths based on their content
                              width: 360,
                             
                              text: '' ,
                             
                            }
                           
                           
                          ],
                          // optional space between columns
                          columnGap: 1,
                          margin: [ 45, 78, 10, 1 ] ,
                          
                         
                          fontSize: 8
                        }
                      
                  ]);

                 

                    detalle = await dadatosformulariofinal('5fc03c79ab0f6448b877eb5c',{idpapa:'' + master._id},req.params.id3,'5fc03c79ab0f6448b877eb5cs'); 

                    markup=markup+''

                    var cuantosreg=detalle.length;

                for(var i = 0; i < detalle.length;i++){
                    var articulon=detalle[i].articulo.split('<br>')
                  if(articulon[2].split(':')[1].trim()==='VIENEN DE LA')
                  {
                    jsonx.push( [
                      { 
                          columns: [
                            {
                              // auto-sized columns have their widths based on their content
                              width: 70,
                            
                              text:  '',
                             
                            },
                          
                            {
                              // auto-sized columns have their widths based on their content
                              width: 50,
                             
                              text:  '',
                             
                            },
                            {
                              // auto-sized columns have their widths based on their content
                              width: 60,
                             
                              text: '',
                             
                            },

                            {
                              // auto-sized columns have their widths based on their content
                              width: 255,
                             
                              text:  articulon[2].split(':')[1].trim() + ' ' + detalle[i].notarjeta,
                             
                            },
                            {
                              // auto-sized columns have their widths based on their content
                              width: 50,
                             
                              text:  '',
                             
                            },

                         
                           
                          ],
                          // optional space between columns
                          columnGap: 1,
                          margin: [ 30, 0, 10, 6 ] ,
                         
                         
                          fontSize: 8
                        }
                      
                  ]);
            

                  }
                  else
                  {
                    if(articulon[2].split(':')[1].trim()==='ULTIMA LINEA')
                    {

                      jsonx.push( [
                        { 
                            columns: [
                              {
                                // auto-sized columns have their widths based on their content
                                width: 70,
                              
                                text:  '',
                               
                              },
                            
                              {
                                // auto-sized columns have their widths based on their content
                                width: 50,
                               
                                text:  '',
                               
                              },
                              {
                                // auto-sized columns have their widths based on their content
                                width: 60,
                               
                                text: '',
                               
                              },

                              {
                                // auto-sized columns have their widths based on their content
                                width: 255,
                               
                                text:  articulon[2].split(':')[1].trim(),
                               
                              },
                              {
                                // auto-sized columns have their widths based on their content
                                width: 50,
                               
                                text:  '',
                               
                              },

                           
                             
                            ],
                            // optional space between columns
                            columnGap: 1,
                            margin: [ 30, 0, 10, 6 ] ,
                           
                           
                            fontSize: 8
                          }
                        
                    ]);
              
                    }
                    else
                    {
                      jsonx.push( [
                        { 
                            columns: [
                              {
                                // auto-sized columns have their widths based on their content
                                width: 70,
                              
                                text:  detalle[i].cantidadsolicitada ,
                               
                              },
                            
                              {
                                // auto-sized columns have their widths based on their content
                                width: 50,
                               
                                text:  detalle[i].cantidaddespachada,
                               
                              },
                              {
                                // auto-sized columns have their widths based on their content
                                width: 60,
                               
                                text: articulon[4].split(':')[1].trim(),
                               
                              },

                              {
                                // auto-sized columns have their widths based on their content
                                width: 255,
                               
                                text:  articulon[2].split(':')[1].trim(),
                               
                              },
                              {
                                // auto-sized columns have their widths based on their content
                                width: 50,
                               
                                text:  detalle[i].notarjeta,
                               
                              },

                           
                             
                            ],
                            // optional space between columns
                            columnGap: 1,
                            margin: [ 30, 0, 10, 6 ] ,
                           
                           
                            fontSize: 8
                          }
                        
                    ]);
              
                      
                    }

                  }
                    

                  
                    
                
                }

                if(cuantosreg<14)
                {

                  
                for(var i = cuantosreg; i < 15;i++){
                

                  jsonx.push( [
                      { 
                          columns: [
                            {
                              // auto-sized columns have their widths based on their content
                              width: 75,
                            
                              text:  '',
                             
                            },
                          
                            {
                              // auto-sized columns have their widths based on their content
                              width: 40,
                             
                              text:  '',
                             
                            },
                            {
                              // auto-sized columns have their widths based on their content
                              width: 80,
                             
                              text:'',
                             
                            },

                            {
                              // auto-sized columns have their widths based on their content
                              width: 250,
                             
                              text:  '  ',
                             
                            },

                         
                           
                          ],
                          // optional space between columns
                          columnGap: 1,
                          margin: [ 45, 0, 10, 6 ] ,
                         
                         
                          fontSize: 8
                        }
                      
                  ]);
            

                
                  
              
              }

                }


                jsonx.push( [
                  { 
                      columns: [
                        {
                          // auto-sized columns have their widths based on their content
                          width: 350,
                         
                          text:  master.justificaciondeuso ,
                         
                        },
                      
                      ],
                      // optional space between columns
                      columnGap: 1,
                      margin: [ 120, 10, 10, 6 ] ,
                      
                     
                      fontSize: 8
                    }
                  
              ]);

              
              jsonx.push( [
                { 
                    columns: [
                      {
                        // auto-sized columns have their widths based on their content
                        width: 400,
                       
                        text:  master.observaciones ,
                       
                      },
                    
                    ],
                    // optional space between columns
                    columnGap: 1,
                    margin: [ 45, 10, 10, 6 ] ,
                    
                   
                    fontSize: 8
                  }
                
            ]);

                }
                

              
                resolve({estado:jsonx}); 

                
            })();
                break;
                case '5fc02f572fc3552d1014792f': //FORMULARIO 1-H

                (async () => {
    
    
                    var markup =  '';
    
                    master = await dadatosformularioidfinal(reportefrm[1],{ _id:req.params.id2},req.params.id3,reportefrm[1]); 
         
                    let jsonx= [];

        
                    
                    if(master)
                    {//border: [true, true, false, false],  width: 100,
                        /*
	{
			style: 'tableExample',
			table: {
				heights: [20, 50, 70],
				body: [
					['row 1 with height 20', 'column B'],
					['row 2 with height 50', 'column B'],
					['row 3 with height 70', 'column B']
				]
			}
        },
        
        margin: [left, top, right, bottom]
                        */

                        var fechat=''
                        fechat=master.fecha

                        jsonx.push( [
                          {     text: '   ',   fontSize: 8,  colSpan: 1       }, 
                            {     text: '',   fontSize: 9,  colSpan: 1       }, 
                            {     text: '',   fontSize: 9,  colSpan: 1       }, 
                            { margin: [ 58, 40, 10, 1 ] ,
                                text: master.dependencia,
                                bold: true,
                                colSpan: 5,
                                fontSize: 10
                              
                            }
                            
                        ]);

                    


                        jsonx.push( [
                            { 
                                columns: [
                                  {
                                    // auto-sized columns have their widths based on their content
                                    width: 300,
                                    bold: true,
                                    text: master.programa,
                                   
                                  },
                                  {
                                    // star-sized columns fill the remaining space
                                    // if there's more than one star-column, available width is divided equally
                                    width: 150,
                                    bold: true,
                                    text:dafecha(fechat),
                                    margin: [ 90, 0, 0, 0 ] ,
                                   
                                  },
                                 
                                ],
                                // optional space between columns
                                columnGap: 1,
                                margin: [ 58, 5, 10, 1 ] ,
                                bold: true,
                               
                                fontSize: 10
                              }
                            
                        ]);

                        jsonx.push( [
                            { 
                                columns: [
                                  {
                                    // auto-sized columns have their widths based on their content
                                    width: 350,
                                    bold: true,
                                    text:  master.proveedor.split('<br>')[1].split(':')[1].trim(),
                                   
                                  },
                                
                                 
                                ],
                                // optional space between columns
                                columnGap: 1,
                                margin: [ 58, 5, 10, 1 ] ,
                                bold: true,
                               
                                fontSize: 10
                              }
                            
                        ]);
                 
                        jsonx.push( [
                          { 
                              columns: [
                                {
                                  // auto-sized columns have their widths based on their content
                                  width: 350,
                                  bold: true,
                                  text:  '',
                                 
                                },
                              
                               
                              ],
                              // optional space between columns
                              columnGap: 1,
                              margin: [ 80, 32, 10, 1 ] ,
                              bold: true,
                             
                              fontSize: 10
                            }
                          
                      ]);
               
  

    
                        detalle = await dadatosformulariofinal('5fc0308c2fc3552d10147947',{idpapa:'' + master._id},req.params.id3,'5fc0308c2fc3552d10147947'); 

                        markup=markup+''

                        var grantotal=0
    
                    for(var i = 0; i < detalle.length;i++){
                        var articulon=detalle[i].articulo.split('<br>')
                        var preciou=0
                       
                        if(detalle[i].preciounitario===undefined)
                        {
                            preciou=0
                        }
                        else
                        {
                             preciou=detalle[i].preciounitario
                        }
                        

                        var tottal=0
                        total=preciou*detalle[i].cantidad
                        jsonx.push( [
                            { 
                                columns: [
                                  {
                                    // auto-sized columns have their widths based on their content
                                    width: 35,
                                 
                                    text:  detalle[i].cantidad,
                                   
                                  },
                                
                                  {
                                    // auto-sized columns have their widths based on their content
                                    width: 175,
                                  
                                    text:  detalle[i].descripciondelarticulaenfactura,
                                   
                                  },
                                  {
                                    // auto-sized columns have their widths based on their content
                                    width: 20,
                                  
                                    text: ' ',
                                   
                                  },
                                  {
                                    // auto-sized columns have their widths based on their content
                                    width: 58,
                                  
                                    text: detalle[i].codigogastoreglon,
                                   
                                  },

                                  {
                                    // auto-sized columns have their widths based on their content
                                    width: 30,
                                  
                                    text:   master.foliolibroalmacen,
                                   
                                  },

                                  {
                                    // auto-sized columns have their widths based on their content
                                    width: 60,
                                   
                                    text:  numberWithCommas(preciou) ,
                                   
                                  },
                                  {
                                    // auto-sized columns have their widths based on their content
                                    width: 50,
                                  
                                    text: numberWithCommas(total) ,
                                   
                                  }
                                 
                                ],
                                // optional space between columns
                                columnGap: 1,
                                margin: [ -10, 0, 1, 1 ] ,
                               
                               
                                fontSize: 8
                              }
                            
                        ]);
                 


    
                
                    
                      
                        grantotal=grantotal+total
    
                        
                    
                    }
    

                    jsonx.push( [
                        { 
                            columns: [
                              {
                                // auto-sized columns have their widths based on their content
                                width: 35,
                              
                                text: ''
                               
                              },
                              {
                                // auto-sized columns have their widths based on their content
                                width: 175,
                              
                                text: 'TOTAL'
                               
                              }, 
                              {
                                // auto-sized columns have their widths based on their content
                                width: 20,
                              
                                text: ' ',
                               
                              },
                              {
                                // auto-sized columns have their widths based on their content
                                width: 58,
                               
                                text: ''
                               
                              }, {
                                // auto-sized columns have their widths based on their content
                                width: 30,
                               
                                text: ''
                               
                              }, {
                                // auto-sized columns have their widths based on their content
                                width: 60,
                               
                                text: ''
                               
                              }, {
                                // auto-sized columns have their widths based on their content
                                width: 50,
                                decoration:'overline',
                               
                                bold:true,
                                text: numberWithCommas(grantotal)
                               
                              },
                                ///hhhhh
                            ],
                            // optional space between columns
                            columnGap: 1,
                            margin: [ -10, 0, 1, 1 ] ,
                          
                           
                            fontSize: 8
                          }
                        
                    ]);
             
            
                    jsonx.push( [
                      { 
                          columns: [
                            {
                              // auto-sized columns have their widths based on their content
                              width: 35,
                            
                              text: '      '
                             
                            },
                            {
                              // auto-sized columns have their widths based on their content
                              width: 175,
                            
                              text: '        '
                             
                            }, {
                              // auto-sized columns have their widths based on their content
                              width: 58,
                             
                              text: ''
                             
                            },
                            {
                              // auto-sized columns have their widths based on their content
                              width: 20,
                            
                              text: ' ',
                             
                            }, 
                            {
                              // auto-sized columns have their widths based on their content
                              width: 60,
                             
                              text: ''
                             
                            }, {
                              // auto-sized columns have their widths based on their content
                              width:80,
                             
                              text: '  '
                             
                            }, {
                              // auto-sized columns have their widths based on their content
                              width: 50,
                              decoration:'overline',
                              decorationStyle:'double',
                              bold:true,
                              text: '                            '
                             
                            },
                           
                          ],
                          // optional space between columns
                          columnGap: 1,
                          margin: [ -10, 0, 1, 1 ] ,
                        
                         
                          fontSize: 8
                        }
                      
                  ]);
           
                   
                    jsonx.push( [
                        { 
                            columns: [
                              {
                                // auto-sized columns have their widths based on their content
                                width: 300,
                               
                                text:   master.tipodefactura,
                               
                              },
                            
                             
                            ],
                            // optional space between columns
                            columnGap: 1,
                            margin: [ 35, 30, 10, 1 ] ,
                          
                           
                            fontSize: 10
                          }
                        
                    ]);



                    jsonx.push( [
                        { 
                            columns: [
                              {
                                // auto-sized columns have their widths based on their content
                                width: 300,
                              
                                text:  'SERIE:'+ master.seriefactura,
                               
                              },
                            
                             
                            ],
                            // optional space between columns
                            columnGap: 1,
                            margin: [ 35, 2, 10, 1 ] ,
                         
                           
                            fontSize: 10
                          }
                        
                    ]);

                    jsonx.push( [
                        { 
                            columns: [
                              {
                                // auto-sized columns have their widths based on their content
                                width: 300,
                               
                                text:  'No.'+master.nofactura,
                               
                              },
                            
                             
                            ],
                            // optional space between columns
                            columnGap: 1,
                            margin: [ 35, 2, 10, 1 ] ,
                           
                           
                            fontSize: 10
                          }
                        
                    ]);

                    jsonx.push( [
                        { 
                            columns: [
                              {
                                // auto-sized columns have their widths based on their content
                                width: 300,
                               
                                text: ' NIT:'+ master.proveedor.split('<br>')[2].split(':')[1].trim() +' FECHA:'+ dafecha(master.fechafactura),
                               
                              },
                            
                             
                            ],
                            // optional space between columns
                            columnGap: 1,
                            margin: [ 35, 2, 10, 1 ] ,
                           
                           
                            fontSize: 10
                          }
                        
                    ]);


                 
    
                    }
                    
    
                  
                    resolve({estado:jsonx}); 
    
                    
                })();
                    break;
                default:
                  // code block
                  resolve({estado:'exito'}); 
              }
        });
    }
  

module.exports = {

  

    dareporteexcel: dareporteexcel,
    dareportepdf: dareportepdf
   
      }
