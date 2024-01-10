const UrlCriacao = "http://localhost:8080/desafio06/cadastro/criar"
const UrlLista = "http://localhost:8080/desafio06/cadastro/get"
const UrlEdicao = "http://localhost:8080/desafio06/cadastro/edit"
const UrlExcluir = `http://localhost:8080/desafio06/cadastro/delete/`;

angular.module("ListaDePessoas").factory("pessoasAPI", function ($http) {
    var _retornaPessoas = function () {
        return $http.get(UrlLista)
    }

    var _adicionarPessoa = function (pessoa) {
        return $http.post(UrlCriacao, pessoa)
    }

    var _salvarPessoa = function (pessoa) {
        return $http.post(UrlEdicao, pessoa)
    }

    var _retornaPessoa = function (id) {
        return $http.get(`http://localhost:8080/desafio06/cadastro/get/${id}`)
    }

    var _excluirPessoa = function (id){
        $http.delete("http://localhost:8080/desafio06/cadastro/delete/" + id)
    }


    return {
        retornaPessoas: _retornaPessoas ,
        adicionarPessoa: _adicionarPessoa,
        salvarPessoa: _salvarPessoa,
        retornaPessoa:  _retornaPessoa,
        excluirPessoa: _excluirPessoa
    }

})
