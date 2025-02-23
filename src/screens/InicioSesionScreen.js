import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const InicioSesionScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();

    const handleLogin = () => {
        if (email === '2' && password === '1') {
            // navigation.navigate('Main', { screen: 'HomeTab', params: { screen: 'Inventarios' } });
            //navigation.navigate('Main', {screen: 'Edificios'});
            navigation.navigate('Main'); // Cambia 'Edificios' a 'Main' para navegar al BottomTabNavigator
        } else {
            alert('Correo o contraseña incorrectos');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={require('../../assets/login.png')} style={styles.imgLogin} />
            </View>
            {/* Formulario de inicio de sesión */}
            <Text style={styles.textInput}>Correo:</Text>
            <View style={styles.inputContainer}>   
                <Ionicons name="person" style={styles.icon} /> 
                <TextInput 
                style={styles.input}
                    placeholder="example@utez.edu.mx" 
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
            <Text style={styles.textInput}>Contraseña:</Text>
            <View style={styles.inputContainer}> 
                <Ionicons name="lock-closed" style={styles.icon} /> 
                <TextInput 
                style={styles.input}
                    placeholder=". . . . . . . ." 
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity  onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons style={styles.icon} name={showPassword ? "eye" : "eye-off"}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            {/* Links */}
            <View style={styles.buttonLink}>
                <TouchableOpacity>
                    <Text style={styles.linkText} onPress={() => navigation.navigate('Registro')} >Crear cuenta</Text>
                </TouchableOpacity>
                <View style={styles.separator} />
                <TouchableOpacity>
                    <Text style={styles.linkText} onPress={() => navigation.navigate('RecuperarContrasena')} >¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CBDCEB',
        padding: 20
    },
    form: { 
        width: '80%' 
    },
    card: {
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgLogin: {
        width: 300,
        height: 300,
        resizeMode: 'contain'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 10,
        width: '80%',
        height: 50,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4
    },
    input: {
        flex: 1,
        height: 50,
        color: '#637594',
        paddingHorizontal: 10
    },
    textInput: {
        color: '#133E87',
        fontSize: 16,
        textAlign: 'left',
        alignSelf: 'flex-start',
        margin: 5,
        paddingLeft: 35
    },
    icon: {
        fontSize: 25,
        color: "#637594",
        marginRight: 10
    },
    button: {
        margin: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#133E87',
        padding: 10,
        borderRadius: 10,
        width: '80%',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4
    },
    buttonText: {
        color: '#FFF',
        marginLeft: 5,
    },
    buttonLink: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    linkText: {
        color: '#133E87',
        fontSize: 14
    },
    separator: {
        width: 1,
        height: 15,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4
    }
});

export default InicioSesionScreen;
