const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LivroSchema = new Schema({
    titulo: {
        type: String
    },
    capa: {
        type: String
    },
    resumo: {
        type: String
    },
    criado_em: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'Livros'
})

module.exports = mongoose.model('Livro', LivroSchema)