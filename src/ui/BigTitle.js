import {Text, StyleSheet} from "react-native";
import React from "react";

export const BigTitle = ({text}) => {
  return (
    <Text style={styles.title}>{text}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontFamily: 'Inter-Bold',
    paddingTop: '10%'
  }
})