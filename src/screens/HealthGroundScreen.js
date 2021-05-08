import React from "react";
import {View, StyleSheet} from 'react-native'
import {BigTitle} from "../ui/BigTitle";
import StrainInput from "../components/StrainInput";

export const HealthGroundScreen = () => {
  return (
    <View style={styles.container}>
      <BigTitle text='Введите информацию об заболеваемости' />
      <StrainInput label='Введите средний % поражения болезнями на поле' placeholder='Впишите числовое значение' />
      <StrainInput label='Введите средний % поражения сорняками на поле' placeholder='Впишите числовое значение' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20
  }
})