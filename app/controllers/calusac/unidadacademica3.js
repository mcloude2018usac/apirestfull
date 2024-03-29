
var Unidadacademica3 = require('../../models/calusac/unidadacademica3');
var Bitacora = require('../../models/bitacora');

exports.getUnidadacademica3 = function(req, res, next){
    if(req.params.id3)
    {
        var filtro;

                    switch(req.params.id3) {
                        case 'Estudiante':
                            filtro={idtipounidad:req.params.id,estado:'Activo', aest:true};
                        break;
                        case 'Trabajador':
                                filtro={idtipounidad:req.params.id,estado:'Activo', atrab:true};
                        break;
                   
                        case 'Hijo Trabajador Adolescente':
                                filtro={idtipounidad:req.params.id,estado:'Activo', ahijotrab1:true};
                        break;
                        case 'Hijo Trabajador Adulto':
                                filtro={idtipounidad:req.params.id,estado:'Activo', ahijotrab2:true};
                        break;
                        case 'Población':
                                filtro={idtipounidad:req.params.id,estado:'Activo', apoblacion:true};
                        break;
                        case 'Adolescente':
                                filtro={idtipounidad:req.params.id,estado:'Activo', aadol:true};
                        break;
                        case 'Extranjero':
                                filtro={idtipounidad:req.params.id,estado:'Activo', aext:true};
                        break;
                        case 'Extranjerocentroamericano':
                            filtro={idtipounidad:req.params.id,estado:'Activo', aext2:true};
                    break;
                        default:
                                filtro={idtipounidad:req.params.id,estado:'Activo'};

                    }
                          
        Unidadacademica3.find(filtro
        ,null, {sort: {nombre: 1}}).populate('ididioma').exec(function(err, todos) {
           if (err){  res.send(err);  }
           console.log(todos)
           
            res.json(todos);
        });


    }
    else
    {
    if(req.params.id2)
    {   
        if(req.params.id2=='todosinactivo')
        {   
            Unidadacademica3.find({idtipounidad:req.params.id,estado:'Inactivo'}
        ,null, {sort: {codigo: 1}}).populate('ididioma','idtipocurso','idtipogrupo').exec(function(err, todos) {
           if (err){  res.send(err);  }
          
            res.json(todos);
        });
        }
        else
        {
            if(req.params.id2=='todosactivofiltro')
            {   
                Unidadacademica3.find({idtipounidad:req.params.id,estado:'Activo',
                _id:{$in:['5e949ab03d1b0a001e30a57c','5e9750e3c37fcd001eeb1e39', '5f06014b2ae3c100b8deac4e','5f0601742ae3c100b8deac58','5e99d961693031001e9e7ae1','5f062f491dc7b500e4225e76']}}
            ,null, {sort: {codigo: 1}})
            .populate('ididioma').populate('idtipocurso').populate('idtipogrupo').exec(function(err, todos) {
               if (err){  res.send(err);  }
             
                res.json(todos);
            });
            }
            else   
            {
            if(req.params.id2=='todosactivo')
            {   
                Unidadacademica3.find({idtipounidad:req.params.id,estado:'Activo'}
            ,null, {sort: {codigo: 1}})
            .populate('ididioma').populate('idtipocurso').populate('idtipogrupo').exec(function(err, todos) {
               if (err){  res.send(err);  }
             
                res.json(todos);
            });
            }
            else   
            {
        if(req.params.id2=='todos')
        {   
            Unidadacademica3.find({idtipounidad:req.params.id}
        ,null, {sort: {codigo: 1}})
        .populate('ididioma').populate('idtipocurso').populate('idtipogrupo').exec(function(err, todos) {
           if (err){  res.send(err);  }
         
            res.json(todos);
        });
        }
        else   
        {
            Unidadacademica3.find({idtipounidad:req.params.id,_id:req.params.id2}
                ,null, {sort: {codigo: 1}}).populate('ididioma').populate('idtipocurso').populate('idtipogrupo').exec(function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });   
        }}}
    }
        
        
       
    }
    else
    { Unidadacademica3.find({idtipounidad:req.params.id,estado:'Activo'}
        ,null, {sort: {codigo: 1}},function(err, todos) {
           if (err){  res.send(err);  }
           
            res.json(todos);
        });
    }   
}
}
exports.deleteUnidadacademica3 = function(req, res, next){
   
    Bitacora.create({email: req.params.userID ,permiso:'Elimina',accion:'Elimina Unidadacademica3 '});
    Unidadacademica3.findByIdAndRemove({ _id: req.params.id  }, function(err, todo) {
        res.json(todo);
    });
}


