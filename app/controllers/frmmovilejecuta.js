
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
                                    console.log(est)
                                    frmtt.updateMany(filtro, est, function(err, todos2) {
                                  
                                        if (err){   console.log(err) }

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

var visitas_programadas= function(req, res, next){



var   acum=req.body.acumulados;
var periodot;
var supervidort;
var inspectort;
var planificat;


for(var i = 0; i < acum.length;i++){
    switch(acum[i].tabla) {
        case 'Planificación':  periodot=  acum[i].item;break;
        case 'Planificación supervisores':  supervidort=  acum[i].item;break;
        case 'Planificación inspectores':  inspectort=  acum[i].item;break;
        case 'Planificar':  planificat=  acum[i].item;break;
        default:
       }}



       
var frmmovil='5f7f5f7b85f18458404125fds'
Frmmovild.find({idmovil:'5f7f5f7b85f18458404125fd', display : "true"}).sort([['order', 1]]).exec(function(err, todos) {
    if (err){ res.send(err); }
                        if(todos.length>0)   {  
                            var cad= ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                            cad='{' + cad + '}'
                            var jsonObject = stringToObject(cad);
                            var mongoose = require("mongoose");
                            var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                var  frmtt= mongoose.model(frmmovil,tt);
                                frmtt.find({idpapa:inspectort._id} ,function(err, todos20) {
                                    if (err){  res.send(err); }
                                 
                           
                                  var todos2=JSON.parse(JSON.stringify(todos20))
                             
                               
                                  var f1 =new Date( planificat.fechainicio);   
                                  var f2 =new Date( planificat.fechafinalizacion);//.toISOString().substr(0,10);   
                                  var visitas = planificat.novisitasdiarias

                                 var fechas=getDaysArray(f1,f2)

                                 console.log('fechass ---' + fechas.length)
                                 console.log('visitas ---' + visitas)
                                 console.log('proyectos ---' + todos2.length)
                                
                             
                                 for(var j = 0; j < fechas.length;j++){ // todas las fechas
                                  for(var k = 0; k < visitas;k++){//no visitas
                                    for(var i = 0; i < todos2.length;i++){ // todos los proyectpos
                                   
                          
                                        var aarr=todos2[i].proyecto.split('¬')
                                        console.log(aarr)
                                            var names='5f81d95fc07d6532900465a4'
                                            var estructura= {
                                              "novisita" :k+1,
                                              "idperiodo" : periodot._id,
                                              "periodo" : periodot.nombre,
                                              "idsupervisor" : supervidort.usuario.split('¬')[1],
                                              "supervisor" : supervidort.usuario.split('¬')[0],
                                              "idinspector" : inspectort.usuario.split('¬')[1],
                                              "inspector" : inspectort.usuario.split('¬')[0],
                                              "idplanifica" : planificat._id,
                                              "idinspector0" : inspectort._id,
                                              "idsupervisor0" : supervidort._id,
                                              "idproyecto0" : todos2[i]._id,
                                              "idproyecto" :  aarr[1].split('°')[0],
                                              "idempresa0" : aarr[2].split('°')[0],
                                              "idcontrato" : aarr[3].split('°')[0],
                                              "fechaasignada" :""+ fechas[j] + "",
                                              "verificapersonal":'',
                                              "verificavehiculos":'',
                                              "verificaherramienta":'',
                                              "comentariopersonal":'',
                                              "geoposicion":'',
                                              "comentariovehiculos":'',
                                              "comentarioherramienta":'',
                                              "proyecto" :todos2[i].proyecto,
                                              "usuarionew" :req.body.bitacora.email,
                                              "usuarioup" : req.body.bitacora.email,
                                              "idpapa" : req.body.idpapa,
                                              "estado" : 'activa',
                                              "idempresa" : req.body.idempresa,
                                              "nombre":  "  <strong>No contrato:</strong> "+aarr[0].split('°')[0].trim().split(':')[1]+ " <br> "+
                                              "<strong>Empresa:</strong>"+aarr[0].split('°')[2].split(':')[1]+ " <br> "+
                                              "<strong>Nit Empresa:</strong>"+aarr[0].split('°')[1].split(':')[2]+ " <br> "+
                                              "<strong>Codigo proyecto:</strong>"+ aarr[1].split('°')[1].split(':')[2] + " <br> "+
                                              "<strong>Nombre proyecto:</strong>"+  aarr[1].split('°')[2].split(':')[1] +" <br> "+
                                              " <strong>Supervisor:</strong> "+ supervidort.usuario.split('¬')[0] +" <br>"+
                                              " <strong>Inspector:</strong> " + inspectort.usuario.split('¬')[0] +" <br>"
                                              
                                          }
                                          
/*
                                          "proyecto" : "nocontrato: a225 , empresa: nit: 848484848 , nombreempresa: empresa3 ,        
                                          5f763d91691ddf2820befd00 , proyecto: codigoproyecto: proyecto 2 , nombreproyecto: proyecto2     
                                          5f80849ff1a48444185b9c3d ,        
                                          5f78b74bf2cc332b6c4b8328",
*/

                                          creafrmregistro(req, res, next,names,req.body.idform,estructura,'noresponde',[],req.body.idpapa,req.body.idtipo)


                                              
                                          }

                                        }
                                      
                                   
                                  
                                }
                                res.json({exito:'ok'});

                            

                                  
                                });
    }
});



      



  
}



    var procesoinicialcrea= async function(req, res, next,dataanterior){
        return new Promise(resolve => {
            switch(req.body.ejecutainicio) {
              
                case '1_actualizainventarioaj': 
                resolve({estado:'Existencia no valida'}); 
                break;
                default:
                  // code block
                  resolve({estado:'exito'}); 
              }
        });
    }

    var procesoinicialact= async function(req, res, next,dataanterior){
        return new Promise(resolve => {
            switch(req.body.ejecutainicio) {
               
                case '1_actualizainventarioaj': 
                resolve({estado:'Existencia no valida'}); 
                break;
                default:
                  // code block
                  resolve({estado:'exito'}); 
              }
        });
    }

    var procesoinicialdel= async function(req, res, next,dataanterior){
        return new Promise(resolve => {
            switch(req.body.ejecutainicio) {
              
                case '1_actualizainventarioaj': 
                resolve({estado:'Existencia no valida'}); 
                break;
                default:
                  // code block
                  resolve({estado:'exito'}); 
              }
        });

    }
        var procesofinalcrea= async function(req, res, next,dataanterior){
          return new Promise(resolve => {
              switch(req.body.ejecuta) {
                
                case 'Crearmultasegunsancion': 
                (async () => {
                var contrato=req.body.estructura.contrato.split('¬')[1]
                var enmienda=req.body.estructura.enmienda.split('¬')[1]
                
                var f1 =new Date( dataanterior.createdAt).toISOString().substr(0,10);   
                                     
                fecha = ''+dataanterior.createdAt + ''
        
                let periodo =f1.split('-');
                let tipo = req.body.estructura.tiposancion.split('°');
        
        
                var idpagot=''
        
                pagos = await dadatosformulario('5f595df92521cd38c8fe3126',{ periodopago: periodo[1] + '-' + periodo[0] ,idempresa:req.body.estructura.idempresa,idpapa:enmienda.trim()},req.body.estructura.idempresa); 
                   
                
                idpagot=pagos[0]._id
            var   options	     = {
                idcat: 'GESTION DE CONTRATOS',
                idform: '5f74c0fff22ed14ea01c1cbe',
                idpapa: idpagot,
                estructura: {
                  // descripcion: Barrido de  vías urbanas AREA TIPO A°monto: 3000°plazoenminutospararesolver: 120°"
                  'tiposancion' : tipo[0] + '°' + tipo[1] + '°', // "descripcion: Barrido de  vías urbanas AREA TIPO A°monto: 3000°       ¬5fa36ac7c4579d2250e8558a",
                  'fechasancion' : dataanterior.createdAt ,
                  'monto' : tipo[2].split(':')[1].trim(),
                  'imposicion' : 'imposición',
                  'observaciones' : 'Multa generada manualmente (sanciones automaticas), ' + req.body.estructura.tiposancion,
                  'estado' : 'Activo',
                  'usuarionew' : req.body.estructura.usuarionew,
                  'usuarioup' : req.body.estructura.usuarionew,
                  'idempresa' : req.body.estructura.idempresa,
                  'idpapa' :  '' + idpagot + '',
          
              },
                tipo: 'detalle',
                tipo2: 'Formulario',
                ejecuta: 'this.ejecuta',
                bitacora: { idempresa : req.body.estructura.idempresa , idafiliado: '' ,
             email: req.body.estructura.usuarionew , permiso : 'Crea', accion: 'Crea en formulario movil'}
               };
        
               
               console.log(options)
               creafrmregistro(req, res, next,'5f74c0fff22ed14ea01c1cbes','5f74c0fff22ed14ea01c1cbe',{
                // descripcion: Barrido de  vías urbanas AREA TIPO A°monto: 3000°plazoenminutospararesolver: 120°"
                'tiposancion' : tipo[0] + '°' + tipo[1] + '°', // "descripcion: Barrido de  vías urbanas AREA TIPO A°monto: 3000°       ¬5fa36ac7c4579d2250e8558a",
                'fechasancion' : dataanterior.createdAt ,
                'monto' : tipo[2].split(':')[1].trim(),
                'imposicion' : 'imposición',
                'observaciones' : 'Multa generada manualmente (sanciones automaticas), ' + req.body.estructura.tiposancion,
                'estado' : 'Activo',
                'usuarionew' : req.body.estructura.usuarionew,
                'usuarioup' : req.body.estructura.usuarionew,
                'idempresa' : req.body.estructura.idempresa,
                'idpapa' :  idpagot,
        
            },'siresponde',dataanterior,idpagot,'Formulario')
                 
            resolve({estado:'exito'}); 
        })();
                  break;
                  default:
                    // code block
                    resolve({estado:'exito'}); 
                }
          });
      }

      var procesofinalact= async function(req, res, next,dataanterior){
          return new Promise(resolve => {
              switch(req.body.ejecuta) {
                 
                  case '1_actualizainventarioaj': 
                  resolve({estado:'Existencia no valida'}); 
                  break;
                  default:
                    // code block
                    resolve({estado:'exito'}); 
                }
          });
      }

      var procesofinaldel= async function(req, res, next,dataanterior){
          return new Promise(resolve => {
              switch(req.body.ejecuta) {
                
                  case '1_actualizainventarioaj': 
                  resolve({estado:'Existencia no valida'}); 
                  break;
                  default:
                    // code block
                    resolve({estado:'exito'}); 
                }
          });
      }
    

//para los formularios ---------------------------------------------------------------------------
//para los formularios ---------------------------------------------------------------------------
//para los formularios ---------------------------------------------------------------------------
//para los formularios ---------------------------------------------------------------------------
        
        var formularioinicialcrea= async function(req, res, next,dataanterior){
          return new Promise(resolve => {
              console.log('ejecuta al inicio crea:' + req.body.ejecutainicio)
             
              switch(req.body.ejecutainicio) {
                
                  case '1_actualizainventarioaj': 

                  (async () => {
                    var ingreso=0
                    var salida=0
                    var saldoactual=0
                    var total=0
                    var existenciaactual=0
                    var cantidadingreso=0
                    var idproducto=req.body.estructura.producto.split('¬')[1]

                   

                    producto = await dadatosformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},req.body.estructura.idempresa,'5fc01bbba8d0a14888774579'); 

              

                
                    if(producto.existenciaactual)
                    {existenciaactual=Number(producto.existenciaactual)}
                    else{existenciaactual=0}

                    if(req.body.estructura.cantidad)
                    {
                        cantidadingreso=Number(req.body.estructura.cantidad)
                    }
                    else
                    {
                        cantidadingreso=0;
                    }


                  if(req.body.estructura.tipoajuste==='Salida')
                  {
                      salida=cantidadingreso
                      saldoactual=existenciaactual-salida
                  }
                  else
                  {
                    ingreso=cantidadingreso
                    saldoactual=existenciaactual+ingreso
                  }

                  total=saldoactual*Number(producto.precioporunidad)
                  kardex.create({
                    idempresa		: req.body.estructura.idempresa,  
                    fecha		: req.body.estructura.fecha,  
                    tipo		: req.body.estructura.tipoajuste,  
                    accion		: 'Ajuste de inventario',  
                    proveedor		: '',  
                    
                    nodockardex		: '',  
                    nodockardexlinea		: '',  
                    tarjetasanuladas: '',
                    estadoprint:'No impreso',
                    anulacion:'',
                    nodoc		: '123',  
                    iddocumento		: '123',  
                    categoria		:producto.categoria,
                    producto		: producto.codigoarticulo,  
                    idproducto:producto._id,
                    producton		: producto.descripciondelarticulo,
                    unidad: producto.unidaddemedida,
                    saldoanterior		: existenciaactual,
                    ingreso		: ingreso,
                    egreso		: salida,
                    saldoactual		: saldoactual,
                    obs:req.body.estructura.observaciones,
                    precioanterior:Number(producto.precioporunidad),
                    precio		: Number(producto.precioporunidad),
                    total		: total,
                  });
                  var estructura={
                    "precioporunidad" : producto.precioporunidad.toString(),
                    "existenciaactual" : saldoactual.toString(),
                    "total" :( saldoactual*Number(producto.precioporunidad)).toString()
                   
                }
                  producto = await actualizaformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},req.body.estructura.idempresa,'5fc01bbba8d0a14888774579',estructura); 
                  resolve({estado:'exito'}); 
               })();


                  
/*
                
                  */
                 
                  break;
                  default:
                    // code block
                    resolve({estado:'exito'}); 
                }
          });
      }

      var formularioinicialact= async function(req, res, next,dataanterior){
          return new Promise(resolve => {
            console.log('ejecuta al inicio actualiza:' + req.body.ejecutainicio)
              switch(req.body.ejecutainicio) {
                 
                  case '1_actualizainventarioaj': 
                  resolve({estado:'Existencia no valida'}); 
                  break;
                  default:
                    // code block
                    resolve({estado:'exito'}); 
                }
          });
      }

      var formularioinicialdel=  function(req, res, next,dataanterior){
          return new Promise(resolve => {
//5f503bededa4710798a79b84°Formulario°1_actualizainventarioaj°'
//req.params.recordID
            var arrtt=req.params.idempresa.split('°')

            console.log('ejecuta al inicio elimina:' + arrtt[2])
              switch(arrtt[2]) {
                
                  case '1_actualizainventarioaj': 
                  resolve({estado:'Existencia no valida'}); 
                  break;
                  default:
                    // code block
                    resolve({estado:'exito'}); 
                }
          });
        }

          var formulariofinalcrea= async function(req, res, next,dataanterior){
              console.log('entrafinalllllllll  crea');
   console.log(req.body)
            return new Promise(resolve => {
                switch(req.body.ejecuta) {
                  case '1_actualizainvrequisicion':
                    (async () => {
                        var ingreso=0
                        var salida=0
                        var saldoactual=0
                        var total=0
                        var existenciaactual=0
                        var precioproducto=0
                        var cantidadingreso=0
                        var idproducto=req.body.estructura.articulo.split('¬')[1]
                        console.log(req.body.estructura)
         
                        producto = await dadatosformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},req.body.estructura.idempresa,'5fc01bbba8d0a14888774579'); 
                        if(producto.descripciondelarticulo==='VIENEN DE LA' || producto.descripciondelarticulo==='ULTIMA LINEA')
                        { resolve({estado:'exito'}); }
                        else
                        {
    
                        
                        if(producto.existenciaactual)
                        {existenciaactual=Number(producto.existenciaactual)}
                        else{existenciaactual=0}
    
                        if(req.body.estructura.cantidaddespachada)
                        {
                            cantidadingreso=Number(req.body.estructura.cantidaddespachada)
                        }
                        else
                        {
                            cantidadingreso=0;
                        }
    
                
                          ingreso=0
                      
                        salida=cantidadingreso
                        saldoactual=existenciaactual-salida
                     
                      total=saldoactual*Number(producto.precioporunidad)
                      precioproducto=Number(producto.precioporunidad)
                      kardex.create({
                        idempresa		: req.body.estructura.idempresa,  
                        fecha		: req.body.papaitem.fecha,  
                        tipo		: 'Salida',  
                        accion		: 'Salida requisición',  
                        
                    nodockardex		: '',  
                    nodockardexlinea		: '',  
                    tarjetasanuladas: '',
                    estadoprint:'No impreso',
                    anulacion:'',
                        proveedor		: req.body.papaitem.departamento,  
                        nodoc		: req.body.papaitem.nodocumento.toString(),  
                        iddocumento		: dataanterior._id.toString(),  
                        categoria		:producto.categoria,
                        producto		: producto.codigoarticulo,  
                        unidad: producto.unidaddemedida,
                        idproducto:producto._id,
                        producton		: producto.descripciondelarticulo,
                        saldoanterior		: existenciaactual,
                        ingreso		: ingreso,
                        obs:'',
                        egreso		: salida,
                        saldoactual		: saldoactual,
                        precioanterior:Number(producto.precioporunidad),
                        precio		: Number(producto.precioporunidad),
                        total		: total,
                      });
                      var estructura={
                        "precioporunidad" : producto.precioporunidad.toString(),
                        "existenciaactual" : saldoactual.toString(),
                        "total" :( saldoactual*Number(producto.precioporunidad)).toString()
                      
                    }
                      producto = await actualizaformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},req.body.estructura.idempresa,'5fc01bbba8d0a14888774579',estructura); 

                      var estructura={
                        "subtotal" : ( Number(  Number(req.body.estructura.cantidaddespachada)*precioproducto).toFixed(2)).toString(),
                     
                    }

                      detalle = await actualizaformularioidfinal('5fc03c79ab0f6448b877eb5c',{ _id:dataanterior._id.toString()},req.body.estructura.idempresa,'5fc03c79ab0f6448b877eb5cs',estructura); 
                      

                      resolve({estado:'exito'}); 
                  }
                   })();
    
    
                  
                   
                 
                    break;
                    case '1_formulario1hpone': 
                    (async () => {
                        var ingreso=0
                        var salida=0
                        var saldoactual=0
                        var total=0
                        var existenciaactual=0
                        var cantidadingreso=0
                        var precioproducto=0
                        var precioingreso=0
                        var preciomedio=0
                        var idproducto=req.body.estructura.articulo.split('¬')[1]
    
                        precioingreso=Number(req.body.estructura.preciounitario)
         
                        producto = await dadatosformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},req.body.estructura.idempresa,'5fc01bbba8d0a14888774579'); 
                        
                        if(producto.descripciondelarticulo==='VIENEN DE LA' || producto.descripciondelarticulo==='ULTIMA LINEA')
                        { resolve({estado:'exito'}); }
                        else
                        {
    
                        

                        if(producto.existenciaactual)
                        {existenciaactual=Number(producto.existenciaactual)}
                        
                        else{existenciaactual=0}
    
                        if(req.body.estructura.cantidad)
                        {
                            cantidadingreso=Number(req.body.estructura.cantidad)
                        }
                        else
                        {
                            cantidadingreso=0;
                        }
    
                
                          salida=0
                      
                        ingreso=cantidadingreso
                        saldoactual=existenciaactual+ingreso
                        preciomedio=(precioingreso+Number(producto.precioporunidad))/2

                        precioproducto=Number(producto.precioporunidad)
    
                      total=saldoactual*Number(precioingreso)
                      kardex.create({
                        idempresa		: req.body.estructura.idempresa,  
                        fecha		: req.body.papaitem.fecha,  
                        tipo		: 'Entrada',  
                        accion		: 'Ingreso formulario 1-H',  
                        proveedor		: req.body.papaitem.proveedor,  
                        nodoc		: req.body.papaitem.codigo.toString(),  
                        iddocumento		: dataanterior._id.toString(),  
                        categoria		:producto.categoria,
                        
                    nodockardex		: '',  
                    nodockardexlinea		: '',  
                    tarjetasanuladas: '',
                    estadoprint:'No impreso',
                    anulacion:'',
                        producto		: producto.codigoarticulo,  
                        idproducto:producto._id,
                        producton		: producto.descripciondelarticulo,
                        unidad: producto.unidaddemedida,
                        saldoanterior		: existenciaactual,
                        ingreso		: ingreso,
                        obs:'',
                        egreso		: salida,
                        saldoactual		: saldoactual,
                        precioanterior:producto.precioporunidad,
                        precio		: precioingreso,//preciomedio,
                        total		: total,
                      });
                      var estructura={
                        "precioporunidad" : producto.precioporunidad.toString(),// preciomedio.toString(),
                        "existenciaactual" : saldoactual.toString(),
                        "total" :( saldoactual*Number(producto.precioporunidad)).toString()

                      
                    }
                      producto = await actualizaformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},req.body.estructura.idempresa,'5fc01bbba8d0a14888774579',estructura); 
                      var estructura={
                        "subtotal" : ( Number(  Number(req.body.estructura.cantidad)*precioproducto).toFixed(2)).toString(),
                     
                    }

                      detalle = await actualizaformularioidfinal('5fc0308c2fc3552d10147947',{ _id:dataanterior._id.toString()},req.body.estructura.idempresa,'5fc0308c2fc3552d10147947',estructura); 
                      resolve({estado:'exito'}); 
                  }
                   })();
    
    
                  
                   
                 
                    break;
                    default:
                      // code block
                      resolve({estado:'exito'}); 
                  }
            });
        }
  
        var formulariofinalact= async function(req, res, next,dataanterior){
            return new Promise(resolve => {
                switch(req.body.ejecuta) {
                   
                    case '1_actualizainventarioaj': 
                    resolve({estado:'Existencia no valida'}); 
                    break;
                    default:
                      // code block
                      resolve({estado:'exito'}); 
                  }
            });
        }
  
        var formulariofinaldel= async function(req, res, next,dataanterior){
            return new Promise(resolve => {
                switch(req.body.ejecuta) {
                    case '1_actualizainvrequisicion':
                        (async () => {
                            var ingreso=0
                            var salida=0
                            var saldoactual=0
                            var total=0
                            var existenciaactual=0
                            var cantidadingreso=0
                            var idproducto=req.body.estructura.articulo.split('¬')[1]
        
             
                            producto = await dadatosformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},req.body.estructura.idempresa,'5fc01bbba8d0a14888774579'); 
                        
                            if(producto.existenciaactual)
                            {existenciaactual=Number(producto.existenciaactual)}
                            else{existenciaactual=0}
        
                            if(req.body.estructura.cantidaddespachada)
                            {
                                cantidadingreso=Number(req.body.estructura.cantidaddespachada)
                            }
                            else
                            {
                                cantidadingreso=0;
                            }
        
                    
                              salida=0
                          
                            ingreso=cantidadingreso
                            saldoactual=existenciaactual+ingreso

                        
                          total=saldoactual*Number(producto.precioporunidad)
                          kardex.create({
                            idempresa		: req.body.estructura.idempresa,  
                            fecha		: req.body.papaitem.fecha,  
                            tipo		: 'Entrada',  
                            accion		: 'Elimina Salida requisición',  
                            proveedor		: req.body.papaitem.departamento,  
                            nodoc		: req.body.papaitem.nodocumento.toString(),  
                            iddocumento		: req.body.estructura._id.toString(),  
                            categoria		:producto.categoria,
                            producto		: producto.codigoarticulo,  
                            unidad: producto.unidaddemedida,
                            
                    nodockardex		: '',  
                    nodockardexlinea		: '',  
                    tarjetasanuladas: '',
                    estadoprint:'No impreso',
                    anulacion:'',
                            idproducto:producto._id,
                            producton		: producto.descripciondelarticulo,
                            saldoanterior		: existenciaactual,
                            ingreso		: ingreso,
                            obs:'',
                            egreso		: salida,
                            saldoactual		: saldoactual,
                            precioanterior:Number(producto.precioporunidad),
                            precio		: Number(producto.precioporunidad),
                            total		: total,
                          });
                          var estructura={
                            "precioporunidad" : producto.precioporunidad.toString(),
                            "existenciaactual" : saldoactual.toString(),
                            "total" :( saldoactual*Number(producto.precioporunidad)).toString()
                          
                        }
                          producto = await actualizaformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},req.body.estructura.idempresa,'5fc01bbba8d0a14888774579',estructura); 
                          resolve({estado:'exito'}); 
                       })();
        
        
                      
                       
                     
                        break;
                        case '1_formulario1hpone': 
                        (async () => {
                            var ingreso=0
                            var salida=0
                            var saldoactual=0
                            var total=0
                            var existenciaactual=0
                            var cantidadingreso=0
                            var idproducto=req.body.estructura.articulo.split('¬')[1]
        
             
                            producto = await dadatosformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},req.body.estructura.idempresa,'5fc01bbba8d0a14888774579'); 
                        
                            if(producto.existenciaactual)
                            {existenciaactual=Number(producto.existenciaactual)}
                            else{existenciaactual=0}
        
                            if(req.body.estructura.cantidad)
                            {
                                cantidadingreso=Number(req.body.estructura.cantidad)
                            }
                            else
                            {
                                cantidadingreso=0;
                            }
        
                    
                              entrada=0
                          
                            salida=cantidadingreso
                            saldoactual=existenciaactual-salida
                          
        
                          total=saldoactual*Number(producto.precioporunidad)
                          kardex.create({
                            idempresa		: req.body.estructura.idempresa,  
                            fecha		: req.body.papaitem.fecha,  
                            tipo		: 'Salida',  
                            accion		: 'Elimina Ingreso formulario 1-H',  
                            proveedor		: req.body.papaitem.proveedor,  
                            nodoc		: req.body.papaitem.codigo.toString(),  
                            iddocumento		: req.body.estructura._id.toString(),  
                            categoria		:producto.categoria,
                            producto		: producto.codigoarticulo,  
                            
                    nodockardex		: '',  
                    nodockardexlinea		: '',  
                    tarjetasanuladas: '',
                    estadoprint:'No impreso',
                    anulacion:'',
                            idproducto:producto._id,
                            producton		: producto.descripciondelarticulo,
                            saldoanterior		: existenciaactual,
                            unidad: producto.unidaddemedida,
                            ingreso		: ingreso,
                            obs:'',
                            egreso		: salida,
                            saldoactual		: saldoactual,
                            precioanterior:Number(producto.precioporunidad),
                            precio		: Number(producto.precioporunidad),
                            total		: total,
                          });
                          var estructura={
                            "precioporunidad" : producto.precioporunidad.toString(),
                            "existenciaactual" : saldoactual.toString(),
                            "total" :( saldoactual*Number(producto.precioporunidad)).toString()
                          
                        }
                          producto = await actualizaformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},req.body.estructura.idempresa,'5fc01bbba8d0a14888774579',estructura); 
                          resolve({estado:'exito'}); 
                       })();
        
        
                      
                       
                     
                        break;
                        default:
                          // code block
                          resolve({estado:'exito'}); 
                  
                  }
            });
        }
      
        var formularioanula= async function(req, res, next,dataanterior){
            console.log(req.body)
            return new Promise(resolve => {
                switch(req.body.idformulario) {//REQUISICION
                    case '5ff67ee82977bb360c526f8a':
                        (async () => {

                            
                            detalle = await dadatosformulario('5fc03c79ab0f6448b877eb5c',{ idpapa:req.body.idform},req.body.idempresa); 
                            (async () => {
                            for(var i = 0; i < detalle.length;i++){

                            //    (async () => {
                            var ingreso=0
                            var salida=0
                            var saldoactual=0
                            var total=0
                            var existenciaactual=0
                            var cantidadingreso=0
                            var idproducto=detalle[i].articulo.split('¬')[1]
        
             
                            producto = await dadatosformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},detalle[i].idempresa,'5fc01bbba8d0a14888774579'); 
                        
                            if(producto.existenciaactual)
                            {existenciaactual=Number(producto.existenciaactual)}
                            else{existenciaactual=0}
        
                            if(detalle[i].cantidaddespachada)
                            {
                                cantidadingreso=Number(detalle[i].cantidaddespachada)
                            }
                            else
                            {
                                cantidadingreso=0;
                            }
        
                    
                              salida=0
                          
                            ingreso=cantidadingreso
                            saldoactual=existenciaactual+ingreso

                        
                          total=saldoactual*Number(producto.precioporunidad)
                          kardex.create({
                            idempresa		: detalle[i].idempresa,  
                            fecha		: req.body.papaitem.fecha,  
                            tipo		: 'Entrada',  
                            accion		: 'Anula Salida requisición',  
                            proveedor		: req.body.papaitem.departamento,  
                            nodoc		: req.body.papaitem.nodocumento.toString(),  
                            iddocumento		: detalle[i]._id.toString(),  
                            categoria		:producto.categoria,
                            producto		: producto.codigoarticulo,  
                                    
                            nodockardex		: '',  
                            nodockardexlinea		: '',  
                            tarjetasanuladas: '',
                            estadoprint:'No impreso',
                            anulacion:'',
                            idproducto:producto._id,
                            producton		: producto.descripciondelarticulo,
                            unidad: producto.unidaddemedida,
                            saldoanterior		: existenciaactual,
                            ingreso		: ingreso,
                            obs:'',
                            egreso		: salida,
                            saldoactual		: saldoactual,
                            precioanterior:Number(producto.precioporunidad),
                            precio		: Number(producto.precioporunidad),
                            total		: total,
                          });
                          var estructura={
                            "precioporunidad" : producto.precioporunidad.toString(),
                            "existenciaactual" : saldoactual.toString(),
                            "total" :( saldoactual*Number(producto.precioporunidad)).toString()
                          
                        }
                          producto = await actualizaformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},detalle[i].idempresa,'5fc01bbba8d0a14888774579',estructura); 
                    //})();

                    }
                })();
                          resolve({estado:'exito'}); 
                       })();
        
        
                      
                       
                     
                        break;//H-1
                        case '5fc02f572fc3552d1014792f': 
                        (async () => {

                            detalle = await dadatosformulario('5fc0308c2fc3552d10147947',{ idpapa:req.body.idform},req.body.idempresa); 
                            (async () => {
                            for(var i = 0; i < detalle.length;i++){

                            var ingreso=0
                            var salida=0
                            var saldoactual=0
                            var total=0
                            var existenciaactual=0
                            var cantidadingreso=0
                            var idproducto=detalle[i].articulo.split('¬')[1]
        
             
                            producto = await dadatosformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},detalle[i].idempresa,'5fc01bbba8d0a14888774579'); 
                        
                            if(producto.existenciaactual)
                            {existenciaactual=Number(producto.existenciaactual)}
                            else{existenciaactual=0}
        
                            if(detalle[i].cantidad)
                            {
                                cantidadingreso=Number(detalle[i].cantidad)
                            }
                            else
                            {
                                cantidadingreso=0;
                            }
        
                    
                              entrada=0
                          
                            salida=cantidadingreso
                            saldoactual=existenciaactual-salida
                          
        
                          total=saldoactual*Number(producto.precioporunidad)
                          kardex.create({
                            idempresa		: detalle[i].idempresa,  
                            fecha		: req.body.papaitem.fecha,  
                            tipo		: 'Salida',  
                            accion		: 'Anula Ingreso formulario 1-H',  
                            proveedor		: req.body.papaitem.proveedor,  
                            nodoc		: req.body.papaitem.codigo.toString(),  
                            iddocumento		: detalle[i]._id.toString(),  
                            categoria		:producto.categoria,
                            producto		: producto.codigoarticulo,  
                            unidad: producto.unidaddemedida,
                            
                    nodockardex		: '',  
                    nodockardexlinea		: '',  
                    tarjetasanuladas: '',
                    estadoprint:'No impreso',
                    anulacion:'',
                            idproducto:producto._id,
                            producton		: producto.descripciondelarticulo,
                            saldoanterior		: existenciaactual,
                            ingreso		: ingreso,
                            obs:'',
                            egreso		: salida,
                            saldoactual		: saldoactual,
                            precioanterior:Number(producto.precioporunidad),
                            precio		: Number(producto.precioporunidad),
                            total		: total,
                          });
                          var estructura={
                            "precioporunidad" : producto.precioporunidad.toString(),
                            "existenciaactual" : saldoactual.toString(),
                            "total" :( saldoactual*Number(producto.precioporunidad)).toString()
                          
                        }
                          producto = await actualizaformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},detalle[i].idempresa,'5fc01bbba8d0a14888774579',estructura); 
                        }
                    })();
                          resolve({estado:'exito'}); 
                       })();
        
        
                      
                       
                     
                        break;
                        default:
                          // code block
                          resolve({estado:'exito'}); 
                  
                  }
            });
        }
module.exports = {
    visitas_programadas: visitas_programadas,
 
  

    procesoinicialcrea: procesoinicialcrea,
    procesoinicialact: procesoinicialact,
    procesoinicialdel: procesoinicialdel,


    procesofinalcrea: procesofinalcrea,
    procesofinalact: procesofinalact,
    procesofinaldel: procesofinaldel,



    formularioinicialcrea: formularioinicialcrea,
    formularioinicialact: formularioinicialact,
    formularioinicialdel: formularioinicialdel,


    formulariofinalcrea: formulariofinalcrea,
    formulariofinalact: formulariofinalact,
    formulariofinaldel: formulariofinaldel,
    formularioanula: formularioanula
      }
