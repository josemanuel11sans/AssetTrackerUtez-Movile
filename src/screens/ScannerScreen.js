import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import recursos from '../data/recursos';
import { useNavigation } from '@react-navigation/native';

const handleCardPress = (item, navigation) => {
  navigation.navigate('DetallesRecurso', { recurso: item });
};
const ScannerScreen = () => {
  const firstItem = recursos.length > 0 ? recursos[0] : null;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require('../../assets/barcode.png')} style={styles.barcode} />
      </View>
      <Text style={styles.instructionText}>
        Escanea el recurso, el código de barras se encuentra debajo del recurso.
      </Text>
      <TouchableOpacity style={styles.button}   onPress={() => handleCardPress(firstItem, navigation)}

      >
        <Text style={styles.buttonText}>Mostrar información</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CBDCEB',
    padding: 20,
  },
  card: {
    width: 300,
    height: 300,
    backgroundColor: '#F5F5E5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    verticalAlign: 'top'
  },
  barcode: {
    width: 250,
    height: 125,
    resizeMode: 'contain',
  },
  instructionText: {
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#133E87',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default ScannerScreen;