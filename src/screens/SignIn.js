import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Logo } from '../components/logo';
import {SignInForm} from "../components/SignInForm";


export const SignIn = ({navigation}) => {
    return (
        <View style={styles.mainWrap}>
            <View style={styles.logoWrap}>
                <Logo/>
            </View>
            <SignInForm/>
        </View>
    )

};

const styles = StyleSheet.create({
    mainWrap: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: '10%',
        width: '100%'
    },
    logoWrap: {
        height: 192,
        width: 192,
        paddingTop: '10%'
    }
})