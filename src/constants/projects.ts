import { IProject } from '../interfaces/project-interface';

export const projects: IProject[] = [
   {
      id: '1',
      title: 'Lista Fácil',
      img: '/imgs/lista-facil.png',
      imgScreens: [
         '/imgs/telas-lista-facil/tela-1.png',
         '/imgs/telas-lista-facil/tela-2.png',
         '/imgs/telas-lista-facil/tela-3.png',
         '/imgs/telas-lista-facil/tela-4.png',
         '/imgs/telas-lista-facil/tela-5.png',
         '/imgs/telas-lista-facil/tela-6.png',
         '/imgs/telas-lista-facil/tela-7.png',
         '/imgs/telas-lista-facil/tela-8.png',
      ],
      description:
         'Lista Fácil organiza suas compras e calcula o total automaticamente, ajudando no controle do orçamento.',
      urlSite: '',
      urlGithub: 'https://github.com/SterRoque/lista-facil-app',
      descriptionDetails:
         'O Lista Fácil App é um projeto desenvolvido para oferecer uma solução eficiente e intuitiva para a criação e gerenciamento de listas de compras. Com uma interface moderna e funcionalidades que facilitam o planejamento financeiro, o aplicativo ajuda os usuários a economizar tempo e dinheiro de forma prática.',
      technologies: [
         '<strong>Front-end:</strong> React Native, StyleSheet, TypeScript',
         '<strong>Banco de Dados:</strong> SQLite',
      ],
      features: [
         '<strong>Criação de Listas Personalizadas:</strong> Adicione produtos com nome, quantidade e preço unitário.',
         '<strong>Edição Simples:</strong> Modifique ou remova produtos com facilidade.',
         '<strong>Cálculo Automático:</strong> Soma automaticamente os valores dos itens para um melhor controle de gastos.',
      ],

      conclusion:
         'O Lista Fácil App é um projeto inovador que simplifica a experiência de compras, tornando-a mais organizada e econômica. Com tecnologia de ponta e um design intuitivo, ele se destaca como uma solução eficaz para qualquer consumidor.',

      stacks: ['React Native', 'StyleSheet', 'TypeScript', 'Figma', 'SQLite'],
   },

   {
      id: '2',
      title: 'RedePet Web',
      img: '/imgs/redepet-web.png',
      imgScreens: ['/imgs/telas-redepet-web/tela-desktop.png'],
      description: 'Essa é a uma página de download do aplicativo RedePet.',
      descriptionDetails:
         'Essa é uma página de download do aplicativo RedePet que foi desenvolvida para oferecer aos usuários uma experiência intuitiva e eficiente para baixar o aplicativo.',

      urlSite: 'https://redepet.app/',
      urlGithub: '',

      technologies: [
         '<strong>Front-end:</strong> AstroJS, Tailwind, TypeScript',
      ],
      features: [
         'Exibição clara das opções de download para Android e iOS (atualmento somente Android)',
         'Botão de redirecionamento direto para as lojas de aplicativos',
         'Informativo sobre os principais recursos do aplicativo',
      ],

      conclusion:
         'A página de download do RedePet é um ponto fundamental na jornada do usuário, garantindo que ele encontre rapidamente onde baixar o aplicativo e compreenda seus benefícios. Com uma interface moderna, responsiva e objetiva, a página facilita o acesso ao app e contribui para a segurança dos pets. O RedePet continua evoluindo para oferecer cada vez mais funcionalidades e melhorar a experiência de seus usuários.',
      stacks: ['AstroJS', 'Tailwind', 'TypeScript', 'Figma'],
   },
   {
      id: '3',
      title: 'AI Commit Generator',
      img: '/imgs/ai-commit-generator.png',
      imgScreens: [
         // Deixar vazio ou inserir posteriormente as imagens específicas da aplicação
      ],

      description:
         'Extensão para VSCode que gera mensagens de commit com base nas alterações no código usando IA.',

      descriptionDetails:
         'A AI Commit Generator é uma extensão desenvolvida para o VSCode, que utiliza a API do Gemini para gerar automaticamente mensagens de commit com base nas alterações feitas no código. A idéia surgiu da minha própria dificuldade em criar mensagens de commit claras e precisas, e essa ferramenta foi criada para otimizar esse processo. Desenvolvida com a API do VSCode e Typescript, o projeto foi uma oportunidade para aprender sobre o desenvolvimento de extensões para o VSCode, além de integrar IA na análise de código. Hoje, a ferramenta se tornou uma parte essencial do meu fluxo de trabalho diário.',

      urlSite:
         'https://marketplace.visualstudio.com/items/?itemName=SterRoque.ai-commit-generator',
      urlGithub: 'https://github.com/SterRoque/ai-commit-generator',

      technologies: [
         '<strong>API do VSCode:</strong> Integração com a API do Visual Studio Code para desenvolvimento de extensões.',
         '<strong>API do Gemini:</strong> Utilização da API do Gemini para análise de código e geração automática de mensagens de commit.',
         '<strong>TypeScript:</strong> Desenvolvimento da extensão utilizando TypeScript para garantir robustez e escalabilidade.',
      ],

      features: [
         '<strong>Geração Automática de Commit:</strong> A extensão analisa as mudanças no código e gera automaticamente uma mensagem de commit adequada.',
         '<strong>Facilidade de Uso:</strong> Simples de instalar e usar, otimizando o processo de commits no seu fluxo de trabalho.',
         '<strong>Integração com o VSCode:</strong> Aproveita as funcionalidades e extensões nativas do VSCode para facilitar a interação do usuário.',
      ],

      conclusion:
         'O AI Commit Generator foi desenvolvido como uma solução para otimizar o processo de criação de mensagens de commit, utilizando a API do Gemini e a API do VSCode. Esse projeto foi uma excelente oportunidade de aprender mais sobre o desenvolvimento de extensões para o VSCode e integrar inteligência artificial no meu fluxo de trabalho. O resultado é uma ferramenta que hoje uso frequentemente, tornando o processo de commits mais eficiente e inteligente.',

      stacks: ['VSCode API', 'API do Gemini', 'TypeScript'],
   },
   {
      id: '4',
      title: 'Metrópole Garage',
      img: '/imgs/metropole-garage.png',
      imgScreens: [
         // Deixar vazio ou inserir posteriormente as imagens específicas da aplicação
      ],

      description:
         'Desafio técnico para criação de uma garagem de veículos para o FiveM.',

      descriptionDetails:
         'O Metropole Garage é um recurso desenvolvido para o servidor Metrópole na FiveM, com o objetivo de criar uma garagem de veículos dentro do servidor. A solução foi implementada com TypeScript, utilizando também Knex para gerenciar as migrations e o banco de dados com OxMySQL. A garagem permite que os jogadores armazenem seus veículos e retirem-nos com o clique de um botão. Além disso, foi desenvolvido um comando de administração (/car) onde o administrador pode spawnear veículos pelo número da placa ou modelo. A interação com o banco de dados garante que os veículos sejam salvos de forma persistente no servidor.',

      urlSite: '',
      urlGithub: 'https://github.com/SterRoque/metropole-garage',

      technologies: [
         '<strong>Back-end:</strong> TypeScript, Knex, OxMySQL',
         '<strong>FiveM:</strong> Eventos, Funções e Métodos específicos do FiveM',
      ],

      features: [
         '<strong>Armazenamento de Veículos:</strong> Permite que os jogadores guardem seus veículos na garagem e retirem-nos com um botão.',
         '<strong>Comando de Admin:</strong> O administrador pode spawnear veículos usando o comando /car, especificando a placa ou o modelo.',
         '<strong>Banco de Dados:</strong> Utilização do OxMySQL e Knex para armazenar e recuperar dados dos veículos de forma persistente.',
         '<strong>Integração com FiveM:</strong> Uso de funções e eventos específicos do FiveM para interação entre o servidor e o banco de dados.',
      ],

      conclusion:
         'O Metropole Garage foi desenvolvido como parte de um desafio técnico que me proporcionou a oportunidade de aprender e explorar as funções e eventos específicos do FiveM, além de trabalhar com tecnologias como Knex e OxMySQL. O projeto foi uma excelente chance de aprofundar meus conhecimentos na criação de recursos para servidores FiveM, e ainda ganhando experiência prática com o uso de banco de dados e migrations de forma eficiente.',

      stacks: [
         'React',
         'Tailwind CSS',
         'TypeScript',
         'Knex',
         'OxMySQL',
         'FiveM',
      ],
   },
   {
      id: '5',
      title: 'SoftPet',
      img: '/imgs/softpet.png',
      imgScreens: [
         // Adicione aqui posteriormente as imagens específicas da aplicação
      ],

      description:
         'Aplicação web desenvolvida para facilitar o gerenciamento de informações de pets em petshops.',

      descriptionDetails:
         'O SoftPet é uma aplicação web desenvolvida com Next.js, baseada em um layout figma de um desafio técnio. Para fins de estudo, também foi implementado um back-end completo utilizando NestJS, com sistema de autenticação. A plataforma permite o cadastro, edição, exclusão e visualização de registros de pets, além de funcionalidades como paginação e barra de busca. A interface é moderna, responsiva e intuitiva, ideal para petshops que desejam manter as informações organizadas.',

      urlSite: 'https://softpet.netlify.app/',
      urlGithub: 'https://github.com/SterRoque/softpet-frontend',

      technologies: [
         '<strong>Front-end:</strong> Next.js, Tailwind CSS',
         '<strong>Back-end:</strong> NestJS (com autenticação)',
      ],

      features: [
         '<strong>Cadastro de Pets:</strong> Adicione novos pets com dados como nome, raça, idade e tutor responsável.',
         '<strong>Edição e Exclusão:</strong> Atualize ou remova registros com facilidade.',
         '<strong>Listagem com Paginação:</strong> Visualize os pets cadastrados em uma interface organizada, com navegação por páginas.',
         '<strong>Barra de Busca:</strong> Pesquise rapidamente por nome.',
         '<strong>Autenticação:</strong> Sistema de login implementado no back-end com NestJS.',
         '<strong>Interface Responsiva:</strong> Design moderno e adaptável para diferentes dispositivos.',
      ],

      conclusion:
         'O SoftPet é uma solução web criada com fins de estudo e aprendizado, oferecendo recursos úteis para o gerenciamento de pets em petshops. A combinação entre Next.js no front-end e NestJS no back-end garante uma estrutura sólida e escalável para a aplicação.',

      stacks: ['Next.js', 'Tailwind CSS', 'NestJS'],
   },

   {
      id: '6',
      title: 'Agendamento Petshop',
      img: '/imgs/agendamento-petshop.png',
      imgScreens: [
         // Deixar vazio ou inserir posteriormente as imagens específicas da aplicação
      ],

      description:
         'Aplicação desktop criada para facilitar o agendamento de serviços em petshops.',

      descriptionDetails:
         'O Agendamento Petshop é uma aplicação desktop desenvolvida com Electron e Tailwind CSS. O design foi baseado em um layout Figma disponibilizado pela Rocketseat em um curso fullstack — no entanto, a implementação foi feita de forma independente, sem acompanhamento do curso, com o objetivo de praticar os conhecimentos em desenvolvimento de aplicações desktop com Electron. A aplicação permite cadastrar agendamentos contendo informações como nome do tutor, nome do pet, telefone, descrição do serviço, data e hora. Os agendamentos são exibidos de forma organizada para facilitar o controle e visualização.',

      urlSite: '',
      urlGithub: 'https://github.com/SterRoque/agendamento-de-petshop-desktop',

      technologies: [
         '<strong>Front-end:</strong> React, Electron, Tailwind CSS',
      ],

      features: [
         '<strong>Cadastro de Agendamento:</strong> Registre dados como nome do tutor, pet, contato, tipo de serviço, data e hora.',
         '<strong>Listagem de Agendamentos:</strong> Exibição dos compromissos agendados de forma clara e acessível.',
         '<strong>Aplicação Desktop:</strong> Desenvolvida com Electron, roda como software local com uma interface limpa e intuitiva.',
      ],

      conclusion:
         'Esse projeto foi desenvolvido com o intuito de praticar o uso do Electron para criação de aplicações desktop. O uso do layout da Rocketseat foi apenas como base visual. A aplicação oferece uma solução simples e funcional para o gerenciamento de agendamentos em petshops, contribuindo para a organização dos atendimentos.',

      stacks: ['React', 'Electron', 'Tailwind CSS'],
   },

   {
      id: '7',
      title: 'Sintese Proteica App',
      img: '/imgs/sintese.png',
      imgScreens: [
         '/imgs/telas-sintese-proteica/tela-1.png',
         '/imgs/telas-sintese-proteica/tela-2.png',
         '/imgs/telas-sintese-proteica/tela-3.png',
         '/imgs/telas-sintese-proteica/tela-4.png',
         '/imgs/telas-sintese-proteica/tela-5.png',
         '/imgs/telas-sintese-proteica/tela-6.png',
         '/imgs/telas-sintese-proteica/tela-7.png',
         '/imgs/telas-sintese-proteica/tela-8.png',
         '/imgs/telas-sintese-proteica/tela-9.png',
      ],

      description:
         'Aplicativo Educacional voltado para demostrar processo de duplicação, transcrição e tradução do DNA.',

      descriptionDetails:
         'O aplicativo Síntese Proteica é uma ferramenta educacional interativa que visa demonstrar os processos de duplicação, transcrição e tradução do DNA. Com uma interface visual e dinâmica, ele facilita o aprendizado de biologia molecular, tornando conceitos complexos mais acessíveis para estudantes e professores. O foco é proporcionar uma experiência educativa interativa e envolvente.',
      urlSite: '',
      urlGithub: 'https://github.com/SterRoque/app-sintese-de-proteica',

      technologies: ['<strong>Front-end:</strong> React Native, NativeWind'],

      features: [
         '<strong>Duplicação do DNA:</strong> O aplicativo demonstra a conversão das fitas de DNA durante o processo de duplicação. O usuário pode optar por dois modos: <b>auto duplicação</b> (onde o processo ocorre automaticamente) ou modo manual (onde o usuário realiza o processo, convertendo as fitas de DNA por conta própria).',
         '<strong>Transcrição do DNA:</strong> Apresenta a conversão da fita de DNA em RNA mensageiro (mRNA). Assim como na duplicação, o usuário pode escolher entre <b>auto transcrição</b> (automática) ou <b>modo manual</b>, realizando a transcrição por conta própria.',
         '<strong>Tradução do RNA:</strong> Demonstra o processo de tradução do mRNA em uma sequência de aminoácidos para a formação de proteínas. o modo automático, o processo ocorre de forma automática, e no modo manual, o usuário converte as sequências de RNA para aminoácidos, utilizando a tabela de códons como auxílio.',
         '<strong>Histórico de Fitas de DNA:</strong> O aplicativo armazena um histórico das fitas de DNA trabalhadas, permitindo que o usuário acompanhe as modificações feitas durante os processos de duplicação, transcrição e tradução.',
      ],
      conclusion:
         'O Síntese Proteica oferece uma maneira inovadora de aprender sobre os processos biológicos fundamentais, utilizando simulações interativas para uma compreensão mais clara e dinâmica. A ferramenta visa enriquecer a educação em biologia, tornando o aprendizado mais acessível e estimulante, com planos de expansão para novos recursos e funcionalidades.',
      stacks: ['React Native', 'NativeWind'],
   },
];
