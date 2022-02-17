import React, {Component} from 'react';
import { StyleSheet, Button, Text, View, SafeAreaView, Alert, TextInput, TouchableOpacity, ShadowPropTypesIOS} from 'react-native';

const buttonWithBackground = props => {
    const content = (
        <View style={styles.button, {backgroundColor: props.color}}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )

    return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
    button:{
        padding: 300,
        width: 400,
        borderRadius: 24,
        overflow: 'hidden',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 30,
        marginTop: 5,
        marginBottom: 5,

    }
})

export default buttonWithBackground;