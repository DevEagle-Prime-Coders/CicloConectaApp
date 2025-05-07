import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SaudeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Módulo Saúde Reprodutiva</Text>
      {/* Conteúdo futuro: Acesso ao Rastreador de Ciclo, Chatbot Maya, Biblioteca */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default SaudeScreen;

