const fs = require('fs');




// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
const TOKEN_PATH = 'drive.json';
const { Storage } = require('@google-cloud/storage');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: 'AKIAU4LAKYYRT7SWLZNF',
    secretAccessKey: '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'
});



//req.params.id   es el id de la orden se vuelve directorio  y id2  nombre file

exports.getaFileuploadx = async function(req, res, next){
//console.log(__dirname +'/uploadedFiles/'+req.params.id + '/' + req.params.id2)
 //   res.download(__dirname +'/uploadedFiles/Curriculum Vitae kevin.pdf','Curriculum Vitae kevin.pdf');
 //preguntar si usa nube o no
 var arrr=req.params.id2.split('¬')
   var bucketname = 'bkuctettnavia';
var fileName = 'package.json';

 if(arrr[0]==='nube')
 {
    const storage = new Storage({ keyFilename: './google-cloud-key.json' });
     
    fileName = req.params.id + '-' + arrr[1];
    const options = {
        version: 'v4',
        action: 'read',
        expires: Date.now() + 15 * 60 * 1000, // 15 minutes
      };
    
      // Get a v4 signed URL for reading the file
      const [url] = await storage
        .bucket(bucketname)
        .file(fileName)
        .getSignedUrl(options);
    


      res.json(url);
    

 }
 else
 {
     if(String(req.params.id2).indexOf('¬')>0)
     {
        if(String(req.params.id2).indexOf('local')>=0)
                {   
                    res.download('./uploadedFiles/'+req.params.id + '/' + req.params.id2.split('¬')[1]);
                }
                else{
                    res.download('./uploadedFiles/'+req.params.id + '/' + req.params.id2.split('¬')[0]);
                }
        
    }
     else{
        res.download('./uploadedFiles/'+req.params.id + '/' + req.params.id2);
     }
    
 }

    
   // res.json({erro:'nitido'});

}
exports.creaFileuploadxs = function(req, res, next){
    console.log('entraaaaa')
    console.log(req.body.name)
    var bucketname = 'bkuctettnavia';
    var fileName = 'package.json';
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'Error: No file uploaded'
            });
        } else {
        
            var rutafile=''
            let uploadedFile = req.files.uploadedFile;

            if(req.body.local==='Si' || req.body.local===undefined)
            {
rutafile='./uploadedFiles'+'/' + req.body.name + '/'+  uploadedFile.name
            }
            else
            {
                const storage = new Storage({ keyFilename: './google-cloud-key.json' });

                rutafile='./uploadedFiles'+'/' + req.body.name + '/'+ req.body.name + '-'+ uploadedFile.name
            }
           
            
           
            uploadedFile.mv(rutafile, function(err) {
                if (err)
                 return res.status(500).send(err);

                 //preguntar si usa nube o no
                 if(req.body.local==='Si' || req.body.local===undefined)
                 {
                    res.json({
                        message: 'File is uploaded',
                        data: {
                            name: 'local¬' + uploadedFile.name,
                            mimetype: uploadedFile.mimetype,
                            size: uploadedFile.size}
                        });
                 }
                 else
                 {
                 
                    storage.bucket(bucketname).upload(rutafile).then( () => {
  

                        fs.unlink(rutafile, (err) => {
                            if (err) {
                              console.error(err)
                              return
                            }
                            res.json({
                                message: 'File is uploaded',
                                data: {
                                    name: 'nube¬' + uploadedFile.name,
                                    mimetype: uploadedFile.mimetype,
                                    size: uploadedFile.size}
                                });
                        
                    
                        
                            //file removed
                          })
                    
                    
                    
                                  
                                   
                    
                    
                                   });
                    
                 }



          
            });
        }
    } catch (err) {
        res.json({Error: "Error while uploading file."})
    }



}
