var mongoose =require("mongoose");

var Image2frmSchema = new mongoose.Schema({
   img: Buffer,
   contentType: String,
   nombre: String,
   tamano: Number,
   id: String,
   idformulario: String,
   idcampo: String,
   idpapa0: String,
   idpapa: String,
   idempresa: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Image2frm', Image2frmSchema);