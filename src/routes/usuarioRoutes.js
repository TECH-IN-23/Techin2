module.exports = function (app) {
  const usuarios = require('../controlers/usuariosControler.js')
  app.route('/usuarios')
    .get(usuarios.listAll)
    .post(usuarios.createOne)
}
