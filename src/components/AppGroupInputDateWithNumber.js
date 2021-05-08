import React from "react";
import {TextInput, View, StyleSheet} from 'react-native'
import {DateInput} from "./DateInput";

export const AppGroupInputDateWithNumber = ({placeholder}) => {
  return (
    <View style={styles.inputGroup}>
      <DateInput style={{minWidth: '45%', marginRight: 2}} />
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 5,
    width: '100%'
  },
  input: {
    minWidth: '46%',
    maxWidth: '52.5%',
    flexGrow: 1,
    height: 48,
    fontSize: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    color: '#919191',
    padding: 7,
    borderRadius: 12,
    fontFamily: 'Inter-Light',
  },
})