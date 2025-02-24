import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function EspaciosScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { edificio } = route.params;
  const [search, setSearch] = useState('');
  const [filteredEspacios, setFilteredEspacios] = useState(edificio.espacios);

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const newData = edificio.espacios.filter(item => {
        const itemData = item.nombre ? item.nombre.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredEspacios(newData);
    } else {
      setFilteredEspacios(edificio.espacios);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.cardTitle}>{item.nombre}</Text>
      <Text style={styles.cardText}>Recursos: {item.recursos}</Text>
      <Text style={styles.cardText}>Última actualización: {item.ultimaActualizacion}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title} onPress={() => navigation.goBack()}>Edificios</Text>
        <Ionicons name="chevron-back" size={24} color="#133E87"  />
        <Text style={styles.title}>{edificio.nombre}</Text>
      </View>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#133E87" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Buscar espacio"
          placeholderTextColor="#608BC1"
          value={search}
          onChangeText={text => handleSearch(text)}
        />
      </View>
      <FlatList
        data={filteredEspacios}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBDCEB',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  title: {
    marginRight: 2,
    fontSize: 20,
    color: '#133E87',
    marginLeft: 10,
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
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 16,
    color: '#333',
  },
  flatListContent: {
    flexGrow: 1,
  },
  flatList: {
    flex: 1,
    height: '100%',
  },
});