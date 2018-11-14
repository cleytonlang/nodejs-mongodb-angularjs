//rotas de usuários
const express = require('express')
const app = express()
const router = express.Router()

//require model de usuários
const Usuario = require('../models/Usuario')

//buscar usuario
router.get('/usuarios', (req, res) => {

    Usuario.find({ login: req.query.login, senha: req.query.senha }).lean().exec(function(e, dados) {

        if (dados[0]) {
            res.json(dados[0]);
            res.end();
        } else {
            res.json({ msg: "Este usuário não existe no sistema" })
        }

    });

})

//cadastrar usuario
router.post('/usuarios', (req, res) => {

    //verifica se o usuário já existe
    Usuario.find({ login: req.body.login }).lean().exec(function(e, dados) {
        if (dados[0]) {

            res.json({ msg: "Este usuário já tem cadastro no sistema. Cadastre outro!" })

        } else {

            //cadastrando um novo usuario
            const usuario = new Usuario(req.body)
            usuario.save().then(usuario => {
                res.status(200).json(usuario)
            }).catch(err => {
                res.status(400).json({
                    code: 400,
                    msg: err
                })
            })

        }

    });
})

module.exports = router