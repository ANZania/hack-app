import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Logo } from '../components/Logo';
import {SignInForm} from "../components/SignInForm";
import {SignUpForm} from "../components/SignUpForm";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";


export const SignUp = ({navigation}) => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={{
      flexGrow: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }}>
      <View style={styles.mainWrap}>
        <View style={styles.logoWrap}>
          <Logo/>
        </View>
        <SignUpForm navigation={navigation} />
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
    height: 192,
    width: 192,
  }
})