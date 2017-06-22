//sucursal.js
exports = module.exports = function(app, mongoose) {

	var sucursalSchema = new mongoose.Schema({
		id: 			{type: Number},
		nombre: 		{type: String},
		idMutualista: 	{type: String},
		direccion: 		{type: String},
		latitud: 		{type: String},
		longitud: 		{type: String},
		telefono : 		{type: String}
	});

	mongoose.model('Sucursal', sucursalSchema);
	
};