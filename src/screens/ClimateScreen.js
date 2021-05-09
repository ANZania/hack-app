import React, {useState} from "react";
import {View, ScrollView, StyleSheet, StatusBar, Text, Image} from 'react-native'
import {BigTitle} from "../ui/BigTitle";
import StrainInput from "../components/StrainInput";
import {AppGroupInputDateWithNumber} from "../components/AppGroupInputDateWithNumber";
import {AppButton} from "../ui/AppButton";
import {DateInput} from "../components/DateInput";
import {useDispatch, useSelector} from "react-redux";
import {chooseSnowDeep, chooseWeekTemp} from "../store/actions/fieldsInfo";

export const ClimateScreen = ({navigation}) => {
  const [snowDeep, setSnowDeep] = useState('')
  const [weekTemp, setMainObj] = useState({})
  const dispatch = useDispatch()

  return (
    <View style={styles.wrap}>
        <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
            <BigTitle text='Введите информацию о особенностях климата' />
            <Image source={require('../../assets/img/agro3.png')} style={styles.promo} />
            <View style={styles.card}>
                <StrainInput
                  label='Средняя толщина снежного покрова (в см)'
                  placeholder='Впишите числовое значение'
                  value={snowDeep}
                  typeKeyBoard='numeric'
                  onInputTextChange={text => setSnowDeep(text)}
                />
            </View>
            <View style={styles.card}>
                <Text style={styles.label}>Выберите даты и укажите температуру в течении недели</Text>
                <View style={styles.tempWrap}>
                    <AppGroupInputDateWithNumber placeholder={'Температура, ℃'} setMainObj={setMainObj}/>
                    <AppGroupInputDateWithNumber placeholder={'Температура, ℃'} setMainObj={setMainObj}/>
                    <AppGroupInputDateWithNumber placeholder={'Температура, ℃'} setMainObj={setMainObj}/>
                    <AppGroupInputDateWithNumber placeholder={'Температура, ℃'} setMainObj={setMainObj}/>
                    <AppGroupInputDateWithNumber placeholder={'Температура, ℃'} setMainObj={setMainObj}/>
                    <AppGroupInputDateWithNumber placeholder={'Температура, ℃'} setMainObj={setMainObj}/>
                    <AppGroupInputDateWithNumber placeholder={'Температура, ℃'} setMainObj={setMainObj}/>
                </View>
            </View>

            <View style={styles.buttonWrap}>
                <AppButton
                  text={'Далее'}
                  onPress={() => {
                    dispatch(chooseSnowDeep(snowDeep))
                    dispatch(chooseWeekTemp(weekTemp))
                    navigation.navigate('Yield')
                  }}
                  disabled={!(!!snowDeep && Object.keys(weekTemp).length >= 7)}
                />
            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

    wrap: {
        flexGrow: 1,
    },
  container: {
      paddingHorizontal: 20,
      backgroundColor: 'white',
  },
    label: {
        fontSize: 18,
        marginBottom: 11,
        marginLeft: 12,
        fontFamily: 'Inter-Medium',
        paddingVertical: 5,
    },
  tempWrap: {
    flexDirection: 'column',
  },
    buttonWrap: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 10
    },
    promo: {
        resizeMode: 'contain',
        width: '100%',
        height: 220,
        zIndex: -100,
    },


    card: {
        width: '99%',
        overflow: 'hidden',
        maxWidth: '100%',
        maxHeight: 1200,
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
})