var User = require('../models/user');
var Empresa = require('../models/empresa');
var generator = require('generate-password');
var Bitacora = require('../models/bitacora');
var mailt = require('../controllers/mailprueba');

var Tiposuscriptor = require('../models/tipo_suscriptor');
var Perfil = require('../models/perfil');
var Catalogo = require('../models/catalogo');

var Permiso = require('../models/permiso');
var Permison2 = require('../models/permison2');
var Moduloxx = require('../models/moduloxx');
var User = require('../models/user');

exports.getEmpresa = function(req, res, next){
    if(req.params.id2)
    { 
        if(req.params.id2=='todos')
        {
            Empresa.find({idempresa0:req.params.id},function(err, todos) {
                if (err){  res.send(err);  }
                 res.json(todos);
                
            });
        }
        else
        {
            if(req.params.id2=='superusuario')
            {
                Empresa.find({},function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                    
                });
            }

        }
       
       

    
       
    }
    else
    { Empresa.find({idempresa0:req.params.id},function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}
exports.deleteEmpresa = function(req, res, next){


    Bitacora.create({idempresa:req.params.idempresa,idafiliado:'',email: req.params.userID ,permiso:'Elimina',accion:'Elimina empresa'});
 

    Empresa.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {

      
        Tiposuscriptor.find({ "idempresa" : req.params.recordID }).remove().exec();
        Catalogo.find({ "idempresa" : req.params.recordID }).remove().exec();
        Moduloxx.find({ "idempresa" : req.params.recordID }).remove().exec();
         Perfil.find({ "idempresa" : req.params.recordID }).remove().exec();
         Permiso.find({ "idempresa" : req.params.recordID }).remove().exec();
         Permison2.find({ "idempresa" : req.params.recordID }).remove().exec();
         User.find({ "idempresa" : req.params.recordID }).remove().exec();

        res.json(todo);
    });
}


