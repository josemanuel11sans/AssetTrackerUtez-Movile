import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function EspaciosScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { edificio } = route.params;
  const [search, setSearch] = useState('');
  const [filteredEspacios, setFilteredEspacios] = useState(edificio.espacios);

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const newData = edificio.espacios.filter(item =>
        item.nombre.toUpperCase().includes(text.toUpperCase())
      );
      setFilteredEspacios(newData);
    } else {
      setFilteredEspacios(edificio.espacios);
    }
  };

  const handleCardPress = (item) => {
    navigation.navigate('Inventarios', { espacio: item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleCardPress(item)}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.nombre}</Text>
      </View>
      <Image source={{ uri: item.imagen }} style={styles.cardImage} />
      <View style={styles.resourceContainer}>
        <MaterialCommunityIcons name="chair-school" size={16} color="#fff" />
        <Text style={styles.resourceText}>{item.recursos}</Text>
      </View>
      <Text style={styles.dateText}>{item.ultimaActualizacion}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.breadcrumb} onPress={() => navigation.goBack()}>Inventario {'>'} {edificio.nombre}</Text>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#133E87" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Buscar espacio"
          placeholderTextColor="#608BC1"
          value={search}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        data={filteredEspacios}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
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
  breadcrumb: {
    fontSize: 14,
    color: '#133E87',
    marginLeft: 15,
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    marginBottom: 15,
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
    color: '#133E87',
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    maxWidth: '45%',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#133E87',
  },
  cardImage: {
    width: '100%',
    height: 80,
    borderRadius: 8,
    marginVertical: 5,
  },
  resourceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#133E87',
    borderRadius: 15,
    padding: 5,
    alignSelf: 'flex-start',
  },
  resourceText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#fff',
  },
  dateText: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
    textAlign: 'right',
  },
  flatListContent: {
    paddingBottom: 20,
  },
});
