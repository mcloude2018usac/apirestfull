var mongoose =require("mongoose");


    var EstudianteovSchema 		=	new  mongoose.Schema({
        bo_orientacion   		: { type : String},
        nombre2   		: { type : String},
        nombre2   		: { type : String},
        apellido1   		: { type : String},
        apellido2   		: { type : String},
        apellido3   		: { type : String},
        direccion   		: { type : String},
        fechanac   		: { type : String},
                   genero: { type : String},
                   estado: { type : String},
                   telcasa: { type : String},
                   telcel: { type : String},
                   colegio: { type : String},
                   carrera: { type : String},
                   faplica:{ type : String},
                   fultimo:{ type : String}
                 
        
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Estudianteov', EstudianteovSchema);

