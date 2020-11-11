

//req.params.id   es el id de la orden se vuelve directorio  y id2  nombre file

exports.getaFileuploadx = function(req, res, next){
console.log(__dirname +'/uploadedFiles/'+req.params.id + '/' + req.params.id2)
 //   res.download(__dirname +'/uploadedFiles/Curriculum Vitae kevin.pdf','Curriculum Vitae kevin.pdf');


    res.download('./uploadedFiles/'+req.params.id + '/' + req.params.id2);
   // res.json({erro:'nitido'});

}
exports.creaFileuploadxs = function(req, res, next){
    console.log('entraaaaa')
    console.log(req.body.name)
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'Error: No file uploaded'
            });
        } else {
        

            let uploadedFile = req.files.uploadedFile;
            uploadedFile.mv('./uploadedFiles'+'/' + req.body.name + '/'+uploadedFile.name);
            res.json({
                message: 'File is uploaded',
                data: {
                    name: uploadedFile.name,
                    mimetype: uploadedFile.mimetype,
                    size: uploadedFile.size
                }
            });
        }
    } catch (err) {
        res.json({Error: "Error while uploading file."})
    }



}
