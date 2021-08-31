
var Perfil = require('../models/perfil');
var Moduloxx = require('../models/moduloxx');
var Permiso = require('../models/permiso');
var Area_evento = require('../models/aread_evento');
var Participa2 = require('../models/participa2');
var Frmmovil = require('../models/frmmovil');
var Frmmovild = require('../models/frmmovild');
var Permison2 = require('../models/permison2');
var Area_evento = require('../models/aread_evento');
var Aread_evento = require('../models/aread_evento');
var functool = require('../controllers/funcionesnode');
var csv      = require('csv-express');
var Evento = require('../models/eventos');
var Pagopap = require('../models/pagospap');
var Denunciaunidad = require('../models/denunciaunidad');
var Orden_compra = require('../models/asociadoventa/orden_compra');
var producto = require('../models/asociadoventa/producto');
var usuarios = require('../models/user');

var Participa3 = require('../models/participa3');
var Participa33 = require('../models/participa33');
var Unidadplan2 = require('../models/unidadplan2');
var Evento = require('../models/eventos');
var Empresa = require('../models/empresa');
var generator = require('generate-password');
var Bitacora = require('../models/bitacora');
var mailt = require('../controllers/mailprueba');
var cursoeve=require('../models/aread_evento');
var cursodiploma=require('../models/cursodiploma');
var Tiposuscriptor = require('../models/tipo_suscriptor');
var Perfil = require('../models/perfil');
var Catalogo = require('../models/catalogo');
var Asignacalusac = require('../models/calusac/asignacalusac');
var mailt = require('../controllers/mailprueba');
var tipounidadx = require('../models/tipounidad');
const compressor = require('flexmonster-compressor');
var Image=require('../models/image');

var Asignaestudiante = require('../models/asignaestudiante');


const fs = require('fs-extra');
var User = require('../models/user');


var Cuentaccoriente = require('../models/asignapapccorriente');


var Unidadacademica = require('../models/unidadacademica');
var Asignapcb = require('../models/asignapcb');
var Participa = require('../models/participa');
var Participa2 = require('../models/participa2');
var Facplan = require('../models/unidadplan');
var Facplan2 = require('../models/unidadplan2');
var Facplan3 = require('../models/calusac/unidadplan3');
var cursoeve=require('../models/aread_evento');
var Userperfil = require('../models/userperfil2');
var Asignapap = require('../models/asignapap');
var Marketemail = require('../models/marketemail');
var Asignaestpap= require('../models/asignaestudiantepap');
var Personal = require('../models/user');
var functool = require('../controllers/funcionesnode');
var kardex = require('../models/asociadoventa/kardexcorreos');

var request = require('request');

var Asignaest = require('../models/asignaestudiante');

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

    function stringToObject(JSONString) {
        var jsonObject = JSON.parse(JSONString);
        return jsonObject;
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
            default:
              // code block
          }
            return tt;
          }
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


