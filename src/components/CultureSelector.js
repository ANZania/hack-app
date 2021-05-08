import React, {useState} from 'react'
import styled from 'styled-components/native'
import {View, Text, TextInput} from "react-native";
import SelectPicker from "react-native-form-select-picker";
import StrainInput from "./StrainInput";

const lastOption = <SelectPicker.Item label={"Свой вариант"} value={"Свой вариант"} key={666 + Math.random()}/>

const Label = styled.Text`
  font-size: 18px;
  letter-spacing: 0;
  margin-bottom: 11px;
  margin-left: 12px;
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
                    paddingLeft: 17,
                    borderRadius: 17,
                }}
                placeholder={placeholder}
                titleText={placeholder}
                doneButtonText={'Готово'}
                onSelectedStyle={{fontSize: 16, fontFamily: 'Inter-Regular', color: 'white'}}
                placeholderStyle={{fontSize: 16, fontFamily: 'Inter-Regular', color: 'white', lineHeight: 24}}
                onValueChange={(value) => {
                    // Do anything you want with the value.
                    // For example, save in state.
                    setSelected(value);
                }}
                selected={selected}
            >

                {[...Object.values(options).map((val, index) => (
                    <SelectPicker.Item label={val} value={val} key={index + Math.random()}/>
                )), lastOption]}

            </StyledSelectPicker>

            {selected === "Свой вариант" && <StrainInput isLabel={false} placeholder={"Название культуры"}/>}

        </>
    )
}
