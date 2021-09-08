const db = require('../database/models');

const indexController = {
    'main': (req, res, next) => {
        res.render('index');
    },
    'user': (req, res, next) => {
        let usuario = {
            name: req.body.nombre,
            age: req.body.edad,
            email: req.body.email,
            conocimientosPrevios: req.body.conocimientosPrevios,
            inversionesAnteriores: req.body.inversionesAnteriores,
            miembroIEEE: req.body.miembroIEEE,
        };
        db.Registro.create({
                ...usuario,
            })
            .then(resultado => {
                res.render("agradecimiento")
            })
            .catch(err => {
                res.send("error!: " + err)
            })
    },
}

module.exports = indexController;