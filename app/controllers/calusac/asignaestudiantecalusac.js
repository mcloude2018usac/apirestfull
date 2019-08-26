var Asignaestudiantecalusac = require('../../models/calusac/asignaestudiantecalusac');
var Bitacora = require('../../models/bitacora');

exports.getAsignaestudiantecalusac = function(req, res, next){
    if(req.params.id)
    {   Asignaestudiantecalusac.find({idasigna:req.params.id},function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
            
        });
    }
    else
    { Asignaestudiantecalusac.find({idasigna:req.params.id},function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}