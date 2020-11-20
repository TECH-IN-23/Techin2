const { response } = require("express") // arquivo controller //

exports.listAll = (req, res) => {
    let usuarios = [
        {
            nome: 'teste 01',
            email: "teste1@123.com"
        },
        {
            nome: 'teste 02',
            email: "teste2@123.com"
        },
    ]
    res.send(usuarios)    
}

exports.createOne = (req, res) => {
    let response = {
        message: 'Usuário criado com sucesso!',
        data: req.body        
    }
    res.send(response)


}