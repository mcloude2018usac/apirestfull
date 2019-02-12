var qr = require('qr-image');  

exports.getQR = function(req, res, next){
    if(req.params.key)
    { 
        var code = qr.image(req.params.key, { type: 'svg' });
        res.type('svg');
        code.pipe(res);
    }
    else
    {
        var code = qr.image(new Date().toString(), { type: 'svg' });
        res.type('svg');
        code.pipe(res);

    }    
    
}