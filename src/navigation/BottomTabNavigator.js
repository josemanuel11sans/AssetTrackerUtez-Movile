import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PerfilScreen from '../screens/PerfilScreen';
import EdificiosScreen from '../screens/EdificiosScreen';
import ScannerScreen from '../screens/ScannerScreen';
import RegistroDeRecursosScreen from '../screens/RegistroDeRecursosScreen';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'inventarios') {
            return <MaterialCommunityIcons name="clipboard-list" size={size} color={color} />;
          } else if (route.name === 'Profile') {
            return <Ionicons name="person" size={size} color={color} />;
          } else if (route.name === 'Scanner') {
            return <Ionicons name="barcode-outline" size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle: {
          backgroundColor: '#133E87',
          height: 60,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
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