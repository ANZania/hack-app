import React, {useState} from 'react'
import styled from 'styled-components/native'
import {View, Text, TextInput} from "react-native";
import SelectPicker from "react-native-form-select-picker";
import CultureSelector from "../components/CultureSelector";
import StrainInput from "../components/StrainInput";

const options = ["Пшеница", "Рожь", "Пшено"];

const BigTitle = styled.Text`
  font-size: 35px;
  margin-bottom: 30px;
  font-family: 'Inter-ExtraBold';

`;

const Label = styled.Text`
  font-size: 30px;
  letter-spacing: 0;
  margin-bottom: 11px;
  font-family: 'Inter-SemiBold';
`;

const StyledTextInput = styled.TextInput`
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.68);
  color: white;
  margin-bottom: 25px;
  padding: 11px;
  border-radius: 17px;
  border: 1px solid rgba(17, 119, 255, 0.7);
  font-family: 'Inter-SemiBold';
`;

const StyledScrollView = styled.ScrollView`
  padding: 50px 20px;
`;

const StyledSelectPicker = styled(SelectPicker)`
  margin-bottom: 25px;

`;


export default function CultureChoose() {

    return (
        <StyledScrollView>

            <BigTitle>Введите информацию о поле</BigTitle>
            <CultureSelector options={options} placeholder={'Выбери вариант или впиши свой'} label={'Выберите культуру'}
                             />

            <StrainInput placeholder={'Название сорта'}/>
            <CultureSelector options={options} placeholder={'Выбери вариант или впиши свой'}
                             label={'Выберите предыдущую культуру'} />

        </StyledScrollView>
    )
}
