//criando o servidor
const express = require('express')
const mongoose = require('mongoose')

const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = 8080

//conectando no mongodb
mongoose.connect('mongodb://localhost/testenyx').then(() => {
    console.log('Conectado no MongoDB');
}).catch(err => {
    console.log(err)
    process.exit(1)
})

const usuariosRoutes = require('./routes/usuarios')
const livrosRoutes = require('./routes/livros')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/usuario', usuariosRoutes)
app.use('/livro', livrosRoutes)

app.listen(PORT, () => {
    console.log('Servidor Node startado');
})