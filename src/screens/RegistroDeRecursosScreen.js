import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import recursos from '../data/recursos';
import { useNavigation } from '@react-navigation/native';

export default function RegistroDeRecursosScreen() {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [filteredRecursos, setFilteredRecursos] = useState(recursos);

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const newData = recursos.filter(item => {
        const itemData = item.nombre ? item.nombre.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredRecursos(newData);
    } else {
      setFilteredRecursos(recursos);
    }
  };

  const handleCardPress = (item) => {
    navigation.navigate('DetallesRecurso', { recurso: item });
  };
  const handleButtonPress = () => {
    navigation.navigate('NuevoRecurso');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.card} 
       onPress={() => handleCardPress(item)}
    >
      <Text style={styles.cardText}>{item.codigo} - {item.nombre}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>Inventario › Docencia 1 › Dirección › 17-01-2025</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#133E87" style={styles.searchIcon} />
          <TextInput
            style={styles.searchBar}
            placeholder="Buscar recurso"
            placeholderTextColor="#608BC1"
            value={search}
            onChangeText={text => handleSearch(text)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress()}>
          <Ionicons name="add" size={18} color="#FFF" />
          <Text style={styles.buttonText}> Nuevo</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={filteredRecursos}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#CBDCEB',
  },
  locationContainer: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  locationText: {
    fontSize: 16,
    color: '#133E87',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginRight: 10,
    width: '60%'
  },
  searchIcon: {
    marginRight: 5,
  },
  searchBar: {
    flex: 1,
    height: 40,
    color: '#608BC1',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#133E87',
    padding: 10,
    borderRadius: 10,
    alignContent: 'center',
    width: '40%'
  },
  buttonText: {
    color: '#FFF',
    marginLeft: 5,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    margin: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: {
    fontSize: 18,
    color: '#608BC1',
    fontWeight: '600',
  },
  flatListContent: {
    flexGrow: 1,
  },
  flatList: {
    flex: 1,
  },
});
