// src/config/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "position": "Full-stack developer",
      "location": "SP - São Paulo, Brazil",
      //About Me
      "aboutTitle": "About me",
      "aboutMe": "With two years of experience leading a team at an advertising and printing company in Portugal, where I also worked as a designer. I currently manage an e-commerce business and take on freelance projects in web development and design. I'm looking for new opportunities to learn and contribute my expertise. I have knowledge in Python, Django, SQL, React, Sass, HTML, CSS, JavaScript, Git, Github, Photoshop, and Illustrator.",
      //language
      "languageTitle": "Languages",
      "languagePor": "Portuguese",
      "languageEng": "English",
      "native": "Native",
      "advanced": "Advanced",
      //skills
      "skillsTitle": "Skills",
      //Courses
      "coursesTitle": "Courses",
      "courseTitleOne": "Programming Beginner",
      "courseDescOne": 'Logic in programming with a secret number game and various proposed challenges, sharing and collaborating on projects using Git and Github.',
      "courseTitleTwo": "HTML and CSS From Scratch",
      "courseDescTwo": "Develop your own website with semantic tags, header, footer, variables, understanding flexbox, classes, position, and responsiveness.",
      "courseTitleThree": "Deep Dive into CSS Styles",
      "courseDescThree": "Build layouts with Flexbox, Grid, and responsiveness, style with Sass by creating variables, partials, mixins, extends, calculations, and parent selectors, and style with Tailwind CSS using utility classes.",
      "courseTitle4": "Develop Web Applications with JavaScript",
      "courseDesc4": "Dynamic pages manipulating the DOM, local storage, handling and consuming JSON APIs, debugging with debuggers, form validations, capturing photos and voice recognition, filters, promise and array methods, requests, and manipulations with get and async.",
      "courseTitleReact": "Explore React with JavaScript",
      "courseDescReact": 'Create components and understand how they work, work with forms, props, understand the virtual DOM, and create IDs. Develop using React Router, create a router, switch between multiple routes, style components with Styled Components, manage static files, and handle global state with Context API. Practice React with JavaScript and migrate to TypeScript.',
      "courseTitleAngular": "Angular: Create Agile Web Applications",
      "courseDescAngular": "Practice TypeScript by implementing it in a complete project and applying object-oriented programming on the front end. With Angular, build a web application using components, template language, and CLI; advance with forms, routing, and HTTP requests with an API.",
      "courseTitle5": "Python with Object-Oriented Programming",
      "courseDesc5": "Create your first application using dictionaries, if, else, and functions; apply Object-Oriented Programming with classes, attributes, and methods; consume APIs; use inheritance, polymorphism, abstract methods, requests, files, JSON, and FastAPI.",
      "courseTitle6": "Django: Create Applications in Python",
      "courseDesc6": "Create projects and apps, understand static files and best practices, work with Admin, URLs, templates, and search mechanisms, handle forms, registration authentication, validations, CRUD operations, refactoring, and AWS with S3.",
      "courseTitle7": "C# with Object-Oriented Programming",
      "courseDesc7": "Create your first application using Object-Oriented Programming and classes, mastering OOP with inheritance, interfaces, and polymorphism, and integrating projects with APIs, file handling, and using LINQ.",
      "courseTitle8": "C# and Object-Oriented Programming: Collections, Files, and Libraries",
      "courseDesc8": "Work with arrays, collections, and list manipulation; handle files with filestream, buffer, encoding, and string reader; create files and use binary files; create and distribute libraries in .NET, NuGet, and DLLs.",
      "courseTitle9": "Introduction to SQL",
      "courseDesc9": "Create and manipulate tables, insert, query, update, and delete data; perform complex queries using operators, functions, subqueries, joins, views, triggers, and transactions; analyze data, perform calculations, create comparisons, and generate charts and reports.",
      "courseTitle10": "Microsoft SQL Server 2022",
      "courseDesc10": "Learn SQL basics, create and manipulate tables, and perform more complex queries with when, where, having, joins, unions, and functions.",
      // Experience
      "experienceTitle": "Experiences",
      "experienceTitle1": "PH Brasil Promotora de Vendas",
      "experiencePos1": "Sales Promoter • Mai 2019 - Mar 2020",
      "experienceInfo1": "Responsible for assisting customers over the phone and in person, conducting sales, and maintaining spreadsheets for customer and sales tracking.",
      "experienceTitle2": "PenCreative Publicidade",
      "experiencePos2": "General Supervisor • Jun 2021 - Set 2023",
      "experienceInfo2": "Responsible for leading a production team, printing vinyl and banners of 1.60 and 3.20 meters, plotter machines, laser engraving and cutting, embroidery, stamping, customization and assembly of PVC and acrylic signs, vehicle decoration, graphic design, among others.",
      "experienceTitle3": "Melgis",
      "experiencePos3": "Founder & CEO • Aug 2022 - Present",
      "experienceInfo3": "Responsible for all strategic decisions of the company, setting goals, and planning. Manage and execute sales activities, ensuring customer service and achieving objectives. Oversee financial control, including cash flow, expenses, and investments. Handle design and visual identity, creating content, photos, and attractive layouts. Manage inventory, maintain supplier partnerships, and handle the review and shipping of orders.",
      "experienceTitle4": "Vinme",
      "experiencePos4": "Developer and designer • Jul 2024 - Present",
      "experienceInfo4": "Responsible for full web development projects, including front-end, back-end, and database management, as well as UI/UX projects, ensuring intuitive interfaces and exceptional user experiences. Provide graphic design and visual identity services, developing brands and creative, attractive materials. Offer client support, ensuring satisfaction and project success.",
      // education
      "educationTitle": "Education",
      "educationTitle1": "Administrative Technician",
      "educationInfo1": "Etec Carlos de Campos - Extensão EE Presidente Roosevelt • Feb 2019 - Jun 2020",
      "educationTitle2": "Systems Analysis and Development",
      "educationInfo2": "Technologist - USJT - São Judas Tadeu University • Studying",
    }
  },
  pt: {
    translation: {
      "position": "Desenvolvedor full-stack",
      "location": "SP - São Paulo, Brasil",
      //Sobre mim
      "aboutTitle": "Sobre mim",
      "aboutMe": "Sou um desenvolvedor apaixonado por tecnologia, com experiência de dois anos liderando uma equipe em uma empresa de publicidade e gráfica em Portugal, onde também atuei como designer. Atualmente, gerencio um e-commerce e realizo freelances de desenvolvimento web e design. Busco novas oportunidades para aprender e contribuir com meu conhecimento. Tenho conhecimento em Python, Django, SQL, React, Sass, HTML, CSS, JavaScript, Git, Github, Photoshop e Illustrator. ",
      //Idioma
      "languageTitle": "Idiomas",
      "languagePor": "Português",
      "languageEng": "Inglês",
      "native": "Nativo",
      "advanced": "Avançado",
      //habilidades
      "skillsTitle": "Habilidades",
      //Cursos
      "coursesTitle": "Cursos",
      "courseTitleOne": "Iniciante na programação",
      "courseDescOne": 'Lógica em programação com um jogo de número secreto e diversos desafios propostos, compartilhar e colaborar em projetos com Git e Github.',
      "courseTitleTwo": "A partir do zero HTML e CSS",
      "courseDescTwo": 'Desenvolver um site próprio com tags semânticas, header, footer e variáveis, entender flexbox, classes e position e responsividade.',
      "courseTitleThree": "CSS Aprofunde em estilos",
      "courseDescThree": 'Contruir layouts com Flexbox, Grid e responsividade, estilizar com Sass criando variaveis, partials, mixins, extends, calculos e parent selector e estilizar com Tailwind CSS e classes utilitarias.',
      "courseTitle4": "Desenvolva aplicações Web com JavaScript",
      "courseDesc4": 'Paginas dinamicas manipulando o DOM, local storage, lidar e consumir API Json, depuração e debugger, validações de formularios, capturar fotos e reconhecimento de voz, filtros, metodos promises e de arrays, requisições, e manipulações com get e async.',
      "courseTitleReact": "Explore React com JavaScript",
      "courseDescReact": 'Criar componentes e entender como eles funcionam, formularios, trabalhando com props, entender o virtual Dom e criar IDS, desenvolver em React Router, criar um roteador, alternar entre varios rotas, estilizar componentes com Styled Components e manipular arquivos estaticos e gerenciar estados globalmente com Context API, praticar mais React com Js e migrar para o TypeScript.',
      "courseTitleAngular": "Angular: crie aplicações web ágeis",
      "courseDescAngular": 'Typescrypt na pratica implementando em um projeto completo e aplicando orientação a objetos no Front-end, com o angular construir uma aplicação web com componentes, linguagem de template e CLI evoluir com formularios e roteamento e requisições HTTP com uma API.',
      "courseTitle5": "Python com Orientação a Objetos",
      "courseDesc5": 'Criar primeira aplicação com dicionarios, if, else e funções, aplicar a Orientação a Objetos com classes, atributos e métodos e consumir API, utilizar heranças, polimorfismo, metodos abstratos, requisições, aquivos e Json, Fast API.',
      "courseTitle6": "Django crie aplicações em python",
      "courseDesc6": 'Criar projeto e apps, entender arquivos estaticos e boas praticas, entender e avnaçar  com Admin, urls, templates e mecanismo de busca, formularios, autenticação de cadastro, validações, Crud, refatoração e AWS com S3.',
      "courseTitle7": "C# com Orientação a Objetos",
      "courseDesc7": 'Criar primeira aplicação, aplicando Orientação a Objetos e classes, dominando a Orientação a Objetos com heranças, interfaces e polimorfismo e integrar projetos com API, gravando arquivos e utilizando LINQ.',
      "courseTitle8": "C# e Orientação a Objetos: coleções, arquivos e bibliotecas",
      "courseDesc8": 'Trabalhando com arrays, coleções e manipular lista, trabalhando com arquivos com filestream, buffer, encoding e string reader, criando arquivos e utilizar um arquivo binario, criar e distribuir bibliotecas em .NET, nugget e DLL.',
      "courseTitle9": "Conhecendo SQL",
      "courseDesc9": 'Criar e manipular tabelas, inserir, consultar, atualizar e excluir dados, consultas mais complexas utilizando operadores e funções, subconsultas, joins, views, trigger e transações e analisar dados, realizar calculos e criar comparação, realizar graficos das tabelas e relatórios.',
      "courseTitle10": "Microsoft SQL Server 2022",
      "courseDesc10": 'Conhecendo SQL, criar, manipular tabelas e consultas mais complexas com when, where, having, joins, union e funções.',
      // Experiencia
      "experienceTitle": "Experiências",
      "experienceTitle1": "PH Brasil Promotora de Vendas",
      "experiencePos1": "Promotor de vendas • Mai 2019 - Mar 2020",
      "experienceInfo1": "Responsavel por atender clientes por telefone e presencialmente, realizar vendas e realizar planilhas de controle de clientes e vendas.",
      "experienceTitle2": "PenCreative Publicidade",
      "experiencePos2": "Encarregado Geral • Jun 2021 - Set 2023",
      "experienceInfo2": "Responsavel por liderar equipe de produção, impressão de vinil e lonas de 1,60 e 3,20 metros, maquinas plotter, gravação e corte laser, bordados, estampagem, personalização e montagem de placas pvc e acrilico, decoração de viaturas, design gráfico entre outros.",
      "experienceTitle3": "Melgis",
      "experiencePos3": "Fundador e CEO • Ago 2022 - Atual",
      "experienceInfo3": "Responsável por todas as decisões estratégicas da empresa, definição de metas e planos. Gerencio e executo atividades de vendas, assegurando atendimento ao cliente e o alcance dos objetivos. Realizo controle de finanças, incluindo fluxo de caixa, despesas e investimentos. Cuido do design e identidade visual, criando conteúdos, fotos e layouts atraentes. Gerencio o estoque, mantenho parcerias com fornecedores e realizo a revisão e o envio dos pedidos.",
      "experienceTitle4": "Vinme",
      "experiencePos4": "Desenvolvedor e designer • Jul 2024 - Atual",
      "experienceInfo4": "Responsável por realizar projetos de desenvolvimento web completo, incluindo front-end, back-end e banco de dados, projetos de UI/UX, garantindo interfaces intuitivas e experiências de usuário excepcionais. Realizo serviços de design gráfico e« identidade visual, desenvolvendo marcas e materiais criativos atraentes. Ofereço atendimento ao cliente, assegurando a satisfação e o sucesso dos projetos.",
      // education
      "educationTitle": "Educação",
      "educationTitle1": "Técnico de Administração",
      "educationInfo1": "Etec Carlos de Campos - Extensão EE Presidente Roosevelt • Fev 2019 - Jun 2020",
      "educationTitle2": "Análise e Desenvolvimento de Sistemas",
      "educationInfo2": "Técnologo - USJT - Universidade São Judas Tadeu • Cursando",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;