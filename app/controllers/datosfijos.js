
var Perfil = require('../models/perfil');
var Moduloxx = require('../models/moduloxx');
var Permiso = require('../models/permiso');
var Permison2 = require('../models/permison2');
var Area_evento = require('../models/area_evento');
var Aread_evento = require('../models/aread_evento');
var csv      = require('csv-express');
var Evento = require('../models/eventos');
var Pagopap = require('../models/pagospap');
var Denunciaunidad = require('../models/denunciaunidad');
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

const fs = require('fs-extra');
var User = require('../models/user');


var Cuentaccoriente = require('../models/asignapapccorriente');


var Unidadacademica = require('../models/unidadacademica');
var Asignapcb = require('../models/asignapcb');
var Participa = require('../models/participa');
var Participa2 = require('../models/participa2');
var Facplan = require('../models/unidadplan');
var Facplan2 = require('../models/unidadplan2');
var cursoeve=require('../models/aread_evento');
var Userperfil = require('../models/userperfil2');
var Asignapap = require('../models/asignapap');
var Marketemail = require('../models/marketemail');
var Asignaestpap= require('../models/asignaestudiantepap');
var Personal = require('../models/user');

var request = require('request');

var Asignaest = require('../models/asignaestudiante');

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

    const  Modulovv = [{nombre:'idempresa',tipo:'String',requerido:1,visible:0},
   
    {nombre:'nombre',tipo:'String',requerido:1,visible:1},
    {nombre:'grupo',tipo:'Grupo',requerido:1,grupo:1,visible:1},
    {nombre:'titulo',tipo:'String',requerido:1,visible:1},
    {nombre:'componente',tipo:'String',requerido:1,visible:0},
    {nombre:'tabcomponente',tipo:'String',requerido:1,visible:0},
    {nombre:'index',tipo:'Number',requerido:1,visible:1},
    {nombre:'icono',tipo:'String',requerido:1,visible:1},
  
    {nombre:'nivel',tipo:'String',requerido:1,visible:1},
    {nombre:'estado',tipo:'Estado',requerido:1,visible:1},
    {nombre:'usuarionew',tipo:'String',requerido:1,visible:0},
    {nombre:'usuarioup',tipo:'String',requerido:1,visible:0}
    
];

