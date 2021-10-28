var mongoose =require("mongoose");
    var FrmmovildreportesSchema 		=	new  mongoose.Schema({
        idempresa		: { type : String, required : true },    
        idmovil	: { type : String, required : true, ref:'Frmmovil' },
        type   		: { type : String, required : true  },
      
        nombre   		: { type : String, required : true },
        order:	 { type : Number, required : true },
        title:  { type : String, required : true },
        estado	: { type : String, required : true },


 
      
      formulario		: { type : String}, 
      tipo	: { type : String },  
      idformulario		: { type : String  , ref:'Frmmovil' },  

      
      funcionget   		: { type : String},
      filtroextra:  { type : String},



        typegraf   		: { type : String },
        typegraf   		: { type : String },
        ordentipo: { type : String },
        colores1: { type : String },
        colores2: { type : String },
        camposfiltro		: { id	: { type : String },   nombre	: { type : String }   },
        camposreporte:{    id	: { type : String},   nombre		: { type : String }, },


        campox:{    id	: { type : String},   nombre		: { type : String }, },
        campoy:{    id	: { type : String},   nombre		: { type : String }, },



         nombrex:  { type : String},
         nombrey:  { type : String},
  

  
         
         tipoconteo:  { type : String},
         
         esproceso :{ type : Number},

        
        usuarionew	: { type : String },      usuarioup	: { type : String }}, {
        timestamps: true
        });


      


module.exports = mongoose.model('Frmmovildreportes', FrmmovildreportesSchema);