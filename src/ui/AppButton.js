import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import React from "react";

export const AppButton = ({text = 'Начать', onPress, disabled}) => {
  const disabledStyle = disabled ? {
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  } : {}
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.buttonWrapper} onPress={onPress} disabled={false}>
      <View style={{...styles.buttonStart, ...disabledStyle }}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: "column",
    width: "100%",
    height: 72
  },
  buttonStart: {
    borderRadius: 16,
    height: 72,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#459F40'
  },
  buttonText: {
    fontFamily: 'Inter-Bold',
    color: "#fff",
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 28,
  }
})