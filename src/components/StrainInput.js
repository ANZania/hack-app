import React, {useState} from 'react'
import styled from 'styled-components/native'
import {View, Text, TextInput, StyleSheet} from "react-native";
import SelectPicker from "react-native-form-select-picker";

const options = ["Пшеница", "Рожь", "Пшено"];

const BigTitle = styled.Text`
  font-size: 35px;
  margin-bottom: 30px;
  font-family: 'Inter';

`;

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
  border: 1px solid rgba(17, 119, 255, 0.7);
  font-family: 'Inter-SemiBold';
`;


export default function StrainInput({options, placeholder, isLabel = true, label = "Введите название сорта"}) {

    return (
        <>
            {isLabel && <Label style={styles.label}>{label}</Label>}
            <StyledTextInput placeholder={placeholder} placeholderStyle={{fontSize: 16, fontFamily: 'Inter-Regular', color: 'white', lineHeight: 24}}/>
        </>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        marginBottom: 11,
        marginLeft: 12,
        fontFamily: 'Inter-Medium'
    }
})
