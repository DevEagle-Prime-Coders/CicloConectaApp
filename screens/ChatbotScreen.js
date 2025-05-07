import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, StyleSheet, Alert } from 'react-native';
import uuid from 'react-native-uuid';

// --------------- CONFIGURAÇÃO DO DIALOGFLOW (A SER PREENCHIDA PELO USUÁRIO) ---------------
const DIALOGFLOW_PROJECT_ID = 'SEU_PROJECT_ID_AQUI'; // Substitua pelo seu Project ID do Dialogflow
const DIALOGFLOW_SESSION_ID = uuid.v4(); // Gera um ID de sessão único

// Conteúdo do seu arquivo JSON de chave de conta de serviço (Service Account Key)
// IMPORTANTE: Este é um exemplo de estrutura. Você precisará colar o conteúdo real do seu arquivo JSON aqui.
// Mantenha este arquivo seguro e NÃO o exponha publicamente no código do cliente em um app de produção.
// Idealmente, as chamadas para o Dialogflow devem ser feitas através de um backend seguro.
const DIALOGFLOW_SERVICE_ACCOUNT_KEY_JSON = {
  "type": "service_account",
  "project_id": "SEU_PROJECT_ID_AQUI",
  "private_key_id": "SUA_PRIVATE_KEY_ID_AQUI",
  "private_key": "-----BEGIN PRIVATE KEY-----\nSUA_PRIVATE_KEY_AQUI\n-----END PRIVATE KEY-----\n",
  "client_email": "SEU_CLIENT_EMAIL_AQUI",
  "client_id": "SEU_CLIENT_ID_AQUI",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "SUA_CLIENT_X509_CERT_URL_AQUI"
};
// --------------------------------------------------------------------------------------

const ChatbotScreen = () => {
  const [messages, setMessages] = useState([]);
  const [dialogflowToken, setDialogflowToken] = useState(null);

  // Simula a obtenção de um token de acesso (em um cenário real, isso viria do Google Auth)
  // Para a API detectIntent v2, você usaria um token de acesso OAuth 2.0 ou uma chave de API
  // se a API permitir. A biblioteca google-auth-library para Node.js lida com isso no backend.
  // Para chamadas diretas do cliente (NÃO RECOMENDADO PARA PRODUÇÃO COM CHAVES DE SERVIÇO COMPLETAS):
  // A maneira mais segura é ter um backend que faz a chamada para o Dialogflow.
  // Esta simulação é apenas para ilustrar o fluxo.
  useEffect(() => {
    // Simulando a obtenção de um token. Em um app real, você usaria um fluxo OAuth 2.0
    // ou, mais provavelmente, faria as chamadas para Dialogflow a partir de um backend seguro.
    // Para este exemplo, vamos assumir que um token (mesmo que fictício) é necessário.
    setDialogflowToken('SIMULATED_ACCESS_TOKEN'); 

    setMessages([
      {
        _id: 1,
        text: 'Olá! Sou a Maya, sua assistente virtual do CicloConecta. Como posso te ajudar hoje sobre saúde reprodutiva?',
        createdAt: new Date(),
        user: {
          _id: 2, 
          name: 'Maya',
        },
      },
    ]);
  }, []);

  const handleDialogflowResponse = (dialogflowResult) => {
    let text = "Desculpe, não consegui entender. Pode tentar de outra forma?";
    if (dialogflowResult && dialogflowResult.queryResult && dialogflowResult.queryResult.fulfillmentText) {
      text = dialogflowResult.queryResult.fulfillmentText;
    }

    const botResponse = {
      _id: uuid.v4(),
      text: text,
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Maya',
      },
    };
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, [botResponse]),
    );
  };

  const sendToDialogflow = async (text) => {
    if (DIALOGFLOW_PROJECT_ID === 'SEU_PROJECT_ID_AQUI' || !DIALOGFLOW_SERVICE_ACCOUNT_KEY_JSON.private_key.includes('SUA_PRIVATE_KEY_AQUI')) {
      Alert.alert(
        "Configuração Necessária", 
        "Por favor, configure seu DIALOGFLOW_PROJECT_ID e as credenciais da conta de serviço no código para conectar ao Dialogflow."
      );
      // Simula uma resposta local se não configurado
      handleDialogflowResponse({ queryResult: { fulfillmentText: `Você disse: "${text}". (Modo de simulação - configure o Dialogflow)` } });
      return;
    }

    // ATENÇÃO: O código abaixo é uma representação de como seria uma chamada à API Dialogflow ES v2.
    // Em um aplicativo de produção, NUNCA incorpore chaves de conta de serviço diretamente no cliente.
    // Esta chamada deve ser feita a partir de um servidor backend seguro.
    // Este exemplo é apenas para fins ilustrativos do fluxo de dados.

    const dialogflowURL = `https://dialogflow.googleapis.com/v2/projects/${DIALOGFLOW_PROJECT_ID}/agent/sessions/${DIALOGFLOW_SESSION_ID}:detectIntent`;

    const requestBody = {
      queryInput: {
        text: {
          text: text,
          languageCode: 'pt-BR',
        },
      },
    };

    try {
      // Para autenticar, você precisaria de um token de acesso OAuth 2.0.
      // A biblioteca google-auth-library (Node.js) pode gerar isso usando a chave de conta de serviço.
      // Como estamos no cliente, e isso é inseguro, vamos apenas simular a chamada.
      console.log('Enviando para Dialogflow (simulado):', JSON.stringify(requestBody));
      // const response = await fetch(dialogflowURL, {
      //   method: 'POST',
      //   headers: {
      //     'Authorization': `Bearer ${dialogflowToken}`, // Token de acesso real aqui
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(requestBody),
      // });
      // const data = await response.json();
      // handleDialogflowResponse(data);

      // ---- SIMULAÇÃO DA RESPOSTA DO DIALOGFLOW ----
      let simulatedResponseText = "Resposta simulada do Dialogflow: " + text;
      if (text.toLowerCase().includes("ciclo menstrual")) {
        simulatedResponseText = "O ciclo menstrual é o tempo que vai do primeiro dia de uma menstruação até o dia antes da próxima. Dura em média 28 dias. O rastreador no app pode te ajudar! (Simulado)";
      } else if (text.toLowerCase().includes("contraceptivo") || text.toLowerCase().includes("evitar filhos")) {
        simulatedResponseText = "Existem vários métodos como pílula, DIU, camisinha. Qual te interessa? Lembre-se de falar com um médico. (Simulado)";
      }
      setTimeout(() => {
         handleDialogflowResponse({ queryResult: { fulfillmentText: simulatedResponseText } });
      }, 1000);
      // ---- FIM DA SIMULAÇÃO ----

    } catch (error) {
      console.error('Erro ao conectar com Dialogflow (simulado):', error);
      handleDialogflowResponse({ queryResult: { fulfillmentText: "Tive um problema para me conectar com o serviço de chat. Tente mais tarde. (Simulado)" } });
    }
  };

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
    const userMessage = messages[0];
    if (userMessage && userMessage.text) {
      sendToDialogflow(userMessage.text);
    }
  }, []);

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1, 
        }}
        placeholder="Digite sua mensagem para Maya..."
        showUserAvatar
        // renderUsernameOnMessage
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default ChatbotScreen;

