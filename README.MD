### [English Version](#final-project-pesquisenews-restful-api)
---

# Projeto final: PesquiseNews API RESTfull
Este projeto, intitulado ([PesquiseNews](https://pesquisenews.com.br)), oferece uma solução full-stack para busca e gestão de notícias em tempo real. Aqui está um resumo dos principais pontos abordados:

Para obter informações sobre o frontend do [PesquiseNews](https://pesquisenews.com.br), consulte o [README do projeto-pesquisenews-frontend](https://github.com/Evandro-developer/projeto-pesquisenews-frontend).

## Sumário:
1. [Fase 2: Back-End](#fase-2-back-end-etapa-única)
2. [Descrição do Projeto](#descrição-do-projeto)
3. [Back-End - Arquitetura e Características](#back-end---arquitetura-e-características)
4. [Middleware e Utilitários](#middleware-e-utilitários)
5. [Funcionalidades](#funcionalidades)
6. [Automação de Ambientes para Otimização do Desenvolvimento (DX)](#automação-de-ambientes-para-otimização-do-desenvolvimento-dx)
7. [Instalação e Execução](#Instalação-e-Execução)
8. [Configuração do arquivo .env & .env.production](#Configuração-do-arquivo-.env-&-.env.production)
9. [Endpoints da API](#Endpoints-da-API)
10. [Tecnologias - Bibliotecas e Frameworks Utilizados](#Tecnologias---Bibliotecas-e-Frameworks-Utilizados)
11. [Função de Validação de Artigos](#função-de-validação-de-artigos)
12. [Hospedagem no Google Cloud](#hospedagem-no-google-cloud)
13. [Desenvolvido por](#desenvolvido-por)
14. [Considerações Finais](#considerações-finais)
15. [Licença](#licença)
16. [Código-Fonte](#código-fonte)
17. [Agradecimentos](#agradecimentos)

## Fase 2: Back-End Etapa única
## Descrição do Projeto:
O projeto é uma etapa final do curso de desenvolvimento web da [Tripleten](https://tripleten.com/pt-bra/), com foco na implementação de um back-end robusto que se integra a um aplicativo de busca de notícias.
Esta etapa introduz um back-end robusto para o aplicativo, proporcionando uma experiência full-stack integrada. Esse back-end serve como a espinha dorsal do aplicativo, permitindo a busca e gestão de notícias em tempo real.
Com a integração à [News API](https://newsapi.org/), é possível acessar artigos e notícias de fontes confiáveis e renomadas ao redor do mundo.

## Back-End - Arquitetura e Características:
- **Tecnologia de Base**: O back-end é construído sobre o **Node.js**, usando o **Express.js** como framework, permitindo uma construção rápida e eficiente de APIs.
- **Base de Dados**: Integrado ao **MongoDB**, um banco de dados NoSQL, garantindo armazenamento persistente de dados, incluindo perfis de usuários e artigos favoritos.
- **Autenticação de Usuários**: Implementação de tokens JWT (JSON Web Tokens) para autenticação e proteção de rotas.
- Da arquitetura do backend e sua integração com serviços de frontend. O projeto reforça a importância de criar soluções seguras, escaláveis e eficientes para atender às demandas dos usuários.

## Middleware e Utilitários:
- **CORS**: Configurado para aceitar solicitações apenas de domínios confiáveis.
- **Helmet**: Ajuda na proteção do aplicativo contra vulnerabilidades web comuns.
- **Celebrate**: Utilizado para validação de dados e manutenção da integridade dos dados.
- **Logger**: Registro personalizado de todas as solicitações e erros, facilitando a depuração e monitoramento.

## Funcionalidades:
- **Busca de Notícias Dinâmica**: Os usuários podem pesquisar notícias em tempo real de fontes confiáveis e renomadas usando a API externa [News API](https://newsapi.org/).
- **Gestão Personalizada de Artigos**: Os usuários autenticados podem salvar, visualizar e excluir artigos de suas listas favoritas.
- **Sistema de Autenticação Seguro**: Processos de registro ("signup") e login ("signin") estão implementados, com validações para garantir a segurança das informações dos usuários.
- **Limitação de Taxa para Uso Justo**: Implementada para prevenir abuso da API, assegurando uma utilização justa e eficiente.
- **Middleware de Tratamento de Erros**: Middleware personalizado para tratamento de erros, garantindo que os usuários recebam mensagens de erro claras e úteis.

## Automação de Ambientes para Otimização do Desenvolvimento (DX):
- No projeto PesquiseNews, implementamos uma funcionalidade essencial para aprimorar a Experiência do Desenvolvedor (DX): a **Automação Inteligente de Ambientes**. Esta solução inovadora identifica e se adapta automaticamente aos ambientes de desenvolvimento ou produção, otimizando configurações críticas como CORS.
- **Sistema dinâmico**: traz eficiência e precisão ao desenvolvimento, reduzindo erros e permitindo que os desenvolvedores se concentrem integralmente na inovação e no aprimoramento das funcionalidades. O resultado é uma experiência de desenvolvimento ágil e sem interrupções, refletindo nosso compromisso com a excelência e inovação contínua no PesquiseNews.

## Instalação e Execução:
- Faça o download ou clone este repositório em seu ambiente de desenvolvimento.
- Abra o terminal e navegue até a pasta raiz do projeto.
- Execute o comando npm install para instalar as dependências.
- Configure as variáveis de ambiente no arquivo .env (consulte o exemplo .env.example).
- Execute o comando npm start para iniciar o servidor.

## Configuração do arquivo .env & .env.production:
O arquivo `.env` e `.env.production` são usados para configurar variáveis de ambiente necessárias para o projeto funcionar corretamente. Você deve criar estes arquivos na raiz do projeto e definir os seguintes valores:
- **NODE_ENV**: Define o ambiente de execução do aplicativo (e.g., `development`, `production`).
- **API_URL=http://localhost:3001**: Define o ambiente de execução do aplicativo para `development`.
- **API_URL=https://seudominio.com.br**: Define o ambiente de execução do aplicativo para `production`.
- **DEV_JWT_SECRET**: Chave secreta usada para assinar tokens JWT em ambiente de desenvolvimento.
- **JWT_SECRET**: Chave secreta usada para assinar tokens JWT em ambiente de produção.
- **PORT**: A porta na qual o servidor será executado (e.g., `development PORT=3001` e `production PORT=3000`).
- **NEWS_API_KEY**: Sua chave de API para acessar serviços de notícias externas, pode ser solicitada gratuitamente em ([News API](https://newsapi.org/)).
- **MONGODB_URI**: A URL de conexão com o banco de dados **MongoDB**(e.g., `ex. myDb`).
Para criar o arquivo `.env` e `.env.production`, [Automação de Ambientes para Otimização do Desenvolvimento (DX)](#automação-de-ambientes-para-otimização-do-desenvolvimento-(dx)), você pode copiar o conteúdo do arquivo `.env.example` e preencher os valores apropriados.

## Endpoints da API:
### Buscar artigos de notícias
- **Método**: GET
- **Endpoint**: `/`
- **Descrição**: Busca artigos de notícias por meio de nossa API, que, por sua vez, consulta a [News API](https://newsapi.org/).
- **Exemplo de uso**: `http://localhost:3001?q=Praias do Nordeste`

Qualquer usuário (mesmo não autenticado) pode pesquisar por notícias usando uma palavra-chave. A pesquisa retorna os resultados em um formato que se adequa ao schema do artigo. No entanto, esses artigos ainda não são salvos no banco de dados neste momento.

### Autenticação
- **Método**: POST
- **Endpoint**: /signup
- **Descrição**: Registrar um novo usuário no sistema.

- **Método**: POST
- **Endpoint**: /signin
- **Descrição**: Autenticar um usuário existente e retornar um token de autenticação.

Exigir autenticação para salvar artigos: Isto garante que apenas os usuários registrados possam salvar artigos, o que é útil para personalizar a experiência do usuário, manter uma lista de artigos salvos e talvez até mesmo evitar spam ou uso indevido da API.

Apenas usuários autenticados podem criar (ou salvar) um artigo.

### Usuários
- **Método**: GET
- **Endpoint**: `/users`
- **Descrição**: Obter uma lista de todos os usuários cadastrados no sistema.

- **Método**: GET
- **Endpoint**: `/users/me`
- **Descrição**: Obter informações do usuário atualmente autenticado.


### Artigos
- **Método**: GET
- **Endpoint**: `/articles`
- **Descrição**: Obter todos os artigos salvos pelo usuário atualmente autenticado.

- **Método**: POST
- **Endpoint**: `/articles`
- **Descrição**: Criar ou salvar um novo artigo.

- **Método**: DELETE
- **Endpoint**: `/articles/:articleId`
- **Descrição**: Excluir um artigo específico, usando o ID do artigo.

## Tecnologias - Bibliotecas e Frameworks Utilizados:
### Autenticação:
- **Tokens JWT**: Utilização de tokens JSON Web Token para autenticar e autorizar usuários de forma segura.
- **bcryptjs**: Biblioteca para criptografia de senhas e verificação de hashes.
- **jsonwebtoken**: Implementação de tokens JWT para autenticação.

### Banco de Dados:
- **MongoDB**: Um banco de dados NoSQL usado para armazenamento de dados.
- **mongoose**: Biblioteca ODM (Object Data Modeling) para facilitar a interação com o **MongoDB**.

### Validadores e Middleware:
- **celebrate**: Middleware para validar entradas de solicitação, utilizado para validação de dados.
- **joi**: Biblioteca para validação de dados.
- **validator**: Biblioteca para validação de dados.
- **cors**: Middleware para habilitar o controle de acesso a recursos de diferentes origens.

### Segurança e Monitoramento:
- **Helmet**: Ajuda na proteção do aplicativo contra vulnerabilidades web comuns.
- **Express-rate-limit**: Middleware para limitar a taxa de solicitações à API.

### Registro e Debugging:
- **Logger**: Registro personalizado de todas as solicitações e erros, facilitando a depuração e monitoramento.
- **Winston**: Bibliotecas para criar e gerenciar registros de logs no aplicativo.
- **express-winston**: Bibliotecas para criar e gerenciar registros de logs no aplicativo.

### Outros:
- **dotenv**: Biblioteca para carregar variáveis de ambiente a partir de um arquivo .env.
- **eslint**: Ferramenta de linting para garantir a qualidade do código JavaScript.
- **eslint-config-airbnb-base**: Configuração do ESLint seguindo as regras do Airbnb para código JavaScript.
- **Express**: Um framework **Node.js** para construção de aplicativos web e APIs.
- **Node.js**: Uma plataforma de runtime que permite a execução de código JavaScript no servidor.

## Função de Validação de Artigos:
Uma das principais funcionalidades introduzidas no backend é a validação de artigos antes de sua inclusão ou exibição. Esta função, denominada **isValidArticle**, garante que os artigos que estão sendo processados pelo nosso sistema não contêm valores indesejados ou datas inválidas.

### Descrição da Funcionalidade:
A função **isValidArticle** serve para verificar a integridade e relevância dos artigos. Ela se concentra em duas verificações principais:

### Verificação de Conteúdo Indesejado:
A função verifica se os artigos contêm quaisquer conteúdos indesejados, como links removidos, valores nulos ou placeholders comuns que podem indicar um artigo comprometido ou incompleto. Esta verificação é essencial para manter a integridade do conteúdo exibido aos usuários.

### Verificação de Data:
Outra verificação crucial é para a data de publicação do artigo. Se um artigo possui uma data que coincide com "1970-01-01T00:00:00Z", isso pode indicar uma data inválida ou um placeholder, sendo assim, o artigo é considerado inválido.

**const isValidArticle**:
const isValidArticle = (article) => {

  `// Lista de valores indesejados`
  const undesiredValues = [null, "[Removed]", "https://removed.com"];

  `// Verifica se algum valor indesejado está presente em quaisquer propriedades dos artigos`
  const hasUndesiredContent = [
    "title",
    "description",
    "source",
    "url",
    "urlToImage",
  ].some((prop) => undesiredValues.includes(article[prop]));

  `// Verifica se tem uma data inválida`
  const hasInvalidDate = article.publishedAt === "1970-01-01T00:00:00Z";

  return !(hasUndesiredContent || hasInvalidDate);
};

Recomendamos que os desenvolvedores implementem sempre verificações como esta ao lidar com conteúdo de terceiros ou dados de APIs externas, garantindo assim a segurança, integridade e a melhor UX.

## Hospedagem no Google Cloud:
Este projeto foi hospedado no **Google Cloud** na Fase 3 do projeto [PesquiseNews](https://pesquisenews.com.br) para que você possa acessá-lo online. O backend do aplicativo implantado em uma instância do Google Compute Engine, enquanto o frontend no **Google Cloud Storage**. Isso permite experimentar o aplicativo sem precisar configurar nada localmente, aproveitando a infraestrutura e serviços de nuvem escaláveis. O GCP proporciona uma solução confiável e eficiente para hospedagem de aplicações, permitindo a nossa API ter alta disponibilidade e baixa latência.
Agradecemos por visitar o aplicativo hospedado no **Google Cloud**!

## Desenvolvido por:
### **Evandro M Oliveira**
**Profissão**: Desenvolvedor Web Full-Stack.
**Especialidade**: Domínio em **Node.js**, **Express.js**, otimização de consultas em **MongoDB** e **React**.
**Formação**: Atualmente cursando Ciência de Dados e um Boot Camp em Análise de Dados. Também aprofundando conhecimentos em Design de UI/UX.
**Contribuição ao projeto**: Desenvolvimento e hospedagem do back-end na **Google Cloud**.

### [**Tripleten**](https://tripleten.com/pt-bra/)
**Contribuição ao projeto**: Design e experiência do usuário.

## Considerações Finais:
A implementação do back-end para o ([PesquiseNews](https://pesquisenews.com.br)) não apenas eleva a funcionalidade do aplicativo, mas também exemplifica a integração eficiente de diversas tecnologias e bibliotecas para criar uma solução full-stack. Seja você um entusiasta de notícias ou apenas um usuário curioso, convidamos você a experimentar este aplicativo e mergulhar no mundo das notícias em tempo real.
A implementação do back-end para o [PesquiseNews](https://pesquisenews.com.br) não apenas eleva a funcionalidade do aplicativo, mas também exemplifica a integração eficiente de diversas tecnologias e bibliotecas para criar uma solução full-stack. Seja você um entusiasta de notícias ou apenas um usuário curioso, convidamos você a experimentar este aplicativo e mergulhar no mundo das notícias em tempo real.

A implementação da API RESTfull marcou uma grande etapa em minha jornada de aprendizado, permitindo compreender os intricados detalhes do desenvolvimento back-end. Espero continuar aprimorando minhas habilidades e trazer ainda mais inovações no futuro.

## Licença:
Este projeto é open source e está licenciado sob a Licença MIT. Isso significa que você é livre para usar, copiar, modificar e distribuir o projeto, desde que forneça os devidos créditos aos autores originais e siga os termos da licença.

## Código-Fonte:
Acesse o [repositório do projeto](https://github.com/Evandro-developer/projeto-pesquisenews-backend) no GitHub para consultar o código-fonte completo e pode ser encontrado em nosso repositório no GitHub. Sinta-se à vontade para explorá-lo, fazer fork e contribuir com melhorias ou correções.

## Agradecimentos:
Agradecemos por acompanhar o desenvolvimento deste projeto, aos coordenadores, tutores e revisores da [Tripleten](https://tripleten.com/pt-bra/) por me guiarem durante este curso. Também gostaria de agradecer a toda a comunidade de desenvolvimento por fornecer recursos e ferramentas valiosos que facilitaram minha jornada de aprendizado.

Finalmente, obrigado a você, leitor, por se interessar e gastar seu tempo aprendendo sobre o projeto ([PesquiseNews](https://pesquisenews.com.br)). Esperamos que você ache o projeto útil e talvez até seja inspirado a criar algo semelhante ou a contribuir para este projeto. Juntos, podemos continuar a expandir e melhorar o mundo do desenvolvimento web.

Obrigado.

---

### [Versão em Portuguës](#projeto-final-pesquiseNews-api-restfull)
---

# Final Project: PesquiseNews RESTful API
This project, entitled [PesquiseNews](https://pesquisenews.com.br), offers a full-stack solution for real-time news search and management. Below is a summary of the main points covered:

For information on the front end of [PesquiseNews](https://pesquisenews.com.br), see the [project-pesquisenews-frontend README](https://github.com/Evandro-developer/projeto-pesquisenews-frontend).

## Summary:
1. [Phase 2: Back-End](#phase-2-back-end-single-stage)
2. [Project Description](#project-description)
3. [Back-End - Architecture and Features](#back-end---architecture-and-features)
4. [Middleware and Utilities](#middleware-and-utilities)
5. [Features](#features)
6. [Environment Automation for Development Optimization (DX)](#environment-automation-for-development-optimization-dx)
7. [Installation and Execution](#installation-and-execution)
8. [Configuring the .env & .env.production files](#configuring-the-env-&-.env.production-files)
9. [API Endpoints](#api-endpoints)
10. [Technologies - Libraries and Frameworks Used](#technologies---libraries-and-frameworks-used)
11. [Article Validation Function](#article-validation-function)
12. [Hosting on Google Cloud](#hosting-on-google-cloud)
13. [Developed by](#developed-by)
14. [Final Thoughts](#final-thoughts)
15. [License](#license)
16. [Source Code](#source-code)
17. [Acknowledgments](#acknowledgments)

## Phase 2: Back-End Single Stage
## Project Description:
The project is the final stage of the [Tripleten](https://tripleten.com/pt-bra/) web development course, focusing on the implementation of a robust back end that integrates into a news search application.
This stage introduces a robust back end for the application, providing an integrated full-stack experience. This back end serves as the backbone of the application, enabling the search and management of news in real-time.
With integration into [News API](https://newsapi.org/), it is possible to access articles and news from reliable and renowned sources around the world.

## Back-End - Architecture and Features:
- Base Technology: The back end is built on **Node.js**, using **Express.js** as a framework, allowing for rapid and efficient API construction.
- Database: Integrated with **MongoDB**, a NoSQL database, ensuring persistent data storage, including user profiles and favorite articles.
- User Authentication: Implementation of JWT (JSON Web Tokens) for authentication and route protection.
- From the architecture of the back end and its integration with front-end services. The project reinforces the importance of creating secure, scalable, and efficient solutions to meet user demands.

## Middleware and Utilities:
- **CORS**: Configured to accept requests only from trusted domains.
- **Helmet**: Helps protect the app from common web vulnerabilities.
- **Celebrate**: Used for data validation and data integrity maintenance.
- **Logger**: Customized logging of all requests and errors, facilitating debugging and monitoring.

## Features:
- **Dynamic News Search**: Users can search for news in real-time from reliable and renowned sources using the external [News API](https://newsapi.org/).
- **Customized Article Management**: Authenticated users can save, view, and delete articles from their favorite lists.
- **Secure Authentication System**: Registration ("signup") and login ("signin") processes are implemented, with validations to ensure the security of user information.
- **Fair Use Rate Limiting**: Implemented to prevent API abuse, ensuring fair and efficient use.
- **Error Handling Middleware**: Custom middleware for error handling, ensuring users receive clear and helpful error messages.

## Environment Automation for Development Optimization (DX):
- In the PesquiseNews project, we have implemented a key feature to enhance the Developer Experience (DX): **Smart Environment Automation**. This innovative solution automatically identifies and adapts to development or production environments, optimizing critical settings such as CORS.
- **Dynamic system**: brings efficiency and precision to development, reducing errors and allowing developers to fully focus on innovation and feature enhancement. The result is a seamless and agile development experience, reflecting our commitment to continuous excellence and innovation at PesquiseNews.

## Installation and Execution:
- Download or clone this repository into your development environment.
- Open the terminal and navigate to the root folder of the project.
- Run the `npm install` command to install dependencies.
- Configure the environment variables in the .env file (see the .env.example for reference).
- Execute the `npm start` command to launch the server.

## Configuring the .env & .env.production files:
The `.env` and `.env.production` files are used to configure the environment variables necessary for the project to function correctly. You should create these files at the project root and define the following values:
- **NODE_ENV**: Sets the application's execution environment (e.g., `development`, `production`).
- **API_URL=http://localhost:3001**: Sets the application's execution environment to `development`.
- **API_URL=https://yourdomain.com**: Sets the application's execution environment to `production`.
- **DEV_JWT_SECRET**: Secret key used to sign JWTs in the development environment.
- **JWT_SECRET**: Secret key used to sign JWTs in the production environment.
- **PORT**: The port on which the server will run (e.g., `development PORT=3001` and `production PORT=3000`).
- **NEWS_API_KEY**: Your API key to access external news services, which can be requested for free at [News API](https://newsapi.org/).
- **MONGODB_URI**: The connection URL for the **MongoDB** database (e.g., `example myDb`).
To create the `.env` and `.env.production` files, you can copy the contents of the `.env.example` file and fill in the appropriate values.

## API Endpoints:
### Search for news articles
- **Method**: GET
- **Endpoint**: `/`
- **Description**: Searches for news articles through our API, which in turn queries the [News API](https://newsapi.org/).
- **Usage example**: `http://localhost:3001?q=Beaches of the Northeast`
Any user (even unauthenticated) can search for news using a keyword. The search returns the results in a format that fits the article schema. However, these articles are not saved to the database at this time.

### Authentication
- **Method**: POST
- **Endpoint**: /signup
- **Description**: Register a new user in the system.

- **Method**: POST
- **Endpoint**: /signin
- **Description**: Authenticate an existing user and return an authentication token.

Requiring authentication to save articles ensures that only registered users can save articles, which is useful for personalizing the user experience, maintaining a list of saved articles, and perhaps even preventing spam or misuse of the API.
Only authenticated users can create (or save) an article.

### Users
- **Method**: GET
- **Endpoint**: `/users`
- **Description**: Retrieve a list of all users registered in the system.

- **Method**: GET
- **Endpoint**: `/users/me`
- **Description**: Obtain information about the currently authenticated user.

### Articles
- **Method**: GET
- **Endpoint**: `/articles`
- **Description**: Retrieve all articles saved by the currently authenticated user.

- **Method**: POST
- **Endpoint**: `/articles`
- **Description**: Create or save a new article.

- **Method**: DELETE
- **Endpoint**: `/articles/:articleId`
- **Description**: Delete a specific article using the article ID.

## Technologies - Libraries and Frameworks Used:
### Authentication:
- **JWT Tokens**: Using JSON Web Tokens to securely authenticate and authorize users.
- **bcryptjs**: Library for password encryption and hash verification.
- **jsonwebtoken**: Implementation of JWT for authentication.

### Database:
- **MongoDB**: A NoSQL database used for data storage.
- **mongoose**: ODM (Object Data Modeling) library to facilitate interaction with **MongoDB**.

### Validators and Middleware:
- **celebrate**: Middleware for request input validation, used for data validation.
- **joi**: Library for data validation.
- **validator**: Library for data validation.
- **cors**: Middleware to enable control of access to resources from different origins.

### Security and Monitoring:
- **Helmet**: Helps protect the application against common web vulnerabilities.
- **Express-rate-limit**: Middleware to limit the rate of requests to the API.

### Logging and Debugging:
- **Logger**: Custom logging of all requests and errors, facilitating debugging and monitoring.
- **Winston**: Libraries to create and manage log records in the application.
- **express-winston**: Libraries to create and manage log records in the application.

### Others:
- **dotenv**: Library to load environment variables from a `.env` file.
- **eslint**: Linting tool to ensure JavaScript code quality.
- **eslint-config-airbnb-base**: ESLint configuration following Airbnb's rules for JavaScript code.
- **Express**: A **Node.js** framework for building web applications and APIs.
- **Node.js**: A runtime platform that allows JavaScript code execution on the server.

## Article Validation Function:
One of the main features introduced in the backend is the validation of articles before their inclusion or display. This function, named **isValidArticle**, ensures that the articles being processed by our system do not contain undesired values or invalid dates.

### Feature Description:
The **isValidArticle** function is used to verify the integrity and relevance of the articles. It focuses on two main checks:

### Undesired Content Verification:
The function checks if the articles contain any undesired content, such as removed links, null values, or common placeholders that may indicate a compromised or incomplete article. This check is essential to maintain the integrity of the content displayed to users.

### Date Verification:
Another critical check is for the article's publication date. If an article has a date that matches "1970-01-01T00:00:00Z", this may indicate an invalid date or a placeholder, thus deeming the article invalid.

**const isValidArticle**:
const isValidArticle = (article) => {

  `// List of undesired values`
  const undesiredValues = [null, "[Removed]", "https://removed.com"];

  `// Checks if any undesired value is present in any of the article's properties`
  const hasUndesiredContent = [
    "title",
    "description",
    "source",
    "url",
    "urlToImage",
  ].some((prop) => undesiredValues.includes(article[prop]));

  `// Checks for an invalid date`
  const hasInvalidDate = article.publishedAt === "1970-01-01T00:00:00Z";

  return !(hasUndesiredContent || hasInvalidDate);
};

We recommend that developers always implement checks like this when dealing with third-party content or data from external APIs, thus ensuring security, integrity, and the best UX.

## Hosting on Google Cloud:
This project was hosted on **Google Cloud** in Phase 3 of the [PesquiseNews](https://pesquisenews.com.br) project so that you can access it online. The backend of the application is deployed on a Google Compute Engine instance, while the frontend is on **Google Cloud Storage**. This allows you to experience the application without needing to configure anything locally, taking advantage of scalable cloud infrastructure and services. GCP provides a reliable and efficient solution for hosting applications, allowing our API to have high availability and low latency.
We thank you for visiting the application hosted on **Google Cloud**!

## Developed by:
### **Evandro M Oliveira**
**Profession**: Full-Stack Web Developer.
**Expertise**: Proficiency in **Node.js**, **Express.js**, optimization of queries in **MongoDB**, and **React**.
**Education**: Currently pursuing Data Science and a Boot Camp in Data Analysis. Also deepening knowledge in UI/UX Design.
**Contribution to the project**: Development and hosting of the backend on **Google Cloud**.

### [**Tripleten**](https://tripleten.com/pt-bra/)
**Contribution to the project**: Design and user experience.

## Final Thoughts:
The implementation of the backend for [PesquiseNews](https://pesquisenews.com.br) not only enhances the functionality of the application but also exemplifies the efficient integration of various technologies and libraries to create a full-stack solution. Whether you are a news enthusiast or just a curious user, we invite you to try out this application and dive into the world of real-time news.
The implementation of the RESTful API marked a significant milestone in my learning journey, allowing me to understand the intricate details of backend development. I hope to continue improving my skills and bringing even more innovations in the future.

## License:
This project is open source and licensed under the MIT License. This means you are free to use, copy, modify, and distribute the project, provided you give due credit to the original authors and follow the terms of the license.

## Source Code:
Access the [project repository](https://github.com/Evandro-developer/projeto-pesquisenews-backend) on GitHub to view the complete source code. Feel free to explore it, fork it, and contribute improvements or corrections.

## Acknowledgments:
We appreciate your following the development of this project, to the coordinators, tutors, and reviewers at [Tripleten](https://tripleten.com/pt-bra/) for guiding me through this course. I would also like to thank the entire development community for providing valuable resources and tools that facilitated my learning journey.

Finally, thank you, the reader, for your interest and for taking the time to learn about the [PesquiseNews](https://pesquisenews.com.br) project. We hope you find the project useful and perhaps even be inspired to create something similar or contribute to this project. Together, we can continue to expand and improve the world of web development.

Thank you.
---
