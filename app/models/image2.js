var mongoose =require("mongoose");

var Image2Schema = new mongoose.Schema({
   img: Buffer,
   contentType: String,
   nombre: String,
   tamano: Number

 
}, {
  timestamps: true
});

module.exports = mongoose.model('Image2', Image2Schema);