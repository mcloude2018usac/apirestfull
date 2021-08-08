 var mongoose =require("mongoose");
 var frmactividadSchema 		=	new  mongoose.Schema({
  idempresa		: { type : String, required : true },  
  idpapa		: { type : String, required : true,ref:'' },  
  orden		: { type : Number, required : true },  
  actor		:{    id	: { type : String},   nombre	: { type : String}        },
  clase		: { type : String, required : true },  
  nombre		: { type : String, required : true },  
  tipo		: { type : String, required : true },  
  etapa		: { type : String, required : true },  
  conector		: { type : String, required : true },  
  tiempomin		: { type : String, required : true },  
  descripciong		: { type : String },  
  usuarios:[{
    email	: { type : String},
    nombre		: { type : String },
    correo	: { type : String},
   

 }],
  correousuarios		: { type : String },  
  nombreusuarios		: { type : String}, 
  tiempomax		: { type : String, required : true },  
  camposvisible		: { id	: { type : String },   nombre	: { type : String }   },
  camposmodificables		:  { id	: { type : String },   nombre	: { type : String }   },
  camposlectura		: { id	: { type : String },   nombre	: { type : String }   },
  camposimprime		:  { id	: { type : String },   nombre	: { type : String }   },
  estado		: { type : String, required : true },  
  usuarionew		: { type : String },  
  usuarioup		: { type : String },  
    }, {
    timestamps: true
    }); 
module.exports = mongoose.model('frmactividad', frmactividadSchema);
