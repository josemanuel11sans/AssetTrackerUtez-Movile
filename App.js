/*import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import StackNavigator from './src/navigation/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator>
        <BottomTabNavigator/>
      </StackNavigator>
    </NavigationContainer>
  );
}*/
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import InicioSesionScreen from './src/screens/InicioSesionScreen';
import CodigoRecuperacionScreen from './src/screens/CodigoRecuperacionScreen';
import RecuperarContrasenaScreen from './src/screens/RecuperarContrasenaScreen';
import CambioContrasenaScreen from './src/screens/CambioContrasena';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={InicioSesionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecuperarContrasena"
          component={RecuperarContrasenaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CodigoRecuperacion"
          component={CodigoRecuperacionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CambioContrasena"
          component={CambioContrasenaScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}