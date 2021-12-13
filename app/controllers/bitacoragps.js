var bitacoragps = require('../models/bitacoragps');


var functool = require('./funcionesnode');
exports.getbitacoragps = function(req, res, next){
 
                bitacoragps.find({idempresa:req.params.id3,idusuario:req.params.id2,idticket:req.params.id}).sort({'_id': -1}).exec(function(err, todos) {
                    if (err){  res.send(err);  }
                     res.json(todos);
                 });
         
}
exports.deletebitacoragps = function(req, res, next){
  
    bitacoragps.findByIdAndRemove({ _id: req.params.recordID  }, function(err, todo) {
        res.json(todo);
    });
}
exports.creabitacoragps2s = function(req, res, next){
    

         
    bitacoragps.find({ idempresa     	: req.body.idempresa    	,
        idformulario	: req.body.idformulario	, idticket	: req.body.idticket	,
        idusuario	: req.body.idusuario	,
        lat	: req.body.lat	,
        lon	: req.body.lon	,
      
        
         },function(err, todos) {
        if (err){ res.send(err); }
      
        if(todos.length>0)   {  
            var dd=[]
            dd.push({estado:'ok'})
            res.json(dd);}
        else
        {  

            bitacoragps.create({ 
                idempresa     	: req.body.idempresa    	,
                idformulario	: req.body.idformulario	,
                nombreusuario	: req.body.nombreusuario	,
                noticket	: req.body.noticket	,
                idticket	: req.body.idticket	,
                idusuario	: req.body.idusuario	,
                lat	: req.body.lat	,
                lon	: req.body.lon	,
                              
                            }
                              , function(err, todo) {
                              if (err){ 
                                  res.status(500).send(err.message)    }
                              res.json(todo);
                          });
              
        }


    });
         

}
