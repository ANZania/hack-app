import React from "react";
import {View, StyleSheet} from 'react-native'
import {BigTitle} from "../ui/BigTitle";
import StrainInput from "../components/StrainInput";
import CultureSelector from "../components/CultureSelector";

const options = ["Г/м^2", "Кг/Га", "Т/Га", "Г/м^3"];

export const LastInfoScreen = () => {
  return (
    <View style={styles.container}>
      <BigTitle text='Введите информацию' />
      <StrainInput label='Введите средний рост растений по полю (в см)' placeholder='Впишите числовое значение' />
      <StrainInput label='Введите процент проективного покрытия' placeholder='Впишите числовое значение' />
      <CultureSelector
        options={options}
        label='Выберите единицу измерения фитомассы'
      />
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