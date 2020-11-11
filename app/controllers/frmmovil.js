
var Frmmovil = require('../models/frmmovil');
var Frmmovild = require('../models/frmmovild');
var Bitacora = require('../models/bitacora');
var Catusuario = require('../models/catusuario');
var Formcat2 = require('../models/frmcat2');
var Image = require('../models/image2');
var formulariousrd = require('../models/formulariousrd');
var formulariousr = require('../models/formulariousr');
var frmejecuta= require('../controllers/frmmovilejecuta');
var functool = require('../controllers/funcionesnode');

var formulariotrayectoria = require('../models/asociadoventa/formulariotrayectoria');
var formulariocomentarios = require('../models/asociadoventa/formulariocomentarios');
var formulariofotos = require('../models/asociadoventa/formulariofotos');
var formulariofotos2 = require('../models/asociadoventa/formulariofotos2');
var formulariotareas = require('../models/asociadoventa/formulariotareas');

var frmactividad = require('../models/asociadoventa/frmactividad');
var frmacciones = require('../models/asociadoventa/frmacciones');
var frmactor = require('../models/asociadoventa/frmactor');
var frmactorgrupo = require('../models/asociadoventa/frmactorgrupo');
const frmmovil = require('../models/frmmovil');



                            
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
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


  function objectFindByKey(array, key, value) {
    return array[0][0];
  //  return this.array(function(x) { return x[key] })

}


  
  // Convert javascript object to json string.
  function objectToString(jsObject) {
  
      var jsonString = JSON.stringify(jsObject);
  
   
      return jsonString;
  }
  
 
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

