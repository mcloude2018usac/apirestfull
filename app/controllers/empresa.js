var User = require('../models/user');
var Empresa = require('../models/empresa');
var generator = require('generate-password');
var Bitacora = require('../models/bitacora');
var Formcat = require('../models/formcat');

var mailt = require('../controllers/mailprueba');

var Tiposuscriptor = require('../models/tipo_suscriptor');
var Perfil = require('../models/perfil');
var Rol = require('../models/rol');
var Catalogo = require('../models/catalogo');

var Permiso = require('../models/permiso');
var Permison2 = require('../models/permison2');
var Moduloxx = require('../models/moduloxx');
var User = require('../models/user');


exports.getEmpresa = function(req, res, next){
    if(req.params.id3)
    {   
            if(req.params.id2=='todos')
            { 
                Empresa.find({_id:req.params.id3}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                    console.log(todos)
                     res.json(todos);
                 });
            }
            else
            {
                Empresa.find({_id:req.params.id3,estado:req.params.id2}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
            }
    }
    else
    {
    if(req.params.id2)
    { 
        if(req.params.id2=='todos')
        {
            Empresa.find({_id:req.params.id},function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
                
            });
        }
       
       

    
       
    }
    else
    { Empresa.find({idempresa0:req.params.id},function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }}
}
exports.deleteEmpresa = function(req, res, next){


    Bitacora.create({idempresa:req.params.idempresa,idafiliado:'',email: req.params.userID ,permiso:'Elimina',accion:'Elimina empresa'});
 

    Empresa.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {

      
        Tiposuscriptor.find({ "idempresa" : req.params.recordID }).remove().exec();
        Catalogo.find({ "idempresa" : req.params.recordID }).remove().exec();
        Moduloxx.find({ "idempresa" : req.params.recordID }).remove().exec();
         rol.find({ "idempresa" : req.params.recordID }).remove().exec();
         Permiso.find({ "idempresa" : req.params.recordID }).remove().exec();
         Permison2.find({ "idempresa" : req.params.recordID }).remove().exec();
         User.find({ "idempresa" : req.params.recordID }).remove().exec();

        res.json(todo);
    });
}


