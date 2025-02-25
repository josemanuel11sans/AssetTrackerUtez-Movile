import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function InventariosScreen({ route, navigation }) {
  const { inventario } = route.params;
  
  const renderResourceItem = ({ item }) => (
    <TouchableOpacity style={styles.resourceCard}>
      <Text style={styles.resourceText}>Código: {item.codigo}</Text>
      <Text style={styles.resourceText}>Descripción: {item.descripcion}</Text>
      <Text style={styles.resourceText}>Marca: {item.marca}</Text>
      <Text style={styles.resourceText}>Modelo: {item.modelo}</Text>
      <Text style={styles.resourceText}>N° Serie: {item.nSerie}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={24} color="#133E87" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Recursos del Inventario</Text>
      </View>
      <FlatList
        data={inventario.recursos}
        renderItem={renderResourceItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.resourcesList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#BFD7EA', 
    padding: 20 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  backBtn: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    color: '#133E87',
  },
  resourcesList: {
    paddingBottom: 20,
  },
  resourceCard: {
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  resourceText: {
    fontSize: 14,
    color: '#333',
    marginVertical: 2,
  },
  noData: {
    fontSize: 16,
    color: '#133E87',
    textAlign: 'center',
    marginTop: 20,
  },
});