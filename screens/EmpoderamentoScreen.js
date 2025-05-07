import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmpoderamentoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Módulo Empoderamento Socioeconômico</Text>
      {/* Conteúdo futuro: Educação Financeira, Capacitação, Conexão com Oportunidades */}
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

export default EmpoderamentoScreen;

