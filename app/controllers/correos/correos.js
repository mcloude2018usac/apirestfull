var kardex = require('../../models/asociadoventa/kardexcorreos');
var Bitacora = require('../../models/bitacora');
var Frmmovil = require('../../models/frmmovil');
var Frmmovild = require('../../models/frmmovild');

function stringToObject(JSONString) {
    var jsonObject = JSON.parse(JSONString);
    return jsonObject;
}

function dadatosformulariogruposuma(namess,filtro,idempresa,namess2,filtrogrupo,filtrosuma,limitx,sortx)
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
                                        { $limit: limitx},
                                        {   $match: filtro},
                                                          {
                                                           
                                                                "$group" : filtrogrupo
                                                            }, 
                                                            { 
                                                                "$project" : filtrosuma
                                                            },
                                                            { $sort : sortx }
                                    ]).exec(function(err, todos2) {
                                        if (err){ console.log(err);  res.send(err); }

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
          case 'Componente': 
          if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
          else{cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
          if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
          {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
          }
          else
          {
             
              cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
          }
           break;

           
           case 'Visualizar query': 
           if(todos[i].name==id2){if(todos[i].blike=='false') {cadxx='"' +id2 + '":"' +id3 + '"' } 
           else{cadxx='"' +id2 + '":: { "$regex" : "' +id3 + '", "$options" : "i" } ' } }
           if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
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
function dadatosformulariofinal  (namess,filtro,idempresa,namess2,orden)
{
    return new Promise(resolve => { 

        Frmmovild.find({idmovil:namess,idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
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

                                    if(orden==={})
                                    {  frmtt.find(filtro).exec(function(err, todos2) {
                                        if (err){  res.send(err); }

                                        resolve(todos2); 
                                       // res.json(todos2);

                                    });

                                    }
                                    else
                                    {
                                        frmtt.find(filtro).sort(orden).exec(function(err, todos2) {
                                            if (err){  res.send(err); }
    
                                            resolve(todos2); 
                                           // res.json(todos2);
    
                                        });
                                    }

                                  
                                }


    });
        
                                    
                                   
                             
                
        
    

                                });

}

exports.getCorreos = async function(req, res, next){
    if(req.params.id3)
    { 
        if(req.params.id2==='reporteminimas')
        { 

            (async () => {
            producto = await dadatosformulariofinal('5fc01bbba8d0a14888774579',{ },req.params.id3,'5fc01bbba8d0a14888774579',{fechadevencimiento:1}); 
            var datat= []
            var regt0=[];   
           
            var datafinal=[]

            regt0.push('CATEGORIA')
            regt0.push('CODIGO PRODUCTO')
            regt0.push('NOMBRE PRODUCTO')
            regt0.push('UNIDAD DE MEDIDA')
            regt0.push('EXISTENCIA ACTUAL')
            regt0.push('EXISTENCIA MINIMA')
            regt0.push('ESTADO')
            regt0.push('DEFERENCIA EXISTENCIA MINIMA')
            datafinal.push(regt0)
            
            for(var i = 0; i < producto.length;i++){
                var regt=[]; 
                var actual=Number(producto[i].existenciaactual)
                var min=Number(producto[i].existenciaminima)

                if(req.params.id==='0')
                {}
                else
                {
                    min=Number(req.params.id)
                }
              
          
                if(actual<=min)
                {
                    var ff3=new Date(producto[i].fechadevencimiento)
                    var ff4=new Date()
                    
        
                    var diffDays = parseInt((ff3 - ff4) / (1000 * 60 * 60 * 24)); //gives day difference
                    datat.push({categoria:producto[i].categoria,
                        codigo:producto[i].codigoarticulo,
                        nombre:producto[i].descripciondelarticulo,
                        unidad:producto[i].unidaddemedida,
                        actual:producto[i].existenciaactual,
                        minima:producto[i].existenciaminima,
                        estado:producto[i].estado,
                        diasvencimiento:diffDays,
                        vencimiento:producto[i].fechadevencimiento,
                        totalminima:Number(producto[i].existenciaactual)-Number(producto[i].existenciaminima)
                    
                    })

                    regt.push(producto[i].categoria)
            regt.push(producto[i].codigoarticulo)
            regt.push(producto[i].descripciondelarticulo)
            regt.push(producto[i].unidaddemedida)
            regt.push(producto[i].existenciaactual)
            regt.push(producto[i].existenciaminima)
            regt.push(producto[i].estado)
            regt.push(Number(producto[i].existenciaactual)-Number(producto[i].existenciaminima))
            datafinal.push(regt)


                }
             
            }
     
            res.json({d1:datat,d2:datafinal});   
        })();


        }
        else
        {
            if(req.params.id2==='reportegerencia')
            { 
                (async () => {


                    var fechat=req.params.id.split('°')
               
           
var filtro={createdAt:{"$gte": new Date(fechat[0]+'T00:00:00.000Z'),"$lt": new Date(fechat[1] +'T24:00:00.000Z')} };




var grupo= {
                    "_id" : {         fecha:{$dateToString: { format: "%m-%Y", date: "$createdAt" }}},
                    subtotal: { $sum: "$subtotal"  },"cantidad" : { "$sum" : "$cantidad" }
                }
var project= {"fecha" : "$_id.fecha","cantidad" : "$cantidad",       "subtotal" : "$subtotal",   "_id" :0  }


                h1 = await dadatosformulariogruposuma('5fc0308c2fc3552d10147947',filtro,req.params.id3,'5fc0308c2fc3552d10147947', grupo ,project,500,  { fecha : -1 } ); 
                //fecha cantidaddespachada subtotal

var grupo= {
                    "_id" : {         fecha:{$dateToString: { format: "%m-%Y", date: "$createdAt" }}},
                    subtotal: { $sum: "$subtotal"  },"cantidaddespachada" : { "$sum" : "$cantidaddespachada" }
                }
var project={"fecha" : "$_id.fecha","cantidaddespachada" : "$cantidaddespachada",       "subtotal" : "$subtotal",   "_id" :0  }
            

                requi1 = await dadatosformulariogruposuma('5fc03c79ab0f6448b877eb5c',filtro,req.params.id3,'5fc03c79ab0f6448b877eb5cs', grupo ,project,500,  { fecha : -1 } ); 


                

var grupo= {
    "_id" : {         articulo:"$articulo"},
    subtotal: { $sum: "$subtotal"  },"cantidad" : { "$sum" : "$cantidad" }
}
var project= {"articulo" : "$_id.articulo","cantidad" : "$cantidad",       "subtotal" : "$subtotal",   "_id" :0  }


h1a = await dadatosformulariogruposuma('5fc0308c2fc3552d10147947',filtro,req.params.id3,'5fc0308c2fc3552d10147947', grupo ,project,21,  { cantidad : -1 } ); 
//fecha cantidaddespachada subtotal

var grupo= {
    "_id" : {          articulo:"$articulo"},
    subtotal: { $sum: "$subtotal"  },"cantidaddespachada" : { "$sum" : "$cantidaddespachada" }
}
var project={"articulo" : "$_id.articulo","cantidaddespachada" : "$cantidaddespachada",       "subtotal" : "$subtotal",   "_id" :0  }


requi1b = await dadatosformulariogruposuma('5fc03c79ab0f6448b877eb5c',filtro,req.params.id3,'5fc03c79ab0f6448b877eb5cs', grupo ,project,21,  { cantidaddespachada : -1 } ); 



                var myData1 = [];
                var myData2 = [];
                var myData3 = [];
                for(var i = 0; i < h1.length;i++){
                    myData1.push(h1[i].fecha)
                    myData2.push(h1[i].cantidad)
                    myData3.push(h1[i].subtotal)
                }

           
             
                var myData1b = [];
                var myData2b = [];
                var myData3b = [];
                for(var i = 0; i < requi1.length;i++){
                    myData1b.push(requi1[i].fecha)
                    myData2b.push(requi1[i].cantidaddespachada)
                    myData3b.push(requi1[i].subtotal)
                }

           
    
                
                var myData1c = [];
                var myData2c = [];
                var myData3c = [];
                for(var i = 0; i < h1a.length;i++){
                    myData1c.push(h1a[i].articulo.split('<br>')[2].split(':')[1].trim() )
                    myData2c.push(h1a[i].cantidad)
                    myData3c.push(h1a[i].subtotal)
                }

           
             
                var myData1d = [];
                var myData2d = [];
                var myData3d = [];
                for(var i = 0; i < requi1b.length;i++){
                    myData1d.push(requi1b[i].articulo.split('<br>')[2].split(':')[1].trim() )
                    myData2d.push(requi1b[i].cantidaddespachada)
                    myData3d.push(requi1b[i].subtotal)
                }


          
              
    res.json({vgraf1:{labels:myData1,
    data:[{    label: 'Cantidad',  data: myData2, backgroundColor: '#F55555', borderColor: '#F55555',borderWidth: 1},
    { label: 'Monto', data: myData3,  backgroundColor: '#7367F0',  borderColor: '#7367F0', borderWidth: 1}]},
      
    vgraf2:{labels:myData1b,
    data:[{    label: 'Cantidad',   data: myData2b, backgroundColor: '#F55555',  borderColor: '#F55555',borderWidth: 1},{    label: 'Monto',  data: myData3b, backgroundColor: '#7367F0',  borderColor: '#7367F0', borderWidth: 1}]}

    ,vgraf1a:{labels:myData1c,
        data:[{    label: 'Cantidad',  data: myData2c, backgroundColor: '#F55555', borderColor: '#F55555',borderWidth: 1},
        { label: 'Monto', data: myData3c,  backgroundColor: '#7367F0',  borderColor: '#7367F0', borderWidth: 1}]},
          
        vgraf2a:{labels:myData1d,
        data:[{    label: 'Cantidad',   data: myData2d, backgroundColor: '#F55555',  borderColor: '#F55555',borderWidth: 1},{    label: 'Monto',  data: myData3d, backgroundColor: '#7367F0',  borderColor: '#7367F0', borderWidth: 1}]}
});
                
            })();
            }
            else
            {
        if(req.params.id2==='reportecaduca')
        { 
            (async () => {
            producto = await dadatosformulariofinal('5fc01bbba8d0a14888774579',{ },req.params.id3,'5fc01bbba8d0a14888774579',{fechadevencimiento:1}); 

            var datat= []
            var regt0=[];   
            var datafinal=[]
        

            regt0.push('CATEGORIA')
            regt0.push('CODIGO PRODUCTO')
            regt0.push('NOMBRE PRODUCTO')
            regt0.push('UNIDAD DE MEDIDA')
            regt0.push('EXISTENCIA ACTUAL')
            regt0.push('EXISTENCIA MINIMA')
            regt0.push('ESTADO')
            regt0.push('FECHA CADUCIDAD')
            regt0.push('FECHA VENCIMIENTO')
            datafinal.push(regt0)
            
            regt0.push('DIAS VENCIMIENTO')

            for(var i = 0; i < producto.length;i++){
                var regt=[]; 
                var ff3=new Date(producto[i].fechadevencimiento)
                var ff4=new Date()

                if(req.params.id==='' || req.params.id===undefined)
                {
                   
                }
                else
                {
                    ff4=new Date(req.params.id)
                 
                }
                

    
                var diffDays = parseInt((ff3 - ff4) / (1000 * 60 * 60 * 24)); //gives day difference

                if(diffDays<0)
                {
                
                    datat.push({categoria:producto[i].categoria,
                        codigo:producto[i].codigoarticulo,
                        nombre:producto[i].descripciondelarticulo,
                        unidad:producto[i].unidaddemedida,
                        actual:producto[i].existenciaactual,
                        minima:producto[i].existenciaminima,
                        estado:producto[i].estado,
                        fechaactual:ff4,
                        vencimiento:producto[i].fechadevencimiento,
                        diasvencimiento:(diffDays*-1),
                        totalminima:Number(producto[i].existenciaactual)-Number(producto[i].existenciaminima)
                    
                    })

                    regt.push(producto[i].categoria)
                    regt.push(producto[i].codigoarticulo)
                    regt.push(producto[i].descripciondelarticulo)
                    regt.push(producto[i].unidaddemedida)
                    regt.push(producto[i].existenciaactual)
                    regt.push(producto[i].existenciaminima)
                    regt.push(producto[i].estado)
                    regt.push(ff4)
                    regt.push(producto[i].fechadevencimiento)
                    regt.push((diffDays*-1))
                    datafinal.push(regt)



                }
                
             
            }
          
            res.json({d1:datat,d2:datafinal});  
            
        })();
        }
        else
        {
        if(req.params.id2==='kardex1')
        { 
            kardex.find({producto:req.params.id,idempresa :req.params.id3}).sort({_id:-1}).exec(function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {    res.json(todos);   }
                else
                {  res.status(500).send('NO EXISTE REGISTRO');      }
                
            });
        }
        else
        {
            console.log({nodockardex:req.params.id,idempresa :req.params.id3})
            kardex.find({nodockardex:req.params.id,idempresa :req.params.id3}).sort({_id:-1}).exec(function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {    res.json(todos);   }
                else
                {  res.status(500).send('NO EXISTE REGISTRO1');      }
                
            });

        }     }}}
      
    }
   
}

