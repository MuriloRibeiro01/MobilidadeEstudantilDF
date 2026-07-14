import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

export default function input() {
    const [texto, setTexto] = useState('');

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                onChangeText={setTexto}
                value={texto}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,  
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
    },
});