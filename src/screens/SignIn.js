import React, {useState} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Logo } from '../components/Logo';
import {SignInForm} from "../components/SignInForm";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'


export const SignIn = ({navigation}) => {
  const [reg, setReg] = useState(true)
    return (
        <KeyboardAwareScrollView contentContainerStyle={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
        }}>
            <View style={styles.mainWrap}>
                <View style={styles.logoWrap}>
                    <Logo />
                </View>
                <SignInForm navigation={navigation}/>
            </View>
        </KeyboardAwareScrollView>
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