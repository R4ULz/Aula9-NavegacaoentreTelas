import React from 'react';
import { View, Text, Button, StyleSheet } from'react-native';
export default function DetailsScreen({
    navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tela de
                Detalhes</Text>
                <Text style={styles.textDetails}>Nosso telefone para contato é 99999-9999, email: faculdadescolas@email.com.</Text>
            <Button
                title="Voltar para Home"
                onPress={() => navigation.goBack()}
            />
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
    textDetails:{
        fontSize: 18,
        padding:10,
    }
});

