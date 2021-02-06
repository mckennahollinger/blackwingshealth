import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

export default class App extends React.Component{
    render() {
        return (
            <View>
            <ImageBackground
                style={styles.container}
                source={require('./assets/Splash Screen.png')}
              >
            </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
});
