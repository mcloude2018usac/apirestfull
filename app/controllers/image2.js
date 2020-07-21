/**
 * Created by mmerida on 4/06/2018.
 */
var Image2 = require('../models/image2');
var  UPLOAD_PATH= require('../../server');
var  app= require('../../server');
var  upload= require('../../server');
var  path= require('path');
var  fs= require('fs');
var  del= require('del');



exports.getImage2s = function(req, res, next){
    let imgId = req.params.id;
    Image2.findById(imgId, (err, image2) => {
        if (err) {
            res.sendStatus(402);
            return;
        }
    
       if(image2)
       { res.setHeader('content-type', image2.contentType);
       res.send(image2.img);}
       else
       {
       
        Image2.findById('5f146aa48caa41db981e6830', (err, image2) => {
            if (err) {
                res.sendStatus(402);
                return;
            }
                    if(image2)
                    {   res.setHeader('content-type', image2.contentType);
                        res.send(image2.img);}
                    else
                    {
                        res.setHeader('content-type', 'image/png');
                        res.send('iVBORw0KGgoAAAANSUhEUgAAAAoAAAAMCAIAAADUCbv3AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAUSURBVChTY/iPF4xKYwWUSP//DwCbIGaosFt0WQAAAABJRU5ErkJggg==');
                    }

        });
      

       }
     
       
      //  fs.createReadStream(path.join(UPLOAD_PATH, image2.filename)).pipe(res);
    })


  
}



exports.putImage2s = function(req, res, next){
  
    Image2.findById({ _id: req.params.recordID }, function (err, todo)  {
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


exports.createImage2 = function(req, res, next){

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
     
        const base64string = split[1];
        var tipoimg =(split[0]).split(';')
        const tipoimg2 =(tipoimg[0]).split(':')
        const buffer = Buffer.from(base64string, 'base64');
     
        var new_img = new Image2;
        new_img.img =buffer
        new_img.nombre =req.body.nombre
        new_img.tamano =req.body.tamaño

        new_img.contentType = tipoimg2[1] ;
    
        new_img.save(function (err, todo){
            if (err) {
                return res.sendStatus(400);
            }
            res.status(201).send({ url: '/api/image2s/'+todo._id});
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
            Image2.findByIdAndRemove(imgId, (err, image2) => {
                if (err && image2) {
                    res.sendStatus(400);
                    return;
                }
         
                const img = req.body.img;
                const data = img;
                const split = data.split(','); 
             
                const base64string = split[1];
                var tipoimg =(split[0]).split(';')
                const tipoimg2 =(tipoimg[0]).split(':')
                const buffer = Buffer.from(base64string, 'base64');
                console.log(buffer)
                var new_img = new Image2;
                new_img.img =buffer
                new_img.nombre =req.body.nombre
                new_img.tamano =req.body.tamaño
        
                new_img.contentType = tipoimg2[1] ;
            
                new_img.save(function (err, todo){
                    if (err) {
                        return res.sendStatus(400);
                    }
                    res.status(201).send({ url: '/api/image2s/'+todo._id});
                });
    
    
    
            })
        }
 
      
    }

    }

  


}

exports.deleteImage2 = function(req, res, next){

    let imgId = req.params.recordID ;
 
    Image2.findByIdAndRemove(imgId, (err, image2) => {
        if (err && image2) {
            res.sendStatus(400);
        }
 
        del([path.join(UPLOAD_PATH, image2.filename)]).then(deleted => {
            res.sendStatus(200);
        })
    })


  

}


