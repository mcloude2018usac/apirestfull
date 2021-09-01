var mongoose =require("mongoose");
    var FrmmovildreportesSchema 		=	new  mongoose.Schema({
        idempresa		: { type : String, required : true },    
        idmovil	: { type : String, required : true, ref:'Frmmovil' },
        type   		: { type : String, required : true  },
      
        nombre   		: { type : String, required : true },
        order:	 { type : Number, required : true },
        title:  { type : String, required : true },
        estado	: { type : String, required : true },


 
      
      formulario		: { type : String, required : true }, 
      tipo	: { type : String, required : true },  
      idformulario		: { type : String  , ref:'Frmmovil' },  

      camposfiltro		: { id	: { type : String },   nombre	: { type : String }   },
      funcionget   		: { type : String},
      filtroextra:  { type : String},



        typegraf   		: { type : String },
  
        camposreporte:[{
            idcampo	: { type : String, required : true },
            nombre		: { type : String, required : true },
         
           
         
         }],
         campox:{
            idcampo	: { type : String, required : true },
            nombre		: { type : String, required : true },
         
           
         
         },
         campoy:{
            idcampo	: { type : String, required : true },
            nombre		: { type : String, required : true },
         
           
         
         },
         nombrex:  { type : String},
         nombrey:  { type : String},
  

  
         
         tipoconteo:  { type : String},
         
         esproceso :{ type : Number},

        
        usuarionew	: { type : String },      usuarioup	: { type : String }}, {
        timestamps: true
        });


      


module.exports = mongoose.model('Frmmovildreportes', FrmmovildreportesSchema);