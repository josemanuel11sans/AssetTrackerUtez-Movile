import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PerfilScreen from '../screens/PerfilScreen';
import EdificiosScreen from '../screens/EdificiosScreen';
import ScannerScreen from '../screens/ScannerScreen';
import RegistroDeRecursosScreen from '../screens/RegistroDeRecursosScreen';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'inventarios') {
            iconName = 'inventory';
            return <MaterialIcons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Profile') {
            iconName = 'person';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Scanner') {
            iconName = 'barcode-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } 
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#133E87',
          borderRadius: 25,
          height: 60,
          marginHorizontal: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
          paddingHorizontal: 20, // Añade separación de los laterales
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{ headerShown: false, title: 'Escanear' }}
      />
      <Tab.Screen
        name="inventarios"
        component={EdificiosScreen}
        options={{ headerShown: false, title: 'Inventarios' }}
      />
      <Tab.Screen
        name="Profile"
        component={PerfilScreen}
        options={{ headerShown: false, title: 'Perfil' }}
      />
    </Tab.Navigator>
  );
}