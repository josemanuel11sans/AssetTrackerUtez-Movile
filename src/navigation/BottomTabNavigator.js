import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import InventariosStack from './InventariosStack'; // Importa el StackNavigator para Inventarios
import RecursosStack from './RecursosStack'; // Importa el StackNavigator para Recursos
import ScannerScreen from '../screens/ScannerScreen';
import PerfilScreen from '../screens/PerfilScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Inventarios') {
            iconName = 'clipboard-list';
            return <MaterialCommunityIcons name={iconName} size={size} color={focused ? 'gray' : color} />;
          } else if (route.name === 'Perfil') {
            iconName = 'person';
            return <Ionicons name={iconName} size={size} color={focused ? 'gray' : color} />;
          } else if (route.name === 'Scanner') {
            iconName = 'barcode-outline';
            return <Ionicons name={iconName} size={size} color={focused ? 'gray' : color} />;
          }/* else if (route.name === 'Recursos') {
            iconName = 'barcode-outline';
            return <Ionicons name={iconName} size={size} color={focused ? 'gray' : color} />;
          }*/
        },
        tabBarActiveTintColor: 'gray',
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
        name="Inventarios"
        component={InventariosStack} // Usa el StackNavigator para Inventarios
        options={{ headerShown: false, title: 'Inventarios' }}
      />
      <Tab.Screen
        name="Scanner"
        component={RecursosStack}
        options={{ headerShown: false, title: 'Escanear' }}
      />
      {/*<Tab.Screen
        name="Recursos"
        component={RecursosStack} // Usa el StackNavigator para Recursos
        options={{ headerShown: false, title: 'Recursos' }}
      />*/}
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{ headerShown: false, title: 'Perfil' }}
      />
    </Tab.Navigator>
  );
}
/*import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PerfilScreen from '../screens/PerfilScreen';
import EdificiosScreen from '../screens/EdificiosScreen';
import ScannerScreen from '../screens/ScannerScreen';
import RegistroDeRecursosScreen from '../screens/RegistroDeRecursosScreen';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
//import StackNavigator from './StackNavigator';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeTab') {
            iconName = 'home';
            
          } else if (route.name === 'Profile') {
            iconName = 'person';
            return <Ionicons name={iconName} size={size} color={focused ? 'gray' : color} />;
          } else if (route.name === 'Scanner') {
            iconName = 'barcode-outline';
            return <Ionicons name={iconName} size={size} color={focused ? 'gray' : color} />;
          } else if (route.name === 'Recursos') {
            iconName = 'barcode-outline';
            return <Ionicons name={iconName} size={size} color={focused ? 'gray' : color} />;
          } else if (route.name === 'Inventarios') {
            iconName = 'clipboard-list';
            return <MaterialCommunityIcons name={iconName} size={size} color={focused ? 'gray' : color} />;
          }
        },
        tabBarActiveTintColor: 'gray',
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
      {/*<Tab.Screen
        name="HomeTab"
        component={StackNavigator}
        options={{ headerShown: false, title: 'Inicio' }}
      />}
      <Tab.Screen
        name="Inventarios"
        component={EdificiosScreen}
        options={{ headerShown: false, title: 'Inventarios' }}
      />
      <Tab.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{ headerShown: false, title: 'Escanear' }}
      />
      <Tab.Screen
        name="Recursos"
        component={RegistroDeRecursosScreen}
        options={{ headerShown: false, title: 'Recursos' }}
      />
      <Tab.Screen
        name="Profile"
        component={PerfilScreen}
        options={{ headerShown: false, title: 'Perfil' }}
      />
    </Tab.Navigator>
  );
}*/