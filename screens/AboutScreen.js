import React from "react";
import { View, Text, Button, StyleSheet } from'react-native';
export default function AboutScreen({
    navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sobre Nós</Text>
            
<Text style={styles.textAbout}>Somos uma empresa ficticia que entende como funciona o sistema de escolas e faculdades</Text>
            <Button
                title="Voltar para Home"
                onPress={() => navigation.goBack()} />
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
    textAbout: {
        fontSize: 18,
        padding:10,
    }
});