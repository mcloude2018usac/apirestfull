var mongoose =require("mongoose");
var Facultadmateria3Schema = new mongoose.Schema({
    idtipounidad   		: { type : String, required : true },
    idunidadacademica   		: { type : String, required : true },
    lenguaje	: { type : Boolean },
    matematica	: { type : Boolean },
    fisica	: { type : Boolean },
    biologia	: { type : Boolean },
    quimica	: { type : Boolean },
    date 		: { type: Date, default: Date.now }
    ,usuarionew	: { type : String },      usuarioup	: { type : String }
}, {
    timestamps: true
});
 

/* Export model for application usage */
module.exports = mongoose.model('Facultadmateria3', Facultadmateria3Schema);
