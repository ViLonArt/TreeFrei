import React, { Component, useState, useEffect } from 'react';
import { Image, Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default ({ navigation, parentCallback }) => {

        const [hasPermission, setHasPermission] = useState(null);
      
        useEffect(() => {
          (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
          })();
        }, []);
      
        const handleBarCodeScanned = ({ type, data }) => {
          url = 'http://88.198.201.77:3030/' + data;
          fetch(url)
            .then((res) => res.json())
            .then((res) => {
                global.product = res[0];
                if(global.product) {
                  navigation.navigate('Products')
                } else {
                  alert('Code barre non reconnu');
                }
            })
            .catch((err) => {
              alert('Une erreur est survenue');
            })
        };
      
        if (hasPermission === null) {
          return <Text>Requesting for camera permission</Text>;
        }
        if (hasPermission === false) {
          return <Text>No access to camera</Text>;
        }

        return (
            <View style={styles.container}>
                <BarCodeScanner
                    onBarCodeScanned={handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}>
                    <Text style={styles.description}></Text>
                    <Image
                      style={styles.qr}
                      source={{
                        uri: 'https://cdn.discordapp.com/attachments/761258906348421200/798970771489554482/codeBarreBorder.png',
                      }}
                    />
                  </BarCodeScanner>
            </View>
        )
};
const { width } = Dimensions.get('window')
const qrSize = width
const styles = StyleSheet.create({
    container: {
          flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',

      },
      qr: {
        marginTop: '20%',
        marginBottom: '20%',
        width: qrSize,
        height: qrSize,
      },
      description: {
        fontSize: 35,
        fontWeight : 'bold',
        marginTop: '5%',
        textAlign: 'center',
        width: '100%',
        color: '#2285F8',
      },
    
});
