import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import recursos from '../data/recursos';

export default function InventariosPorEspacioScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { espacio } = route.params;
  console.log('Espacio recibido:', espacio); // Depuración

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DetallesRecurso', { recurso: item })}>
      <Text style={styles.inventarioFecha}>Inventario: {item.fecha}</Text>
      <Image source={{ uri: item.imagen }} style={styles.cardImage} />
      <View style={styles.resourceContainer}>
        <Ionicons name="layers-outline" size={16} color="#fff" />
        <Text style={styles.resourceText}>{item.cantidad}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title} onPress={() => navigation.goBack()}>
          Espacios {'>'} {espacio.nombre}
        </Text>
      </View>
      {espacio.inventarios && espacio.inventarios.length > 0 ? (
        <FlatList
          data={espacio.inventarios}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text style={styles.noData}>No hay inventarios disponibles.</Text>
      )}
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
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
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
    maxWidth: "45%",
    alignItems: 'center',
  },
  inventarioFecha: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#133E87',
    marginBottom: 5,
  },
  cardImage: {
    width: "100%",
    height: 80,
    borderRadius: 8,
    marginBottom: 5,
  },
  resourceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#133E87',
    borderRadius: 50,
    padding: 5,
    alignSelf: 'flex-start',
  },
  resourceText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#fff',
  },
  flatListContent: {
    paddingBottom: 20,
  },
  noData: {
    fontSize: 16,
    color: '#133E87',
    textAlign: 'center',
    marginTop: 20,
  },
});