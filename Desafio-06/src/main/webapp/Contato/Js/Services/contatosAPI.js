const UrlCriacaoContato = "http://localhost:8080/desafio06/contatos/criar"
const UrlEdicaoContato = "http://localhost:8080/desafio06/contatos/edit"


angular.module("ListaDePessoas").factory("contatosAPI", function ($http) {

    var _adicionarContato = function (contato) {
        return $http.post(UrlCriacaoContato, contato)
    }

    var _salvarContato = function (contato) {
        return $http.post(UrlEdicaoContato,contato)
    }

    var _retornaContato = function (id) {
        return $http.get(`http://localhost:8080/desafio06/contatos/get/${id}`)
    }

    var _excluirContato = function (id) {
        return $http.delete(`http://localhost:8080/desafio06/contatos/delete/${id}`)
    }


    return {
        retornaContato: _retornaContato ,
        adicionarContato: _adicionarContato,
        salvarContato: _salvarContato,
        excluirContato: _excluirContato

    }

})
