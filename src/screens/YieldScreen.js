import React, {useState} from "react";
import {View, StyleSheet, StatusBar, Text, Image, ScrollView} from 'react-native'
import {BigTitle} from "../ui/BigTitle";
import {AppGroupInputDateWithNumber} from "../components/AppGroupInputDateWithNumber";
import {AppButton} from "../ui/AppButton";
import {useDispatch, useSelector} from "react-redux";
import {chooseYield} from "../store/actions/fieldsInfo";

export const YieldScreen = ({navigation}) => {
  const [appYield, setYield] = useState({})
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={{ alignItems: 'center' }}>
        <BigTitle text='Введите информацию об урожайности' />
        <Image source={require('../../assets/img/agro7.png')} style={styles.promo} />
        <View style={styles.card}>
          <Text style={styles.label}>Выберите даты и укажите урожайность предыдущих 5 лет на участке (в т/га)</Text>
          <View style={styles.tempWrap}>
            <AppGroupInputDateWithNumber placeholder={'Урожайность, т/га'} setMainObj={setYield} appYield={true}/>
            <AppGroupInputDateWithNumber placeholder={'Урожайность, т/га'} setMainObj={setYield} appYield={true}/>
            <AppGroupInputDateWithNumber placeholder={'Урожайность, т/га'} setMainObj={setYield} appYield={true}/>
            <AppGroupInputDateWithNumber placeholder={'Урожайность, т/га'} setMainObj={setYield} appYield={true}/>
            <AppGroupInputDateWithNumber placeholder={'Урожайность, т/га'} setMainObj={setYield} appYield={true}/>
          </View>
        </View>

        <View style={styles.buttonWrap}>
          <AppButton
            text={'Далее'}
            onPress={() => {
              dispatch(chooseYield(appYield))
              navigation.navigate('Deadlines')
            }}
            disabled={!(Object.keys(appYield).length >= 5)}
          />
        </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  container: {
    flexGrow: 1,
  },
  label: {
    fontSize: 18,
    marginBottom: 11,
    marginLeft: 12,
    fontFamily: 'Inter-Medium',
    paddingVertical: 5,
  },
  tempWrap: {
    flexDirection: 'column'
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