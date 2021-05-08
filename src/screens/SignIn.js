import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { Logo } from '../components/logo';
import {SignInForm} from "../components/SignInForm";
import {SignUpForm} from "../components/SignUpForm";


export const SignIn = ({navigation}) => {
  const [reg, setReg] = useState(true)
    return (
        <View style={styles.mainWrap}>
            <View style={styles.logoWrap}>
                <Logo/>
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
        height: 192,
        width: 192,
        paddingTop: '10%'
    }
})