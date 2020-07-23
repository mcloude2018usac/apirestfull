var getImagesruta= function(op){
    if((op).indexOf('/')>=0)
    {

        var aar=op.split('/');
        return aar[3]
    }
    else
    {
        return ''
    }
}
module.exports = {
    getImagesruta: getImagesruta
   
      }