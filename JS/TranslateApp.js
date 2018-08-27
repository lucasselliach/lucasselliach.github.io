angular.module("LucasSelliachWebSite").config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('English', {
        //Titulo
        LucasSelliachWebSite_Titulo: 'Lucas Selliach',
        LucasSelliachWebSite_Introducao: 'Intro',
        LucasSelliachWebSite_Estudos: 'Studies',
        LucasSelliachWebSite_Trabalhos: 'Works',
        LucasSelliachWebSite_Contatos: 'Contact',
        LucasSelliachWebSite_Idioma: 'Language',

        //Estudos
        LucasSelliachWebSite_Estudos_Principal: 'Professional expertise on system development, architecture and Web development.',
        LucasSelliachWebSite_Estudos_Front: 'Development of HTML5/CSS3, Javascript, JQuery, Typescript e AngularJS. Knowledgement in Bootstrap, Materialize or Angular-Material with responsive disign; AJAX, JSON, XML and WEBSOCKET.',
        LucasSelliachWebSite_Estudos_Back: 'Expertise in ASPNET (4.0+ e core). MVC, WebApi, WPF, Entity Framework, IoC(Unity, Ninject...), Mapper, DDD, TDD, BDD, Design Patterns, T-SQL (Mysql, SqlServer), others',  

        //Projetos/Trabalhos
        LucasSelliachWebSite_Trabalhos_Projeto01_Titulo: 'Docker and VS',
        LucasSelliachWebSite_Trabalhos_Projeto01_Descricao: 'An integration exemple using visual studio and the plug-in Docker for VS15+',
        LucasSelliachWebSite_Trabalhos_Projeto02_Titulo: 'PonixProject',
        LucasSelliachWebSite_Trabalhos_Projeto02_Descricao: 'A project exemple about sale and rent real estate, where the user can make CRUD of them. Using HTML5, CSS3, ANGULAR2, TYPESCRIPT in FRONT and ASP.net Webapi2 with MYSQL to BACK.',
        LucasSelliachWebSite_Trabalhos_Projeto03_Titulo: 'General Architecture',
        LucasSelliachWebSite_Trabalhos_Projeto03_Descricao: 'Deep study about architecture. OOP, SOLID, CLEANCODE, PATTERNS, DRY, KISS, YAGNI, DDD, CQRS, TEST, TDD, BDD',
        LucasSelliachWebSite_Trabalhos_ProjetoLink: 'Project Link',

        LucasSelliachWebSite_Footer_Sobre: 'About',
        LucasSelliachWebSite_Footer_Sobre_Yo: 'Lucas Selliach is a system developer who got graduates in computer science at UNIVALI, university based in Itajaí, class of 2013. By being in love with what he do, he is always seeking for more knowledge to improve his skills and overcome challenges. On 2008 started programming ASP.NET, platform which he still working. After has joined FRONTEND development discovered a new passion',
        LucasSelliachWebSite_Footer_Pesquisas: 'Researches',
        LucasSelliachWebSite_Footer_Contato: 'Contact'
    });

    $translateProvider.translations('Português', {
        //Titulo
        LucasSelliachWebSite_Titulo: 'Lucas Selliach',
        LucasSelliachWebSite_Introducao: 'Intro',
        LucasSelliachWebSite_Estudos: 'Estudos',
        LucasSelliachWebSite_Trabalhos: 'Trabalhos',
        LucasSelliachWebSite_Contatos: 'Contato',
        LucasSelliachWebSite_Idioma: 'Idioma',

        //Estudos
        LucasSelliachWebSite_Estudos_Principal: 'Profissional com experiência na área de dev de sistemas, especialista em arquitetura e desenvolvimento Web.',
        LucasSelliachWebSite_Estudos_Front: 'Desenvolvimento com HTML5/CSS3, Javascript, JQuery, Typescript e AngularJS. Além de utilizar Bootstrap, Materialize ou Angular-Material com disign responsivo. Conhecimento gerais de AJAX, JSON, XML e WEBSOCKET.',
        LucasSelliachWebSite_Estudos_Back: 'Especialidade em ASPNET (4.0+ e core). Conhecimento em MVC, WebApi, WPF, Entity Framework, IoC(Unity, Ninject...), Mapper, DDD, TDD, BDD, Design Patterns, T-SQL (Mysql, SqlServer) entre todos. ',  

        //Projetos/Trabalhos
        LucasSelliachWebSite_Trabalhos_Projeto01_Titulo: 'Docker e VS',
        LucasSelliachWebSite_Trabalhos_Projeto01_Descricao: 'Um exemplo de integração utilizando o visual studio e o plugin Docker for VS15+',
        LucasSelliachWebSite_Trabalhos_Projeto02_Titulo: 'PonixProject',
        LucasSelliachWebSite_Trabalhos_Projeto02_Descricao: 'Um exemplo de um pequeno projeto sobre vendas e aluguéis de imóveis, onde o usuário pode manter um CRUD do imóvel e alterar o status dele. Utilizando HTML5, CSS3, ANGULAR2, TYPESCRIPT no FRONT e ASP.net Webapi2 com MYSQL para BACK.',
        LucasSelliachWebSite_Trabalhos_Projeto03_Titulo: 'Arquitetura Geral',
        LucasSelliachWebSite_Trabalhos_Projeto03_Descricao: 'Estudo aprofundado sobre arquitetura. OOP, SOLID, CLEANCODE, PATTERNS, DRY, KISS, YAGNI, DDD, CQRS, TEST, TDD, BDD',
        LucasSelliachWebSite_Trabalhos_ProjetoLink: 'Link Projeto',

        LucasSelliachWebSite_Footer_Sobre: 'Sobre',
        LucasSelliachWebSite_Footer_Sobre_Yo: 'Lucas Selliach é desenvolvedor de sistemas, formado em ciência da computação pela universidade do vale do itajai, ano 2013. Apaixonado pelo que faz, busca conhecimento para estar sempre atualizado e gosta de superar desafios. Iniciou em ASP.NET em 2008 e permanece desenvolvendo nessa plataforma até hoje.Aderiu ao desenvolvimento FRONT e descobriu uma nova paixão.',
        LucasSelliachWebSite_Footer_Pesquisas: 'Pesquisas',
        LucasSelliachWebSite_Footer_Contato: 'Contato'
    });

    $translateProvider.preferredLanguage('Português');
}]);

angular.module("LucasSelliachWebSite").controller("TranslateController", function($scope, $translate) {

    $scope.select = {
        value: 'Português',
        choices: ['Português', 'English']
    };

    $scope.selectedItemChanged = function (valueSelected) {
        console.log(valueSelected);
        $translate.use(valueSelected);
    }
});


