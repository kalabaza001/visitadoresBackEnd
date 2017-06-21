exports = module.exports = function(app, mongoose) {

	var mutualistaSchema = new mongoose.Schema({
		id: 			{type: Number},
		nombre: 		{type: String}
	});

	mongoose.model('Mutualista', mutualistaSchema);
	
};