function  existeregistrosfrom(idformulario,todos,cadxx,idpapa)
{
 
    var namess=idformulario


                  
                           
                                var cad100=''
                                var cadxx=''
                                var cad3=(dafiltrocad(todos,'','')).split('°')
                                cad100=cad3[0]

                                if(idpapa)
                                {
                                 cad100=cad100 + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idpapa"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                }
                                else
                                {
                                 cad100=cad100 + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" }'
                                }
                               
                                
                               
                               cad100='{' + cad100 + '}'
                  


                        
                                var jsonObject = stringToObject(cad100);
                                var mongoose = require("mongoose");
                               
                                var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                               
                                try {
                                    var  frmtt= mongoose.model(namess,tt);
                                    console.log('entraaaaaaaaaaaaa1')
                                  
                                    
                                    frmtt.find({"contrato":"descripcion: descripción del contrato , nocontrato: a1 ,        °5f7648b37e8d091240017cc3"} ,function(err, todos2) {
                                        if (err){  res.send(err);  }
                                
                                        if(todos2.length>0)
                                        {
                                           
                                            
                                         
                                        }
                                        else
                                        {
                                            
                                           
                                        }
                                      
                                      
                                    });
                                  } catch(e) {
                                     
                                    var  frmtt= mongoose.model(namess);
                                   
                                    frmtt.find({"contrato":"descripcion: descripción del contrato , nocontrato: a1 ,        °5f7648b37e8d091240017cc3"},function(err, todos2) {
                                         if (err){  res.send(err);  }
                                      
                                         if(todos2.length>0)
                                         {
                                            return 'si'
                                            console.log('si')
                                           
                                          } else
                                            {
                                                return 'no'
                                                console.log('no')
                                            }
                                     
                                     });
                                  }


                             
       
        
    
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

var objectToArray = function(obj) {
    var _arr = [];

    for (var key in obj) {
        _arr.push([key, obj[key]]);
    }
    return _arr;
}
 
exports.getFrmmovil = function(req, res, next){
    if(req.params.id5)
    {
        
        if(req.params.id4=='frmmovilp')
        {


            if(req.params.id2=='todos')
            { 
                Frmmovil.find({idempresa:req.params.id3,tipo:req.params.id,categoria:req.params.id5}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                  
                     res.json(todos);
                 });
            }
            else
            {  
                Frmmovil.find({idempresa:req.params.id3,estado:req.params.id2,tipo:req.params.id,categoria:req.params.id5}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                  
                     res.json(todos);
                 });

            }
          

        }

    }
    else
    {    
    if(req.params.id4)
    {
        if(req.params.id4=='formulariosolopapafiltro')
        {

     
            var namess=req.params.id
            var campost=req.params.id2
          
            var myDatavector = campost.split(',');
            var arremp=req.params.id3.split('¬')
//,_id:{$in: myData}

            Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:arremp[0]}).sort([['order', 1]]).exec(function(err, todos) {
                if (err){ res.send(err); }
              
         //   console.log(todos)
                                    if(todos.length>0)   {  
                                   
                                        var cad=''
                                        var cadxx=''
                                        var cad3=(dafiltrocad(todos,'','')).split('°')
                                        var filtro=''
                                  
                                        filtro='{' + arremp[1] + '}'
                                        cad=cad3[0]
                                        cadxx='{'+ cad3[1] + '}'
                                        cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                        cad='{' + cad + '}'
                                        cadxx='{' + cadxx + '}'

                                   //  console.log(cad)
                                        var jsonObject = stringToObject(cad);
                                      
                                        var mongoose = require("mongoose");
                                        delete mongoose.connection.models[namess];
                                        var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                      //  console.log(tt)
                                     
                                        try {
                                            var  frmtt= mongoose.model(namess,tt);
                                            frmtt.find(JSON.parse(filtro) ,function(err, todos2) {
                                                if (err){  res.send(err); }
                                            

                                              var myData = [];
                                              for(var i = 0; i < todos2.length;i++){
                                                var nombret ='';
                                                for(var j = 0; j < myDatavector.length;j++){

                                                  
                                                    nombret = nombret + myDatavector[j] + ': ' +  todos2[i][myDatavector[j]]  + '°'
                                                }
                                                myData.push({_id:todos2[i]._id , nombre: nombret })

                                                 
                                              }
                                              
                                                res.json(myData);
                                              
                                            });
                                          } catch(e) {
                                            
                                            var  frmtt= mongoose.model(namess);
                                  
                                            frmtt.find( JSON.parse(filtro) ,function(err, todos2) {
                                                 if (err){  res.send(err);
                                                }
                                           
                                              
                                               var myData = [];
                                               for(var i = 0; i < todos2.length;i++){
                                                 var nombret ='';
                                                 for(var j = 0; j < myDatavector.length;j++){
                                                     nombret = nombret + myDatavector[j] + ': ' +  todos2[i][myDatavector[j]].trim()  + '°'
                                                 }
                                                 myData.push({_id:todos2[i]._id , nombre: nombret })
 
                                                  
                                               }
                                                 res.json(myData);
                                             
                                             });
                                          }
    
    
                                     
                        
                }
            });
    
            



        }
        else
        {
        if(req.params.id4=='formulariosolopapa')
        {

            var namess=req.params.id


            Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:req.params.id3}).sort([['order', 1]]).exec(function(err, todos) {
                if (err){ res.send(err); }

                                    if(todos.length>0)   {  
                                   
                                        var cad=''
                                        var cadxx=''
                                        var cad3=(dafiltrocad(todos,'','')).split('°')
                                        var filtro=''
                                  
                                        filtro='{' +req.params.id2+ '}'
                                        cad=cad3[0]
                                        cadxx='{'+ cad3[1] + '}'
                                        cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                        cad='{' + cad + '}'
                                        cadxx='{' + cadxx + '}'
                                     console.log(namess)   
                                     console.log(filtro)
                                        var jsonObject = stringToObject(cad);
                                      
                                        var mongoose = require("mongoose");
                                        delete mongoose.connection.models[namess];
                                        var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                      //  console.log(tt)
                                     
                                        try {
                                            var  frmtt= mongoose.model(namess,tt);
                                            frmtt.find(JSON.parse(filtro) ,function(err, todos2) {
                                                if (err){  res.send(err); }
                                             

                                                res.json(todos2);
                                              
                                            });
                                          } catch(e) {
                                            
                                            var  frmtt= mongoose.model(namess);
                                  
                                            frmtt.find( JSON.parse(filtro) ,function(err, todos2) {
                                                 if (err){  res.send(err);
                                                }
                                           
                                              
                                           
                                                 res.json(todos2);
                                             
                                             });
                                          }
    
    
                                     
                        
                }
            });
    
            


        }
        else
        {
        if(req.params.id4=='formulariocombofiltro')
        {

            var namess=req.params.id
            var campost=req.params.id2
          
            var myDatavector = campost.split(',');

        
            var arremp=req.params.id3.split('°')
            console.log(arremp)
//,_id:{$in: myData}


            Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:arremp[0]}).sort([['order', 1]]).exec(function(err, todos) {
                if (err){ res.send(err); }
              
     
                                    if(todos.length>0)   {  
                                       
                                        var cad=''
                                        var cadxx=''
                                        var cad3=(dafiltrocad(todos,'','')).split('°')
                                        var filtro=''
                                  if(arremp[2] ===undefined && arremp[3]===undefined )
                                  {
                                    filtro='{' + arremp[1] +'}'
                                  }
                                  else
                                  {
                                    filtro='{' + arremp[1] + '°' + arremp[2] + '°' + arremp[3] + '}'
                                  }
                                       
                                   
                                        cad=cad3[0]
                                        cadxx='{'+ cad3[1] + '}'
                                        cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                        cad='{' + cad + '}'
                                        cadxx='{' + cadxx + '}'

                                   
                                        var jsonObject = stringToObject(cad);
                                      
                                        var mongoose = require("mongoose");
                                        delete mongoose.connection.models[namess];
                                        var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                      //  console.log(tt)
                                     
                                        try {
                                            var  frmtt= mongoose.model(namess,tt);
                                            console.log('formulario:'+namess)
                                            console.log(filtro)
                                            frmtt.find(JSON.parse(filtro) ,function(err, todos2) {
                                                if (err){  res.send(err); }
                                             

                                              var myData = [];
                                              for(var i = 0; i < todos2.length;i++){
                                                var nombret ='';
                                                for(var j = 0; j < myDatavector.length;j++){
                                                    nombret = nombret + myDatavector[j] + ': ' +  todos2[i][myDatavector[j]]  + '°'
                                                }
                                                myData.push({_id:todos2[i]._id , nombre: nombret })

                                                 
                                              }
                                                res.json(myData);
                                              
                                            });
                                          } catch(e) {
                                            
                                            var  frmtt= mongoose.model(namess);
                                  
                                            frmtt.find( JSON.parse(filtro) ,function(err, todos2) {
                                                 if (err){  res.send(err);
                                                }
                                           
                                              
                                               var myData = [];
                                               for(var i = 0; i < todos2.length;i++){
                                                 var nombret ='';
                                                 for(var j = 0; j < myDatavector.length;j++){
                                                     nombret = nombret + myDatavector[j] + ': ' +  todos2[i][myDatavector[j]]  + ' , '
                                                 }
                                                 myData.push({_id:todos2[i]._id , nombre: nombret })
 
                                                  
                                               }
                                                 res.json(myData);
                                             
                                             });
                                          }
    
    
                                     
                        
                }
            });
    
            


        }
        else
        {
            if(req.params.id4=='arrayregistromovil')
            {


               
                var namess=req.params.id
                var idbuscar=req.params.id2.trim().replace(/\s/g,'').split(';')
                var arratodo = [];
                for(var i = 0; i < idbuscar.length;i++){
                    var uno=idbuscar[i].split('°')[0]
                    arratodo.push(uno)
                }
                console.log(req.params)
                console.log(arratodo)
 
              
           

                req.params.id3.split('°')

                if( req.params.id3.indexOf('°')<=0){
                    res.json([]);
                    return;

                }
                var arrt=req.params.id3.split('°')

                if(arrt.length===0){
                    res.json([]);
                    return;

                }

                arratodo = arratodo.filter(function(e){return e});
            
                var mongoose = require("mongoose");
                let objectIdArray = arratodo.map(s => mongoose.Types.ObjectId(s));
              
    
                Frmmovild.find({idmovil:arrt[1], display : "true",idempresa:arrt[0]}).sort([['order', 1]]).exec(function(err, todos) {
                    if (err){ res.send(err); }
                 
               
                                        if(todos.length>0)   {  
                                       
                                            var cad=''
                                            var cadxx=''
                                            var cad3=(dafiltrocad(todos,'','')).split('°')
                                      
                                            cad=cad3[0]
                                          
                                            cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                            cad='{' + cad + '}'
                                           
                                       
                                            var jsonObject = stringToObject(cad);
                                          
                                            var mongoose = require("mongoose");
                                            delete mongoose.connection.models[namess];
                                            var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                         //   console.log(tt)
                                          //  console.log(namess)
                                        
                                            try {
                                                var  frmtt= mongoose.model(namess,tt);
                                                
                                              console.log({_id:{$in :objectIdArray},idempresa:arrt[0]} )
                                                frmtt.find({_id:{$in :objectIdArray},idempresa:arrt[0]} ,function(err, todos2) {
                                                    if (err){  res.send(err); }
                                                   
    
                                                    res.json(todos2);
                                                  
                                                });
                                              } catch(e) {
                                                
                                                var  frmtt= mongoose.model(namess);
                                      
                                                frmtt.find( {_id:{$in :objectIdArray},idempresa:arrt[0]} ,function(err, todos2) {
                                                     if (err){  res.send(err);
                                                    }
                                             
                                                  
                                                    res.json(todos2);
                                                 
                                                 });
                                              }
        
        
                                         
                            
                    }
                });
        
                
    
    
            }
            else
            {
            if(req.params.id4=='unregistromovil')
            {
    
                var namess=req.params.id
                var idbuscar=req.params.id2
                var arrt=req.params.id3.split('°')
console.log('unnnnnnnnn registro')
    
                Frmmovild.find({idmovil:arrt[1], display : "true",idempresa:arrt[0]}).sort([['order', 1]]).exec(function(err, todos) {
                    if (err){ res.send(err); }
                  
             
                                        if(todos.length>0)   {  
                                       
                                            var cad=''
                                            var cadxx=''
                                            var cad3=(dafiltrocad(todos,'','')).split('°')
                                      
                                            cad=cad3[0]
                                          
                                            cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                            cad='{' + cad + '}'
                                           
                                     
                                            var jsonObject = stringToObject(cad);
                                          
                                            var mongoose = require("mongoose");
                                            delete mongoose.connection.models[namess];
                                            var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                         //   console.log(tt)
                                          //  console.log(namess)
                                        
                                            try {
                                                console.log(namess)
                                                console.log({_id:idbuscar})
                                                var  frmtt= mongoose.model(namess,tt);
                                                frmtt.findById({_id:idbuscar} ,function(err, todos2) {
                                                    if (err){  res.send(err); }
                                                   
    
                                                    res.json(todos2);
                                                  
                                                });
                                              } catch(e) {
                                                
                                                var  frmtt= mongoose.model(namess);
                                      
                                                frmtt.findById( {_id:idbuscar} ,function(err, todos2) {
                                                     if (err){  res.send(err);
                                                    }
                                             
                                                  
                                                    res.json(todos2);
                                                 
                                                 });
                                              }
        
        
                                         
                            
                    }
                });
        
                
    
    
            }
            else
            {
        if(req.params.id4=='formulariocombo')
        {

            console.log(req.params)
            var namess=req.params.id
            var campost=req.params.id2
          
            var myDatavector = campost.split(',');
//,_id:{$in: myData}

            Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:req.params.id3}).sort([['order', 1]]).exec(function(err, todos) {
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
                                        delete mongoose.connection.models[namess];
                                        var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                      //  console.log(tt)
                                        console.log(namess)
                                    
                                        try {
                                            var  frmtt= mongoose.model(namess,tt);
                                            frmtt.find({} ,function(err, todos2) {
                                                if (err){  res.send(err); }
                                               

                                              var myData = [];
                                              for(var i = 0; i < todos2.length;i++){
                                                var nombret ='';
                                                for(var j = 0; j < myDatavector.length;j++){
                                                    nombret = nombret + myDatavector[j] + ': ' +  todos2[i][myDatavector[j]]  + '°'
                                                }
                                                myData.push({_id:todos2[i]._id , nombre: nombret })

                                                 
                                              }
                                                res.json(myData);
                                              
                                            });
                                          } catch(e) {
                                            
                                            var  frmtt= mongoose.model(namess);
                                  
                                            frmtt.find( {} ,function(err, todos2) {
                                                 if (err){  res.send(err);
                                                }
                                         
                                              
                                               var myData = [];
                                               for(var i = 0; i < todos2.length;i++){
                                                 var nombret ='';
                                                 for(var j = 0; j < myDatavector.length;j++){
                                                     nombret = nombret + myDatavector[j] + ': ' +  todos2[i][myDatavector[j]]  + ' ° '
                                                 }
                                                 myData.push({_id:todos2[i]._id , nombre: nombret })
 
                                                  
                                               }
                                                 res.json(myData);
                                             
                                             });
                                          }
    
    
                                     
                        
                }
            });
    
            


        }
        else
        {
        if(req.params.id4=='frmmovilp')
        {


            if(req.params.id2=='todos')
            { 
                Frmmovil.find({idempresa:req.params.id3,tipo:req.params.id}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                  
                     res.json(todos);
                 });
            }
            else
            {  
                Frmmovil.find({idempresa:req.params.id3,estado:req.params.id2,tipo:req.params.id}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                  
                     res.json(todos);
                 });

            }
          

        }
        else
        {
        if(req.params.id4=='categoriausradmin')
        {



            var arr=(req.params.id3).split('°')


            if(arr[1]=='todos')
            {  frmmovil.find({idempresa:arr[0], tipo:arr[2],publico:'Si'}).
            exec(function(err, todosa) {
                if (err){  res.send(err);  }
                formulariousr.find({idempresa:arr[0],idusuario:req.params.id2})
                .exec(function(err, todosb) {
                              if (err){  res.send(err);  }


                              if(todosb.length<=0)
                              {
                                if(todosa.length<=0)
                                {
                                    res.json(todosb);

                                }
                                else
                                {
                                    var myData = [];
                                    for(var i = 0; i < todosa.length;i++){
                                        if(todosa[i].categoria==req.params.id)
                                        {
                                            myData.push({_id:todosa[i]._id,categoria:todosa[i].categoria,nombre:todosa[i].nombre,foto:todosa[i].foto,estado:todosa[i].estado ,verregistros:todosa[i].verregistros,geoposicion:todosa[i].geoposicion ,tipo2:todosa[i].tipo2,ejecuta:todosa[i].ejecuta  ,tipo:todosa[i].tipo,publico:todosa[i].publico});
                                        }
                                        
                                    }
                        
                                    var unique =   myData.filter( onlyUnique );
                                  
                                    var myData2 = [];
                                                  for(var i = 0; i < unique.length;i++){
                                                     myData2.push({_id:unique[i]._id,tipo:unique[i].tipo,ejecuta:unique[i].ejecuta,tipo2:unique[i].tipo2,geoposicion:unique[i].geoposicion ,categoria:unique[i].categoria,nombre:unique[i].nombre,foto:unique[i].foto,estado:unique[i].estado ,verregistros:unique[i].verregistros,permisos:{pactualizacion:'true',  pconsulta:'true', pcreacion:'true', peliminacion:'true',  pfiltro:'true', pingreso:'true', reporte:'true',  potros1:'',
                                                     imprimeorden	:'true',  finalizaorden :'false',  eliminaorden  :'false',  trayectoriaorden:'true',  documentacionorden:'true',  pausarorden  :'false',  anularorden  :'false',  fotosorden:'true', comentariosorden:'true',  documentosorden :'true',  tareasorden  :'false',acciones:'true',publico:unique[i].publico}});
                                                 }

                                                 

                               

                                                  res.json(myData2);



                                }  
                               
                              }
                              else
                              {
                                  
                formulariousrd.find({idpapa:todosb[0]._id,idempresa:arr[0], tipo:arr[2]}).
                populate('idpapa').populate('idformulario').exec(function(err, todos) {
                     if (err){  res.send(err);  }

                  
                   
                     var myData = [];
                    
                     for(var i = 0; i < todos.length;i++){
                     
                         if(todos[i].idformulario.categoria==req.params.id)
                         {
                             myData.push({_id:todos[i].idformulario._id,categoria:todos[i].idformulario.categoria,nombre:todos[i].idformulario.nombre,foto:todos[i].idformulario.foto,estado:todos[i].idformulario.estado ,verregistros:todos[i].verregistros,geoposicion:todos[i].idformulario.geoposicion ,tipo2:todos[i].idformulario.tipo2,ejecuta:todos[i].idformulario.ejecuta  ,tipo:todos[i].idformulario.tipo,
                                 pactualizacion:todos[i].actualizacion,  pconsulta:todos[i].consulta, pcreacion:todos[i].creacion, peliminacion:todos[i].eliminacion,  pfiltro:todos[i].filtro, pingreso:'true', reporte:todos[i].preporte,  potros1:'', imprimeorden	:todos[i].imprimeorden,  finalizaorden :todos[i].finalizaorden,  eliminaorden  :todos[i].eliminaorden,  trayectoriaorden:todos[i].trayectoriaorden,  documentacionorden:todos[i].documentacionorden,  pausarorden  :todos[i].pausarorden,  anularorden  :todos[i].anularorden,  fotosorden:todos[i].fotosorden, comentariosorden:todos[i].comentariosorden,  documentosorden :todos[i].documentosorden,  tareasorden  :todos[i].tareasorden,acciones:todos[i].acciones,publico:todos[i].idformulario.publico});
                         }
                         
                     }
                    
        
                     for(var i = 0; i < todosa.length;i++){
                         if(todosa[i].categoria==req.params.id)
                         {
                             var encuentra=0;
                             for(var ii = 0; ii < myData.length;ii++){
                             
                                 if(String(myData[ii]._id)===String(todosa[i]._id))
                                 {
                                     encuentra=1;
                                     break;
                                 }
                             }
                             if(encuentra==0)
                             {
                             myData.push({_id:todosa[i]._id,categoria:todosa[i].categoria,nombre:todosa[i].nombre,foto:todosa[i].foto,estado:todosa[i].estado ,verregistros:todosa[i].verregistros,geoposicion:todosa[i].geoposicion ,tipo2:todosa[i].tipo2,ejecuta:todosa[i].ejecuta  ,tipo:todosa[i].tipo,
                                 pactualizacion:'true',  pconsulta:'true', pcreacion:'true', peliminacion:'true',  pfiltro:'true', pingreso:'true', reporte:'true',  potros1:'' , imprimeorden	:'true',  finalizaorden :'false',  eliminaorden  :'false',  trayectoriaorden:'true',  documentacionorden:'true',  pausarorden  :'false',  anularorden  :'false',  fotosorden:'true', comentariosorden:'true',  documentosorden :'true',  tareasorden  :'false',acciones:'true',publico:todosa[i].publico});
                             }
                         }
                         
                     }
         
                     var unique =   myData.filter( onlyUnique );
                   
                     var myData2 = [];
                                   for(var i = 0; i < unique.length;i++){
                                      myData2.push({_id:unique[i]._id,tipo:unique[i].tipo,ejecuta:unique[i].ejecuta,tipo2:unique[i].tipo2,geoposicion:unique[i].geoposicion ,categoria:unique[i].categoria,nombre:unique[i].nombre,foto:unique[i].foto,estado:unique[i].estado ,verregistros:unique[i].verregistros,permisos:{pactualizacion:unique[i].pactualizacion,  pconsulta:unique[i].pconsulta, pcreacion:unique[i].pcreacion, peliminacion:unique[i].peliminacion,  pfiltro:unique[i].filtro, pingreso:'true', preporte:unique[i].preporte,  potros1:'', imprimeorden	:unique[i].imprimeorden,  finalizaorden :unique[i].finalizaorden,  eliminaorden  :unique[i].eliminaorden,  trayectoriaorden:unique[i].trayectoriaorden,  documentacionorden:unique[i].documentacionorden,  pausarorden  :unique[i].pausarorden,  anularorden  :unique[i].anularorden, 
                                      publico:unique[i].publico, fotosorden:unique[i].fotosorden, comentariosorden:unique[i].comentariosorden,  documentosorden :unique[i].documentosorden,  tareasorden  :unique[i].tareasorden,acciones:unique[i].acciones}});
                                  }
               
                                   res.json(myData2);
                                  
                                });
                              }


                            });});
            }
            else
            {
                frmmovil.find({idempresa:arr[0], tipo:arr[2],publico:'Si'}).
                exec(function(err, todosa) {
                    if (err){  res.send(err);  }
                formulariousr.find({idempresa:arr[0], estado:arr[1],idusuario:req.params.id2})
                .exec(function(err, todosb) {
                      if (err){  res.send(err);  }

                      
                      if(todosb.length<=0)
                      {
                        if(todosa.length<=0)
                        {
                            res.json(todosb);

                        }
                        else
                        {
                            var myData = [];
                            for(var i = 0; i < todosa.length;i++){
                                if(todosa[i].categoria==req.params.id)
                                {
                                    myData.push({_id:todosa[i]._id,categoria:todosa[i].categoria,nombre:todosa[i].nombre,foto:todosa[i].foto,estado:todosa[i].estado ,publico:todosa[i].publico,verregistros:todosa[i].verregistros,geoposicion:todosa[i].geoposicion ,tipo2:todosa[i].tipo2,ejecuta:todosa[i].ejecuta  ,tipo:todosa[i].tipo});
                                }
                                
                            }
                
                            var unique =   myData.filter( onlyUnique );
                          
                            var myData2 = [];
                                          for(var i = 0; i < unique.length;i++){
                                             myData2.push({_id:unique[i]._id,tipo:unique[i].tipo,ejecuta:unique[i].ejecuta,tipo2:unique[i].tipo2,geoposicion:unique[i].geoposicion ,categoria:unique[i].categoria,nombre:unique[i].nombre,foto:unique[i].foto,estado:unique[i].estado ,verregistros:unique[i].verregistros,permisos:{pactualizacion:'true',  pconsulta:'true', pcreacion:'true', peliminacion:'true',  pfiltro:'true', pingreso:'true', reporte:'true',  potros1:'', imprimeorden	:'true',  finalizaorden :'false',  eliminaorden  :'false',  trayectoriaorden:'true',  documentacionorden:'true',  pausarorden  :'false',  anularorden  :'false',  fotosorden:'true', comentariosorden:'true',  documentosorden :'true',  tareasorden  :'false',acciones:'true',publico:unique[i].publico}});
                                         }
                       
                                          res.json(myData2);



                        }  
                       
                      }
                      else
                      {
                                      
                formulariousrd.find({idpapa:todosb[0]._id,idempresa:arr[0], tipo:arr[2]}).
                populate('idpapa').populate('idformulario').exec(function(err, todos) {

                    if (err){  res.send(err);  }
                    var myData = [];
                    
                    for(var i = 0; i < todos.length;i++){
                    
                        if(todos[i].idformulario.categoria==req.params.id)
                        {
                            myData.push({_id:todos[i].idformulario._id,categoria:todos[i].idformulario.categoria,nombre:todos[i].idformulario.nombre,foto:todos[i].idformulario.foto,estado:todos[i].idformulario.estado ,verregistros:todos[i].verregistros,geoposicion:todos[i].idformulario.geoposicion ,tipo2:todos[i].idformulario.tipo2,ejecuta:todos[i].idformulario.ejecuta  ,tipo:todos[i].idformulario.tipo,
                                pactualizacion:todos[i].actualizacion,  pconsulta:todos[i].consulta, pcreacion:todos[i].creacion, peliminacion:todos[i].eliminacion,  pfiltro:todos[i].filtro, pingreso:'true', preporte:todos[i].reporte,  potros1:'', imprimeorden	:todos[i].imprimeorden,  finalizaorden :todos[i].finalizaorden,  eliminaorden  :todos[i].eliminaorden,  trayectoriaorden:todos[i].trayectoriaorden,  documentacionorden:todos[i].documentacionorden,  pausarorden  :todos[i].pausarorden,  anularorden  :todos[i].anularorden,  fotosorden:todos[i].fotosorden, comentariosorden:todos[i].comentariosorden,  documentosorden :todos[i].documentosorden,  tareasorden  :todos[i].tareasorden,acciones:todos[i].acciones,publico:todos[i].idformulario.publico});
                        }
                        
                    }
                   
       
                    for(var i = 0; i < todosa.length;i++){
                        if(todosa[i].categoria==req.params.id)
                        {
                            var encuentra=0;
                            for(var ii = 0; ii < myData.length;ii++){
                            
                                if(String(myData[ii]._id)===String(todosa[i]._id))
                                {
                                    encuentra=1;
                                    break;
                                }
                            }
                            if(encuentra==0)
                            {
                            myData.push({_id:todosa[i]._id,categoria:todosa[i].categoria,nombre:todosa[i].nombre,foto:todosa[i].foto,estado:todosa[i].estado ,verregistros:todosa[i].verregistros,geoposicion:todosa[i].geoposicion ,tipo2:todosa[i].tipo2,ejecuta:todosa[i].ejecuta  ,tipo:todosa[i].tipo,
                                pactualizacion:'true',  pconsulta:'true', pcreacion:'true', peliminacion:'true',  pfiltro:'true', pingreso:'true', reporte:'true',  potros1:'', imprimeorden	:'true',  finalizaorden :'false',  eliminaorden  :'false',  trayectoriaorden:'true',  documentacionorden:'true',  pausarorden  :'false',  anularorden  :'false',  fotosorden:'true', comentariosorden:'true',  documentosorden :'true',  tareasorden  :'false',acciones:'true',publico:todosa[i].publico});
                            }
                        }
                        
                    }
        
                    var unique =   myData.filter( onlyUnique );
                  
                    var myData2 = [];
                                  for(var i = 0; i < unique.length;i++){
                                     myData2.push({_id:unique[i]._id,tipo:unique[i].tipo,ejecuta:unique[i].ejecuta,tipo2:unique[i].tipo2,geoposicion:unique[i].geoposicion ,categoria:unique[i].categoria,nombre:unique[i].nombre,foto:unique[i].foto,estado:unique[i].estado ,verregistros:unique[i].verregistros,permisos:{pactualizacion:unique[i].pactualizacion,  pconsulta:unique[i].pconsulta, pcreacion:unique[i].pcreacion, peliminacion:unique[i].peliminacion,  pfiltro:unique[i].filtro, pingreso:'true', preporte:unique[i].preporte,  potros1:'',
                                      imprimeorden	:unique[i].imprimeorden,  finalizaorden :unique[i].finalizaorden,  eliminaorden  :unique[i].eliminaorden,  trayectoriaorden:unique[i].trayectoriaorden,  documentacionorden:unique[i].documentacionorden,  pausarorden  :unique[i].pausarorden,  anularorden  :unique[i].anularorden,  fotosorden:unique[i].fotosorden, comentariosorden:unique[i].comentariosorden,  documentosorden :unique[i].documentosorden,  tareasorden  :unique[i].tareasorden,acciones:unique[i].acciones,publico:unique[i].publico}});
                                 }
              
                                  res.json(myData2);
                                });
                      }


          
                            });});
            }

        

        }
        else
        {

        if(req.params.id4=='categoriausr')
        {



            var arr=(req.params.id3).split('°')


            if(arr[1]=='todos')
            {
                frmmovil.find({idempresa:arr[0], tipo:arr[2],publico:'Si'}).
                exec(function(err, todosa) {

                  
                    if (err){  res.send(err);  }
                formulariousr.find({idusuario:req.params.id2,idempresa:arr[0]})
                .exec(function(err, todosb) {
                              if (err){  res.send(err);  }

                              if(todosb.length<=0)
                              {
                                
                                if(todosa.length<=0)
                                {
                                    res.json(todosb);

                                }
                                else
                                {
                                    var myData = [];
                                    for(var i = 0; i < todosa.length;i++){
                                        if(todosa[i].categoria==req.params.id)
                                        {
                                            myData.push({_id:todosa[i]._id,categoria:todosa[i].categoria,nombre:todosa[i].nombre,foto:todosa[i].foto,estado:todosa[i].estado ,verregistros:todosa[i].verregistros,geoposicion:todosa[i].geoposicion ,tipo2:todosa[i].tipo2,ejecuta:todosa[i].ejecuta  ,tipo:todosa[i].tipo,publico:todosa[i].publico});
                                        }
                                        
                                    }
                        
                                    var unique =   myData.filter( onlyUnique );
                                  console.log('6666666666666666666666666')
                                    var myData2 = [];
                                                  for(var i = 0; i < unique.length;i++){
                                                     myData2.push({_id:unique[i]._id,tipo:unique[i].tipo,ejecuta:unique[i].ejecuta,tipo2:unique[i].tipo2,publico:unique[i].publico,geoposicion:unique[i].geoposicion ,categoria:unique[i].categoria,nombre:unique[i].nombre,foto:unique[i].foto,estado:unique[i].estado ,verregistros:unique[i].verregistros,permisos:{pactualizacion:'true',  pconsulta:'true', pcreacion:'true', peliminacion:'true',  pfiltro:'true', pingreso:'true', preporte:'true',  potros1:'',imprimeorden	:'true',  finalizaorden :'false',  eliminaorden  :'false',  trayectoriaorden:'true',  documentacionorden:'true',  pausarorden  :'false',  anularorden  :'false',  fotosorden:'true', comentariosorden:'true',  documentosorden :'true',  tareasorden  :'false',acciones:'true'}});
                                                 }
                               console.log(myData2)
                                                  res.json(myData2);



                                }  
                              }
                              else
                              {
                                  console.log('entro aqui')
                formulariousrd.find({idpapa:todosb[0]._id,idempresa:arr[0], tipo:arr[2]}).
                populate('idpapa').populate('idformulario').exec(function(err, todos) {
                     if (err){  res.send(err);  }
                  
                    var myData = [];
                    
                    for(var i = 0; i < todos.length;i++){
                    
                        if(todos[i].idformulario.categoria==req.params.id)
                        {  
                            myData.push({_id:todos[i].idformulario._id,categoria:todos[i].idformulario.categoria,nombre:todos[i].idformulario.nombre,foto:todos[i].idformulario.foto,estado:todos[i].idformulario.estado ,verregistros:todos[i].verregistros,publico:todos[i].idformulario.publico,geoposicion:todos[i].idformulario.geoposicion ,tipo2:todos[i].idformulario.tipo2,ejecuta:todos[i].idformulario.ejecuta  ,tipo:todos[i].idformulario.tipo,
                                pactualizacion:todos[i].actualizacion,  pconsulta:todos[i].consulta, pcreacion:todos[i].creacion, peliminacion:todos[i].eliminacion,  pfiltro:todos[i].filtro, pingreso:'true', preporte:todos[i].reporte,  potros1:'',imprimeorden	:todos[i].imprimeorden,  finalizaorden :todos[i].finalizaorden,  eliminaorden  :todos[i].eliminaorden,  trayectoriaorden:todos[i].trayectoriaorden,  documentacionorden:todos[i].documentacionorden,  pausarorden  :todos[i].pausarorden,  anularorden  :todos[i].anularorden,  fotosorden:todos[i].fotosorden, comentariosorden:todos[i].comentariosorden,  documentosorden :todos[i].documentosorden,  tareasorden  :todos[i].tareasorden,acciones:todos[i].acciones});
                        }
                        
                    }
                   
      
                    for(var i = 0; i < todosa.length;i++){
                        if(todosa[i].categoria==req.params.id)
                        {
                            var encuentra=0;
                            for(var ii = 0; ii < myData.length;ii++){
                            
                                if(String(myData[ii]._id)===String(todosa[i]._id))
                                {
                                    encuentra=1;
                                    break;
                                }
                            }
                            if(encuentra==0)
                            {
                            myData.push({_id:todosa[i]._id,categoria:todosa[i].categoria,nombre:todosa[i].nombre,foto:todosa[i].foto,estado:todosa[i].estado ,verregistros:todosa[i].verregistros,geoposicion:todosa[i].geoposicion ,tipo2:todosa[i].tipo2,ejecuta:todosa[i].ejecuta  ,tipo:todosa[i].tipo,publico:todosa[i].publico,
                                pactualizacion:'false',  pconsulta:'true', pcreacion:'false', peliminacion:'true',  pfiltro:'true', pingreso:'true', reporte:'true',  potros1:'', imprimeorden	:'true',  finalizaorden :'false',  eliminaorden  :'false',  trayectoriaorden:'true',  documentacionorden:'true',  pausarorden  :'false',  anularorden  :'false',  fotosorden:'true', comentariosorden:'true',  documentosorden :'true',  tareasorden  :'false',acciones:'true'});
                            }
                        }
                        
                    }
        
                    var unique =   myData.filter( onlyUnique );
              
                    var myData2 = [];
                                  for(var i = 0; i < unique.length;i++){
                                     myData2.push({_id:unique[i]._id,tipo:unique[i].tipo,ejecuta:unique[i].ejecuta,tipo2:unique[i].tipo2,geoposicion:unique[i].geoposicion ,categoria:unique[i].categoria,nombre:unique[i].nombre,foto:unique[i].foto,estado:unique[i].estado ,verregistros:unique[i].verregistros
                                        ,publico:unique[i].publico,permisos:{pactualizacion:unique[i].pactualizacion,  pconsulta:unique[i].pconsulta, pcreacion:unique[i].pcreacion, peliminacion:unique[i].peliminacion,  pfiltro:unique[i].filtro, pingreso:'true', preporte:unique[i].preporte,  potros1:'', imprimeorden	:unique[i].imprimeorden,  finalizaorden :unique[i].finalizaorden,  eliminaorden  :unique[i].eliminaorden,  trayectoriaorden:unique[i].trayectoriaorden,  documentacionorden:unique[i].documentacionorden,  pausarorden  :unique[i].pausarorden,  anularorden  :unique[i].anularorden,  fotosorden:unique[i].fotosorden, comentariosorden:unique[i].comentariosorden,  documentosorden :unique[i].documentosorden,  tareasorden  :unique[i].tareasorden,acciones:unique[i].acciones}});
                                 }
              
                                  res.json(myData2);
                                });
                              }


                            }); });
            }
            else
            {

                frmmovil.find({idempresa:arr[0], tipo:arr[2],publico:'Si'}).
                exec(function(err, todosa) {
                    if (err){  res.send(err);  }
                formulariousr.find({idusuario:req.params.id2,idempresa:arr[0], estado:arr[1]})
                .exec(function(err, todosb) {
                      if (err){  res.send(err);  }

                      
                      if(todosb.length<=0)
                      {
                       

                        if(todosa.length<=0)
                        {
                            res.json(todosb);

                        }
                        else
                        {
                            var myData = [];
                            for(var i = 0; i < todosa.length;i++){
                                if(todosa[i].categoria==req.params.id)
                                {
                                    myData.push({_id:todosa[i]._id,categoria:todosa[i].categoria,nombre:todosa[i].nombre,foto:todosa[i].foto,estado:todosa[i].estado ,verregistros:todosa[i].verregistros,geoposicion:todosa[i].geoposicion ,tipo2:todosa[i].tipo2,ejecuta:todosa[i].ejecuta  ,publico:todosa[i].publico});
                                }
                                
                            }
                
                            var unique =   myData.filter( onlyUnique );
                          
                            var myData2 = [];
                                          for(var i = 0; i < unique.length;i++){
                                             myData2.push({_id:unique[i]._id,tipo:unique[i].tipo,ejecuta:unique[i].ejecuta,tipo2:unique[i].tipo2
                                                ,publico:unique[i].publico,geoposicion:unique[i].geoposicion ,categoria:unique[i].categoria,nombre:unique[i].nombre,foto:unique[i].foto,estado:unique[i].estado ,verregistros:unique[i].verregistros,permisos:{pactualizacion:'true',  pconsulta:'true', pcreacion:'true', peliminacion:'true',  pfiltro:'true', pingreso:'true', preporte:'true',  potros1:'', imprimeorden	:'true',  finalizaorden :'false',  eliminaorden  :'false',  trayectoriaorden:'true',  documentacionorden:'true',  pausarorden  :'false',  anularorden  :'false',  fotosorden:'true', comentariosorden:'true',  documentosorden :'true',  tareasorden  :'false',acciones:'true'}});
                                         }
                       
                                          res.json(myData2);



                        }  
                       
                       


                      }
                      else
                      {
                                      
                formulariousrd.find({idpapa:todosb[0]._id,idempresa:arr[0], tipo:arr[2]}).
                populate('idpapa').populate('idformulario').exec(function(err, todos) {
                  

                    if (err){  res.send(err);  }
                    var myData = [];
                    
                    for(var i = 0; i < todos.length;i++){
                    
                        if(todos[i].idformulario.categoria==req.params.id)
                        {
                            myData.push({_id:todos[i].idformulario._id,categoria:todos[i].idformulario.categoria,nombre:todos[i].idformulario.nombre,foto:todos[i].idformulario.foto,estado:todos[i].idformulario.estado ,verregistros:todos[i].verregistros,geoposicion:todos[i].idformulario.geoposicion ,tipo2:todos[i].idformulario.tipo2,ejecuta:todos[i].idformulario.ejecuta  ,tipo:todos[i].idformulario.tipo,
                                pactualizacion:todos[i].actualizacion,  pconsulta:todos[i].consulta, pcreacion:todos[i].creacion, peliminacion:todos[i].eliminacion,  pfiltro:todos[i].filtro, pingreso:'true', preporte:todos[i].reporte,  potros1:'',imprimeorden	:todos[i].imprimeorden,  finalizaorden :todos[i].finalizaorden,  eliminaorden  :todos[i].eliminaorden,  trayectoriaorden:todos[i].trayectoriaorden,  documentacionorden:todos[i].documentacionorden,  pausarorden  :todos[i].pausarorden,  anularorden  :todos[i].anularorden,  fotosorden:todos[i].fotosorden, comentariosorden:todos[i].comentariosorden,  documentosorden :todos[i].documentosorden,  tareasorden  :todos[i].tareasorden,acciones:todos[i].acciones,publico:todos[i].idformulario.publico});
                        }
                        
                    }
                   
       
                    for(var i = 0; i < todosa.length;i++){
                        if(todosa[i].categoria==req.params.id)
                        {
                            var encuentra=0;
                            for(var ii = 0; ii < myData.length;ii++){
                            
                                if(String(myData[ii]._id)===String(todosa[i]._id))
                                {
                                    encuentra=1;
                                    break;
                                }
                            }
                            if(encuentra==0)
                            {
                            myData.push({_id:todosa[i]._id,categoria:todosa[i].categoria,nombre:todosa[i].nombre,foto:todosa[i].foto,estado:todosa[i].estado ,verregistros:todosa[i].verregistros,geoposicion:todosa[i].geoposicion ,tipo2:todosa[i].tipo2,ejecuta:todosa[i].ejecuta  ,tipo:todosa[i].tipo,publico:todosa[i].publico,
                                pactualizacion:'true',  pconsulta:'true', pcreacion:'true', peliminacion:'true',  pfiltro:'true', pingreso:'true', reporte:'true',  potros1:'' ,imprimeorden	:'true',  finalizaorden :'false',  eliminaorden  :'false',  trayectoriaorden:'true',  documentacionorden:'true',  pausarorden  :'false',  anularorden  :'false',  fotosorden:'true', comentariosorden:'true',  documentosorden :'true',  tareasorden  :'false',acciones:'true'});
                            }
                        }
                        
                    }
        
                    var unique =   myData.filter( onlyUnique );
                  
                    var myData2 = [];
                                  for(var i = 0; i < unique.length;i++){
                                     myData2.push({_id:unique[i]._id,tipo:unique[i].tipo,ejecuta:unique[i].ejecuta,tipo2:unique[i].tipo2,geoposicion:unique[i].geoposicion,publico:unique[i].publico ,categoria:unique[i].categoria,nombre:unique[i].nombre,foto:unique[i].foto,estado:unique[i].estado ,verregistros:unique[i].verregistros,permisos:{pactualizacion:unique[i].pactualizacion,  pconsulta:unique[i].pconsulta, pcreacion:unique[i].pcreacion, peliminacion:unique[i].peliminacion,  pfiltro:unique[i].filtro, pingreso:'true', preporte:unique[i].preporte,  potros1:'', imprimeorden	:unique[i].imprimeorden,  finalizaorden :unique[i].finalizaorden,  eliminaorden  :unique[i].eliminaorden,  trayectoriaorden:unique[i].trayectoriaorden,  documentacionorden:unique[i].documentacionorden,  pausarorden  :unique[i].pausarorden,  anularorden  :unique[i].anularorden,  fotosorden:unique[i].fotosorden, comentariosorden:unique[i].comentariosorden,  documentosorden :unique[i].documentosorden,  tareasorden  :unique[i].tareasorden,acciones:unique[i].acciones}});
                                 }
              
                                  res.json(myData2);
                                });
                      }


          
                            });});
            }

        

        }
        else
        {
        var namess=req.params.id //formulario
        //req.params.id2   campo   req.params.id3   informacion
        console.log('entraaaaaaaaaaaaaaaaaaaaaaaaaa')
        var filtro
       
       var arrtodos=     req.params.id4.split('°')


        Frmmovild.find({idmovil:req.params.id, display : "true"}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,req.params.id2,req.params.id3)).split('°')
                                    cad=cad3[0]

                                    if(arrtodos[1] ==='todosdetalle')
                                    {
                                        if(arrtodos[2] ==='todos')
                                        {//{ "$regex" : "' +id3 + '",
                                            cadxx='{'+ cad3[1] +',"' +'idempresa' + '":"' +arrtodos[0] + '"' +',"' +'idpapa' + '":"' +arrtodos[3] + '"'+ '}'
                                           
                                        }
                                        else
                                        {
                                            cadxx='{'+ cad3[1] + ',"' +'idempresa' + '":"'+ arrtodos[0] + '"' +',"' +'usuarionew' + '":"' +arrtodos[2] + '"'  +',"' +'idpapa' + '":"' +arrtodos[3] + '"'+ '}'
                                             
                                        }
                                    }
                                    else
                                    {
                                        if(arrtodos[1] ==='todos')
                                        {//{ "$regex" : "' +id3 + '",
                                            cadxx='{'+ cad3[1] +',"' +'idempresa' + '":"' +arrtodos[0] + '"'+ '}'
                                           
                                        }
                                        else
                                        {
                                            cadxx='{'+ cad3[1] + ',"' +'idempresa' + '":"'+ arrtodos[0] + '"' +',"' +'usuarionew' + '":"' +arrtodos[1] + '"'  +'}'
                                             
                                        }
                                    }
                             
console.log(cadxx)

                                   


                                    cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    var jsonObject = stringToObject(cad);
                                    var mongoose = require("mongoose");
                                    delete mongoose.connection.models[namess];
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                   
                                    try {
                                        var  frmtt= mongoose.model(namess,tt);
                                        
                                        frmtt.find(JSON.parse(cadxx) ,function(err, todos2) {
                                            if (err){  res.send(err);  }
                                        
                                            res.json(todos2);
                                          
                                        });
                                      } catch(e) {
                                         
                                        var  frmtt= mongoose.model(namess);
                              
                                        frmtt.find(JSON.parse(cadxx) ,function(err, todos2) {
                                             if (err){  res.send(err);  }
                                             res.json(todos2);
                                         
                                         });
                                      }


                                 
                    
            }
        });
    }}}}}}}}}

    }
    else{
   
    if(req.params.id3)
    { 
       
        if(req.params.id=='todos')
        { 

            if(req.params.id2=='todos')
            { 
                Frmmovil.find({idempresa:req.params.id3}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                  
                     res.json(todos);
                 });
            }
            else
            {  
                Frmmovil.find({idempresa:req.params.id3,estado:req.params.id2}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                  
                     res.json(todos);
                 });

            }
          
          
        }
        else
        {
          
        



        switch(req.params.id2) {
            case 'flujotrayectoriaorden':
                console.log(req.params)
                var arr=req.params.id3.split('°')
                console.log(arr)
                Frmmovil.findById({_id:arr[1]}).sort({'order': 1}).exec(function(err, todos10a) {

                Frmmovild.find({idempresa:arr[0],idmovil:arr[1]}).sort({'order': 1}).exec(function(err, todos10) {


                formulariotrayectoria.find({idorden:req.params.id,idempresa:arr[0]}).sort({'_id': 1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                    

                    frmactividad.find({idempresa:arr[0],idpapa:arr[1] }).sort({'orden': 1}).exec(function(err, todos1) {
                        if (err){  res.send(err);  }
                      
                        frmacciones.find({idempresa:arr[0],idpapa0:arr[1]}).sort({'orden': 1}).exec(function(err, todos2) {
                            if (err){  res.send(err);  }
                           
                           var actividades= []
                           for(var i = 0; i < todos1.length;i++){
                               var acciones=[]
                            for(var j = 0; j < todos2.length;j++){
                               
                                if(todos1[i]._id==todos2[j].idpapa)
                                {
                                    acciones.push({nombre:todos2[j].nombre,tipo:todos2[j].tipo,orden:todos2[j].orden,subtipo:todos2[j].subtipo,estado:todos2[j].estado})
                                }
                            }

                            var trayecto=[]
                            for(var k = 0; k < todos.length;k++){
                              
                                if(todos1[i]._id==todos[k].idactividad)
                                {
                                    trayecto.push(todos[k])
                                }
                            }



                            actividades.push({orden:todos1[i].orden,nombre:todos1[i].nombre,actor:todos1[i].actor,
                                clase:todos1[i].clase,estado:todos1[i].estado,acciones:acciones,trayecto:trayecto});
                           }
                           
                           
                            res.json({formulario: todos10a,actividad:actividades,campos:todos10});
                         });


            
                        });     
                     });


                   
                    
                });

            });
          break;
            case 'trayectoriaorden':
                    formulariotrayectoria.find({idorden:req.params.id,idempresa:req.params.id3},function(err, todos) {
                        if (err){  res.send(err);  }
                        res.json(todos);
                        
                    });
              break;
            case 'estado':
                    Frmmovil.find({estado:req.params.id,idempresa:req.params.id3},function(err, todos) {
                        if (err){  res.send(err);  }
                        res.json(todos);
                        
                    });
              break;
              case 'categoriagruponombre':
                Frmmovil.aggregate(  [
                    { 
                        "$match" : { 
                            tipo:req.params.id3,idempresa:req.params.id
                        }
                    }, 
                    { 
                        "$group" : { 
                            "_id" : { 
            
                                "categoria" : "$categoria"
                            }
                        }
                    }, 
                    { 
                        "$project" : { 
                            "nombre" : "$_id.categoria",
                          
                            "_id" : 0
                        }
                    }
                ]).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                    res.json(todos);
                    
                });
          break;
          case 'categoriagrupo':
            Frmmovil.aggregate(  [
                { 
                    "$match" : { 
                        tipo:req.params.id3,idempresa:req.params.id
                    }
                }, 
                { 
                    "$group" : { 
                        "_id" : { 
        
                            "categoria" : "$categoria"
                        }
                    }
                }, 
                { 
                    "$project" : { 
                        "categoria" : "$_id.categoria",
                      
                        "_id" : 0
                    }
                }
            ]).exec(function(err, todos) {
                if (err){  res.send(err);  }
                res.json(todos);
                
            });
      break;
          case 'categoriagrupo2':
              var arr=(req.params.id3).split('°')
            Frmmovil.aggregate(  [
                { 
                    "$match" : { 
                        tipo:arr[0],idempresa:req.params.id,
                    }
                }, 
                { 
                    "$group" : { 
                        "_id" : { 
        
                            "categoria" : "$categoria"
                        }
                    }
                }, 
                { 
                    "$project" : { 
                        "categoria" : "$_id.categoria",
                      
                        "_id" : 0
                    }
                }
            ]).exec(function(err, todos) {
                if (err){  res.send(err);  }
                res.json(todos);
                
            });
      break;
              case 'categoria':
               
              Frmmovil.find({categoria:req.params.id,idempresa:req.params.id3},function(err, todos) {
                  if (err){  res.send(err);  }
                  res.json(todos);
                  
              });
        break;
        case 'formulariocamposver':
        Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:req.params.id3},function(err, todos) {
            if (err){  res.send(err);  }
            var data=[]
            for(var i = 0; i < todos.length;i++){
                
                    data.push({name:todos[i].name,nombre:todos[i].title})
                
                
            }
            res.json(data);
            
        });

        break;
        case 'formulariocamposver2':
        Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:req.params.id3}).exec(function(err, todos) {
          //  console.log(todos)
            if (err){  res.send(err);  }
            var data=[]
          
            for(var i = 0; i < todos.length;i++){
                if(todos[i].type!='Imagen' && todos[i].type!='Formulario detalle')
                {
                    if(todos[i].type==='Numerico')
                    {
                        data.push({_id:todos[i].name,nombre:todos[i].title,tipo:'number'})
                    }
                    else
                    {
                        data.push({_id:todos[i].name,nombre:todos[i].title,tipo:'text'})
                    }
                   

                }
                    
                
                
            }
            res.json(data);
            
        });
        break;
        case 'formulariocamposverid':
            Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:req.params.id3}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                var data=[]
              
                for(var i = 0; i < todos.length;i++){
                    if(todos[i].type!='Imagen' && todos[i].type!='Formulario detalle')
                    {
                        data.push({_id:todos[i]._id,nombre:todos[i].title,name:todos[i].name})
    
                    }
                        
                    
                    
                }
                res.json(data);
                
            });
            break;
            case 'formulariocamposveridcampo':
                Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:req.params.id3}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                    var data=[]
                  
                    for(var i = 0; i < todos.length;i++){
                        if(todos[i].type!='Imagen' && todos[i].type!='Formulario detalle')
                        {
                            data.push({_id:todos[i]._id,nombre:todos[i].name,name:todos[i].name})
        
                        }
                            
                        
                        
                    }
                    res.json(data);
                    
                });
                break;
        case 'formulario':
         
            var namess=req.params.id
            var arrtodos=req.params.id3.split('°')
            var filtro
            if(arrtodos[1]==='todos')
            {
                filtro={idempresa:arrtodos[0]}
            }
            else
            {
                filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1]}
            }
  
  
                Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:arrtodos[0]}).sort([['order', 1]]).exec(function(err, todos) {
                    if (err){ res.send(err); }
                 
                
                                        if(todos.length>0)   {  
                                       
                                            var cad=''
                                            var cadxx=''
                                            var cad3=(dafiltrocad(todos,'','')).split('°')
                                      
                                            cad=cad3[0]
                                            cadxx='{'+ cad3[1] + '}'
                                            cad=cad + '"geoposicion"	: { "type" : "String" },  "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                            cad='{' + cad + '}'
                                            cadxx='{' + cadxx + '}'
                                         
                                            var jsonObject = stringToObject(cad);
                                          
                                            var mongoose = require("mongoose");
                                            delete mongoose.connection.models[namess];
                                            var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                          //  console.log(tt)
                                            console.log(filtro)
                                        
                                            try {
                                                var  frmtt= mongoose.model(namess,tt);
                                                frmtt.find(filtro ,function(err, todos2) {
                                                    if (err){  res.send(err); }
                                                  //  console.log(todos2)
                                                    res.json(todos2);
                                                  
                                                });
                                              } catch(e) {
                                                
                                                var  frmtt= mongoose.model(namess);
                                      
                                                frmtt.find( filtro ,function(err, todos2) {
                                                     if (err){  res.send(err);
                                                    }
                                                   // console.log(todos2)
                                                     res.json(todos2);
                                                 
                                                 });
                                              }
    
    
                                         
                            
                    }
                });
            
           
  break;
  case 'formularioproceso':
 
  
    var arrtodos=req.params.id3.split('°')

    var actividadt=[]
   

        actividadt=req.params.id.split(',')
 


  
    var namess=arrtodos[3]
    var filtro
    if(arrtodos[1]==='todos')
    {
        filtro={idempresa:arrtodos[0],estadoordenxxx:arrtodos[2]}
    }
    else
    {
        if(arrtodos[1]==='todosmios')
        {
            if(arrtodos[2]==='ejecutadas')
            {
                filtro={idempresa:arrtodos[0]}
            }
            else
            {
                filtro={idempresa:arrtodos[0],estadoordenxxx:arrtodos[2],
                    idactividadxxx:{$in:actividadt}}
            }
           
          
           
        }
        else
        {
            if(actividadt[0]!=='123')
            {

                if(arrtodos[2]==='ejecutadas')
                {
                    filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1]}
                }
                else
                {
                    filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],estadoordenxxx:arrtodos[2],
                        idactividadxxx:{$in:actividadt}}
                }
                
               
            }
            else
            {filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],estadoordenxxx:arrtodos[2]}

            }
            

        }
     
    }

