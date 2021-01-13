import React, { Component, useState, useEffect } from 'react';
import { Text,Image, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { ScreenStackHeaderCenterView } from 'react-native-screens';

export default ({ navigation }) => {
    let image = null;
    if(global.product.packaging != undefined) {
     switch (global.product.packaging) {
         case 'Carton','Plastique':
             image = <Image style={styles.image} source={require('../assets/poubelles/Poubelle_plastique_carton.png')}/>
             break;
         case 'Papier':
             image = <Image style={styles.image} source={require('../assets/poubelles/Poubelle_papier.png')}/>
             break;
        case 'Verre':
            image = <Image style={styles.image} source={require('../assets/poubelles/Poubelle_verre.png')}/>
            break;
        case 'Métal':
            image = <Image style={styles.image} source={require('../assets/poubelles/Poubelle_verre.png')}/>
            break;
         default:
            image = <Image style={styles.image} source={require('../assets/poubelles/Poubelle_non_recyclable.png')}/>
             break;
     }
    }

    return (
        <View>
            <Text style={styles.text}>{ global.product.product_name }</Text>
            <Text style={styles.brand}>{ global.product.brand }</Text>
            {image}
            <Text style={styles.package}>{ global.product.packaging }</Text>
            <Button
                title="Scanner un nouveau code barre"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    text:{
        textAlign : 'center',
        fontSize : 20
    },
    brand : {
        paddingTop : 5
    },
    package:{
        textAlign : 'center',
        fontWeight : 'bold',
        fontSize : 25,
        paddingBottom: 200
    },
    image: {
        width: 400,
        height: 400,
        paddingTop : 0,
        resizeMode: 'contain'
    },
});
