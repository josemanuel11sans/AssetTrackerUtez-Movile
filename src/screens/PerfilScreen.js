import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PerfilScreen = () => {
  const user = {
    nombre: 'Juan Pérez',
    correo: 'juan.perez@utez.edu.mx',
    rol: 'Administrador',
  };

  const navigation = useNavigation();

  const handleLogout = () => {
    // Lógica para cerrar sesión
    navigation.navigate('Login');
  };

  const handleThemeChange = () => {
    // Lógica para cambiar el tema
    alert('Cambiar tema');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Ionicons name="person-circle-outline" size={100} color="#133E87" />
        <Text style={styles.name}>{user.nombre}</Text>
        <Text style={styles.email}>{user.correo}</Text>
        <Text style={styles.role}>{user.rol}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleThemeChange}>
        <Ionicons name="color-palette-outline" size={24} color="#FFFFFF" />
        <Text style={styles.buttonText}>Cambiar Tema</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color="#FFFFFF" />
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBDCEB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#133E87',
    marginTop: 10,
  },
  email: {
    fontSize: 18,
    color: '#133E87',
    marginTop: 5,
  },
  role: {
    fontSize: 18,
    color: '#133E87',
    marginTop: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#133E87',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width: '80%',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default PerfilScreen;