console.log(filtro)
        Frmmovild.find({idmovil:arrtodos[3], display : "true",idempresa:arrtodos[0]}).exec(function(err, todos) {
            if (err){ res.send(err); }
         
        
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','')).split('°')
                              
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + '"geoposicion"	: { "type" : "String" },  "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'
                                 
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    delete mongoose.connection.models[namess];
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                  //  console.log(tt)
                                    console.log(filtro)
                                    console.log(namess)
                                
                                    try {
                                        var  frmtt= mongoose.model(namess,tt);
                                        frmtt.find(filtro ).sort([['_id', -1]]).exec(function(err, todos2) {
                                            if (err){  res.send(err); }
                                          //  console.log(todos2)
                                            res.json(todos2);
                                          
                                        });
                                      } catch(e) {
                                        
                                        var  frmtt= mongoose.model(namess);
                              
                                        frmtt.find( filtro ).sort([['_id', -1]]).exec(function(err, todos2) {
                                             if (err){  res.send(err);
                                            }
                                           // console.log(todos2)
                                             res.json(todos2);
                                         
                                         });
                                      }


                                 
                    
            }
        });
    
   
break;

  case 'formulariodetalle':
         
    var namess=req.params.id
    var arrtodos=req.params.id3.split('°')
    var filtro
    
    if(arrtodos[1]==='todos')
    {
        filtro={idempresa:arrtodos[0],idpapa:arrtodos[2]}
    }
    else
    {
        filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1],idpapa:arrtodos[2]}
    }
  console.log(filtro)
        Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:arrtodos[0]}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
        
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','')).split('°')
                              
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" },      "idpapa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'
                                 
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    delete mongoose.connection.models[namess];
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                  //  console.log(tt)
                                    
                                
                                    try {
                                        var  frmtt= mongoose.model(namess,tt);
                                        frmtt.find(filtro ,function(err, todos2) {
                                            if (err){  res.send(err); }
                                          //  console.log(todos2)
                                            res.json(todos2);
                                          
                                        });
                                      } catch(e) {
                                        
                                        var  frmtt= mongoose.model(namess);
                              
                                        frmtt.find( filtro ,function(err, todos2) {
                                             if (err){  res.send(err);
                                            }
                                           // console.log(todos2)
                                             res.json(todos2);
                                         
                                         });
                                      }


                                 
                    
            }
        });
    
   
