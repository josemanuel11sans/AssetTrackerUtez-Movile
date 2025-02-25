import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const RegistroScreen = () => {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rol, setRol] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const navigation = useNavigation();

    const handleRegister = () => {
        setMessage('Registro exitoso. Espera a ser aceptado por un administrador.');
        setTimeout(() => {
            setMessage('');
            navigation.navigate("Login");
        }, 3000);
    };
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}><Text style={styles.bold}>Asset Tracker</Text>  <Text style={styles.utez}>UTEZ</Text></Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.textInput}>Nombre:</Text>
                <View style={styles.inputContainer}>
                    <Ionicons name="person" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre"
                        value={nombre}
                        onChangeText={setNombre}
                    />
                </View>
                <Text style={styles.textInput}>Apellidos:</Text>
                <View style={styles.inputContainer}>
                    <Ionicons name="person" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Apellidos"
                        value={apellidos}
                        onChangeText={setApellidos}
                    />
                </View>
                <Text style={styles.textInput}>Correo:</Text>
                <View style={styles.inputContainer}>
                    <Ionicons name="mail" style={styles.icon} />
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
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Ionicons style={styles.icon} name={showPassword ? "eye" : "eye-off"} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.textInput}>Rol:</Text>
                <View style={styles.inputContainer}>
                    <Ionicons name="briefcase" style={styles.icon} />
                    <Picker
                        selectedValue={rol}
                        onValueChange={(itemValue) => setRol(itemValue)}
                        style={styles.input}
                    >
                        <Picker.Item label="Administrador" value="Administrador" />
                        <Picker.Item label="Inspector" value="Inspector" />
                    </Picker>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Registrar</Text>
                </TouchableOpacity>
                <Text style={styles.leyenda}>
                    {message ? message : "Completa todos los campos y espera a que un administrador acepte el registro."}
                </Text>

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
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "left",
        marginBottom: 20,
        color: "#002F6C",
    },
    bold: {
        fontWeight: "bold",
        color: "#002F6C",
        fontSize: 60,
    },
    utez: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#002F6C",
    },
    form: {
        width: '80%'
    },
    card: {
        width: 300,
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
        borderRadius: 15,
        paddingHorizontal: 10,
        width: '90%',
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
        paddingHorizontal: 10,
        borderWidth: 0
    },
    textInput: {
        color: '#133E87',
        fontSize: 16,
        textAlign: 'left',
        alignSelf: 'flex-start',
        margin: 5,
        paddingLeft: 20
    },
    icon: {
        fontSize: 25,
        color: "#133E87",
        marginRight: 10
    },
    button: {
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#133E87',
        padding: 10,
        borderRadius: 10,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4
    },
    buttonText: {
        color: '#FFF',
        marginLeft: 5,
    },
    form: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 0,
        width: '100%',
        marginTop: 10
    },
    leyenda: {
        color: '#608BC1',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10,
        fontWeight: '600'
    }
});

export default RegistroScreen;
