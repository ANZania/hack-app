import React from "react";
import {Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, View} from "react-native";
import {BigTitle} from "../ui/BigTitle";
import StrainInput from "../components/StrainInput";
import {AppButton} from "../ui/AppButton";

export const GroundInfoScreen = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container}  contentContainerStyle={{ alignItems: 'center' }}>
        <BigTitle text='Введите информацию о почве' />
        <Image source={require('../../assets/img/agro2.png')} style={styles.promo} />
        <View style={styles.card}>
          <StrainInput placeholder='Тип почвы...' label='Введите тип почвы:' />
        </View>
        <View style={styles.card}>
          <StrainInput placeholder='Процент содержания влаги...' label='Введите % содержания влаги в почве:' />
        </View>
        <View style={styles.card}>
          <StrainInput placeholder='Глубина корневой системы...' label='Максимальная глубина корневой системы культуры (в см):' />
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Содержание азота, фосфора и калия:</Text>
          <View style={styles.inputGroup}>
            <TextInput style={styles.input} placeholder='Азот' />
            <TextInput style={styles.input} placeholder='Фосфор' />
            <TextInput style={styles.input} placeholder='Калий' />
          </View>
        </View>
        <View style={styles.card}>
          <StrainInput placeholder='Температура' label='Температура почвы (°С)' />
        </View>

        <View style={styles.buttonWrap}>
          <AppButton text={'Далее'} onPress={() => navigation.navigate('Ground')}/>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
  },
  container: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  inputGroup: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5

  },
  title: {
    fontSize: 18,
    marginBottom: 11,
    marginLeft: 12,
    fontFamily: 'Inter-Medium'
  },
  input: {
    fontSize: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    color: '#919191',
    padding: 11,
    borderRadius: 12,
    fontFamily: 'Inter-Regular',
    width: '100%',
    height: 48,
    marginVertical: 5
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
    maxHeight: 500,
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

  buttonWrap: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10
  },
})