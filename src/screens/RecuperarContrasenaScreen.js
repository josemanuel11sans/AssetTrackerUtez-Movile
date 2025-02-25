import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const RecuperarContrasenaScreen = () => {
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={require('../../assets/email.png')} style={styles.imgEmail} />
            </View>
            {/* Formulario de correo */}
            <Text style={styles.textInput}>Correo:</Text>
            <View style={styles.inputContainer}>
                <MaterialCommunityIcons name="email" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="example@utez.edu.mx"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CodigoRecuperacion')}>
                <Text style={styles.buttonText}>Enviar Código</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.linkText} onPress={() => navigation.navigate('Login')}>Volver...</Text>
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
    card: {
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgEmail: {
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
        color: "#133E87",
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
});

export default RecuperarContrasenaScreen;