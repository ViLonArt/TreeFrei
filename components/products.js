import React, { Component, useState, useEffect } from 'react';
import { TouchableOpacity, Dimensions, Text,Image, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { ScreenStackHeaderCenterView } from 'react-native-screens';
import { LinearGradient } from 'expo-linear-gradient';

export default ({ navigation }) => {
    let image = null;
    if(global.product.bottle != true) {
     switch (global.product.packaging) {
         case 'Carton' :
             image = <Image style={styles.image} source={require('../assets/poubelles/Poubelle_plastique_carton.png')}/>
             break;
         case 'Papier':
             image = <Image style={styles.image} source={require('../assets/poubelles/Poubelle_papier.png')}/>
             break;
        case 'Verre':
            image = <Image style={styles.image} source={require('../assets/poubelles/Poubelle_verre.png')}/>
            break;
        case 'Métal':
            image = <Image style={styles.image} source={require('../assets/poubelles/Poubelle_metal.png')}/>
            break;
         default:
            image = <Image style={styles.image} source={require('../assets/poubelles/Poubelle_non_recyclable.png')}/>
             break;
        }
    } else {
        switch (global.product.packaging) {
            case 'Verre':
                image = <Image style={styles.image} source={require('../assets/poubelles/Poubelle_verre.png')}/>
                break;
            case 'Métal':
                image = <Image style={styles.image} source={require('../assets/poubelles/Poubelle_metal.png')}/>
                break;
            default:
                image = <Image style={styles.image} source={require('../assets/poubelles/Poubelle_plastique_carton.png')}/>
                break;
     }
    }

    return (
        <View style={styles.fade}>
            <LinearGradient
            colors={['#0A800D', '#F1E9CF']}
            style={styles.background}
            />
            <Text style={styles.text}>{ global.product.product_name }</Text>
            <Text style={styles.brand}>{ global.product.brand }</Text>
            {image}
            <Text style={styles.package}>{ global.product.packaging }</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Scanner")} style={styles.button}>
                <Text style={styles.appButtonText}>Scanner un nouveau produit</Text>
            </TouchableOpacity>
        </View>
    )
}

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
    fade:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F1E9CF',  
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 500,
      },
      
    text:{
        color : '#ffffff',
        textAlign : 'center',
        marginTop : 15,
        fontSize : 25,
        //fontFamily: 'Rubik',
        fontWeight : 'bold',
    },
    brand : {
        color : '#ffffff',
        textAlign : 'center',
        paddingTop : 5,
        fontSize : 20,
        //fontFamily: 'Rubik',
        fontWeight : 'bold',
    },
    package:{
        textAlign : 'center',
        fontWeight : 'bold',
        fontSize : 25,
        //fontFamily: 'Rubik',
        paddingBottom: 30
    },
    
    image: {
        width: width,  
        height: width,
        paddingTop : 0,
        resizeMode: 'contain'
    },

    button: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginLeft : '15%',
        width :'70%',
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        textAlign : 'center',
        textTransform: "uppercase"
      }
});