exports.creaUnidadacademica32s = function(req, res, next){
   
 

    if(req.params.id!=='crea')
    {  Bitacora.create(req.body.bitacora);
      
        Unidadacademica3.findById({ _id: req.params.id}, function (err, todo)  {
            if (err) {  res.send(err);  }
            else
            {  
                
                todo.idtipounidad        	=	req.body.idtipounidad        	||	todo.idtipounidad;        	;
                todo.nombre        	=	req.body.nombre        	||	todo.nombre        	;
                todo.codigo        	=	req.body.codigo        	||	todo.codigo        	;
                todo.ididioma        	=	req.body.ididioma        	||	todo.ididioma        	;
                todo.idtipocurso        	=	req.body.idtipocurso        	||	todo.idtipocurso        	;
                todo.idtipogrupo        	=	req.body.idtipogrupo        	||	todo.idtipogrupo        	;


                todo.aest		=	req.body.aest        	       	;
                todo.atrab	=	req.body.atrab               	;
                todo.ahijotrab1=	req.body.ahijotrab1      	;
                todo.ahijotrab2=	req.body.ahijotrab2        	      	;
                todo.apoblacion=	req.body.apoblacion           	;
                todo.aadol=	req.body.aadol               	;
                todo.aext=	req.body.aext        	  	;
                todo.aext2=	req.body.aext2        	  	;
                

                todo.estado        	=	req.body.estado        	||	todo.estado        	;
                todo.usuarioup=req.body.bitacora.email;
               

                todo.save(function (err, todo){
                    if (err)     {  res.status(500).send(err.message)   }
                    res.json(todo);
                });
            }
        });
    
    }
    else{

        Unidadacademica3.find({ idtipounidad      	: req.body.idtipounidad  ,codigo:req.body.codigo ,  nombre        	: req.body.nombre     
        ,ididioma        	: req.body.ididioma        ,
        idtipocurso        	: req.body.idtipocurso        ,
        idtipogrupo        	: req.body.idtipogrupo           	 },function(err, todos) {
            if (err){ res.send(err); }
          
            if(todos.length>0)   {    res.status(500).send('Ya existe un curso con esta configuración :' + req.body.nombre); }
            else
            {   

                
        Bitacora.create(req.body.bitacora);
            Unidadacademica3.create({  idtipounidad      	: req.body.idtipounidad     	,
                nombre        	: req.body.nombre        	,
                codigo        	: req.body.codigo        ,
                ididioma        	: req.body.ididioma        ,
                idtipocurso        	: req.body.idtipocurso        ,
                idtipogrupo        	: req.body.idtipogrupo        ,
                aest     	: req.body.aest        ,
                atrab	: req.body.atrab        ,
                ahijotrab1	: req.body.ahijotrab1        ,
                ahijotrab2	: req.body.ahijotrab2        ,
                apoblacion	: req.body.apoblacion        ,
                aadol	: req.body.aadol        ,
                aext	: req.body.aext        ,
                aext2	: req.body.aext2        ,
                estado        	: req.body.estado        ,
                usuarionew:req.body.bitacora.email	
            
            }
                , function(err, todo) {
                if (err){ 
                    res.status(500).send(err.message)    }
                res.json(todo);
            });
            
        }
        
    });
   
 
}

}





