import React from "react";
import {View, StyleSheet} from 'react-native'
import {BigTitle} from "../ui/BigTitle";
import StrainInput from "../components/StrainInput";

export const DeadLinesScreen = () => {
  return (
    <View style={styles.container}>
      <BigTitle text='Введите информацию об сроках наступления основных фенологических стадий развития культуры' style={{fontSize: 26}} />
      <StrainInput isLabel={false} placeholder='Впишите информацию' />
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