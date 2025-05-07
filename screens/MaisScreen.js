import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MaisScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mais Opções</Text>
      {/* Exemplo de navegação para uma futura tela de Sobre */}
      {/* <Button title="Sobre o App" onPress={() => navigation.navigate('SobreApp')} /> */}
      <Text>Configurações, Sobre, Ajuda/FAQ (Conteúdo Futuro)</Text>
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

export default MaisScreen;

