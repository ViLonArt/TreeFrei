import React, { Component, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
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
                    style={StyleSheet.absoluteFillObject}
                />
            </View>
        )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
});
