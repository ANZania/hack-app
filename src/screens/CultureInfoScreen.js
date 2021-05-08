import React from "react";
import {View, StyleSheet, StatusBar, Image} from 'react-native'
import {BigTitle} from "../ui/BigTitle";
import StrainInput from "../components/StrainInput";
import {AppButton} from "../ui/AppButton";

export const CultureInfoScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BigTitle text='Введите информацию о культуре' />
        <Image source={require('../../assets/img/agro9.png')} style={styles.promo} />
        <View style={styles.card}>
            <StrainInput label='Наиболее приятный Ph для вашей культуры' placeholder='Впишите числовое значение' />
        </View>
        <View style={styles.buttonWrap}>
            <AppButton text={'Далее'} onPress={() => navigation.navigate('Climate')}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white'
  },
    card: {
        width: '99%',
        overflow: 'hidden',
        maxWidth: '100%',
        maxHeight: 500,
        marginVertical: 10,
        borderColor: 'rgba(0, 0, 0, 0.05)',
        borderRadius: 17,
        backgroundColor: '#fff',
        shadowColor: "#000",
        paddingHorizontal: 10,
        paddingVertical: 10,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.20,
        shadowRadius: 2.25,
        elevation: 5,

        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    promo: {
        resizeMode: 'contain',
        width: '100%',
        height: 220,
        zIndex: -100,
    },
    buttonWrap: {
        width: '100%',
        alignItems: 'center',
        marginHorizontal: 20,
        position: 'absolute',
        bottom: 10,
    },
})