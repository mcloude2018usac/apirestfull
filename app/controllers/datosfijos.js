
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


    function dacadenamodulo(vector,op) {
        var re=''
        for(var i = 0; i <vector.length; i++) {
                
                switch(vector[i].tipo)  {
                        case 'Number':
                                switch(op)  {
                                        case 'createcamposhtml':
                                                if(vector[i].visible==1)
                                                {
                                                re= re+  '      <ion-item class="input-item">\n'
                                                re= re+  '              <ion-label  position="floating">'+ capitalizeFirstLetter(vector[i].nombre)+'</ion-label>\n'
                                                

                                                if(vector[i].tipo=='Number')
                                                {
                                                        re= re+  '              <ion-input inputMode="Number" clearInput="true" formControlName="' + vector[i].tipo +'" required></ion-input>\n'
                                          
                                                }
                                                else{
                                                        re= re+  '              <ion-input inputMode="text" clearInput="true" formControlName="' + vector[i].tipo +'" required></ion-input>\n'
                                          
                                                }
                                                re= re+  '      </ion-item>\n'
                                                re= re+  '\n'
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
                                            
                                                        if(vector[i].nombre=='idempresa')
                                                        {
                                                                re= re + "       idempresa: this.userinfo[0].idempresa,\n"
                                                        }
                                                        else
                                                        {
                                                                re= re+ "       "+vector[i].nombre + "  : this.Form.controls['"+ vector[i].nombre  +"'].value,\n"   
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
                                       
                                }

                        break;
                        case 'String':
                                switch(op)  {
                                        case 'createcamposhtml':
                                                if(vector[i].visible==1)
                                                {
                                                re= re+  '      <ion-item class="input-item">\n'
                                                re= re+  '              <ion-label  position="floating">'+ capitalizeFirstLetter(vector[i].nombre)+'</ion-label>\n'
                                                

                                                if(vector[i].tipo=='Number')
                                                {
                                                        re= re+  '              <ion-input inputMode="Number" clearInput="true" formControlName="' + vector[i].tipo +'" required></ion-input>\n'
                                          
                                                }
                                                else{
                                                        re= re+  '              <ion-input inputMode="text" clearInput="true" formControlName="' + vector[i].tipo +'" required></ion-input>\n'
                                          
                                                }
                                                re= re+  '      </ion-item>\n'
                                                re= re+  '\n'
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
                                           
                                                        if(vector[i].nombre=='idempresa')
                                                        {
                                                                re= re + "       idempresa: this.userinfo[0].idempresa,\n"
                                                        }
                                                        else
                                                        {
                                                                re= re+ "       "+vector[i].nombre + "  : this.Form.controls['"+ vector[i].nombre  +"'].value,\n"   
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
                                       
                                }

                        break;
                        case 'Grupo':
                                switch(op)  {
                                        case 'createcamposhtml':
                                                if(vector[i].visible==1)
                                                {
                                                re= re+  '      <ion-item class="input-item">\n'
                                                re= re+  '              <ion-label  position="floating">'+ capitalizeFirstLetter(vector[i].nombre)+'</ion-label>\n'
                                                re= re+  '              <ion-select  placeholder="{{ \'SELECTVALORM\' | translate }}" formControlName="'+vector[i].nombre+'">\n'
                                                re= re+  '              <ion-select-option  text-wrap *ngFor="let item of v'+vector[i].nombre+'" value="{{item.id}}">{{item.nombre}}</ion-select-option>\n'
                                                re= re+  '              </ion-select>\n'
                                             
                                                 re= re+  '     </ion-item>\n'
                                                re= re+  '\n'
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
                                       
                                                                re= re+ "       "+vector[i].nombre + "  : this.Form.controls['"+ vector[i].nombre  +"'].value.id,\n"   
                                                

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
                                       
                                }
                        break;
                        case 'Estado':
                                switch(op)  {
                                        case 'createcamposhtml':
                                                if(vector[i].visible==1)
                                                {
                                                re= re+  '      <ion-item class="input-item">\n'
                                                re= re+  '              <ion-label  position="floating">'+ capitalizeFirstLetter(vector[i].nombre)+'</ion-label>\n'
                                              
                                                re= re+  '              <ion-select placeholder="{{ \'SELECTVALORM\' | translate }}" formControlName="' + vector[i].tipo +'">\n'
                                                re= re+  '              <ion-select-option value="Activo">Activo</ion-select-option>\n'
                                                re= re+  '              <ion-select-option value="Inactivo">Inactivo</ion-select-option>\n'
                                                re= re+  '              </ion-select>\n'
                                              
                                                re= re+  '      </ion-item>\n'
                                                re= re+  '\n'
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
                                               
                                                                re= re+"       "+ vector[i].nombre + "  : this.Form.controls['"+ vector[i].nombre  +"'].value,\n"   
                                                

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
                                       
                                }
                        break;
            
                }
          
       }
return re;
}
function buscamodulo(op,op2) {
        var re=''

switch(op)  {
        case 'modulo':
              re=  dacadenamodulo(Modulovv,op2)

                
        break;

}
      
        
       return re;
    
        
    }

//http://127.0.0.1:9090/api/datosfijos/generamod/modulos
    function buildHtml(op,op2) {
        var header = 'a';
        var body = "";
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
        body = body + 'model  '+op+'.js ***************************************************\n';
        body=body + " var mongoose =require(\"mongoose\");\n";
        body=body + " var "+op2+"Schema 		=	new  mongoose.Schema({\n";
        body=body + "     idempresa		: { type : String, required : true },  \n";
        body=body + "    nombre   		: { type : String, required : true },\n";
        body=body + "    index   		: { type : Number, required : true },\n";
        body=body + "    icono   		: { type : String, required : true },\n";
        body=body + "    nivel   		: { type : String, required : true },\n";
        body=body + "    estado	: { type : String, required : true },\n";
        body=body + "    usuarionew	: { type : String },      usuarioup	: { type : String }\n";
        body=body + "    }, {\n";
         body=body + "    timestamps: true\n";
         body=body + "    }); \n";
         body=body + "module.exports = mongoose.model('Modulo', "+op2+"Schema);\n";

        body=body + "\n\n\n"
        body = body + 'controlador  '+op+'.js ***************************************************\n';


        body=body + "\n\n\n"
        body =  body+ 'modulo-list.module   ***************************************************\n';
        body=body + "import { IonicModule } from '@ionic/angular';\n"
        body=body + "import { RouterModule} from '@angular/router';\n"
        body=body + "import { NgModule } from '@angular/core';\n"
        body=body + "import { CommonModule } from '@angular/common';\n"
        body=body + "import { ComponentsModule } from '../../components/components.module';\n"
        body=body + "import { TranslateModule } from '@ngx-translate/core';\n"
        body=body + "import { FormsModule, ReactiveFormsModule } from '@angular/forms';\n"
        body=body + "import { "+op2+"CreatePage } from './"+op+"-create/"+op+"-create.page';\n"
        body=body + "import { "+op2+"ListPage } from './modulo-list';\n"
        body=body + "@NgModule({\n"
         body=body + "  declarations: [\n"
         body=body + "    "+op2+"ListPage, "+op2+"CreatePage\n"
         body=body + "  ],\n"
         body=body + "  imports: [\n"
         body=body + "    CommonModule,IonicModule, ComponentsModule, FormsModule,  ReactiveFormsModule,\n"
         body=body + "    RouterModule.forChild([{ path: '', component: "+op2+"ListPage }]), TranslateModule.forChild(),\n"
         body=body + "  ],\n"
         body=body + "  entryComponents: [\n"
         body=body + "    "+op2+"CreatePage\n"
         body=body + "  ],\n"
         body=body + "})\n"
         body=body + "export class "+op2+"ListPageModule {}\n"
         body=body + "\n\n\n"
         body = body + 'modulo-list.page.scss  ***************************************************\n';
         body = body + ':host {\n';
         body = body + '       --page-margin: var(--app-narrow-margin);\n';
         body = body + '       --page-border-radius: var(--app-fair-radius);\n';
         body = body + '       --page-segment-background: var(--app-background);\n';
         body = body + '       --page-segment-indicator-height: 2px;\n';
         body = body + '     }\n';
         body = body + '     ion-item-divider {\n';
         body = body + '       --background: var(--ion-color-light);\n';
         body = body + '       --padding-start: var(--page-margin);\n';
         body = body + '     }\n';

              
         body = body + ':host { --page-margin: var(--app-fair-margin);\n';
                 body = body + '--page-background: var(--app-background);\n';
                 body = body + '--page-background-shade: var(--app-background-shade);\n';
                 body = body + '--page-tags-gutter: 5px;            }\n';
               
                 body=body + "\n\n\n"
         body = body + 'modulo-list.page.html   ***************************************************\n';

        body = body + ' <ion-header>\n';
        body = body + ' <ion-toolbar color="primary">\n';
        body = body + '   <ion-buttons slot="start">\n';
        body = body + '     <ion-menu-button></ion-menu-button>\n';
        body = body + '   </ion-buttons>\n';
        body = body + '   <ion-title>\n';
        body = body + '     {{tituloxx}}\n';
        body = body + '   </ion-title>\n';
        body = body + '   <ion-buttons slot="end">\n';
        body = body + '     <ion-button title=" {{ \'AGREGARM\' | translate }}" (click)="addRecord()">\n';
        body = body + '       <ion-icon slot="icon-only" name="add"></ion-icon>\n';
        body = body + '     </ion-button>\n';
        body = body + '     <ion-button title=" {{ \'REFRESCARM\' | translate }}" (click)="pideregistros0()">\n';
        body = body + '       <ion-icon slot="icon-only" name="refresh-circle-outline"></ion-icon>\n';
        body = body + '     </ion-button>\n';
        body = body + '     <ion-button *ngIf="viewType === \'grid\'" (click)="changeToList()">\n';
        body = body + '       <ion-icon slot="icon-only" name="newspaper"></ion-icon>\n';
        body = body + '     </ion-button>\n';
        body = body + '     <ion-button *ngIf="viewType === \'list\'" (click)="changeToGrid()">\n';
        body = body + '       <ion-icon slot="icon-only" name="grid"></ion-icon>\n';
        body = body + '     </ion-button>\n';
        body = body + '   </ion-buttons>\n';
        body = body + ' </ion-toolbar>\n';
        body = body + ' <ion-toolbar class="filters-toolbar">\n';
        body = body + '   <ion-row class="searchbar-row" align-items-center>\n';
        body = body + '     <ion-col>\n';
        body = body + '       <ion-searchbar animated [(ngModel)]="searchQuery" (ionChange)="searchList()" placeholder="{{ \'BUSCARM\' | translate }}"></ion-searchbar>\n';
        body = body + '     </ion-col>\n';
        body = body + '     <ion-col class="call-to-action-col">\n';
        body = body + '       <ion-button fill="clear" color="secondary" class="filters-btn" title=" {{ \'FILTROM\' | translate }}" (click)="showAgeFilter = !showAgeFilter">\n';
        body = body + '         <ion-icon slot="icon-only" name="options"></ion-icon>\n';
        body = body + '       </ion-button>\n';
        body = body + '     </ion-col>\n';
        body = body + '   </ion-row>\n';
        body = body + '   <form [formGroup]="rangeForm" [hidden]="!showAgeFilter">\n';
        body = body + '     <ion-row class="range-item-row">\n';
        body = body + '       <ion-col size="12">\n';
        body = body + '         <div class="range-header">\n';
        body = body + '           <span class="range-value">{{ rangeForm.controls.dual.value.lower }}</span>\n';
        body = body + '           <span class="range-label">Filter by age</span>\n';
        body = body + '           <span class="range-value">{{ rangeForm.controls.dual.value.upper }}</span>\n';
        body = body + '         </div>\n';
        body = body + '       </ion-col>\n';
        body = body + '       <ion-col size="12">\n';
        body = body + '         <ion-range class="range-control" formControlName="dual" color="secondary" pin="true" dualKnobs="true" (ionChange)="searchList()" min="1" max="100" step="1" debounce="400"></ion-range>\n';
        body = body + '       </ion-col>\n';
        body = body + '     </ion-row>\n';
        body = body + '   </form>\n';
        body = body + ' </ion-toolbar>\n';
        body = body + '</ion-header>\n';
        body = body + '<ion-content class="user-friends-content">\n';
        body = body + ' <ion-item-divider sticky>\n';
        body = body + '   <ion-label *ngIf="(itemsList?.length > 0) " >{{ \'NOREGISTROSM\' | translate }}: {{itemsList.length}}</ion-label>\n';
        body = body + ' </ion-item-divider>\n';
        body = body + ' <ion-segment (ionChange)="filterContacts($event)" value="todos">\n';
        body = body + '   <ion-segment-button value="todos" checked>\n';
        body = body + '     {{ \'TODOSM\' | translate }}\n';
        body = body + '   </ion-segment-button>\n';
        body = body + '   <ion-segment-button value="Activo">\n';
        body = body + '     {{ \'ACTIVOSM\' | translate }}\n';
        body = body + '    </ion-segment-button>\n';
        body = body + '   <ion-segment-button value="Inactivo">\n';
        body = body + '     {{ \'INACTIVOSM\' | translate }}\n';
        body = body + '   </ion-segment-button>\n';
        
        body = body + ' </ion-segment>\n';
       
       
        body = body + ' <ion-list *ngIf="efecto === 0" >\n';
           
        body = body + '   <ion-item lines="none" *ngFor="let item of [0,1,2,3,4,5,6]">\n';
            
        body = body + '     <ion-label>\n';
        body = body + '       <skeleton-element></skeleton-element>\n';
        body = body + '       <skeleton-element></skeleton-element>\n';
        body = body + '       <skeleton-element width="67%"></skeleton-element>\n';
             
        body = body + '     </ion-label>\n';
        body = body + '   </ion-item>\n';
        body = body + ' </ion-list>\n';
       
        body = body + ' <ion-list  *ngIf="(itemsList?.length > 0) && (viewType === \'list\')">\n';
        body = body + '   <ion-item  *ngFor="let item of itemsList " [routerLink]="">\n';
        body = body + '     <ion-icon name="server-outline" slot="start"></ion-icon>\n';
        body = body + '    <ion-label class="ion-text-wrap">\n';
        body = body + '        <ion-note slot="end">No. {{item.index}}</ion-note> <br>\n';
        body = body +buscamodulo(op,'listcamposhtml1')
        body = body + '       <ion-badge color="medium">{{item.estado}}</ion-badge>\n';
        body = body + '     </ion-label>\n';
        body = body + '     <ion-row no-padding slot="end">\n';
        body = body + '       <ion-col>\n';
        body = body + '         <button title= "{{ \'MENUM\' | translate }}"  (click)="otrasop(item)"  ion-button clear large icon-start>\n';
        body = body + '           <ion-icon name="ellipsis-vertical-outline">\n';
        body = body + '           </ion-icon>\n';
        body = body + '           {{ \'MENUM\' | translate }}\n';
        body = body + '         </button><br><br>\n';
        body = body + '         <button title="{{ \'ELIMINARM\' | translate }}"  (click)="deleteRecord(item)" ion-button clear large icon-start>\n';
        body = body + '           <ion-icon name="trash-outline"></ion-icon>\n';
        body = body + '           {{ \'ELIMINARM\' | translate }}\n';
        body = body + '         </button><br>\n';
        body = body + '         <br>\n';
        body = body + '         <button title="{{ \'ACTUALIZARM\' | translate }}"  (click)="updateRecord(item)" ion-button clear   icon-start>\n';
        body = body + '           <ion-icon name="create-outline"></ion-icon>\n';
        body = body + '           {{ \'ACTUALIZARM\' | translate }}\n';
        body = body + '         </button>\n';
        body = body + '       </ion-col>\n';
        body = body + '     </ion-row>\n';
        body = body + '   </ion-item>\n';
        body = body + ' </ion-list>\n';
       
        body = body + ' <ion-grid *ngIf="(itemsList?.length > 0) && (viewType === \'grid\')">\n';
        body = body + '   <ion-row>\n';
        body = body + '     <ion-col *ngFor="let item of itemsList;let i = index;" size-lg="6"  size-sm="6" size="12">\n';
        body = body + '       <ion-card  >\n';
        body = body + '         <ion-row class="user-stats-wrapper user-details-wrapper">\n';
        body = body + '           <ion-col>\n';
        body = body + '             <span class="user-stat-value">No.</span>\n';
        body = body + '             <span class="user-stat-name">{{item.index}} </span>\n';
        body = body + '           </ion-col>\n';
        body = body + '           <ion-col>\n';
        body = body + '             <span class="user-stat-value">{{item.estado}} </span>\n';
        body = body + '           </ion-col>\n';
        body = body + '         </ion-row>\n';
        body = body + '         <ion-item  [routerLink]="">\n';
        body = body + '           <ion-icon name="server-outline" slot="start"></ion-icon>\n';
        body = body + '           <ion-label class="ion-text-wrap">\n';
        body = body +buscamodulo(op,'listcamposhtml2')
       
        body = body + '           </ion-label>\n';
        body = body + '         </ion-item>\n';
        body = body + '         <ion-card-content>\n';
        body = body + '         </ion-card-content>\n';
        body = body + '         <ion-row no-padding>\n';
        body = body + '           <ion-col>\n';
        body = body + '             <button title=" {{ \'ELIMINARM\' | translate }}"  (click)="deleteRecord(item,i)" ion-button clear small  icon-start>\n';
        body = body + '               <ion-icon name="trash-outline"></ion-icon>\n';
        body = body + '               {{ \'ELIMINARM\' | translate }}\n';
        body = body + '             </button>\n';
        body = body + '           </ion-col>\n';
        body = body + '           <ion-col>\n';
        body = body + '             <button  title=" {{ \'MENUM\' | translate }}"  (click)="deleteRecord(item,i)" ion-button clear small  icon-start>\n';
        body = body + '               <ion-icon name="ellipsis-vertical-outline"></ion-icon>\n';
        body = body + '               {{ \'MENUM\' | translate }}\n';
        body = body + '             </button>\n';
        body = body + '           </ion-col>\n'
        body = body + '         </ion-row>\n';
        body = body + '       </ion-card>\n';
        body = body + '     </ion-col>\n';
        body = body + '   </ion-row>\n';
        body = body + ' </ion-grid>\n';
        body = body + ' <h3 *ngIf="itemsList?.length == 0" class="empty-list-message">\n';
        body = body + '   {{ \'NODATOS\' | translate }}  \n';
        body = body + ' </h3>\n';
       
        body = body + ' <ion-infinite-scroll threshold="100px" (ionInfinite)="loadData($event)">\n';
        body = body + '   <ion-infinite-scroll-content\n';
        body = body + '     loadingSpinner="bubbles"\n';
        body = body + '     loadingText="Espere un momento...">\n';
        body = body + '   </ion-infinite-scroll-content>\n';
        body = body + ' </ion-infinite-scroll>\n';
        body = body + '</ion-content>\n';
       

       body=body + "\n\n\n"
       body = body + 'modulo-list.js   ***************************************************\n';       

 body = body + "import { Component , OnInit , ViewChild } from '@angular/core';\n"
 body = body + "import {AlertController, ModalController ,  IonRouterOutlet} from '@ionic/angular';\n"
 body = body + "import { TranslateService } from '@ngx-translate/core';\n"
 body = body + "import {  Router } from '@angular/router';\n"
 body = body + "import { AuthenticationService } from '../../services/Authentication.service';\n"
 body = body + "import { FormGroup, FormControl } from '@angular/forms';\n"
 body = body + "import { ReplaySubject} from 'rxjs';\n"
 body = body + "import { IonInfiniteScroll } from '@ionic/angular';\n"
 body = body + "import { "+op2+"CreatePage } from './"+op+"-create/"+op+"-create.page';\n"


 body = body + "@Component({\n"
        body = body + "selector: 'page-"+op+"-list',\n"
        body = body + "templateUrl: '"+op+"-list.html',\n"
        body = body + "styleUrls: ['./"+op+"-list.scss'],\n"
body = body + "})\n"
body = body + "export class "+op2+"ListPage implements OnInit {\n"
        body = body + "@ViewChild(IonInfiniteScroll, { static : false }) infiniteScroll: IonInfiniteScroll;\n"
        body = body + "rangeForm: FormGroup;\n"
        body = body + "searchQuery: string;\n"
        body = body + "showAgeFilter = false;\n"
        body = body + "items: any  = [] ;\n"
        body = body + "variables: any = [];\n"
        body = body + "userinfo: any = [];\n"
        body = body + "viewType = 'list';\n"
        body = body + "tituloxx = '';\n"
        body = body + "efecto = 0;\n"
        body = body + "seguro ='';\n"
        body = body + "msg = '';\n"
        body = body + "itemsList: Array<any>;\n"
        body = body + "public currentSegment: string = \"Todos\";\n"
        body = body + "searchSubject: ReplaySubject<any> = new ReplaySubject<any>(1);\n"
        body = body + "constructor(  private routerOutlet: IonRouterOutlet , private router: Router, private authenticationService: AuthenticationService,\n"
 body = body + "   public alertController: AlertController,     public translateService: TranslateService    ,    private modalController: ModalController\n"
 body = body + "   ) {\n"
        body = body + " }\n"
        body = body + "changeToList() { this.viewType = 'list'; }\n"

        body = body + "changeToGrid() {   this.viewType = 'grid';  }\n"

        body = body + "ngOnInit() {\n"
    body = body + "    this.variables = this.router.getCurrentNavigation().extras.state.variables;\n"
    body = body + "    this.userinfo = this.authenticationService.getcopiauser();\n"
    body = body + "    this.tituloxx =  this.variables.nombre;\n"
    body = body + "    this.searchQuery = '';\n"

    body = body + "    this.translateService.get('SEGUROM').subscribe((value) => {   this.seguro = value  });\n"
    body = body + "    this.translateService.get('MSGM').subscribe((value) => {   this.msg = value  });\n"

    body = body + "    this.rangeForm = new FormGroup({    dual: new FormControl({lower: 1, upper: 100})   });   \n"
    body = body + "    this.currentSegment = 'todos';\n"
    body = body + "    this.pideregistros( this.currentSegment);\n"
    body = body + "  }\n"
    body = body + "  filterContacts(event: any) {\n"
body = body + "    let selectedCategory = event.detail.value;\n"
body = body + "    this.currentSegment = selectedCategory;\n"

body = body + "    this.pideregistros(selectedCategory);\n"
body = body + "  }\n"
body = body + "  pideregistros0() {\n"

        body = body + "   this.pideregistros(this.currentSegment);\n"
        body = body + "  }\n"
        body = body + "  pideregistros(op) {\n"
 body = body + "       this.itemsList = [];\n"
 body = body + "       this.efecto = 0 ;\n"
 body = body + "       this.authenticationService.getReg('todos/' + op + '/' + this.userinfo[0].idempresa, 'modulos', 0).then((data) => {\n"
 body = body + "       this.efecto=1;\n"
 body = body + "       this.items =  data;\n"
 body = body + "       this.itemsList = this.items;\n"
 body = body + " }, (err) => {\n"
 body = body + "   this.authenticationService.presentAlert(err.error , this.msg , '');\n"
 body = body + " });\n"
 body = body + "  }\n"
 body = body + "  searchList() {\n"
body = body + "    this.searchSubject.next({\n"
 body = body + "     lower: this.rangeForm.controls.dual.value.lower,\n"
 body = body + "     upper: this.rangeForm.controls.dual.value.upper,\n"
 body = body + "     query: this.searchQuery\n"
 body = body + "   });\n"
 body = body + "    const query = (this.searchQuery && this.searchQuery !== null) ? this.searchQuery : '';\n"
 body = body + "    this.itemsList = this.filterList(this.items, query);\n"
 body = body + "  }\n"
 body = body + " filterList(list, query): Array<any> {\n"
 body = body + "   return list.filter(item => item.nombre.toLowerCase().includes(query.toLowerCase()));\n"
 body = body + "  }\n"
 body = body + "  async otrasop(item: any) {  }\n"
 body = body + "  async deleteRecord(item: any) {\n"
 body = body + "   const alert = await this.alertController.create({\n"
 body = body + "     header: this.seguro,\n"
 body = body + "     message: '',\n"
 body = body + "     buttons: [\n"
 body = body + "       {\n"
 body = body + "         text: 'No',\n"
 body = body + "        cssClass: 'secondary',\n"
 body = body + "         handler: (blah) => {\n"
 body = body + "         }\n"
 body = body + "       }, {\n"
body = body + "          text: 'Si',\n"
body = body + "          handler: () => {\n"
body = body + "            const recordID: string		= item._id;\n"
body = body + "            this.authenticationService.deleteReg(recordID + '/' + this.variables.username + '/' + this.variables.idempresa + '/'\n"
body = body + "            + this.variables.idafiliado , 'modulos').then((data) => {\n"
body = body + "              this.pideregistros( this.currentSegment);\n"
body = body + "              }, (err) => {\n"
body = body + "                this.authenticationService.presentAlert(err.error, this.msg, '');\n"
body = body + "            });\n"
body = body + "          }\n"
body = body + "        }\n"
body = body + "      ]\n"
body = body + "    });\n"
body = body + "    await alert.present();\n"
body = body + "  }\n"

body = body + "  async updateRecord(item: any) {\n"
body = body + "    const modal = await this.modalController.create({\n"
body = body + "      component: ModuloCreatePage,\n"
body = body + "      swipeToClose: true,\n"
body = body + "      presentingElement: this.routerOutlet.nativeEl,\n"
body = body + "      componentProps:  { variables:  this.variables, record: item, userinfo: this.userinfo}\n"
body = body + "      , cssClass: 'modal-fullscreen'\n"
body = body + "    });\n"
body = body + "    modal.onWillDismiss().then(() => {\n"
body = body + "      this.pideregistros( this.currentSegment);\n"
body = body + "    });\n"
body = body + "    return await modal.present();\n"
body = body + "}\n"
body = body + "   async  addRecord() {\n"
body = body + "    const modal = await this.modalController.create({\n"
body = body + "      component: ModuloCreatePage,\n"
body = body + "      swipeToClose: false,\n"
body = body + "      backdropDismiss: false,\n"
body = body + "     animated: true,\n"

body = body + "      presentingElement: await this.modalController.getTop(),\n"
body = body + "      componentProps:  { variables:  this.variables, record: null, userinfo: this.userinfo}\n"
body = body + "      , cssClass: 'modal-fullscreen'\n"
body = body + "    });\n"

body = body + "    modal.onWillDismiss().then((data) => {\n"
body = body + "         if ( data.data !== 'close' ) {\n"
body = body + "        this.pideregistros( this.currentSegment);\n"
body = body + "      }\n"

body = body + "    });\n"
body = body + "    return await modal.present();\n"
body = body + "   }\n"

body = body + "   loadData(event) {\n"
body = body + "    setTimeout(() => {\n"
body = body + "      event.target.complete();\n"
body = body + "      if ( this.items.length === 1000) {\n"
body = body + "        event.target.disabled = true;\n"
body = body + "      }\n"
body = body + "    }, 500);\n"
body = body + "  }\n"


body = body + "}\n"



         body=body + "\n\n\n"
       body = body + 'modulo-create.module   ***************************************************\n';
      
                body=body + " import { NgModule } from '@angular/core'; \n"
                body=body + "  import { CommonModule } from '@angular/common';\n"
                body=body + "  import { FormsModule } from '@angular/forms';\n"
                body=body + "  import { TranslateModule } from '@ngx-translate/core';\n"
                body=body + "   import { IonicModule } from '@ionic/angular';\n"
                body=body + "   import { "+op2+"CreatePage } from './"+op+"-create.page';\n"
                body=body + "\n"
                body=body + "   @NgModule({"
                body=body + "   imports: [CommonModule,  FormsModule,  IonicModule,TranslateModule.forChild()   ],\n"
                body=body + "   declarations: ["+op2+"CreatePage]        })\n"
                body=body + "\n"
                body=body + "  export class "+op2+"CreatePageModule {}\n"
                body=body + "\n\n\n"
                body = body + 'modulo-create.page.scss  ***************************************************\n';
                body = body + ':host { --page-margin: var(--app-fair-margin);\n';
                        body = body + '--page-background: var(--app-background);\n';
                        body = body + '--page-background-shade: var(--app-background-shade);\n';
                        body = body + '--page-tags-gutter: 5px;            }\n';
                      
                        body=body + "\n\n\n"
                body = body + 'modulo-create.page.html   ***************************************************\n';



                body = body + '<form class="create-user-form ion-page" [formGroup]="Form" >\n';
                body = body + '<ion-header>\n';
                body = body + '        <ion-toolbar color="primary">\n';
                body = body + '                <ion-buttons slot="end">\n';
                body = body + '                        <ion-button (click)="dismissModal()">\n';
                body = body + '                           <ion-icon slot="icon-only" name="close"></ion-icon>\n';
                body = body + '                        </ion-button>\n';
                body = body + '                </ion-buttons>\n';
                body = body + '                <ion-title>{{tituloxx}}</ion-title>\n';
                body = body + '        </ion-toolbar>\n';
                body = body + '</ion-header>\n';
                
                body = body + '<ion-content class="create-form-content">\n';
                body = body + '    <section class="user-details-fields fields-section">\n';
                body = body + '    <ion-list class="inputs-list" lines="full">\n';
                body = body +buscamodulo(op,'createcamposhtml')
                body = body + '     </ion-list>\n';
                body = body + '  </section>\n';
                 
                body = body + '</ion-content>\n';
                
                
                body = body + '<ion-footer>\n';
                body = body + '  <ion-row class="form-actions-wrapper">\n';
                body = body + '    <ion-col>\n';
                body = body + '      <ion-button (click)="submitForm()" color="medium" expand="block" fill="outline" type="submit" [disabled]="!Form.valid">CREAR</ion-button>\n';
                    
                body = body + '      </ion-col>\n';
                body = body + '  </ion-row>\n';
                body = body + '</ion-footer>\n';
                body = body + '</form>   \n';


                body=body + "\n\n\n"

                body = body + ' modulo-create.page.js  ***************************************************\n';
               
                body=body + "import { Component, OnInit , ViewChild} from '@angular/core';\n"
                body=body + "import { ModalController , NavParams} from '@ionic/angular';\n"
                body=body + "import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';\n"
                body=body + "import { AuthenticationService } from '../../../services/Authentication.service';\n"
                body=body + "import { TranslateService } from '@ngx-translate/core';\n"
                body=body + "@Component({\n"
                body=body + "  selector: 'app-"+op+"-create',\n"
                body=body + "  templateUrl: './"+op+"-create.page.html',\n"
                body=body + "  styleUrls: ['./"+op+"-create.page.scss'],\n"
                body=body + "})\n"
                body=body + "export class "+op2+"CreatePage implements OnInit {\n"
                
                body=body + "  Form: FormGroup;\n"
                body=body + "  @ViewChild('createForm', { static: false }) createForm: FormGroupDirective;\n"
                body=body + "  variables: any = [];\n"
                body=body + "  userinfo: any = [];\n"
                body=body + "  tituloxx = '';\n"
                body=body + "  vgrupo: any = [];\n"
                body=body + "  _ID: any;\n"
                body=body + "  lpermiso: any;\n"
                
                
                body=body + "  constructor(\n"
                body=body + "    private modalController: ModalController,\n"
                body=body + "    public translateService: TranslateService    , private authenticationService: AuthenticationService,\n"
                body=body + "    private navParams: NavParams\n"
                body=body + "  ) { }\n"
                
                body=body + "  dismissModal() {     this.modalController.dismiss('close');      }\n"
                body=body + "  ionViewDidEnter(): void {               }\n"
                body=body + "  ngOnInit(): void {\n"
                body=body + "    this.variables = this.navParams.get('variables');\n"
                body=body + "    this.userinfo = this.navParams.get('userinfo');\n"
                body=body + "    this.tituloxx = this.variables.nombre;\n"
                body=body + "    this.Form = new FormGroup({\n"
                body = body +buscamodulo(op,'createcamposjsv')
                
              
                body=body + "    });\n"
                
                
                body=body + "    if (this.navParams.get('record') == null) {\n"
                body = body +buscamodulo(op,'createcamposjsv21')
                body=body + "       this.translateService.get('NUEVOM').subscribe((value) => {   this.tituloxx = value +' '+ this.variables.nombre;this.lpermiso = value; });\n"
              
                body=body + "       this.authenticationService.getReg('todos/orden/' + this.userinfo[0].idempresa, '"+op+"s', 0).then((data) => {\n"
                body=body + "        if (data) {\n"
                body=body + "         const aa: any = data;\n"
                body=body + "          this.Form.controls['index'].setValue(Number(aa.orden) + 10);\n"
                body=body + "        }\n"
                body=body + "  }, (err) => {\n"
                body=body + "    this.authenticationService.presentAlert(err.error , 'Precaución' , '');\n"
                body=body + "  });\n"
                body=body + "    } else {\n"
                body=body + "       this.translateService.get('ACTUALIZAM').subscribe((value) => {this.tituloxx = value + ' '+ this.variables.nombre; this.lpermiso = value; });\n"

                
                body=body + "       this._ID 				=	this.navParams.data.record._id;\n"
                body = body +buscamodulo(op,'createcamposjsv2')
  
                body=body + "    }\n"
                body=body + "  }\n"
                
                body=body + "  //onSgrupoChange(selectedValue: any) {    this.sgrupo = selectedValue.detail.value ;(ionChange)='onSgrupoChange($event)'   }\n"
                
                body=body + "  submitForm() {\n"
                
                body=body + "    const   options: any	     = {\n"

         


              //  body=body + "       idempresa: this.userinfo[0].idempresa,\n"
                body = body +buscamodulo(op,'createcamposjsv3')
                body=body + "       bitacora: { idempresa : this.userinfo[0].idempresa , idafiliado: '' ,\n"
                body=body + "       email: this.userinfo[0].username , permiso : this.lpermiso, accion: this.tituloxx}\n"
                body=body + "   };\n"
                
                body=body + "   if (this.navParams.get('record') == null) {\n"
                body=body + "        if (options) {\n"
                body=body + "          this.authenticationService.createReg('', options, '"+op+"s').then((result) => {\n"
                body=body + "            if (!this.Form.valid) { return; }\n"
                body=body + "            this.modalController.dismiss('ok');\n"
                body=body + "        }, (err) => {\n"
                body=body + "          this.authenticationService.presentAlert(err.error , 'Precaución' , '');\n"
                body=body + "        });\n"
                body=body + "        }\n"
                body=body + "   } else {\n"
                body=body + "    if (options) {\n"
                body=body + "      this.authenticationService.createReg(this._ID, options, '"+op+"s').then((result) => {\n"
                body=body + "         if (!this.Form.valid) { return; }\n"
                body=body + "         this.modalController.dismiss('ok');\n"
                body=body + "     }, (err) => {\n"
                body=body + "      this.authenticationService.presentAlert(err.error , 'Precaución' , '');\n"
                body=body + "     });\n"
                body=body + "  }}\n"

                body=body + "  }\n"
                
                
                
                body=body + "}\n"
                

      
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
                        var tfecha='';
                        var thora='';
                        

                        cursodiploma.find({'correo':req.params.id2},function(err, todosa00) {
console.log(todosa00)
                        cursoeve.find({'idtipoevento.codigo':'3'},function(err, todos00) {
                        Evento.find({_id :{
                                "$in" : [
                                    "5e7a6d15187210001ea6e989","5e7a6d9d187210001ea6e98f","5e7a6e16187210001ea6e991"
                                    ,"5e7a7a64187210001ea6e99d","5e7bcb0e737144004a13630f","5e7a79fc187210001ea6e99b","5e7b9e46cf97ea0029d5aa8c"
                                ]
                            }},function(err, todos0) {
                    
                        Participa2.find({'idtipoevento.id':'3',correo:req.params.id2},function(err, todos) {
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
                                Participa.find({correo:req.params.id2,"idevento" :{
                                        "$in" : [
                                            "5e7a6d15187210001ea6e989","5e7a6d9d187210001ea6e98f","5e7a6e16187210001ea6e991"
                                            ,"5e7a7a64187210001ea6e99d","5e7bcb0e737144004a13630f","5e7a79fc187210001ea6e99b","5e7b9e46cf97ea0029d5aa8c"
                                        ]
                                    }},function(err, todos2) {
                                      if(todos2.length)
                                      {

                                        for (var i = 0; i < todos2.length; i++) {
                                              
                                                for (var ii = 0; ii < todos0.length; ii++) {
                                                        if(todos2[i].idevento==todos0[ii]._id)
                                                        {
                                                                teve=todos0[ii].nombre;
                                                                tfecha=todos0[ii].fecha;
                                                                thora=todos0[ii].costo;
                                                                
                                                                break;
                                                        }
                                                }

                                                for (var ia = 0; ia < todosa00.length; ia++) {
                                                        if(todosa00[ia].curso==teve)
                                                        {
                                                                myData.push({idcurso:todos2[i]._id ,nombre:todosa00[ia].nombreestudiante,curso:teve,tipo:2,fecha:tfecha,hora:thora});

                                                              
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