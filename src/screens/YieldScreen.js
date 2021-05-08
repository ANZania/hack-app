import React from "react";
import {View, StyleSheet, StatusBar, Text} from 'react-native'
import {BigTitle} from "../ui/BigTitle";
import {AppGroupInputDateWithNumber} from "../components/AppGroupInputDateWithNumber";

export const YieldScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <BigTitle text='Введите информацию об урожайности' />
      <Text style={styles.label}>Выберите даты и укажите урожайность предыдущих 5 лет на поле (в тонна/га)</Text>
      <View style={styles.tempWrap}>
        <AppGroupInputDateWithNumber />
        <AppGroupInputDateWithNumber />
        <AppGroupInputDateWithNumber />
        <AppGroupInputDateWithNumber />
        <AppGroupInputDateWithNumber />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20
  },
  label: {
    fontSize: 28,
    letterSpacing: 0,
    marginBottom: 11,
    fontFamily: 'Inter-Medium',
  },
  tempWrap: {
    flexDirection: 'column'
  }
})