const fs = require('fs');
const { google } = require('googleapis');
const https = require("https");



// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
const TOKEN_PATH = 'drive.json';
const { Storage } = require('@google-cloud/storage');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: 'AKIAU4LAKYYRT7SWLZNF',
    secretAccessKey: '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'
});




exports.getIDrives = async function(req, res, next){
    let imgId = req.params.id;
    var bucketname = 'bkuctettnavia';
var fileName = 'package.json';
const storage = new Storage({ keyFilename: './google-cloud-key.json' });

   
    if(req.params.recordID==='dropbox')
    {


 storage.bucket(bucketname).upload('./' + filename).then( () => {
    console.log(fileName + ' uploaded');
    res.json(fileName + ' uploaded');

}).catch(error => {
    console.error(`Error occured during images uploading: ${error}`);
    res.json(`Error occured during images uploading: ${error}`);
});
/*
const url = res[0].metadata.mediaLink;

await storage.bucket(bucketname).file(filename).makePublic();

const axios = require('axios');
const pkg = await axios.get(url).then(res =>{ res.data

console.log(res.data)

});
pkg.name; // 'masteringjs.io'



        fs.readFile(fileName, (err, data) => {
            if (err) throw err;
            const params = {
                Bucket: 'user', // pass your bucket name
                Key: 'contacts.csv', // file will be saved as testBucket/contacts.csv
                Body: JSON.stringify(data, null, 2)
            };
            s3.upload(params, function(s3Err, data) {
                if (s3Err) throw s3Err
                console.log(`File uploaded successfully at ${data.Location}`)
            });
         });

         */
/*
        var TOKEN='sl.A6kWflqUroUjGQoSL4zDs4e5KHzwTqMdqEguxeUh-nSE9-c8CZ3uFFkF98MpCyu7XpkIma0-SvWknG56n0LMMflV0BHCF_HkMVnXfqWFyaFCEG2PM5xVTD3RRertr-yYEXl-Cw8'

        fs.readFile('Calentamiento.pdf', 'utf8', function (err, data) {
            const req = https.request('https://content.dropboxapi.com/2/files/upload', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer sl.A6kWflqUroUjGQoSL4zDs4e5KHzwTqMdqEguxeUh-nSE9-c8CZ3uFFkF98MpCyu7XpkIma0-SvWknG56n0LMMflV0BHCF_HkMVnXfqWFyaFCEG2PM5xVTD3RRertr-yYEXl-Cw8',
                    'Dropbox-API-Arg': JSON.stringify({
                        'path': '/uploadedFiles/archivo1/Calentamiento.pdf',
                        'mode': 'overwrite',
                        'autorename': true, 
                        'mute': false,
                        'strict_conflict': false
                    }),
                    'Content-Type': 'application/octet-stream',
                }
            }, (res) => {
                console.log("statusCode: ", res.statusCode);
                console.log("headers: ", res.headers);
                res.json(res.headers);
        
                res.on('data', function(d) {
                    process.stdout.write(d);
                });
            });
        
            req.write(data);
            req.end();
        });
*/

      
    }
    else
    {

        fileName = 'dpi y igss.docx';
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
        
          console.log('Generated GET signed URL:');
          console.log(url);

          res.json(url);
        
    
     // generateSignedUrl().catch(console.error);

 /*
         storage.bucket(bucketname).file('./' + filename).download().then( () => {
            console.log(fileName + ' uploaded');
            res.json(fileName + ' uploaded');
       
        }).catch(error => {
            console.error(`Error occured during images uploading: ${error}`);
            res.json(`Error occured during images uploading: ${error}`);
        });
        */
    }

         
}

exports.putDrives = function(req, res, next){
 
    /*
    App key
sdau6fqezm7nvye
App secret
hddcrw6jgb616ie

    */

    
    if(req.params.id==='dropbox')
    {
        var TOKEN='sl.A6kWflqUroUjGQoSL4zDs4e5KHzwTqMdqEguxeUh-nSE9-c8CZ3uFFkF98MpCyu7XpkIma0-SvWknG56n0LMMflV0BHCF_HkMVnXfqWFyaFCEG2PM5xVTD3RRertr-yYEXl-Cw8'

        fs.readFile('Calentamiento.pdf', 'utf8', function (err, data) {
            const req = https.request('https://content.dropboxapi.com/2/files/upload', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${TOKEN}`,
                    'Dropbox-API-Arg': JSON.stringify({
                        'path': '/uploadedFiles/archivo1/Calentamiento.pdf',
                        'mode': 'overwrite',
                        'autorename': true, 
                        'mute': false,
                        'strict_conflict': false
                    }),
                    'Content-Type': 'application/octet-stream',
                }
            }, (res) => {
                console.log("statusCode: ", res.statusCode);
                console.log("headers: ", res.headers);
                res.json(res.headers);
        
                res.on('data', function(d) {
                    process.stdout.write(d);
                });
            });
        
            req.write(data);
            req.end();
        });


      
    }
    

}