var Asignaestudiante = require('../models/asignaestudiante');
var Bitacora = require('../models/bitacora');

exports.getAsignaestudiante = function(req, res, next){
    if(req.params.id)
    {   Asignaestudiante.find({idasigna:req.params.id}).sort({   fexamen : -1    }).exec(function(err, todos) {
            if (err){ res.send(err); }
       
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
            
        });
    }
    else
    { Asignaestudiante.find({idasigna:req.params.id}).sort({   fexamen : -1    }).exec(function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}