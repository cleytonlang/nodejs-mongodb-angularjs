//setando a apiKey da API gerada no site
let apikey = '36fc2932';
let clients = require('restify-clients');
let client = clients.createJsonClient({
    url: "http://www.omdbapi.com"
});

let requisicoes = {}
requisicoes.buscarLivro = function(res, req, callback) {
    client.get('/?apikey=' + apikey + '&t=' + req.query.livro, callback);
}

module.exports = requisicoes