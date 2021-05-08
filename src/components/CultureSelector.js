import React, {useState} from 'react'
import styled from 'styled-components/native'
import SelectPicker from "react-native-form-select-picker";
import StrainInput from "./StrainInput";

const lastOption = <SelectPicker.Item label={"Свой вариант"} value={"Свой вариант"} key={666 + Math.random()}/>

const Label = styled.Text`
  font-size: 28px;
  letter-spacing: 0;
  margin-bottom: 11px;
  font-family: 'Inter-Medium';
`;


const StyledSelectPicker = styled(SelectPicker)`
  margin-bottom: 25px;
`;


export default function CultureSelector({options, placeholder, onSelectOptionChange, value, label}) {
    const [selected, setSelected] = useState();

    return (
        <>
            <Label>{label}</Label>
            <StyledSelectPicker
                containerStyle={{backgroundColor: '#FFFFFF'}}
                style={{
                    backgroundColor: '#459F40',
                    paddingLeft: 10,
                    borderRadius: 17,
                }}
                placeholder={placeholder}
                titleText={placeholder}
                doneButtonText={'Готово'}
                onSelectedStyle={{fontSize: 20, fontFamily: 'Inter-Bold', color: 'white'}}
                placeholderStyle={{fontSize: 20, fontFamily: 'Inter-Bold', color: 'white'}}
                onValueChange={e=> {
                    onSelectOptionChange(e)
                    setSelected(e)
                }}
                selected={value}
            >

                {[...Object.values(options).map((val, index) => (
                    <SelectPicker.Item label={val} value={val} key={index + Math.random()}/>
                )), lastOption]}

            </StyledSelectPicker>

            {selected === "Свой вариант" && (
                <StrainInput
                    isLabel={false}
                    placeholder={"Название культуры"}
                    value={value}
                    onInputTextChange={onSelectOptionChange}
                />
            )}

        </>
    )
}
