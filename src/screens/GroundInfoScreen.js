import React from "react";
import {ScrollView, StatusBar, StyleSheet, Text, TextInput, View} from "react-native";
import {BigTitle} from "../ui/BigTitle";
import StrainInput from "../components/StrainInput";

export const GroundInfoScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar />
      <BigTitle text='Введите информацию о почве' />
      <StrainInput placeholder='Тип почвы...' label='Введите тип почвы' />
      <StrainInput placeholder='Процент содержания влаги...' label='Введите % содержания влаги в почве' />
      <StrainInput placeholder='Глубина корневой системы...' label='Максимальная глубина корневой системы культуры (в см)' />

      <Text style={styles.title}>Содержание азота, фосфора и калия</Text>
      <View style={styles.inputGroup}>
        <TextInput style={styles.input} placeholder='Азот' />
        <TextInput style={styles.input} placeholder='Фосфор' />
        <TextInput style={styles.input} placeholder='Калий' />
      </View>

      <StrainInput placeholder='Температура...' label='Температура почвы (°С)' />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 28,
    letterSpacing: 0,
    marginBottom: 11,
    fontFamily: 'Inter-Medium',
  },
  input: {
    minWidth: '30%',
    fontSize: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.68)',
    color: 'black',
    marginBottom: 25,
    padding: 11,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: 'rgba(17, 119, 255, 0.7)',
    fontFamily: 'Inter-SemiBold',
  }
})