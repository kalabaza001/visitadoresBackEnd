//sucursales.js
var mongoose = require('mongoose');
var DB  = mongoose.model('Sucursal');

//POST - Insert a new Sucursal in the DB
//TEST COMMIT
exports.addSucursal = function(req, res) {
	console.log('POST Sucursal');
	console.log(req.body);

	var sucursal = new DB({
		idMutualista: 	req.body.idMutualista,
		nombre:    		req.body.nombre,
		direccion:   	req.body.direccion,
		latitud:  		req.body.latitud,
		longitud:  		req.body.longitud,
		telefono:    	req.body.telefono
	});

	sucursal.save(function(err, sucursal) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(sucursal);
	});
};


//GET - Return all Sucursales in the DB
exports.findAllSucursales = function(req, res) {
	DB.find(function(err, sucursales) {
    if(err) res.send(500, err.message);

    console.log('GET /sucursales')
		res.status(200).jsonp(sucursales);
	});
};

//GET - Return a Sucursal with specified ID
exports.findById = function(req, res) {
	DB.findById(req.params.id, function(err, sucursal) {
    if(err) return res.send(500, err.message);

    console.log('GET /sucursal/' + req.params.id);
		res.status(200).jsonp(sucursal);
	});
};

//PUT - Update a register already exists
exports.updateSucursal = function(req, res) {
	DB.findById(req.params.id, function(err, sucursal) {
		sucursal.nombre		= req.body.nombre;
		sucursal.direccion	= req.body.direccion;
		sucursal.latitud	= req.body.latitud;
		sucursal.longitud 	= req.body.longitud;
		sucursal.telefono   = req.body.telefono;


		sucursal.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(sucursal);
		});
	});
};


//DELETE - Delete a sucursal with specified ID
exports.deleteSucursal = function(req, res) {
	DB.findById(req.params.id, function(err, sucursal) {
		sucursal.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp("Se borro bien");
		})
	});
};

/*POST*/
/**
    {
        "_id": "594b2a995138265829000001",
        "nombre": "Juan Pablo 2do",
        "direccion": "Bv Artigas 1818",
        "latitud": "34.1589",
        "longitud": "45.8982",
        "__v": 0
    }
*/

/*GET*/
// http://localhost:3000/api/sucursales