exports.creaEmpresa2s = function(req, res, next){
   
 
 //   Bitacora.create(req.body.bitacora);

if(req.params.recordID!=='crea')
{ 
    Empresa.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) { 
         
            res.send(err);  }
        else
        {   
            todo.usuarioup=req.body.bitacora.email;
            todo.inicio       	=	req.body.inicio        	||	todo.inicio;  
            todo.pagina0       	=	req.body.pagina0        	||	todo.pagina0;  
            todo.siregister	=	req.body.siregister        ;  
            todo.pinicio       	=	req.body.pinicio        	||	todo.pinicio;  
            todo.nombre       	=	req.body.nombre        	||	todo.nombre;   
            todo.nombrecorto       	=	req.body.nombrecorto        	||	todo.nombrecorto;   
            todo.direccion       	=	req.body.direccion        	||	todo.direccion;   
            todo.email       	=	req.body.email        	||	todo.email;   
            todo.telefonos       	=	req.body.telefonos        	||	todo.telefonos;   
            todo.horario       	=	req.body.horario        	||	todo.horario;  
            todo.pmodulo       	=	req.body.pmodulo        	||	todo.pmodulo;   
             todo.moneda     	= req.body.moneda    	;

             todo.simarca	=	req.body.simarca        ;  
             todo.siexporta	=	req.body.siexporta        ;  
             todo.sicorrelativo2	=	req.body.sicorrelativo2        ;  

             todo.tipocorreo	= req.body.tipocorreo    	;
             todo.segurocorreo= req.body.segurocorreo    	;
             todo.tlscorreo= req.body.tlscorreo    	;
             todo.origencorreo= req.body.origencorreo    	;
             todo.clavecorreo= req.body.clavecorreo    	;
             todo.puertocorreo= req.body.puertocorreo    	;
             todo.tipofirma= req.body.tipofirma    	;
             todo.siperfil= req.body.siperfil	;

             todo.siimagenes= req.body.siimagenes	;
             todo.sicorrelativo= req.body.sicorrelativo	;
             todo.subtitulo= req.body.subtitulo	;
             todo.sicodigointerno= req.body.sicodigointerno	;


            todo.nit       	=	req.body.nit        	||	todo.nit;   
            todo.razon       	=	req.body.razon        	||	todo.razon;   
            todo.titulo0       	=	req.body.titulo0        	||	todo.titulo0;   
            todo.foto0       	=	req.body.foto0        	||	todo.foto0;   
            todo.foto1       	=	req.body.foto1        	||	todo.foto1;   
            todo.foto2       	=	req.body.foto2        	||	todo.foto2;   
            todo.logo1       	=	req.body.logo1        	||	todo.logo1;   
            todo.logo2       	=	req.body.logo2        	||	todo.logo2;   
            todo.nombredominio       	=	req.body.nombredominio        	||	todo.nombredominio;   
            todo.color1       	=	req.body.color1        	||	todo.color1;   
            todo.color2       	=	req.body.color2        	||	todo.color2;  
            todo.color3       	=	req.body.color3        	||	todo.color3;  
            todo.color4       	=	req.body.color4        	||	todo.color4;   
            todo.redsocial1       	=	req.body.redsocial1        	||	todo.redsocial1;   
            todo.redsocial2       	=	req.body.redsocial2        	||	todo.redsocial2;   
            todo.redsocial3       	=	req.body.redsocial3        	||	todo.redsocial3;   
            todo.estado       	=	req.body.estado        	||	todo.estado; 

            
            
           
            todo.save(function (err, todo){
                if (err)     {  res.status(500).send(err.message)   }
                res.json(todo);
            });
        }
    });

}
else{
   
    Empresa.create({ 
   //    _id:'5f503bededa4710798a79b84',
         idempresa0     	: req.body.idempresa0    	,
         nombre     	: req.body.nombre    	,
         nombrecorto     	: req.body.nombrecorto    	,
         direccion     	: req.body.direccion    	,
         email     	: req.body.email    	,
         telefonos     	: req.body.telefonos    	,
         horario     	: req.body.horario    	,
         moneda     	: req.body.moneda    	,
         sicodigointerno  :  req.body.sicodigointerno,
         inicio     	: req.body.inicio ,
         pagina0     	: req.body.pagina0 ,
         siregister: req.body.inicio ,
         pinicio     	: req.body.pinicio   || 'app/billetera-list'  	,
         nit     	: req.body.nit    	,
         razon     	: req.body.razon    	,
         pmodulo:   req.body.pmodulo,
         titulo0     	: req.body.titulo0    	,
         foto0     	: req.body.foto0    	,
         foto1     	: req.body.foto1    	,
         foto2     	: req.body.foto2    	,
         logo1     	: req.body.logo1    	,
         logo2     	: req.body.logo2    	,
         nombredominio     	: req.body.nombredominio    	,
         color1     	: req.body.color1    	,
         color2     	: req.body.color2    	,
         color3     	: req.body.color3    	,
         color4     	: req.body.color4    	,
         redsocial1     	: req.body.redsocial1    	,
         redsocial2     	: req.body.redsocial2    	,
         redsocial3     	: req.body.redsocial3    	,
         tipocorreo	: req.body.tipocorreo    	,
         segurocorreo: req.body.segurocorreo    	,
         tlscorreo: req.body.tlscorreo    	,
         origencorreo: req.body.origencorreo    	,
         clavecorreo: req.body.clavecorreo    	,
         puertocorreo: req.body.puertocorreo    	,
         tipofirma: req.body.tipofirma    	,
         siperfil	: req.body.siperfil	,

         simarca	: req.body.simarca	,
         sicorrelativo2	: req.body.sicorrelativo2	,
         siexporta	: req.body.siexporta	,


         siimagenes	: req.body.siimagenes	,
         sicorrelativo	: req.body.sicorrelativo	,
         subtitulo	: req.body.subtitulo	,

         estado     	: req.body.estado    	,


        usuarionew:req.body.bitacora.email,
     
        date 			: Date.now() }
        , function(err, todo) {
        if (err){    res.status(500).send(err.message)    }
    
  
       var idempresa=todo._id
       var idtiposus=''

     
       Tiposuscriptor.create({    "idempresa" : idempresa,             "nombre" : "Administrador",             "cobroparqueos" : "1",             "usuarionew" : req.body.email,             "createdAt" : "2019-10-12T23:29:56.961+0000",      
       "updatedAt" :"2019-10-12T23:29:56.961+0000",             "__v" : 0       } , function(err, xtiposus2) {
         if (err){    res.status(500).send(err.message)    }
       Tiposuscriptor.create({    "idempresa" : idempresa,             "nombre" : "Usuario",             "cobroparqueos" : "1",             "usuarionew" : req.body.email,             "createdAt" : "2019-10-12T23:29:56.961+0000",      
        "updatedAt" :"2019-10-12T23:29:56.961+0000",             "__v" : 0       } , function(err, xtiposus) {
        if (err){    res.status(500).send(err.message)    }
        idtiposus=xtiposus._id
        
        
    Formcat.create({  "idunidad" : "1000-unidad-plantilla",                "nombre" : "SEGURIDAD",                "usuarionew" : "lonecesito@gmail.com",                "createdAt" : "2019-10-12T23:29:56.961+0000",                "updatedAt" : "2019-10-12T23:29:56.961+0000",                "__v" : 0,                "idunidad2" : "",  "idempresa" : idempresa                    }, function(err, xcatuni1) {
        if (err){    res.status(500).send(err.message)    }
        

    Catalogo.create({   "tipo" : "UNIDADES",    "nombre" : "ADMINISTRADOR",   "fecha" : ("2018-09-27T18:29:11.918+0000"),  "estado" : "Activo", "createdAt" : ("2018-09-27T18:29:53.037+0000"),   "updatedAt" : ("2018-09-27T18:29:53.037+0000"),   "__v" : (0),  "idempresa" : idempresa                    }, function(err, xcatuni2) {
        if (err){    res.status(500).send(err.message)    }
        iduniadmin=xcatuni2._id
        

        Rol.create({      "nombre" : "user",    "estado" : "Activo",    "createdAt" : "2019-10-12T23:29:56.961+0000",    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0,    "unidad" : "SEGURIDAD",    "usuarionew" :  req.body.email,    "idempresa" : idempresa}, function(err, xrol1) { if (err){    res.status(500).send(err.message)    }
        Rol.create({       "nombre" : "Administrador",    "estado" : "Activo",    "createdAt" : "2019-10-12T23:29:56.961+0000",    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0,    "unidad" : "SEGURIDAD",    "usuarionew" :  req.body.email,    "idempresa" : idempresa}, function(err, xrol2) { if (err){    res.status(500).send(err.message)    }
        Rol.create({       "nombre" : "Asociado operador",    "estado" : "Activo",    "createdAt" : "2019-10-12T23:29:56.961+0000",    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0,    "unidad" : "SEGURIDAD",    "usuarionew" :  req.body.email,    "idempresa" : idempresa}, function(err, xrol3) { if (err){    res.status(500).send(err.message)    }
                        
            Moduloxx.create({      "idempresa" : idempresa,    "grupo" : "MENU",    "nombre" : "Procesos y formularios",    "titulo" : "Procesos y formularios",    "componente" : "Procesos y formularios",    "tabcomponente" : "Procesos y formularios",    "index" : 40,    "icono" : "apps",    "nivel" : ".",    "estado" : "Activo",    "createdAt" : "2019-10-12T23:29:56.961+0000",    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0}, function(err, xmod1) { if (err){    res.status(500).send(err.message)    }
            Moduloxx.create({      "componente" : "Seguridad del sistema",    "estado" : "Activo",    "grupo" : "MENU",    "icono" : "key",    "idempresa" : idempresa,    "index" : 190,    "nivel" : ".",    "nombre" : "Seguridad",    "tabcomponente" : "Seguridad del sistema",    "titulo" : "Seguridad del sistema",    "usuarionew" :  req.body.email,    "createdAt" : "2019-10-12T23:29:56.961+0000",    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0}, function(err, xmod2) { if (err){    res.status(500).send(err.message)    }
            Moduloxx.create({      "componente" : "AsociadoListPage",    "estado" : "Activo",    "grupo" : "MENU",    "icono" : "man-outline",    "idempresa" : idempresa,    "index" : 250,    "nivel" : ".",    "nombre" : "Asociado",    "tabcomponente" : "CONTROL DE ACCESO",    "titulo" : "CONTROL DE ACCESO",    "usuarionew" :  req.body.email,    "createdAt" : "2019-10-12T23:29:56.961+0000",    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0}, function(err, xmod3) { if (err){    res.status(500).send(err.message)    }
            Moduloxx.create({        "idempresa" : idempresa,    "grupo" : "PAGINA",    "nombre" : "Empresa",    "titulo" : "EmpresaListPage",    "componente" : "EmpresaListPage",    "tabcomponente" : "EmpresaListPage",    "index" : 40,    "icono" : "home-outline",    "nivel" : ".",    "estado" : "Activo",    "createdAt" : "2019-10-12T23:29:56.961+0000",    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0}, function(err, xmod4) { if (err){    res.status(500).send(err.message)    }
            Moduloxx.create({      "componente" : "UserListPage",    "estado" : "Activo",    "grupo" : "PAGINA",    "icono" : "person-outline",    "idempresa" : idempresa,    "index" : 60,    "nivel" : "Usuario",    "nombre" : "Usuarios",    "tabcomponente" : "UserListPage",    "titulo" : "UserListPage",    "usuarionew" :  req.body.email,    "createdAt" : "2019-10-12T23:29:56.961+0000",    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0}, function(err, xmod5) { if (err){    res.status(500).send(err.message)    }
            Moduloxx.create({        "grupo" : "PAGINA",    "nombre" : "Modulos",    "titulo" : "ModuloListPage",    "componente" : "/ModuloListPage",    "tabcomponente" : "ModuloListPage",    "index" : 40,    "icono" : "albums-outline",    "nivel" : "Superusuario",    "estado" : "Activo",    "createdAt" : "2019-10-12T23:29:56.961+0000",    "updatedAt" :"2019-10-12T23:29:56.961+0000",    "__v" : 0,    "idempresa" : idempresa,    "usuarioup" :  req.body.email}, function(err, xmod6) { if (err){    res.status(500).send(err.message)    }
            Moduloxx.create({      "componente" : "/RolListPage",    "createdAt" : "2018-07-23T20:16:48.388Z",    "estado" : "Activo",    "grupo" : "PAGINA",    "icono" : "people-outline",    "idempresa" : idempresa,    "index" : "30",    "nivel" : "Usuario",    "nombre" : "Rol",    "tabcomponente" : "PerfilListPage",    "titulo" : "RolListPage",    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "usuarionew" : null}, function(err, xmod7) { if (err){    res.status(500).send(err.message)    }
            Moduloxx.create({      "idempresa" : idempresa,    "grupo" : "PAGINA",    "nombre" : "Mis procesos y formularios",    "titulo" : "categoriaformularioListPage",    "componente" : "categoriaformularioListPage",    "tabcomponente" : "categoriaformularioListPage",    "index" : 40,    "icono" : "receipt-outline",    "nivel" : ".",    "estado" : "Activo",    "createdAt" : "2019-10-12T23:29:56.961+0000",    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0}, function(err, xmod8) { if (err){    res.status(500).send(err.message)    }
            Moduloxx.create({       "idempresa" : idempresa,    "grupo" : "PAGINA",    "nombre" : "Crear permisos a usuario",    "titulo" : "formulariousrListPage",    "componente" : "formulariousrListPage",    "tabcomponente" : "formulariousrListPage",    "index" : 40,    "icono" : "reader-outline",    "nivel" : ".",    "estado" : "Activo",    "createdAt" : "2019-10-12T23:29:56.961+0000",    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0}, function(err, xmod9) { if (err){    res.status(500).send(err.message)    }
            Moduloxx.create({       "idempresa" : idempresa,    "grupo" : "PAGINA",    "nombre" : "Creación de procesos y formularios",    "titulo" : "Forms0ListPage",    "componente" : "Forms0ListPage",    "tabcomponente" : "Forms0ListPage",    "index" : 40,    "icono" : "apps",    "nivel" : ".",    "estado" : "Activo",    "createdAt" : "2019-10-12T23:29:56.961+0000",    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0}, function(err, xmod10) { if (err){    res.status(500).send(err.message)    }
                        

                Permiso.create({       "idempresa" : idempresa,    "idrol" : xrol2._id,    "nombre" : xmod1._id,    "ingreso" : true,    "consulta" : true,    "eliminacion" : true,    "creacion" : true,    "actualizacion" : true,    "filtro" : true,    "reporte" : true,    "orden" : 10,    "estado" : "Activo",    "potros1" : "",    "votros1" : "",    "usuarionew" : "lonecesito@gmail.com",    "createdAt" : "2019-10-12T23:29:56.961+0000",    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0}, function(err, xper1) { if (err){    res.status(500).send(err.message)    }
                Permiso.create({        "idrol" : xrol2._id,    "nombre" : xmod2._id,    "ingreso" : true,    "consulta" : true,    "eliminacion" : true,    "creacion" : true,    "actualizacion" : true,    "createdAt" : "2019-10-12T23:29:56.961+0000",    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0,    "usuarionew" :  req.body.email,    "orden" : 30,    "idempresa" : idempresa,    "filtro" : true,    "reporte" : true,    "estado" : "Activo",    "usuarioup" : "lonecesito@gmail.com"}, function(err, xper2) { if (err){    res.status(500).send(err.message)    }
                Permiso.create({      "idrol" : xrol2._id,    "nombre" : xmod3._id,    "ingreso" : true,    "consulta" : true,    "eliminacion" : true,    "creacion" : true,    "actualizacion" : true,    "createdAt" : "2019-10-12T23:29:56.961+0000",    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0,    "usuarionew" :  req.body.email,    "orden" : 40,    "idempresa" : idempresa,    "filtro" : true,    "reporte" : true,    "estado" : "Activo",    "usuarioup" : "lonecesito@gmail.com"}, function(err, xper3) { if (err){    res.status(500).send(err.message)    }
        
                Permiso.create({        "idrol" : xrol3._id,    "nombre" : xmod3._id,    "ingreso" : true,    "consulta" : true,    "eliminacion" : true,    "creacion" : true,    "actualizacion" : true,    "createdAt" : "2019-10-12T23:29:56.961+0000",    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0,    "usuarionew" :  req.body.email,    "orden" : 30,    "idempresa" : idempresa,    "filtro" : true,    "reporte" : true,    "estado" : "Activo",    "usuarioup" : "lonecesito@gmail.com"}, function(err, xper21) { if (err){    res.status(500).send(err.message)    }
             
                    Permison2.create({        "idempresa" : idempresa,    "idpermiso" : xper3._id,    "idrol" : xrol2._id,    "nombre" : xmod4._id,    "ingreso" : true,    "consulta" : true,    "eliminacion" : true,    "filtro" : true,    "reporte" : true,    "creacion" : true,    "potros1" : "",    "votros1" : "",    "actualizacion" : true,    "orden" : 20,    "estado" : "Activo",    "usuarionew" : "lonecesito@gmail.com",    "createdAt" : "2019-10-12T23:29:56.961+0000",    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0});
                    Permison2.create({        "idpermiso" : xper2._id,    "idrol" : xrol2._id,    "nombre" : xmod5._id,    "filtro" : true,    "reporte" : true,    "ingreso" : true,    "consulta" : true,    "eliminacion" : true,    "creacion" : true,    "actualizacion" : true,    "createdAt" :"2019-10-12T23:29:56.961+0000",    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "usuarioup" : "lonecesito@gmail.com",    "orden" : 10,   "idempresa" : idempresa,    "__v" : 0,    "estado" : "Activo"});
                    Permison2.create({       "idpermiso" : xper2._id,    "idrol" : xrol2._id,    "nombre" : xmod6._id,    "ingreso" : true,    "consulta" : true,    "eliminacion" : true,    "creacion" : true,    "actualizacion" : true,    "createdAt" :"2019-10-12T23:29:56.961+0000",    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "usuarioup" : "lonecesito@gmail.com",    "orden" : 30,    "idempresa" : idempresa,    "__v" : 0,    "filtro" : true,    "reporte" : true,    "estado" : "Activo"});
                    Permison2.create({       "idpermiso" : xper2._id,    "idrol" : xrol2._id,    "nombre" : xmod7._id,    "ingreso" : true,    "consulta" : true,    "eliminacion" : true,    "creacion" : true,    "actualizacion" : true,    "createdAt" :"2019-10-12T23:29:56.961+0000",    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "usuarioup" : "lonecesito@gmail.com",    "orden" : 20,    "idempresa" : idempresa,    "__v" : 0,    "filtro" : true,    "reporte" : true,    "estado" : "Activo"});
                    Permison2.create({        "idempresa" : idempresa,    "idpermiso" : xper1._id,    "idrol" : xrol2._id,    "nombre" : xmod10._id,    "ingreso" : true,    "consulta" : true,    "eliminacion" : true,    "filtro" : true,    "reporte" : true,    "creacion" : true,    "potros1" : "",    "votros1" : "",    "actualizacion" : true,    "orden" : 10,    "estado" : "Activo",    "usuarionew" : "lonecesito@gmail.com",    "createdAt" : "2019-10-12T23:29:56.961+0000",    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0});
                    Permison2.create({       "idempresa" : idempresa,    "idpermiso" : xper1._id,    "idrol" : xrol2._id,    "nombre" : xmod9._id,    "ingreso" : true,    "consulta" : true,    "eliminacion" : true,    "filtro" : true,    "reporte" : true,    "creacion" : true,    "potros1" : "",    "votros1" : "",    "actualizacion" : true,    "orden" : 20,    "estado" : "Activo",    "usuarionew" : "lonecesito@gmail.com",    "createdAt" : "2019-10-12T23:29:56.961+0000",    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0});
                    Permison2.create({        "idempresa" : idempresa,    "idpermiso" : xper1._id,    "idrol" : xrol2._id,    "nombre" : xmod8._id,    "ingreso" : true,    "consulta" : true,    "eliminacion" : true,    "filtro" : true,    "reporte" : true,    "creacion" : true,    "potros1" : "",    "votros1" : "",    "actualizacion" : true,    "orden" : 30,    "estado" : "Activo",    "usuarionew" : "lonecesito@gmail.com",    "createdAt" : "2019-10-12T23:29:56.961+0000",    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0});
                   
                    Permison2.create({        "idempresa" : idempresa,    "idpermiso" : xper21._id,    "idrol" : xrol3._id,    "nombre" : xmod3._id,    "ingreso" : true,    "consulta" : true,    "eliminacion" : true,    "filtro" : true,    "reporte" : true,    "creacion" : true,    "potros1" : "",    "votros1" : "",    "actualizacion" : true,    "orden" : 20,    "estado" : "Activo",    "usuarionew" : "lonecesito@gmail.com",    "createdAt" : "2019-10-12T23:29:56.961+0000",    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0});
                    

                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-labelsizefondt-plantilla",    "nombre" : "10",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-09T21:44:36.719Z"),    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-labelsizefondt-plantilla",    "nombre" : "12",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-09T21:44:41.334Z"),    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-labelsizefondt-plantilla",    "nombre" : "14",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-09T21:44:46.246Z"),    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-labelsizefondt-plantilla",    "nombre" : "16",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-09T21:44:51.420Z"),    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-labelsizefondt-plantilla",    "nombre" : "18",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-09T21:45:01.473Z"),    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-labelsizefondt-plantilla",    "nombre" : "20",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-09T21:45:06.579Z"),    "updatedAt" :"2019-10-12T23:29:56.961+0000",    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-lenguaje-plantilla",    "nombre" : "Español",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-02T23:22:49.862Z"),    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0,   "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-lenguaje-plantilla",    "nombre" : "Ingles",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-02T23:22:57.161Z"),    "updatedAt" :"2019-10-12T23:29:56.961+0000",    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-moneda-plantilla",    "nombre" : "Q.",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-25T16:04:36.196Z"),    "updatedAt" : "2019-10-12T23:29:56.961+0000"  ,  "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-moneda-plantilla",    "nombre" : "$.",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-25T16:04:47.283Z"),    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-position-plantilla",    "nombre" : "fixed",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-09T21:44:02.451Z"),    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-position-plantilla",    "nombre" : "floating",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-09T21:44:14.538Z"),    "updatedAt" : "2019-10-12T23:29:56.961+0000",    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-position-plantilla",    "nombre" : "stacked",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-09T21:44:23.760Z"),    "updatedAt" : ("2020-08-09T21:44:23.760Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-position-plantilla",    "nombre" : "na",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-09T21:44:02.451Z"),    "updatedAt" : ("2020-08-09T21:44:02.451Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-sexo-plantilla",    "nombre" : "Masculino",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-02T23:23:13.361Z"),    "updatedAt" : ("2020-08-02T23:23:13.361Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-sexo-plantilla",    "nombre" : "Femenino",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-02T23:23:24.159Z"),    "updatedAt" : ("2020-08-02T23:23:24.159Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-type-plantilla",    "nombre" : "Rango",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-09T14:29:41.749Z"),    "updatedAt" : ("2020-08-09T14:29:41.749Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-type-plantilla",    "nombre" : "Numerico",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-09T14:29:50.037Z"),    "updatedAt" : ("2020-08-09T14:29:50.037Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-type-plantilla",    "nombre" : "Fecha",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-09T14:29:58.616Z"),    "updatedAt" : ("2020-08-09T14:29:58.616Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-type-plantilla",    "nombre" : "Check",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-09T14:30:08.750Z"),    "updatedAt" : ("2020-08-09T14:30:08.750Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-type-plantilla",    "nombre" : "Fecha y Hora",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-09T14:30:29.047Z"),    "updatedAt" : ("2020-08-09T14:30:29.047Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-type-plantilla",    "nombre" : "TextArea",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-09T14:30:39.619Z"),    "updatedAt" : ("2020-08-09T14:30:39.619Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-type-plantilla",    "nombre" : "Lista de valores",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-09T14:30:51.249Z"),    "updatedAt" : ("2020-08-09T14:30:51.249Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-type-plantilla",    "nombre" : "Alfanumerico",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-09T14:31:03.384Z"),    "updatedAt" : ("2020-08-09T14:31:03.384Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-type-plantilla",    "nombre" : "Imagen",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-09T14:31:13.295Z"),    "updatedAt" : ("2020-08-09T14:31:13.295Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-type-plantilla",    "nombre" : "Etiqueta",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-09T14:31:19.253Z"),    "updatedAt" : ("2020-08-09T14:31:19.253Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-type-plantilla",    "nombre" : "Hora",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-09T14:31:28.048Z"),    "updatedAt" : ("2020-08-09T14:31:28.048Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-type-plantilla",    "nombre" : "Formulario detalle",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-09T14:31:43.397Z"),    "updatedAt" : ("2020-08-09T14:31:43.397Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-type-plantilla",    "nombre" : "Documento detalle",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-09T14:31:43.397Z"),    "updatedAt" : ("2020-08-09T14:31:43.397Z"),    "__v" : 0,    "idunidad2" : ""});

                    Formcat.create({                    
                        "idempresa" : idempresa,
                        "idunidad" : "1000-type-plantilla",
                        "idunidad2" : "",
                        "nombre" : "Moneda",
                        "usuarionew" :  req.body.email,
                        "createdAt" : ("2020-08-09T14:31:43.397Z"),    "updatedAt" : ("2020-08-09T14:31:43.397Z"),    "__v" : 0,    "idunidad2" : ""});
                    
                    /* 14 */
                    Formcat.create({    
                       
                        "idempresa" : idempresa,
                        "idunidad" : "1000-type-plantilla",
                        "idunidad2" : "",
                        "nombre" : "Check List",
                        "usuarionew" :  req.body.email,
                        "createdAt" : ("2020-08-09T14:31:43.397Z"),    "updatedAt" : ("2020-08-09T14:31:43.397Z"),    "__v" : 0,    "idunidad2" : ""});
                    /* 15 */
                    Formcat.create({    
                      
                        "idempresa" : idempresa,
                        "idunidad" : "1000-type-plantilla",
                        "idunidad2" : "",
                        "nombre" : "Check List Detalle",
                        "usuarionew" :  req.body.email,
                        "createdAt" : ("2020-08-09T14:31:43.397Z"),    "updatedAt" : ("2020-08-09T14:31:43.397Z"),    "__v" : 0,    "idunidad2" : ""});



                        Formcat.create({      "idempresa" : idempresa,  
                            "idunidad" : "1000-clase-plantilla",
                            "idunidad2" : "",
                            "nombre" : "INICIO",
                            "usuarionew" :  req.body.email,
                            "createdAt" : ("2020-08-09T14:31:43.397Z"),    "updatedAt" : ("2020-08-09T14:31:43.397Z"),    "__v" : 0,    "idunidad2" : ""});
                        /* 2 */
                        Formcat.create({      "idempresa" : idempresa,  
                            "idunidad" : "1000-clase-plantilla",
                            "idunidad2" : "",
                            "nombre" : "NORMAL",
                            "usuarionew" :  req.body.email,
                            "createdAt" : ("2020-08-09T14:31:43.397Z"),    "updatedAt" : ("2020-08-09T14:31:43.397Z"),    "__v" : 0,    "idunidad2" : ""});
                        
                        /* 3 */
                        Formcat.create({      "idempresa" : idempresa,  
                            "idunidad" : "1000-clase-plantilla",
                            "idunidad2" : "",
                            "nombre" : "FINAL",
                            "usuarionew" :  req.body.email,
                            "createdAt" : ("2020-08-09T14:31:43.397Z"),    "updatedAt" : ("2020-08-09T14:31:43.397Z"),    "__v" : 0,    "idunidad2" : ""});
                        
                        /* 4 */
                        Formcat.create({      "idempresa" : idempresa,  
                            "idunidad" : "1000-conector-plantilla",
                            "idunidad2" : "",
                            "nombre" : "BASE DE DATOS",
                            "usuarionew" :  req.body.email,
                            "createdAt" : ("2020-08-09T14:31:43.397Z"),    "updatedAt" : ("2020-08-09T14:31:43.397Z"),    "__v" : 0,    "idunidad2" : ""});
                        
                        /* 5 */
                        Formcat.create({      "idempresa" : idempresa,  
                            "idunidad" : "1000-conector-plantilla",
                            "idunidad2" : "",
                            "nombre" : "DATOS",
                            "usuarionew" :  req.body.email,
                            "createdAt" : ("2020-08-09T14:31:43.397Z"),    "updatedAt" : ("2020-08-09T14:31:43.397Z"),    "__v" : 0,    "idunidad2" : ""});
                        
                        /* 6 */
                        Formcat.create({      "idempresa" : idempresa,  
                            "idunidad" : "1000-conector-plantilla",
                            "idunidad2" : "",
                            "nombre" : "INICIO",
                            "usuarionew" :  req.body.email,
                            "createdAt" : ("2020-08-09T14:31:43.397Z"),    "updatedAt" : ("2020-08-09T14:31:43.397Z"),    "__v" : 0,    "idunidad2" : ""});
                        
                        /* 7 */
                        Formcat.create({      "idempresa" : idempresa,  
                            "idunidad" : "1000-conector-plantilla",
                            "idunidad2" : "",
                            "nombre" : "FIN",
                            "usuarionew" :  req.body.email,
                            "createdAt" : ("2020-08-09T14:31:43.397Z"),    "updatedAt" : ("2020-08-09T14:31:43.397Z"),    "__v" : 0,    "idunidad2" : ""});
                        
                        /* 8 */
                        Formcat.create({      "idempresa" : idempresa,  
                            "idunidad" : "1000-conector-plantilla",
                            "idunidad2" : "",
                            "nombre" : "DISPLAY",
                            "usuarionew" :  req.body.email,
                            "createdAt" : ("2020-08-09T14:31:43.397Z"),    "updatedAt" : ("2020-08-09T14:31:43.397Z"),    "__v" : 0,    "idunidad2" : ""});
                        
                        /* 9 */
                        Formcat.create({      "idempresa" : idempresa,  
                            "idunidad" : "1000-conector-plantilla",
                            "idunidad2" : "",
                            "nombre" : "PROCESO",
                            "usuarionew" :  req.body.email,
                            "createdAt" : ("2020-08-09T14:31:43.397Z"),    "updatedAt" : ("2020-08-09T14:31:43.397Z"),    "__v" : 0,    "idunidad2" : ""});
                        
                        /* 10 */
                        Formcat.create({      "idempresa" : idempresa,  
                            "idunidad" : "1000-etapa-plantilla",
                            "idunidad2" : "",
                            "nombre" : "INGRESO",
                            "usuarionew" :  req.body.email,
                            "createdAt" : ("2020-08-09T14:31:43.397Z"),    "updatedAt" : ("2020-08-09T14:31:43.397Z"),    "__v" : 0,    "idunidad2" : ""});
                        
                        /* 11 */
                        Formcat.create({      "idempresa" : idempresa,  
                            "idunidad" : "1000-etapa-plantilla",
                            "idunidad2" : "",
                            "nombre" : "PROGRAMACIÓN",
                            "usuarionew" :  req.body.email,
                            "createdAt" : ("2020-08-09T14:31:43.397Z"),    "updatedAt" : ("2020-08-09T14:31:43.397Z"),    "__v" : 0,    "idunidad2" : ""});
                        
                        /* 12 */
                        Formcat.create({      "idempresa" : idempresa,  
                            "idunidad" : "1000-etapa-plantilla",
                            "idunidad2" : "",
                            "nombre" : "EJECUCIÓN",
                            "usuarionew" :  req.body.email,
                            "createdAt" : ("2020-08-09T14:31:43.397Z"),    "updatedAt" : ("2020-08-09T14:31:43.397Z"),    "__v" : 0,    "idunidad2" : ""});
                        
                        /* 13 */
                        Formcat.create({      "idempresa" : idempresa,  
                            "idunidad" : "1000-etapa-plantilla",
                            "idunidad2" : "",
                            "nombre" : "LIQUIDACIÓN",
                            "usuarionew" :  req.body.email,
                            "createdAt" : ("2020-08-09T14:31:43.397Z"),    "updatedAt" : ("2020-08-09T14:31:43.397Z"),    "__v" : 0,    "idunidad2" : ""});
                        
                        /* 14 */
                        Formcat.create({      "idempresa" : idempresa,  
                            "idunidad" : "1000-etapa-plantilla",
                            "idunidad2" : "",
                            "nombre" : "VERIFICACIÓN",
                            "usuarionew" :  req.body.email,
                            "createdAt" : ("2020-08-09T14:31:43.397Z"),    "updatedAt" : ("2020-08-09T14:31:43.397Z"),    "__v" : 0,    "idunidad2" : ""});

                        
                            Formcat.create({      "idempresa" : idempresa,
                                "idunidad" : "1000-subtipo-plantilla",
                                "idunidad2" : "ASIGNACIÓN",
                                "nombre" : "NO DESMENBRADOS",
                                "usuarionew" :  req.body.email,
                                "createdAt" : ("2020-08-09T14:31:43.397Z"),    "updatedAt" : ("2020-08-09T14:31:43.397Z"),    "__v" : 0,    "idunidad2" : ""});
                            /* 14 */
                            Formcat.create({      "idempresa" : idempresa,
                                "idunidad" : "1000-subtipo-plantilla",
                                "idunidad2" : "ASIGNACIÓN",
                                "nombre" : "DESMENBRADOS",
                                "usuarionew" :  req.body.email,
                                "createdAt" : ("2020-08-09T14:31:43.397Z"),    "updatedAt" : ("2020-08-09T14:31:43.397Z"),    "__v" : 0,    "idunidad2" : ""});
                            
                            
                            /* 15 */
                            Formcat.create({      "idempresa" : idempresa,
                                "idunidad" : "1000-subtipo-plantilla",
                                "idunidad2" : "ASIGNACIÓN",
                                "nombre" : "TODOS",
                                "usuarionew" :  req.body.email,
                                "createdAt" : ("2020-08-09T14:31:43.397Z"),    "updatedAt" : ("2020-08-09T14:31:43.397Z"),    "__v" : 0,    "idunidad2" : ""});
                            
                            /* 16 */
                            Formcat.create({      "idempresa" : idempresa,
                                "idunidad" : "1000-subtipo-plantilla",
                                "idunidad2" : "EJECUCIÓN",
                                "nombre" : "USUARIO",
                                "usuarionew" :  req.body.email,
                                "createdAt" : ("2020-08-09T14:31:43.397Z"),    "updatedAt" : ("2020-08-09T14:31:43.397Z"),    "__v" : 0,    "idunidad2" : ""});
                            
                            /* 17 */
                            Formcat.create({      "idempresa" : idempresa,
                                "idunidad" : "1000-subtipo-plantilla",
                                "idunidad2" : "EJECUCIÓN",
                                "nombre" : "GRUPO",
                                "usuarionew" :  req.body.email,
                                "createdAt" : ("2020-08-09T14:31:43.397Z"),    "updatedAt" : ("2020-08-09T14:31:43.397Z"),    "__v" : 0,    "idunidad2" : ""});
                            


                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-unidad-plantilla",    "nombre" : "INVENTARIO",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-31T16:25:58.610Z"),    "updatedAt" : ("2020-07-31T16:25:58.610Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-unidad-plantilla",    "nombre" : "DELIVERY",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-31T16:26:13.504Z"),    "updatedAt" : ("2020-07-31T16:26:13.504Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-vista-plantilla",    "nombre" : "Clasica con imagenes",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-25T16:40:17.494Z"),    "updatedAt" : ("2020-07-25T16:40:17.494Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-vista-plantilla",    "nombre" : "Lista con imagenes",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-25T16:40:26.907Z"),    "updatedAt" : ("2020-07-25T16:40:26.907Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1000-vista-plantilla",    "nombre" : "Lista sin imagenes",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-25T16:40:34.738Z"),    "updatedAt" : ("2020-07-25T16:40:34.738Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "1001-categoria-plantilla",    "nombre" : "CATALOGOS",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-09T03:36:50.466Z"),    "updatedAt" : ("2020-08-09T03:36:50.466Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : idempresa+"-1000-departamento-plantilla",    "idunidad2" : "",    "nombre" : "Guatemala",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-25T00:36:32.116Z"),    "updatedAt" : ("2020-08-25T00:36:32.116Z"),    "__v" : 0});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : idempresa+"-1000-municipio-plantilla",    "idunidad2" : "Guatemala",    "nombre" : "Guatemala",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-25T00:36:44.592Z"),    "updatedAt" : ("2020-08-25T00:36:44.592Z"),    "__v" : 0});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : idempresa+"-1000-municipio-plantilla",    "idunidad2" : "Guatemala",    "nombre" : "Peten",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-25T00:37:52.716Z"),    "updatedAt" : ("2020-08-25T00:37:52.716Z"),    "__v" : 0});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "5ea220a423687a50a0f3b4e1-1000-color-plantilla",    "nombre" : "COLOR",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-23T19:52:13.771Z"),    "updatedAt" : ("2020-07-23T19:52:13.771Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "5ea220a423687a50a0f3b4e1-1000-talla-plantilla",    "nombre" : "TALLA",   "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-22T18:12:40.679Z"),    "updatedAt" : ("2020-07-22T18:12:40.679Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "5ea220a423687a50a0f3b4e1-categoria-plantilla",    "nombre" : "CATEGORIA",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-11T16:10:33.873Z"),    "updatedAt" : ("2020-07-11T16:10:33.873Z"),   "__v" : 0,   "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "5ea220a423687a50a0f3b4e1-color-plantilla",    "nombre" : "NEGRO",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-22T18:12:50.643Z"),    "updatedAt" : ("2020-07-22T18:12:50.643Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "5ea220a423687a50a0f3b4e1-talla-plantilla",    "nombre" : "TALLA",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-22T23:06:43.407Z"),    "updatedAt" : ("2020-07-22T23:06:43.407Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "5ea220a423687a50a0f3b4e1-unidadmedida-plantilla",    "nombre" : "Lib.",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-11T16:11:38.803Z"),    "updatedAt" : ("2020-07-20T19:16:06.864Z"),    "__v" : 0,    "usuarioup" :  req.body.email,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "5ea220a423687a50a0f3b4e1-unidadmedida-plantilla",    "nombre" : "Uni.",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-23T23:56:38.697Z"),    "updatedAt" : ("2020-07-23T23:56:38.697Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "5ea220a423687a50a0f3b4e1-unidadmedida-plantilla",    "nombre" : "x",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-24T00:05:04.775Z"),    "updatedAt" : ("2020-07-24T00:05:04.775Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "5ea220a423687a50a0f3b4e1-unidadmedida-plantilla",    "nombre" : "Manojo",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-24T00:12:41.369Z"),    "updatedAt" : ("2020-07-24T00:12:41.369Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "5ea220a423687a50a0f3b4e1-unidadmedida-plantilla",    "nombre" : "Bolsa",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-24T00:40:16.467Z"),    "updatedAt" : ("2020-07-24T00:40:16.467Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "5ea220a423687a50a0f3b4e1-unidadmedida-plantilla",    "nombre" : "Doc.",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-24T00:48:12.053Z"),    "updatedAt" : ("2020-07-24T00:48:12.053Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "5ea220a423687a50a0f3b4e1-unidadmedida-plantilla",    "nombre" : "Onz.",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-24T02:21:31.839Z"),    "updatedAt" : ("2020-07-24T02:21:31.839Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "5ea220a423687a50a0f3b4e1-unidadmedida-plantilla",    "nombre" : "Caja",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-24T02:31:21.694Z"),    "updatedAt" : ("2020-07-24T02:31:21.694Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "5ea220a423687a50a0f3b4e1-unidadmedida-plantilla",    "nombre" : "Mano",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-24T16:40:57.476Z"),    "updatedAt" : ("2020-07-24T16:40:57.476Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "5ea220a423687a50a0f3b4e1-unidadmedida-plantilla",    "nombre" : "Lbs. aprox",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-25T04:45:10.168Z"),    "updatedAt" : ("2020-07-25T04:45:10.168Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "5f0bbeca577bf439f4581328-unidadmedida-plantilla",    "nombre" : "Onzas",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-25T04:50:56.475Z"),    "updatedAt" : ("2020-07-25T04:50:56.475Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "5f0bbeca577bf439f4581328-unidadmedida-plantilla",    "nombre" : "Uni.",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-25T04:51:09.673Z"),    "updatedAt" : ("2020-07-25T04:51:09.673Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "5f0bbeca577bf439f4581328-unidadmedida-plantilla",    "nombre" : "Lbs.",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-25T04:51:25.988Z"),    "updatedAt" : ("2020-07-25T04:51:25.988Z"),   "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "5f0bbeca577bf439f4581328-unidadmedida-plantilla",    "nombre" : "(8 Uni.)",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-07-25T14:18:40.241Z"),    "updatedAt" : ("2020-07-25T14:18:40.241Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "5f340a35b6b6046a8ce2f749",    "nombre" : "campolista",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-12T21:01:50.679Z"),    "updatedAt" : ("2020-08-12T21:01:50.679Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "5f340a35b6b6046a8ce2f749",    "nombre" : "campolista2",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-12T21:02:18.451Z"),    "updatedAt" : ("2020-08-12T21:02:18.451Z"),    "__v" : 0,    "idunidad2" : ""});
                    Formcat.create({      "idempresa" : idempresa,    "idunidad" : "5f340a35b6b6046a8ce2f749",    "nombre" : "campolista3",    "usuarionew" :  req.body.email,    "createdAt" : ("2020-08-12T21:16:02.271Z"),    "updatedAt" : ("2020-08-12T21:16:02.271Z"),    "__v" : 0,    "idunidad2" : ""});


                    var password2= generator.generate({
                        length: 4,
                        numbers: true
                        });   
                        var user = new User({
                        "email" : req.body.email, 
                        "password" : 'admin'+'123', 
                        "role" : "Administrador", 
                        "idempresa" : idempresa, 
                        "nombre" : 'Administrador', 
                        "foto" : "/api/image2s/5f38410d2f47f013d41ca573",
                        "cui" : req.body.nit, 
                        "direccion" : req.body.direccion  , 
                        "telefono" : req.body.telefonos , 
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
                        "usuarionew" : req.body.email
                        });
                        user.save(function(err, user){                        if(err){                        return next(err);                        }

                        var user = new User({
                            "email" : "admin" + String(req.body.nombrecorto).toLowerCase()	+'@gmail.com', 
                            "password" : 'admin'+'123', 
                            "role" : "Asociado operador"	, 
                            "idempresa" : idempresa, 
                            "nombre" :'Asociado operador', 
                            "foto" : "/api/image2s/5f38410d2f47f013d41ca573",
                            "cui" : req.body.nit, 
                            "direccion" : req.body.direccion  , 
                            "telefono" : req.body.telefonos , 
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
                           
                            "usuarionew" : req.body.email
                            });
                            user.save(function(err, user){                        if(err){                        return next(err);                        }
                            res.json(todo);
                        });
                                          
                        });
                });                    });                      });

            });     });                        });               });               });                    });                         });            });            });            });                 });         });
        });

        
        });       }); });       });
        
        });
            

       


   
        
     
        

    });
}

}







