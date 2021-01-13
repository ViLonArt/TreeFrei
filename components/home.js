import React, { Component, useState, useEffect } from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet, Dimensions, LogBox } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { LinearGradient } from 'expo-linear-gradient';

export default ({ navigation }) => {
    return(
    <View style={styles.container}>
        <LinearGradient
        colors={['#2285F8', '#FFFFFF']}
        style={styles.background}
        />
        <Text style={styles.title}>TREE'FREI♻️</Text>
        <Image 
        style={styles.logo}
        source={require('../assets/poubelles/logo.png')}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Scanner")} style={styles.button}>
                <Text style={styles.appButtonText}>Scanner un produit</Text>
        </TouchableOpacity>
    </View>
    )
};

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 800,
      },
    title:{
        textAlign : 'center',
        fontWeight : 'bold',
        fontSize : 40,
        color : 'white',
    },
    logo:{
        width : width,
        paddingLeft: 0,
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
        textTransform: "uppercase",
      }
});