exports.creacorreos2s = function(req, res, next){

    if(req.body.operacion==='actualizalineakardex')
    { 
        kardex.findById({ _id: req.params.recordID }, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {   todo.nodockardex        	=	req.body.nodockardex        	||	todo.nodockardex        	;
                todo.estadoprint        	=	req.body.estadoprint        	     	;
                todo.nodockardexlinea        	=	req.body.nodockardexlinea        	    	;
                
               
    
                todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.json(todo);
                });
            }
        });
    
    }
    else{

        if(req.body.operacion==='actualizalineakardexanula')
        { 
            kardex.findById({ _id: req.params.recordID }, function (err, todo)  {
                if (err) {  res.send(err);  }
                else
                {   
                    todo.tarjetasanuladas		=todo.tarjetasanuladas + ' ,' + todo.nodockardex
                    todo.nodockardex        	=	req.body.nodockardex        	||	todo.nodockardex        	;
                    todo.estadoprint        	=	req.body.estadoprint        	      	;
                    todo.nodockardexlinea        	=	req.body.nodockardexlinea        	       	;
 

                    todo.anulacion        	=	todo.anulacion + ' <br>'+ req.body.anulacion ;       	;
                    
                    
                   
        
                    todo.save(function (err, todo){
                        if (err)     {  res.status(500).send(err.message)   }
                        res.json(todo);
                    });
                }
            });
        
        }
        else{
    
           
         
        }
       
     
    }

}