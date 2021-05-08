import React from "react";
import {View, StyleSheet, StatusBar} from 'react-native'
import {BigTitle} from "../ui/BigTitle";
import StrainInput from "../components/StrainInput";

export const CultureInfoScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <BigTitle text='Введите информацию о культуре' />
      <StrainInput label='Наиболее приятный Ph для вашей культуры' placeholder='Впишите числовое значение' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white'
  }
})