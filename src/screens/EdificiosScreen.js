import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import edificios from '../data/edificios';

const EdificiosScreen = () => {
  const [search, setSearch] = useState('');
  const [filteredEdificios, setFilteredEdificios] = useState(edificios);
  const navigation = useNavigation();

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const newData = edificios.filter(item => {
        const itemData = item.nombre ? item.nombre.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredEdificios(newData);
    } else {
      setFilteredEdificios(edificios);
    }
  };

  const handleCardPress = (item) => {
    navigation.navigate('Espacios', { edificio: item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleCardPress(item)}>
      <Text style={styles.cardText}>{item.nombre}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>Ubicación Actual</Text>
        <Ionicons name="chevron-forward" size={20} color="#133E87" />
      </View>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#133E87" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Buscar edificio"
          placeholderTextColor="#608BC1"
          value={search}
          onChangeText={text => handleSearch(text)}
        />
      </View>
      <FlatList
        data={filteredEdificios}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  locationText: {
    fontSize: 16,
    color: '#133E87',
    marginRight: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    color: '#608BC1',
  },
  card: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
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
    fontSize: 18,
    color: '#333',
  },
  flatListContent: {
    flexGrow: 1,
  },
  flatList: {
    flex: 1,
    height: '100%', // Asegura que el FlatList ocupe todo el espacio disponible en altura
  },
});

export default EdificiosScreen;