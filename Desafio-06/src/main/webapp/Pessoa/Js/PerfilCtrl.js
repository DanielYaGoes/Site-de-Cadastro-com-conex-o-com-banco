angular.module("ListaDePessoas").controller("PerfilCtrl", function ($scope ,pessoasAPI,contatosAPI,$location,$routeParams) {


    var carregarInformações = function (id) {
        pessoasAPI.retornaPessoa(id).then((data) => {
            $scope.listadecontatos = data.data.contatos
            $scope.nomeEdicao = data.data.nome
            $scope.cpfEdicao = data.data.cpf
            $scope.emailEdicao = data.data.email
            $scope.telefoneEdicao = data.data.telefone
            $scope.cidadeEdicao = data.data.endereco.cidade
            $scope.ruaEdicao = data.data.endereco.rua
            $scope.quadraEdicao = data.data.endereco.quadra
            $scope.loteEdicao = data.data.endereco.lote

        })
    }

    var carregarContatos = function (id){

        pessoasAPI.retornaPessoa(id).then((data) => {
            $scope.listadecontatos = data.data.contatos
        })

    }

    $scope.irParaTabela = function () {
        $location.path("/listaPessoas")

    }


    $scope.salvarPessoa = function (nome, cpf, email, telefone, cidade, rua, quadra, lote) {
        pessoasAPI.retornaPessoa($routeParams.IdPessoa).then((data) => {


            pessoa = new Pessoa(nome, cpf, email, telefone, cidade, rua, quadra, lote)
            pessoa.setId(data.data.id)
            pessoa.setContatos(data.data.contatos)

            alert("Usuario salvo")

            pessoasAPI.salvarPessoa(pessoa).then((data) => {})


        })

    }

    $scope.irParaTelaDeEditarContato = function (contato){
        $location.path("/editarContato/" + $routeParams.IdPessoa + "/" + contato.id)


    }

    $scope.irParaTelaDeCriarContato = function (){
        $location.path("/cadastrarContato/" + $routeParams.IdPessoa)
    }

    $scope.excluirContato = function (contato){
            contatosAPI.excluirContato(contato.id).then((data) =>{
                carregarContatos($routeParams.IdPessoa)
            })

    }
        carregarContatos($routeParams.IdPessoa)


    carregarInformações($routeParams.IdPessoa)

    $scope.cpf = null;

    $scope.validarCPF = function(cpf) {

        cpf = cpf.replace(/[^\d]/g, '');

        if (cpf.length !== 11) {
            return false;
        }


        if (/^(\d)\1+$/.test(cpf)) {
            return false;
        }


        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let resto = soma % 11;
        let digito1 = resto < 2 ? 0 : 11 - resto;

        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        resto = soma % 11;
        let digito2 = resto < 2 ? 0 : 11 - resto;


        return parseInt(cpf.charAt(9)) === digito1 && parseInt(cpf.charAt(10)) === digito2;
    };
})