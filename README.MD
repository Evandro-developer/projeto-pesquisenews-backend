# Projeto final: PesquiseNews API RESTfull

Este projeto, intitulado [PesquiseNews](https://pesquisenews.com.br), oferece uma solução full-stack para busca e gestão de notícias em tempo real. Aqui está um resumo dos principais pontos abordados:

Para obter informações sobre o frontend do [PesquiseNews](https://pesquisenews.com.br), consulte o [README do projeto-pesquisenews-frontend](https://github.com/Evandro-developer/projeto-pesquisenews-frontend).

## Sumário:
1. [Fase 2: Back-End](#fase-2-back-end)
2. [Descrição do Projeto](#descrição-do-projeto)
3. [Back-End - Arquitetura e Características](#back-end---arquitetura-e-características)
4. [Middleware e Utilitários](#middleware-e-utilitários)
5. [Funcionalidades](#funcionalidades)
6. [Instalação e Execução](#Instalação-e-Execução)
7. [Configuração do arquivo .env](#Configuração-do-arquivo-.env)
8. [Endpoints da API](#Endpoints-da-API)
9. [Tecnologias - Bibliotecas e Frameworks Utilizados](#Tecnologias---Bibliotecas-e-Frameworks-Utilizados)
10. [Função de Validação de Artigos](#função-de-validação-de-artigos)
11. [Hospedagem no Google Cloud](#hospedagem-no-google-cloud)
12. [Desenvolvido por](#desenvolvido-por)
13. [Considerações Finais](#considerações-finais)
14. [Licença](#licença)
15. [Código-Fonte](#código-fonte)
16. [Agradecimentos](#agradecimentos)

## Fase 2: Back-End Etapa única

## Descrição do Projeto:
O projeto é uma etapa final do curso de desenvolvimento web da [Tripleten](https://tripleten.com/pt-bra/), com foco na implementação de um back-end robusto que se integra a um aplicativo de busca de notícias.
Esta etapa introduz um back-end robusto para o aplicativo, proporcionando uma experiência full-stack integrada. Esse back-end serve como a espinha dorsal do aplicativo, permitindo a busca e gestão de notícias em tempo real.
Com a integração à [News API](https://newsapi.org/), é possível acessar artigos e notícias de fontes confiáveis e renomadas ao redor do mundo.

## Back-End - Arquitetura e Características:
- Tecnologia de Base: O back-end é construído sobre o **Node.js**, usando o **Express.js** como framework, permitindo uma construção rápida e eficiente de APIs.
- Base de Dados: Integrado ao **MongoDB**, um banco de dados NoSQL, garantindo armazenamento persistente de dados, incluindo perfis de usuários e artigos favoritos.
- Autenticação de Usuários: Implementação de tokens JWT (JSON Web Tokens) para autenticação e proteção de rotas.

## Middleware e Utilitários:
- CORS: Configurado para aceitar solicitações apenas de domínios confiáveis.
- Helmet: Ajuda na proteção do aplicativo contra vulnerabilidades web comuns.
- Celebrate: Utilizado para validação de dados e manutenção da integridade dos dados.
- Logger: Registro personalizado de todas as solicitações e erros, facilitando a depuração e monitoramento.

## Funcionalidades:
- Busca de Notícias: Os usuários podem pesquisar notícias em tempo real de fontes confiáveis e renomadas usando a API externa [News API](https://newsapi.org/).
- Gestão de Artigos: Os usuários autenticados podem salvar, visualizar e excluir artigos de suas listas favoritas.
- Autenticação: Processos de registro ("signup") e login ("signin") estão implementados, com validações para garantir a segurança das informações dos usuários.
- Limitação de Taxa: Implementada para prevenir abuso da API, assegurando uma utilização justa e eficiente.
- Tratamento de Erros: Middleware personalizado para tratamento de erros, garantindo que os usuários recebam mensagens de erro claras e úteis.

## Instalação e Execução:
- Faça o download ou clone este repositório em seu ambiente de desenvolvimento.
- Abra o terminal e navegue até a pasta raiz do projeto.
- Execute o comando npm install para instalar as dependências.
- Configure as variáveis de ambiente no arquivo .env (consulte o exemplo .env.example).
- Execute o comando npm start para iniciar o servidor.

## Configuração do arquivo .env:
O arquivo `.env` é usado para configurar variáveis de ambiente necessárias para o projeto funcionar corretamente. Você deve criar este arquivo na raiz do projeto e definir os seguintes valores:
- **NODE_ENV**: Define o ambiente de execução do aplicativo (e.g., `development`, `production`).
- **DEV_JWT_SECRET**: Chave secreta usada para assinar tokens JWT em ambiente de desenvolvimento.
- **JWT_SECRET**: Chave secreta usada para assinar tokens JWT em ambiente de produção.
- **PORT**: A porta na qual o servidor será executado (e.g., `3001`).
- **NEWS_API_KEY**: Sua chave de API para acessar serviços de notícias externas, pode ser solicitada gratuitamente em ([News API](https://newsapi.org/)).
- **MONGODB_URI**: A URL de conexão com o banco de dados **MongoDB**(e.g., `ex. myDb`).
Para criar o arquivo `.env`, você pode copiar o conteúdo do arquivo `.env.example` e preencher os valores apropriados.

## Endpoints da API:

### Buscar artigos de notícias
- **Método**: GET
- **Endpoint**: `/`
- **Descrição**: Busca artigos de notícias por meio de nossa API, que, por sua vez, consulta a [News API](https://newsapi.org/).
- **Exemplo de uso**: `http://localhost:3001?q=Praias do Nordeste`

Qualquer usuário (mesmo não autenticado) pode pesquisar por notícias usando uma palavra-chave. A pesquisa retorna os resultados em um formato que se adequa ao schema do artigo. No entanto, esses artigos ainda não são salvos no banco de dados neste momento.

Permite a todos a pesquisa: Isso proporciona um acesso fácil a informações e também pode incentivar os usuários a se registrarem/logarem para que possam salvar artigos de seu interesse.

### Autenticação
- **Método**: POST
- **Endpoint**: /signup
- **Descrição**: Registrar um novo usuário no sistema.

- **Método**: POST
- **Endpoint**: /signin
- **Descrição**: Autenticar um usuário existente e retornar um token de autenticação.

Exigir autenticação para salvar artigos: Isto garante que apenas os usuários registrados possam salvar artigos, o que é útil para personalizar a experiência do usuário, manter uma lista de artigos salvos e talvez até mesmo evitar spam ou uso indevido da API.

Apenas usuários autenticados podem criar (ou salvar) um artigo.
A função primeiro verifica se o usuário já salvou um artigo com a mesma URL. Se sim, ele retorna um erro.
Se o artigo ainda não foi salvo pelo usuário, ele é criado no banco de dados.
Em seguida, o artigo é associado ao usuário atualizando a lista de savedArticles do usuário no banco de dados.

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
- 🔑 **Tokens JWT**: Utilização de tokens JSON Web Token para autenticar e autorizar usuários de forma segura.
- 🔐 **bcryptjs**: Biblioteca para criptografia de senhas e verificação de hashes.
- 🛂 **jsonwebtoken**: Implementação de tokens JWT para autenticação.

### Banco de Dados:
- 🍃 **MongoDB**: Um banco de dados NoSQL usado para armazenamento de dados.
- 📄 **mongoose**: Biblioteca ODM (Object Data Modeling) para facilitar a interação com o **MongoDB**.

### Validadores e Middleware:
- ✅ **celebrate**: Middleware para validar entradas de solicitação, utilizado para validação de dados.
- 📋 **joi**: Biblioteca para validação de dados.
- ✔️ **validator**: Biblioteca para validação de dados.
- 🔗 **cors**: Middleware para habilitar o controle de acesso a recursos de diferentes origens.

### Segurança e Monitoramento:
- ⛑️ **Helmet**: Ajuda na proteção do aplicativo contra vulnerabilidades web comuns.
- 🚧 **Express-rate-limit**: Middleware para limitar a taxa de solicitações à API.

### Registro e Debugging:
- 📜 **Logger**: Registro personalizado de todas as solicitações e erros, facilitando a depuração e monitoramento.
- 🖊️ **Winston**: Bibliotecas para criar e gerenciar registros de logs no aplicativo.
- 📒 **express-winston**: Bibliotecas para criar e gerenciar registros de logs no aplicativo.

### Outros:
- 🌍 **dotenv**: Biblioteca para carregar variáveis de ambiente a partir de um arquivo .env.
- 🚫 **eslint**: Ferramenta de linting para garantir a qualidade do código JavaScript.
- 📏 **eslint-config-airbnb-base**: Configuração do ESLint seguindo as regras do Airbnb para código JavaScript.
- 🛤️ **Express**: Um framework **Node.js** para construção de aplicativos web e APIs.
- 🟩 **Node.js**: Uma plataforma de runtime que permite a execução de código JavaScript no servidor.

Da arquitetura do backend e sua integração com serviços de frontend. O projeto reforça a importância de criar soluções seguras, escaláveis e eficientes para atender às demandas dos usuários.

## Função de Validação de Artigos:
Uma das principais funcionalidades introduzidas no backend é a validação de artigos antes de sua inclusão ou exibição. Esta função, denominada **isValidArticle**, garante que os artigos que estão sendo processados pelo nosso sistema não contêm valores indesejados ou datas inválidas.

### Descrição da Funcionalidade:
A função **isValidArticle** serve para verificar a integridade e relevância dos artigos. Ela se concentra em duas verificações principais:

### Verificação de Conteúdo Indesejado:
A função verifica se os artigos contêm quaisquer conteúdos indesejados, como links removidos, valores nulos ou placeholders comuns que podem indicar um artigo comprometido ou incompleto. Esta verificação é essencial para manter a integridade do conteúdo exibido aos usuários.

### Verificação de Data:
Outra verificação crucial é para a data de publicação do artigo. Se um artigo possui uma data que coincide com "1970-01-01T00:00:00Z", isso pode indicar uma data inválida ou um placeholder, sendo assim, o artigo é considerado inválido.

A função retorna true se o artigo for válido (não contém conteúdo indesejado ou data inválida) e false caso contrário. Esta validação é crucial para garantir que o conteúdo apresentado aos usuários seja de alta qualidade e relevância, e que os artigos comprometidos ou irrelevantes não sejam processados inadvertidamente.

**const isValidArticle** = (article) => {
  // Lista de valores indesejados
  const undesiredValues = [null, "[Removed]", `https://removed.com`];

  // Verifica se algum valor indesejado está presente em quaisquer propriedades dos artigos
  const hasUndesiredContent = [
    "title",
    "description",
    "source",
    "url",
    "urlToImage",
  ].some((prop) => undesiredValues.includes(article[prop]));

  // Verifica se tem uma data inválida
  const hasInvalidDate = article.publishedAt === "1970-01-01T00:00:00Z";

  return !(hasUndesiredContent || hasInvalidDate);
};

Recomendamos que os desenvolvedores implementem sempre verificações como esta ao lidar com conteúdo de terceiros ou dados de APIs externas, garantindo assim a segurança, integridade e a melhor experiência do usuário.

## Hospedagem no Google Cloud:
Este projeto foi hospedado no **Google Cloud** na Fase 3 do projeto [PesquiseNews](https://pesquisenews.com.br) para que você possa acessá-lo online. O backend do aplicativo implantado em uma instância do Google Compute Engine, enquanto o frontend no **Google Cloud Storage**. Isso permite experimentar o aplicativo sem precisar configurar nada localmente, aproveitando a infraestrutura e serviços de nuvem escaláveis. O GCP proporciona uma solução confiável e eficiente para hospedagem de aplicações, permitindo a nossa API ter alta disponibilidade e baixa latência.

Agradecemos por visitar o aplicativo hospedado no **Google Cloud**!

## Desenvolvido por:

### **Evandro M Oliveira**
**Profissão**: Desenvolvedor Web.
**Especialidade**: Domínio em **Node.js**, **Express.js**, otimização de consultas em **MongoDB** e **React**.
**Formação**: Atualmente cursando Ciência de Dados e um Boot Camp em Análise de Dados. Também aprofundando conhecimentos em Design de UI/UX.
**Contribuição ao projeto**: Desenvolvimento e hospedagem do back-end na **Google Cloud**.

### [**Tripleten**](https://tripleten.com/pt-bra/)
**Contribuição ao projeto**: Design e experiência do usuário.

## Considerações Finais:
A implementação do back-end para o [PesquiseNews](https://pesquisenews.com.br) não apenas eleva a funcionalidade do aplicativo, mas também exemplifica a integração eficiente de diversas tecnologias e bibliotecas para criar uma solução full-stack. Seja você um entusiasta de notícias ou apenas um usuário curioso, convidamos você a experimentar este aplicativo e mergulhar no mundo das notícias em tempo real.
Agradecemos a todos que contribuíram para o sucesso deste projeto. A implementação da API RESTfull marcou uma grande etapa em minha jornada de aprendizado, permitindo compreender os intricados detalhes do desenvolvimento back-end. Espero continuar aprimorando minhas habilidades e trazer ainda mais inovações no futuro.

## Licença:
Este projeto é open source e está licenciado sob a Licença MIT. Isso significa que você é livre para usar, copiar, modificar e distribuir o projeto, desde que forneça os devidos créditos aos autores originais e siga os termos da licença.

O licenciamento sob a Licença MIT é uma maneira de permitir que outros desenvolvedores usem e contribuam para o projeto, enquanto também protege os direitos dos autores originais. Se você decidir usar ou modificar este projeto, lembre-se de incluir a licença original e dar crédito aos autores.

A Licença MIT é uma licença permissiva, o que significa que ela não coloca muitas restrições sobre como você pode usar ou redistribuir o software. No entanto, ela vem com uma isenção de responsabilidade importante, que basicamente diz que o software é fornecido "como está", sem qualquer tipo de garantia.

## Código-Fonte:
Acesse o [repositório do projeto](https://github.com/Evandro-developer/projeto-pesquisenews-backend) no GitHub para consultar o código-fonte completo e pode ser encontrado em nosso repositório no GitHub. Sinta-se à vontade para explorá-lo, fazer fork e contribuir com melhorias ou correções.

Se você estiver interessado em contribuir ou simplesmente quiser dar uma olhada, fique à vontade para visitar o repositório. Qualquer feedback ou contribuição é muito apreciado.

## Agradecimentos:
Agradecemos por acompanhar o desenvolvimento deste projeto, aos coordenadores, tutores e revisores da [Tripleten](https://tripleten.com/pt-bra/) por me guiarem durante este curso. Também gostaria de agradecer a toda a comunidade de desenvolvimento por fornecer recursos e ferramentas valiosos que facilitaram minha jornada de aprendizado.

Um agradecimento especial a todos que contribuíram para este projeto, seja por meio de código, design, testes ou simplesmente dando feedback. Cada contribuição fez a diferença e ajudou a moldar este projeto no que ele é hoje.

Além disso, gostaria de agradecer à comunidade de desenvolvedores e aos muitos recursos online que tornaram possível aprender e implementar as várias tecnologias e bibliotecas usadas neste projeto. A jornada de aprendizado nunca termina, e sou grato por todas as oportunidades de aprendizado que surgiram ao longo do caminho.

Finalmente, obrigado a você, leitor, por se interessar e gastar seu tempo aprendendo sobre o projeto [PesquiseNews](https://pesquisenews.com.br). Esperamos que você ache o projeto útil e talvez até seja inspirado a criar algo semelhante ou a contribuir para este projeto. Juntos, podemos continuar a expandir e melhorar o mundo do desenvolvimento web.

Obrigado.