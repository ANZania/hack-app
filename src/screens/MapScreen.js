import {Text, View, StyleSheet, StatusBar, Image, TouchableWithoutFeedback} from "react-native";
import React, {useState} from "react";
import {AppButton} from "../ui/AppButton";

export const MapScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Здравствуйте, Александр!</Text>
      <Text style={styles.subTitle}>Ваш участок</Text>
      <View style={styles.imgWrap}>
        <Image source={require('../../assets/img/map_fill.png')} style={styles.img} />
      </View>
      <View style={styles.buttonWrap}>
          <AppButton text='Продолжить' onPress={() => navigation.navigate('CultureSelect')} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white'
  },
  heading: {
    fontFamily: "Inter-ExtraBold",
    color: "#000000",
    fontSize: 35,
    paddingHorizontal: 20,
    marginBottom: 20
  },
  subTitle: {
    fontFamily: "Inter-Regular",
    color: "#000000",
    fontSize: 28,
    paddingHorizontal: 20,
    marginBottom: 10
  },
  imgWrap: {
    paddingHorizontal: 20,
  },
  img: {
    width: '100%',
    resizeMode: 'contain'
  },
  buttonWrap: {
    paddingHorizontal: 40,
    marginTop: '30%'
  }
})