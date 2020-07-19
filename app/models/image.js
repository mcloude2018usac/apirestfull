var mongoose =require("mongoose");
 

/*
  "desc": "Amrum!",
        "originalName": "18645529_1896463043974492_8029820227527114752_n.jpg",
        "filename": "image-1503922492005",
        "created": "2017-08-28T12:14:52.009Z",
        "url": "http://localhost:3000/images/59a4093c8068343d9b187d6c"
*/
var ImageSchema = new mongoose.Schema({
   img: Buffer
   , contentType: String
 
}, {
  timestamps: true
});

module.exports = mongoose.model('Image', ImageSchema);