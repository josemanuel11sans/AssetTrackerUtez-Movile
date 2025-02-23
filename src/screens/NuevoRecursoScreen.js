import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const NuevoRecursoScreen = () => {
  const [category, setCategory] = useState('Silla');


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.containerScroll}>
        <View >
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>Inventario › Docencia 1 › Dirección › 17-01-2025</Text>
          </View>

          {/*<View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="eye" size={16} color="#FFF" />
              <Text style={styles.buttonText}> Observaciones</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="add" size={16} color="#FFF" />
              <Text style={styles.buttonText}> Ingresar código</Text>
            </TouchableOpacity>
          </View>*/}
          <View style={styles.form}>
          <Text style={styles.scanText}>Escanear código</Text>
          <View style={styles.card}>
            <Image source={require('../../assets/barcode.png')} style={styles.barcode} />
          </View>
          <Text style={styles.textInput}>Código</Text>
          <TextInput style={styles.input} placeholder="Código" />
          <Text style={styles.textInput}>Descripción</Text>
          <TextInput style={styles.input} placeholder="Descripción" />
          <Text style={styles.textInput}>Marca</Text>
          <TextInput style={styles.input} placeholder="Marca" />
          <Text style={styles.textInput}>Modelo</Text>
          <TextInput style={styles.input} placeholder="Modelo" />
          <Text style={styles.textInput}>Observaciones</Text>
          <TextInput style={styles.input} placeholder="Observaciones" />
          <Text style={styles.textInput}>Categoría de recurso</Text>
          <Picker
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
            style={styles.input}
          >
            <Picker.Item label="Silla" value="Silla" />
            <Picker.Item label="Mesa" value="Mesa" />
          </Picker>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Registrar</Text>
          </TouchableOpacity>
          </View>
        
        </View>
      </ScrollView>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CBDCEB',
    padding: 10,
  },
  containerScroll:{
    paddingBottom: 60,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  locationText: {
    fontSize: 16,
    color: '#133E87',
    marginRight: 5,
    alignSelf: 'flex-start'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#133E87',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    marginLeft: 5,
  },
  scanText: {
    color: '#133E87',
    fontSize: 16,
    marginBottom: 10,
  },
  card: {
    width: 200,
    height: 200,
    backgroundColor: '#F5F5E5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4
  },
  barcode: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  form:{
    flex:1,
    alignItems: 'center',
    paddingTop: 0,
    paddingLeft: 20,
    paddingRight: 20
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#637594',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4
  },
  textInput: {
    color: '#133E87',
    fontSize: 16,
    textAlign: 'left',
    alignSelf: 'flex-start',
    margin: 5
  },
  registerButton: {
    backgroundColor: '#133E87',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  registerButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default NuevoRecursoScreen;
