import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tela Inicial</Text>
            <Text style={styles.textHome}>Bem vindo a nossa página sobre Escolas e Faculdades</Text>
            <TouchableOpacity style={styles.botao}
                onPress={() =>
                    navigation.navigate('Details')}>
                <Text style={styles.textoBotao}>Ir para Detalhes</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.botao}
                onPress={() =>
                    navigation.navigate('About')}>
                <Text style={styles.textoBotao}>Ir para Sobre Nós</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
    },
    botao: {
    backgroundColor: '#007bff',
    paddingHorizontal: 14,
    paddingVertical:8,
    borderRadius: 2,
    width: 140,
    margin:10,

    },
    textoBotao:{ 
        color: 'white',
        textAlign: 'center',
        

    },
    textHome:{
        fontSize: 18,
        padding:10,
    }
   
});