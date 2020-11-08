var mongoose =require("mongoose");

var ImageSchema = new mongoose.Schema({
   img: Buffer,
   contentType: String,
   nombre: String,
   tamano: Number,
   idpapa: String,
   idpapa0: String,
   idempresa: String

 
}, {
  timestamps: true
});

module.exports = mongoose.model('Image', ImageSchema);