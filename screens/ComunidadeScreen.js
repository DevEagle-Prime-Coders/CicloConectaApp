import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComunidadeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Módulo Comunidade e Suporte</Text>
      {/* Conteúdo futuro: Fórum Seguro, Grupos de Apoio */}
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

export default ComunidadeScreen;

