var mongoose =require('mongoose');
var MarketemailSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    }, 
    titulo: {
        type: String,
        required: true
    }, 
    texto: {
        type: String,
        required: false
    },
    f1: {       type: String   },
    f2: {       type: String   },
    estado: {       type: String   }
  
}, {
    timestamps: true
});

module.exports = mongoose.model('Marketemail', MarketemailSchema);