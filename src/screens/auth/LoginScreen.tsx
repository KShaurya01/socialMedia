import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { reqresAPI } from '../../services/api';
import AnimatedButton from '../../components/ui/AnimatedButton';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(reqresAPI);

    const handleLogin = async () => {
        console.log(email, password);
        try {
            const response = await reqresAPI.post('/login', {
                email,
                password,
            });
            console.log(response);
            Alert.alert('Login Successful', `Token: ${response.data.token}`);
        } catch (error: any) {
            console.log('error');
            // const errorMessage = error.response?.data?.error || error.message || 'An error occurred';
            // Alert.alert('Login Failed', errorMessage);
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Login</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
            />
            <AnimatedButton title="Login" onPress={handleLogin} />
        </View>
    );
};

export default LoginScreen;
