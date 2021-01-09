var kardex = require('../../models/asociadoventa/kardexcorreos');
var Bitacora = require('../../models/bitacora');

exports.getCorreos = function(req, res, next){
    if(req.params.id3)
    {   kardex.find({producto:req.params.id,idempresa :req.params.id3}).sort({_id:-1}).exec(function(err, todos) {
            if (err){ res.send(err); }
           
            if(todos.length>0)   {    res.json(todos);   }
            else
            {  res.status(500).send('NO EXISTE REGISTRO');      }
            
        });
    }
   
}