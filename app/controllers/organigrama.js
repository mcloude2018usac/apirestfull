var Organigrama = require('../models/organigrama');
var Bitacora = require('../models/bitacora');

var Denunciaunidad = require('../models/denunciaunidad');

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

exports.getOrganigrama = function(req, res, next){
    if(req.params.id2)
    {   
        if(req.params.id2=='unidades')
        {

               
        Organigrama.find({'nivel1':req.params.id}).populate('nivel2').populate('nivel1').exec(function(err, todos) {
            if (err){ res.send(err); }
        console.log(todos.length)

        var unique =  todos.filter( onlyUnique );
        var myData2 = [];  
        
        for(var i = 0; i < unique.length;i++){
           
             myData2.push({_id:unique[i].nivel1._id,nombre:unique[i].nivel1.nombre });
           
         }

          res.json(myData2);

            
        });

        }
        else
        {

            if(req.params.id2=='deptos')
            {

               Denunciaunidad.find({}).exec(function(err, todos10) {
                    if (err){ res.send(err); }

                Organigrama.find({'nivel1':req.params.id}).populate('nivel2').populate('nivel1').exec(function(err, todos) {
                    if (err){ res.send(err); }
                                var myData2 = [];  
                                for(var i = 0; i < todos.length;i++){
                                    var jj='';
                                    for(var i2 = 0; i2 < todos10.length;i2++){
                                        if(todos10[i2].unidad==todos[i].nivel2._id)
                                        {
                                        jj=jj +todos10[i2].jefeop+ ',' 
                                        }
                                    }


                                    myData2.push({_id:todos[i].nivel2._id,nombre:todos[i].nivel2.nombre,jeje:jj});


                                }
                                res.json(myData2);
                    
                });
    });
            }
            else
            {
    
                
            }
    
       
            
        }

     
    }
    else
    { Organigrama.find(function(err, todos) {
           if (err){  res.send(err);  }
            res.json(todos);
        });
    }
}