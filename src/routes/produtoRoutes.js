module.exports = function (app) {
  app.route('/produto')
  .get((req, res) => {
    let.produtos = [
      {
        nome: "teste 01",
        site: "teste 02",
        descricao: "teste 03",
        imagem: "teste 04", 
      },
      {
        nome: "teste 05",
        site: "teste 06",
        descricao: "teste 07",
        imagem: "teste 08", 
      }
    ]
    res.send(produtos)
  })
}
