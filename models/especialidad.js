exports = module.exports = function(app, mongoose) {

	var especialidadSchema = new mongoose.Schema({
		id: 			{type: Number},
		nombre: 		{type: String}
	});

	mongoose.model('Especialidad', especialidadSchema);
	
};
