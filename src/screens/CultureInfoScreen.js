import React, {useState} from "react";
import {View, StyleSheet, StatusBar, Image} from 'react-native'
import {BigTitle} from "../ui/BigTitle";
import StrainInput from "../components/StrainInput";
import {AppButton} from "../ui/AppButton";
import {useDispatch, useSelector} from "react-redux";
import {choosePh} from "../store/actions/fieldsInfo";
import Toast from "react-native-root-toast";

export const CultureInfoScreen = ({navigation}) => {
  const [ph, setPh] = useState('')
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <BigTitle text='Введите информацию о культуре' />
        <Image source={require('../../assets/img/agro9.png')} style={styles.promo} />
        <View style={styles.card}>
            <StrainInput
              label='Наиболее приятный Ph для вашей культуры'
              placeholder='Впишите числовое значение'
              typeKeyBoard='numeric'
              value={ph}
              onInputTextChange={text => {
                if (text > 15 || text < 0) {
                  let toast = Toast.show('Укажите корректное значение ph', {
                    duration: Toast.durations.SHORT,
                  });
                } else {
                  setPh(text)
                }
              }}
            />
        </View>
        <View style={styles.buttonWrap}>
            <AppButton
              text={'Далее'}
              onPress={() => {
                dispatch(choosePh(ph))
                navigation.navigate('Climate')
              }}
              disabled={!ph}
            />
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