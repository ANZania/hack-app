import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {SignInForm} from "../components/SignInForm";
import {Logo} from "../components/Logo";


export const SignIn = ({navigation}) => {
    return (
        <View style={styles.mainWrap}>
            <View style={styles.logoWrap}>
                <Logo />
            </View>
            <SignInForm navigation={navigation}/>
        </View>
    )
};

const styles = StyleSheet.create({
    mainWrap: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: '10%',
        width: '100%'
    },
    logoWrap: {
        position: 'relative',
        top: '10%',
        height: 160,
        width: '100%',
        paddingTop: '10%',
        flexDirection: 'row',
        alignItems: 'flex-end'
    }
})