import React from 'react'
import styled from 'styled-components/native'

const Label = styled.Text`
  font-size: 28px;
  letter-spacing: 0;
  margin-bottom: 11px;
  font-family: 'Inter-Medium';
`;


const StyledTextInput = styled.TextInput`
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.68);
  color: black;
  margin-bottom: 25px;
  padding: 11px;
  border-radius: 17px;
  border: 1px solid #459F40;
  font-family: 'Inter-SemiBold';
`;



export default function StrainInput({onInputTextChange,value, placeholder, isLabel = true, label = "Введите название сорта"}) {
    // const [value, onChangeText] = React.useState('');
    return (
        <>
            {isLabel && <Label>{label}</Label>}
            <StyledTextInput placeholder={placeholder} value={value} onChangeText={onInputTextChange}/>
        </>
    )
}