exports.creaEmpresa2s = function(req, res, next){
   
 
    Bitacora.create(req.body.bitacora);

if(req.params.recordID!=='crea')
{ 
    Empresa.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err) { 
         
            res.send(err);  }
        else
        {   todo.nit 	=	req.body.nit	||	todo.nit 	;
            todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
            todo.razon 	=	req.body.razon	||	todo.razon 	;
            todo.direccion    	=	req.body.direccion    	||	todo.direccion    	;
            todo.email   	=	req.body.email    	||	todo.email   	;
            todo.telefonos 	=	req.body.telefonos 	||	todo.telefonos 	;
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
   
    Empresa.create({ 
        idempresa0        	: req.body.idempresa0       	,
        nit        	: req.body.nit        	,
        nombre        	: req.body.nombre        	,
        razon 	: req.body.razon 	,
        direccion    	: req.body.direccion    	,
        email    	: req.body.email    	,
        telefonos   	: req.body.telefonos  	,
        estado    	: req.body.estado   	,
        usuarionew:req.body.bitacora.email,
        date 			: Date.now() }
        , function(err, todo) {
        if (err){    res.status(500).send(err.message)    }
    
       // res.json(todo);
        //crear toda la estructura
    
       var idempresa=todo._id
       var idtiposus=''
       var iduniuser=''
       var iduniadmin=''
       Tiposuscriptor.create({    "idempresa" : idempresa,             "nombre" : "Administrador",             "cobroparqueos" : "1",             "usuarionew" : req.body.email,             "createdAt" : "2019-10-12T23:29:56.961+0000",      
       "updatedAt" :"2019-10-12T23:29:56.961+0000",             "__v" : 0       } , function(err, xtiposus2) {
         if (err){    res.status(500).send(err.message)    }
       Tiposuscriptor.create({    "idempresa" : idempresa,             "nombre" : "Usuario",             "cobroparqueos" : "1",             "usuarionew" : req.body.email,             "createdAt" : "2019-10-12T23:29:56.961+0000",      
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
                                                "nivel" : "Usuario",    "nombre" : "Perfil",   "tabcomponente" : "TabsPage",   "titulo" : "ProfilePage",   "usuarionew" : req.body.email, 
                                                    }, function(err, xmod1) {
                                                    if (err){    res.status(500).send(err.message)    }
                                                

                                                        Moduloxx.create( {   "componente" : "EventosList2Page",  "estado" : "Activo", "grupo" : "PAGINA",   "icono" : "home",    "idempresa" : idempresa,      "index" : "70",   "nivel" : "Administrador",    "nombre" : "Eventos",      "tabcomponente" : "EventosList2Page",   "titulo" : "EventosList2Page",  "usuarionew" : req.body.email  }
                                                        , function(err, xmod2) {
                                                        if (err){    res.status(500).send(err.message)    }
                                                                    
                                                                        Perfil.create({  "nombre" : "user",  "estado" : "Activo",  "createdAt" : ("2018-08-03T01:25:07.733+0000"),    "updatedAt" : ("2018-11-02T16:12:22.847+0000"),   "__v" : (0),      "unidad" : {         "id" : xcatuni1._id,        "nombre" : xcatuni1.nombre   },      "usuarionew" : req.body.email,        "idempresa" : idempresa    },
                                                                        function(err, xperfil1) {
                                                                            if (err){    res.status(500).send(err.message)    }
                                                                        
                                                                                //  crear todos los permisos de user
                                                                                Permiso.create({   "idrol" : xperfil1._id,    "nombre" : xmod1._id,    "ingreso" : true,   "consulta" : true,    "eliminacion" : true,                          "creacion" : true,                                   "actualizacion" : true,      "createdAt" : ("2018-08-03T01:25:49.367+0000"),      "updatedAt" : ("2019-01-17T20:28:13.600+0000"),                               "__v" : (0),                                     "usuarionew" : req.body.email,         "orden" : (10),        "idempresa" : idempresa                                });
                                                                                Permiso.create({   "idrol" : xperfil1._id,    "nombre" : xmod2._id,    "ingreso" : true,   "consulta" : true,    "eliminacion" : true,                          "creacion" : true,                                   "actualizacion" : true,      "createdAt" : ("2018-08-03T01:25:49.367+0000"),      "updatedAt" : ("2019-01-17T20:28:13.600+0000"),                               "__v" : (0),                                     "usuarionew" : req.body.email,         "orden" : (10),        "idempresa" : idempresa                                });

                                                                            


                                                                                Moduloxx.create( {  "componente" : "ChatHomePage", "estado" : "Activo",   "grupo" : "PAGINA",  "icono" : "chatboxes",    "idempresa" :idempresa,     "index" : "310",                                                "nivel" : ".",                                        "nombre" : "Chats",    "tabcomponente" : "ChatHomePage",   "titulo" : "ChatHomePage",    "usuarionew" :  req.body.email            }
                                                                                , function(err, xmod22) {
                                                                                if (err){    res.status(500).send(err.message)    }
                                                                                        //-------------------------SEGURIDAD
                                                                                        Moduloxx.create({     "componente" : "SEGURIDAD",   "estado" : "Activo",   "grupo" : "MENU",   "icono" : "key",       "idempresa" : idempresa,                                                             "index" : "190", "nivel" : ".",     "nombre" : "SEGURIDAD",  "tabcomponente" : "seguridad",   "titulo" : "Seguridad del sistema",                                                                  "usuarionew" : req.body.email               }
                                                                                        , function(err, xmod23) {
                                                                                            if (err){    res.status(500).send(err.message)    }
                                                                                        //-------------------------EMPRESAS
                                                                                            Moduloxx.create( {   "componente" : "EMPRESAS", "estado" : "Activo",  "grupo" : "MENU", "icono" : "control",    "idempresa" : idempresa,  "index" : "250",  "nivel" : ".",   "nombre" : "EMPRESAS",  "tabcomponente" : "CONTROL DE ACCESO",                                          "titulo" : "CONTROL DE ACCESO",                                                             "usuarionew" : req.body.email }
                                                                                            , function(err, xmod24) {
                            
                                                                                            if (err){    res.status(500).send(err.message)    }
                                                                                          
                                                                                            
                                                                                                        //----PERFIL ADMINISTRADOR
                                                                                                        Perfil.create({  "nombre" : "Administrador",  "estado" : "Activo",  "createdAt" : ("2018-08-03T01:25:07.733+0000"),    "updatedAt" : ("2018-11-02T16:12:22.847+0000"),   "__v" : (0),      "unidad" : {         "id" : xcatuni2._id,        "nombre" : xcatuni2.nombre   },      "usuarionew" : req.body.email,        "idempresa" : idempresa    }, function(err,
                                                                                                             xperfil2) {
                                                                                                            if (err){    res.status(500).send('3333333333333333333333333333'+err.message)    }
                                                                                                         
                                                                                                            //crear PERFIL Y CHAT
                                                                                                                        Permiso.create({   "idrol" : xperfil2._id,    "nombre" : xmod1._id,    "ingreso" : true,   "consulta" : true,    "eliminacion" : true,                          "creacion" : true,                                   "actualizacion" : true,      "createdAt" : ("2018-08-03T01:25:49.367+0000"),      "updatedAt" : ("2019-01-17T20:28:13.600+0000"),                               "__v" : (0),                                     "usuarionew" : req.body.email,         "orden" : (10),        "idempresa" : idempresa                                });
                                                                                                                        Permiso.create({   "idrol" : xperfil2._id,    "nombre" :xmod22._id,    "ingreso" : true,   "consulta" : true,    "eliminacion" : true,                          "creacion" : true,                                   "actualizacion" : true,      "createdAt" : ("2018-08-03T01:25:49.367+0000"),      "updatedAt" : ("2019-01-17T20:28:13.600+0000"),                               "__v" : (0),                                     "usuarionew" : req.body.email,         "orden" : (10),        "idempresa" : idempresa                                });
                                                                                                                    
                                                                                                                        //seguridad 
                                                                                                                        Permiso.create({   "idrol" : xperfil2._id,    "nombre" :xmod23._id,    "ingreso" : true,   "consulta" : true,    "eliminacion" : true,                          "creacion" : true,                                   "actualizacion" : true,      "createdAt" : ("2018-08-03T01:25:49.367+0000"),      "updatedAt" : ("2019-01-17T20:28:13.600+0000"),                               "__v" : (0),                                     "usuarionew" : req.body.email,         "orden" : (10),        "idempresa" : idempresa                                }
                                                                                                                        , function(err, xper1) {
                                                                                                                            if (err){    res.status(500).send('22222222222222222222222222222'+err.message)    }
                                                                                                                    
                                        
                                                                                                                            Moduloxx.create( {    "componente" : "UserListPage",  "estado" : "Activo",   "grupo" : "PAGINA",                                                                       "icono" : "person-add",      "idempresa" : idempresa,   "index" : "60",  "nivel" : "Usuario",         "nombre" : "Usuarios",                                               "tabcomponente" : " UserListPage",                                                    "titulo" : "UserListPage",    "usuarionew" :  req.body.email       } 
                                                                                                                            , function(err, xmodb1) {
                                                                                                                                        //USUARIOS SEGURIDAD
                                                                                                                                        if (err){    res.status(500).send('55555555555555555555'+err.message)    }
                                                                                                                                   //     res.json(todo);***********************************************************************************************

                                                                                                                                   
                                                                                                                                                    Permison2.create({   "idpermiso" : xper1._id,   "idrol" : xperfil2._id, "nombre" :xmodb1._id, "ingreso" : true, "consulta" : true,  "eliminacion" : true,     "creacion" : true,                                                               "actualizacion" : true, "createdAt" : ("2018-10-17T21:03:49.206+0000"),                                                                      "updatedAt" : ("2019-01-17T20:24:32.369+0000"),   "usuarioup" : req.body.email,  "orden" : (10)         ,  "idempresa" : idempresa                                                                    });    
                                                                                                                                        
                                                                                                                                                    Moduloxx.create( {   "componente" : "TiposuscriptorListPage",       "estado" : "Activo",      "grupo" : "PAGINA" ,  "icono" : "more",    "idempresa" : idempresa,    "index" : "280",                                "nivel" : ".",                                                                                         "nombre" : "Tipo usuario",            "tabcomponente" : "TiposuscriptorListPage",                           "titulo" : "TiposuscriptorListPage",  "usuarionew" : req.body.email          }
                                                                                                                                                    , function(err, xmodb1a) {
                                                                                                                                                        if (err){    res.status(500).send('1111111111111' +err.message)    }
                                                                                                                                                        //------------TIPO SUSCRIPTOR
                                                                                                                                                               Permison2.create({   "idpermiso" : xper1._id,   "idrol" : xperfil2._id, "nombre" :xmodb1a._id, "ingreso" : true, "consulta" : true,  "eliminacion" : true,     "creacion" : true,                                                               "actualizacion" : true, "createdAt" : ("2018-10-17T21:03:49.206+0000"),                                                                      "updatedAt" : ("2019-01-17T20:24:32.369+0000"),   "usuarioup" : req.body.email,  "orden" : (10)         ,  "idempresa" : idempresa                                                                    });    
                                                                                                                                                        
                                                                                                                                                        //  res.json(todo);
                                                                                                                                                            
                            
                                                                                                                                                            //EMPRESAS    
                                                                                                                                                            
                                                                                                                                                            
                                                                                                                                                            Permiso.create({   "idrol" : xperfil2._id,    "nombre" :xmod24._id,    "ingreso" : true,   "consulta" : true,    "eliminacion" : true,                          "creacion" : true,                                   "actualizacion" : true,      "createdAt" : ("2018-08-03T01:25:49.367+0000"),      "updatedAt" : ("2019-01-17T20:28:13.600+0000"),                               "__v" : (0),                                     "usuarionew" : req.body.email,         "orden" : (10),        "idempresa" : idempresa                                }
                                                                                                                                                            , function(err, xper2) {
                                                                                                                                                                if (err){    res.status(500).send('777777777777777777777'+err.message)    }
                                                                            
                                                                                                                                                                Moduloxx.create({   "componente" : "EmpresaListPage",   "estado" : "Activo",  "grupo" : "BUSES",     "icono" : "filing",  "idempresa" : idempresa, "index" : "50",   "nivel" : "Administrador",                   "nombre" : "Empresa",  "tabcomponente" : "EmpresaListPage",        "titulo" : "EmpresaListPage",    "usuarionew" :  req.body.email  }
                                                                                                                                                                            , function(err, xmodb2) {
                                                                                                                                                                                if (err){    res.status(500).send('333333333333333333333'+err.message)    }
                            
                                                                                                                                                                                    
                                                                                                                                                                                    Permison2.create({   "idpermiso" : xper2._id,   "idrol" : xperfil2._id, "nombre" :xmodb2._id, "ingreso" : true, "consulta" : true,  "eliminacion" : true,     "creacion" : true,                                                               "actualizacion" : true, "createdAt" : ("2018-10-17T21:03:49.206+0000"),                                                                      "updatedAt" : ("2019-01-17T20:24:32.369+0000"),   "usuarioup" : req.body.email,  "orden" : (10) ,  "idempresa" : idempresa                                                                           });    
                                                                                                                                                                                   
                                                                                                                                                                                    
                                                                                                                                                                                    var password2= generator.generate({
                                                                                                                                                                                        length: 4,
                                                                                                                                                                                        numbers: true
                                                                                                                                                                                    });   
                                                                                                                                                                                    var user = new User({
                                                                                                                                                                                        "email" : req.body.email, 
                                                                                                                                                                                        "password" : password2+'A123@', 
                                                                                                                                                                                        "role" : "Administrador", 
                                                                                                                                                                                        "idempresa" : idempresa, 
                                                                                                                                                                                        "nombre" : req.body.nombre, 
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
                                                                                                                                                                                        "controlacceso" : "", 
                                                                                                                                                                                        "carnecalusac" : "", 
                                                                                                                                                                                        "createdAt" : ("2019-10-09T16:35:33.769+0000"), 
                                                                                                                                                                                        "updatedAt" : ("2019-10-13T16:19:15.357+0000"), 
                                                                                                                                                                                        "__v" : (0), 
                                                                                                                                                                                        "fechanac" : ("2019-10-11T00:00:00.000+0000"), 
                                                                                                                                                                                        "foto" : "./assets/img/profilelocal.png", 
                                                                                                                                                                                        "usuarionew" : req.body.email
                                                                                                                                                                                        
                                                                                                                                                                                     
                                                                                                                                                                                    });

                                                      

                                                                                                                                                                                    user.save(function(err, user){
 
                                                                                                                                                                                        if(err){
                                                                                                                                                                                            return next(err);
                                                                                                                                                                                        }

                                                                                                                                                                                   
                                                                                                                                                                                        
                                                                                                                                                                            
                                                                                                                                                                                        mailt.sendEmail([req.body.email,'mario.morales@mcloude.com'],'body creacion de empresa correo ' +  req.body.email + '   clave: ' +  password2+'A123@', 'Creación de empresa :'+req.body.nombre,['mario.morales@mcloude.com']);
                                                                                                                                                                             
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