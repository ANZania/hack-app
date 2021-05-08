import React, {useState} from 'react'
import styled from 'styled-components/native'
import {View, Text, TextInput} from "react-native";
import SelectPicker from "react-native-form-select-picker";
import StrainInput from "./StrainInput";

const lastOption = <SelectPicker.Item label={"Свой вариант"} value={"Свой вариант"} key={666 + Math.random()}/>

const Label = styled.Text`
  font-size: 18px;
  letter-spacing: 0;
  margin-left: 12px;
  margin-bottom: 5px;
  font-family: 'Inter-Medium';
  width: 100%;
`;


const StyledSelectPicker = styled(SelectPicker)`
  width: 100%
`;


export default function CultureSelector({options, placeholder, titleText, label}) {
    const [selected, setSelected] = useState();

    return (
        <View style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingVertical: 5,
            paddingHorizontal: 5}}>
            <Label>{label}</Label>
            <StyledSelectPicker
                containerStyle={{backgroundColor: '#FFFFFF'}}
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    paddingLeft: 12,
                    marginTop: 10,
                    borderRadius: 12,
                    height: 48
                }}
                placeholder={placeholder}
                titleText={placeholder}
                doneButtonText={'Готово'}
                onSelectedStyle={{fontSize: 16, fontFamily: 'Inter-Regular', color: '#919191'}}
                placeholderStyle={{fontSize: 16, fontFamily: 'Inter-Regular', color: '#919191', lineHeight: 24}}
                onValueChange={(value) => {
                    setSelected(value);
                }}
                selected={selected}
            >

                {[...Object.values(options).map((val, index) => (
                    <SelectPicker.Item label={val} value={val} key={index + Math.random()}/>
                )), lastOption]}

            </StyledSelectPicker>

            {selected === "Свой вариант" && <StrainInput isLabel={false} placeholder={"Название культуры"} isNested={true} />}

        </View>
    )
}
