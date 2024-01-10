angular.module("ListaDePessoas").controller("CadastroCtrl", function ($scope , pessoasAPI,$location) {

    $scope.adicionarPessoa = function (nome, cpf, email, telefone, cidade, rua, quadra, lote) {

        pessoa = new Pessoa()
        pessoa.setNome(nome);
        pessoa.setCpf(cpf);
        pessoa.setEmail(email);
        pessoa.setTelefone(telefone);
        pessoa.setCidade(cidade);
        pessoa.setRua(rua);
        pessoa.setQuadra(quadra);
        pessoa.setLote(lote);


        alert("Usuario salvo")

        pessoasAPI.adicionarPessoa(pessoa).then((data) => {
            $scope.irParaTabela();
        })

    }

    $scope.irParaTabela = function () {
        $location.path("/listaPessoas")

    }

    $scope.cpf = null;

    $scope.validarCPF = function(cpf) {
        // Remova caracteres não numéricos do CPF
        cpf = cpf.replace(/[^\d]/g, '');

        // Verifique se o CPF tem 11 dígitos
        if (cpf.length !== 11) {
            return false;
        }

        // Verifique se todos os dígitos são iguais (CPF inválido)
        if (/^(\d)\1+$/.test(cpf)) {
            return false;
        }

        // Calcule os dígitos verificadores
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

        // Verifique se os dígitos calculados coincidem com os dígitos informados
        return parseInt(cpf.charAt(9)) === digito1 && parseInt(cpf.charAt(10)) === digito2;
    };

})


