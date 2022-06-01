const Registro = require('../model/registro');

exports.listAll = function(req, res, next) {

    Registro.find( (err, data) => {

        if (err) {
            return res.status(406).json({
                "error": err
            })
        }

        return res.status(200).json({
            "response": data
        })

    })

}


exports.post = function(req, res, next) {

    let registro = new Registro(req.body);

    registro.save( (err, result) => {
        if (err) {
            return res.status(406).json({
                "error": err
            })
        }

        return res.status(200).json({
            "response": result
        })

    })

}