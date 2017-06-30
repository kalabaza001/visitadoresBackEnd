exports = module.exports = function(app, mongoose) {

	var visitadorSchema = new mongoose.Schema({
		id: 		{type: String},
		nombre: 	{type: String},
		apellido: 	{type: String},
		cedula: 	{type: String},
		mail: 		{type: String},
		password: 	{type: String},
		foto: 		{type: String},
		direccion: 	{type: String},
		latitud: 	{type: String},
		longitud: 	{type: String},
		telefono: 	{type: String},
		celular: 	{type: String}
	});

	mongoose.model('Visitador', visitadorSchema);
	
};
