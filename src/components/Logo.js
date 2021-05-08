import React from 'react';
import { Image, StyleSheet } from 'react-native';


export const Logo = () => (
    <Image source={require('../../assets/img/logo.png')} style={styles.logo} />
)


const styles = StyleSheet.create({
    logo: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    }
})