/*
var mysql = require('mysql'),

connection = mysql.createConnection(
 { 
 host: '190.143.151.236', 
 user: 'tico4',  
 password: 'ocitocit', 
 database: 'mymcloude'
 }
);

exports.getEmpresa = function(req, res, next){
    if (connection) 
    {   var sql='';
        if(req.params.nit)  
        {   sql = "SELECT * FROM empresa WHERE nit = '" + connection.escape(req.params.nit) + "'";
            connection.query(sql, function(error, rows) {
                if (error){ 
                    res.status(500).send(error.sqlMessage);
                 }
                res.json(rows);
                next();
            });
        }
        else
        {   sql="SELECT * FROM empresa";
            connection.query(sql, function(error, rows) {
                if (error){ 
                    res.status(500).send(error.sqlMessage);
                 }
                res.json(rows);
                next();
            });

        }
    }
    else
    {
        res.status(500).send('No conexion con db');
        next();
    }

    
}

exports.creaEmpresas = function(req, res, next){
    var empresaData = {
        nit : req.body.nit,
        nombre : req.body.nombre,
        razon : req.body.razon,
        direccion : req.body.direccion,
        email : req.body.email,
        telefonos : req.body.telefono
        };
    if (connection) 
    {   var sql='';
        
        if(req.params.nit=='crea')
        {
            sql = 'SELECT * FROM empresa WHERE nit = ' + connection.escape( req.body.nit);
          
            connection.query(sql, function(err, row) 
            {
                        if (err){ 
                            res.status(500).send(error.sqlMessage);
                        }
                        
                        if(row.length>0)
                        {
                            res.status(500).send('YA EXISTE REGISTRO');
                           
                        }
                        else
                        {

                            sql = "INSERT INTO empresa SET ?" ;
                            connection.query(sql,  empresaData,function(error, rows) {
                                if (error){ 
                                    res.status(500).send(error.sqlMessage);
                                 }
                                 res.json(empresaData);
                            });

                        }
            });

           
        }
        else
        {
            sql = 'UPDATE empresa SET nombre = ' + connection.escape(empresaData.nombre) + ',' +  
                    'razon = ' + connection.escape(empresaData.razon) +',' +  
                    'direccion = ' + connection.escape(empresaData.direccion) +',' +  
                    'email = ' + connection.escape(empresaData.email) +',' +  
                    'telefonos = ' + connection.escape(empresaData.telefonos) +
                    ' WHERE nit = ' + connection.escape( empresaData.nit);// + empresaData.nit;
 
                  
                    connection.query(sql, function(error, rows) {
                        if (error){ 
                            res.status(500).send(error.sqlMessage);
                         }
                         res.json(empresaData);
                    });
        
        }

    }
    else
    {
        res.status(500).send('No conexion con db');
    }
  

}
exports.deleteEmpresa = function(req, res, next){
    if (connection) 
    {   var sql='';
         var id = req.params.nit;
         sql = 'DELETE FROM empresa WHERE nit = ' + connection.escape(id);

         connection.query(sql, function(error, rows) {
            if (error){ 
                res.status(500).send(error.sqlMessage);
             }
             res.json({"msg":"deleted"});
        });
    }
    else
    {
        res.status(500).send('No conexion con db');
    }

    
}
*/