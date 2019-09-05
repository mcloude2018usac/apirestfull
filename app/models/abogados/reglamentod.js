var mongoose =require('mongoose');
var ReglamentodSchema = new mongoose.Schema({
    idempresa: {        type: String,        required: true    }, 
    idreglamento: {        type: String,        required: true    }, 
    notitulo: {        type: Number   }, 
    titulo: {        type: String   }, 
  
    nocapitulo: {        type: Number   }, 
    capitulo: {        type: String   }, 
    noarticulo: {        type: Number   }, 
    articulo: {        type: String   }, 
    
   
   
    usuarionew	: { type : String },      usuarioup	: { type : String },
  
  
}, {
    timestamps: true
});

module.exports = mongoose.model('Reglamentod', ReglamentodSchema);