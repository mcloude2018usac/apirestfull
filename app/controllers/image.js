/**
 * Created by mmerida on 4/06/2018.
 */
var Image = require('../models/image');
var  UPLOAD_PATH= require('../../server');
var  app= require('../../server');
var  upload= require('../../server');
var  path= require('path');
var  fs= require('fs');
var  del= require('del');




exports.getImages = function(req, res, next){
    let imgId = req.params.id;
    Image.findById(imgId, (err, image) => {
        if (err) {
            res.sendStatus(400);
        }
        // stream the image back by loading the file
        console.log(image)
     
        res.setHeader('content-type', image.contentType);
        res.send(image.img);
      //  fs.createReadStream(path.join(UPLOAD_PATH, image.filename)).pipe(res);
    })


  
}



exports.putImages = function(req, res, next){
  
    Image.findById({ _id: req.params.recordID }, function (err, todo)  {
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


exports.createImage = function(req, res, next){


    const img = req.body.img;
    console.log(img)

    const data = img;
    console.log(data)
    const split = data.split(','); // or whatever is appropriate here. this will work for the example given
    const base64string = split[1];
    const buffer = Buffer.from(base64string, 'base64');

   
    var new_img = new Image;
    new_img.img =buffer
    new_img.contentType = 'image/jpeg';
    new_img.save(err => {
        if (err) {
            return res.sendStatus(400);
        }
        res.status(201).send({ new_img });
    });



}

exports.deleteImage = function(req, res, next){

    let imgId = req.params.recordID ;
 
    Image.findByIdAndRemove(imgId, (err, image) => {
        if (err && image) {
            res.sendStatus(400);
        }
 
        del([path.join(UPLOAD_PATH, image.filename)]).then(deleted => {
            res.sendStatus(200);
        })
    })


  

}