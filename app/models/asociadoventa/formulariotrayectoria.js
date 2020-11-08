var mongoose =require("mongoose");
var formulariotrayectoriaSchema 		=	new  mongoose.Schema({
 idempresa		: { type : String, required : true },  
 idorden		: { type : String, required : true,ref:'' },  
 usuariocreador		:{    id	: { type : String},   nombre	: { type : String}  ,   
 email	: { type : String}        },
 usuarioejecutor		:{    id	: { type : String},   nombre	: { type : String}  ,   
 email	: { type : String}        },
 dias		: { type : Number },
 horas		: { type : Number },
 minutos		: { type : Number },
 segundos		: { type : Number },

 tipocreacionorden		: { type : String, required : true },
 nombre		: { type : String, required : true },  
 idform		: { type : String, required : true },
 tipoform	: { type : String, required : true }, 
 tipo2form	: { type : String, required : true }, 
 ejecuta	: { type : String}, 
 estadoorden	: { type : String, required : true }, 
 categoriaform	: { type : String, required : true },
 idactividad		: { type : String, required : true }, 
 actoractividad		:{    id	: { type : String},   nombre	: { type : String}        },
 claseactividad		: { type : String, required : true },  
 nombreactividad		: { type : String, required : true },  
 tipoactividad		: { type : String, required : true },  
 etapaactividad		: { type : String, required : true },  
salioorden: { type : Number, required : true },
 idaccion		: { type : String, required : true },
 tipoaccion		: { type : String, required : true },  
 subtipoaccion		: { type : String, required : true },  
 nombreaccion		: { type : String, required : true },  
 estadoaccion		: { type : String, required : true },  
 actividadsiguienteaccion		:  { id	: { type : String },   nombre	: { type : String }   },

   }, {
   timestamps: true
   }); 
module.exports = mongoose.model('formulariotrayectoria', formulariotrayectoriaSchema);
