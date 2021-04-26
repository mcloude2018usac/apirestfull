
var Operadores = require('../../models/calusac/operadores');
var Bitacora = require('../../models/bitacora');

exports.getOperadores = function(req, res, next){
       if(req.params.id)
        {  
           
                Operadores.find({_id:req.params.id}
                    ,null, {sort: {encola: 1}},function(err, todos) {
                    if (err){ res.send(err); }
                   
                    if(todos.length>0)   {    res.json(todos);   }
                    else
                    {  res.status(500).send('NO EXISTE REGISTRO');      }
                    
                });
             
           
        }
        else
        { Operadores.find({}, null, {sort: {encola: 1}},function(err, todos) {
               if (err){  res.send(err);  }
                res.json(todos);
            });
        }

 
}