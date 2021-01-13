import React, { Component, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Scanner from './components/scanner'
import Products from './components/products'
import Home from './components/home'

const Stack = createStackNavigator();

export default () => {

  return (

    <NavigationContainer style={styles.NavCon} >
      <Stack.Navigator initialRouteName="Home" style={styles.NavCon} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Scanner" component={Scanner} />
        <Stack.Screen name="Products" component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  NavCon : {
    backgroundColor: "#009688",
  }


})