const  Asociadovv = [{nombre:'idempresa',tipo:'String',requerido:1,visible:0},
   
{nombre:'nombre',tipo:'String',requerido:1,visible:1},
{nombre:'direccion',tipo:'String',requerido:1,visible:1},
{nombre:'telefono',tipo:'String',requerido:1,visible:1},
{nombre:'correo',tipo:'String',requerido:1,visible:1},
{nombre:'ubicacion',tipo:'String',requerido:1,visible:1},
{nombre:'horario',tipo:'String',requerido:1,visible:1},
{nombre:'foto',tipo:'Foto',requerido:1,visible:1},
{nombre:'nit',tipo:'String',requerido:1,visible:1},
{nombre:'nombrecomercial',tipo:'String',requerido:1,visible:1},
{nombre:'direccioncomercial',tipo:'String',requerido:1,visible:1},

{nombre:'estado',tipo:'Estado',requerido:1,visible:1},
{nombre:'usuarionew',tipo:'String',requerido:0,visible:0},
{nombre:'usuarioup',tipo:'String',requerido:0,visible:0}

];


   
      function logErrors(err, req, res, next) {
        console.error(err.stack);
        next(err);
      }


      
      function getNextSequenceValue2a(codfac2,idunidadacademicat,idedificiot,idsalont,idmateriat,idhorariot,cuentaaa,res){


       

        Facplan.findById({  codfac:codfac2 ,'idunidadacademica.id':idunidadacademicat,'idedificio.id':idedificiot,'idsalon.id':idsalont,idmateria:idmateriat ,idhorario:idhorariot }, function (err, todo)  {
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
                       
                        console.log(mat)

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
   
      
      function generafile(texto,nombre){
            
        var contents = texto;

        console.log(nombre)
       
fs.outputFile(nombre, contents, err => {
        if(err) {
        //  console.log(err);
        } else {
          console.log('The file was saved!');
        }
      })

      }

    function dacadenamodulo(vector,op) {
        var re=''
        for(var i = 0; i <vector.length; i++) {
                
                switch(vector[i].tipo)  {
                        case 'Number':
                                switch(op)  {
                                        case 'createcamposhtml':
                                                if(vector[i].visible==1)
                                                {
                                                        if(vector[i].requerido==1)
                                                        {
                                                                re= re+  '      <ion-item class="input-item">\n'
                                                                re= re+  '              <ion-label  position="floating">'+ capitalizeFirstLetter(vector[i].nombre)+'</ion-label>\n'
                                                                if(vector[i].tipo=='Number')
                                                                {
                                                                        re= re+  '              <ion-input inputMode="Number" clearInput="true" formControlName="' + vector[i].nombre +'" required></ion-input>\n'
                                                                 }
                                                                else{
                                                                        re= re+  '              <ion-input inputMode="text" clearInput="true" formControlName="' + vector[i].nombre +'" required></ion-input>\n'
                                                                }
                                                                re= re+  '      </ion-item>\n'
                                                                re= re+  '<div class="error-container">\n'
                                                                re= re+  '<div class="error-message" *ngIf="(Form.get(\''+ vector[i].nombre +'\').dirty || Form.get(\''+ vector[i].nombre +'\').touched)">\n'
                                                                re= re+  '  <ion-icon name="information-circle-outline"></ion-icon>\n'
                                                                re= re+  '  <span>Ingrese un '+ vector[i].nombre +' valido</span>\n'
                                                                re= re+  '</div>\n'
                                                                re= re+  ' </div>\n'
                                                                re= re+  '\n'
                                                        }
                                                        else
                                                        {
                                                                re= re+  '      <ion-item class="input-item">\n'
                                                                re= re+  '              <ion-label  position="floating">'+ capitalizeFirstLetter(vector[i].nombre)+'</ion-label>\n'
                                                                if(vector[i].tipo=='Number')
                                                                {
                                                                        re= re+  '              <ion-input inputMode="Number" clearInput="true" formControlName="' + vector[i].nombre +'" required></ion-input>\n'
                                                                 }
                                                                else{
                                                                        re= re+  '              <ion-input inputMode="text" clearInput="true" formControlName="' + vector[i].nombre +'" required></ion-input>\n'
                                                                }
                                                                re= re+  '      </ion-item>\n'
                                                                re= re+  '\n'

                                                        }
                                       
                                                }
                                        break;
                                        case 'createcamposjsv':
                                                if(vector[i].visible==1)
                                                {
                                                        if(vector[i].requerido==1)
                                                        {
                                                        re= re+ "       '"+ vector[i].nombre + "': new FormControl('', Validators.required),\n"
                                                        }
                                                        else{
                                                        re= re+ "       '"+ vector[i].nombre + "': new FormControl(''),\n"   
                                                        }
                                                }

                                        break;
                                        case 'createcamposjsv2':
                                                if(vector[i].visible==1)
                                                {
                                                        re= re+ "       this.Form.controls['"+ vector[i].nombre +"'].setValue(this.navParams.data.record."+ vector[i].nombre+");\n"   
                                                }

                                        break;
                                        case 'createcamposjsv3':
                                                if( vector[i].nombre!=='usuarioup' && vector[i].nombre!=='usuarionew')
                                                {
                                            
                                                        if(vector[i].nombre=='idempresa')
                                                        {
                                                                re= re + "       idempresa: this.userinfo[0].idempresa,\n"
                                                        }
                                                        else
                                                        {
                                                                re= re+ "       "+vector[i].nombre + "  : this.Form.controls['"+ vector[i].nombre  +"'].value,\n"   
                                                        }
                                                }   
                                                

                                        break;
                                        case 'listcamposhtml1':
                                                if(vector[i].visible==1)
                                                {
                                                        if(vector[i].nombre=='nombre')
                                                        {

                                                                
                                                                re= re + "      <p><strong>"+capitalizeFirstLetter(vector[i].nombre)+":</strong> {{item."+vector[i].nombre+"}}  </p>  \n"
                                                        }
                                                        else
                                                        {
                                                                if(vector[i].nombre=='estado')
                                                                {
                                                                        re= re+  "      <ion-badge color='medium'>{{item."+vector[i].nombre+"}}</ion-badge> \n"   
                                                                }
                                                                else{
                                                                        re= re+  "        <p> "+capitalizeFirstLetter(vector[i].nombre)+": {{item."+vector[i].nombre+"}} </p>\n"   
                                                                }
                                                             
                                                        }
                                                }
                                        break;
                                        case 'listcamposhtml2':
                                                if(vector[i].visible==1)
                                                {
                                                        if(vector[i].nombre=='nombre')
                                                        {

                                                                
                                                                re= re + "              <p><strong>"+capitalizeFirstLetter(vector[i].nombre)+":</strong> {{item."+vector[i].nombre+"}}  </p>  \n"
                                                        }
                                                        else
                                                        {
                                                                if(vector[i].nombre=='estado')
                                                                {
                                                                       // re= re+  " <ion-badge color='medium'>{{item."+vector[i].nombre+"}}</ion-badge> \n"   
                                                                }
                                                                else{
                                                                re= re+  "              <p> "+capitalizeFirstLetter(vector[i].nombre)+": {{item."+vector[i].nombre+"}} </p>\n"   
                                                                }
                                                             
                                                        }
                                                }
                                                break;
                                                case 'nodejs1':
                                                        if(vector[i].requerido==1)
                                                        {
                                                                re= re +"  "+ vector[i].nombre +"		: { type : Number, required : true },  \n"
                                                        }
                                                        else{
                                                                re= re +"  "+ vector[i].nombre +"		: { type : Number },  \n"
                                                        }
                                                        
                                                break
                                                case 'nodejs2':
                                                        if( vector[i].nombre!=='usuarioup' && vector[i].nombre!=='usuarionew')
                                                        {
                                                        re= re +" todo."+ vector[i].nombre +"       	=	req.body."+ vector[i].nombre +"        	||	todo."+ vector[i].nombre +";   \n";
                                                        }
                                                        break
                                                        case 'nodejs3':
                                                                if( vector[i].nombre!=='usuarioup' && vector[i].nombre!=='usuarionew')
                                                                {
                                                                re= re +"  "+ vector[i].nombre +"     	: req.body."+ vector[i].nombre +"    	,\n";
                                                        }
                                                        break
                                       
                                }
                               

                        break;
                        case 'String':
                                switch(op)  {
                                        case 'createcamposhtml':
                                                if(vector[i].visible==1)
                                                {
                                                        if(vector[i].requerido==1)
                                                        {
                                                                re= re+  '      <ion-item class="input-item">\n'
                                                                re= re+  '              <ion-label  position="floating">'+ capitalizeFirstLetter(vector[i].nombre)+'</ion-label>\n'
                                                                if(vector[i].tipo=='Number')
                                                                {
                                                                        re= re+  '              <ion-input inputMode="Number" clearInput="true" formControlName="' + vector[i].nombre +'" required></ion-input>\n'
                                                                }
                                                                else{
                                                                        re= re+  '              <ion-input inputMode="text" clearInput="true" formControlName="' + vector[i].nombre +'" required></ion-input>\n'
                                                                }
                                                                re= re+  '      </ion-item>\n'
                                                                re= re+  '<div class="error-container">\n'
                                                                re= re+  '<div class="error-message" *ngIf="(Form.get(\''+ vector[i].nombre +'\').dirty || Form.get(\''+ vector[i].nombre +'\').touched)">\n'
                                                                re= re+  '  <ion-icon name="information-circle-outline"></ion-icon>\n'
                                                                re= re+  '  <span>Ingrese un '+ vector[i].nombre +' valido</span>\n'
                                                                re= re+  '</div>\n'
                                                                re= re+  ' </div>\n'
                                                                re= re+  '\n'
                                                        }
                                                        else
                                                        {
                                                                re= re+  '      <ion-item class="input-item">\n'
                                                                re= re+  '              <ion-label  position="floating">'+ capitalizeFirstLetter(vector[i].nombre)+'</ion-label>\n'
                                                                if(vector[i].tipo=='Number')
                                                                {
                                                                        re= re+  '              <ion-input inputMode="Number" clearInput="true" formControlName="' + vector[i].nombre +'" required></ion-input>\n'
                                                                }
                                                                else{
                                                                        re= re+  '              <ion-input inputMode="text" clearInput="true" formControlName="' + vector[i].nombre +'" required></ion-input>\n'
                                                                }
                                                                re= re+  '      </ion-item>\n'
                                                                re= re+  '\n'

                                                        }
                                               
                                                }
                                        break;
                                        case 'createcamposjsv':
                                                if(vector[i].visible==1)
                                                {
                                                        if(vector[i].requerido==1)
                                                        {
                                                        if(vector[i].nombre==='correo' || vector[i].nombre==='email')
                                                        {
                                                                re= re+ "       '"+ vector[i].nombre + "': new FormControl('', Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),\n"
                                                        }
                                                        else
                                                        {
                                                                if(vector[i].nombre==='nombre' )
                                                        {
                                                                re= re+ "       '"+ vector[i].nombre + "': new FormControl('', Validators.required,Validators.pattern('[a-zA-Z ]*')])),\n"
                                                        }
                                                        else
                                                        {
                                                                re= re+ "       '"+ vector[i].nombre + "': new FormControl('', Validators.required),\n"
                                                        }        
                                                        }        
                                                     
                                                        }
                                                        else{
                                                        re= re+ "       '"+ vector[i].nombre + "': new FormControl(''),\n"   
                                                        }
                                                }

                                        break;
                                        case 'createcamposjsv2':
                                                if(vector[i].visible==1)
                                                {
                                                        re= re+ "       this.Form.controls['"+ vector[i].nombre +"'].setValue(this.navParams.data.record."+ vector[i].nombre+");\n"   
                                                }

                                        break;
                                        case 'createcamposjsv3':
                                                if( vector[i].nombre!=='usuarioup' && vector[i].nombre!=='usuarionew')
                                                {
                                                        if(vector[i].nombre=='idempresa')
                                                        {
                                                                re= re + "       idempresa: this.userinfo[0].idempresa,\n"
                                                        }
                                                        else
                                                        {
                                                                re= re+ "       "+vector[i].nombre + "  : this.Form.controls['"+ vector[i].nombre  +"'].value,\n"   
                                                        }
                                                }
                                                

                                        break;
                                        case 'listcamposhtml1':
                                                if(vector[i].visible==1)
                                                {
                                                        if(vector[i].nombre=='nombre')
                                                        {

                                                                
                                                                re= re + "        <p><strong>"+capitalizeFirstLetter(vector[i].nombre)+":</strong> {{item."+vector[i].nombre+"}}  </p>  \n"
                                                        }
                                                        else
                                                        {
                                                                if(vector[i].nombre=='estado')
                                                                {
                                                                        re= re+  "         <ion-badge color='medium'>{{item."+vector[i].nombre+"}}</ion-badge> \n"   
                                                                }
                                                                else{
                                                                        re= re+  "        <p> "+capitalizeFirstLetter(vector[i].nombre)+": {{item."+vector[i].nombre+"}} </p>\n"   
                                                                }
                                                             
                                                        }
                                                }
                                        break;
                                        case 'listcamposhtml2':
                                                if(vector[i].visible==1)
                                                {
                                                        if(vector[i].nombre=='nombre')
                                                        {

                                                                
                                                                re= re + "              <p><strong>"+capitalizeFirstLetter(vector[i].nombre)+":</strong> {{item."+vector[i].nombre+"}}  </p>  \n"
                                                        }
                                                        else
                                                        {
                                                                if(vector[i].nombre=='estado')
                                                                {
                                                                       // re= re+  " <ion-badge color='medium'>{{item."+vector[i].nombre+"}}</ion-badge> \n"   
                                                                }
                                                                else{
                                                                        re= re+  "              <p> "+capitalizeFirstLetter(vector[i].nombre)+": {{item."+vector[i].nombre+"}} </p>\n"   
                                                                }
                                                             
                                                        }
                                                }
                                                break;
                                                case 'nodejs1':
                                                        if(vector[i].requerido==1)
                                                        {
                                                                re= re +"  "+ vector[i].nombre +"		: { type : String, required : true },  \n"
                                                        }
                                                        else{
                                                                re= re +"  "+ vector[i].nombre +"		: { type : String },  \n"
                                                        }
                                                        
                                                break
                                                case 'nodejs2':
                                                        if( vector[i].nombre!=='usuarioup' && vector[i].nombre!=='usuarionew')
                                                        {
                                                        re= re +" todo."+ vector[i].nombre +"       	=	req.body."+ vector[i].nombre +"        	||	todo."+ vector[i].nombre +";   \n";
                                                        }
                                                        break
                                                        case 'nodejs3':
                                                                if( vector[i].nombre!=='usuarioup' && vector[i].nombre!=='usuarionew')
                                                                {
                                                                re= re +"  "+ vector[i].nombre +"     	: req.body."+ vector[i].nombre +"    	,\n";
                                                        }
                                                        break
                                       
                                }

                        break;
                        case 'Grupo':
                                switch(op)  {
                                        case 'createcamposhtml':
                                                if(vector[i].visible==1)
                                                {
                                                        if(vector[i].requerido==1)
                                                        {
                                                                re= re+  '      <ion-item class="input-item">\n'
                                                                re= re+  '              <ion-label  position="floating">'+ capitalizeFirstLetter(vector[i].nombre)+'</ion-label>\n'
                                                                re= re+  '              <ion-select  placeholder="{{ \'SELECTVALORM\' | translate }}" formControlName="'+vector[i].nombre+'">\n'
                                                                re= re+  '              <ion-select-option  text-wrap *ngFor="let item of v'+vector[i].nombre+'" value="{{item.id}}">{{item.nombre}}</ion-select-option>\n'
                                                                re= re+  '              </ion-select>\n'
                                                             
                                                                 re= re+  '     </ion-item>\n'
                                                                 re= re+  '<div class="error-container">\n'
                                                                 re= re+  '<div class="error-message" *ngIf="(Form.get(\''+ vector[i].nombre +'\').dirty || Form.get(\''+ vector[i].nombre +'\').touched)">\n'
                                                                 re= re+  '  <ion-icon name="information-circle-outline"></ion-icon>\n'
                                                                 re= re+  '  <span>Ingrese un '+ vector[i].nombre +' valido</span>\n'
                                                                 re= re+  '</div>\n'
                                                                 re= re+  ' </div>\n'
                                                                re= re+  '\n'
                                                        }
                                                        else
                                                        {
                                                                re= re+  '      <ion-item class="input-item">\n'
                                                                re= re+  '              <ion-label  position="floating">'+ capitalizeFirstLetter(vector[i].nombre)+'</ion-label>\n'
                                                                re= re+  '              <ion-select  placeholder="{{ \'SELECTVALORM\' | translate }}" formControlName="'+vector[i].nombre+'">\n'
                                                                re= re+  '              <ion-select-option  text-wrap *ngFor="let item of v'+vector[i].nombre+'" value="{{item.id}}">{{item.nombre}}</ion-select-option>\n'
                                                                re= re+  '              </ion-select>\n'
                                                             
                                                                 re= re+  '     </ion-item>\n'
                                                                re= re+  '\n'

                                                        }
                                              
                                                }
                                        break;
                                        case 'createcamposjsv':
                                                if(vector[i].visible==1)
                                                {
                                                        if(vector[i].requerido==1)
                                                        {
                                                        re= re+ "       '"+ vector[i].nombre + "': new FormControl('', Validators.required),\n"
                                                        }
                                                        else{
                                                        re= re+ "       '"+ vector[i].nombre + "': new FormControl(''),\n"   
                                                        }
                                                }

                                        break;
                                        case 'createcamposjsv2':
                                                if(vector[i].visible==1)
                                                {
                                                        re= re+ "       this.authenticationService.getReg('modulo-"+ vector[i].nombre +"', 'datosfijos', 0).then((result) => {\n"   
                                                        re= re+ "             this.v"+ vector[i].nombre +" = result;\n"   
                                                        re= re+ "            this.Form.controls['"+ vector[i].nombre +"'].setValue(this.navParams.data.record."+ vector[i].nombre +");\n"   
                                                        re= re+ "        }, (err) => {\n"   
                                                        re= re+ "                this.authenticationService.presentAlert(err.error , 'Precaución' , '');\n"   
                                                        re= re+ "        });\n"   

                                                }

                                        break;
                                        case 'createcamposjsv21':
                                                if(vector[i].visible==1)
                                                {
                                                        re= re+ "       this.authenticationService.getReg('modulo-"+ vector[i].nombre +"', 'datosfijos', 0).then((result) => {\n"   
                                                        re= re+ "             this.v"+ vector[i].nombre +" = result;\n"   
                                                        re= re+ "            this.Form.controls['"+ vector[i].nombre +"'].setValue(this.navParams.data.record."+ vector[i].nombre +");\n"   
                                                        re= re+ "        }, (err) => {\n"   
                                                        re= re+ "                this.authenticationService.presentAlert(err.error , 'Precaución' , '');\n"   
                                                        re= re+ "        });\n"   

                                                }

                                        break;
                                        case 'createcamposjsv3':
                                                if( vector[i].nombre!=='usuarioup' && vector[i].nombre!=='usuarionew')
                                                {
                                       
                                                                re= re+ "       "+vector[i].nombre + "  : this.Form.controls['"+ vector[i].nombre  +"'].value.id,\n"   
                                                }

                                        break;
                                        case 'listcamposhtml1':
                                                if(vector[i].visible==1)
                                                {
                                                        re= re+  "        <p> "+capitalizeFirstLetter(vector[i].nombre)+": {{item."+vector[i].nombre+"}} </p>\n"   
                                                }
                                        break;
                                        case 'listcamposhtml2':
                                                if(vector[i].visible==1)
                                                { re= re+  "              <p> "+capitalizeFirstLetter(vector[i].nombre)+": {{item."+vector[i].nombre+"}} </p>\n"   
                                                }
                                                break;
                                                case 'nodejs1':
                                                        if(vector[i].requerido==1)
                                                        {
                                                                re= re +"  "+ vector[i].nombre +"		: { type : String, required : true },  \n"
                                                        }
                                                        else{
                                                                re= re +"  "+ vector[i].nombre +"		: { type : String },  \n"
                                                        }
                                                        
                                                break
                                                case 'nodejs2':
                                                        if( vector[i].nombre!=='usuarioup' && vector[i].nombre!=='usuarionew')
                                                        {
                                                        re= re +" todo."+ vector[i].nombre +"       	=	req.body."+ vector[i].nombre +"        	||	todo."+ vector[i].nombre +";   \n";
                                                        }
                                                        break
                                                        case 'nodejs3':
                                                                if( vector[i].nombre!=='usuarioup' && vector[i].nombre!=='usuarionew')
                                                                {
                                                                re= re +"  "+ vector[i].nombre +"     	: req.body."+ vector[i].nombre +"    	,\n";
                                                        }
                                                        break
                                       
                                }
                        break;
                        case 'Estado':
                                switch(op)  {
                                        case 'createcamposhtml':
                                                if(vector[i].visible==1)
                                                {
                                                        if(vector[i].requerido==1)
                                                        {
                                                                re= re+  '      <ion-item class="input-item">\n'
                                                                re= re+  '              <ion-label  position="floating">'+ capitalizeFirstLetter(vector[i].nombre)+'</ion-label>\n'
                                                              
                                                                re= re+  '              <ion-select placeholder="{{ \'SELECTVALORM\' | translate }}" formControlName="' + vector[i].nombre +'">\n'
                                                                re= re+  '              <ion-select-option value="Activo">Activo</ion-select-option>\n'
                                                                re= re+  '              <ion-select-option value="Inactivo">Inactivo</ion-select-option>\n'
                                                                re= re+  '              </ion-select>\n'
                                                              
                                                                re= re+  '      </ion-item>\n'
                                                                re= re+  '<div class="error-container">\n'
                                                                re= re+  '<div class="error-message" *ngIf="(Form.get(\''+ vector[i].nombre +'\').dirty || Form.get(\''+ vector[i].nombre +'\').touched)">\n'
                                                                re= re+  '  <ion-icon name="information-circle-outline"></ion-icon>\n'
                                                                re= re+  '  <span>Ingrese un '+ vector[i].nombre +' valido</span>\n'
                                                                re= re+  '</div>\n'
                                                                re= re+  ' </div>\n'
                                                                re= re+  '\n'
                                                        }
                                                        else
                                                        {

                                                                re= re+  '      <ion-item class="input-item">\n'
                                                                re= re+  '              <ion-label  position="floating">'+ capitalizeFirstLetter(vector[i].nombre)+'</ion-label>\n'
                                                              
                                                                re= re+  '              <ion-select placeholder="{{ \'SELECTVALORM\' | translate }}" formControlName="' + vector[i].nombre +'">\n'
                                                                re= re+  '              <ion-select-option value="Activo">Activo</ion-select-option>\n'
                                                                re= re+  '              <ion-select-option value="Inactivo">Inactivo</ion-select-option>\n'
                                                                re= re+  '              </ion-select>\n'
                                                              
                                                                re= re+  '      </ion-item>\n'
                                                                re= re+  '\n'
                                                        }
                                                
                                        

                                               


                                                }
                                        break;
                                        case 'createcamposjsv':
                                                if(vector[i].visible==1)
                                                {
                                                        if(vector[i].requerido==1)
                                                        {
                                                        re= re+ "       '"+ vector[i].nombre + "': new FormControl('', Validators.required),\n"
                                                        }
                                                        else{
                                                        re= re+ "       '"+ vector[i].nombre + "': new FormControl(''),\n"   
                                                        }
                                                }

                                        break;
                                        case 'createcamposjsv2':
                                                if(vector[i].visible==1)
                                                {     re= re+ "       this.Form.controls['"+ vector[i].nombre +"'].setValue(this.navParams.data.record."+ vector[i].nombre+");\n"   

                                                }

                                        break;
                                        case 'createcamposjsv3':
                                                if( vector[i].nombre!=='usuarioup' && vector[i].nombre!=='usuarionew')
                                                {
                                               
                                                                re= re+"       "+ vector[i].nombre + "  : this.Form.controls['"+ vector[i].nombre  +"'].value,\n"   
                                                }

                                        break;
                                        case 'listcamposhtml1':
                                                if(vector[i].visible==1)
                                                {
                                                      //  re= re+  "   <p> "+capitalizeFirstLetter(vector[i].nombre)+": {{item."+vector[i].nombre+"}} </p>\n"   
                                                }
                                        break;
                                        case 'listcamposhtml2':
                                                if(vector[i].visible==1)
                                                { //re= re+  "   <p> "+capitalizeFirstLetter(vector[i].nombre)+": {{item."+vector[i].nombre+"}} </p>\n"   
                                                }
                                                break;
                                        case 'nodejs1':
                                                if(vector[i].requerido==1)
                                                {
                                                        re= re +"  "+ vector[i].nombre +"		: { type : String, required : true },  \n"
                                                }
                                                else{
                                                        re= re +"  "+ vector[i].nombre +"		: { type : String },  \n"
                                                }
                                                

                                                
                                        break

                                        case 'nodejs2':
                                                if( vector[i].nombre!=='usuarioup' && vector[i].nombre!=='usuarionew')
                                                {
                                                re= re +" todo."+ vector[i].nombre +"       	=	req.body."+ vector[i].nombre +"        	||	todo."+ vector[i].nombre +";   \n";
                                                }
                                                break
                                                case 'nodejs3':
                                                        if( vector[i].nombre!=='usuarioup' && vector[i].nombre!=='usuarionew')
                                                        {
                                                        re= re +"  "+ vector[i].nombre +"     	: req.body."+ vector[i].nombre +"    	,\n";
                                                }
                                                break
                                } 
                        break;
            
                }
          
       }
return re;
}
function buscamodulo(op,op2) {
        var re=''

switch(op)  {
        case 'modulo': re=  dacadenamodulo(Modulovv,op2);      break;
        case 'asociado': re=  dacadenamodulo(Asociadovv,op2);      break;
        
}
      
        
       return re;
    
        
    }

//http://127.0.0.1:9090/api/datosfijos/generamod/modulo/Modulo
    function buildHtml(op,op2) {
        var header = 'a';
        var body = "";
        var body2 = "";
        body="";
        body=body + "\n\n\n"
        body = body + 'route api rest  ***************************************************\n';
        body = body + op2+"Controller = require('./controllers/"+op+"'),\n";
        body = body + op+"Routes = express.Router(),\n";
        
        body = body + " //-----------------------------------MODULO\n";
        body = body + "apiRoutes.use('/"+op+"s', "+op+"Routes);\n";
        body = body + op+"Routes.get('/', requireAuth,"+op2+"Controller.get"+op2+");\n";
        body = body + op+"Routes.get('/:id/:id2/:id3',requireAuth,  "+op2+"Controller.get"+op2+");\n";
        body = body + op+"Routes.get('/:id',requireAuth,  "+op2+"Controller.get"+op2+");\n";
        body = body + op+"Routes.post('/:recordID',requireAuth,  "+op2+"Controller.crea"+op2+"2s);\n";
        body = body + op+"Routes.delete('/:recordID/:userID/:idempresa/:idafiliado',requireAuth,  "+op2+"Controller.delete"+op2+");\n";

        body=body + "\n\n\n"
        body = body + "{path: '"+op2+"ListPage', loadChildren:  './ASOCIADOINVENTARIO/"+op+"-list/"+op+"-list.module#"+op2+"ListPageModule'},\n"

     //   body2 = + 'model  '+op+'.js ***************************************************\n';
        body2=  " var mongoose =require(\"mongoose\");\n";
        body2=body2 + " var "+op2+"Schema 		=	new  mongoose.Schema({\n";
        body2 = body2 +buscamodulo(op,'nodejs1')
     
        body2=body2 + "    }, {\n";
         body2=body2 + "    timestamps: true\n";
         body2=body2 + "    }); \n";
         body2=body2 + "module.exports = mongoose.model('"+op2+"', "+op2+"Schema);\n";
         generafile(body2,"tmp/models/" + op + ".js");


        body=body + "\n\n\n"
     //   body = body + 'controlador  '+op+'.js ***************************************************\n';

        body2 =  "var "+op2+" = require('../models/"+op+"');";
        body2 = body2 + "var Bitacora = require('../models/bitacora');\n";
        
        body2 = body2 + "exports.get"+op2+" = function(req, res, next){\n";
        body2 = body2 + "    if(req.params.id3)\n";
        body2 = body2 + "    {   \n";
        
        
        body2 = body2 + "            if(req.params.id2=='todos')\n";
        body2 = body2 + "            { \n";
                      
        body2 = body2 + "                "+op2+".find({idempresa:req.params.id3}).sort([['index', 1]]).exec(function(err, todos) {\n";
        body2 = body2 + "                    if (err){  res.send(err);  }\n";
        body2 = body2 + "                     res.json(todos);\n";
        body2 = body2 + "                 });\n";
        body2 = body2 + "            }\n";
        body2 = body2 + "            else\n";
        body2 = body2 + "            {\n";
        body2 = body2 + "                "+op2+".find({idempresa:req.params.id3,estado:req.params.id2}).sort([['index', 1]]).exec(function(err, todos) {\n";
        body2 = body2 + "                    if (err){  res.send(err);  }\n";
        body2 = body2 + "                     res.json(todos);\n";
        body2 = body2 + "                 });\n";
        
        body2 = body2 + "            }\n";
        body2 = body2 + "    }\n";
        body2 = body2 + "    else\n";
        body2 = body2 + "    {\n";
                
        body2 = body2 + "        "+op2+".find({_id:req.params.id},function(err, todos) {\n";
        body2 = body2 + "            if (err){ res.send(err); }\n";
                   
        body2 = body2 + "            if(todos.length>0)   {    res.json(todos);   }\n";
        body2 = body2 + "            else\n";
        body2 = body2 + "            {  res.status(500).send('NO EXISTE REGISTRO');      }\n";
                    
        body2 = body2 + "        });\n";
                
              
        body2 = body2 + "    }\n";
        body2 = body2 + "}\n";
        body2 = body2 + "exports.delete"+op2+" = function(req, res, next){\n";
           
        body2 = body2 + "    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina "+op2+" '});\n";
        body2 = body2 + "    "+op2+".findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {\n";
        body2 = body2 + "        res.json(todo);\n";
        body2 = body2 + "    });\n";
        body2 = body2 + "}\n";
        
        
        body2 = body2 + "exports.crea"+op2+"2s = function(req, res, next){\n";
           
         
        body2 = body2 + "    Bitacora.create(req.body.bitacora);\n";
        body2 = body2 + "if(req.params.recordID!=='crea')\n";
        body2 = body2 + "{ \n";
        body2 = body2 + "    "+op2+".findById({ _id: req.params.recordID }, function (err, todo)  {\n";
        body2 = body2 + "        if (err) {  res.send(err);  }\n";
        body2 = body2 + "        else\n";
        body2 = body2 + "        {   \n";
        body2 = body2 +buscamodulo(op,'nodejs2')
        body2 = body2 + "            todo.usuarioup=req.body.bitacora.email;\n";
        body2 = body2 + "            todo.save(function (err, todo){\n";
        body2 = body2 + "                if (err)     {  res.status(500).send(err.message)   }\n";
        body2 = body2 + "                res.json(todo);\n";
        body2 = body2 + "            });\n";
        body2 = body2 + "        }\n";
        body2 = body2 + "    });\n";
        
        body2 = body2 + "}\n";
        body2 = body2 + "else{\n";
        
        body2 = body2 + "    "+op2+".find({nombre        	: req.body.nombre  },function(err, todos) {\n";
        body2 = body2 + "        if (err){ res.send(err); }\n";
               
        body2 = body2 + "        if(todos.length>0)   {    res.status(500).send('Ya existe un "+op+" en plataforma'); }\n";
        body2 = body2 + "        else\n";
        body2 = body2 + "        {   \n";
        
        body2 = body2 + "            "+op2+".create({ \n";

        body2 = body2 +buscamodulo(op,'nodejs3')
        body2 = body2 + "                usuarionew:req.body.bitacora.email,\n";

        body2 = body2 + "              }\n";
        body2 = body2 + "                , function(err, todo) {\n";
        body2 = body2 + "                if (err){ \n";
                           
        body2 = body2 + "                    res.status(500).send(err.message)    }\n";
                    
        body2 = body2 + "                res.json(todo);\n";
                
                     
                        
                
        body2 = body2 + "            });\n";
        
                    
        body2 = body2 + "             }\n";
                
        body2 = body2 + "    });\n";
           
         
        body2 = body2 + "}\n";
        
        body2 = body2 + "}\n";
        generafile(body2,"tmp/controllers/" + op + ".js");
        
        

 

        body=body + "\n\n\n"
      //  body =  body+ 'modulo-list.module   ***************************************************\n';
        body2= "import { IonicModule } from '@ionic/angular';\n"
        body2=body2 + "import { RouterModule} from '@angular/router';\n"
        body2=body2 + "import { NgModule } from '@angular/core';\n"
        body2=body2 + "import { CommonModule } from '@angular/common';\n"
        body2=body2 + "import { ComponentsModule } from '../../components/components.module';\n"
        body2=body2 + "import { TranslateModule } from '@ngx-translate/core';\n"
        body2=body2 + "import { FormsModule, ReactiveFormsModule } from '@angular/forms';\n"
        body2=body2 + "import { "+op2+"CreatePage } from './"+op+"-create/"+op+"-create.page';\n"
        body2=body2 + "import { "+op2+"ListPage } from './"+op+"-list.page';\n"
        body2=body2 + "@NgModule({\n"
         body2=body2 + "  declarations: [\n"
         body2=body2 + "    "+op2+"ListPage, "+op2+"CreatePage\n"
         body2=body2 + "  ],\n"
         body2=body2 + "  imports: [\n"
         body2=body2 + "    CommonModule,IonicModule, ComponentsModule, FormsModule,  ReactiveFormsModule,\n"
         body2=body2 + "    RouterModule.forChild([{ path: '', component: "+op2+"ListPage }]), TranslateModule.forChild(),\n"
         body2=body2 + "  ],\n"
         body2=body2 + "  entryComponents: [\n"
         body2=body2 + "    "+op2+"CreatePage\n"
         body2=body2 + "  ],\n"
         body2=body2 + "})\n"
         body2=body2 + "export class "+op2+"ListPageModule {}\n"

         generafile(body2,"tmp/"+op+"-list/"+op+"-list.module.ts");
        
        
         body=body + "\n\n\n"
        // body = body + 'modulo-list.page.scss  ***************************************************\n';
                body2 =  '     :host {\n';
         body2 = body2 + '       --page-margin: var(--app-narrow-margin);\n';
         body2 = body2 + '       --page-border-radius: var(--app-fair-radius);\n';
         body2 = body2 + '       --page-segment-background: var(--app-background);\n';
         body2 = body2 + '       --page-segment-indicator-height: 2px;\n';
         body2 = body2 + '     }\n';
         body2 = body2 + '     ion-item-divider {\n';
         body2 = body2 + '       --background: var(--ion-color-light);\n';
         body2 = body2 + '       --padding-start: var(--page-margin);\n';
         body2 = body2 + '     }\n';

 
         body2 = body2 + '      :host { --page-margin: var(--app-fair-margin);\n';
         body2 = body2 + '        --page-background: var(--app-background);\n';
         body2 = body2 + '        --page-background-shade: var(--app-background-shade);\n';
         body2 = body2 + '        --page-tags-gutter: 5px;            }\n';
generafile(body2,"tmp/"+op+"-list/"+op+"-list.page.scss");      



       body2 =  ' :host {\n';
        body2 =  body2 +'  --page-margin: var(--app-fair-margin);\n';
        body2 = body2 + '  --page-background: var(--app-background);\n';
     
        body2 = body2 + ' --page-background-shade: var(--app-background-shade);\n';
        body2 = body2 + ' --page-tags-gutter: 5px;\n';
        body2 =body2 +  ' }\n';
        generafile(body2,"tmp/"+op+"-list/"+op+"-create/"+op+"-create.page.scss");

                 body=body + "\n\n\n"
      //   body = body + 'modulo-list.page.html   ***************************************************\n';
 
        body2 =  ' <ion-header>\n';
        body2 = body2 + ' <ion-toolbar color="primary">\n';
        body2 = body2 + '   <ion-buttons slot="start">\n';
        body2 = body2 + '     <ion-menu-button></ion-menu-button>\n';
        body2 = body2 + '   </ion-buttons>\n';
        body2 = body2 + '   <ion-title>\n';
        body2 = body2 + '     {{tituloxx}}\n';
        body2 = body2 + '   </ion-title>\n';
        body2 = body2 + '   <ion-buttons slot="end">\n';
        body2 = body2 + '     <ion-button title=" {{ \'AGREGARM\' | translate }}" (click)="addRecord()">\n';
        body2 = body2 + '       <ion-icon slot="icon-only" name="add"></ion-icon>\n';
        body2 = body2 + '     </ion-button>\n';
        body2 = body2 + '     <ion-button title=" {{ \'REFRESCARM\' | translate }}" (click)="pideregistros0()">\n';
        body2 = body2 + '       <ion-icon slot="icon-only" name="refresh-circle-outline"></ion-icon>\n';
        body2 = body2 + '     </ion-button>\n';
        body2 = body2 + '     <ion-button *ngIf="viewType === \'grid\'" (click)="changeToList()">\n';
        body2 = body2 + '       <ion-icon slot="icon-only" name="grid"></ion-icon>\n';
        body2 = body2 + '     </ion-button>\n';
        body2 = body2 + '     <ion-button *ngIf="viewType === \'list\'" (click)="changeToGrid()">\n';
        body2 = body2 + '       <ion-icon slot="icon-only" name="list"></ion-icon>\n';
        body2 = body2 + '     </ion-button>\n';
        body2 = body2 + '   </ion-buttons>\n';
        body2 = body2 + ' </ion-toolbar>\n';
        body2 = body2 + ' <ion-toolbar class="filters-toolbar">\n';
        body2 = body2 + '   <ion-row class="searchbar-row" align-items-center>\n';
        body2 = body2 + '     <ion-col>\n';
        body2 = body2 + '       <ion-searchbar animated [(ngModel)]="searchQuery" (ionChange)="searchList()" placeholder="{{ \'BUSCARM\' | translate }}"></ion-searchbar>\n';
        body2 = body2 + '     </ion-col>\n';
        body2 = body2 + '     <ion-col [hidden]="!showAgeFilter" class="call-to-action-col">\n';
        body2 = body2 + '       <ion-button fill="clear" color="secondary" class="filters-btn" title=" {{ \'FILTROM\' | translate }}" (click)="showAgeFilter = !showAgeFilter">\n';
        body2 = body2 + '         <ion-icon slot="icon-only" name="options"></ion-icon>\n';
        body2 = body2 + '       </ion-button>\n';
        body2 = body2 + '     </ion-col>\n';
        body2 = body2 + '   </ion-row>\n';
        body2 = body2 + '   <form [formGroup]="rangeForm" [hidden]="!showAgeFilter">\n';
        body2 = body2 + '     <ion-row class="range-item-row">\n';
        body2 = body2 + '       <ion-col size="12">\n';
        body2 = body2 + '         <div class="range-header">\n';
        body2 = body2 + '           <span class="range-value">{{ rangeForm.controls.dual.value.lower }}</span>\n';
        body2 = body2 + '           <span class="range-label">Filter by age</span>\n';
        body2 = body2 + '           <span class="range-value">{{ rangeForm.controls.dual.value.upper }}</span>\n';
        body2 = body2 + '         </div>\n';
        body2 = body2 + '       </ion-col>\n';
        body2 = body2 + '       <ion-col size="12">\n';
        body2 = body2 + '         <ion-range class="range-control" formControlName="dual" color="secondary" pin="true" dualKnobs="true" (ionChange)="searchList()" min="1" max="100" step="1" debounce="400"></ion-range>\n';
        body2 = body2 + '       </ion-col>\n';
        body2 = body2 + '     </ion-row>\n';
        body2 = body2 + '   </form>\n';
        body2 = body2 + ' </ion-toolbar>\n';
        body2 = body2 + '</ion-header>\n';
        body2 = body2 + '<ion-content class="user-friends-content">\n';
        body2 = body2 + ' <ion-item-divider sticky>\n';
        body2 = body2 + '   <ion-label *ngIf="(itemsList?.length > 0) " >{{ \'NOREGISTROSM\' | translate }}: {{itemsList.length}}</ion-label>\n';
        body2 = body2 + ' </ion-item-divider>\n';
        body2 = body2 + ' <ion-segment (ionChange)="filterContacts($event)" value="todos">\n';
        body2 = body2 + '   <ion-segment-button value="todos" checked>\n';
        body2 = body2 + '     {{ \'TODOSM\' | translate }}\n';
        body2 = body2 + '   </ion-segment-button>\n';
        body2 = body2 + '   <ion-segment-button value="Activo">\n';
        body2 = body2 + '     {{ \'ACTIVOSM\' | translate }}\n';
        body2 = body2 + '    </ion-segment-button>\n';
        body2 = body2 + '   <ion-segment-button value="Inactivo">\n';
        body2 = body2 + '     {{ \'INACTIVOSM\' | translate }}\n';
        body2 = body2 + '   </ion-segment-button>\n';
        
        body2 = body2 + ' </ion-segment>\n';
       
       
        body2 = body2 + ' <ion-list *ngIf="efecto === 0" >\n';
           
        body2 = body2 + '   <ion-item lines="none" *ngFor="let item of [0,1,2,3,4,5,6]">\n';
            
        body2 = body2 + '     <ion-label>\n';
        body2 = body2 + '       <skeleton-element></skeleton-element>\n';
        body2 = body2 + '       <skeleton-element></skeleton-element>\n';
        body2 = body2 + '       <skeleton-element width="67%"></skeleton-element>\n';
             
        body2 = body2 + '     </ion-label>\n';
        body2 = body2 + '   </ion-item>\n';
        body2 = body2 + ' </ion-list>\n';
       
        body2 = body2 + ' <ion-list  *ngIf="(itemsList?.length > 0) && (viewType === \'list\')">\n';
        body2 = body2 + '   <ion-item  *ngFor="let item of itemsList;let i = index; " [routerLink]="">\n';
        body2 = body2 + '     <ion-icon name="server-outline" slot="start"></ion-icon>\n';
        body2 = body2 + '    <ion-label class="ion-text-wrap">\n';
        body2 = body2 + '        <ion-note slot="end">No. {{i+1}}</ion-note> <br>\n';
        body2 = body2 +buscamodulo(op,'listcamposhtml1')
        body2 = body2 + '       <ion-badge color="medium">{{item.estado}}</ion-badge>\n';
        body2 = body2 + '     </ion-label>\n';
        body2 = body2 + '     <ion-row no-padding slot="end">\n';
        body2 = body2 + '       <ion-col>\n';
        body2 = body2 + '         <button title= "{{ \'MENUM\' | translate }}"  (click)="otrasop(item)"  ion-button clear large icon-start>\n';
        body2 = body2 + '           <ion-icon name="ellipsis-vertical-outline">\n';
        body2 = body2 + '           </ion-icon>\n';
        body2 = body2 + '           {{ \'MENUM\' | translate }}\n';
        body2 = body2 + '         </button><br><br>\n';
        body2 = body2 + '         <button title="{{ \'ELIMINARM\' | translate }}"  (click)="deleteRecord(item)" ion-button clear large icon-start>\n';
        body2 = body2 + '           <ion-icon name="trash-outline"></ion-icon>\n';
        body2 = body2 + '           {{ \'ELIMINARM\' | translate }}\n';
        body2 = body2 + '         </button><br>\n';
        body2 = body2 + '         <br>\n';
        body2 = body2 + '         <button title="{{ \'ACTUALIZARM\' | translate }}"  (click)="updateRecord(item)" ion-button clear   icon-start>\n';
        body2 = body2 + '           <ion-icon name="create-outline"></ion-icon>\n';
        body2 = body2 + '           {{ \'ACTUALIZARM\' | translate }}\n';
        body2 = body2 + '         </button>\n';
        body2 = body2 + '       </ion-col>\n';
        body2 = body2 + '     </ion-row>\n';
        body2 = body2 + '   </ion-item>\n';
        body2 = body2 + ' </ion-list>\n';
       
        body2 = body2 + ' <ion-grid *ngIf="(itemsList?.length > 0) && (viewType === \'grid\')">\n';
        body2 = body2 + '   <ion-row>\n';
        body2 = body2 + '     <ion-col *ngFor="let item of itemsList;let i = index;" size-lg="6"  size-sm="6" size="12">\n';
        body2 = body2 + '       <ion-card  >\n';
        body2 = body2 + '         <ion-row class="user-stats-wrapper user-details-wrapper">\n';
        body2 = body2 + '           <ion-col>\n';
        body2 = body2 + '             <span class="user-stat-value">No.</span>\n';
        body2 = body2 + '             <span class="user-stat-name">{{i+1}} </span>\n';
        body2 = body2 + '           </ion-col>\n';
        body2 = body2 + '           <ion-col>\n';
        body2 = body2 + '             <span class="user-stat-value">{{item.estado}} </span>\n';
        body2 = body2 + '           </ion-col>\n';
        body2 = body2 + '         </ion-row>\n';
        body2 = body2 + '         <ion-item   (click)="updateRecord(item)"  [routerLink]="">\n';
        body2 = body2 + '           <ion-icon name="server-outline" slot="start"></ion-icon>\n';
        body2 = body2 + '           <ion-label class="ion-text-wrap">\n';
        body2 = body2 +buscamodulo(op,'listcamposhtml2')
       
        body2 = body2 + '           </ion-label>\n';
        body2 = body2 + '         </ion-item>\n';
        body2 = body2 + '         <ion-card-content>\n';
        body2 = body2 + '         </ion-card-content>\n';
        body2 = body2 + '         <ion-row no-padding>\n';
        body2 = body2 + '           <ion-col>\n';
        body2 = body2 + '             <button title=" {{ \'ELIMINARM\' | translate }}"  (click)="deleteRecord(item,i)" ion-button clear small  icon-start>\n';
        body2 = body2 + '               <ion-icon name="trash-outline"></ion-icon>\n';
        body2 = body2 + '               {{ \'ELIMINARM\' | translate }}\n';
        body2 = body2 + '             </button>\n';
        body2 = body2 + '           </ion-col>\n';
        body2 = body2 + '           <ion-col [hidden]="!showmenu">\n';
        body2 = body2 + '             <button  title=" {{ \'MENUM\' | translate }}"  (click)="deleteRecord(item,i)" ion-button clear small  icon-start>\n';
        body2 = body2 + '               <ion-icon name="ellipsis-vertical-outline"></ion-icon>\n';
        body2 = body2 + '               {{ \'MENUM\' | translate }}\n';
        body2 = body2 + '             </button>\n';
        body2 = body2 + '           </ion-col>\n'
        body2 = body2 + '         </ion-row>\n';
        body2 = body2 + '       </ion-card>\n';
        body2 = body2 + '     </ion-col>\n';
        body2 = body2 + '   </ion-row>\n';
        body2 = body2 + ' </ion-grid>\n';
        body2 = body2 + ' <h3 *ngIf="itemsList?.length == 0" class="empty-list-message">\n';
        body2 = body2 + '   {{ \'NODATOS\' | translate }}  \n';
        body2 = body2 + ' </h3>\n';
       
        body2 = body2 + ' <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)">\n';
        body2 = body2 + '   <ion-infinite-scroll-content\n';
        body2 = body2 + '     loadingSpinner="bubbles"\n';
        body2 = body2 + '     loadingText="Espere un momento...">\n';
        body2 = body2 + '   </ion-infinite-scroll-content>\n';
        body2 = body2 + ' </ion-infinite-scroll>\n';
        body2 = body2 + '</ion-content>\n';
        generafile(body2,"tmp/"+op+"-list/"+op+"-list.page.html");  

       body=body + "\n\n\n"
    //   body = body + 'modulo-list.js   ***************************************************\n';       
   
 body2 =  "import { Component , OnInit , ViewChild } from '@angular/core';\n"
 body2 = body2 + "import {AlertController, ModalController ,  IonRouterOutlet} from '@ionic/angular';\n"
 body2 = body2 + "import { TranslateService } from '@ngx-translate/core';\n"
 body2 = body2 + "import {  Router } from '@angular/router';\n"
 body2 = body2 + "import { AuthenticationService } from '../../services/Authentication.service';\n"
 body2 = body2 + "import { FormGroup, FormControl } from '@angular/forms';\n"
 body2 = body2 + "import { ReplaySubject} from 'rxjs';\n"
 body2 = body2 + "import { IonInfiniteScroll } from '@ionic/angular';\n"
 body2 = body2 + "import { "+op2+"CreatePage } from './"+op+"-create/"+op+"-create.page';\n"


 body2 = body2 + "@Component({\n"
        body2 = body2 + "selector: 'page-"+op+"-list',\n"
        body2 = body2 + "templateUrl: '"+op+"-list.page.html',\n"
        body2 = body2 + "styleUrls: ['./"+op+"-list.page.scss'],\n"
body2 = body2 + "})\n"
body2 = body2 + "export class "+op2+"ListPage implements OnInit {\n"
        body2 = body2 + "@ViewChild(IonInfiniteScroll, { static : false }) infiniteScroll: IonInfiniteScroll;\n"
        body2 = body2 + "rangeForm: FormGroup;\n"
        body2 = body2 + "searchQuery: string;\n"
        body2 = body2 + "showAgeFilter = false;showmenu = false;\n"
        body2 = body2 + "items: any  = [] ;\n"
        body2 = body2 + "variables: any = [];\n"
        body2 = body2 + "userinfo: any = [];\n"
        body2 = body2 + "viewType = 'grid';\n"
        body2 = body2 + "tituloxx = '';\n"
        body2 = body2 + "efecto = 0;\n"
        body2 = body2 + "seguro ='';\n"
        body2 = body2 + "msg = '';\n"
        body2 = body2 + "itemsList: Array<any>;\n"
        body2 = body2 + "public currentSegment: string = \"Todos\";\n"
        body2 = body2 + "searchSubject: ReplaySubject<any> = new ReplaySubject<any>(1);\n"
        body2 = body2 + "constructor(  private routerOutlet: IonRouterOutlet , private router: Router, private authenticationService: AuthenticationService,\n"
 body2 = body2 + "   public alertController: AlertController,     public translateService: TranslateService    ,    private modalController: ModalController\n"
 body2 = body2 + "   ) {\n"
        body2 = body2 + " }\n"
        body2 = body2 + "changeToList() { this.viewType = 'list'; }\n"

        body2 = body2 + "changeToGrid() {   this.viewType = 'grid';  }\n"

        body2 = body2 + "ngOnInit() {\n"
    body2 = body2 + "    this.variables = this.router.getCurrentNavigation().extras.state.variables;\n"
    body2 = body2 + "    this.userinfo = this.authenticationService.getcopiauser();\n"
    body2 = body2 + "    this.tituloxx =  this.variables.nombre ;\n"
    body2 = body2 + "    this.searchQuery = '';\n"

    body2 = body2 + "    this.translateService.get('SEGUROM').subscribe((value) => {   this.seguro = value  });\n"
    body2 = body2 + "    this.translateService.get('MSGM').subscribe((value) => {   this.msg = value  });\n"

    body2 = body2 + "    this.rangeForm = new FormGroup({    dual: new FormControl({lower: 1, upper: 100})   });   \n"
    body2 = body2 + "    this.currentSegment = 'todos';\n"
    body2 = body2 + "    this.pideregistros( this.currentSegment);\n"
    body2 = body2 + "  }\n"
    body2 = body2 + "  filterContacts(event: any) {\n"
body2 = body2 + "    let selectedCategory = event.detail.value;\n"
body2 = body2 + "    this.currentSegment = selectedCategory;\n"

body2 = body2 + "    this.pideregistros(selectedCategory);\n"
body2 = body2 + "  }\n"
body2 = body2 + "  pideregistros0() {\n"

        body2 = body2 + "   this.pideregistros(this.currentSegment);\n"
        body2 = body2 + "  }\n"
        body2 = body2 + "  pideregistros(op) {\n"
 body2 = body2 + "       this.itemsList = [];\n"
 body2 = body2 + "       this.efecto = 0 ;\n"
 body2 = body2 + "       this.authenticationService.getReg('todos/' + op + '/' + this.userinfo[0].idempresa, '"+op+"s', 0).then((data) => {\n"
 body2 = body2 + "       this.efecto=1;\n"
 body2 = body2 + "       this.items =  data;\n"
 body2 = body2 + "       this.itemsList = this.items;\n"
 body2 = body2 + " }, (err) => {\n"
 body2 = body2 + "   this.authenticationService.presentAlert(err.error , this.msg , '');\n"
 body2 = body2 + " });\n"
 body2 = body2 + "  }\n"
 body2 = body2 + "  searchList() {\n"
body2 = body2 + "    this.searchSubject.next({\n"
 body2 = body2 + "     lower: this.rangeForm.controls.dual.value.lower,\n"
 body2 = body2 + "     upper: this.rangeForm.controls.dual.value.upper,\n"
 body2 = body2 + "     query: this.searchQuery\n"
 body2 = body2 + "   });\n"
 body2 = body2 + "    const query = (this.searchQuery && this.searchQuery !== null) ? this.searchQuery : '';\n"
 body2 = body2 + "    this.itemsList = this.filterList(this.items, query);\n"
 body2 = body2 + "  }\n"
 body2 = body2 + " filterList(list, query): Array<any> {\n"
 body2 = body2 + "   return list.filter(item => item.nombre.toLowerCase().includes(query.toLowerCase()));\n"
 body2 = body2 + "  }\n"
 body2 = body2 + "  async otrasop(item: any) {  }\n"
 body2 = body2 + "  async deleteRecord(item: any) {\n"
 body2 = body2 + "   const alert = await this.alertController.create({\n"
 body2 = body2 + "     header: this.seguro,\n"
 body2 = body2 + "     message: '',\n"
 body2 = body2 + "     buttons: [\n"
 body2 = body2 + "       {\n"
 body2 = body2 + "         text: 'No',\n"
 body2 = body2 + "        cssClass: 'secondary',\n"
 body2 = body2 + "         handler: (blah) => {\n"
 body2 = body2 + "         }\n"
 body2 = body2 + "       }, {\n"
body2 = body2 + "          text: 'Si',\n"
body2 = body2 + "          handler: () => {\n"
body2 = body2 + "            const recordID: string		= item._id;\n"
body2 = body2 + "            this.authenticationService.deleteReg(recordID + '/' + this.variables.username + '/' + this.variables.idempresa + '/'\n"
body2 = body2 + "            + this.variables.idafiliado , '"+op+"').then((data) => {\n"
body2 = body2 + "              this.pideregistros( this.currentSegment);\n"
body2 = body2 + "              }, (err) => {\n"
body2 = body2 + "                this.authenticationService.presentAlert(err.error, this.msg, '');\n"
body2 = body2 + "            });\n"
body2 = body2 + "          }\n"
body2 = body2 + "        }\n"
body2 = body2 + "      ]\n"
body2 = body2 + "    });\n"
body2 = body2 + "    await alert.present();\n"
body2 = body2 + "  }\n"

body2 = body2 + "  async updateRecord(item: any) {\n"
body2 = body2 + "    const modal = await this.modalController.create({\n"
body2 = body2 + "      component: "+op2+"CreatePage,\n"
body2 = body2 + "      swipeToClose: true,\n"
body2 = body2 + "      presentingElement: this.routerOutlet.nativeEl,\n"
body2 = body2 + "      componentProps:  { variables:  this.variables, record: item, userinfo: this.userinfo}\n"
body2 = body2 + "      , cssClass: 'modal-fullscreen'\n"
body2 = body2 + "    });\n"
body2 = body2 + "    modal.onWillDismiss().then((data) => {\n"
body2 = body2 + "         if ( data.data !== 'close' ) {\n"
body2 = body2 + "      this.pideregistros( this.currentSegment);\n"
body2 = body2 + "      }\n"
body2 = body2 + "    });\n"
body2 = body2 + "    return await modal.present();\n"
body2 = body2 + "}\n"
body2 = body2 + "   async  addRecord() {\n"
body2 = body2 + "    const modal = await this.modalController.create({\n"
body2 = body2 + "      component: "+op2+"CreatePage,\n"
body2 = body2 + "      swipeToClose: false,\n"
body2 = body2 + "      backdropDismiss: false,\n"
body2 = body2 + "     animated: true,\n"

body2 = body2 + "      presentingElement: await this.modalController.getTop(),\n"
body2 = body2 + "      componentProps:  { variables:  this.variables, record: null, userinfo: this.userinfo}\n"
body2 = body2 + "      , cssClass: 'modal-fullscreen'\n"
body2 = body2 + "    });\n"

body2 = body2 + "    modal.onWillDismiss().then((data) => {\n"
body2 = body2 + "         if ( data.data !== 'close' ) {\n"
body2 = body2 + "        this.pideregistros( this.currentSegment);\n"
body2 = body2 + "      }\n"

body2 = body2 + "    });\n"
body2 = body2 + "    return await modal.present();\n"
body2 = body2 + "   }\n"

body2 = body2 + "   loadData(event) {\n"
body2 = body2 + "    setTimeout(() => {\n"
body2 = body2 + "      event.target.complete();\n"
body2 = body2 + "      if ( this.items.length === 1000) {\n"
body2 = body2 + "        event.target.disabled = true;\n"
body2 = body2 + "      }\n"
body2 = body2 + "    }, 500);\n"
body2 = body2 + "  }\n"


body2 = body2 + "}\n"
generafile(body2,"tmp/"+op+"-list/"+op+"-list.page.ts");


         body=body + "\n\n\n"
     //  body = body + 'modulo-create.module   ***************************************************\n';

                body2= " import { NgModule } from '@angular/core'; \n"
                body2=body2 + "  import { CommonModule } from '@angular/common';\n"
                body2=body2 + "  import { FormsModule } from '@angular/forms';\n"
                body2=body2 + "  import { TranslateModule } from '@ngx-translate/core';\n"
                body2=body2 + "   import { IonicModule } from '@ionic/angular';\n"
                body2=body2 + "   import { "+op2+"CreatePage } from './"+op+"-create.page';\n"
                body2=body2 + "\n"
                body2=body2 + "   @NgModule({"
                body2=body2 + "   imports: [CommonModule,  FormsModule,  IonicModule,TranslateModule.forChild()   ],\n"
                body2=body2 + "   declarations: ["+op2+"CreatePage]        })\n"
                body2=body2 + "\n"
                body2=body2 + "  export class "+op2+"CreatePageModule {}\n"
                body2=body2 + "\n\n\n"
                body2 = body2 + 'modulo-create.page.scss  ***************************************************\n';
                body2 = body2 + ':host { --page-margin: var(--app-fair-margin);\n';
                        body2 = body2 + '--page-background: var(--app-background);\n';
                        body2 = body2 + '--page-background-shade: var(--app-background-shade);\n';
                        body2 = body2 + '--page-tags-gutter: 5px;            }\n';
//generafile(body2,"tmp/"+op+"-list/"+op+"-create/"+op+"-create.module ");



                        body=body + "\n\n\n"
           //     body = body + 'modulo-create.page.html   ***************************************************\n';



                body2 =  '<form class="create-user-form ion-page" [formGroup]="Form" >\n';
                body2 = body2 + '<ion-header>\n';
                body2 = body2 + '        <ion-toolbar color="primary">\n';
                body2 = body2 + '                <ion-buttons slot="end">\n';
                body2 = body2 + '                        <ion-button (click)="dismissModal()">\n';
                body2 = body2 + '                           <ion-icon slot="icon-only" name="close"></ion-icon>\n';
                body2 = body2 + '                        </ion-button>\n';
                body2 = body2 + '                </ion-buttons>\n';
                body2 = body2 + '                <ion-title>{{tituloxx}}</ion-title>\n';
                body2 = body2 + '        </ion-toolbar>\n';
                body2 = body2 + '</ion-header>\n';
                
                body2 = body2 + '<ion-content class="create-form-content">\n';
                body2 = body2 + '    <section class="user-details-fields fields-section">\n';
                body2 = body2 + '    <ion-list class="inputs-list" lines="full">\n';
                body2 = body2 +buscamodulo(op,'createcamposhtml')
                body2 = body2 + '     </ion-list>\n';
                body2 = body2 + '  </section>\n';
                 
                body2 = body2 + '</ion-content>\n';
                
                
                body2 = body2 + '<ion-footer>\n';
                body2 = body2 + '  <ion-row class="form-actions-wrapper">\n';
                body2 = body2 + '    <ion-col>\n';
                body2 = body2 + '      <ion-button (click)="submitForm()" color="medium" expand="block" fill="outline" type="submit" [disabled]="!Form.valid">CREAR</ion-button>\n';
                    
                body2 = body2 + '      </ion-col>\n';
                body2 = body2 + '  </ion-row>\n';
                body2 = body2 + '</ion-footer>\n';
                body2 = body2 + '</form>   \n';

                generafile(body2,"tmp/"+op+"-list/"+op+"-create/"+op+"-create.page.html");
                body=body + "\n\n\n"

            //    body = body + ' modulo-create.page.js  ***************************************************\n';
          

                body2= "import { Component, OnInit , ViewChild} from '@angular/core';\n"
                body2=body2 + "import { ModalController , NavParams} from '@ionic/angular';\n"
                body2=body2 + "import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';\n"
                body2=body2 + "import { AuthenticationService } from '../../../services/Authentication.service';\n"
                body2=body2 + "import { TranslateService } from '@ngx-translate/core';\n"
                body2=body2 + "@Component({\n"
                body2=body2 + "  selector: 'app-"+op+"-create',\n"
                body2=body2 + "  templateUrl: './"+op+"-create.page.html',\n"
                body2=body2 + "  styleUrls: ['./"+op+"-create.page.scss'],\n"
                body2=body2 + "})\n"
                body2=body2 + "export class "+op2+"CreatePage implements OnInit {\n"
                
                body2=body2 + "  Form: FormGroup;\n"
                body2=body2 + "  @ViewChild('createForm', { static: false }) createForm: FormGroupDirective;\n"
                body2=body2 + "  variables: any = [];\n"
                body2=body2 + "  userinfo: any = [];\n"
                body2=body2 + "  tituloxx = '';\n"
                body2=body2 + "  vgrupo: any = [];\n"
                body2=body2 + "  _ID: any;\n"
                body2=body2 + "  lpermiso: any;\n"
                
                
                body2=body2 + "  constructor(\n"
                body2=body2 + "    private modalController: ModalController,\n"
                body2=body2 + "    public translateService: TranslateService    , private authenticationService: AuthenticationService,\n"
                body2=body2 + "    private navParams: NavParams\n"
                body2=body2 + "  ) { }\n"
                
                body2=body2 + "  dismissModal() {     this.modalController.dismiss('close');      }\n"
                body2=body2 + "  ionViewDidEnter(): void {               }\n"
                body2=body2 + "  ngOnInit(): void {\n"
                body2=body2 + "    this.variables = this.navParams.get('variables');\n"
                body2=body2 + "    this.userinfo = this.navParams.get('userinfo');\n"
                body2=body2 + "    this.tituloxx = this.variables.nombre;\n"
                body2=body2 + "    this.Form = new FormGroup({\n"
                body2 = body2 +buscamodulo(op,'createcamposjsv')
                
              
                body2=body2 + "    });\n"
                
                
                body2=body2 + "    if (this.navParams.get('record') == null) {\n"
                body2 = body2 +buscamodulo(op,'createcamposjsv21')
                body2=body2 + "       this.translateService.get('NUEVOM').subscribe((value) => {   this.tituloxx = value +' '+ this.variables.nombre;this.lpermiso = value; });\n"
              
                body2=body2 + "       this.authenticationService.getReg('todos/orden/' + this.userinfo[0].idempresa, '"+op+"s', 0).then((data) => {\n"
                body2=body2 + "        if (data) {\n"
                body2=body2 + "         const aa: any = data;\n"
                body2=body2 + "          this.Form.controls['index'].setValue(Number(aa.orden) + 10);\n"
                body2=body2 + "        }\n"
                body2=body2 + "  }, (err) => {\n"
                body2=body2 + "    this.authenticationService.presentAlert(err.error , 'Precaución' , '');\n"
                body2=body2 + "  });\n"
                body2=body2 + "    } else {\n"
                body2=body2 + "       this.translateService.get('ACTUALIZAM').subscribe((value) => {this.tituloxx = value + ' '+ this.variables.nombre; this.lpermiso = value; });\n"

                
                body2=body2 + "       this._ID 				=	this.navParams.data.record._id;\n"
                body2 = body2 +buscamodulo(op,'createcamposjsv2')
  
                body2=body2 + "    }\n"
                body2=body2 + "  }\n"
                
                body2=body2 + "  //onSgrupoChange(selectedValue: any) {    this.sgrupo = selectedValue.detail.value ;(ionChange)='onSgrupoChange($event)'   }\n"
                
                body2=body2 + "  submitForm() {\n"
                
                body2=body2 + "    const   options: any	     = {\n"

         


              //  body2=body2 + "       idempresa: this.userinfo[0].idempresa,\n"
                body2 = body2 +buscamodulo(op,'createcamposjsv3')
                body2=body2 + "       bitacora: { idempresa : this.userinfo[0].idempresa , idafiliado: '' ,\n"
                body2=body2 + "       email: this.userinfo[0].email , permiso : this.lpermiso, accion: this.tituloxx}\n"
                body2=body2 + "   };\n"
                
                body2=body2 + "   if (this.navParams.get('record') == null) {\n"
                body2=body2 + "        if (options) {\n"
                body2=body2 + "          this.authenticationService.createReg('', options, '"+op+"s').then((result) => {\n"
                body2=body2 + "            if (!this.Form.valid) { return; }\n"
                body2=body2 + "            this.modalController.dismiss('ok');\n"
                body2=body2 + "        }, (err) => {\n"
                body2=body2 + "          this.authenticationService.presentAlert(err.error , 'Precaución' , '');\n"
                body2=body2 + "        });\n"
                body2=body2 + "        }\n"
                body2=body2 + "   } else {\n"
                body2=body2 + "    if (options) {\n"
                body2=body2 + "      this.authenticationService.createReg(this._ID, options, '"+op+"s').then((result) => {\n"
                body2=body2 + "         if (!this.Form.valid) { return; }\n"
                body2=body2 + "         this.modalController.dismiss('ok');\n"
                body2=body2 + "     }, (err) => {\n"
                body2=body2 + "      this.authenticationService.presentAlert(err.error , 'Precaución' , '');\n"
                body2=body2 + "     });\n"
                body2=body2 + "  }}\n"

                body2=body2 + "  }\n"
                
                
                
                body2=body2 + "}\n"
                
                generafile(body2,"tmp/"+op+"-list/"+op+"-create/"+op+"-create.page.ts");
      
        return   body  ;
      };

      
exports.getCombofijo = function(req, res, next){
       var sql='';

       console.log(req.params)

       switch(req.params.id) {
        case 'generamod':
                res.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
                res.write(buildHtml(req.params.id2,req.params.id3));
                res.end();
         
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
                        var tipoevento='';
                        var tfecha='';
                        var thora='';
                       // .select({idperiodo: 1,no_orientacion:1,idmateria:1,date:1,idunidadacademica:1,codfac:1,noasignado:1}).lean().exec

                        cursodiploma.find({'correo':req.params.id2},function(err, todosa00) {

                        cursoeve.find({'idtipoevento.codigo':'3'},function(err, todos00) {
                        Evento.find({impresion:'Inactivo',impresion:'Imprimir diploma'
                                }).select({_id:1,nombre:1,fecha:1,costo:1,tipoevento:1}).lean().exec(function(err, todos0aaa) {
       
                        Participa2.find({'idtipoevento.id':'3',correo:req.params.id2},function(err, todos) {
                                console.log('participas2')
                                console.log(todos)
                               if(todos.length>0)
                               {    
                                for (var i = 0; i < todos.length; i++) {
                                        for (var ii = 0; ii < todos00.length; ii++) {
                                                if(todos[i].idevento==todos00[ii]._id)
                                                {
                                                        teve=todos00[ii].nombre;
                                                        tfecha=todos00[ii].horario;
                                                        break;
                                                }
                                        }
                                        for (var ia = 0; ia < todosa00.length; ia++) {
                                                if(todosa00[ia].curso==teve)
                                                {
                                                        myData.push({idcurso:todos[i]._id ,nombre:todosa00[ia].nombreestudiante,curso:teve,tipo:1,fecha:tfecha,hora:''});

                                                }
                                        }

                                      
                                }
                        }


                        var duplicates = [];


                        for(var i = 0; i < todos0aaa.length;i++){

                                duplicates.push(todos0aaa[i]._id);

                            }
console.log(duplicates)

                                Participa.find({correo:req.params.id2, idevento: {$in: duplicates}},function(err, todos2) {
                                            console.log('participas')
                                            console.log(todos2)
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
                                                                
                                                                myData.push({tipoevento:tipoevento,idcurso:todos2[i]._id ,nombre:todos2[i].nombre + ' ' +todos2[i].apellido,curso:teve,tipo:2,fecha:tfecha,hora:thora});

                                                        }
                                                }


                                              

                                              
                                        }
                                        for (var i = 0; i < todos2.length; i++) {
                                              

                                 

                                                for (var ia = 0; ia < todosa00.length; ia++) {
                                                        if(todosa00[ia].curso==teve)
                                                        {
                                                                myData.push({tipoevento:'otro',idcurso:todos2[i]._id ,nombre:todosa00[ia].nombreestudiante,curso:teve,tipo:2,fecha:tfecha,hora:thora});

                                                              
                                                        }
                                                }

                                              
                                        }
                                }
                                        res.json(myData);   

                                    });

                        });
               
        }); 
}); 
}); 
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
                        'Content-Type': 'application/json',
                  },
                  formData: {
                    'carne':req.params.id2
                  }
                };

                console.log(options)
                request(options, function (error, response) { 
                  if (error) throw new Error(error);
                  console.log(response.body);
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
    console.log({'idtipoevento.codigo':req.params.id2})
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
              
                Asignapcb.find({"nombre" :'   '}).lean().exec(function(err, todos11) {
                        if (err){  res.send(err);  }    

                        var aaa=[];
                        for(var ii = 0; ii < todos11.length;ii++){
                                aaa.push(todos11[ii].idestudiante)
                        }

                        console.log(aaa)
                        

                        Personal.find({ email:{$in:aaa}}).lean().exec(function(err, todos) {
                                        if (err){  res.send(err);  }    
                                        var resp=[]
                                 
                                      //  res.json(resp);
                                      var filename   = "Tablaasignacion3.csv";
                                      res.statusCode = 200;
                                      res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                                      res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                                      res.csv(todos, true);
                                      
                        
                                });
                                
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
        case 'tablaasignacion':
//'idunidadacademica.codigo':'1'
                        Asignaest.find({ 'idtipounidad.id':'5b97f1bceb1dab0ab0368cc6'}).select({idperiodo: 1,no_orientacion:1,idmateria:1,date:1,idunidadacademica:1,codfac:1,noasignado:1}).lean().exec(function(err, todos) {
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

                        resp.push({periodo:pp,no_orientacion:noori,ingreso:tno
                                ,no_oportunidad:periodo[1]
                                ,anio_asignacion:anio,id_facultad:todos[i].idunidadacademica.codigo
                                ,codigo_fac:todos[i].codfac,no_asignado:todos[i].noasignado,id_materia:idmat,fecha:n[2] + '-'+ n[1] + '-' + n[0]});

                        

                        }
                      //  res.json(resp);
                        var filename   = "Tablaasignacion.csv";
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
                        res.setHeader("Content-Disposition", 'attachment; filename='+filename);
                        res.csv(resp, true);
                        
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

        case 'excel-calusac':
console.log('excel calusac')
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
        case 'excel-participa':
                console.log(req.params.id2)

                                var filename   = "participantes.csv";
                                
                                Participa.find({idevento:req.params.id2}).sort({nombre:1}).exec(function(err, todos2) {
                                        if (err){ res.send(err); }
                                        console.log(todos2)

                                        if(todos2.length>0)   {  

                                                var myData = [];
                                                for(var i = 0; i < todos2.length;i++){


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
case 'excel-asigna3pap':

        var filename   = "asignaciones3pap.csv";
        
        Facplan2.find({}).sort({'idsalon.nombre':1}).exec(function(err, todos2) {
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

                                
                        myData.push({unidadacademica:cleanName(todos2[i].idtipounidad.nombre),periodo:cleanName(todos2[i].idperiodo.nombre),codigounidad:todos2[i].idunidadacademica.codigo,unidadacademica:todos2[i].idunidadacademica.nombre,edificio:cleanName(todos2[i].idedificio.nombre),salon:todos2[i].idsalon.nombre
                                ,codigomateria:ll,materia:cleanName(todos2[i].idmateria),horario:cleanName(todos2[i].idhorario)
                                ,capacidad:todos2[i].capacidad ,asignados:todos2[i].asignados
                                 ,codfac:todos2[i].codfac 
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
        case 'excel-asigna2':

        var filename   = "asignacionesPAP.csv";
        
        Facplan2.find({'idperiodo.nombre':'2019-01'}).sort({'idunidadacademica.codigo':1}).exec(function(err, todos2) {
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



case 'excel-asigna33xxx':

var myDataxxx = [];

Unidadplan2.find({}).exec(function(err, todos20) {
        if (err){ res.send(err); }
 var cuentatt=1
        Asignaest.find({}).exec(function(err, todos300) {
                if (err){ res.send(err); }
      var  cuenta=1;
                for(var i = 0; i < todos20.length;i++){
                cuenta=0;
                        for(var j = 0; j < todos300.length;j++){
                                if(todos20[i].idsalon.nombre==todos300[j].idsalon.nombre)
                                {
                                        cuenta=cuenta+1;
                                        cuentatt=cuentatt+1;


                                }
                        }

                    getNextSequenceValue2( todos20[i].idsalon.nombre,todos20[i]._id,cuenta);
                }


                    
                    //    myDataxxx.push({salon:todos20[i].idsalon.nombre,id:todos20[i]._id  ,cuenta2:cuenta});
res.json({cantidad:cuentatt});
                      


        });

});






break;


case 'excel-asigna33xxxcc':

var myDataxxx = [];


Facplan.find({  "idperiodo.nombre" : "2019-01", 'idtipounidad.id': { $nin: [ '5b97f1bceb1dab0ab0368cc6'] }}).exec(function(err, todos20) {
        if (err){ res.send(err); }

Asignaest.aggregate(
        [
                { 
                    "$match" : {
                        "idperiodo.nombre" : "2019-01",
                        'idtipounidad.id': { $nin: [ '5b97f1bceb1dab0ab0368cc6'] }
                    }
                }, 
                { 
                    "$group" : {
                        "_id" : {
                            "codfac" : "$codfac", 
                            "idunidadacademica᎐codigo" : "$idunidadacademica.codigo", 
                            "idedificio᎐id" : "$idedificio.id", 
                            "idhorario" : "$idhorario", 
                            "idunidadacademica᎐id" : "$idunidadacademica.id", 
                            "idsalon᎐id" : "$idsalon.id", 
                            "idmateria" : "$idmateria"
                        }, 
                        "COUNT(*)" : {
                            "$sum" : 1
                        }
                    }
                }, 
                { 
                    "$project" : {
                        "codfac" : "$_id.codfac", 
                        "idunidadacademica.id" : "$_id.idunidadacademica᎐id", 
                        "idunidadacademica.codigo" : "$_id.idunidadacademica᎐codigo", 
                        "idedificio.id" : "$_id.idedificio᎐id", 
                        "idsalon.id" : "$_id.idsalon᎐id", 
                        "idmateria" : "$_id.idmateria", 
                        "idhorario" : "$_id.idhorario", 
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

                                        var ll=''
                                        if(result[j].idmateria=='Lenguaje'){ll='3'}
                                        if(result[j].idmateria=='Matematica'){ll='4'}
                                        if(result[j].idmateria=='Fisica'){ll='2'}
                                        if(result[j].idmateria=='Quimica'){ll='5'}
                                        if(result[j].idmateria=='Biologia'){ll='1'}


                                        if(result[j].codfac==todos20[jj].codfac &&  result[j].idunidadacademica.id==todos20[jj].idunidadacademica.id &&  result[j].idedificio.id==todos20[jj].idedificio.id &&  result[j].idsalon.id==todos20[jj].idsalon.id &&  result[j].idmateria==todos20[jj].idmateria &&  result[j].idhorario==todos20[jj].idhorario &&  result[j].cantidad==todos20[jj].asignados)
                                        {
                                                 encuentra=1;       

                                        }
                                        else{

                                                if(result[j].codfac==todos20[jj].codfac &&  result[j].idunidadacademica.id==todos20[jj].idunidadacademica.id &&  result[j].idedificio.id==todos20[jj].idedificio.id &&  result[j].idsalon.id==todos20[jj].idsalon.id &&  result[j].idmateria==todos20[jj].idmateria &&  result[j].idhorario==todos20[jj].idhorario)
                                        {
                                                 encuentra=3;       

                                        }
                                       
                                       

                                        }

                                                


                                }

                                if(encuentra==0)
                                {
                                             console.log(result[j])  

                                }
                                else
                                {

                                        if(encuentra==1)
                                {
                                        

                                }
                                else
                                {
                                        getNextSequenceValue2a(result[j].codfac,result[j].idunidadacademica.id,result[j].idedificio.id,result[j].idsalon.id,result[j].idmateria,result[j].idhorario,result[j].cantidad,res);

                                  

                                }
                                //getNextSequenceValue2a(result[j].codfac,result[j].idunidadacademica.id,result[j].idedificio.id,result[j].idsalon.id,result[j].idmateria,result[j].idhorario,result[j].cantidad,res);

                                        

                                }


                        }
//cons
                     //   getNextSequenceValue2a( todos20[i].idsalon.nombre,todos20[i]._id,cuenta);
                 
                                  
                    
res.json({ result});

                    
                }
            });

        });
  //  res.json(aa);
    break;




                    


case 'excel-papest':

var myDataxxx = [];

Userperfil.find({}).exec(function(err, todos20) {
        if (err){ res.send(err); }
 var cuentatt=1
 Asignapap.find({}).exec(function(err, todos300) {
                if (err){ res.send(err); }
      var  cuenta=0;
      var data1=[];
                for(var i = 0; i < todos20.length;i++){
               cuenta=0;
                        for(var j = 0; j < todos300.length;j++){
                                if(todos20[i].userId==todos300[j].userId)
                                {
                                     cuenta=1;
                                }
                        }
                        if(cuenta==1)
                        {}
                        else
                        { 
                             data1.push({id:todos20[i]._id})

                        }

                      
                }


                    
                    
res.json({data1});
                      


        });

});






break;


case 'excel-papcuenta':

var myDataxxx = [];


 Asignapap.find({estado:'Asignación finalizada con exito'}).exec(function(err, todos300) {
                if (err){ res.send(err); }
   
  
                Asignaest.find({}).exec(function(err, todos500) {
                        if (err){ res.send(err); }


                        var data2=[];
                        for(var i = 0; i < data1.length;i++){
                                for(var j = 0; j < todos500.length;j++){
                                        if(data1[i].idasigna==todos500[j].idasigna)
                                        { 
                                                
                                                var val = buscaarray(todos20ab, data1[i].idasigna , data1[i].idperfil
                                                       , todos500[j].idhorario,todos500[j].idmateria);
                                              
                                                
                                               if(val==0)
                                               {         
                                            
                                                }

                                          
                                                
                                        }
                                }
                              
                              
                        }
                                            
res.json(todos500);
                     
                });
        });








break;
case 'excel-asigna3reduce':


Asignapap.aggregate(
        [
                { 
                        "$group" : {
                            "_id" : {
                                "userId" : "$userId"
                            }, 
                            "COUNT" : {
                                "$sum" : 1
                            }
                        }
                    }, 
                    { 
                        "$project" : {
                            "userId" : "$_id.userId", 
                            "COUNT" : "$COUNT", 
                            "_id" :0
                        }
                    }, 
                    { 
                        "$match" : {
                            "COUNT" : {
                                "$gt" :1
                            }
                        }
                    }
        ], function (err, result) {
                if (err) {
                    next(err);
                } else {

                        var  data1=[]
                 
                        Asignapap.find({}).exec(function(err, todos20) {
                                if (err)
                                { res.send(err); }

                                for(var i = 0; i < result.length;i++){
                                        var encuentra=[]
                                        for(var j = 0; j < todos20.length;j++){

                                                if(todos20[j].userId==result[i].userId)
                                                {

                                                     encuentra.push({id:todos20[j]._id });   
                                                //     data1.push({id:todos20[i]._id + ' ' + todos20[i].cursosaplica +' ' + todos20[i].usuarionew + ' ' +result[j].COUNT + ' '  + result[j].userId});   


                                                     //break;

                                                }


                                        }
                                      
                                        for(var k = 0; k <encuentra.length-1;k++){
                                                data1.push({id:encuentra[k].id});   
                                                      
                                                 //  Asignapap.findByIdAndRemove({ _id: encuentra[k].id }, function(err, todoxxx) {
                                                     //
                                                        //    });
                                        }

                                     

                                      

                                }

                  
                              //  res.json(data1);
                                

                                Asignaest.find({}).exec(function(err, todos200) {
                                        if (err)
                                        { res.send(err); }
                                        var data2=[]        
                                        for(var i = 0; i < todos200.length;i++){
                                                for(var j = 0; j < data1.length;j++){
        
                                                        if(todos200[i].idasigna==data1[j].id)
                                                        {
                                                              data2.push({id:todos200[i]._id,nombre:todos200[i].nombre,materia:todos200[i].idmateria,horario:todos200[i].idhorario,usu1: todos200[i].usuarionew});   
                                                               // res.json(todo);
                                                          //  });


                                                            break;

        
                                                        }
        
        
                                                }
                                        }  


                                           
                                                      
                                        
                                        res.json(data2);

                                });


                                
                        
                        });


                    
                }
            });

    
  //  res.json(aa);
    break;

case 'excel-asigna3papficha':
//127.0.0.1:9090/api/datosfijos/excel-asigna3papficha
var filename   = "Fichapap.csv";
                      Asignaestpap.find({}).populate('idasigna').exec(function(err, todos) {
                                if (err){ res.send(err); }

                                var myData2 = [];
                                     
                        
                                                for(var i = 0; i < todos.length;i++){

                                                        var aa=''
                                                        try {
                                                                 aa=todos[i].idasigna.cierra
                                                              }
                                                              catch(error) {
                                                             aa==''
                                                              }

                                                              


                                                     
                                                        if(aa=='1')
                                                        {
                                                        if(todos[i].idasigna!==null )
                                                        {
                                                                var tedificio=''
                                                                var tsalon= todos[i].idsalon.nombre
                                                                var tsalon2=tsalon.split('-')

                                                                d =new Date(todos[i].updatedAt).toISOString().substr(0,10);   

                                                                      
myData2.push({
        fecha:d,
        cui:"_" +todos[i].idasigna.cui +" ",
        nombre:todos[i].idasigna.nombre, 
        nov:todos[i].idasigna.nov,
        carne:todos[i].idasigna.carne,
        monto:todos[i].idasigna.monto,
      
        correo:todos[i].idasigna.correo,
        edificio:todos[i].idedificio.nombre,
        codigosalon:tsalon2[0],
        salon:todos[i].idsalon.nombre,
        jornada:todos[i].idjornada,
        materia:todos[i].idmateria,
        horario:todos[i].idhorario,
        noasignado:todos[i].noasignado});
                                                            
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