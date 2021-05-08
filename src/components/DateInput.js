import React, {useEffect, useState} from "react";
import {View, StyleSheet, Platform, Text, TouchableOpacity} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';


export const DateInput = ({title, style, onDateChange}) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [dateForText, setDateForText] = useState([]);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const addZero = n => n >= 10 ? n : '0' + n

    const normalizeData = (date) => {
        const day = addZero(date.getDate())
        const month = addZero(date.getMonth())
        const year = date.getFullYear().toString()
        return [day, month, year]
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        const dateText = normalizeData(currentDate)
        setDateForText(dateText)
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        //хз как работать будет
        onDateChange(dateForText)
    };

    // useEffect(() => {
    //     onDateChange(dateForText)
    // }, dateForText)

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

  return (
    <View style={style}>
      {title ? <Text style={styles.titleText}>{title}</Text> : null}
      <TouchableOpacity style={styles.inputWrap} onPress={showDatepicker}>
        <Text style={styles.text}>
          {
            dateForText.length === 0
              ? '__.__.____'
              : `${dateForText[0]}.${dateForText[1]}.${dateForText[2]}`
          }
        </Text>
      </TouchableOpacity>
      <View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputWrap: {
    backgroundColor: '#459F40',
    paddingLeft: 10,
    borderRadius: 17,
    paddingVertical: 7
  },
  text: {
    color: 'white',
    fontWeight: "500",
    fontFamily: "Inter-Medium",
    fontSize: 20,
  },
  titleText: {
    fontFamily: "Inter-Medium",
    fontSize: 28,
    marginBottom: 11
  }
})
