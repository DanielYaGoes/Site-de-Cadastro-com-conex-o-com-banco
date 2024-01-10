angular.module("ListaDePessoas").config(function ($routeProvider) {
    $routeProvider.when('/listaPessoas', {
        templateUrl: '/Pessoa/html/Tabela.html',
        controller: 'PessoaCtrl'

    }).when('/cadastrarPessoa', {
        templateUrl: '/Pessoa/html/CadastroPessoa.html',
        controller: 'CadastroCtrl'
    }).when('/editarPessoa/:IdPessoa', {
        templateUrl: '/Pessoa/html/EdicaoDePessoa.html',
        controller: 'PerfilCtrl'

    }).when('/editarContato/:IdPessoa/:IdContato',{
        templateUrl: '/Contato/html/EditarContato.html',
        controller: 'EditarContatoCtrl'

    }).when('/cadastrarContato/:IdPessoa',{
        templateUrl: '/Contato/html/CadastroContato.html',
        controller: 'CadastroContatoCtrl'
    })

})

