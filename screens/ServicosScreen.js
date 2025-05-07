import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ServicosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Módulo Conexão com Serviços</Text>
      {/* Conteúdo futuro: Mapa de Serviços, Agendamento, Teleconsulta, Alertas */}
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

export default ServicosScreen;

