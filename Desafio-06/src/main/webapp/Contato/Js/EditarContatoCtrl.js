
angular.module("ListaDePessoas").controller("EditarContatoCtrl", function ($scope, $routeParams, $location,contatosAPI) {

    var carregarInformacoes =  function (id){
        contatosAPI.retornaContato(id).then((data)=>{
            $scope.nomeEdicao = data.data.nome
            $scope.emailEdicao = data.data.email
            $scope.telefoneEdicao = data.data.telefone
        })

    }

    $scope.voltarParaTelaDeEditarPessoa = function (){

        $location.path("/editarPessoa/"+$routeParams.IdPessoa)
    }

    $scope.editarContato = function (nome,email,telefone){
        contatosAPI.retornaContato($routeParams.IdContato).then((data)=>{
            data.data.nome = nome;
            data.data.email = email;
            data.data.telefone = telefone;

            contatosAPI.salvarContato(data.data).then((data)=>{})

            alert("Contato Salvo")

        })
    }

    carregarInformacoes($routeParams.IdContato)

})