break;

  case 'formulariocombo':
         
    var namess=req.params.id
        Frmmovild.find({idmovil:req.params.id, display : "true",idempresa:req.params.id3}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
        
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','')).split('°')
                              
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + ' "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'
                                 
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    delete mongoose.connection.models[namess];
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                  //  console.log(tt)
                                    
                                
                                    try {
                                        var  frmtt= mongoose.model(namess,tt);
                                        frmtt.find({} ,function(err, todos2) {
                                            if (err){  res.send(err); }
                                          //  console.log(todos2)
                                            res.json(todos2);
                                          
                                        });
                                      } catch(e) {
                                        
                                        var  frmtt= mongoose.model(namess);
                              
                                        frmtt.find( {} ,function(err, todos2) {
                                             if (err){  res.send(err);
                                            }
                                           // console.log(todos2)
                                             res.json(todos2);
                                         
                                         });
                                      }


                                 
                    
            }
        });
    
   
break;
  case 'formulariod':
  var namess=req.params.id
 
  Formcat2.find({idformulario:req.params.id,idempresa:req.params.id3}).exec(function(err, todos1) {
    if (err){ res.send(err); }
                        if(todos1.length>0)   {   
                        }

                        Frmmovild.find({idmovil:req.params.id}).exec(function(err, todos) {
                            if (err){ res.send(err); }
                                                if(todos.length>0)   {   
                                                  
                                                  var data=[];
                                                  for(var i = 0; i < todos.length;i++){

                                               
                                                      data.push({  
                                                      _id :  todos[i]._id, 
                                                      idmovil	:  todos[i].idmovil._id,
                                                      type   		: datipo2(todos[i].type) ,
                                                      name   		: todos[i].name,
                                                      default:todos[i].default,
                                                      nombre   		:  todos[i].nombre,
                                                      order:	  todos[i].order,
                                                      title:   todos[i].title,
                                                      estado	:  todos[i].estado,
                                                      required: 	 todos[i].required,
                                                      placeholder:  todos[i].placeholder,
                                                      display:  todos[i].display,
                                                      selected:  todos[i].selected,
                                                      disabled:  todos[i].disabled,
                                                      hidden:   todos[i].hidden,
                                                      position:  todos[i].position,
                                                      labelsizefondt:  todos[i].labelsizefondt,
                                                      categoria:  todos[i].categoria,
                                                      combofijo:  todos[i].combofijo,
                                                      options:daarreglo(todos1,todos[i]._id),
                                                      fondoetiqueta: todos[i].fondoetiqueta,
                                                      coloretiqueta: todos[i].coloretiqueta,
                                                      blike: todos[i].blike,
                                                      rangomin: todos[i].rangomin,
                                                      rangomax: todos[i].rangomax,
                                                      rangostep: todos[i].rangostep,
                                                      alfatypo: todos[i].alfatypo,
                                                      idfrmconsulta: todos[i].idfrmconsulta,
                                                      idfrmconsulta2: todos[i].idfrmconsulta2,
                                                      verregistros:todos[i].verregistros,

                                                      usarunaves: todos[i].usarunaves,
                                                      idfrmconsultaorigen: todos[i].idfrmconsultaorigen,
                                                      idfrmconsulta2origen: todos[i].idfrmconsulta2origen,
                                                      nombreconsulta2origen		: todos[i].nombreconsulta2origen,
                                                      idcampofiltro: todos[i].idcampofiltro,
                                                      idcampofiltromanual: todos[i].idcampofiltromanual,

                                                      idcampofiltropapa: todos[i].idcampofiltropapa,
                                                      idfrmconsultaorigenpapa: todos[i].idfrmconsultaorigenpapa


                                                      });
                      
                      
                                                  }
                                                  res.json(data); 
                            }
                        });


    });
 

