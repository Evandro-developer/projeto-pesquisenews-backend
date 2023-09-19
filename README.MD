# Projeto final: PesquiseNews API RESTfull

## Parte 2: Back-End

## Fase 2: Preparação do Servidor API RESTfull

## Descrição do Projeto:
Este é o projeto final do curso de desenvolvimento web da Tripleten, "PesquiseNews". Esta etapa introduz um back-end robusto para o aplicativo, proporcionando uma experiência full-stack integrada. Esse back-end serve como a espinha dorsal do aplicativo, permitindo a busca e gestão de notícias em tempo real, provenientes de fontes confiáveis.

## Back-End: Arquitetura e Características:
- Tecnologia de Base: O back-end é construído sobre o Node.js, usando o Express.js como framework, permitindo uma construção rápida e eficiente de APIs.
- Base de Dados: Integrado ao MongoDB, um banco de dados NoSQL, garantindo armazenamento persistente de dados, incluindo perfis de usuários e artigos favoritos.
- Autenticação de Usuários: Implementação de tokens JWT (JSON Web Tokens) para autenticação e proteção de rotas.

## Middleware e Utilitários:
- CORS: Configurado para aceitar solicitações apenas de domínios confiáveis.
- Helmet: Ajuda na proteção do aplicativo contra vulnerabilidades web comuns.
- Celebrate: Utilizado para validação de dados e manutenção da integridade dos dados.
- Logger: Registro personalizado de todas as solicitações e erros, facilitando a depuração e monitoramento.

## Funcionalidades:
- Busca de Notícias: Os usuários podem pesquisar notícias em tempo real de fontes confiáveis e renomadas usando a API externa News API.
- Gestão de Artigos: Os usuários autenticados podem salvar, visualizar e excluir artigos de suas listas favoritas.
- Autenticação: Processos de registro ("signup") e login ("signin") estão implementados, com validações para garantir a segurança das informações dos usuários.
- Limitação de Taxa: Implementada para prevenir abuso da API, assegurando uma utilização justa e eficiente.
- Tratamento de Erros: Middleware personalizado para tratamento de erros, garantindo que os usuários recebam mensagens de erro claras e úteis.

### Instalação e Execução:
- Faça o download ou clone este repositório em seu ambiente de desenvolvimento.
- Abra o terminal e navegue até a pasta raiz do projeto.
- Execute o comando npm install para instalar as dependências.
- Configure as variáveis de ambiente no arquivo .env (consulte o exemplo .env.example).
- Execute o comando npm start para iniciar o servidor.

### Configuração do arquivo .env:
O arquivo `.env` é usado para configurar variáveis de ambiente necessárias para o projeto funcionar corretamente. Você deve criar este arquivo na raiz do projeto e definir os seguintes valores:

- **NODE_ENV**: Define o ambiente de execução do aplicativo (e.g., `development`, `production`).
- **DEV_JWT_SECRET**: Chave secreta usada para assinar tokens JWT em ambiente de desenvolvimento.
- **JWT_SECRET**: Chave secreta usada para assinar tokens JWT em ambiente de produção.
- **PORT**: A porta na qual o servidor será executado (e.g., `3001`).
- **NEWS_API_KEY**: Sua chave de API para acessar serviços de notícias externas ([News API](https://newsapi.org/)).
- **MONGODB_URI**: A URL de conexão com o banco de dados MongoDB(e.g., `defina um nome, ex... myDb`).

Para criar o arquivo `.env`, você pode copiar o conteúdo do arquivo `.env.example` e preencher os valores apropriados.

### Endpoints da API:

## Buscar artigos
- GET / - Buscar artigos de notícias com base em parâmetros de pesquisa (e.g., http://localhost:3001?q=Praias do Nordeste).

## Usuários
- GET /users - Obter uma lista de todos os usuários cadastrados no sistema.
- GET /users/me - Obter informações do usuário atualmente autenticado.

## Artigos
- GET /articles - Obter todos os artigos salvos pelo usuário atualmente autenticado.
- POST /articles - Criar ou salvar um novo artigo.
- DELETE /articles/articleId - Excluir um artigo específico.

### Tecnologias - Bibliotecas e Frameworks Utilizados:
- Autenticação de Usuários com Tokens JWT: Utilização de tokens JSON Web Token para autenticar e autorizar usuários de forma segura.
- bcryptjs: Biblioteca para criptografia de senhas e verificação de hashes.
- celebrate: Middleware para validar entradas de solicitação, utilizado para validação de dados.
- cors: Middleware para habilitar o controle de acesso a recursos de diferentes origens.
- dotenv: Biblioteca para carregar variáveis de ambiente a partir de um arquivo .env.
- eslint: Ferramenta de linting para garantir a qualidade do código JavaScript.
- eslint-config-airbnb-base: Configuração do ESLint seguindo as regras do Airbnb para código JavaScript.
- Express: Um framework Node.js para construção de aplicativos web e APIs.
- express-rate-limit: Middleware para limitar a taxa de solicitações à API.
- express-winston: Bibliotecas para criar e gerenciar registros de logs no aplicativo.
- joi: Biblioteca para validação de dados.
- jsonwebtoken: Implementação de tokens JWT para autenticação.
- MongoDB: Um banco de dados NoSQL usado para armazenamento de dados.
- mongoose: Biblioteca ODM (Object Data Modeling) para facilitar a interação com o MongoDB.
- newsapi: Uma biblioteca para acessar serviços de notícias externas.
- Node.js: Uma plataforma de runtime que permite a execução de código JavaScript no servidor.
- validator: Biblioteca para validação de dados.
- Winston: Bibliotecas para criar e gerenciar registros de logs no aplicativo.

## Hospedagem no Google Cloud:

Este projeto será hospedado no Google Cloud na Fase 3 do projeto "PesquiseNews" para que você possa acessá-lo online. O backend do aplicativo será implantado em uma instância do Google Compute Engine, enquanto o frontend estará hospedado no Google Cloud Storage. Isso permitirá experimentar o aplicativo sem precisar configurar nada localmente.

Agradecemos por visitar o aplicativo hospedado no Google Cloud!

### Desenvolvido por:
Evandro de Melo desenvolveu este back-end como uma extensão do projeto "PesquiseNews". O objetivo é proporcionar uma experiência de usuário fluida, permitindo a busca e gestão de notícias de forma eficaz e em tempo real. Graças à integração com a News API, os usuários têm acesso a artigos e notícias de todo o mundo, de fontes confiáveis e renomadas.

### Considerações Finais:
A implementação do back-end para o "PesquiseNews" não apenas eleva a funcionalidade do aplicativo, mas também exemplifica a integração eficiente de diversas tecnologias e bibliotecas para criar uma solução full-stack. Seja você um entusiasta de notícias ou apenas um usuário curioso, convidamos você a experimentar este aplicativo e mergulhar no mundo das notícias em tempo real.

### Licença:
- Este projeto é open source. Você é livre para usar e modificar, desde que mantenha a atribuição dos autores originais.

### Link para o código fonte do Projeto:
- Código-fonte do projeto: [Código-fonte do projeto](https://github.com/Evandro-developer/projeto-pesquisenews-backend)

#### Agradecimentos:
- Agradecemos por acompanhar o desenvolvimento deste projeto.