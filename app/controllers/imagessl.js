
  



/**
 * Created by mmerida on 4/06/2018.
 */
var Imagessl = require('../models/imagessl');
var  UPLOAD_PATH= require('../../server');
var  app= require('../../server');
var  upload= require('../../server');
var  path= require('path');
var  fs= require('fs');
var  del= require('del');



exports.getImagessls = function(req, res, next){
    let imgId = req.params.id;
    Imagessl.findById(imgId, (err, imagessl) => {
        if (err) {
            res.sendStatus(402);
            return;
        }
    
       if(imagessl)
       { res.setHeader('content-type', imagessl.contentType);
       res.send(imagessl.img);}
       else
       {
       
        Imagessl.findById('5f146aa48caa41db981e6830', (err, imagessl) => {
            if (err) {
                res.sendStatus(402);
                return;
            }
                    if(imagessl)
                    {   res.setHeader('content-type', imagessl.contentType);
                        res.send(imagessl.img);}
                    else
                    {
                        res.setHeader('content-type', 'imagessl/png');
                        res.send('iVBORw0KGgoAAAANSUhEUgAAAAoAAAAMCAIAAADUCbv3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAUSURBVChTY/iPF4xKYwWUSP//DwCbIGaosFt0WQAAAABJRU5ErkJggg==');
                    }

        });
      

       }
     
       
      //  fs.createReadStream(path.join(UPLOAD_PATH, imagessl.filename)).pipe(res);
    })


  
}



exports.putImagessls = function(req, res, next){
  
    Imagessl.findById({ _id: req.params.recordID }, function (err, todo)  {
        if (err)
    {
        res.send(err);
    }
    else
    {
        todo.name 				= req.body.name 		|| todo.name;
        todo.description 		= req.body.description 	|| todo.description;
        todo.thumbnail  		= req.body.thumbnail	|| todo.thumbnail;
        todo.displayed 		= req.body.displayed 	|| todo.displayed;

        todo.save(function (err, todo){
        
            /* If we encounter an error send the details as a HTTP response */
            if (err)
        {
            res.status(500).send(err)
        }

        /* If all is good then send a JSON encoded map of the retrieved data
         as a HTTP response res.json(todos); */
        res.json({ records: todo });
    });
}

});





}


exports.createImagessl = function(req, res, next){

    if(req.body.img==undefined)
    {console.log('nula')
        res.status(201).send({ url:''});
    }
    else
    {
    if(req.body.id=='' || req.body.id=='base64')
    {
        const img = req.body.img;
        const data = img;
        const split = data.split(','); 
        var fullUrl = req.protocol + '://' + req.get('host') ;
        const base64string = split[1];
        var tipoimg =(split[0]).split(';')
        const tipoimg2 =(tipoimg[0]).split(':')
        const buffer = Buffer.from(base64string, 'base64');
     
        var new_img = new Imagessl;
        new_img.img =buffer
        new_img.nombre =req.body.nombre
        new_img.tamano =req.body.tamaño

        new_img.contentType = tipoimg2[1] ;
    
        new_img.save(function (err, todo){
            if (err) {
                return res.sendStatus(400);
            }
            res.status(201).send({ url:fullUrl + '/api/imagessls/'+todo._id});
        });
    

    }
    else{

        let imgId = req.body.id ;
        console.log( req.body.img)

        if(imgId=='noexiste' || req.body.img==undefined)
        {console.log('nula')
            res.status(201).send({ url:''});
        }
        else
        {
            Imagessl.findByIdAndRemove(imgId, (err, imagessl) => {
                if (err && imagessl) {
                    res.sendStatus(400);
                    return;
                }
         
                const img = req.body.img;
                const data = img;
                const split = data.split(','); 
                var fullUrl = req.protocol + '://' + req.get('host') ;
                const base64string = split[1];
                var tipoimg =(split[0]).split(';')
                const tipoimg2 =(tipoimg[0]).split(':')
                const buffer = Buffer.from(base64string, 'base64');
                console.log(buffer)
                var new_img = new Imagessl;
                new_img.img =buffer
                new_img.nombre =req.body.nombre
                new_img.tamano =req.body.tamaño
        
                new_img.contentType = tipoimg2[1] ;
            
                new_img.save(function (err, todo){
                    if (err) {
                        return res.sendStatus(400);
                    }
                    res.status(201).send({ url:fullUrl + '/api/imagessls/'+todo._id});
                });
    
    
    
            })
        }
 
      
    }

    }

  


}

exports.deleteImagessl = function(req, res, next){

    let imgId = req.params.recordID ;
 
    Imagessl.findByIdAndRemove(imgId, (err, imagessl) => {
        if (err && imagessl) {
            res.sendStatus(400);
        }
 
        del([path.join(UPLOAD_PATH, imagessl.filename)]).then(deleted => {
            res.sendStatus(200);
        })
    })


  

}



  