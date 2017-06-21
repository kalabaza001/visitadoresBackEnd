//mutualista.js
var mongoose = require('mongoose');
var DBMutualista  = mongoose.model('Mutualista');

//POST - Insert a new Mutualista in the DB
exports.addMutualista = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var mutualista = new DBMutualista({
		id: 	req.body.id,
		nombre: req.body.nombre
	});

	mutualista.save(function(err, mutualista) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(mutualista);
	});
};

//GET - Return all Mutualista in the DB
exports.findAllMutualistas = function(req, res) {
	DBMutualista.find(function(err, mutualista) {
    if(err) res.send(500, err.message);

    console.log('GET /mutualistas')
		res.status(200).jsonp(mutualista);
	});
};

//GET - Return a Mutualista with specified ID
exports.findById = function(req, res) {
	DBMutualista.findById(req.params.id, function(err, mutualistas) {
    if(err) return res.send(500, err.message);

    console.log('GET /mutualista/' + req.params.id);
		res.status(200).jsonp(mutualistas);
	});
};

//PUT - Update a register already exists
exports.updateMutualista = function(req, res) {
	DBMutualista.findById(req.params.id, function(err, mutualistas) {
		mutualistas.nombre		= req.body.nombre;
		mutualistas.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(mutualistas);
		});
	});
};

//DELETE - Delete a mutualista with specified ID
exports.deleteMutualista = function(req, res) {
	DBMutualista.findById(req.params.id, function(err, mutualistas) {
		mutualistas.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200);
		})
	});
};


/* POST example */
/* http://localhost:3000/api/mutualistas */
/*
{
		"nombre": "Circulo Catolico de Obreros"
}
*/

/*GET example */
// http://localhost:3000/api/mutualistas