import React from "react";
import {View, ScrollView, StyleSheet, StatusBar, Text} from 'react-native'
import {BigTitle} from "../ui/BigTitle";
import StrainInput from "../components/StrainInput";
import {AppGroupInputDateWithNumber} from "../components/AppGroupInputDateWithNumber";

export const ClimateScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar />
      <BigTitle text='Введите информацию о особенностях климата' />
      <StrainInput label='Средняя толщина снежного покрова (в см)' placeholder='Впишите числовое значение' />
      <Text style={styles.label}>Выберите даты и укажите температуру в течении недели</Text>
      <View style={styles.tempWrap}>
        <AppGroupInputDateWithNumber />
        <AppGroupInputDateWithNumber />
        <AppGroupInputDateWithNumber />
        <AppGroupInputDateWithNumber />
        <AppGroupInputDateWithNumber />
        <AppGroupInputDateWithNumber />
        <AppGroupInputDateWithNumber />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white'
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