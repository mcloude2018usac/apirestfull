var mongoose =require("mongoose");

var ImageSchema = new mongoose.Schema({
   img: Buffer,
   contentType: String,
   nombre: String,
   tamano: Number

 
}, {
  timestamps: true
});

module.exports = mongoose.model('Image', ImageSchema);