break;

case 'formulariodidxx':
    var namess=req.params.id.split('°')
    console.log(namess)
   
    Formcat2.find({idformulario:namess[0],idempresa:req.params.id3}).exec(function(err, todos1) {
      if (err){ res.send(err); }
                          if(todos1.length>0)   {   
                          }
  
                          Frmmovild.find({idmovil:namess[0],_id:namess[1]}).exec(function(err, todos) {
                              if (err){ res.send(err); }
                                                  if(todos.length>0)   {   
                                                    
                                                    var data=[];
                                                    for(var i = 0; i < todos.length;i++){
  
                                                 
                                                        data.push({  
                                                        _id :  todos[i]._id, 
                                                        idmovil	:  todos[i].idmovil._id,
                                                        type   		: datipo2(todos[i].type) ,
                                                        name   		: todos[i].name,
                                                        default:todos[i].default,
                                                        nombre   		:  todos[i].nombre,
                                                        order:	  todos[i].order,
                                                        title:   todos[i].title,
                                                        estado	:  todos[i].estado,
                                                        required: 	 todos[i].required,
                                                        placeholder:  todos[i].placeholder,
                                                        display:  todos[i].display,
                                                        selected:  todos[i].selected,
                                                        disabled:  todos[i].disabled,
                                                        hidden:   todos[i].hidden,
                                                        position:  todos[i].position,
                                                        labelsizefondt:  todos[i].labelsizefondt,
                                                        categoria:  todos[i].categoria,
                                                        combofijo:  todos[i].combofijo,
                                                        options:daarreglo(todos1,todos[i]._id),
                                                        fondoetiqueta: todos[i].fondoetiqueta,
                                                        coloretiqueta: todos[i].coloretiqueta,
                                                        blike: todos[i].blike,
                                                        rangomin: todos[i].rangomin,
                                                        rangomax: todos[i].rangomax,
                                                        rangostep: todos[i].rangostep,
                                                        alfatypo: todos[i].alfatypo,
                                                        idfrmconsulta: todos[i].idfrmconsulta,
                                                        idfrmconsulta2: todos[i].idfrmconsulta2,
                                                        verregistros:todos[i].verregistros,
  
                                                        usarunaves: todos[i].usarunaves,
                                                        idfrmconsultaorigen: todos[i].idfrmconsultaorigen,
                                                        idfrmconsulta2origen: todos[i].idfrmconsulta2origen,
                                                        nombreconsulta2origen		: todos[i].nombreconsulta2origen,
                                                        idcampofiltro: todos[i].idcampofiltro,
                                                        idcampofiltromanual: todos[i].idcampofiltromanual,
  
                                                        idcampofiltropapa: todos[i].idcampofiltropapa,
                                                        idfrmconsultaorigenpapa: todos[i].idfrmconsultaorigenpapa
  
  
                                                        });
                        
                        
                                                    }
                                                    res.json(data); 
                              }
                          });
  
  
      });
   
  
  break;
            default://busqueda de formulario
           
             
          }
        }
    }
    else
    {
                if(req.params.id2)
                { 
                    if(req.params.id=='todos')
                    {

                    
                    Frmmovil.find({idempresa:req.params.id2}).exec(function(err, todos) {
                        if (err){  res.send(err);  }
                            res.json(todos);
                        });
                    }
                }
                else
                {            

                                if(req.params.id)
                                { 
                                        Frmmovil.find({_id:req.params.id},function(err, todos) {
                                            if (err){ res.send(err); }
                                        
                                            if(todos.length>0)   {    res.json(todos);   }
                                            else
                                            {  res.status(500).send('NO EXISTE REGISTRO');      }
                                            
                                        });
                                
                                }
                                else
                                {             Frmmovil.find({}).populate('categoria').exec(function(err, todos) {
                                                if (err){  res.send(err);  }
                                                    res.json(todos);
                                                });
                                }

                }
}}}
}
exports.deleteFrmmovil = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina formulario movil '});
    Frmmovil.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {

       Frmmovild.deleteMany({idmovil:req.params.recordID  }, function(err, todo100) {  
            frmactividad.deleteMany({idpapa:req.params.recordID  }, function(err, todo100) {  
                frmacciones.deleteMany({idpapa0:req.params.recordID  }, function(err, todo100) {  
                    frmactor.find({idpapa:req.params.recordID  }, function(err, todo100a) { 
                        var duplicates = [];
                        for(var i = 0; i < todo100a.length;i++){
                                        duplicates.push(todo100a[i]._id);
                        }
                        console.log(duplicates)
                frmactor.deleteMany({idpapa:req.params.recordID  }, function(err, todo100) { 
                    
                   



                        frmactorgrupo.deleteMany({idpapa: {$in: duplicates}  }, function(err, todo100) { 

                            formulariousrd.deleteMany({idformulario:req.params.recordID  }, function(err, todo100) { 
                                res.json(todo);
                            });


                            
                        });
                    });
                });
 });
            });

           


        });
        
    });
}


