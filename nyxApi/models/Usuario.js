const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsuarioSchema = new Schema({
    login: {
        type: String
    },
    senha: {
        type: String
    },
    criado_em: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'Usuarios'
})

module.exports = mongoose.model('Usuario', UsuarioSchema)