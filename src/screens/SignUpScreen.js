import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Logo } from '../components/Logo';
import {SignInForm} from "../components/SignInForm";
import {SignUpForm} from "../components/SignUpForm";


export const SignUp = ({navigation}) => {
  return (
    <View style={styles.mainWrap}>
      <View style={styles.logoWrap}>
        <Logo/>
      </View>
      <SignUpForm navigation={navigation} />
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