var mongoose =require("mongoose");
 
var EstudiantepcbSchema 		=	new  mongoose.Schema({
        ORIENTACION   		: { type : String},
        IDMATERIA   		: { type : String},
        FECHA_EVALUACION   		: { type : String},
        NO_OPORTUNIDAD   		: { type : String},
        APROBACION   		: { type : String},
        ANIO_EVALUACION   		: { type : String},
        NOMBRES   		: { type : String}
        }, {
        timestamps: true
        });



module.exports = mongoose.model('Estudiantepcb', EstudiantepcbSchema);

