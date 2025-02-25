import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function DetallesRecursoScreen({ route, navigation }) {
  const { recurso } = route.params;
  const [searchText, setSearchText] = useState('');
  const [filteredResources, setFilteredResources] = useState(recurso.recursos || []);

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = recurso.recursos.filter((item) =>
      item.codigo.toLowerCase().includes(text.toLowerCase()) ||
      item.descripcion.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredResources(filtered);
  };

  const renderResourceItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardText}>Código: {item.codigo}</Text>
      <Text style={styles.cardText}>Descripción: {item.descripcion}</Text>
      <Text style={styles.cardText}>Marca: {item.marca}</Text>
      <Text style={styles.cardText}>Modelo: {item.modelo}</Text>
      <Text style={styles.cardText}>N° Serie: {item.nSerie}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#133E87" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Detalles del Recurso</Text>
      </View>

      <TextInput
        style={styles.searchBar}
        placeholder="Buscar recurso..."
        value={searchText}
        onChangeText={handleSearch}
      />

      {filteredResources.length > 0 ? (
        <FlatList
          data={filteredResources}
          renderItem={renderResourceItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <Text style={styles.noResults}>No hay recursos disponibles</Text>
      )}

      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AgregarRecursoScreen')}>
        <Ionicons name="add" size={24} color="#fff" />
        <Text style={styles.addButtonText}>Agregar Recurso</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBDCEB',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    color: '#133E87',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  listContainer: {
    flexGrow: 1,
  },
  card: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    maxWidth: '45%',
  },
  cardText: {
    fontSize: 14,
    color: '#333',
  },
  noResults: {
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
    marginTop: 20,
  },
  addButton: {
    flexDirection: 'row',
    backgroundColor: '#133E87',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
