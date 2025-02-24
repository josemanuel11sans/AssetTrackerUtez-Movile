import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const CambioContrasenaScreen = () => {
    const [newPassword, setNewPassword] = useState('');
    const [password, setPassword] = useState('');
    const [showNewPassword, setNewShowPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();

    const handlePassword = () => {
        if (newPassword === '1' && password === '1') {
            navigation.navigate('Login');
            alert('Cambio de contraseña exitoso')
        } else {
            alert('Las contraseñas no coinciden');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={require('../../assets/password.png')} style={styles.imgPassword} />
            </View>
            <Text style={styles.textInput}>Nueva contraseña:</Text>
            <View style={styles.inputContainer}> 
                <Ionicons name="lock-closed" style={styles.icon} /> 
                <TextInput 
                style={styles.input}
                    placeholder=". . . . . . . ." 
                    value={newPassword}
                    onChangeText={setNewPassword}
                    secureTextEntry={!showNewPassword}
                />
                <TouchableOpacity  onPress={() => setNewShowPassword(!showNewPassword)}>
                    <Ionicons style={styles.icon} name={showNewPassword ? "eye" : "eye-off"}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.textInput}>Confirmar contraseña:</Text>
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
            <TouchableOpacity style={styles.button} onPress={handlePassword}>
                <Text style={styles.buttonText}>Cambiar Contraseña</Text>
            </TouchableOpacity>
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
    imgPassword: {
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
    }
});

export default CambioContrasenaScreen;