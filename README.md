Este projeto faz parte da minha jornada de estudos em JavaScript, com foco específico em requisições HTTP, manipulação de dados assíncronos e tratamento de erros.
Demonstração

Repositório: https://github.com/teuaraujoo/FetchApi
Tecnologias Utilizadas

HTML5
CSS3
JavaScript (ES6 Modules)
Axios
SweetAlert2
GSAP

Funcionalidades
Busca de CEP

Input para digitação do CEP
Validação e limpeza do formato usando Regex
Botão de busca para consultar informações

Exibição de Dados

Rua/Logradouro
DDD
Estado
Região

Tratamento de Erros

Validação de formato do CEP
Alertas personalizados com SweetAlert2 para CEPs inválidos
Feedback visual para erros de conexão ou falhas na busca

Conceitos Aplicados
JavaScript Moderno

ES6 Modules para organização do código
Promises
Fetch API
Manipulação do DOM
Event listeners (click)

Requisições HTTP

Tratamento de respostas
Gerenciamento de erros de requisição

Validação e Tratamento

Regex para limpeza e validação de CEP
Try/catch para captura de erros
Feedback visual para o usuário

Bibliotecas Externas

Axios - Cliente HTTP simplificado
SweetAlert2 - Alertas personalizados e elegantes
GSAP - Animação de entrada suave

Por que Axios?
Embora seja possível usar Fetch API nativo do JavaScript, optei por utilizar o Axios pelos seguintes motivos:

Sintaxe mais concisa e clara
Tratamento automático de JSON
Melhor manipulação de erros
Código mais limpo e legível
Facilita o trabalho com requisições HTTP

Como Executar

Clone o repositório:

git clone https://github.com/teuaraujoo/FetchApi.git

Entre na pasta do projeto:

bashcd FetchApi

Abra o arquivo index.html no navegador ou utilize Live Server no VS Code.

Obs: Por utilizar ES6 Modules, é necessário abrir através de um servidor local (Live Server) para evitar erros de CORS.
Fluxo de Funcionamento

Usuário digita o CEP no input
Sistema valida e limpa o formato usando Regex
Ao clicar no botão de busca, requisição é enviada via Axios
Se CEP for válido: dados são exibidos na tela
Se CEP for inválido ou houver erro: SweetAlert exibe mensagem de erro
Processo pode ser repetido para novas consultas

Validação de CEP
O sistema realiza limpeza do CEP digitado, removendo caracteres especiais e espaços através de expressões regulares (Regex), garantindo que apenas números sejam enviados para a API.
API Utilizada
ViaCEP - API pública e gratuita para consulta de CEPs brasileiros

Endpoint: https://viacep.com.br/ws/{cep}/json/
Documentação: viacep.com.br

Tempo de Desenvolvimento
Projeto desenvolvido em alguns minutos, com foco na aplicação prática de conceitos estudados sobre consumo de APIs e manipulação de dados assíncronos.
Aprendizados
Este projeto simples permitiu consolidar conhecimentos importantes:

Consumo de APIs REST na prática
Uso de bibliotecas externas (Axios, SweetAlert)
Organização de código com módulos JavaScript
Tratamento adequado de erros
Validação de dados do usuário
Feedback visual para melhor UX

Autor
Mateus Araújo

GitHub: @teuaraujoo
Frontend Mentor: @teuaraujoo

Licença
Projeto desenvolvido para fins educacionais e de estudo.

Desenvolvido como parte da jornada de aprendizado em JavaScript.
