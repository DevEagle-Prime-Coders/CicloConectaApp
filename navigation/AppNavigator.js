import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SaudeScreen from '../screens/SaudeScreen';
import ServicosScreen from '../screens/ServicosScreen';
import EmpoderamentoScreen from '../screens/EmpoderamentoScreen';
import ComunidadeScreen from '../screens/ComunidadeScreen';
import MaisScreen from '../screens/MaisScreen';
import ChatbotScreen from '../screens/ChatbotScreen'; // Importa a nova tela do Chatbot

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Início" component={HomeScreen} />
        <Tab.Screen name="Saúde" component={SaudeScreen} />
        {/* Adicionando a tela do Chatbot Maya como uma nova aba */}
        <Tab.Screen name="Maya (Chatbot)" component={ChatbotScreen} /> 
        <Tab.Screen name="Serviços" component={ServicosScreen} />
        <Tab.Screen name="Empoderamento" component={EmpoderamentoScreen} />
        <Tab.Screen name="Comunidade" component={ComunidadeScreen} />
        <Tab.Screen name="Mais" component={MaisScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

