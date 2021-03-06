import React, {useEffect, useState} from "react";
import {View, StyleSheet, Platform, Text, TouchableOpacity} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import Toast from 'react-native-root-toast';


export const DateInput = ({title, style, onDateChange}) => {
    const [date, setDate] = useState(new Date());
    const [dateForText, setDateForText] = useState([]);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const addZero = n => n >= 10 ? n : '0' + n

    const normalizeData = (date) => {
        const day = addZero(date.getDate())
        const month = addZero(date.getMonth() + 1)
        const year = date.getFullYear().toString()
        return [day, month, year]
    }

    const onChange = (event, selectedDate) => {
      if (selectedDate > new Date()) {
        Toast.show('Укажите корректную дату', {
          duration: Toast.durations.LONG,
        });
        setShow(false)
      } else {
        const currentDate = selectedDate || date;
        const dateText = normalizeData(currentDate)
        setDateForText(dateText)
        setShow(false);
        setDate(currentDate);
        onDateChange(`${dateText[0]}.${dateText[1]}.${dateText[2]}`)
      }

    };

    // useEffect(() => {
    //     onDateChange(dateForText)
    // }, dateForText)

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View style={{...styles.wrap, ...style}}>
      {title ? <Text style={styles.label}>{title}</Text> : null}
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
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  inputWrap: {
    fontSize: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    color: '#919191',
    padding: 11,
    borderRadius: 12,
    fontFamily: 'Inter-Regular',
    width: '100%',
    height: 48
  },
  text: {
    color: '#919191',
    fontWeight: "500",
    fontFamily: "Inter-Light",
    fontSize: 16,
    lineHeight: 24
  },
  titleText: {
    fontFamily: "Inter-Medium",
    fontSize: 28,
    marginBottom: 11
  },
  label: {
    fontSize: 18,
    marginBottom: 11,
    marginLeft: 12,
    fontFamily: 'Inter-Medium',
    width: '100%'
  }
})
