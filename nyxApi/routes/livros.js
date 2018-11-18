//rotas de livros
const express = require('express')
const app = express()
const router = express.Router()

//require model de usuários
const Livro = require('../models/Livro')

//require servico api livros
const omdbapi = require('../services/omdbapi')

//buscar todos os livros
router.get('/livros/all', (req, res) => {
    Livro.find((err, livros) => {
        if (err) {
            res.status(500).json({
                code: 500,
                msg: err
            })
            res.end();
        } else {
            res.json(livros)
        }
    });
})

//buscar livro
router.get('/livros', (req, res) => {
    omdbapi.buscarLivro(res, req, function(err, reqx, resx, retornox) {
        res.json(retornox);
    });
})

//cadastra livro
router.post('/livros', (req, res) => {

    //cadastrando um novo livro
    const livro = new Livro(req.body)
    livro.save().then(livro => {
        res.status(200).json(livro)
    }).catch(err => {
        res.status(400).json({
            code: 400,
            msg: err
        })
    })

})

//excluir livro
router.post('/livros/remover', (req, res) => {
    Livro.remove({ _id: req.body.id }).then(() => {
        res.status(200).json({ msg: "Removido com sucesso!" });
    });
})

module.exports = router