var defaultDiacriticsRemovalMap = [
        {'base':'A', 'letters':/[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g},
        {'base':'AA','letters':/[\uA732]/g},
        {'base':'AE','letters':/[\u00C6\u01FC\u01E2]/g},
        {'base':'AO','letters':/[\uA734]/g},
        {'base':'AU','letters':/[\uA736]/g},
        {'base':'AV','letters':/[\uA738\uA73A]/g},
        {'base':'AY','letters':/[\uA73C]/g},
        {'base':'B', 'letters':/[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},
        {'base':'C', 'letters':/[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g},
        {'base':'D', 'letters':/[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g},
        {'base':'DZ','letters':/[\u01F1\u01C4]/g},
        {'base':'Dz','letters':/[\u01F2\u01C5]/g},
        {'base':'E', 'letters':/[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g},
        {'base':'F', 'letters':/[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},
        {'base':'G', 'letters':/[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g},
        {'base':'H', 'letters':/[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g},
        {'base':'I', 'letters':/[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g},
        {'base':'J', 'letters':/[\u004A\u24BF\uFF2A\u0134\u0248]/g},
        {'base':'K', 'letters':/[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g},
        {'base':'L', 'letters':/[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g},
        {'base':'LJ','letters':/[\u01C7]/g},
        {'base':'Lj','letters':/[\u01C8]/g},
        {'base':'M', 'letters':/[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g},
        {'base':'N', 'letters':/[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g},
        {'base':'NJ','letters':/[\u01CA]/g},
        {'base':'Nj','letters':/[\u01CB]/g},
        {'base':'O', 'letters':/[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g},
        {'base':'OI','letters':/[\u01A2]/g},
        {'base':'OO','letters':/[\uA74E]/g},
        {'base':'OU','letters':/[\u0222]/g},
        {'base':'P', 'letters':/[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g},
        {'base':'Q', 'letters':/[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g},
        {'base':'R', 'letters':/[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g},
        {'base':'S', 'letters':/[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g},
        {'base':'T', 'letters':/[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g},
        {'base':'TZ','letters':/[\uA728]/g},
        {'base':'U', 'letters':/[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g},
        {'base':'V', 'letters':/[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g},
        {'base':'VY','letters':/[\uA760]/g},
        {'base':'W', 'letters':/[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},
        {'base':'X', 'letters':/[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g},
        {'base':'Y', 'letters':/[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g},
        {'base':'Z', 'letters':/[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g},
        {'base':'a', 'letters':/[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g},
        {'base':'aa','letters':/[\uA733]/g},
        {'base':'ae','letters':/[\u00E6\u01FD\u01E3]/g},
        {'base':'ao','letters':/[\uA735]/g},
        {'base':'au','letters':/[\uA737]/g},
        {'base':'av','letters':/[\uA739\uA73B]/g},
        {'base':'ay','letters':/[\uA73D]/g},
        {'base':'b', 'letters':/[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g},
        {'base':'c', 'letters':/[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g},
        {'base':'d', 'letters':/[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g},
        {'base':'dz','letters':/[\u01F3\u01C6]/g},
        {'base':'e', 'letters':/[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g},
        {'base':'f', 'letters':/[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g},
        {'base':'g', 'letters':/[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g},
        {'base':'h', 'letters':/[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g},
        {'base':'hv','letters':/[\u0195]/g},
        {'base':'i', 'letters':/[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g},
        {'base':'j', 'letters':/[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g},
        {'base':'k', 'letters':/[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g},
        {'base':'l', 'letters':/[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g},
        {'base':'lj','letters':/[\u01C9]/g},
        {'base':'m', 'letters':/[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g},
        {'base':'n', 'letters':/[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g},
        {'base':'nj','letters':/[\u01CC]/g},
        {'base':'o', 'letters':/[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g},
        {'base':'oi','letters':/[\u01A3]/g},
        {'base':'ou','letters':/[\u0223]/g},
        {'base':'oo','letters':/[\uA74F]/g},
        {'base':'p','letters':/[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g},
        {'base':'q','letters':/[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g},
        {'base':'r','letters':/[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g},
        {'base':'s','letters':/[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g},
        {'base':'t','letters':/[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g},
        {'base':'tz','letters':/[\uA729]/g},
        {'base':'u','letters':/[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g},
        {'base':'v','letters':/[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g},
        {'base':'vy','letters':/[\uA761]/g},
        {'base':'w','letters':/[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},
        {'base':'x','letters':/[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g},
        {'base':'y','letters':/[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g},
        {'base':'z','letters':/[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g}
    ];
    var changes;


    function removeDiacritics (str) {
        if(!changes) {
            changes = defaultDiacriticsRemovalMap;
        }
        for(var i=0; i<changes.length; i++) {
            str = str.replace(changes[i].letters, changes[i].base);
        }
        return str;
    }

    function getponekardex(data){
        return new Promise(resolve => {
        //datat.push({rm:r1[ii],rd:r1d[i],fecha:fecha,tipo:'r1'})
      (async () => {

        var idempresa='5f503bededa4710798a79b84'
        var ingreso=0
        var salida=0
        var saldoactual=0
        var total=0
        var existenciaactual=0
        var precioproducto=0
        var cantidadingreso=0
        var idproducto=data.rd.articulo.split('¬')[1]
var cantidadv1=0


        producto = await functool.dadatosformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},idempresa,'5fc01bbba8d0a14888774579'); 
        console.log(producto)
        if(producto===null)
        {console.log('sinnnnnnnnnnnnnnnnn  producto**********************************');resolve({estado:'exito'}); }
        else
        {
        if(producto.descripciondelarticulo==='VIENEN DE LA' || producto.descripciondelarticulo==='ULTIMA LINEA')
        { resolve({estado:'exito'});  }
        else
        {

    



        if(data.tipo==='h1')
        {//ingresos
cantidadv1=data.rd.cantidad
proveedorv=data.rm.proveedor
nodocv=data.rm.codigo.toString()
tipov='Entrada'
accionv='Ingreso formulario 1-H'

    
if(producto.existenciaactual)
{existenciaactual=Number(producto.existenciaactual)}
else{existenciaactual=0}



if(cantidadv1)
{
    cantidadingreso=Number(cantidadv1)
}
else
{
    cantidadingreso=0;
}

ingreso=cantidadingreso
saldoactual=existenciaactual+ingreso
precioingreso=Number(data.rd.preciounitario)

preciomedio=(precioingreso+Number(producto.precioporunidad))/2

        }
        else
        {//egresos
                proveedorv=data.rm.departamento
                nodocv=data.rm.nodocumento.toString()
                tipov='Salida'
                accionv='Salida requisición'

                    
        if(producto.existenciaactual)
        {existenciaactual=Number(producto.existenciaactual)}
        else{existenciaactual=0}

        cantidadv1=data.rd.cantidaddespachada

        if(cantidadv1)
        {
            cantidadingreso=Number(cantidadv1)
        }
        else
        {
            cantidadingreso=0;
        }


                
                salida=cantidadingreso
                saldoactual=existenciaactual-salida
                preciomedio=Number(producto.precioporunidad)
        
        }
       
        

     
      total=saldoactual*Number(producto.precioporunidad)
      precioproducto=Number(producto.precioporunidad)
      var gkardex={
        idempresa		: idempresa,  
        fecha		: data.rm.fecha,  
        tipo		: tipov,  
        accion		: accionv,  
        
    nodockardex		: '',  
    nodockardexlinea		: '',  
    tarjetasanuladas: '',
    estadoprint:'No impreso',
    anulacion:'',
        proveedor		: proveedorv,  
        nodoc		: nodocv,  
        iddocumento		: data.rm._id.toString(),  
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
      }


        var estructura={
    "precioporunidad" : preciomedio,
    "existenciaactual" : saldoactual.toString(),
    "total" :( saldoactual*Number(preciomedio)).toString()
  
}
  producto = await functool.actualizaformularioidfinal('5fc01bbba8d0a14888774579',{ _id:idproducto},idempresa,'5fc01bbba8d0a14888774579',estructura);

  kardex.create(gkardex,function(err, todos) {
        if (err){ console.log(err)  }

    console.log(todos)
        resolve({estado:'exito'});
      });

      
 
  




    

      


      

      }}
})();

        });
    }
      
    function getponekardexini(data){
        return new Promise(resolve => {
        //datat.push({rm:r1[ii],rd:r1d[i],fecha:fecha,tipo:'r1'})
      (async () => {

        var idempresa='5f503bededa4710798a79b84'
        var ingreso=0
        var salida=0
        var saldoactual=0
        var total=0
        var existenciaactual=0
        var precioproducto=0
        var cantidadingreso=0
        var idproducto=data.rm._id
var cantidadv1=0

   
      var gkardex={
        idempresa		: idempresa,  
        fecha		: '2021-05-03T00:00:00.000Z',  
        tipo		: 'Entrada',  
        accion		: 'Inventario inicial',  
        
    nodockardex		: '',  
    nodockardexlinea		: '',  
    tarjetasanuladas: '',
    estadoprint:'No impreso',
    anulacion:'',
        proveedor		: '',  
        nodoc		: '',  
        iddocumento		: data.rm._id.toString(),  
        categoria		:data.rm.categoria,
        producto		: data.rm.codigoarticulo,  
        unidad: data.rm.unidaddemedida,
        idproducto:data.rm._id,
        producton		: data.rm.descripciondelarticulo,
        saldoanterior		: 0,
        ingreso		: data.rm.existenciainicial,
        obs:'Acta administrativa No: ' + data.rm.nodeactainventarioinicial + ' inventario inicial',
        egreso		: 0,
        saldoactual		: data.rm.existenciainicial,
        precioanterior:data.rm.precioporunidad,
        precio		: data.rm.precioporunidad,
        total		: data.rm.precioporunidad*Number(data.rm.existenciainicial),
      }


      var estructura={
        "precioporunidad" : data.rm.precioporunidad,
        "existenciaactual" :data.rm.existenciainicial,
        "total" :(  data.rm.precioporunidad*data.rm.existenciainicial).toString()
      
    }
      producto = await functool.actualizaformularioidfinal('5fc01bbba8d0a14888774579',{ _id:data.rm._id},idempresa,'5fc01bbba8d0a14888774579',estructura);



  kardex.create(gkardex,function(err, todos) {
        if (err){ console.log(err)  }

    console.log(todos)
        resolve({estado:'exito'});
      });

      
})();

        });
    }
      
      function getNextSequenceValue2auser(id1,cuentaaa,res){


    
        User.find({ email:id1 }, function (err, todo10)  {
                if (err) { console.log(err.message)  }
                if(todo10.length>0)
                {
                
 
         User.findById({  _id:todo10[0]._id }, function (err, todo)  {
                 if (err) { console.log(err.message)  }
                 else
                 {  
                     todo.nov    	=	""
                     todo.save(function (err, todo333){
                         if (err)     { console.log(err.message)  }
                       //  res.json(todo);
                    
                     });
                 }
             });
        }
        });
             
             
       }

       
      function getNextSequenceValue2a(id1,cuentaaa,res){


    

        Facplan.findById({  _id:id1 }, function (err, todo)  {
                if (err) { console.log(err.message)  }
                else
                {  
                    todo.asignados    	=	cuentaaa
                    todo.save(function (err, todo333){
                        if (err)     { console.log(err.message)  }
                      //  res.json(todo);
                     
                    });
                }
            });
            
      }


      function getNextSequenceValueimg(imagen,idd){

        const img = imagen;
        const data = img;
        const split = data.split(','); 
        var fullUrl ='https://rest2019xxaa.herokuapp.com';
        const base64string = split[1];
        var tipoimg =(split[0]).split(';')
        const tipoimg2 =(tipoimg[0]).split(':')
        const buffer = Buffer.from(base64string, 'base64');
     
        var new_img = new Image;
        new_img.img =buffer
        new_img.nombre =''
        new_img.tamano =0

        new_img.contentType = tipoimg2[1] ;
    
        new_img.save(function (err, todoe){
            if (err) {
                return res.sendStatus(400);
            }


            Evento.findById({ _id: idd }, function (err, todo)  {
                if (err) {  res.send(err);  }
                else
                {  
                    todo.foto	=	fullUrl + '/api/images/'+todoe._id
                    todo.save(function (err, todo){
                        if (err)     {  res.status(500).send(err.message)   }
                      
                      //  res.json(todo);
                    });
                }
            });


            
        });
    




    
      }


      function getNextSequenceValue2(salonn, idd,cuentaaa){

        Unidadplan2.findById({ _id: idd }, function (err, todo)  {
                if (err) {  res.send(err);  }
                else
                {  
                    todo.asignados    	=	cuentaaa
                    todo.save(function (err, todo){
                        if (err)     {  res.status(500).send(err.message)   }
                      //  res.json(todo);
                    });
                }
            });
      }


      
  function buscaarray(data,asigna,perfil,horario,materia) {
        var val=0
        for(var i = 0; i <data.length; i++) {
                 if(data[i].idasigna==asigna && data[i].idperfil==perfil  && data[i].idhorario==horario 
                        && data[i].idmateria==materia  )
                 {
                        val=1;
                    break;
                 }
        }
        
       return val;
    
        
    }

    var request = require('request');
const asignapap = require('../models/asignapap');
const asignaestudiantepap = require('../models/asignaestudiantepap');
    function getNext(myData3,myData3aa,req,res,necesito){
        request({
                url: "https://rest2019externo.herokuapp.com/api/estudiantepcb/" + nov +"/resultado" ,
                method: "GET",
                gzip: true,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':'123'
                  
    
    
                    
                },
                body: ''
            }, function (error, response, body){
       
                if (error){  console.log(error); res.send(error);  }

                var aa=JSON.parse(body)

                for (var ii = 0; ii < aa.length; ii++) {
                       
                      

                        if(aa[ii].ID_MATERIA==mat  &&  aa[ii].APROBACION=='1')
                        {
                                console.log('APROBO ' + aa[ii].ORIENTACION + '  ' +aa[ii].ID_MATERIA)   

                        }
                        else{

                                console.log('no APROBO ' + aa[ii].ORIENTACION + '  ' +aa[ii].ID_MATERIA)   

                        }

                            
                }

           
               
    
               //   res.send(body);
        
    
    
    
            });

    }

    function capitalizeFirstLetter(string) {
            if(string)
            {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
            else
            {
                    return string;
            }
       
      }
   
      
     
function buscaest(id,todos,op)
{ var re=''
if(op=='nov')
{
        for(var i = 0; i < todos.length;i++){
                if(todos[i]._id==id)
                {
                        re=todos[i].nov
                        break;
                }
        }

}
else
{

        
        for(var i = 0; i < todos.length;i++){
                if(todos[i]._id==id)
                {
                        re=todos[i].email
                        break;
                }
        }
}
return re;
}

function sortByProperty(property){  
        return function(a,b){  
           if(a[property] > b[property])  
              return 1;  
           else if(a[property] < b[property])  
              return -1;  
       
           return 0;  
        }  
     }
      
exports.getCombofijo = async function(req, res, next){
       var sql='';

       

       switch(req.params.id) {
        case 'dakardexinvinicial':

                var h1= await functool.dadatosformulario('5fc01bbba8d0a14888774579',{},'5f503bededa4710798a79b84')
                var  datat =[]
                for(var i = 0; i < h1.length;i++){
                                        d =new Date(h1[i].createdAt)
                                        fecha= d.getTime(); 
                                        datat.push({rm:h1[i],rd:null,fecha:fecha,tipo:'invini'})

                }


               // datat.sort(sortByProperty("fecha"));

console.log( datat.length)
 for(var i = 0; i < datat.length;i++){
         console.log(i)
     aaa= await  getponekardexini(datat[i])

 }

                res.json({ datat});



                break;
        case 'dakardex':

        
                // "articulo" : {'$regex': '¬6024591280c5e740903e146f', '$options': 'i'}
//"articulo" : {'$regex': '¬6024591280c5e740903e146f', '$options': 'i'}
                var h1= await functool.dadatosformulario('5fc02f572fc3552d1014792f',{},'5f503bededa4710798a79b84')
                var h1d=await functool.dadatosformulario('5fc0308c2fc3552d10147947',{},'5f503bededa4710798a79b84')

                var r1=await functool.dadatosformulario('5ff67ee82977bb360c526f8a',{},'5f503bededa4710798a79b84')
                var r1d=await functool.dadatosformulario('5fc03c79ab0f6448b877eb5c',{},'5f503bededa4710798a79b84')

                var datat=[]
                for(var i = 0; i < h1d.length;i++){
                        for(var ii = 0; ii < h1.length;ii++){
                                if(String(h1d[i].idpapa)===String(h1[ii]._id))
                                {
                                        d =new Date(h1d[i].createdAt)
                                        fecha= d.getTime(); 
                                        datat.push({rm:h1[ii],rd:h1d[i],fecha:fecha,tipo:'h1'})
                                   //  datat.push({nodocumento:h1[ii].codigo,fecha1:h1d[i].createdAt,cantidad:h1d[i].////cantidad,fecha:fecha,tipo:'h1'})

                                }
                        }
                }

                for(var i = 0; i < r1d.length;i++){
                        for(var ii = 0; ii < r1.length;ii++){
                                if(String(r1d[i].idpapa)===String(r1[ii]._id))
                                {
                                        d =new Date(r1d[i].createdAt)
                                        fecha= d.getTime(); 
                                        datat.push({rm:r1[ii],rd:r1d[i],fecha:fecha,tipo:'r1'})
//datat.push({nodocumento:r1[ii].nodocumento,fecha1:r1d[i].createdAt,cantidad:r1d[i].cantidaddespachada,fecha:fecha,tipo:'r1'})
                                }
                        }
                }


                datat.sort(sortByProperty("fecha"));

console.log( datat.length)
 for(var i = 0; i < datat.length;i++){
         console.log(i)
     aaa= await  getponekardex(datat[i])

 }

                res.json({ datat});

              

                break;
        case 'reasignapap':

                Asignaestpap.aggregate( [
                        { 
                            "$group" : {
                                "_id" : {
                                    "idestudiante" : "$idestudiante"
                                   
                                }
                            }
                        }, 
                        { 
                            "$project" : {
                                "idestudiante" : "$_id.idestudiante", 
                            
                            }
                        }
                    ]).exec(function(err, todos2) {

                        var duplicates = [];


                        for(var i = 0; i < todos2.length;i++){
        
                                duplicates.push(todos2[i].idestudiante);

                            }





                User.find({_id :{$in: duplicates}  }).select({_id:1,nov:1,email:1,cui:1,nombre:1}).exec(function(err, todos) {
                        if (err){ res.send(err); }
                        console.log(todos.length)
                      

                Asignaestpap.find({}).sort({idasigna :1}).exec(function(err, todosa) {        if (err){ res.send(err); }

              var no=todosa[0].no_orientacion 
              var materias=''
              var materiasc=0;
              var lenguajem=false;
              var matematicam=false;
              var fisicam=false;
              var biologiam=false;
              var quimicam=false;

              var lenguajem2='';
              var matematicam2='';
              var fisicam2='';
              var biologiam2='';
              var quimicam2='';
              var cuenta=0;
              var cad;
                for(var i = 0; i < todosa.length;i++){
                        if(no==todosa[i].no_orientacion )
                        {       materias=materias + ',' + todosa[i].idmateria
                                materiasc=materiasc+1
                                console.log(todosa[i].no_orientacion+ ' '+todosa[i].idmateria + ' ' +todosa[i].idhorario)
                                if(todosa[i].idmateria=='Lenguaje'){lenguajem=true;lenguajem2=todosa[i].idhorario}
                                if(todosa[i].idmateria=='Matematica'){matematicam=true;matematicam2=todosa[i].idhorario}
                                if(todosa[i].idmateria=='Fisica'){fisicam=true;fisicam2=todosa[i].idhorario}
                                if(todosa[i].idmateria=='Biologia'){biologiam=true;biologiam2=todosa[i].idhorario}
                                if(todosa[i].idmateria=='Quimica'){quimicam=true;quimicam2=todosa[i].idhorario}


                        }
                        else
                        {
                              
                                var monto=350;
                                if(materiasc>3) {monto=500}
                               
                          

                                var f1 =new Date( todosa[i].createdAt).toISOString().substr(0,10);   
                                var f2 =new Date( todosa[i].updatedAt).toISOString().substr(0,10);   
                             
                             
                              
                                console.log(f1)
                                cad={
                                        "_id" : "ObjectId('" + todosa[i-1].idasigna +"')",
                                        "userId" : todosa[i-1].idestudiante,
                                        "idperiodo" : "5ed6e82dffd35000291a6561",
                                        "noboleta" : "",
                                        "monto" : monto,
                                        "cui" :  todosa[i-1].no_orientacion,
                                        "nombre" : todosa[i-1].nombre,
                                        "rubro" : "102",
                                        "llave" : "",
                                        "montodeuda" : monto,
                                        "cursosaplica" : materias,
                                        "fechasiif" : "",
                                        "nov" : buscaest(todosa[i-1].idestudiante,todos,'nov'),
                                        "idpago" : "Nov",
                                        "correo" :""+ todosa[i-1].usuarionew+";mario.morales@mcloude.com",
                                        "lenguaje" : lenguajem,
                                        "matematica" : matematicam,
                                        "fisica" : fisicam,
                                        "biologia" : biologiam,
                                        "quimica" : quimicam,
                                        "nota" : "Correcta.",
                                        "estado" : "Asignación finalizada con exito",
                                        "usuarionew" : buscaest(todosa[i-1].idestudiante,todos,'correo'),
                                        "createdAt" : "ISODate('"+  f1 +"T05:04:09.195Z')",
                                        "updatedAt" : "ISODate('"+ f2+"T05:04:09.195Z')",
                                        "__v" : 0,
                                        "cierra" : "1",
                                        "idhorario" : lenguajem2,
                                        "idhorario2" : matematicam2,
                                        "idhorario3" :fisicam2,
                                        "idhorario4" :biologiam2,
                                        "idhorario5" : quimicam2,
                                        "usuarioup" : buscaest(todosa[i-1].idestudiante,todos,'correo')
                                    }
                                    cuenta=cuenta+1
                                    console.log(cuenta)
                                    console.log(cad)

                                    materias=''
                                    materiasc=0
                                     lenguajem=false;
                                     matematicam=false;
                                     fisicam=false;
                                     biologiam=false;
                                     quimicam=false;
                      
                                     lenguajem2='';
                                    matematicam2='';
                                     fisicam2='';
                                     biologiam2='';
                                     quimicam2='';
                                     no=todosa[i].no_orientacion 
                                     materias=materias + ',' + todosa[i].idmateria
                                materiasc=materiasc+1
                                console.log(todosa[i].no_orientacion+ ' '+todosa[i].idmateria + ' ' +todosa[i].idhorario)
                                if(todosa[i].idmateria=='Lenguaje'){lenguajem=true;lenguajem2=todosa[i].idhorario}
                                if(todosa[i].idmateria=='Matematica'){matematicam=true;matematicam2=todosa[i].idhorario}
                                if(todosa[i].idmateria=='Fisica'){fisicam=true;fisicam2=todosa[i].idhorario}
                                if(todosa[i].idmateria=='Biologia'){biologiam=true;biologiam2=todosa[i].idhorario}
                                if(todosa[i].idmateria=='Quimica'){quimicam=true;quimicam2=todosa[i].idhorario}
                                 
                                    
    
                                
                        }

                       
                }

                
                res.json({ todos});



                });

        });
                    });
                break;
        case 'componeeventosimg':
                Evento.find({"impresion" : "Imprimir diploma" }).exec(function(err, todos) {
                        if (err){ res.send(err); }
                      
                        for(var i = 0; i < todos.length;i++){
                                var cad=todos[i].foto
                                if(cad.indexOf('base64')>0)
                                { getNextSequenceValueimg(todos[i].foto,todos[i]._id)

                                }

                       
                        }
                        res.json({ todos});
                });
                break;
        case 'correpueba':
                mailt.mandacorreoprueba2(['eveready11p@gmail.com','ambrosioaleman07@gmail.com','mario.morales@mcloude.com'],'Solicitando salon para Unidad academica:', 'Solicitud de nuevo salon',['mario.morales@mcloude.com'])
break;
     
        case 'creaempresa':
                //http://127.0.0.1:9090/api/datosfijos/creaempresa
                var idempresaxx='super24'
         
    Empresa.create({
        idempresa0        	:idempresaxx    	,
        nit        	: '12345'       	,
        nombre        	: idempresaxx       	,
        razon 	: idempresaxx 	,
        direccion    	: 'direccion'    	,
        email    	: 'email'    	,
        telefonos   	: 'email'  	,
        estado    	: 'Activo'   	,
        moneda    	: 'Q. '   	,
        usuarionew:idempresaxx + 'admin@gmail.com',
        date 			: Date.now() }
        , function(err, todo) {
        if (err){    res.status(500).send(err.message)    }

       // res.json(todo);
        //crear toda la estructura

       var idempresa=todo._id
  
       var idtiposus=''
       var iduniuser=''
       var iduniadmin=''
       Tiposuscriptor.create({    "idempresa" : idempresa,             "nombre" : "Administrador",             "cobroparqueos" : "1",             "usuarionew" : idempresaxx + 'admin@gmail.com',             "createdAt" : "2019-10-12T23:29:56.961+0000",      
       "updatedAt" :"2019-10-12T23:29:56.961+0000",             "__v" : 0       } , function(err, xtiposus2) {
         if (err){    res.status(500).send(err.message)    }
       Tiposuscriptor.create({    "idempresa" : idempresa,             "nombre" : "Usuario",             "cobroparqueos" : "1",             "usuarionew" : idempresaxx + 'admin@gmail.com',             "createdAt" : "2019-10-12T23:29:56.961+0000",      
              "updatedAt" :"2019-10-12T23:29:56.961+0000",             "__v" : 0       } , function(err, xtiposus) {
                if (err){    res.status(500).send(err.message)    }
                idtiposus=xtiposus._id

                Catalogo.create({   "tipo" : "UNIDADES",    "nombre" : "WEBAPP",   "filtro" : ("2018-09-27T18:29:11.918+0000"),  "estado" : "Activo", "createdAt" : ("2018-09-27T18:29:53.037+0000"),   "updatedAt" : ("2018-09-27T18:29:53.037+0000"),   "__v" : (0),  "idempresa" : idempresa                    }, function(err, xcatuni1) {
                    if (err){    res.status(500).send(err.message)    }
                    iduniuser=xcatuni1._id

                    Catalogo.create({   "tipo" : "UNIDADES",    "nombre" : "ADMINISTRADOR",   "fecha" : ("2018-09-27T18:29:11.918+0000"),  "estado" : "Activo", "createdAt" : ("2018-09-27T18:29:53.037+0000"),   "updatedAt" : ("2018-09-27T18:29:53.037+0000"),   "__v" : (0),  "idempresa" : idempresa                    }, function(err, xcatuni2) {
                        if (err){    res.status(500).send(err.message)    }
                        iduniadmin=xcatuni2._id
                        Moduloxx.create({   "componente" : "ProfilePage", "estado" : "Activo",  "grupo" : "PAGINA",  "icono" : "contact",  "idempresa" : idempresa,  "index" : "20", 
                        "nivel" : "Usuario",    "nombre" : "Perfil",   "tabcomponente" : "TabsPage",   "titulo" : "ProfilePage",   "usuarionew" : idempresaxx + 'admin@gmail.com', 
                                }, function(err, xmod1) {
                                if (err){    res.status(500).send(err.message)    }


                                Moduloxx.create( {   "componente" : "EventosList2Page",  "estado" : "Activo", "grupo" : "PAGINA",   "icono" : "home",    "idempresa" : idempresa,      "index" : "70",   "nivel" : "Administrador",    "nombre" : "Eventos",      "tabcomponente" : "EventosList2Page",   "titulo" : "EventosList2Page",  "usuarionew" : idempresaxx + 'admin@gmail.com'  }
                                , function(err, xmod2) {
                                if (err){    res.status(500).send(err.message)    }
                                                
                                                Perfil.create({  "nombre" : "user",  "estado" : "Activo",  "createdAt" : ("2018-08-03T01:25:07.733+0000"),    "updatedAt" : ("2018-11-02T16:12:22.847+0000"),   "__v" : (0),      "unidad" : {         "id" : xcatuni1._id,        "nombre" : xcatuni1.nombre   },      "usuarionew" : idempresaxx + 'admin@gmail.com',        "idempresa" : idempresa    },
                                                function(err, xperfil1) {
                                                        if (err){    res.status(500).send(err.message)    }
                                                
                                                        //  crear todos los permisos de user
                                                        Permiso.create({   "idrol" : xperfil1._id,    "nombre" : xmod1._id,    "ingreso" : true,   "consulta" : true,    "eliminacion" : true,                          "creacion" : true,                                   "actualizacion" : true,      "createdAt" : ("2018-08-03T01:25:49.367+0000"),      "updatedAt" : ("2019-01-17T20:28:13.600+0000"),                               "__v" : (0),                                     "usuarionew" : idempresaxx + 'admin@gmail.com',         "orden" : (10),        "idempresa" : idempresa                                });
                                                        Permiso.create({   "idrol" : xperfil1._id,    "nombre" : xmod2._id,    "ingreso" : true,   "consulta" : true,    "eliminacion" : true,                          "creacion" : true,                                   "actualizacion" : true,      "createdAt" : ("2018-08-03T01:25:49.367+0000"),      "updatedAt" : ("2019-01-17T20:28:13.600+0000"),                               "__v" : (0),                                     "usuarionew" : idempresaxx + 'admin@gmail.com',         "orden" : (10),        "idempresa" : idempresa                                });

                                                        


                                                        Moduloxx.create( {  "componente" : "ChatHomePage", "estado" : "Activo",   "grupo" : "PAGINA",  "icono" : "chatboxes",    "idempresa" :idempresa,     "index" : "310",                                                "nivel" : ".",                                        "nombre" : "Chats",    "tabcomponente" : "ChatHomePage",   "titulo" : "ChatHomePage",    "usuarionew" :  idempresaxx + 'admin@gmail.com'            }
                                                        , function(err, xmod22) {
                                                        if (err){    res.status(500).send(err.message)    }
                                                                //-------------------------SEGURIDAD
                                                                Moduloxx.create({     "componente" : "SEGURIDAD",   "estado" : "Activo",   "grupo" : "MENU",   "icono" : "key",       "idempresa" : idempresa,                                                             "index" : "190", "nivel" : ".",     "nombre" : "SEGURIDAD",  "tabcomponente" : "seguridad",   "titulo" : "Seguridad del sistema",                                                                  "usuarionew" : idempresaxx + 'admin@gmail.com'               }
                                                                , function(err, xmod23) {
                                                                        if (err){    res.status(500).send(err.message)    }
                                                                //-------------------------EMPRESAS
                                                                        Moduloxx.create( {   "componente" : "EMPRESAS", "estado" : "Activo",  "grupo" : "MENU", "icono" : "control",    "idempresa" : idempresa,  "index" : "250",  "nivel" : ".",   "nombre" : "EMPRESAS",  "tabcomponente" : "CONTROL DE ACCESO",                                          "titulo" : "CONTROL DE ACCESO",                                                             "usuarionew" : idempresaxx + 'admin@gmail.com' }
                                                                        , function(err, xmod24) {
        
                                                                        if (err){    res.status(500).send(err.message)    }
                                                                        
                                                                        
                                                                                //----PERFIL ADMINISTRADOR
                                                                                Perfil.create({  "nombre" : "Administrador",  "estado" : "Activo",  "createdAt" : ("2018-08-03T01:25:07.733+0000"),    "updatedAt" : ("2018-11-02T16:12:22.847+0000"),   "__v" : (0),      "unidad" : {         "id" : xcatuni2._id,        "nombre" : xcatuni2.nombre   },      "usuarionew" : idempresaxx + 'admin@gmail.com',        "idempresa" : idempresa    }, function(err,
                                                                                        xperfil2) {
                                                                                        if (err){    res.status(500).send('3333333333333333333333333333'+err.message)    }
                                                                                        
                                                                                        //crear PERFIL Y CHAT
                                                                                                Permiso.create({   "idrol" : xperfil2._id,    "nombre" : xmod1._id,    "ingreso" : true,   "consulta" : true,    "eliminacion" : true,                          "creacion" : true,                                   "actualizacion" : true,  "filtro" : true,"reporte" : true,    "createdAt" : ("2018-08-03T01:25:49.367+0000"),      "updatedAt" : ("2019-01-17T20:28:13.600+0000"),                               "__v" : (0),                                     "usuarionew" : idempresaxx + 'admin@gmail.com',         "orden" : (10),        "idempresa" : idempresa                                });
                                                                                                Permiso.create({   "idrol" : xperfil2._id,    "nombre" :xmod22._id,    "ingreso" : true,   "consulta" : true,    "eliminacion" : true,                          "creacion" : true,                                   "actualizacion" : true,"filtro" : true,"reporte" : true,      "createdAt" : ("2018-08-03T01:25:49.367+0000"),      "updatedAt" : ("2019-01-17T20:28:13.600+0000"),                               "__v" : (0),                                     "usuarionew" : idempresaxx + 'admin@gmail.com',         "orden" : (10),        "idempresa" : idempresa                                });
                                                                                                
                                                                                                //seguridad 
                                                                                                Permiso.create({   "idrol" : xperfil2._id,    "nombre" :xmod23._id,    "ingreso" : true,   "consulta" : true,    "eliminacion" : true,                          "creacion" : true,                                   "actualizacion" : true,"filtro" : true,"reporte" : true,      "createdAt" : ("2018-08-03T01:25:49.367+0000"),      "updatedAt" : ("2019-01-17T20:28:13.600+0000"),                               "__v" : (0),                                     "usuarionew" : idempresaxx + 'admin@gmail.com',         "orden" : (10),        "idempresa" : idempresa                                }
                                                                                                , function(err, xper1) {
                                                                                                        if (err){    res.status(500).send('22222222222222222222222222222'+err.message)    }
                                                                                                
                
                                                                                                        Moduloxx.create( {    "componente" : "UserListPage",  "estado" : "Activo",   "grupo" : "PAGINA",                                                                       "icono" : "person-add",      "idempresa" : idempresa,   "index" : "60",  "nivel" : "Usuario",         "nombre" : "Usuarios",                                               "tabcomponente" : " UserListPage",                                                    "titulo" : "UserListPage",    "usuarionew" :  idempresaxx + 'admin@gmail.com'       } 
                                                                                                        , function(err, xmodb1) {
                                                                                                                //USUARIOS SEGURIDAD
                                                                                                                if (err){    res.status(500).send('55555555555555555555'+err.message)    }
                                                                                                                //     res.json(todo);***********************************************************************************************

                                                                                                                
                                                                                                                                Permison2.create({   "idpermiso" : xper1._id,   "idrol" : xperfil2._id, "nombre" :xmodb1._id, "ingreso" : true, "consulta" : true,  "eliminacion" : true,     "creacion" : true,                                                               "actualizacion" : true,"filtro" : true,"reporte" : true, "createdAt" : ("2018-10-17T21:03:49.206+0000"),                                                                      "updatedAt" : ("2019-01-17T20:24:32.369+0000"),   "usuarioup" : idempresaxx + 'admin@gmail.com',  "orden" : (10)         ,  "idempresa" : idempresa                                                                    });    
                                                                                                                
                                                                                                                                Moduloxx.create( {   "componente" : "TiposuscriptorListPage",       "estado" : "Activo",      "grupo" : "PAGINA" ,  "icono" : "more",    "idempresa" : idempresa,    "index" : "280",                                "nivel" : ".",                                                                                         "nombre" : "Tipo usuario",            "tabcomponente" : "TiposuscriptorListPage",                           "titulo" : "TiposuscriptorListPage",  "usuarionew" : idempresaxx + 'admin@gmail.com'          }
                                                                                                                                , function(err, xmodb1a) {
                                                                                                                                if (err){    res.status(500).send('1111111111111' +err.message)    }
                                                                                                                                //------------TIPO SUSCRIPTOR
                                                                                                                                        Permison2.create({   "idpermiso" : xper1._id,   "idrol" : xperfil2._id, "nombre" :xmodb1a._id, "ingreso" : true, "consulta" : true,  "eliminacion" : true,     "creacion" : true,                                                               "actualizacion" : true,"filtro" : true,"reporte" : true, "createdAt" : ("2018-10-17T21:03:49.206+0000"),                                                                      "updatedAt" : ("2019-01-17T20:24:32.369+0000"),   "usuarioup" : idempresaxx + 'admin@gmail.com',  "orden" : (10)         ,  "idempresa" : idempresa                                                                    });    
                                                                                                                                
                                                                                                                                //  res.json(todo);
                                                                                                                                        
        
                                                                                                                                        //EMPRESAS    
                                                                                                                                        
                                                                                                                                        
                                                                                                                                        Permiso.create({   "idrol" : xperfil2._id,    "nombre" :xmod24._id,    "ingreso" : true,   "consulta" : true,    "eliminacion" : true,                          "creacion" : true,                                   "actualizacion" : true,"filtro" : true,"reporte" : true,      "createdAt" : ("2018-08-03T01:25:49.367+0000"),      "updatedAt" : ("2019-01-17T20:28:13.600+0000"),                               "__v" : (0),                                     "usuarionew" : idempresaxx + 'admin@gmail.com',         "orden" : (10),        "idempresa" : idempresa                                }
                                                                                                                                        , function(err, xper2) {
                                                                                                                                        if (err){    res.status(500).send('777777777777777777777'+err.message)    }
                                                        
                                                                                                                                        Moduloxx.create({   "componente" : "EmpresaListPage",   "estado" : "Activo",  "grupo" : "BUSES",     "icono" : "filing",  "idempresa" : idempresa, "index" : "50",   "nivel" : "Administrador",                   "nombre" : "Empresa",  "tabcomponente" : "EmpresaListPage",        "titulo" : "EmpresaListPage",    "usuarionew" :  idempresaxx + 'admin@gmail.com'  }
                                                                                                                                                        , function(err, xmodb2) {
                                                                                                                                                        if (err){    res.status(500).send('333333333333333333333'+err.message)    }
        
                                                                                                                                                                
                                                                                                                                                                Permison2.create({   "idpermiso" : xper2._id,   "idrol" : xperfil2._id, "nombre" :xmodb2._id, "ingreso" : true, "consulta" : true,  "eliminacion" : true,     "creacion" : true,                                                               "actualizacion" : true,"filtro" : true,"reporte" : true, "createdAt" : ("2018-10-17T21:03:49.206+0000"),                                                                      "updatedAt" : ("2019-01-17T20:24:32.369+0000"),   "usuarioup" : idempresaxx + 'admin@gmail.com',  "orden" : (10) ,  "idempresa" : idempresa                                                                           });    
                                                                                                                                                                
                                                                                                                                                                
                                                                                                                                                                var password2= generator.generate({
                                                                                                                                                                length: 4,
                                                                                                                                                                numbers: true
                                                                                                                                                                });   
                                                                                                                                                                var user = new User({
                                                                                                                                                                "email" : idempresaxx + 'admin@gmail.com', 
                                                                                                                                                                "password" : password2+'A123@', 
                                                                                                                                                                "role" : "Administrador", 
                                                                                                                                                                "idempresa" : idempresa, 
                                                                                                                                                                "nombre" : idempresaxx+' admin', 
                                                                                                                                                                "cui" : '1234567', 
                                                                                                                                                                "direccion" : 'direccion'  , 
                                                                                                                                                                "telefono" : '12345678' , 
                                                                                                                                                                "lenguaje" : "Español", 
                                                                                                                                                                "sexo" : "Masculino", 
                                                                                                                                                                "estado" : "Activo", 
                                                                                                                                                                "nov" : "", 
                                                                                                                                                                "unidad" : xcatuni2._id, 
                                                                                                                                                                "codpersonal" : "123", 
                                                                                                                                                                "interno" : "0", 
                                                                                                                                                                "estadoemail" : "1", 
                                                                                                                                                                "tiposuscriptor" : xtiposus2._id, 
                                                                                                                                                                "APP" : idempresa, 
                                                                                                                                                                "accesoestado" : "", 
                                                                                                                                                                "accesohora" : "", 
                                                                                                                                                                "idasociado" : "", 
                                                                                                                                                                "controlacceso" : "", 
                                                                                                                                                                "carnecalusac" : "", 
                                                                                                                                                                "createdAt" : ("2019-10-09T16:35:33.769+0000"), 
                                                                                                                                                                "updatedAt" : ("2019-10-13T16:19:15.357+0000"), 
                                                                                                                                                                "__v" : (0), 
                                                                                                                                                                "fechanac" : ("2019-10-11T00:00:00.000+0000"), 
                                                                                                                                                                "foto" : "data:image/jpeg;base64,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", 
                                                                                                                                                                "usuarionew" : idempresaxx + 'admin@gmail.com'
                                                                                                                                                                
                                                                                                                                                                
                                                                                                                                                                });

                                

                                                                                                                                                                user.save(function(err, user){

                                                                                                                                                                if(err){
                                                                                                                                                                        return next(err);
                                                                                                                                                                }

                                                                                                                                                                
                                                                                                                                                                
                                                                                                                                                        
                                                                                                                                                                mailt.sendEmail(['mario.morales@mcloude.com','mario.morales@mcloude.com'],'body creacion de empresa correo ' +  idempresaxx + '   clave: ' +  password2+'A123@', 'Creación de empresa :'+req.body.nombre,['mario.morales@mcloude.com']);
                                                                                                                                                        
                                                                                                                                                                res.json(todo);
                                                                                                                                                        
                                                                                                                                                                });

                                                                                                                                                                
                                                                        
                                                                                                                                                                




                                                                                                                                                        });
                                                        
                                                                                                                                        });
                                                                                                                                        
                
                
                                                                                                                                });
                                        
                                                                                                        });


                                                                                                });

                                                                                        //empresas
                                                                                        });

                                                                        });   });});

                                                        //ADMINISTRADOR

                                                        });


                        });   });


                      });
                  });

              });
            });
    });

                break;

                case 'participacursos':
                        //http://127.0.0.1:9090/api/datosfijos/participacursos/mpalaciosgonzalez986@gmail.com
                        var myData = [];
                        var teve='';
                        var teveid='';
                        var tipoevento='';
                        var tfecha='';
                        var thora='';
           
                        Evento.find({impresion:'Imprimir diploma'
                                }).select({_id:1,nombre:1,fecha:1,costo:1,tipoevento:1,idempresa:1,unidad:1,plantilla:1}).sort({_id:-1}).lean().exec(function(err, todos0aaa) {
       
                

                        var duplicates = [];


                        for(var i = 0; i < todos0aaa.length;i++){
        
                                duplicates.push(todos0aaa[i]._id);

                            }



                                Participa.find({correo:req.params.id2, idevento: {$in: duplicates}}).sort({idevento:-1}).lean().exec(function(err, todos2) {
                                       
                                      if(todos2.length)
                                      {
                                        for (var i = 0; i < todos2.length; i++) {
                                              

                                                
                                                for (var ii = 0; ii < todos0aaa.length; ii++) {
                                                        if(todos2[i].idevento==todos0aaa[ii]._id)
                                                        {
                                                                teve=todos0aaa[ii].nombre;
                                                                teveid=todos0aaa[ii]._id;
                                                                tfecha=todos0aaa[ii].fecha;
                                                                thora=todos0aaa[ii].costo;
                                                                tipoevento=todos0aaa[ii].tipoevento;
                                                                
                                                                myData.push({plantilla:todos0aaa[ii].plantilla, idempresa:todos0aaa[ii].idempresa,unidad:todos0aaa[ii].unidad,ideve:teveid,tipoevento:tipoevento,idcurso:todos2[i]._id ,nombre:todos2[i].nombre + ' ' +todos2[i].apellido,curso:teve,tipo:2,fecha:tfecha,hora:thora});

                                                        }
                                                }


                                              

                                              
                                        }
                                       
                                }
                              
                                        res.json(myData);   

                                    });

                     
               
        }); 


                        break;

                        case 'participacursos2':
                                //http://127.0.0.1:9090/api/datosfijos/participacursos/mpalaciosgonzalez986@gmail.com
                                var myData = [];
                                var teve='';
                                var tipoevento='';
                                var tfecha='';
                                var thora='';
                              

                                var arrr=req.params.id2.split('°')

                                if(arrr[1]=='1')
                                {


                                }
                                else
                                {
                                        

                                        Evento.find({_id:arrr[2]
                                        }).select({_id:1,nombre:1,fecha:1,costo:1,tipoevento:1,idempresa:1,unidad:1}).lean()
                                        .exec(function(err, todos0aaa) {

                                                
                                var duplicates = [];
        
        
                                for(var i = 0; i < todos0aaa.length;i++){
        
                                        duplicates.push(todos0aaa[i]._id);
        
                                    }

        
                                        Participa.find({_id:arrr[0]},function(err, todos2) {
                                                 
                                              if(todos2.length)
                                              {
                                                for (var i = 0; i < todos2.length; i++) {
                                                      
        
                                                        
                                                        for (var ii = 0; ii < todos0aaa.length; ii++) {
                                                                if(todos2[i].idevento==todos0aaa[ii]._id)
                                                                {
                                                                        teve=todos0aaa[ii].nombre;
                                                                        tfecha=todos0aaa[ii].fecha;
                                                                        thora=todos0aaa[ii].costo;
                                                                        tipoevento=todos0aaa[ii].tipoevento;
                                                                        
                                                                        myData.push({ideve:todos0aaa[ii]._id, tipoevento:tipoevento,idcurso:todos2[i]._id ,nombre:todos2[i].nombre + ' ' +todos2[i].apellido,curso:teve,tipo:2,fecha:tfecha,hora:thora});
        
                                                                }
                                                        }
        
        
                                                      
        
                                                      
                                                }
                                        
                                        }
                                                res.json(myData);   
        
                                            });


               
                                        });

                                }

                                break;
        
        
        case 'help':
        Marketemail.find({idempresa:req.params.id3,idcategoria:req.params.id2}).populate('grupo').exec(function(err, todos) {
                if (err){ res.send(err); }

                res.json(todos);   
                
            });
        break;

        case 'SUNRPT11':

        var  nov='';
        Asignaest.find({no_orientacion:'2018003645'}).exec(function(err, todos) {
                if (err){ res.send(err); }

                var myData = [];
                for (var i = 0; i < todos.length; i++) {

                        var mat=0;
                        if( todos[i].idmateria=='Biologia'){mat=1;}
                        if( todos[i].idmateria=='Fisica'){mat=2;}
                        if( todos[i].idmateria=='Lenguaje'){mat=3;}
                        if( todos[i].idmateria=='Matematica'){mat=4;}
                        if( todos[i].idmateria=='Quimica'){mat=5;}

                    


                        myData.push({nov:todos[i].no_orientacion ,materia:mat});
                        var nov=todos[i].no_orientacion
                        console.log( ' ----------------- ' + todos[i].no_orientacion + ' ' + todos[i].idmateria + ' ' + mat) 
                       


                }

console.log('TERMINA')
              
                res.json(myData);   
                
            });
      /*

                        request({
                                url: "https://rest2019externo.herokuapp.com/api/estudiantepcb/" + nov +"/resultado" + req.params.id2+"/" + req.params.id3,
                                method: "GET",
                                gzip: true,
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization':'123'
                                  
                    
                    
                                    
                                },
                                body: ''
                            }, function (error, response, body){
                       
                                if (error){  console.log(error); res.send(error);  }
                               
                            
                    
                        
                                  res.send(body);
                        
                    
                    
                    
                            });
*/


        break;        
        case 'registroest':

                var request = require('request');
                var options = {
                  'method': 'POST',
               
                  'url': 'http://calusacvirtual.usac.edu.gt/app/api/api.php?apicall=validate_carne',
                  'headers': {
                        "Accept": "application/json",
                        'Content-Type': 'application/json; charset=UTF-8',
                     
                       
                  },
                  formData: {
                    'carne':req.params.id2
                  }
                };

              
                request(options, function (error, response) { 
                  if (error) throw new Error(error);
                 
                  res.json(response.body);
                });


/*
                        request({
                                url: "http://52.151.38.147:9090/api/datosfijos/" + req.params.id2+"/" + req.params.id3,
                                method: "GET",
                                gzip: true,
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization':'123'
                                  
                    
                    
                                    
                                },
                                body: ''
                            }, function (error, response, body){
                       
                                if (error){  console.log(error); res.send(error);  }
                               
                            
                    
                        
                                  res.send(body);
                        
                    
                    
                    
                            });
*/


        break;        
        case 'oracleclient':

        if(req.params.id6)
        {

                request({
                        url:  'http://190.143.151.236:8501/api/'+req.params.id2 + '/' +  req.params.id3 +'/' +  req.params.id4+'/' +  req.params.id5+'/' +  req.params.id6,
                        method: "GET",
                        gzip: true,
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization':'123'
                          
            
            
                            
                        },
                        body: ''
                    }, function (error, response, body){
               
                        if (error){  console.log(error); res.send(error);  }
                       
                    
            
                
                          res.send(body);
                
            
            
            
                    });

        }
        else
        {
                console.log('en 4')
                console.log('http://190.143.151.236:8501/api/'+req.params.id2 + '/' +  req.params.id3 +'/' +  req.params.id4)
                request({
                        url:  'http://190.143.151.236:8501/api/'+req.params.id2 + '/' +  req.params.id3 +'/' +  req.params.id4,
                        method: "GET",
                        gzip: true,
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization':'123'
                          
            
            
                            
                        },
                        body: ''
                    }, function (error, response, body){
               
                        if (error){  console.log(error); res.send(error);  }
                       
                    
            
                
                          res.send(body);
                
            
            
            
                    });

        }



        break;        
        case 'sungeneralaspirante':
                Asignapcb.aggregate( [
                      
                        {    
                          
                        
                            "$group" : { 
                              
                                "_id": { "tipounidad" : "$idtipounidad.nombre",
                                "unidad" : "$idunidadacademica.nombre"
                             },
                            "cantidad" : { 
                                                       "$sum" :(1)
                                                   }
                            }
                        }, 
                        { 
                            "$project" : { 
                                "tipounidad" : "$_id.tipounidad", 
                                "unidad": "$_id.unidad", 
                              
                                "cantidad" : "$cantidad", 
                            
                                "_id" : (0)
                            }
                        }
                    ]).exec(function(err, todos2) {
                        if (err){  res.send(err);  }
                                       
                                                res.json(todos2);   
                           
                    });
                break;
                case 'papgeneralaspirante':
                asignapap.aggregate( [
                      
                        {    
                          
                        
                            "$group" : { 
                              
                                "_id": { "estado" : "$estado"
                                
                             },
                            "cantidad" : { 
                                                       "$sum" :(1)
                                                   }
                            }
                        }, 
                        { 
                            "$project" : { 
                                "estado" : "$_id.estado", 
                                "cantidad" : "$cantidad", 
                            
                                "_id" : (0)
                            }
                        }
                    ]).exec(function(err, todos2) {
                        if (err){  res.send(err);  }
                                       
                                                res.json(todos2);   
                           
                    });
                break;
                case 'sungeneralmateria':
                        Asignaestudiante.aggregate( [
                      
                                {    
                                  
                                
                                    "$group" : { 
                                      
                                        "_id": { "tipounidad" : "$idtipounidad.nombre",
                                        "unidad" : "$idunidadacademica.nombre",
                                        "periodo" : "$idperiodo.nombre",
                                        "edificio" : "$idedificio.nombre",
                                        "salon" : "$idsalon.nombre",
                                        "materia":"$idmateria",
                                        "horario" : "$idhorario",
                                     },
                                    "cantidad" : { 
                                                               "$sum" :(1)
                                                           }
                                    }
                                }, 
                                { 
                                    "$project" : { 
                                        "tipounidad" : "$_id.tipounidad", 
                                        "unidad": "$_id.unidad", 
                                        "periodo": "$_id.periodo", 
                                        "edificio": "$_id.edificio", 
                                        "salon": "$_id.salon", 
                                        "materia": "$_id.materia", 
                                        "horario": "$_id.horario", 
                                        "cantidad" : "$cantidad", 
                                    
                                        "_id" : (0)
                                    }
                                }
                            ]).exec(function(err, todos2) {
                                if (err){  res.send(err);  }
                                               
                                                        res.json(todos2);   
                                   
                            });
                            
                        
        break;
        case 'papgeneralmateria':
                asignaestudiantepap.aggregate( [
              
                        {    
                          
                        
                            "$group" : { 
                              
                                "_id": { 
                                "periodo" : "$idperiodo.nombre",
                                "edificio" : "$idedificio.nombre",
                                "salon" : "$idsalon.nombre",
                                "materia":"$idmateria",
                                "horario" : "$idhorario",
                             },
                            "cantidad" : { 
                                                       "$sum" :(1)
                                                   }
                            }
                        }, 
                        { 
                            "$project" : { 
                             
                                "periodo": "$_id.periodo", 
                                "edificio": "$_id.edificio", 
                                "salon": "$_id.salon", 
                                "materia": "$_id.materia", 
                                "horario": "$_id.horario", 
                                "cantidad" : "$cantidad", 
                            
                                "_id" : (0)
                            }
                        }
                    ]).exec(function(err, todos2) {
                        if (err){  res.send(err);  }
                                       
                                                res.json(todos2);   
                           
                    });
                    
                
break;
        case 'comprasgeneral':

                usuarios.find({ "idempresa" : "5f8471ef1fcbb219a08e9c82"}).sort({_id : -1}).exec(function(err, todos100) {

                   
                producto.find({ "idempresa" : "5f8471ef1fcbb219a08e9c82"}).sort({_id : -1}).exec(function(err, todos10) {

                     
         Orden_compra.find({}).sort({_id : -1}).exec(function(err, todos) {
                if (err){  res.send(err); console.log(err)  }
                var myData = [];
                for (var i = 0; i < todos.length; i++) {
var  usuarioid=''
var usuarionombre=''
                        for (var kk = 0; kk < todos100.length; kk++) {
                                        var yy=todos100[kk]._id.toString()
                                        if(yy===todos[i].idusuario)
                                        {
                                                usuarioid=todos100[kk].
                                                break;
                                        }
                        }

                        for (var i2 = 0; i2 < todos[i].dproductos.length; i2++) {

                                var encuesta= (todos[i].dproductos[i2].rate).split('°')
                                var codigp=''
                                for (var i3 = 0; i3 < todos10.length; i3++) {
                                        var aa=''
                                        aa=todos10[i3]._id.toString()
                                        var bb=''
                                        bb=todos[i].dproductos[i2].id.toString()

                                        if(aa === bb)
                                        {   
                                                
                                                codigp=todos10[i3].codigo
                                                myData.push({nombre:todos[i].nombre,nombre2:todos[i].nombre2,
                                                        codigoproducto:codigp,
                                                        productonombre:todos[i].dproductos[i2].name,
                                                comproporprecio:encuesta[0],
                                                comproporbeneficios:encuesta[1],
                                                comproporseguridad:encuesta[2],
                                                comproporconfiable:encuesta[3],
                                                comproporutil:encuesta[4],
                                                cantidad:todos[i].dproductos[i2].amount,
                                                total:todos[i].dproductos[i2].subtotal
                                               
                                        
                                        })
                                                break;
                                        }
                                }


                               
                        }

                       
                }

                res.json(myData);   
        });
         });
        });
break;
                case 'calusacgeneral':

                console.log('entra')
        Asignacalusac.aggregate( [
                { 
                    "$match" : { 
                        "estadopago" : "Asignación exitosa",
"ano":'2021'
                     }
                }, 
                {    
                  
                
                    "$group" : { 
                      
                        "_id" : { 
                            "tipoa" : "$tipoa",
                            "unidad" : "$idtipounidad.nombre",
                           // "sexo" : "$sexo",
                          //  "ano" : "$ano",
                           // "curso" : "$idunidadacademica.nombre",
                            "periodo" : "$idperiodo.nombre",
                        //    "mes": { $substr: [ "$fechasiif", 0, 8 ] },
                            "monto":"$monto",
                         //   "operador":"$userasignadoemail",
                         //   "estadooperador":"$estadooperador",
                    //        "edad":{$round: [ {  
                // $divide: [{$subtract: [ new Date(), "$fechanac" ] },(365 * 24*60*60*1000)]
                  //       
                    //        }  ,0  ]
                      //  }

                        }, 
                        "COUNT(*)" : { 
                            "$sum" :(1)
                        }, 
                        "SUM(monto)" : { 
                             '$sum': { '$toInt': '$monto' } 
                        }
                    }
                }, 
                { 
                    "$project" : { 
                        "tipoa" : "$_id.tipoa", 
                        "unidad": "$_id.unidad", 
                       // "sexo": "$_id.sexo", 
                      //  "ano": "$_id.ano", 
                     //   "curso": "$_id.curso", 
                        "periodo": "$_id.periodo", 
                      //  "mes": "$_id.mes", 
                      //  "edad": "$_id.edad", 
                       // "operador":"$_id.operador",
                       // "estadooperador":"$_id.estadooperador",
                        "cantidad" : "$COUNT(*)", 
                        "monto" : "$SUM(monto)", 
                        "_id" : (0)
                    }
                }
            ]).exec(function(err, todos) {

              //  let stream = compressor.compressJson(todos);
                res.json(todos);   

            });
            break;
        case 'eventogeneral':
                Evento.find({}).sort({_id : -1}).exec(function(err, todos) {
                        if (err){  res.send(err); console.log(err)  }
                Participa.aggregate( [
                        { 
                            "$group" : {
                                "_id" : {
                                    "idevento" : "$idevento",
                                    "mes": { $dateToString: { format: "%Y-%m}", date: "$createdAt" } }
                                   
                                }, 
                                "cantidad" : {
                                    "$sum" : 1
                                }
                            }
                        }, 
                        { 
                            "$project" : {
                                "idevento" : "$_id.idevento", 
                                "mes" : "$_id.mes", 
                                "cantidad" : "$cantidad", 
                                "_id" :0
                            }
                        }
                    ]).exec(function(err, todos2) {

                        var myData = [];
                        for (var i = 0; i < todos.length; i++) {
                                for (var i2 = 0; i2 < todos2.length; i2++) {
                                        if(todos[i]._id==todos2[i2].idevento)
                                        {
                                                myData.push({unidad:todos[i].unidad,nombre:todos[i].nombre,cantidad:todos2[i2].cantidad,estado:todos[i].impresion
                                                ,grupo:todos[i].tipoevento,id:todos[i]._id,mes:todos2[i2].mes});
                                        }
                                        
                                }
                               
                        }
        
        
                     

                        res.json(myData);   

                    });
                });

                break;
                case 'eventogeneralmes2':
                        Evento.find({  "unidad" : "CURSOSLIBRES",mes:{"$ne":'na'}}).sort({_id : -1}).exec(function(err, todos) {
                                if (err){  res.send(err); console.log(err)  }
                               
                        Participa.aggregate( [
                                { 
                                    "$group" : {
                                        "_id" : {
                                            "idevento" : "$idevento"
                                           
                                        }, 
                                        "cantidad" : {
                                            "$sum" : 1
                                        }
                                    }
                                }, 
                                { 
                                    "$project" : {
                                        "idevento" : "$_id.idevento", 
                                        "cantidad" : "$cantidad", 
                                        "_id" :0
                                    }
                                }
                            ]).exec(function(err, todos2) {
        
                                var myData = [];
                                for (var i = 0; i < todos.length; i++) {
                                        for (var i2 = 0; i2 < todos2.length; i2++) {
                                                if(todos[i]._id==todos2[i2].idevento)
                                                { 
                                                       
                                                        myData.push({ nombre:todos[i].nombre,cantidad:todos2[i2].cantidad,estado:todos[i].impresion
                                                        ,grupo:todos[i].tipoevento,id:todos[i]._id,mes:todos[i].mes});
                                                }
                                                
                                        }
                                       
                                }
                
                
                             
        
                                res.json(myData);   
        
                            });
                        });
        
                        break;
                case 'cursoslibresgeneral':
                        Area_evento.find({}).sort({_id : -1}).exec(function(err, todos) {
                                if (err){  res.send(err); console.log(err)  }
                        Participa2.aggregate( [
                                { 
                                    "$group" : {
                                        "_id" : {
                                                "idtipoevento" : "$idtipoevento",
                                                "idarea" : "$idarea",
                                            "idevento" : "$idevento",
                                            "mes": { $dateToString: { format: "%Y-%m}", date: "$createdAt" } }
                                           
                                        }, 
                                        "cantidad" : {
                                            "$sum" : 1
                                        }
                                    }
                                }, 
                                { 
                                    "$project" : {
                                        "idtipoevento" : "$_id.idtipoevento", 
                                        "idarea" : "$_id.idarea", 
                                        "idevento" : "$_id.idevento", 
                                          "mes" : "$_id.mes", 
                                        "cantidad" : "$cantidad", 
                                        "_id" :0
                                    }
                                }
                            ]).exec(function(err, todos2) {
        
                             //   console.log(todos2)
                                var myData = [];
                                for (var i = 0; i < todos.length; i++) {
                                        for (var i2 = 0; i2 < todos2.length; i2++) {
                                                if(todos[i]._id==todos2[i2].idevento)
                                                {
                                                        myData.push({nombre:todos[i].nombre,cantidad:todos2[i2].cantidad,tipoevento:todos[i].idtipoevento
                                                        ,area:todos[i].idarea,mes:todos2[i2].mes});
                                                }
                                                
                                        }
                                       
                                }
                
                
                             
        console.log(myData)
                                res.json(myData);   
        
                            });
                        });
        
                        break;
               
        case 'actarea':
        

        Unidadacademica.find({}).exec(function(err, todos) {
                if (err){ res.send(err); }
               /*
                for (var i = 0; i < todos.length; i++) {

                        Asignaest.updateMany({'idunidadacademica.id': todos[i].id}, {
                                idunidadacademica :{id:todos[i]._id,nombre:todos[i].nombre,codigo:todos[i].codigo   }   	
                            }, function(err, numberAffected, rawResponse) {
                                 
                               //handle it
                            })



                            

                }
*/
                res.json(todos);   
                
            });

    
      
   
        break;
        case 'areas-evento':
    
        Area_evento.find({'idtipoevento.codigo':req.params.id2},function(err, todos) {
                if (err){  res.send(err); console.log(err)  }
                console.log(todos)
                res.json(todos);
        });
        break;
        case 'areasd-evento':
        Aread_evento.find({'idtipoevento.codigo':req.params.id2,'idarea.id':req.params.id3,estado:'1'},function(err, todos) {
                if (err){  res.send(err);  }
                res.json(todos);
        });
        break;

        case 'tablaasignacion3':
              
                Asignapcb.find({}).lean().exec(function(err, todos11) {
                        if (err){  res.send(err);  }    

                        var aaa=[];
                        for(var ii = 0; ii < todos11.length;ii++){
                                var d2 =new Date( todos11[ii].fechaini).toISOString().substr(0,10);   
                                var n2 = d2.split('-')   

                                aaa.push({no_orientacion:todos11[ii].no_orientacion,nombre:todos11[ii].nombre,fechanac:n2[2] + '-'+ n2[1] + '-' + n2[0],centro:todos11[ii].idtipounidad.nombre, 'unidad':todos11[ii].idunidadacademica.nombre,codigo:todos11[ii].idunidadacademica.codigo,cantidad:1})
                        }

                        console.log(aaa)
                        

             
                                        var resp=[]
                                 
                                      //  res.json(resp);
                                      var filename   = "Tablaasignacion3.csv";
                                      res.statusCode = 200;
                                      res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                                      res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                                      res.csv(aaa, true);
                                      
                        
                              
                                
                                });

              
                        break;

        case 'tablaasignacion2':
        //'idunidadacademica.codigo':'1'
                                Asignaest.find({}).lean().exec(function(err, todos) {
                                if (err){  res.send(err);  }    
                                var resp=[]
                                for(var i = 0; i < todos.length;i++){
                                var periodo=todos[i].idperiodo.nombre.split("-");
                       
                                var anio=Number(periodo[0])+1
                                var idmat=0
                                
                                if(todos[i].idmateria=='Biologia'){idmat=1}
                                if(todos[i].idmateria=='Fisica'){idmat=2}
                                if(todos[i].idmateria=='Lenguaje'){idmat=3}
                                if(todos[i].idmateria=='Matematica'){idmat=4}
                                if(todos[i].idmateria=='Quimica'){idmat=5}
        
                                var ll=todos[i].no_orientacion
                                var tno=0;
                                if(ll.length==10)
                                {
                                        tno=1
                                }
                                else
                                {
                                        tno=2
                                }
                                var d =new Date( todos[i].date).toISOString().substr(0,10);   
                                var n = d.split('-')   
        
                                resp.push({periodo:periodo[0] ,no_oportunidad:periodo[1]
                                        ,anio_asignacion:anio,id_facultad:todos[i].idunidadacademica.nombre
                                        ,id_tipo:todos[i].idtipounidad.nombre
                                        ,id_materia:todos[i].idmateria,noorientacion:todos[i].no_orientacion,id:todos[i]._id,nombre:todos[i].nombre});
                                }
                              //  res.json(resp);
                              var filename   = "Tablaasignacion2.csv";
                              res.statusCode = 200;
                              res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                              res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                              res.csv(resp, true);
                              
                
                        });
                      
                break;
        case 'tablaasignacionpcbprueba':
//'idunidadacademica.codigo':'1'
        //'idunidadacademica.codigo':'1'
        tipounidadx.find({}).lean().exec(function(err, todosu) {
                console.log('entra1')
                console.log(todosu.length)
                if (err){  res.send(err);  }    
/*
                var pagex=    Number(req.params.id3);
                var limitx=    Number(req.params.email);
                
                Personal.paginate({idempresa:req.params.id4},{populate: ['unidad','tiposuscriptor'],lean:     false,page:pagex, limit:  limitx})
            */


                        Asignaest.find({ } ).select({idtipounidad:1,idunidadacademica:1,no_orientacion:1,nombre:1,codfac:1,idmateria:1,fexamen:1
                                ,idhorario:1,idestudiante:1,'idsalon.nombre':1,noasignado:1})
                                .populate('idasigna').limit(80000).lean().exec(function(err, todos) {
                        if (err){  res.send(err);  }    
                     //   console.log(todos)
                     console.log('entra2')
                     console.log(todos.length)
                        var resp=[]
                        for(var i = 0; i < todos.length;i++){
                     console.log(i)
                        var idmat=0
                     

                        if(todos[i].idmateria=='Biologia'){idmat=1}
                        if(todos[i].idmateria=='Fisica'){idmat=2}
                        if(todos[i].idmateria=='Lenguaje'){idmat=3}
                        if(todos[i].idmateria=='Matematica'){idmat=4}
                        if(todos[i].idmateria=='Quimica'){idmat=5}

                        var ll=(todos[i].no_orientacion).trim()
                     
                        var tno=0;
        
                        
        
                        if(ll.length==10)
                        {
                                tno=1
                        }
                        else
                        {
                                tno=2
                                console.log('*'+todos[i].no_orientacion+'***')
                        }
                    

                        var d =new Date( todos[i].fexamen).toISOString().substr(0,10);   
                        var n = d.split('-')   

                        var d2 =new Date( todos[i].idasigna.fechaini).toISOString().substr(0,10);   
                        var n2 = d2.split('-')   
                        var codu='0'
                        var codu2='0'
                  
                        for(var jj = 0; jj < todosu.length;jj++){
                                if(todosu[jj]._id== todos[i].idtipounidad.id)
                                {
                                        
                                        codu=todosu[jj].codigo
                                        codu2=todosu[jj].nombre
                                        break;
                                }


                        }



                        resp.push({no_orientacion:todos[i].no_orientacion,fechanac:n2[2] + '-'+ n2[1] + '-' + n2[0],
                                nombre:todos[i].nombre,idcentro:codu,nombrecentro:codu2,idfacultad:todos[i].idunidadacademica.codigo,nombrefacultad:todos[i].idunidadacademica.nombre,codigofac:todos[i].codfac,id_materia:idmat,
                              no_asignado:todos[i].noasignado,salon:todos[i].idsalon.nombre,fechaprueba:n[2] + '-'+ n[1] + '-' + n[0],
                              horario:todos[i].idhorario,ingreso:tno,correo:todos[i].idestudiante});
                  

                        }
                      //  res.json(resp);
                        var filename   = "asignacionpcb.csv";
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/csv; charset=utf8;');
                        res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                        res.csv(resp, true);
                        
                });
        });
              
        break;
        case 'tablaasignacioncentro':

       
       

        //'idunidadacademica.codigo':'1'
                                Asignaest.find({ 'idtipounidad.id': { $nin: [ '5b97f1bceb1dab0ab0368cc6'] }}).select({idhorario:1,idsalon:1,nombre:1,idperiodo: 1,no_orientacion:1,idmateria:1,date:1,idunidadacademica:1,codfac:1,noasignado:1}).lean().exec(function(err, todos) {
                                if (err){  res.send(err);  }    
                                var resp=[]
                                for(var i = 0; i < todos.length;i++){
                                var periodo=todos[i].idperiodo.nombre.split("-");
                   
                                var anio=Number(periodo[0])+1
                                var idmat=0
                                
                                if(todos[i].idmateria=='Biologia'){idmat=1}
                                if(todos[i].idmateria=='Fisica'){idmat=2}
                                if(todos[i].idmateria=='Lenguaje'){idmat=3}
                                if(todos[i].idmateria=='Matematica'){idmat=4}
                                if(todos[i].idmateria=='Quimica'){idmat=5}
        
                                var ll=todos[i].no_orientacion
                                var tno=0;
        
                        
        
                                if(ll.length==10)
                                {
                                        tno=1
                                }
                                else
                                {
                                        tno=2
                                }
        
                                var pp=''
                                var noori=''
        
                                if(ll.length==10 || ll.length==9)
                                {
                                        pp=ll.substr(0,4);
                                        noori=ll.substr(4,ll.length-1)
        
                                }
                                else
                                {
                                                if(ll.length==7)
                                                {
                                                        pp=ll.substr(0,2);
                                                        noori=ll.substr(2,ll.length-1)
                        
                                                        
                                                }
                                                else
                                                {
                                                        pp='0'
                                                        noori=ll
                        
        
                                                }
        
        
                                }
        
        
                                var d =new Date( todos[i].date).toISOString().substr(0,10);   
                                var n = d.split('-')   
                                var  nn=''
                              
                                if(todos[i].nombre)      {nn=todos[i].nombre} 
                                      
                                resp.push({no_asignado:todos[i].noasignado ,no_orientacion:ll,nombre:nn,
                                        centro:todos[i].idunidadacademica.codigo,
                                        id_materia:idmat,salon:todos[i].idsalon.nombre,hora:todos[i].idhorario ,
                                        codigo_fac:todos[i].codfac,ingreso:tno
                                        ,no_oportunidad:periodo[1]
                                        ,anio_asignacion:anio});
        
                                
        
                                }
                              //  res.json(resp);
                                var filename   = "Tablaasignacion.csv";
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                                res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                                res.csv(resp, true);
                
                        });
                      
                break;
                case 'tablaasignacioncompleto':

       
       

                //'idunidadacademica.codigo':'1'
                                        Asignaest.find({ }).select({idhorario:1,idsalon:1,nombre:1,idperiodo: 1,no_orientacion:1,idmateria:1,date:1,idunidadacademica:1,codfac:1,noasignado:1}).lean().exec(function(err, todos) {
                                        if (err){  res.send(err);  }    
                                        var resp=[]
                                        for(var i = 0; i < todos.length;i++){
                                        var periodo=todos[i].idperiodo.nombre.split("-");
                            
                                        var anio=Number(periodo[0])+1
                                        var idmat=0
                                        
                                        if(todos[i].idmateria=='Biologia'){idmat=1}
                                        if(todos[i].idmateria=='Fisica'){idmat=2}
                                        if(todos[i].idmateria=='Lenguaje'){idmat=3}
                                        if(todos[i].idmateria=='Matematica'){idmat=4}
                                        if(todos[i].idmateria=='Quimica'){idmat=5}
                
                                        var ll=todos[i].no_orientacion
                                        var tno=0;
                
                                
                
                                        if(ll.length==10)
                                        {
                                                tno=1
                                        }
                                        else
                                        {
                                                tno=2
                                        }
                
                                        var pp=''
                                        var noori=''
                
                                        if(ll.length==10 || ll.length==9)
                                        {
                                                pp=ll.substr(0,4);
                                                noori=ll.substr(4,ll.length-1)
                
                                        }
                                        else
                                        {
                                                        if(ll.length==7)
                                                        {
                                                                pp=ll.substr(0,2);
                                                                noori=ll.substr(2,ll.length-1)
                                
                                                                
                                                        }
                                                        else
                                                        {
                                                                pp='0'
                                                                noori=ll
                                
                
                                                        }
                
                
                                        }
                
                
                                        var d =new Date( todos[i].date).toISOString().substr(0,10);   
                                        var n = d.split('-')   
                                        var  nn=''
                                  
                                        if(todos[i].nombre)      {nn=todos[i].nombre} 
                                              
                                        resp.push({no_asignado:todos[i].noasignado ,no_orientacion:ll,nombre:nn,
                                                centro:todos[i].idunidadacademica.codigo,
                                                id_materia:idmat,salon:todos[i].idsalon.nombre,hora:todos[i].idhorario ,
                                                codigo_fac:todos[i].codfac,ingreso:tno
                                                ,no_oportunidad:periodo[1]
                                                ,anio_asignacion:anio});
                
                                        
                
                                        }
                                      //  res.json(resp);
                                        var filename   = "Tablaasignacion.csv";
                                        res.statusCode = 200;
                                        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                                        res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                                        res.csv(resp, true);
                        
                                });
                              
                        break;
        case 'tablainfoboleta':
//'idunidadacademica.codigo':'1'
                        Facplan.find({}).lean().exec(function(err, todos) {
                        if (err){  res.send(err);  }    
                        var resp=[]
                        for(var i = 0; i < todos.length;i++){
                        var periodo=todos[i].idperiodo.nombre.split("-");
                //   console.log(periodo)
                        var anio=Number(periodo[0])+1
                        var idmat=0
                        
                        if(todos[i].idmateria=='Biologia'){idmat=1}
                        if(todos[i].idmateria=='Fisica'){idmat=2}
                        if(todos[i].idmateria=='Lenguaje'){idmat=3}
                        if(todos[i].idmateria=='Matematica'){idmat=4}
                        if(todos[i].idmateria=='Quimica'){idmat=5}

                     
                        var d =new Date( todos[i].date).toISOString().substr(0,10);   
                        var n = d.split('-')   

                        resp.push({codigo_fac:todos[i].codfac,id_facultad:todos[i].idunidadacademica.codigo
                                ,no_oportunidad:periodo[1]
                                ,anio_asignacion:anio
                                ,lugar:todos[i].idedificio.nombre
                                ,salon:todos[i].idsalon.nombre
                                ,horario:todos[i].idhorario
                                ,disponible:todos[i].capacidad
                                ,asignados:todos[i].asignados
                                ,fecha:n[2] + '-'+ n[1] + '-' + n[0]

                                ,id_materia:idmat});
                        }
                      //  res.json(resp);
                        var filename   = "Tablainfoboleta.csv";
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                        res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                        res.csv(resp, true);
        
                });
              
        break;
        
        case 'participantes2':
        cursoeve.find({},function(err, todos0) {
                        if (err){  res.send(err);  }      
                                Participa2.find({},function(err, todos) {
                                        if (err){  res.send(err);  }
                                        var resp=[]
                                        var tevento=''
                                        var ubica=''
                                        for(var i = 0; i < todos.length;i++){
                                                for(var ii = 0; ii < todos0.length;ii++){
                                                        if(todos0[ii]._id==todos[i].idevento)
                                                        {
                                                           tevento=  todos0[ii].nombre   
                                                           ubica= 'Edificio: '+todos0[ii].edificio + '  Salon: ' +  todos0[ii].salon     
                                                           break;
                                                        }
                                                }        
                                                //resp.push({tipocurso:todos[i].idtipoevento.nombre,area:todos[i].idarea.nombre,curso:tevento,nombre:todos[i].nombre + ' ' +todos[i].apellido,genero:todos[i].genero,correo:todos[i].correo,telefono:todos[i].telefono,edad:todos[i].edad});
                                                resp.push({ubica:ubica,tipocurso:todos[i].idtipoevento.nombre,area:todos[i].idarea.nombre,curso:tevento});
                                        }
                                        res.json(resp);
                                });
                });
                
        break;
        case 'buses-nelson':
                                request('http://190.143.151.236:8500/ws/databuses.cfm', function (error, response, body) {
                                        if (!error && response.statusCode == 200) {
                                        var importedJSON = JSON.parse(body);
                                        res.json(importedJSON);
                                        }
                                })
            break;
      
  
        case 'reporte-salon':


     var query=req.body.unidadacademica.nombre;
     var undef;

// Fails on undefined variables
if (query !== undef) {
    // variable is defined
    
    res.status(500).send('si ');
    return;
                       
} else {
    // else do this
   
    res.status(500).send('mo');
    return;

}

        if (query  != undefined) { console.log('ssssssssss')

        res.status(500).send('si ');
        return;
}


        if ( typeof query  !== 'undefined' && query )
{
  //do stuff if query is defined and not null

  res.status(500).send('si ');
  return;
}
else
{
     
        res.status(500).send('si ');
        return;
}

        //Facplan
      

        break;

        case 'modulo-grupo':
                        res.json([{id:'PAGINA',nombre:'PAGINA'} ,{id:'LINK',nombre:'LINK'},{id:'MENU',nombre:'MENU'},{id:'PAGINAHTML',nombre:'PAGINAHTML'},{id:'MENU_BOTONES',nombre:'MENU_BOTONES'}]);
        break;
        case 'ordenes-gess':
                res.json([{id:'605bb34d71887c22d0bfedbc°6074c31473b21e24e0f63c38°6074c61a73b21e24e0f63c40¬605a23446886480f70f6ec3f¬605a23446886480f70f6ec3fs¬Importaciones',nombre:'Importaciones'},{id:'6085a87f842ba023f878b618°6085acd0842ba023f878b625°6085b18d842ba023f878b634¬605a23696886480f70f6ec43¬605a23696886480f70f6ec43¬Exportaciones',nombre:'Exportaciones'},
                {id:'60862f892e70db0d600a82c2°608630572e70db0d600a82c4°608633fc2e70db0d600a82d0°608634e42e70db0d600a82d3¬605a24e46886480f70f6ec47¬605a24e46886480f70f6ec47¬Transitos',nombre:'Transitos'},
                {id:'6087209ee75c6616505520d9°608720ffe75c6616505520db°60873bf6e75c6616505520e8°60873cbee75c6616505520ea¬605a252e6886480f70f6ec4b¬605a252e6886480f70f6ec4bs¬DF / ZF',nombre:'DF / ZF'},
                {id:'60885496e75c661650552235¬605a26e16886480f70f6ec4f¬605a26e16886480f70f6ec4fs¬Faucas',nombre:'Faucas'}, ]);
break;
        case 'excel-eventos':
                           var filename   = "eventos.csv";

                                Participa.find({},function(err, todos2) {
                                        if (err){ res.send(err); }
                                        

                                        if(todos2.length>0)   {  

                                        //   res.json(todos2);

                                                Evento.find({idempresa:req.params.id2}).lean().exec({}, function(err,todos) {
                                                        if (err) res.send(err);
                                                        var myData = [];
                                                        var cc=0;
                                                        for(var i = 0; i < todos.length;i++){
                                                        
                                                                for(var j = 0; j < todos2.length;j++){
                                                                
                                                                        if(todos[i]._id==todos2[j].idevento)
                                                                        {
                                                                                cc=cc+1;
                                                                        }
                                                                                
                                                                }       

                                                                var d =new Date( todos[i].fechaini).toISOString().substr(0,10);   
                                                                var n = d.split('-')   
                                        

                                                        myData.push({nombre:cleanName(todos[i].nombre),fechaini:d,
                                                                ubicacion:todos[i].ubicacion,Noparticipantes:cc});
                                                        cc=0;
                                                        }
                                                        
                                                        res.statusCode = 200;
                                                        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                                                        res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                                                        res.csv(myData, true);
                                                //  res.json(todos2);  
                                                });

                                                
                                        }
                                
                                });


        break;
        case 'reportecsv':
                var filename   =req.params.id5 +  ".csv";

                var namess=req.params.id2
                var arrtodos=req.params.id4.split('°')
                var filtro
                if(arrtodos[1]==='todos')
                {
                    filtro={idempresa:arrtodos[0]}
                }
                else
                {
                    filtro={idempresa:arrtodos[0],usuarionew:arrtodos[1]}
                }
      
      
                    Frmmovild.find({idmovil:req.params.id2,idempresa:arrtodos[0]}).sort([['order', 1]]).exec(function(err, todos) {
                        if (err){ res.send(err); }
                     
                      
                 
                        
                
                   
                        var objetox = {};
                        for(var i = 0; i < todos.length;i++){
                            objetox[todos[i].name] =todos[i].title + '°' + todos[i].type + '°'+ todos[i].display;
                        }
              
              
                   
                                            if(todos.length>0)   {  
                                           
                                                var cad=''
                                                var cadxx=''
                                                var cad3=(dafiltrocad(todos,'','')).split('°')
                                          
                                                cad=cad3[0]
                                                cadxx='{'+ cad3[1] + '}'
                                                cad=cad + '"comentarioanulado"	: { "type" : "String" },"comentariocerrado"	: { "type" : "String" },"estadointerno"	: { "type" : "String" },  "geoposicion"	: { "type" : "String" },  "usuarionew"	: { "type" : "String" },      "usuarioup"	: { "type" : "String" },      "idempresa"	: { "type" : "String" }'
                                                cad='{' + cad + '}'
                                                cadxx='{' + cadxx + '}'
                                             
                                                var jsonObject = stringToObject(cad);
                                              
                                                var mongoose = require("mongoose");
                                                delete mongoose.connection.models[namess];
                                                var tt=  new mongoose.Schema(jsonObject, {timestamps:true });
                                              
                                                
                                            
                                                try {
                                                    var  frmtt= mongoose.model(namess,tt);
                                                    frmtt.find(filtro).sort({_id:-1}).exec(function(err, todos2) {
                                                        if (err){  res.send(err); }
                                          

                                                  var myData = functool.procesacsvrecord(objetox,todos2,'si')
                                                  
                                               
                                              
                                                 //var myData = json2csv.convert(todos2);

                                                     if(todos2.length>0)
                                                     {
                                                        res.statusCode = 200;
                                                        res.set('Content-Type', 'text/csv; charset=utf-8');
                                                        res.set('Content-Disposition', 'inline');
                                                        res.setHeader('Content-Type', 'data:text/csv; charset=utf-16le; header=present;');
                                                        res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                                                        res.csv(myData, true);
                                                    
                                                     }
                                                     else
                                                     {
                                                        res.statusCode = 200;
                                                        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                                                        res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                                                        res.csv([], true);
                                                     }
                                                      
                                                    });
                                                  } catch(e) {
                                                    
                                                    var  frmtt= mongoose.model(namess);
                                          
                                                    frmtt.find( filtro).sort({_id:-1}).exec(function(err, todos2) {
                                                         if (err){  res.send(err);
                                                        }
                                                       
                                                        res.statusCode = 200;
                                                        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                                                        res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                                                        res.csv(todos2, true);
                                                     
                                                     });
                                                  }
        
        
                                             
                                
                        }
                    });




              


break;
        case 'excel-calusaccursos':
                console.log('entyra excel-calusaccursos')

                Asignacalusac.find({'idtipounidad.id':'5e9735eec37fcd001eeb1d19', estadopago:'Asignación exitosa'})
                .select({cui:1,nombre:1,idplanifica:1,noboletapago:1,monto:1,carnecalusac:1}).exec(function(err, todos10) {
                    if (err){ res.send(err); console.log(err) }
        
                    if(todos10.length>0)   {  
                            console.log(todos10.length)

                        Facplan3.find({'idtipounidad.id':'5e9735eec37fcd001eeb1d19'})
                        .populate('idnivel').populate('idjornada').populate('idhorario').populate('idprofesor').exec(function(err, todos) {
                        if (err){  res.send(err);  }
                                       

                        var myData = [];
                 
               

                        for(var i = 0; i < todos.length;i++){

                                for(var ii = 0; ii < todos10.length;ii++){
                                        console.log(todos10[ii])
                                        if(todos10[ii].idplanifica==todos[i]._id)
                                        {
                                                myData.push({sede:todos[i].idtipounidad.nombre,curso:todos[i].idunidadacademica.nombre + '.' +todos[i].idperiodo.nombre
                                                ,jornada:todos[i].idjornada.nombre,horario:todos[i].idhorario.nombre,nivel:todos[i].idnivel.nombre
                                                ,profesor:todos[i].idprofesor.nombre,capacidad:todos[i].capacidad,cui:'_'+ todos10[ii].cui + ' ',
                                                nombre:todos10[ii].nombre,noboletapago:todos10[ii].noboletapago,
                                                monto:todos10[ii].monto,carnecalusac:todos10[ii].carnecalusac });
                                                }

                                        }
                                }
                        
        
                      
                        var filename   = "sedecursoscalusac.csv";
                        res.statusCode = 200;
                        var BOM = "\uFEFF"; 
                        var csvContent =  'text/csv;charset=utf-8,windows-1252,utf16le,utf8;';
                        res.setHeader('Content-Type', csvContent);
                        res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                        res.csv(myData, false);


            
                                        });


        
                      
                
                        
                }
        
        
                });
                break

                case 'excel-calusaccursos2':
                        console.log('entyra excel-calusaccursos2')
        
                        Asignacalusac.find({estadopago:'Asignación exitosa'})
                        .select({cui:1,idinterno:1,nombre:1,idplanifica:1,noboletapago:1,monto:1,carnecalusac:1,identificador:1}).exec(function(err, todos10) {
                            if (err){ res.send(err); console.log(err) }
                
                            if(todos10.length>0)   {  
                                    console.log(todos10.length)
        
                                Facplan3.find({})
                                .populate('idnivel').populate('idjornada').populate('idhorario').populate('idprofesor').exec(function(err, todos) {
                                if (err){  res.send(err);  }
                                               
        
                                var myData = [];
                                console.log(todos.length)
                       var cc=1;
        
                                for(var i = 0; i < todos.length;i++){
        
                                        for(var ii = 0; ii < todos10.length;ii++){
                                               
                                                if(todos10[ii].idplanifica==todos[i]._id)
                                                {
                                                        myData.push({correlativo:cc,identificador:'_'+todos10[ii].identificador,nombreestudiante:todos10[ii].nombre,correoestudiante:todos10[ii].idinterno
                                                                ,profesor:todos[i].idprofesor.nombre,profesorcorreo:todos[i].idprofesor.email,
                                                                        idioma:todos[i].idunidadacademica.nombre
                                                                         ,nivel:todos[i].idnivel.nombre ,jornada:todos[i].idjornada.nombre,horario:todos[i].idhorario.nombre
                                                        });
                                                        cc++;
                                                        }
        
                                                }
                                        }
                                
                
                              
                                var filename   = "sedecursoscalusac.csv";
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'text/csv; charset=UTF-8');
                                res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                                res.csv(myData, true);
        
        
                    
                                                });
        
        
                
                              
                        
                                
                        }
                
                
                        });
                        break
        case 'excel-calusac':

        Asignacalusac.find({ estadopago:'Asignación exitosa'}).populate('tipopago').exec(function(err, todos) {
            if (err){ res.send(err); console.log(err) }

            if(todos.length>0)   {  

                var myData = [];
                for(var i = 0; i < todos.length;i++){


                myData.push({nombre:todos[i].nombre,correo:todos[i].idinterno,boletapago:todos[i].noboletapago
                        ,tipo:todos[i].tipoa,tipopago:todos[i].tipopago.nombre });
                }
                var filename   = "participantes.csv";
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                res.csv(myData, true);
        
                
        }


        });
        break
        case 'excel-cursoslibres':
                console.log(req.params.id2)

                                var filename   = "participantescursuslibres.csv";
                                
                                Participa2.find({idevento:req.params.id2}).sort({nombre:1}).exec(function(err, todos2) {
                                        if (err){ res.send(err); }
                                        console.log(todos2)

                                        if(todos2.length>0)   {  

                                                var myData = [];
                                                for(var i = 0; i < todos2.length;i++){


                                                myData.push({cui:todos2[i].otros,tipo:todos2[i].idtipoevento,area:todos2[i].idarea,nombre:cleanName(todos2[i].nombre) + ' '+ cleanName(todos2[i].apellido),fecha:todos2[i].fecha.substr(0,10),correo:todos2[i].correo,telefono:todos2[i].telefono,genero:todos2[i].genero,edad:todos2[i].edad  });
                                                }
                                                
                                                res.statusCode = 200;
                                                res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                                                res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                                                res.csv(myData, true);
                                        
                                                
                                        }
                                
                                });

        break;

      
        case 'excel-participa':
                console.log(req.params.id2)

                                var filename   = "participantes.csv";
                                
                                Participa.find({idevento:req.params.id2}).sort({nombre:1}).exec(function(err, todos2) {
                                        if (err){ res.send(err); }
                                       

                                        if(todos2.length>0)   {  

                                                var myData = [];
                                                for(var i = 0; i < todos2.length;i++){
                                                        console.log(i)
console.log({nombre:cleanName(todos2[i].nombre) + ' '+ cleanName(todos2[i].apellido),
fecha:todos2[i].fecha.substr(0,10),ingresos:cleanName(todos2[i].cuenta),correo:todos2[i].correo  });

                                                myData.push({nombre:cleanName(todos2[i].nombre) + ' '+ cleanName(todos2[i].apellido),fecha:todos2[i].fecha.substr(0,10),ingresos:cleanName(todos2[i].cuenta),correo:todos2[i].correo  });
                                                }
                                                
                                                res.statusCode = 200;
                                                res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                                                res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                                                res.csv(myData, true);
                                        
                                                
                                        }
                                
                                });

        break;

        case 'excel-denuncias':

        var filename   = "denuncias.csv";
        

        Denunciaunidad.find({'jefeop':req.params.id2}).exec(function(err, todos) {
                if (err){  res.send(err);  }
                var myData3 = [];
                var myData32 = [];
                for(var i = 0; i <  todos.length;i++){
                    var cat=todos[i].categoria
                    for(var i2 = 0; i2 <  cat.length;i2++){
                        myData3.push(cat[i2]._id)
                        myData32.push(cat[i2].nombre)
                    }
    
                   
                }
               

               
    
                Participa33.find({tipo:{$in:myData32}}).populate('idusuario').exec(function(err, todos22) {
                        if (err){  res.send(err);  }
         
                        Participa3.find({tipo:{$in:myData3}}).populate('tipo').sort([['createdAt', 1]]).exec(function(err, todos2) {
                                if (err){  res.send(err);  }
             
                                var myData31 = [];
                                var mydata41=[]
                                for(var i = 0; i <  todos2.length;i++){
                                        var idusuario=''
                                        var fechaasignada=''
                                        var estadoasignada=''
                                        for(var i2 = 0; i2 <  todos22.length;i2++){
                                                if(todos2[i]._id==todos22[i2].iddenuncia)
                                                {
                                                      
                                                   idusuario=todos22[i2].idusuario.nombre;
                                                 
                                                   fechaasignada             =new Date( todos22[i2].createdAt).toISOString().substr(0,10)  ;
                                                   estadoasignada            =todos22[i2].estado;
                                                   break;

                                                }
                                        }

                                 if(idusuario!='')
                                 {
                                       
                                        myData31.push({
                                                nombre:todos2[i].nombre ,correo:todos2[i].correo
                                                ,xpos:todos2[i].xpos,ypos:todos2[i].ypos,
                                             estado:todos2[i].estado,tipo:todos2[i].tipo.nombre,
                                             createdAt:new Date( todos2[i].createdAt).toISOString().substr(0,10)
                                        ,usuarioseguimiento:idusuario,estadoseguimiento:estadoasignada,fechaseguimiento:fechaasignada})
           

                                 }     
                                 else{

                                        myData31.push({nombre:todos2[i].nombre ,correo:todos2[i].correo,
                                                xpos:todos2[i].xpos,ypos:todos2[i].ypos,
                                             estado:todos2[i].estado,tipo:todos2[i].tipo.nombre,
                                             createdAt:new Date( todos2[i].createdAt).toISOString().substr(0,10)
                                             ,usuarioseguimiento:'',estadoseguimiento:'',fechaseguimiento:''})
           
                                 }  


                             }

                                      
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                res.csv(myData31, true);
                 
                       
                
                }
                );

            
              
                });
             });


    
        break;
        case 'excel-asigna':

                                var filename   = "asignaciones.csv";
                                
                                Facplan.find({'idperiodo.nombre':req.params.id2,'idtipounidad.id':'5b97f1bceb1dab0ab0368cc6'}).sort({'idunidadacademica.codigo':1}).exec(function(err, todos2) {
                                        if (err){ res.send(err); }
                                        

                                        if(todos2.length>0)   {  

                                                var myData = [];
                                                for(var i = 0; i < todos2.length;i++){

                                                        var d =new Date( todos2[i].fexamen).toISOString()
                                                        var n = d.toString();      
                                                        var ll=''
                                                        if(todos2[i].idmateria=='Lenguaje'){ll='3'}
                                                        if(todos2[i].idmateria=='Matematica'){ll='4'}
                                                        if(todos2[i].idmateria=='Fisica'){ll='2'}
                                                        if(todos2[i].idmateria=='Quimica'){ll='5'}
                                                          if(todos2[i].idmateria=='Biologia'){ll='1'}

                                                        
                                                myData.push({unidadacademica:cleanName(todos2[i].idtipounidad.nombre),periodo:cleanName(todos2[i].idperiodo.nombre),codigounidad:todos2[i].idunidadacademica.codigo,unidadacademica:todos2[i].idunidadacademica.nombre,edificio:cleanName(todos2[i].idedificio.nombre),salon:cleanName(todos2[i].idsalon.nombre)
                                                        ,codigomateria:ll,materia:cleanName(todos2[i].idmateria),horario:cleanName(todos2[i].idhorario)
                                                        ,capacidad:todos2[i].capacidad ,asignados:todos2[i].asignados
                                                        ,fexamen:d.substr(0,10) ,codfac:todos2[i].codfac 
                                                 });
                                                }
                                                
                                                res.statusCode = 200;
                                                res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                                                res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                                                res.csv(myData, true);
                                        
                                                
                                        }
                                
                                });

        break;  
        case 'excel-asigna3':

        var filename   = "asignaciones2.csv";
        
        Facplan.find({'idperiodo.nombre':req.params.id2, 'idtipounidad.id': { $nin: [ '5b97f1bceb1dab0ab0368cc6'] }}).sort({'idunidadacademica.codigo':1}).exec(function(err, todos2) {
                if (err){ res.send(err); }
                

                if(todos2.length>0)   {  

                        var myData = [];
                        for(var i = 0; i < todos2.length;i++){

                                var d =new Date( todos2[i].fexamen).toISOString()
                                var n = d.toString();      
                                var ll=''
                                if(todos2[i].idmateria=='Lenguaje'){ll='3'}
                                if(todos2[i].idmateria=='Matematica'){ll='4'}
                                if(todos2[i].idmateria=='Fisica'){ll='2'}
                                if(todos2[i].idmateria=='Quimica'){ll='5'}
                                  if(todos2[i].idmateria=='Biologia'){ll='1'}

                                
                        myData.push({unidadacademica:cleanName(todos2[i].idtipounidad.nombre),periodo:cleanName(todos2[i].idperiodo.nombre),codigounidad:todos2[i].idunidadacademica.codigo,unidadacademica:todos2[i].idunidadacademica.nombre,edificio:cleanName(todos2[i].idedificio.nombre),salon:todos2[i].idsalon.nombre
                                ,codigomateria:ll,materia:cleanName(todos2[i].idmateria),horario:cleanName(todos2[i].idhorario)
                                ,capacidad:todos2[i].capacidad ,asignados:todos2[i].asignados
                                ,fexamen:d.substr(0,10) ,codfac:todos2[i].codfac 
                         });
                        }
                        
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                        res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                        res.csv(myData, true);
                
                        
                }
        
        });

break;  
        case 'excel-asignaU':

        var filename   = "asignacionesU.csv";
        
        Facplan.find({'idperiodo.nombre':req.params.id2,'idtipounidad.nombre':req.params.id3}).sort({'idunidadacademica.codigo':1}).exec(function(err, todos2) {
                if (err){ res.send(err); }
                

                if(todos2.length>0)   {  

                        var myData = [];
                        for(var i = 0; i < todos2.length;i++){

                                var d =new Date( todos2[i].fexamen).toISOString()
                                var n = d.toString();      
                                var ll=''
                                if(todos2[i].idmateria=='Lenguaje'){ll='3'}
                                if(todos2[i].idmateria=='Matematica'){ll='4'}
                                if(todos2[i].idmateria=='Fisica'){ll='2'}
                                if(todos2[i].idmateria=='Quimica'){ll='5'}
                                  if(todos2[i].idmateria=='Biologia'){ll='1'}

                                
                        myData.push({periodo:cleanName(todos2[i].idperiodo.nombre),codigounidad:todos2[i].idunidadacademica.codigo,unidadacademica:todos2[i].idunidadacademica.nombre,edificio:cleanName(todos2[i].idedificio.nombre),salon:cleanName(todos2[i].idsalon.nombre)
                                ,codigomateria:ll,materia:cleanName(todos2[i].idmateria),horario:cleanName(todos2[i].idhorario)
                                ,capacidad:todos2[i].capacidad ,asignados:todos2[i].asignados
                                ,fexamen:d.substr(0,10) ,codfac:todos2[i].codfac 
                         });
                        }
                        
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                        res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                        res.csv(myData, true);
                
                        
                }
        
        });

break;  
     




case 'excel-asigna33xxxcc':

Facplan.find({  }).exec(function(err, todos20) {
        if (err){ res.send(err); }

Asignaest.aggregate(
        [
                { 
                    "$group" : { 
                        "_id" : { 
                            "codfac" : "$codfac", 
                            "idunidadacademica᎐codigo" : "$idunidadacademica.codigo"
                        }, 
                        "COUNT(*)" : { 
                            "$sum" : 1
                        }
                    }
                }, 
                { 
                    "$project" : { 
                        "idunidadacademica.codigo" : "$_id.idunidadacademica᎐codigo", 
                        "codfac" : "$_id.codfac", 
                        "cantidad" : "$COUNT(*)", 
                        "_id" : 0
                    }
                }
            ], function (err, result) {
                if (err) {
                    next(err);
                } else {

                        var  data1=[]
                        for(var j = 0; j < result.length;j++){
                                var encuentra=0;
                                for(var jj = 0; jj < todos20.length;jj++){
                                        if(result[j].codfac==todos20[jj].codfac && result[j].idunidadacademica.codigo==todos20[jj].idunidadacademica.codigo  )
                                        {
                                                 encuentra=1;
                                                 console.log(todos20[jj].codfac )
                                                 break;
                                        }
                                }
                                        if(encuentra==1){ getNextSequenceValue2a(todos20[jj]._id,result[j].cantidad,res); }

                        }
res.json({ result});

                    
                }
            });

        });
  //  res.json(aa);
    break;


    
case 'excel-asigna33xxxccNOV':

 
        Asignapcb.find(
                {  "nombre" : "udefined"}, function (err, result) {
                        if (err) {
                            next(err);
                        } else {
        
                                console.log('entra')
                                console.log(result.length)
                                var  data1=[]
                                for(var j = 0; j < result.length;j++){
                                        var encuentra=0;
                                        for(var jj = 0; jj < 2000000;jj++){
                                                if(jj==1800000)
                                                {
                                                         encuentra=1;
                                                         console.log(result[j].idestudiante )
                                                         break;
                                                }
                                        }
                                                if(encuentra==1){ getNextSequenceValue2auser(result[j].idestudiante,0,res); }
        
                                }
        res.json({ result});
        
                            
                        }
                    });
        
          
            break;
        
        
        
        


                    



    case 'cupo-seccion':

        var filename   = "asignacionesPAP.csv";
        
        Facplan2.find({'idperiodo.id':req.params.id2}).sort({'asignados':-1}).exec(function(err, todos2) {
                if (err){ res.send(err); }
             

                if(todos2.length>0)   {  

                        var myData = [];
                        for(var i = 0; i < todos2.length;i++){

                                var ll=''
                                if(todos2[i].idmateria=='Lenguaje'){ll='3'}
                                if(todos2[i].idmateria=='Matematica'){ll='4'}
                                if(todos2[i].idmateria=='Fisica'){ll='2'}
                                if(todos2[i].idmateria=='Quimica'){ll='5'}
                                if(todos2[i].idmateria=='Biologia'){ll='1'}

                                
                        myData.push({periodo:cleanName(todos2[i].idperiodo.nombre),codigounidad:todos2[i].idunidadacademica.codigo,unidadacademica:todos2[i].idunidadacademica.nombre,edificio:cleanName(todos2[i].idedificio.nombre),salon:cleanName(todos2[i].idsalon.nombre)
                                ,codigomateria:ll,materia:cleanName(todos2[i].idmateria),horario:cleanName(todos2[i].idhorario)
                                ,capacidad:todos2[i].capacidad ,asignados:todos2[i].asignados
                                 ,jornada:todos2[i].idjornada
                         });
                        }
                        
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                        res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                        res.csv(myData, true);
                
                        
                }
        
        });

break;
case 'excel-asigna3papficha':
//127.0.0.1:9090/api/datosfijos/excel-asigna3papficha
var filename   = "Fichapap.csv";
                      Asignaestpap.find({}).populate('idasigna').exec(function(err, todos) {
                                if (err){ res.send(err); }

                                var myData2 = [];
                                     
                        
                                                for(var i = 0; i < todos.length;i++){

                                                        var aa=''
                                                        try {  aa=todos[i].idasigna.cierra   }
                                                              catch(error) {   aa==''       }

                                                              


                                                     
                                                        if(aa=='1')
                                                        {
                                                        if(todos[i].idasigna!==null )
                                                        {
                                                                var tedificio=''
                                                                var tsalon= todos[i].idsalon.nombre
                                                                var tsalon2=tsalon.split('-')

                                                                d =new Date(todos[i].updatedAt).toISOString().substr(0,10);   
//if(todos[i].idasigna.idperiodo==req.params.id2)     {         
myData2.push({
        fecha:d,
        cui:"_" +todos[i].idasigna.cui +" ",
        nombre:todos[i].idasigna.nombre, 
        nov:todos[i].idasigna.nov,
        carne:todos[i].idasigna.carne,
        monto:todos[i].idasigna.monto,
      cursosaplica:todos[i].idasigna.cursosaplica,
        correo:todos[i].idasigna.correo,
        edificio:todos[i].idedificio.nombre,
        codigosalon:tsalon2[0],
        salon:todos[i].idsalon.nombre,
        jornada:todos[i].idjornada,
        materia:todos[i].idmateria,
        horario:todos[i].idhorario,
        noasignado:todos[i].noasignado,
        seccion:todos[i].idseccion,
        noboleta:todos[i].idasigna.noboleta,
        monto:todos[i].idasigna.montodeuda

});
//}
                                                            
                                                        }
  
                                        
                                        

                                }
                        }

                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                                res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                                res.csv(myData2, true);
                                //   res.json(myData2);


                        });

                                     
                
                                      
                                
                                




break;
        default:

  


    }




    
}