
var Reglamentod = require('../../models/abogados/reglamentod');
var Reglamento = require('../../models/abogados/reglamneto');
var Bitacora = require('../../models/bitacora');


//db.getCollection('carnes').find({ correo: {  $ne: null }}).count()

var datipo = function(str,vector) {
   var re='';
   for(var i = 0; i < vector.length;i++){
    if(vector[i]._id==str)
    {
    re=vector[i].nombre
        break;

    }
   }




    return re;
};

  
exports.getReglamentod = function(req, res, next){

    if(req.params.id3)  
    { 
        if(req.params.id3=='todos')
        {
            Reglamentod.find({idempresa:req.params.id,idreglamento:req.params.id2}).exec(function(err, todos) {
                if (err){ res.send(err); }
              
                res.json(todos);   
                
            });

        }

        if(req.params.id3=='busqueda')
        {
                var cad= req.params.id2;
                var arr=cad.split('°')
                console.log(cad)

            Reglamentod.find({idempresa:req.params.id,articulo:   { $regex : arr[1], $options : 'i'}  }).select({_id:1,nolibro:1,libro:1,notitulo:1,titulo:1,
                nombre:1,nocapitulo:1,capitulo:1,noparrafo:1,parrafo:1,noarticulo:1,articulo:1,fecha:1,idreglamento:1}).lean().exec(function(err, todos) {
                if (err){ res.send(err); }

                var duplicates = [];
                todos.forEach(function (doc) {duplicates.push(doc.idreglamento);  });


                Reglamento.find({tipo:arr[0],_id: {$in: duplicates}}).populate('pais').populate('tipo').populate('sector').populate('area').
                select({_id:1,idcategoria:1,nombre:1,titulo:1,pais:1,tipo:1,sector:1,area:1}).exec(function(err, todos10) {
                    if (err){ res.send(err); }
                    var aaa=[];
                  
                    
                    for(var i = 0; i < todos.length;i++){
                       
                        var encuentra=0;
                      
                       
                                for(var ii = 0; ii < todos10.length;ii++){
                                    encuentra=0;
                                   
                                    if(todos[i].idreglamento==todos10[ii]._id)
                                    {

                                        encuentra=1;
                                        aaa.push({_id:todos[i]._id, nolibro: todos[i].nolibro,
                                            libro: todos[i].libro,
                                            notitulo: todos[i].notitulo,
                                            idreglamentod:todos[i]._id,
                                            idreglamento:todos[i].idreglamento,
                                            titulo: todos[i].titulo,
                                            nocapitulo: todos[i].nocapitulo,
                                            capitulo: todos[i].capitulo,
                                            nombre: todos[i].nombre,
                                            noparrafo:todos[i].noparrafo,
                                            parrafo: todos[i].parrafo,
                                        
                                            noarticulo:todos[i].noarticulo,
                                            articulo:todos[i].articulo,
                                            fecha: todos[i].fecha,
                                            categoria:todos10[ii].idcategoria,
                                            titulo2:todos10[ii].titulo,
                                            nombre2:todos10[ii].nombre,
                                            pais:todos10[ii].pais.nombre,
                                            tipo:todos10[ii].tipo.nombre,
                                            sector:todos10[ii].sector.nombre,
                                            area:todos10[ii].area.nombre,});
                                            break;
                                    }
                                }
                                if(encuentra==0)
                                {
                                    /*
                                    aaa.push({_id:todos[i]._id,
                                         nolibro: todos[i].nolibro,
                                        libro: todos[i].libro,
                                        notitulo: todos[i].notitulo,
                                        titulo: todos[i].titulo,
                                        nocapitulo: todos[i].nocapitulo,
                                        capitulo: todos[i].capitulo,
                                        nombre: todos[i].nombre,
                                        noparrafo:todos[i].noparrafo,
                                        parrafo: todos[i].parrafo,
                                    
                                        noarticulo:todos[i].noarticulo,
                                        articulo:todos[i].articulo,
                                        fecha: todos[i].fecha,
                                        categoria:'',
                                        titulo2:'',
                                        nombre2:'',
                                        pais:'',
                                        tipo:'',
                                        sector:'',
                                        area:''
                                    });
                                    */

                                }
                              
                            
                    }

                 
                    

                    res.json(aaa);   
                    
                });


               



             
              
                
            });

        }
        else
        if(req.params.id3=='dbusqueda')
        {

            Reglamentod.findById({_id: req.params.id }).lean().exec(function(err, todos) {
                if (err){ res.send(err); }

           

                Reglamento.findById({_id:  req.params.id2 }).populate('pais').populate('tipo').populate('sector').
                populate('area').exec(function(err, todos10) {
                    if (err){ res.send(err); }
                    var aaa=[];
                  
                    
               
                                        aaa.push({   
                                            presenta:todos10.presenta,
                                            autor:todos10.autor,
                                            titulo2:todos10.titulo,
                                            nombre2:todos10.nombre,
                                            texto2:todos10.texto,
                                            pais:todos10.pais.nombre,
                                            tipo:todos10.tipo.nombre,
                                            f1:todos10.f1,    


                                            sector:todos10.sector.nombre,
                                            area:todos10.area.nombre,
                                           
                                            nolibro:todos.nolibro,
                                            libro:todos.libro,
                                            notitulo:todos.notitulo,
                                            titulo:todos.titulo,
                                            nocapitulo:todos.nocapitulo,
                                            capitulo:todos.capitulo,
                                            noparrafo:todos.noparrafo,
                                            parrafo:todos.parrafo,
                                            noarticulo:todos.noarticulo,
                                            articulo:todos.articulo,
                                            nombre:todos.nombre,
                                        
                                        });
                     
                    

                    res.json(aaa);   
                    
                });


               



             
              
                
            });

        }



    }
   
       
       

    

}
exports.deleteReglamentod = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Reglamentod '});
    Reglamentod.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaReglamentod2s = function(req, res, next){
   

    if(req.params.id!=='crea')
    { 
         Bitacora.create(req.body.bitacora);
        Reglamentod.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                todo.nolibro       	=	req.body.nolibro        	||	todo.nolibro        	;         
                todo.libro       	=	req.body.libro        	||	todo.libro        	;         
               
                todo.notitulo       	=	req.body.notitulo        	||	todo.notitulo        	;         
               todo.titulo       	=	req.body.titulo        	||	todo.titulo        	;         
                todo.nocapitulo       	=	req.body.nocapitulo        	||	todo.nocapitulo        	;         
               todo.capitulo       	=	req.body.capitulo        	||	todo.capitulo        	;         

               todo.noparrafo       	=	req.body.noparrafo        	||	todo.noparrafo        	;         
               todo.parrafo       	=	req.body.parrafo        	||	todo.parrafo        	;         

               todo.noarticulo       	=	req.body.noarticulo        	||	todo.noarticulo        	;         
               todo.articulo       	=	req.body.articulo        	||	todo.articulo        	;         
               todo.fecha       	=	req.body.fecha        	||	todo.fecha        	;   
         
               todo.nombre       	=	req.body.nombre        	||	todo.nombre        	;   
             
            
               todo.usuarioup=req.body.bitacora.email;

               todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.json(todo);
                });
            }
        });
    
    }
    else{

   

                    Bitacora.create(req.body.bitacora);
                  
                Reglamentod.create({  
                    idreglamento      	: req.body.idreglamento       	,
                    idempresa       	: req.body.idempresa       	,
                    nolibro       	: req.body.nolibro       	,
                    libro       	: req.body.libro       	,
                    notitulo       	: req.body.notitulo       	,
                    titulo       	: req.body.titulo       	,
                    
                    nocapitulo       	: req.body.nocapitulo       	,
                    capitulo       	: req.body.capitulo       	,
                    noparrafo       	: req.body.noparrafo       	,
                    parrafo       	: req.body.parrafo       	,
                    noarticulo       	: req.body.noarticulo       	,
                    articulo       	: req.body.articulo       	,
                    fecha       	: req.body.fecha       	,
                    nombre       	: req.body.nombre       	,
                    usuarionew:req.body.bitacora.email
                    

                }
                    , function(err, todo) {
                    if (err){   res.status(500).send(err.message)  
                     }
                
                    res.json(todo);

                
                    

                });
      
}


}





