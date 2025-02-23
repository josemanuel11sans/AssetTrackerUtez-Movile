import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EspaciosScreen from "../screens/EspaciosScreen";
import InventariosPorEspacioScreen from "../screens/InventariosPorEspacioScreen";
import PerfilScreen from "../screens/PerfilScreen";
import EdificiosScreen from "../screens/EdificiosScreen";
import InicioSesionScreen from "../screens/InicioSesionScreen";
import ScannerScreen from "../screens/ScannerScreen";
import RegistroDeRecursosScreen from "../screens/RegistroDeRecursosScreen";
import BottomTabNavigator from "./BottomTabNavigator"; 
const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={InicioSesionScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Main" component={BottomTabNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="Scanner" component={ScannerScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Recursos" component={RegistroDeRecursosScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Edificios" component={EdificiosScreen} options={{ headerShown: false, title: "Edificios" }}/>
            <Stack.Screen name="Espacios" component={EspaciosScreen} />
            <Stack.Screen name="Inventarios" component={InventariosPorEspacioScreen} options={{ headerShown: false, title: "Inventarios" }}/>
            <Stack.Screen name="Perfil" component={PerfilScreen} options={{ headerShown: false, title: "Perfil" }}/>
        </Stack.Navigator>
    );
}
