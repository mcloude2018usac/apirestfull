
var Frmmovil = require('../models/frmmovil');
var Frmmovild = require('../models/frmmovild');
var Contador = require('../models/contador');
var conecta1 = 'mssql://sa:$ertobar@192.168.34.5/stbd'
var conecta2 = 'mssql://sa:$ertobar@192.168.34.5/cielomarbd'
var conecta3 = 'mssql://sa:$ertobar@192.168.34.5/camposbd'
var sql = require("mssql")
var sql2 = require("mssql")
var sql3 = require("mssql")


const odbc = require('odbc');

const connectionConfig = {   connectionString: 'DSN=OTRO',    connectionTimeout: 10,    loginTimeout: 10,}



const { getGaleriaimg } = require('./galeriaimg');

function  ejecutaaccess  (cad)
{

    return new Promise(resolve => {
const connection = odbc.connect(connectionConfig, (error, connection) => {
  connection.query(cad, (error, result) => {
      if (error) { console.error(error) }

      
        resolve({estado:'exito',datat:result}); 


  });
});
});
}

function daconectasql(tipo) {
    var tt='';
    switch(tipo) {
        case '605a23446886480f70f6ec3f':  tt=conecta1;   break;//importaciones
 
        default:
          // code block
      }
        return tt;
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
   case 'Documento':   tt='String';   break;
   case 'Componente':   tt='String';   break;
   case 'Visualizar query':   tt='String';   break;
   case 'Lista de valores remoto':   tt='String';   break;
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
           case 'Documento':   tt='documento';   break;
           case 'Componente':   tt='componente';   break;
           case 'Visualizar query':   tt='verquery';   break;
           case 'Lista de valores remoto':   tt='selectremoto';   break;
            default:
              // code block
          }
            return tt;
          }





    function ejecutasql  (cad,sqlconecta)
    {
    //var  ejecutasql= async function(cad,sqlconecta) {
       
        return new Promise(resolve => {
        
          sql.connect(sqlconecta, function (err) {if (err) console.log(err);               
            var request = new sql.Request();
             request.query(cad, function (err, recordset) {             
                 if (err) console.log(err)
          
              //   request.end();
              sql.close();
                 resolve({estado:'exito',datat:recordset})
              
          
         });



         
        });
      });
    }

    function ejecutasql2  (cad,sqlconecta)
    {
    //var  ejecutasql= async function(cad,sqlconecta) {
       
        return new Promise(resolve => {
        
          sql2.connect(sqlconecta, function (err) {if (err) console.log(err);               
            var request = new sql2.Request();
             request.query(cad, function (err, recordset) {             
                 if (err) console.log(err)
          
                 sql.close();
                 resolve({estado:'exito',datat:recordset})
              
          
         });



         
        });
      });
    }

    function ejecutasql3  (cad,sqlconecta)
    {
    //var  ejecutasql= async function(cad,sqlconecta) {
       
        return new Promise(resolve => {
        
          sql3.connect(sqlconecta, function (err) {if (err) console.log(err);               
            var request = new sql3.Request();
             request.query(cad, function (err, recordset) {             
                 if (err) console.log(err)
                 sql.close();
         
                 resolve({estado:'exito',datat:recordset})
              
          
         });



         
        });
      });
    }

      


  function stringToObject(JSONString) {
    var jsonObject = JSON.parse(JSONString);
    return jsonObject;
}
function dafiltrocad(todos,id2,id3,norequerido) {
    var cad=''
    var cadxx=''
    var norequerido2=norequerido;
    if(norequerido2===undefined)
    {
        norequerido2=''
    }


    for(var i = 0; i < todos.length;i++){
                                      
     
        switch(todos[i].type) {
            case 'Rango':  
            if(todos[i].name==id2){cadxx='"' +id2 + '":' +id3 + ''  }
            if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
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
             if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
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
              if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
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
              if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
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
              if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
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
               if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
               {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
               }
               else
               {
                  
                   cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
               }
                break;
                case 'Documento': 
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
         case 'Alfanumerico': 
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
        if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
        {cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '"},';
        }
        else
        {
            cad=cad+'"'+todos[i].name+'":{"type":"'+ datipo(todos[i].type) + '","required":"' + todos[i].required +'"},';
        }
        break;
        case 'Moneda':  
        if(todos[i].name==id2){cadxx='"' +id2 + '":' +id3 + ''  }
        if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
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
   
        if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
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
        if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
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
          if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
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
            if(todos[i].required=='false' || norequerido2.indexOf(todos[i].name+'°')>=0)
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


var getImagesruta= function(op){
    if((op).indexOf('/')>=0)
    {

        var aar=op.split('/');
        return aar[3]
    }
    else
    {
        return ''
    }
}



var dahorautf= function(data) {
    let re = '';
    var fecha= new Date(data)
var datatt= fecha.toUTCString().split(' ');
var data2=datatt[4].split(':')
if(Number(data2[0]>12))
{
    re=data2[0] + ':' + data2[1] + ' PM'
}
else
{
    re=data2[0] + ':' + data2[1] + ' AM'
}


 
  // DD/MM/YYYY hh:mm A
  return re;

 }

var dahora= function(data) {
    let re = '';
    const aa = data.split('T');
    if (aa[0]) {
    const bb = (aa[1]).split(':');
    if (bb[0]) {
    re = bb[0] + ':' + bb[1];
   

      }


    }
  // DD/MM/YYYY hh:mm A
  return re;

 }

 var dafechatodate = function(ff) {
    var fecha= new Date(ff).toISOString().substr(0,10);   
    var  ffa=fecha.split('-')
  
  return ffa[2] + '-' + ffa[1] + '-' + ffa[0];
};


  var dafecha= function(data) {
  let  re = '';
  if (data) {
    re = data.substr(0, 10);
    const aa = re.split('-');
    if (aa[0]) {
    re = aa[2] + '-' + aa[1] + '-' + aa[0];
    }
  }
   return re;
  }

 var  dafechacompleta= function(data) {
    let  re = '';

      const aa = data.split('T');
      if (aa[0]) {
      re = this.dafecha(aa[0]) + ' ' + this.dahora(data);
      }
     return re;
    }

    var  daimagen= function(data) {
        let  re = '';
       var fecha=data
          const aa = fecha
          re = aa
          
         return re;
        }
    
 var  dafechastring= function(data) {
    let  re = '';
   var fecha= new Date(data)
      const aa = fecha.toISOString().substr(0,10)
      re = aa
      
     return re;
    }
    var cuantasVecesAparece= function(cadena, caracter){
        var indices = [];
        for(var i = 0; i < cadena.length; i++) {
          if (cadena[i].toLowerCase() === caracter) indices.push(i);
        }
        return indices.length;
      }
      function formatNumber(num) {
        return 'Q.' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }
      
      function numberWithCommas(x) {
      
      
        return formatNumber(Number(x))
      }


      var procesahtmlrecordproceso = function(objetox,todos2,sicampovalida)
      {
          var keys = Object.keys(objetox);
          var datafinal=[]
          var cad=''
          var cad2=''
          var cad3=''
              for(var i = 0; i < todos2.length;i++){
              //console.log(todos2[i])
                
                   
             for (let ii = 0; ii < keys.length; ii++) {
                 var arreglo=(objetox[keys[ii]] ).split('°')
  
                
                 
                 var valorxx=todos2[i][keys[ii]]
                 var validacampo=arreglo[2]
                 if(sicampovalida==='si')
                 {
                  validacampo='true'
                 }
  
                 if(valorxx===undefined)
                 {
                     valorxx=''
                 }
               if(validacampo==='true')
               {
                 if(arreglo[1]==='Fecha')
                 {
                     cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + dafechastring(valorxx) + '<br>'
                 }
                 else
                 {
                     if(arreglo[1]==='Fecha y Hora')
                     {
                         cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + dafechacompleta(valorxx) + '<br>'
                     }
                     else
                     {
                         if(arreglo[1]==='Hora')
                     {
                         cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + dahora(valorxx) + '<br>'
                     }
                     else
                     {
                     if(arreglo[1]==='Lista de valores')
                     {
                         if (valorxx.indexOf('°') > 0) {
                             cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + getKeyssrthtml(valorxx) + ''
                         }
                         else
                         {
                             if (valorxx.indexOf('¬') > 0) {
  
                               
                                 cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + valorxx.split('¬')[0]  + '<br>'
                             }
                             else
                             {
                                 cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + valorxx + '<br>'
                             }
  
                         }
  
                        
                     }
                     else
                     {
                         if(arreglo[1]==='Moneda')
                         {
                             cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + numberWithCommas(valorxx) + '<br>'
                         }
                         else
                         {
                             if(arreglo[1]==='Imagen')
                             {
                                 /*
                                 keyst.push('<strong>' +  this.getKeys3(this.cmpver, aa,0)  + '</strong> :  <img src="' + this.apifoto +  this.getKeys2(data[aa]) + '"   class="circle-pic"  height="50 px" width="50 px"> '  );
                                 */
                               //  cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + //daimagen(todos2[i][keys[ii]]) + '<br>'
  
                             }
                             else
                             {
                                 cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + valorxx + '<br>'
                             }
                             
                         }
                         
                     }}}
                 }
             } 
                    
                                 
                         
                     
                 }
  
                 /*
                  cadurs3 = cadurs3 + ' <a href="https://www.google.com/maps/search/?api=1&query=' +
  data[aa].replace('¬', ',') + '" target="_blank">https://www.google.com/maps/search/?api=1&query=' + data[aa].replace('¬', ',')
  + '</a> ' ;  break;
                 */
              
                if(sicampovalida==='si')
                {
                  datafinal.push({item:todos2[i],_id:todos2[i]._id,nombre2:'tico',nombre:cad,item:todos2[i],usuario:''})
                 cad='';
                }
                else{
                    var comt1=''
                    var comt2=''
                    var comt=''
                  if(todos2[i].comentariocerrado!=='' && todos2[i].comentariocerrado!==undefined)
                  {
                      comt='<br> Comentario cerrado: ' + todos2[i].comentariocerrado
                  }
                  if(todos2[i].comentarioanulado!=='' && todos2[i].comentarioanulado!==undefined)
                  {
                      comt2='<br> Comentario anulado: ' + todos2[i].comentarioanulado
                  }
   


                  
                if(todos2[i].estadointerno ==='activo')
                {
                    datafinal.push({item:todos2[i],_id:todos2[i]._id,nombre2:'tico',nombre:cad+ '<div style="font-size: 10px;text-transform: capitalize;">Crea: [' +
                     dafechastring(todos2[i]['createdAt'])+','  + dausuariobita(todos2[i]['usuarionew'],todos2[i]['usuarionew2']) + ']<br> Actualiza: [' +dafechastring(todos2[i]['updatedAt']) +',' +  
                      dausuariobita(todos2[i]['usuarioup'],todos2[i]['usuarioup2']) + '] <br> </div><div style="font-size: 14px;text-transform: capitalize;color:blue;">Estado interno: '+ todos2[i].estadointerno + comt + comt2 +'</div>',item:todos2[i],usuario:''})
                }
                else
                {
                    datafinal.push({item:todos2[i],_id:todos2[i]._id,nombre2:'tico',nombre:cad+ '<div style="font-size: 10px;text-transform: capitalize;">Crea: [' + 
                    dafechastring(todos2[i]['createdAt'])+',' + 
                     dausuariobita(todos2[i]['usuarionew'],todos2[i]['usuarionew2'])+ ']<br> Actualiza: [' +dafechastring(todos2[i]['updatedAt']) +',' +  
                     dausuariobita(todos2[i]['usuarioup'],todos2[i]['usuarioup2']) +  '] <br> </div><div style="font-size: 14px;text-transform: capitalize;color:red;">Estado interno: '+ todos2[i].estadointerno + comt + comt2 +'</div>',item:todos2[i],usuario:''}) 
                }
                 cad='';
  
                }
  
  
                   
             }
         return datafinal;
      }
  
      var dausuariobita=function(correo,usuario)
      {
          if(usuario!==undefined)
          {
            return usuario +' (' +correo +') ' 
          }
          else
          {
            return  correo 
          }
          
      }
    var procesahtmlrecord = function(objetox,todos2,sicampovalida)
    {
        var keys = Object.keys(objetox);
        var datafinal=[]
        var cad=''
        var cad2=''
        var cad3=''
            for(var i = 0; i < todos2.length;i++){
            //console.log(todos2[i])
              
                 
           for (let ii = 0; ii < keys.length; ii++) {
               var arreglo=(objetox[keys[ii]] ).split('°')

              
               
               var valorxx=todos2[i][keys[ii]]
               var validacampo=arreglo[2]
               if(sicampovalida==='si')
               {
                validacampo='true'
               }

               if(valorxx===undefined)
               {
                   valorxx=''
               }
             if(validacampo==='true')
             {
               if(arreglo[1]==='Fecha')
               {
                   cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + dafechastring(valorxx) + '<br>'
               }
               else
               {
                   if(arreglo[1]==='Fecha y Hora')
                   {
                       cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + dafechacompleta(valorxx) + '<br>'
                   }
                   else
                   {
                       if(arreglo[1]==='Hora')
                   {
                       cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + dahorautf(valorxx) + '<br>'
                   }
                   else
                   {
                   if(arreglo[1]==='Lista de valores')
                   {
                       if (valorxx.indexOf('°') > 0) {
                           cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + getKeyssrthtml(valorxx) + ''
                       }
                       else
                       {
                           if (valorxx.indexOf('¬') > 0) {

                             
                               cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + valorxx.split('¬')[0]  + '<br>'
                           }
                           else
                           {
                               cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + valorxx + '<br>'
                           }

                       }

                      
                   }
                   else
                   {
                       if(arreglo[1]==='Moneda')
                       {
                           cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + numberWithCommas(valorxx) + '<br>'
                       }
                       else
                       {
                           if(arreglo[1]==='Imagen')
                           {
                               /*
                               keyst.push('<strong>' +  this.getKeys3(this.cmpver, aa,0)  + '</strong> :  <img src="' + this.apifoto +  this.getKeys2(data[aa]) + '"   class="circle-pic"  height="50 px" width="50 px"> '  );
                               */
                             //  cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + //daimagen(todos2[i][keys[ii]]) + '<br>'

                           }
                           else
                           {
                               cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + valorxx + '<br>'
                           }
                           
                       }
                       
                   }}}
               }
           } 
                  
                               
                       
                   
               }

               /*
                cadurs3 = cadurs3 + ' <a href="https://www.google.com/maps/search/?api=1&query=' +
data[aa].replace('¬', ',') + '" target="_blank">https://www.google.com/maps/search/?api=1&query=' + data[aa].replace('¬', ',')
+ '</a> ' ;  break;
               */
var geopp=''
if(todos2[i].geoposicionxxx)
{
    geopp= '<br> <a href="https://www.google.com/maps/search/?api=1&query=' +
    todos2[i].geoposicionxxx.replace('¬', ',') + '" target="_blank">https://www.google.com/maps/search/?api=1&query=' + todos2[i].geoposicionxxx.replace('¬', ',')
    + '</a> ' ; 
}

              if(sicampovalida==='si')
              {
                datafinal.push({_id:todos2[i]._id,nombre2:'tico',nombre:cad,item:todos2[i],usuario:''})
               cad='';
              }
              else{
                  var comt1=''
                  var comt2=''
                  var comt=''
                if(todos2[i].comentariocerrado!=='' && todos2[i].comentariocerrado!==undefined)
                {
                    comt='<br> Comentario cerrado: ' + todos2[i].comentariocerrado
                }
                if(todos2[i].comentarioanulado!=='' && todos2[i].comentarioanulado!==undefined)
                {
                    comt2='<br> Comentario anulado: ' + todos2[i].comentarioanulado
                }
  

                if(todos2[i].estadointerno ==='activo')
                {
                    datafinal.push({_id:todos2[i]._id,nombre2:'tico',nombre:cad+ '<div style="font-size: 10px;text-transform: capitalize;">Crea: [' + dafechastring(todos2[i]['createdAt'])+',' 
                    + dausuariobita(todos2[i]['usuarionew'],todos2[i]['usuarionew2']) +  ']<br> Actualiza: [' +dafechastring(todos2[i]['updatedAt']) +',' +   
                    dausuariobita(todos2[i]['usuarioup'],todos2[i]['usuarioup2']) + '] <br></div><div style="font-size: 14px;text-transform: capitalize;color:blue;"> Estado interno: '+ todos2[i].estadointerno + comt + comt2 + geopp + '</div>',item:todos2[i],usuario:''})

                }
                else
                {
                    datafinal.push({_id:todos2[i]._id,nombre2:'tico',nombre:cad+ '<div style="font-size: 10px;text-transform: capitalize;">Crea: [' + dafechastring(todos2[i]['createdAt'])+',' 
                    + dausuariobita(todos2[i]['usuarionew'],todos2[i]['usuarionew2']) +  ']<br> Actualiza: [' +dafechastring(todos2[i]['updatedAt']) +',' +  
                    dausuariobita(todos2[i]['usuarioup'],todos2[i]['usuarioup2']) + '] <br></div><div style="font-size: 14px;text-transform: capitalize;color:red;"> Estado interno: '+ todos2[i].estadointerno + comt + comt2 + geopp+'</div>',item:todos2[i],usuario:''})

                }



               cad='';

              }


                 
           }
       return datafinal;
    }

    
    var procesaexcelrecord = function(objetox,todos2,sicampovalida)
    {
        var keys = Object.keys(objetox);
        var datafinal=[]
        var cad=''
        var cad2=''
        var cad3=''
            for(var i = 0; i < todos2.length;i++){
            //console.log(todos2[i])
              
                 
           for (let ii = 0; ii < keys.length; ii++) {
               var arreglo=(objetox[keys[ii]] ).split('°')

              
               
               var valorxx=todos2[i][keys[ii]]
               var validacampo=arreglo[2]
               if(sicampovalida==='si')
               {
                validacampo='true'
               }

               if(valorxx===undefined)
               {
                   valorxx=''
               }
             if(validacampo==='true')
             {
               if(arreglo[1]==='Fecha')
               {
                   cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + dafechastring(valorxx) + '<br>'
               }
               else
               {
                   if(arreglo[1]==='Fecha y Hora')
                   {
                       cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + dafechacompleta(valorxx) + '<br>'
                   }
                   else
                   {
                       if(arreglo[1]==='Hora')
                   {
                       cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + dahorautf(valorxx) + '<br>'
                   }
                   else
                   {
                   if(arreglo[1]==='Lista de valores')
                   {
                       if (valorxx.indexOf('°') > 0) {
                           cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + getKeyssrthtml(valorxx) + ''
                       }
                       else
                       {
                           if (valorxx.indexOf('¬') > 0) {

                             
                               cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + valorxx.split('¬')[0]  + '<br>'
                           }
                           else
                           {
                               cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + valorxx + '<br>'
                           }

                       }

                      
                   }
                   else
                   {
                       if(arreglo[1]==='Moneda')
                       {
                           cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + valorxx + '<br>'
                       }
                       else
                       {
                           if(arreglo[1]==='Imagen')
                           {
                               /*
                               keyst.push('<strong>' +  this.getKeys3(this.cmpver, aa,0)  + '</strong> :  <img src="' + this.apifoto +  this.getKeys2(data[aa]) + '"   class="circle-pic"  height="50 px" width="50 px"> '  );
                               */
                             //  cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + //daimagen(todos2[i][keys[ii]]) + '<br>'

                           }
                           else
                           {
                               cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + valorxx + '<br>'
                           }
                           
                       }
                       
                   }}}
               }
           } 
                  
                               
                       
                   
               }

               /*
                cadurs3 = cadurs3 + ' <a href="https://www.google.com/maps/search/?api=1&query=' +
data[aa].replace('¬', ',') + '" target="_blank">https://www.google.com/maps/search/?api=1&query=' + data[aa].replace('¬', ',')
+ '</a> ' ;  break;
               */
            
              if(sicampovalida==='si')
              {
                datafinal.push({_id:todos2[i]._id,nombre2:'tico',nombre:cad,item:todos2[i],usuario:''})
               cad='';
              }
              else{
                  if(todos2[i].estadointerno ==='activo')
                  {
                    datafinal.push({_id:todos2[i]._id,nombre2:'tico',nombre:cad+ '<div style="font-size: 10px;text-transform: capitalize;">Crea: [' + dafechastring(todos2[i]['createdAt'])+',' + 
                    dausuariobita(todos2[i]['usuarionew'],todos2[i]['usuarionew2']) +  ']<br> Actualiza: [' +dafechastring(todos2[i]['updatedAt']) +',' 
                   + dausuariobita(todos2[i]['usuarioup'],todos2[i]['usuarioup2']) + '] <br></div> <div style="font-size: 14px;text-transform: capitalize;color:blue;">Estado interno: '+ todos2[i].estadointerno +'</div>',item:todos2[i],usuario:''})
                  }
                  else
                  {
                    datafinal.push({_id:todos2[i]._id,nombre2:'tico',nombre:cad+ '<div style="font-size: 10px;text-transform: capitalize;">Crea: [' + dafechastring(todos2[i]['createdAt'])+',' +
                     dausuariobita(todos2[i]['usuarionew'],todos2[i]['usuarionew2']) + ']<br> Actualiza: [' +dafechastring(todos2[i]['updatedAt']) +',' + 
                     dausuariobita(todos2[i]['usuarioup'],todos2[i]['usuarioup2']) + + '] <br></div> <div style="font-size: 14px;text-transform: capitalize;color:red;">Estado interno: '+ todos2[i].estadointerno +'</div>',item:todos2[i],usuario:''})
                  }
              
               cad='';

              }


                 
           }
       return datafinal;
    }
    var procesacsvrecord = function(objetox,todos2,sicampovalida)
    {
        var keys = Object.keys(objetox);
        var datafinal=[]
        var cad=''
        var cad2=''
        var cad3=''
            for(var i = 0; i < todos2.length;i++){
            //console.log(todos2[i])
              
            var regt={}; 
           for (let ii = 0; ii < keys.length; ii++) {
               var arreglo=(objetox[keys[ii]] ).split('°')

              
               
               var valorxx=todos2[i][keys[ii]]
               var validacampo=arreglo[2]
               if(sicampovalida==='si')
               {
                validacampo='true'
               }

               if(valorxx===undefined)
               {
                   valorxx=''
               }
          
               if(arreglo[1]==='Fecha')
               {
                regt[arreglo[0]]=  dafechastring(valorxx);
                  
               }
               else
               {
                   if(arreglo[1]==='Fecha y Hora')
                   {
                      
                       regt[arreglo[0]]=  dafechacompleta(valorxx) 
                   }
                   else
                   {
                       if(arreglo[1]==='Hora')
                   {
                      
                       regt[arreglo[0]]=   dahora(valorxx) 
                   }
                   else
                   {
                   if(arreglo[1]==='Lista de valores')
                   {
                       if (valorxx.indexOf('°') > 0) {
                        regt[arreglo[0]]= getKeyssrthtml(valorxx) 
                          
                       }
                       else
                       {
                           if (valorxx.indexOf('¬') > 0) {

                            regt[arreglo[0]]= valorxx.split('¬')[0] 
                              
                           }
                           else
                           {
                            regt[arreglo[0]]=valorxx
                              
                           }

                       }

                      
                   }
                   else
                   {

                    regt[arreglo[0]]= valorxx;
                       
                       
                   }}}
               }
           
                  
                               
                       
                   
               }

               /*
                cadurs3 = cadurs3 + ' <a href="https://www.google.com/maps/search/?api=1&query=' +
data[aa].replace('¬', ',') + '" target="_blank">https://www.google.com/maps/search/?api=1&query=' + data[aa].replace('¬', ',')
+ '</a> ' ;  break;
               */

              datafinal.push(regt)
           


                 
           }
       return datafinal;
    }

    var procesatablauirecord = function(objetox,todos2,sicampovalida)
    {
        var keys = Object.keys(objetox);
        var datafinal=[]
        var cad=''
        var cad2=''
        var cad3=''
            for(var i = 0; i < todos2.length;i++){
            //console.log(todos2[i])
            var regt0=[];   
            var regt=[]; 
           for (let ii = 0; ii < keys.length; ii++) {
               var arreglo=(objetox[keys[ii]] ).split('°')

              
               
               var valorxx=todos2[i][keys[ii]]
               var validacampo=arreglo[2]
               if(sicampovalida==='si')
               {
                validacampo='true'
               }

               if(valorxx===undefined)
               {
                   valorxx=''
               }
          
               if(arreglo[1]==='Fecha')
               {
                regt.push(dafechastring(valorxx));
                if(i===0){ regt0.push(arreglo[0])}
                  
               }
               else
               {
                   if(arreglo[1]==='Fecha y Hora')
                   {
                      
                    regt.push( dafechacompleta(valorxx) )
                    if(i===0){ regt0.push(arreglo[0])}
                   }
                   else
                   {
                       if(arreglo[1]==='Hora')
                   {
                      
                    regt.push( dahora(valorxx) )
                    if(i===0){ regt0.push(arreglo[0])}
                   }
                   else
                   {
                   if(arreglo[1]==='Lista de valores')
                   {
                       if (valorxx.indexOf('°') > 0) {
                        regt.push(getKeyssrthtml(valorxx) )
                        if(i===0){ regt0.push(arreglo[0])}
                          
                       }
                       else
                       {
                           if (valorxx.indexOf('¬') > 0) {

                            regt.push( valorxx.split('¬')[0] )
                            if(i===0){ regt0.push(arreglo[0])}
                              
                           }
                           else
                           {
                            regt.push(valorxx)
                            if(i===0){ regt0.push(arreglo[0])}
                              
                           }

                       }

                      
                   }
                   else
                   {

                    regt.push(valorxx);
                    if(i===0){ regt0.push(arreglo[0])}
                       
                       
                   }}}
               }
           
                  
                               
                       
                   
               }

               /*
                cadurs3 = cadurs3 + ' <a href="https://www.google.com/maps/search/?api=1&query=' +
data[aa].replace('¬', ',') + '" target="_blank">https://www.google.com/maps/search/?api=1&query=' + data[aa].replace('¬', ',')
+ '</a> ' ;  break;
               */
              if(i===0){datafinal.push(regt0)}
              datafinal.push(regt)
           


                 
           }
       return datafinal;
    }

    var getKeyssrthtml = function(data) {
        var keys=[]
        let re = '';
        if (data !== '') {
        if (data.indexOf('°') < 0) {
          re = re + '<br>' +  data.split('¬')[0]  + ''; // &nbsp;
        } else {
        keys = data.split('°');
      
        re = '<br>';
        for (let i = 0; i < keys.length; i++) {
          const aa = keys[i].split(':');
          if (aa[0] !== '' && String(aa[0]).indexOf('¬') < 0) {
           if (aa[1] === undefined) {
              re = re + '' +  aa[0]  + '<br>'; // &nbsp;
            } else {
    
              if (String(aa[1]).indexOf('/') < 0) {
                re = re + '<strong>' +  aa[0]  + '</strong> : ' + aa[1] + '<br>'; // &nbsp;
              } else {
              
        
             
                if (cuantasVecesAparece(aa[1], '/') >= 3) {
                  re = re + '<strong>' +  aa[0]  + '</strong> : ' + '<img src="' + this.servertnube +  String(aa[1]).trim() + '"   class="circle-pic"  height="50 px" width="50 px"> ' + '<br>'; // &nbsp;
    
                } else {
                  re = re + '<strong>' +  aa[0]  + '</strong> : ' + aa[1] + '<br>'; // &nbsp;
                }
    
              }
    
              
            
            }
          }
            }
    
    
          }  
          }
    
        return re + '<br>';
      }
    
    


function dadatosformulariofinal  (namess,filtro,idempresa,namess2)
{
    return new Promise(resolve => { 

        Frmmovild.find({idmovil:namess,idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
          
     //   console.log(todos)
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + '"idpapa"	: { "type" : "String" },  "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
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
                                    var cad3=(dafiltrocad(todos,'','','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + ' "idpapa"	: { "type" : "String" },"usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
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
                                    var cad3=(dafiltrocad(todos,'','','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + '"idpapa"	: { "type" : "String" }, "comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"comentarioorden"	: { "type" : "String" },"estadointerno"	: { "type" : "String" },"usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                    cad='{' + cad + '}'
                                    cadxx='{' + cadxx + '}'
                               //  console.log(cad)
                                    var jsonObject = stringToObject(cad);
                                  
                                    var mongoose = require("mongoose");
                                    var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                    delete mongoose.connection.models[namess2];
                                    var  frmtt= mongoose.model(namess2,tt);

                                    frmtt.updateMany(filtro, est, function(err, todos2) {
                                   
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

        Frmmovild.find({idmovil:namess, idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
          
     //   console.log(todos)
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + ' "idpapa"	: { "type" : "String" }, "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
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
                                    var cad3=(dafiltrocad(todos,'','','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + '"idpapa"	: { "type" : "String" }, "usuarionew"	: { "type" : "String" },     "idpapa"	: { "type" : "String" },  "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
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


 

  function objectFindByKey(array, key, value) {
    return array[0][0];
  //  return this.array(function(x) { return x[key] })

}


  
  // Convert javascript object to json string.
  function objectToString(jsObject) {
  
      var jsonString = JSON.stringify(jsObject);
  
   
      return jsonString;
  }

//var async = require("async");
function daformxid(namess,filtro, cadxx)
{
    return new Promise(resolve => { 
var re=''
                                var cad=''
                              
                                cad=cadxx + '     "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'

                                cad='{' + cad + '}'
                         
                                var jsonObject = stringToObject(cad);
                              
                                var mongoose = require("mongoose");
                                delete mongoose.connection.models[namess];
                                var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                var  frmtt= mongoose.model(namess,tt);
                                
                                    frmtt.find(filtro ,function(err, todos2) {
                                        if (err){  res.send(err); }
                                      
                                    
                                      resolve(todos2); 
                                      
                                    });
                            
                             
                
        
    

                                });

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
                                var cad3=(dafiltrocad(todos,'','','')).split('°')
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
                                var cad3=(dafiltrocad(todos,'','','')).split('°')
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

function aplicacampo(cad,campo) {
 
    var re=0

    if(cad===undefined || cad==='')
    {
        var re=0
    }
    else
    {
    var cad2=cad.split('°')

    for(var i = 0; i < cad2.length;i++){
        if(cad2[i]===campo)
        {
            re=1;
            break;
        }
    }
    }

    return re;
}
function dafiltrocadvalida(todos,id2,id3,req) {
    var cad=''
    registrorep=''

    for(var i = 0; i < todos.length;i++){
        if(aplicacampo(req.body.nocambio,todos[i].name)===0)
        {
              if(todos[i].usarunaves==='true')
        {
            
            
            registrorep=registrorep + todos[i].name + '  '
        switch(todos[i].type) {
           
        
     
        case 'Numerico':  
        if(cad===''){  cad=  '"' +todos[i].name + '":' + req.body.estructura[todos[i].name] + ''  }
        else { cad= cad + ',"' +todos[i].name + '":' + req.body.estructura[todos[i].name]  + '' }
         
        break;
        case 'Moneda':  
        if(cad===''){  cad=  '"' +todos[i].name + '":' + req.body.estructura[todos[i].name] + ''  }
        else { cad= cad + ',"' +todos[i].name + '":' + req.body.estructura[todos[i].name]  + '' }
         
        break;
      
          
         default:
            if(cad===''){  cad=  '"' +todos[i].name + '":"' + req.body.estructura[todos[i].name] + '"'  }
            else { cad= cad + ',"' +todos[i].name + '":"' + req.body.estructura[todos[i].name]  + '"' }
             
       }
    }
}
     
     }
     return cad 
}
function numberWithCommas(x) {


  return formatNumber(Number(x))
}

function padLeadingZeros(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}



function sequenceGenerator(id){



    Contador.findOneAndUpdate({tipo:id}, { $inc: { sequence_value: 1 } }, function(err, seq){
      if(err) { throw(err); }
   
      return seq.sequence_value;
    });


}
  
function dafechapago1(mes,ano)//'2018-08'
{re=''
if(mes<10)
{
  re=ano + '-0' + mes
}
else
{
 re=ano + '-' + mes
}
return re;
}
function dafechapago2(mes,ano)//08-2018
{re=''
if(mes<10)
{
  re='0' + mes + '-' + ano
}
else
{
 re=mes + '-' + ano
}
return re;
}
 



function davalorvv(vec, valor)
{var re=''
    for(var i = 0; i < vec.length;i++){
        var aa=vec[i].split('°')
       if(aa[0]===valor)
       { re=aa[1]
        break;

       }
    }

    return re;
}



function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }



  function daidformreg(namess,filtro,orden,idempresa,tabla)
  {
  
       
      return new Promise(resolve => { 
          Frmmovild.find({idmovil:tabla, idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
              if (err){ res.send(err); }
            
   
                                  if(todos.length>0)   {  
                                 
                                      var cad=''
                                      var cadxx=''
                                      var cad3=(dafiltrocad(todos,'','','')).split('°')
                                    
                                
                                   
                                      cad=cad3[0]
                                      cadxx='{'+ cad3[1] + '}'
                                      cad=cad + ' "ordenhijas": { "type" : "String" },"idpapa"	: { "type" : "String" },"usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                      cad='{' + cad + '}'
                                      cadxx='{' + cadxx + '}'
  
                                 //  console.log(cad)
                                      var jsonObject = stringToObject(cad);
                                    
                                      var mongoose = require("mongoose");
                                      var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                      delete mongoose.connection.models[namess];
                                      var  frmtt= mongoose.model(namess,tt);
  
                                      frmtt.find(filtro).sort(orden).exec(function(err, todos2) {
                                          if (err){  res.send(err); }
                                          
                                          
  
   resolve(todos2); 
  
  
                                      });
                                  }
  
  
      });
          
                                      
                                     
                               
                  
          
      
  
                                  });
  
  
  
  }
  
  

function dadatosformulariocombo(namess,filtro,idempresa, myDatavector)
{
    
    return new Promise(resolve => { 
        Frmmovild.find({idmovil:namess, display : "true",idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
          
 
            var objetox = {};
                
          
                for(var j = 0; j < myDatavector.length;j++){
                    for(var i = 0; i < todos.length;i++){
                if(myDatavector[j].split('°')[0]===todos[i].name)
                {
                    objetox[todos[i].name] =todos[i].title + '°' + todos[i].type + '°'+ todos[i].display;
                }
            }
               
                
            }
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','','')).split('°')
                                  
                              
                                 
                                    cad=cad3[0]
                                    cadxx='{'+ cad3[1] + '}'
                                    cad=cad + ' "estadointerno"	: { "type" : "String" },  "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
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
                                        
                                        

 var datafinal = procesahtmlrecord(objetox,todos2,'si')
                                                  
 //res.json(datafinal);
 resolve(datafinal); 
 /*
                                        var myData = [];
                                        for(var i = 0; i < todos2.length;i++){
                                          var nombret ='';
                                          for(var j = 0; j < myDatavector.length;j++){
                                              nombret = nombret + myDatavector[j].split('°')[1] + ': ' +  todos2[i][myDatavector[j].split('°')[0]]  + '°'
                                          }
                                          myData.push({_id:todos2[i]._id , nombre: nombret })
    
                                           
                                        }
                                         


                                        resolve(myData); 
                                        */
                                       // res.json(todos2);

                                    });
                                }


    });
        
                                    
                                   
                             
                
        
    

                                });

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
                                    var cad3=(dafiltrocad(todos,'','','')).split('°')
                                  
                              
                                 
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


function dadatosformulariogruposuma(namess,filtro,idempresa,namess2,filtrogrupo,filtrosuma,limitx,sortx)
{
    return new Promise(resolve => { 

        Frmmovild.find({idmovil:namess, display : "true",idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
          
     //   console.log(todos)
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','','')).split('°')
                                  
                              
                                 
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
                                    var cad3=(dafiltrocad(todos,'','','')).split('°')
                                  
                              
                                 
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


function dadatosformulariosort(namess,filtro,idempresa,namess2,ss)
{
    return new Promise(resolve => { 

        Frmmovild.find({idmovil:namess, display : "true",idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
          
     //   console.log(todos)
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','','')).split('°')
                                  
                              
                                 
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
                                    var cad3=(dafiltrocad(todos,'','','')).split('°')
                                  
                              
                                 
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


function dadatosformulariogruposuma0(namess,filtro,idempresa,namess2,filtrogrupo,filtrosuma)
{
    return new Promise(resolve => { 

        Frmmovild.find({idmovil:namess, display : "true",idempresa:idempresa}).sort([['order', 1]]).exec(function(err, todos) {
            if (err){ res.send(err); }
          
     //   console.log(todos)
                                if(todos.length>0)   {  
                               
                                    var cad=''
                                    var cadxx=''
                                    var cad3=(dafiltrocad(todos,'','','')).split('°')
                                  
                              
                                 
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

module.exports = {
    objectFindByKey:objectFindByKey,
    objectToString:objectToString,
    getImagesruta: getImagesruta,
    dafechacompleta:dafechacompleta,
    dafecha:dafecha,
    ejecutasql:ejecutasql,
    ejecutasql2:ejecutasql2,
    ejecutasql3:ejecutasql3,
    padLeadingZeros:padLeadingZeros,
    formatNumber:formatNumber,
    numberWithCommas:numberWithCommas,
    currencyFormatDE:currencyFormatDE,
    creafrmregistro:creafrmregistro,
    getDaysArray:getDaysArray,
    daarreglo:daarreglo,
    dafecha:dafecha,
    dafiltrocad:dafiltrocad,
    datipo2:datipo2,
    datipo:datipo,
    dadatosformulariogruposuma:dadatosformulariogruposuma,
    dadatosformulariogruposuma0:dadatosformulariogruposuma0,
    dadatosformulariogrupo:dadatosformulariogrupo,
    dadatosformularioispapaarray:dadatosformularioispapaarray,
    dadatosformulario:dadatosformulario,
    actualizaformularioidfinal:actualizaformularioidfinal,
    daformxid:daformxid,
    dadatosformulariofinal:dadatosformulariofinal,
    dafechapago1:dafechapago1,
    dafechapago2:dafechapago2,
    onlyUnique:onlyUnique,
    dahora:dahora,
    dafechastring:dafechastring,
    dafechatodate:dafechatodate,
    daimagen:daimagen,
    getKeyssrthtml:getKeyssrthtml,
    procesahtmlrecord:procesahtmlrecord,
    procesahtmlrecordproceso:procesahtmlrecordproceso,
    procesatablauirecord:procesatablauirecord,
    procesaexcelrecord:procesaexcelrecord,
    procesacsvrecord:procesacsvrecord,
    dafiltrocadvalida:dafiltrocadvalida,
    replaceAll:replaceAll,
    ejecutaaccess:ejecutaaccess,
    sequenceGenerator:sequenceGenerator,
    daidformreg:daidformreg,
    stringToObject:stringToObject,
    aplicacampo:aplicacampo,
    daconectasql:daconectasql,
    davalorvv:davalorvv,
    dadatosformulariosort:dadatosformulariosort,
    dadatosformularioidfinal: dadatosformularioidfinal,
    dadatosformulariocombo:dadatosformulariocombo,
    eliminaformulario:eliminaformulario,
    dadatosformularioproceso:dadatosformularioproceso
   
      }