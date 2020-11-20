module.exports = function (app) {
    const usuarios = require('../controlers/usuariosControler')
    app.route('/usuarios')
        .get(usuarios.listAll)
        .post(usuarios.createOne)
}