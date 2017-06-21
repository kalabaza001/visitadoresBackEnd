exports = module.exports = function(app, mongoose) {

	var doctorSchema = new mongoose.Schema({
		id: 			{type: Number},
		nombre: 		{type: String},
		apellido: 		{type: String},
		especialidad: 	{type: Number},
		telefono: 		{type: Number},
		celular : 		{type: String},
		direccion : 	{type: String},
		latitud: 		{type: String},
		longitud: 		{type: String},
		mail : 			{type: String},
		visitasProgramadas : {type: Number},
		visible : 		{type: Boolean}
	});

	mongoose.model('Doctor', doctorSchema);
	
};
