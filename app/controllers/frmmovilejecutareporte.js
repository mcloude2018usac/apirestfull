
var Frmmovil = require('../models/frmmovil');
var Frmmovild = require('../models/frmmovild');
const { getGaleriaimg } = require('./galeriaimg');
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
              case 'Documento': 
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
                               //  cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + //functool.daimagen(todos2[i][keys[ii]]) + '<br>'
  
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
                  datafinal.push({item:todos2[i],_id:todos2[i]._id,nombre2:'tico',nombre:cad+ '<div style="font-size: 8px;text-transform: capitalize;">Crea: [' + dafechastring(todos2[i]['createdAt'])+',' + todos2[i]['usuarionew'] + ']<br> Actualiza: [' +dafechastring(todos2[i]['updatedAt']) +',' +   todos2[i]['usuarioup']+ '] <br> Estado interno: '+ todos2[i].estadointerno + comt + comt2 +'</div>',item:todos2[i],usuario:''})
                 cad='';
  
                }
  
  
                   
             }
         return datafinal;
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
                             //  cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + //functool.daimagen(todos2[i][keys[ii]]) + '<br>'

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
                datafinal.push({_id:todos2[i]._id,nombre2:'tico',nombre:cad+ '<div style="font-size: 8px;text-transform: capitalize;">Crea: [' + dafechastring(todos2[i]['createdAt'])+',' + todos2[i]['usuarionew'] + ']<br> Actualiza: [' +dafechastring(todos2[i]['updatedAt']) +',' +   todos2[i]['usuarioup']+ '] <br> Estado interno: '+ todos2[i].estadointerno + comt + comt2 +'</div>',item:todos2[i],usuario:''})
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
                           cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + valorxx + '<br>'
                       }
                       else
                       {
                           if(arreglo[1]==='Imagen')
                           {
                               /*
                               keyst.push('<strong>' +  this.getKeys3(this.cmpver, aa,0)  + '</strong> :  <img src="' + this.apifoto +  this.getKeys2(data[aa]) + '"   class="circle-pic"  height="50 px" width="50 px"> '  );
                               */
                             //  cad=cad + '<strong>' +  arreglo[0] + '</strong>: ' + //functool.daimagen(todos2[i][keys[ii]]) + '<br>'

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
                datafinal.push({_id:todos2[i]._id,nombre2:'tico',nombre:cad+ '<div style="font-size: 8px;text-transform: capitalize;">Crea: [' + dafechastring(todos2[i]['createdAt'])+',' + todos2[i]['usuarionew'] + ']<br> Actualiza: [' +dafechastring(todos2[i]['updatedAt']) +',' +   todos2[i]['usuarioup']+ '] <br> Estado interno: '+ todos2[i].estadointerno +'</div>',item:todos2[i],usuario:''})
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
    
    
      var dadatosformulariofinal  =  function(namess,filtro,idempresa,namess2)
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


var dadatosformularioidfinal  =  function(namess,filtro,idempresa,namess2)
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


                                    frmtt.findById(filtro).exec(function(err, todos2) {
                                        if (err){  res.send(err); }

                                        resolve(todos2); 
                                       // res.json(todos2);

                                    });
                                }


    });
        
                                    
                                   
                             
                
        
    

                                });

}

module.exports = {
    getImagesruta: getImagesruta,
    dafechacompleta:dafechacompleta,
    dafecha:dafecha,
    dahora:dahora,
    dafechastring:dafechastring,
    daimagen:daimagen,
    getKeyssrthtml:getKeyssrthtml,
    procesahtmlrecord:procesahtmlrecord,
    procesahtmlrecordproceso:procesahtmlrecordproceso,
    procesatablauirecord:procesatablauirecord,
    procesaexcelrecord:procesaexcelrecord,
    procesacsvrecord:procesacsvrecord,
    dadatosformulariofinal:dadatosformulariofinal,
    dadatosformularioidfinal: dadatosformularioidfinal
   
      }