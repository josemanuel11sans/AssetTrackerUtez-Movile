import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CodigoRecuperacionScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image source={require('../../assets/code.png')} style={styles.imgCode} />
            </View>
            {/* Formulario de código de recuperación */}
            <Text style={styles.textInput}>Código:</Text>
            <View style={styles.inputContainer}>   
                <MaterialCommunityIcons name="message" style={styles.icon} /> 
                <TextInput style={styles.input} placeholder="Código" />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => navigation.navigate('#')}>Verificar Código</Text>
            </TouchableOpacity>
            {/* Links */}
            <View style={styles.buttonLink}>
                <TouchableOpacity onPress={() => navigation.navigate('RecuperarContrasena')}>
                    <Text style={styles.linkText}>¿No recibiste el código?</Text>
                    <Text style={styles.linkText}>Volver a enviar</Text>
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
    card: {
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgCode: {
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
        fontSize: 14,
        textAlign: 'center'
    },
});

export default CodigoRecuperacionScreen;