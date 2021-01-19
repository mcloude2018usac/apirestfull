var kardex = require('../../models/asociadoventa/kardexcorreos');
var Bitacora = require('../../models/bitacora');

exports.getCorreos = function(req, res, next){
    if(req.params.id3)
    { 
        
        if(req.params.id2==='kardex1')
        { 
            kardex.find({producto:req.params.id,idempresa :req.params.id3}).sort({_id:-1}).exec(function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {    res.json(todos);   }
                else
                {  res.status(500).send('NO EXISTE REGISTRO');      }
                
            });
        }
        else
        {
            kardex.find({nodockardex:req.params.id,idempresa :req.params.id3}).sort({_id:-1}).exec(function(err, todos) {
                if (err){ res.send(err); }
               
                if(todos.length>0)   {    res.json(todos);   }
                else
                {  res.status(500).send('NO EXISTE REGISTRO');      }
                
            });

        }     
      
    }
   
}