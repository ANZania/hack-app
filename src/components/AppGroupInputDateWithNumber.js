import React from "react";
import {TextInput, View, StyleSheet} from 'react-native'
import {DateInput} from "./DateInput";

export const AppGroupInputDateWithNumber = () => {
  return (
    <View style={styles.inputGroup}>
      <DateInput style={{minWidth: '46%'}} />
      <TextInput style={styles.input} placeholder='Впишите число' placeholderTextColor='white'/>
    </View>
  )
}

const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  input: {
    minWidth: '46%',
    fontSize: 18,
    backgroundColor: '#459F40',
    color: 'white',
    padding: 7,
    borderRadius: 17,
    borderColor: '#459F40',
    borderWidth: 1,
    fontFamily: 'Inter-SemiBold',
  },
})