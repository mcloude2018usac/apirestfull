var mongoose =require("mongoose");

var Imagessl2Schema = new mongoose.Schema({
   img: Buffer,
   contentType: String,
   nombre: String,
   tamano: Number

 
}, {
  timestamps: true
});

module.exports = mongoose.model('Imagessl2', Imagessl2Schema);