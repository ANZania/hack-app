import React, {useState} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Logo } from '../components/logo';
import {SignInForm} from "../components/SignInForm";


export const SignIn = ({navigation}) => {
  const [reg, setReg] = useState(true)
    return (
        <View style={styles.mainWrap}>
            <View style={styles.logoWrap}>
                <Logo />
            </View>
          <SignInForm navigation={navigation}/>
        </View>
    )
}

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