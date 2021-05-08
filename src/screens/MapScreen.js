import {Text, View, StyleSheet, StatusBar} from "react-native";
import React from "react";
import {AppButton} from "../ui/AppButton";

export const MapScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Здравствуйте, Александр!</Text>
      <Text style={styles.subTitle}>Выберите участок</Text>
      <View />
      <View style={styles.buttonWrap}>
        <AppButton text='Продолжить' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  },
  heading: {
    fontFamily: "Italic-ExtraBold",
    color: "#000000",
    fontSize: 35,
    paddingHorizontal: 20,
    marginBottom: 39
  },
  subTitle: {
    fontFamily: "Italic-Medium",
    color: "#000000",
    fontSize: 30,
    paddingHorizontal: 20
  },
  buttonWrap: {
    paddingHorizontal: 107,
    position: 'absolute',
    bottom: 120
  }
})