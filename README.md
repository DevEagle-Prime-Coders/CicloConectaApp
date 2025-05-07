# Aplicativo CicloConecta com Chatbot Maya (Protótipo)

Este é o código-fonte do protótipo do aplicativo móvel CicloConecta, desenvolvido com React Native e Expo, incluindo a estrutura para o chatbot Maya com integração (simulada) ao Dialogflow ES.

## Estrutura do Projeto

-   `/screens`: Contém todas as telas do aplicativo, incluindo `ChatbotScreen.js`.
-   `/navigation`: Contém a configuração da navegação (`AppNavigator.js`).
-   `/dialogflow_config`: Contém exemplos de arquivos JSON de intents para importação no Dialogflow ES.
-   `App.js`: Ponto de entrada principal do aplicativo.
-   `package.json`: Lista as dependências do projeto.

## Como Executar o Aplicativo Localmente

1.  **Pré-requisitos:**
    *   Node.js (versão LTS recomendada)
    *   npm ou Yarn
    *   Expo CLI: `npm install -g expo-cli`
    *   Um emulador Android (Android Studio) ou iOS (Xcode) configurado no seu computador, ou o aplicativo Expo Go instalado em um dispositivo físico.

2.  **Descompacte o Projeto:**
    *   Extraia o conteúdo do arquivo `cicloconecta-app.zip` para uma pasta no seu computador.

3.  **Instale as Dependências:**
    *   Abra um terminal ou prompt de comando na pasta raiz do projeto (onde está o arquivo `package.json`).
    *   Execute o comando: `npm install` (ou `yarn install` se você usa Yarn).

4.  **Inicie o Servidor de Desenvolvimento Expo:**
    *   No mesmo terminal, execute: `npx expo start`
    *   Isso abrirá o Metro Bundler no seu navegador e exibirá um QR Code.

5.  **Execute no Emulador/Dispositivo:**
    *   **Emulador Android:** Com o emulador Android já em execução, pressione `a` no terminal onde o Metro Bundler está rodando.
    *   **Emulador iOS:** Com o emulador iOS já em execução, pressione `i` no terminal.
    *   **Dispositivo Físico (com Expo Go):** Instale o app Expo Go no seu celular (Android ou iOS). Escaneie o QR Code exibido no terminal ou no navegador com o app Expo Go.

## Configurando a Integração Real com Dialogflow ES

A tela `screens/ChatbotScreen.js` está preparada para se comunicar com um agente Dialogflow ES, mas atualmente as respostas são simuladas.

Para conectar ao seu agente Dialogflow real:

1.  **Crie/Configure seu Agente no Dialogflow ES:**
    *   Acesse o [console do Dialogflow ES](https://dialogflow.cloud.google.com/).
    *   Crie um novo agente ou use um existente.
    *   Você pode importar os arquivos JSON de exemplo da pasta `/dialogflow_config/intents` para criar os intents básicos que preparamos (Saudacao, InfoCicloMenstrual, etc.).
    *   Treine seu agente após criar/importar os intents.

2.  **Obtenha as Credenciais da Conta de Serviço:**
    *   No Google Cloud Platform (GCP), vá para "IAM e Admin" > "Contas de serviço".
    *   Crie uma nova conta de serviço ou use uma existente que tenha a permissão "Cliente da API do Dialogflow" (roles/dialogflow.apiClient).
    *   Crie uma chave JSON para esta conta de serviço e faça o download do arquivo JSON.

3.  **Atualize o Código do Aplicativo:**
    *   Abra o arquivo `/screens/ChatbotScreen.js` no seu editor de código.
    *   Localize as seguintes constantes no início do arquivo:
        ```javascript
        const DIALOGFLOW_PROJECT_ID = 'SEU_PROJECT_ID_AQUI';
        const DIALOGFLOW_SERVICE_ACCOUNT_KEY_JSON = { /* ... estrutura JSON ... */ };
        ```
    *   Substitua `'SEU_PROJECT_ID_AQUI'` pelo ID do seu projeto Dialogflow (que você encontra nas configurações do seu agente Dialogflow).
    *   Substitua todo o conteúdo do objeto `DIALOGFLOW_SERVICE_ACCOUNT_KEY_JSON` pelo conteúdo real do arquivo JSON da chave da sua conta de serviço que você baixou.
        *   **IMPORTANTE:** Manter chaves de conta de serviço diretamente no código do cliente é inseguro para aplicativos de produção. Para produção, você deve criar um servidor backend que lide com as chamadas para o Dialogflow, e o aplicativo se comunicaria com seu backend. O método atual é para facilitar os testes do protótipo.

4.  **Descomente o Código de Chamada Real (Opcional - para teste direto, com ressalvas de segurança):**
    *   No arquivo `ChatbotScreen.js`, na função `sendToDialogflow`, você encontrará seções comentadas para a chamada `fetch` real e o processamento da resposta. Se você configurou as credenciais e entende os riscos de segurança para um teste local, pode descomentar essas partes e comentar a seção de "SIMULAÇÃO DA RESPOSTA DO DIALOGFLOW".
    *   Lembre-se que a autenticação para a API v2 do Dialogflow geralmente requer um token de acesso OAuth 2.0, que seria gerado por uma biblioteca como `google-auth-library` em um ambiente Node.js (backend) usando a chave da conta de serviço. A chamada direta do cliente com a chave completa é complexa e insegura.

## Próximos Passos Sugeridos

*   Testar exaustivamente o fluxo de chat no seu emulador/dispositivo.
*   Expandir os intents e entidades no Dialogflow para cobrir mais tópicos.
*   Refinar as respostas do chatbot para serem mais completas e empáticas.
*   Implementar um backend seguro para intermediar as chamadas para o Dialogflow em um ambiente de produção.
*   Adicionar mais funcionalidades às outras telas do aplicativo.

Boa sorte com os testes e o desenvolvimento!

