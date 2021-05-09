import React, {useState} from "react";
import {TextInput, View, StyleSheet} from 'react-native'
import {DateInput} from "./DateInput";

export const AppGroupInputDateWithNumber = ({placeholder, setMainObj}) => {
  const [date, setDate] = useState('')
  const [tempFromDate, setTempFromDate] = useState('')

  const dateHandler = () => {
    setMainObj(prevState => ({
      ...prevState,
      [date]: tempFromDate
    }))
  }

  const tempHandler = () => {
    setMainObj(prevState => ({
      ...prevState,
      [date]: tempFromDate
    }))
  }

  return (
    <View style={styles.inputGroup}>
      <DateInput style={{minWidth: '45%', marginRight: 2}} onDateChange={(data) => {
        setDate(data)
        dateHandler()
      }} />
      <TextInput keyboardType='numeric' style={styles.input} placeholder={placeholder} value={tempFromDate} onChangeText={(text) => {
        setTempFromDate(text)
        tempHandler()
      }} />
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