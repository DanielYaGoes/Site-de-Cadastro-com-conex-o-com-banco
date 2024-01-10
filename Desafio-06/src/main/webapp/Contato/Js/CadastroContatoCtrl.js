
angular.module("ListaDePessoas").controller("CadastroContatoCtrl", function ($scope, $routeParams, $location,contatosAPI, pessoasAPI) {


    $scope.voltarParaTelaDeEditarPessoa = function (){

        $location.path("/editarPessoa/"+$routeParams.IdPessoa)
    }

    $scope.adicionarContato = function (nome,email,telefone){
        contato = new Contato()
        contato.email = email
        contato.nome =  nome
        contato.telefone = telefone

        pessoasAPI.retornaPessoa($routeParams.IdPessoa).then((data)=>{
            contato.idPessoa = data.data.id
            contatosAPI.adicionarContato(contato)
            pessoa = new Pessoa()
            pessoa = data.data;
            pessoa.contatos.push(contato)
            listadecontatos = pessoa.contatos
        })

        alert("contato Salvo")

        $scope.nome = '';
        $scope.email = '';
        $scope.telefone = '';

    }


})