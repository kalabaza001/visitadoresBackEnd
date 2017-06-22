//sucursales.js
var mongoose = require('mongoose');
var DB  = mongoose.model('Sucursal');

//POST - Insert a new Doctor in the DB
//TEST COMMIT
exports.addSucursal = function(req, res) {
	console.log('POST Sucursal');
	console.log(req.body);

	var sucursal = new DB({
		nombre:    		req.body.nombre,
		idMutualista: 	req.body.apellido,
		direccion:   	req.body.direccion,
		latitud:  		req.body.latitud,
		longitud:  		req.body.longitud,
		telefono:    	req.body.mail
	});

	sucursal.save(function(err, sucursal) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(sucursal);
	});
};