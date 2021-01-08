import React, { Component, useState, useEffect } from 'react';
import { Text,Image, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default ({ navigation }) => {
    
    switch (global.product.packaging) {
        /*case 'Plastique':
            const image = <img src="../assets/icon.png" alt="Icon"/>
            break;*/
        case 'Carton':
            const image = <img src='../assets/icon.png'/>
            break;
        default:
            break;
    }

    return (
        <View>
            <Text style={styles.text}>{ global.product.code }</Text>
            <Text>{ global.product.url }</Text>
            <Text>{ global.product.product_name }</Text>
            <Text>{ global.product.packaging }</Text>
            <Text>{ global.product.brand }</Text>
            {image}
            <Button
                title="Scanner un nouveau code barre"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        color: '#61dafb'
    },
});