exports.deleteFrmmovil2 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina formulario movil '});
    var namess=req.params.recordID2

    Frmmovild.find({idmovil:req.params.recordID2}).exec(function(err, todos) {
        if (err){ res.send(err); }
                            if(todos.length>0)   {     
                                 var cad=''


                                
                                var cad3=(dafiltrocad(todos,'','')).split('°')
                                cad=cad3[0]
                               // cadxx='{'+ cad3[1] + '}'
                                cad=cad + '"usuarionew":{"type":"String"},"usuarioup":{"type":"String"},      "idempresa"	: { "type" : "String" }'
                                cad='{' + cad + '}'
                                var jsonObject = stringToObject(cad);
                               
                              
                                var mongoose = require("mongoose");
                                delete mongoose.connection.models[namess];
                                var tt=  new mongoose.Schema(jsonObject, {timestamps:true });

                                try {
                                 
                                    var  frmtt= mongoose.model(namess,tt);
                                  
                        
console.log(req.params)


                                    frmtt.findByIdAndRemove({ _id: req.params.recordID }, function(err, todo) {
                                       
                                        if(req.params.recordID3==='proceso')
                                        {
                                        formulariocomentarios.deleteMany({idpapa:req.params.recordID}, function(err, todo10) {  
                                            console.log('comentatios')
                                            formulariofotos.deleteMany({idpapa:req.params.recordID}, function(err, todo100) {  
                                                formulariofotos2.deleteMany({idpapa:req.params.recordID}, function(err, todo100) {  

                                               formulariotareas.deleteMany({idpapa:req.params.recordID}, function(err, todo10) {  
                                            console.log('tareas')
                                                    formulariotrayectoria.deleteMany({idmobil:req.params.recordID}, function(err, todo10) {  
                                            console.log('traye')
                                            Image.deleteMany({idpapa0:req.params.recordID}, function(err, todo10) {  
                                            console.log('fotos')
                                                        res.json(todo);
                                                    
                                                    });
                                                    
                                                    });
                                                });
                                                });
                                            
                                            });
                                        
                                        });
                                    }
                                    else
                                    {
                                        res.json(todo);
                                    }

                                           
                                        
                                           
                                    });

                                  
                                  } catch(e) {
                                 
                                    var  frmtt= mongoose.model(namess);
                                  
                                    frmtt.findByIdAndRemove({ _id: req.params.recordID }, function(err, todo) {
                                       
                                        if(req.params.recordID3==='proceso')
                                        {
                               
                                            formulariocomentarios.deleteMany({idpapa:req.params.recordID}, function(err, todo10) {  
                                                console.log('comentatios')
                                                formulariofotos.deleteMany({idpapa:req.params.recordID}, function(err, todo100) {  
                                                    formulariofotos2.deleteMany({idpapa:req.params.recordID}, function(err, todo100) {  
    
                                                   formulariotareas.deleteMany({idpapa:req.params.recordID}, function(err, todo10) {  
                                                console.log('tareas')
                                                        formulariotrayectoria.deleteMany({idmobil:req.params.recordID}, function(err, todo10) {  
                                                console.log('traye')
                                                Image.deleteMany({idpapa0:req.params.recordID}, function(err, todo10) {  
                                                console.log('fotos')
                                                            res.json(todo);
                                                        
                                                        });  });
                                                        
                                                        });
                                                    
                                                    });
                                                
                                                });
                                            
                                            });
                                   
                                    }
                                    else
                                    {
                                        res.json(todo);
                                    }

                                           
                                        
                                           
                                    });

                                  }


                  

        }
    });
}
/*

accion: "enviar a generación de plantilla ofertada"
actividad: "2. Generacion de plantilla ofertada"
actividadclase: "NORMAL"
actividadtipo: "EJECUCIÓN"
actor: "2. Generacion de plantilla ofertada"
estado: "generación de plantilla ofertada"
idaccion: "5f83c18e66dbdb57cca2a34d"
idactividad: "5f83837c9c97c05fdc889bbc"
idactor: "5f592105f4838034b8d5377b"
subtipoaccion: "GRUPO"
tipoaccion: "EJECUCIÓN"

*/
exports.creaFrmmovil3s = function(req, res, next){

    if(req.body.operacion==='actualizaordentrayectoria')
    {

        formulariotrayectoria.findOne({ _id:{$nin:[req.body.idtrayectoria]},idorden:req.body.idmovil }).sort({_id:-1}).exec( function (err, todo)  {
            if (err) {  res.send(err);  }
            var ff3=new Date(req.body.fechaactual)
            var ff4=todo.createdAt 
            console.log( ff3 + '     ' +   ff4)

            var diffDays = parseInt((ff3 - ff4) / (1000 * 60 * 60 * 24)); //gives day difference
            var diffhoras = parseInt((ff3 - ff4) / (1000 * 60 * 60 )); //gives day difference
            var diffminutos = parseInt((ff3 - ff4) / (1000 * 60 )); //gives day difference
            var diffseg = parseInt((ff3 - ff4) / (1000  )); //gives day difference
//one_day means 1000*60*60*24
//one_hour means 1000*60*60
//one_minute means 1000*60
//one_second means 1000


            formulariotrayectoria.findById({ _id:todo._id}, function (err, todo)  {
                
                if (err) {  res.send(err);  }
                else
                {  todo.salioorden=1;
                    todo.usuarioejecutor=req.body.usuarioejecutor;
                    todo.dias=diffDays;
                    todo.horas=diffhoras;
                    todo.minutos=diffminutos;
                    todo.segundos=diffseg;

                    todo.save(function (err, todo){
                        if (err)     {  res.status(500).send(err.message)   }
                        
                        res.json(todo);
                    });
                }
            });

        });
       


    }
    else
    {
    if(req.body.operacion==='ejecutaoperacion')
    {
        console.log('entraaaaaaaaaaaaaaaaaaaaaaaaa  EJECUTA OPERACION '+ req.body.ejecuta)
        switch(req.body.ejecuta) {
            case 'visitas_programadas':  frmejecuta.visitas_programadas(req, res, next);  
            break;
            default:
              // code block
          }
    }
    else
    {
if(req.params.recordID!=='crea')
{   Bitacora.create(req.body.bitacora);
    var namess=req.body.idform
    console.log('actualiza formulario+++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
    Frmmovild.find({idmovil:req.body.idform}).exec(function(err, todos) {
        if (err){ res.send(err); }
                            if(todos.length>0)   {     
                                 var cad=''
                              
                               var cad3=(dafiltrocad(todos,'','')).split('°')
                               cad=cad3[0]
                               if(req.body.idpapa)
                               {
                                   if(req.body.tipo==='proceso')
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

                                    if(req.body.tipo==='proceso')
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
                         
                                try {
                                    var  frmtt= mongoose.model(namess,tt);
                               
                                    frmtt.update({ _id: req.params.recordID }, req.body.estructura, function(err, todo3) {
                                        if (err){       res.status(500).send(err.message)    }
                                        if(req.body.tipo==='proceso')
                                        {//crea trayectoria
                                         formulariotrayectoria.create({
                                             idempresa		:  req.body.trayectoria.idempresa,
                                             idorden	: req.params.recordID,
                                             usuariocreador		: req.body.trayectoria.usuariocreador,
                                               email:req.body.trayectoria.email,
                                             minutos		:0,
                                             dias:0,
                                             horas:0,
                                             segundos:0,
                                             tipocreacionorden		:req.body.trayectoria.tipocreacionorden,
                                             nombre		:req.body.trayectoria.nombre,
                                             idform		: req.body.trayectoria.idform,
                                             tipoform	:req.body.trayectoria.tipoform,
                                             tipo2form	:req.body.trayectoria.tipo2form,
                                             ejecuta: req.body.trayectoria.ejecuta,
                                             estadoorden: req.body.trayectoria.estadoorden,
                                             salioorden:req.body.trayectoria.salioorden,
                                             categoriaform	: req.body.trayectoria.categoriaform,
                                             idactividad		: req.body.trayectoria.idactividad,
                                             actoractividad		:req.body.trayectoria.actoractividad,
                                             claseactividad		: req.body.trayectoria.claseactividad,
                                             nombreactividad		: req.body.trayectoria.nombreactividad,
                                             tipoactividad		: req.body.trayectoria.tipoactividad,
                                             etapaactividad		:req.body.trayectoria.etapaactividad,
                                             idaccion		: req.body.trayectoria.idaccion,
                                             tipoaccion		: req.body.trayectoria.tipoaccion,
                                             subtipoaccion		: req.body.trayectoria.subtipoaccion,
                                             nombreaccion		: req.body.trayectoria.nombreaccion,
                                             estadoaccion		: req.body.trayectoria.estadoaccion,
                                             actividadsiguienteaccion		:  req.body.trayectoria.actividadsiguienteaccion
                                       }  , function(err, todo330) {
                                        if (err){  console.log(err.message);    res.status(500).send(err.message)    }
                                        res.json(todo330);
                                       });
                                
                                
                                        
                                        }
                                        else
                                        {
                                         res.json(todo3);
                                        }

                                     
                                        });


                                  
                                  } catch(e) {
                                    
                                    var  frmtt= mongoose.model(namess);
                                    frmtt.update({ _id: req.params.recordID }, req.body.estructura, function(err, todo3) {
                                        if (err){       res.status(500).send(err.message)    }
                                        if(req.body.tipo==='proceso')
                                        {//crea trayectoria
                                         formulariotrayectoria.create({
                                             idempresa		:  req.body.trayectoria.idempresa,
                                             idorden	: req.params.recordID,
                                             usuariocreador		: req.body.trayectoria.usuariocreador,
                                               email:req.body.trayectoria.email,
                                               minutos		:0,
                                             dias:0,
                                             horas:0,
                                             segundos:0,
                                             tipocreacionorden		:req.body.trayectoria.tipocreacionorden,
                                             nombre		:req.body.trayectoria.nombre,
                                             idform		: req.body.trayectoria.idform,
                                             tipoform	:req.body.trayectoria.tipoform,
                                             tipo2form	:req.body.trayectoria.tipo2form,
                                             ejecuta: req.body.trayectoria.ejecuta,
                                             estadoorden: req.body.trayectoria.estadoorden,
                                             salioorden:req.body.trayectoria.salioorden,
                                             categoriaform	: req.body.trayectoria.categoriaform,
                                             idactividad		: req.body.trayectoria.idactividad,
                                             actoractividad		:req.body.trayectoria.actoractividad,
                                             claseactividad		: req.body.trayectoria.claseactividad,
                                             nombreactividad		: req.body.trayectoria.nombreactividad,
                                             tipoactividad		: req.body.trayectoria.tipoactividad,
                                             etapaactividad		:req.body.trayectoria.etapaactividad,
                                             idaccion		: req.body.trayectoria.idaccion,
                                             tipoaccion		: req.body.trayectoria.tipoaccion,
                                             subtipoaccion		: req.body.trayectoria.subtipoaccion,
                                             nombreaccion		: req.body.trayectoria.nombreaccion,
                                             estadoaccion		: req.body.trayectoria.estadoaccion,
                                             actividadsiguienteaccion		:  req.body.trayectoria.actividadsiguienteaccion
                                       }  , function(err, todo330) {
                                        if (err){  console.log(err.message);    res.status(500).send(err.message)    }
                                        res.json(todo330);
                                       });
                                
                                
                                        
                                        }
                                        else
                                        {
                                         res.json(todo3);
                                        }
                                        });

                                  }


                  

        }
    });

    

}
else{

console.log('crea formulario mnuevo')
    var namess=req.body.idform
    Bitacora.create(req.body.bitacora);
    Frmmovild.find({idmovil:req.body.idform}).exec(function(err, todos) {
     
        if (err){ res.send(err); }
                            if(todos.length>0)   {  

                               //validar si ya existe algunos de los que son llave 
                                var validarcampos =[];
                                var filtrovalida=''
                                console.log(todos.length)
                              
                               for(var i = 0; i <todos.length; i++) {
                                   if(todos[i].usarunaves==='true')
                                   {
                                   if(i===0)
                                   {
                                    filtrovalida=  '"' +todos[i].name + '":"' + req.body.estructura[todos[i].name] + '"' 
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
                              
                                if(req.body.idpapa)
                                {
                                    if(req.body.tipo==='proceso')
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
 
                                     if(req.body.tipo==='proceso')
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
 
    frmtt.create(req.body.estructura
        , function(err, todo3) {
        if (err){  console.log(err.message);    res.status(500).send(err.message)    }
            
        if(req.body.tipo==='proceso')
        {//crea trayectoria
         formulariotrayectoria.create({
             idempresa		:  req.body.trayectoria.idempresa,
             idorden	: todo3._id,
             usuariocreador		: req.body.trayectoria.usuariocreador,
               email:req.body.trayectoria.email,
               minutos		:0,
               dias:0,
               horas:0,
               segundos:0,
             tipocreacionorden		:req.body.trayectoria.tipocreacionorden,
             nombre		:req.body.trayectoria.nombre,
             idform		: req.body.trayectoria.idform,
             tipoform	:req.body.trayectoria.tipoform,
             tipo2form	:req.body.trayectoria.tipo2form,
             ejecuta: req.body.trayectoria.ejecuta,
             estadoorden: req.body.trayectoria.estadoorden,
             salioorden:req.body.trayectoria.salioorden,
             categoriaform	: req.body.trayectoria.categoriaform,
             idactividad		: req.body.trayectoria.idactividad,
             actoractividad		:req.body.trayectoria.actoractividad,
             claseactividad		: req.body.trayectoria.claseactividad,
             nombreactividad		: req.body.trayectoria.nombreactividad,
             tipoactividad		: req.body.trayectoria.tipoactividad,
             etapaactividad		:req.body.trayectoria.etapaactividad,
             idaccion		: req.body.trayectoria.idaccion,
             tipoaccion		: req.body.trayectoria.tipoaccion,
             subtipoaccion		: req.body.trayectoria.subtipoaccion,
             nombreaccion		: req.body.trayectoria.nombreaccion,
             estadoaccion		: req.body.trayectoria.estadoaccion,
             actividadsiguienteaccion		:  req.body.trayectoria.actividadsiguienteaccion
       }  , function(err, todo330) {
        if (err){  console.log(err.message);    res.status(500).send(err.message)    }
        res.json(todo330);
       });


        
        }
        else
        {
         res.json(todo3);
        }
        console.log('finallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll0000000000000000000000')
     
      
    
        });
  
  } catch(e) {
    
    console.log(e)
    //ya no le pongo esquema eso dice la solucion// pero no graba lo nuevo campo
    //aqui tendria que se un sabe
    console.log('sigueeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
  
    var  frmtt= mongoose.model(namess);
  
 
    frmtt.create(req.body.estructura
        , function(err, todo3) {
        if (err){       res.status(500).send(err.message)    }
   
        if(req.body.tipo==='proceso')
                                       {//crea trayectoria
                                        formulariotrayectoria.create({
                                            idempresa		:  req.body.trayectoria.idempresa,
                                            idorden	: todo3._id,
                                            usuariocreador		: req.body.trayectoria.usuariocreador,
                                              email:req.body.trayectoria.email,
                                              minutos		:0,
                                             dias:0,
                                             horas:0,
                                             segundos:0,
                                            tipocreacionorden		:req.body.trayectoria.tipocreacionorden,
                                            nombre		:req.body.trayectoria.nombre,
                                            idform		: req.body.trayectoria.idform,
                                            tipoform	:req.body.trayectoria.tipoform,
                                            tipo2form	:req.body.trayectoria.tipo2form,
                                            estadoorden: req.body.trayectoria.estadoorden,
                                            ejecuta: req.body.trayectoria.ejecuta,
                                            salioorden:req.body.trayectoria.salioorden,
                                            categoriaform	: req.body.trayectoria.categoriaform,
                                            idactividad		: req.body.trayectoria.idactividad,
                                            actoractividad		:req.body.trayectoria.actoractividad,
                                            claseactividad		: req.body.trayectoria.claseactividad,
                                            nombreactividad		: req.body.trayectoria.nombreactividad,
                                            tipoactividad		: req.body.trayectoria.tipoactividad,
                                            etapaactividad		:req.body.trayectoria.etapaactividad,
                                            idaccion		: req.body.trayectoria.idaccion,
                                            tipoaccion		: req.body.trayectoria.tipoaccion,
                                            subtipoaccion		: req.body.trayectoria.subtipoaccion,
                                            nombreaccion		: req.body.trayectoria.nombreaccion,
                                            estadoaccion		: req.body.trayectoria.estadoaccion,
                                            actividadsiguienteaccion		:  req.body.trayectoria.actividadsiguienteaccion
                                        }  , function(err, todo330) {
                                            if (err){  console.log(err.message);    res.status(500).send(err.message)    }
                                            res.json(todo330);
                                           });
                                       }
                                       else
                                       {
                                        res.json(todo3);
                                       }
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
                                if(req.body.idpapa)
                                {
                                    if(req.body.tipo==='proceso')
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
 
                                     if(req.body.tipo==='proceso')
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
                               delete mongoose.connection.models[namess];
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
                                
                                   frmtt.create(req.body.estructura
                                       , function(err, todo3) {
                                       if (err){  console.log(err.message);    res.status(500).send(err.message)    }
                                           
                                       if(req.body.tipo==='proceso')
                                       {//crea trayectoria
                                        formulariotrayectoria.create({
                                            idempresa		:  req.body.trayectoria.idempresa,
                                            idorden	: todo3._id,
                                            usuariocreador		: req.body.trayectoria.usuariocreador,
                                              email:req.body.trayectoria.email,
                                              minutos		:0,
                                              dias:0,
                                              horas:0,
                                              segundos:0,
                                            tipocreacionorden		:req.body.trayectoria.tipocreacionorden,
                                            nombre		:req.body.trayectoria.nombre,
                                            estadoorden: req.body.trayectoria.estadoorden,
                                            idform		: req.body.trayectoria.idform,
                                            salioorden:req.body.trayectoria.salioorden,
                                            tipoform	:req.body.trayectoria.tipoform,
                                            tipo2form	:req.body.trayectoria.tipo2form,
                                            ejecuta: req.body.trayectoria.ejecuta,
                                            categoriaform	: req.body.trayectoria.categoriaform,
                                            idactividad		: req.body.trayectoria.idactividad,
                                            actoractividad		:req.body.trayectoria.actoractividad,
                                            claseactividad		: req.body.trayectoria.claseactividad,
                                            nombreactividad		: req.body.trayectoria.nombreactividad,
                                            tipoactividad		: req.body.trayectoria.tipoactividad,
                                            etapaactividad		:req.body.trayectoria.etapaactividad,
                                            idaccion		: req.body.trayectoria.idaccion,
                                            tipoaccion		: req.body.trayectoria.tipoaccion,
                                            subtipoaccion		: req.body.trayectoria.subtipoaccion,
                                            nombreaccion		: req.body.trayectoria.nombreaccion,
                                            estadoaccion		: req.body.trayectoria.estadoaccion,
                                            actividadsiguienteaccion		:  req.body.trayectoria.actividadsiguienteaccion
                                        }  , function(err, todo330) {
                                            if (err){  console.log(err.message);    res.status(500).send(err.message)    }
                                            res.json(todo330);
                                           });
                                       }
                                       else
                                       {
                                        res.json(todo3);
                                       }
                                   
                                       });
                                 
                                 } catch(e) {
                                   
                                   console.log(e)
                                   //ya no le pongo esquema eso dice la solucion// pero no graba lo nuevo campo
                                   //aqui tendria que se un sabe
                                   var  frmtt= mongoose.model(namess);
                                  
                                   frmtt.create(req.body.estructura
                                       , function(err, todo3) {
                                       if (err){       res.status(500).send(err.message)    }
                                  
                                       if(req.body.tipo==='proceso')
                                       {//crea trayectoria
                                        formulariotrayectoria.create({
                                            idempresa		:  req.body.trayectoria.idempresa,
                                            idorden	: todo3._id,
                                            usuariocreador		: req.body.trayectoria.usuariocreador,
                                              email:req.body.trayectoria.email,
                                              minutos		:0,
                                              dias:0,
                                              horas:0,
                                              segundos:0,
                                            tipocreacionorden		:req.body.trayectoria.tipocreacionorden,
                                            nombre		:req.body.trayectoria.nombre,
                                            idform		: req.body.trayectoria.idform,
                                            tipoform	:req.body.trayectoria.tipoform,
                                            tipo2form	:req.body.trayectoria.tipo2form,
                                            salioorden:req.body.trayectoria.salioorden,
                                            estadoorden: req.body.trayectoria.estadoorden,
                                            ejecuta: req.body.trayectoria.ejecuta,
                                            categoriaform	: req.body.trayectoria.categoriaform,
                                            idactividad		: req.body.trayectoria.idactividad,
                                            actoractividad		:req.body.trayectoria.actoractividad,
                                            claseactividad		: req.body.trayectoria.claseactividad,
                                            nombreactividad		: req.body.trayectoria.nombreactividad,
                                            tipoactividad		: req.body.trayectoria.tipoactividad,
                                            etapaactividad		:req.body.trayectoria.etapaactividad,
                                            idaccion		: req.body.trayectoria.idaccion,
                                            tipoaccion		: req.body.trayectoria.tipoaccion,
                                            subtipoaccion		: req.body.trayectoria.subtipoaccion,
                                            nombreaccion		: req.body.trayectoria.nombreaccion,
                                            estadoaccion		: req.body.trayectoria.estadoaccion,
                                            actividadsiguienteaccion		:  req.body.trayectoria.actividadsiguienteaccion
                                        }  , function(err, todo330) {
                                            if (err){  console.log(err.message);    res.status(500).send(err.message)    }
                                            res.json(todo330);
                                           });
                                       }
                                       else
                                       {
                                        res.json(todo3);
                                       }
                                      
                                   
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

   frmtt.create(req.body.estructura
       , function(err, todo3) {
       if (err){  console.log(err.message);    res.status(500).send(err.message)    }
           
       if(req.body.tipo==='proceso')
                                       {//crea trayectoria
                                        formulariotrayectoria.create({
                                            idempresa		:  req.body.trayectoria.idempresa,
                                            idorden	: todo3._id,
                                            usuariocreador		: req.body.trayectoria.usuariocreador,
                                              email:req.body.trayectoria.email,
                                              minutos		:0,
                                              dias:0,
                                              horas:0,
                                              segundos:0,
                                            tipocreacionorden		:req.body.trayectoria.tipocreacionorden,
                                            nombre		:req.body.trayectoria.nombre,
                                            idform		: req.body.trayectoria.idform,
                                            tipoform	:req.body.trayectoria.tipoform,
                                            tipo2form	:req.body.trayectoria.tipo2form,
                                            ejecuta: req.body.trayectoria.ejecuta,
                                            salioorden:req.body.trayectoria.salioorden,
                                            estadoorden: req.body.trayectoria.estadoorden,
                                            categoriaform	: req.body.trayectoria.categoriaform,
                                            idactividad		: req.body.trayectoria.idactividad,
                                            actoractividad		:req.body.trayectoria.actoractividad,
                                            claseactividad		: req.body.trayectoria.claseactividad,
                                            nombreactividad		: req.body.trayectoria.nombreactividad,
                                            tipoactividad		: req.body.trayectoria.tipoactividad,
                                            etapaactividad		:req.body.trayectoria.etapaactividad,
                                            idaccion		: req.body.trayectoria.idaccion,
                                            tipoaccion		: req.body.trayectoria.tipoaccion,
                                            subtipoaccion		: req.body.trayectoria.subtipoaccion,
                                            nombreaccion		: req.body.trayectoria.nombreaccion,
                                            estadoaccion		: req.body.trayectoria.estadoaccion,
                                            actividadsiguienteaccion		:  req.body.trayectoria.actividadsiguienteaccion
                                        }  , function(err, todo330) {
                                            if (err){  console.log(err.message);    res.status(500).send(err.message)    }
                                            res.json(todo330);
                                           });
                                       }
                                       else
                                       {
                                        res.json(todo3);
                                       }
   
       });
 
 } catch(e) {
   
   console.log(e)
   //ya no le pongo esquema eso dice la solucion// pero no graba lo nuevo campo
   //aqui tendria que se un sabe
   var  frmtt= mongoose.model(namess);
  
   frmtt.create(req.body.estructura
       , function(err, todo3) {
       if (err){       res.status(500).send(err.message)    }
  
       if(req.body.tipo==='proceso')
       {//crea trayectoria

        formulariotrayectoria.create({
              idempresa		:  req.body.trayectoria.idempresa,
              idorden	: todo3._id,
              usuariocreador		: req.body.trayectoria.usuariocreador,
                email:req.body.trayectoria.email,
                minutos		:0,
                dias:0,
                horas:0,
                segundos:0,
              tipocreacionorden		:req.body.trayectoria.tipocreacionorden,
              nombre		:req.body.trayectoria.nombre,
              idform		: req.body.trayectoria.idform,
              tipoform	:req.body.trayectoria.tipoform,
              tipo2form	:req.body.trayectoria.tipo2form,
              ejecuta: req.body.trayectoria.ejecuta,
              categoriaform	: req.body.trayectoria.categoriaform,
              salioorden:req.body.trayectoria.salioorden,
              idactividad		: req.body.trayectoria.idactividad,
              estadoorden: req.body.trayectoria.estadoorden,
              actoractividad		:req.body.trayectoria.actoractividad,
              claseactividad		: req.body.trayectoria.claseactividad,
              nombreactividad		: req.body.trayectoria.nombreactividad,
              tipoactividad		: req.body.trayectoria.tipoactividad,
              etapaactividad		:req.body.trayectoria.etapaactividad,
              idaccion		: req.body.trayectoria.idaccion,
              tipoaccion		: req.body.trayectoria.tipoaccion,
              subtipoaccion		: req.body.trayectoria.subtipoaccion,
              nombreaccion		: req.body.trayectoria.nombreaccion,
              estadoaccion		: req.body.trayectoria.estadoaccion,
              actividadsiguienteaccion		:  req.body.trayectoria.actividadsiguienteaccion
            }  , function(err, todo330) {
                if (err){  console.log(err.message);    res.status(500).send(err.message)    }
                res.json(todo330);
               });
       }
       else
       {
        res.json(todo3);
       }
   
       });
 }
//FIN GRABA TODO BIENNNNNNNNN--------------------------------------------------


                                           }
                                    
                                    });
                                 }

                               }
                         














                                
                  

        }
    });



}}}
}






exports.creaFrmmovil2s = function(req, res, next){
   

    Bitacora.create(req.body.bitacora);

if(req.params.recordID!=='crea')
{ console.log(req.body)
    Frmmovil.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) {  res.send(err);  }
        else
        {   todo.idempresa       	=	req.body.idempresa        	||	todo.idempresa;   
            todo.categoria        	=	req.body.categoria        	||	todo.categoria        	;
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.tipo    	=	req.body.tipo    	||	todo.tipo    	;
            todo.publico    	=	req.body.publico    	||	todo.publico    	;
            todo.tipo2    	=	req.body.tipo2    	||	todo.tipo2    	;
            todo.ejecuta    	=	req.body.ejecuta    	||	todo.ejecuta    	;
            todo.foto    	=	req.body.foto    	||	todo.foto    	;
            todo.geoposicion    	=	req.body.geoposicion      	;
           
       //     todo.idformdetalle   		 ={id:req.body.idformdetalle.id,nombre:req.body.idformdetalle.nombre   }   	;

            todo.estado 	=	req.body.estado 	||	todo.estado 	;
            todo.usuarioup=req.body.bitacora.email;
            
            
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
              
                res.json(todo);
            });
        }
    });

}
else{
   
    Frmmovil.find({ categoria        	: req.body.categoria        	,
        nombre        	: req.body.nombre        	
      
        
         },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {    res.status(500).send('Ya existe un formulario movil con este nombre'); }
        else
        {   

            if(req.body.idpapa)
            {
                Frmmovil.create({ 
                    idempresa      	: req.body.idempresa     	,
                    tipo        	: req.body.tipo        	,
                    tipo2        	: req.body.tipo2        	,
                    publico        	: req.body.publico        	,
                    idpapa        	: req.body.idpapa        	,
                    ejecuta        	: req.body.ejecuta        	,
                    categoria        	: req.body.categoria        	,
                    nombre        	: req.body.nombre        	,
                    foto    	: req.body.foto    	,
                //    idformdetalle:   req.body.idformdetalle,
                    estado 	: req.body.estado 	,
                    geoposicion :   req.body.geoposicion,
                    usuarionew:req.body.bitacora.email
            }
                    , function(err, todo) {
                    if (err){ 
                    
                        res.status(500).send(err.message)    }
                
                    res.json(todo);

                
                    

                });

            }
            else
            {
                Frmmovil.create({ 
                    idempresa      	: req.body.idempresa     	,
                    tipo        	: req.body.tipo        	,
                    tipo2        	: req.body.tipo2        	,
                    categoria        	: req.body.categoria        	,
                    nombre        	: req.body.nombre        	,
                    publico        	: req.body.publico        	,
                    ejecuta        	: req.body.ejecuta        	,
                    foto    	: req.body.foto    	,
              //      idformdetalle:   req.body.idformdetalle,
                    geoposicion :   req.body.geoposicion,
                    estado 	: req.body.estado 	,
                    usuarionew:req.body.bitacora.email
            }
                    , function(err, todo) {
                    if (err){ 
                    
                        res.status(500).send(err.message)    }
                
                    res.json(todo);

                
                    

                });

            }
                
    }});
}

}



