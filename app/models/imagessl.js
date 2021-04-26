var mongoose =require("mongoose");

var ImagesslSchema = new mongoose.Schema({
   img: Buffer,
   contentType: String,
   nombre: String,
   tamano: Number

 
}, {
  timestamps: true
});

module.exports = mongoose.model('Imagessl', ImagesslSchema);