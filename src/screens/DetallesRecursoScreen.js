import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetallesRecursoScreen({ route, navigation }) {
  const { recurso } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image source={recurso.image} style={styles.productImg} />
        </View>
        <View style={styles.datosContainer}>
          <Text style={styles.codigo}>{recurso.codigo}</Text>
          <Text style={styles.ubicacion}>{recurso.ubicacion.edificio} - {recurso.ubicacion.espacios}</Text>

          <Text style={styles.label}>
            <Text style={styles.bold}>Observaciones: </Text> {recurso.observaciones}
          </Text>
          <Text style={styles.label}>
            <Text style={styles.bold}>Marca: </Text> {recurso.marca}
          </Text>
          <Text style={styles.label}>
            <Text style={styles.bold}>Modelo: </Text> {recurso.modelo}
          </Text>
          <Text style={styles.label}>
            <Text style={styles.bold}>Categoría: </Text> {recurso.categoria}
          </Text>
          <Text style={styles.label}>
            <Text style={styles.bold}>Responsable: </Text> {recurso.responsable}
          </Text>
        </View>

      </View>

      <TouchableOpacity style={styles.button} onPress={() => alert('Información mostrada')}>
        <Text style={styles.buttonText}>Mostrar información</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BFD7EA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: '90%',
  },
  datosContainer:{
    alignItems: 'flex-start',
    alignContent: 'center'
  },
  imgContainer: {
    backgroundColor: '#f3f3f3',
    height: 180,
    width: 230,
    alignItems: 'center',
    alignContent: 'center',
    padding: 10
  },
  productImg: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
  },
  codigo: {
    fontSize: 14,
    fontWeight: '400',
    color: '#1E1E1E',
  },
  ubicacion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    margin: 3
  },
  label: {
    fontSize: 14,
    color: '#757575',
    marginVertical: 2,
  },
  bold: {
    fontWeight: 'bold',
    color: '#757575',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#133E87',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
