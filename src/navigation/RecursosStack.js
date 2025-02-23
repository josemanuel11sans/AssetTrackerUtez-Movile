import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistroDeRecursosScreen from '../screens/RegistroDeRecursosScreen';
import DetallesRecursoScreen from '../screens/DetallesRecursoScreen';
import NuevoRecursoScreen from '../screens/NuevoRecursoScreen';
import ScannerScreen from '../screens/ScannerScreen';

const Stack = createNativeStackNavigator();

export default function RecursosStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegistroDeRecursos"
        component={RegistroDeRecursosScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetallesRecurso"
        component={DetallesRecursoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NuevoRecurso"
        component={NuevoRecursoScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}