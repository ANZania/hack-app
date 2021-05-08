import React, {useState} from 'react'
import styled from 'styled-components/native'
import {View, Text, TextInput} from "react-native";
import SelectPicker from "react-native-form-select-picker";

const options = ["Пшеница", "Рожь", "Пшено"];

const BigTitle = styled.Text`
  font-size: 35px;
  margin-bottom: 30px;
  font-family: 'Inter-ExtraBold';

`;

const Label = styled.Text`
  font-size: 28px;
  letter-spacing: 0;
  margin-bottom: 11px;
  font-family: 'Inter-Medium';
`;


const StyledSelectPicker = styled(SelectPicker)`
  margin-bottom: 25px;

`;


export default function CultureSelector({options, placeholder, titleText, label}) {
    const [selected, setSelected] = useState();

    return (
        <>
            <Label>{label}</Label>
            <StyledSelectPicker
                containerStyle={{backgroundColor: '#FFFFFF'}}
                style={{
                    backgroundColor: 'rgba(51, 136, 255, 0.45)',
                    paddingLeft: 10,
                    //borderWidth: 1,
                    borderRadius: 17,
                    // borderColor: 'rgba(17, 119, 255, 0.7)'
                }}
                placeholder={placeholder}
                titleText={placeholder}
                doneButtonText={'Готово'}
                onSelectedStyle={{fontSize: 20, fontFamily: 'Inter-Bold', color: 'white'}}
                placeholderStyle={{fontSize: 20, fontFamily: 'Inter-Bold', color: 'white'}}
                onValueChange={(value) => {
                    // Do anything you want with the value.
                    // For example, save in state.
                    setSelected(value);
                }}
                selected={selected}
            >

                {Object.values(options).map((val, index) => (
                    <SelectPicker.Item label={val} value={val} key={index + Math.random()}/>
                ))}

            </StyledSelectPicker>

        </>
    )
}
