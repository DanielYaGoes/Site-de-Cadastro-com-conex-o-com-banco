var idPessoa;
var listadecontatos = []

angular.module("ListaDePessoas").controller("PessoaCtrl", function ($scope ,$location,pessoasAPI ) {


    $scope.listadepessoas = []
    $scope.listadecontatos = listadecontatos
    $scope.pessoa = new Pessoa();


    var carregarPessoas = function () {
        pessoasAPI.retornaPessoas().then((data) => {
            $scope.listadepessoas = data.data

        })

    }

    $scope.irParaTelaDeCadastro = function () {
        $location.path("/cadastrarPessoa" )

    }


    $scope.irParaTelaDeEditarPessoa = function (pessoa) {
        $location.path("/editarPessoa/" + pessoa.id)

    }



    $scope.excluirPessoa = function (pessoa) {
        pessoasAPI.excluirPessoa(pessoa.id)
        location.reload()
    }


    carregarPessoas()

})

