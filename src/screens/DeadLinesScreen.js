import React from "react";
import {View, StyleSheet, Image} from 'react-native'
import {BigTitle} from "../ui/BigTitle";
import StrainInput from "../components/StrainInput";
import {AppButton} from "../ui/AppButton";

export const DeadLinesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BigTitle text='Введите информацию об сроках наступления основных фенологических стадий развития культуры' />

        <Image source={require('../../assets/img/agro9.png')} style={styles.promo} />
      <StrainInput isLabel={false} placeholder='Впишите информацию' />
        <View style={styles.buttonWrap}>
            <AppButton text={'Далее'} onPress={() => navigation.navigate('Health')}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
      alignItems: 'center'
  },

    buttonWrap: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 10,
        position: 'absolute',
        bottom: 0,
    },
    promo: {
        resizeMode: 'contain',
        width: '100%',
        height: 220,
        zIndex: -100,
    },
})