import React from "react";
import {View, StyleSheet, StatusBar, Text, Image, ScrollView} from 'react-native'
import {BigTitle} from "../ui/BigTitle";
import {AppGroupInputDateWithNumber} from "../components/AppGroupInputDateWithNumber";
import {AppButton} from "../ui/AppButton";

export const YieldScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={{ alignItems: 'center' }}>
        <BigTitle text='Введите информацию об урожайности' />
        <Image source={require('../../assets/img/agro7.png')} style={styles.promo} />
        <View style={styles.card}>
          <Text style={styles.label}>Выберите даты и укажите урожайность предыдущих 5 лет на участке (в т/га)</Text>
          <View style={styles.tempWrap}>
            <AppGroupInputDateWithNumber placeholder={'Урожайность, т/га'}/>
            <AppGroupInputDateWithNumber placeholder={'Урожайность, т/га'}/>
            <AppGroupInputDateWithNumber placeholder={'Урожайность, т/га'}/>
            <AppGroupInputDateWithNumber placeholder={'Урожайность, т/га'}/>
            <AppGroupInputDateWithNumber placeholder={'Урожайность, т/га'}/>
          </View>
        </View>

        <View style={styles.buttonWrap}>
          <AppButton text={'Далее'} onPress={() => navigation.navigate('Deadlines')}/>
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