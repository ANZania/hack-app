import React, {useState} from 'react'
import styled from 'styled-components/native'
import {StyleSheet, ScrollView, StatusBar, View} from "react-native";
import SelectPicker from "react-native-form-select-picker";
import CultureSelector from "../components/CultureSelector";
import StrainInput from "../components/StrainInput";
import {DateInput} from "../components/DateInput";

const options = ["Пшеница", "Рожь", "Пшено"];

const BigTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 30px;
  font-family: 'Inter-Bold';

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
  color: white;
  margin-bottom: 25px;
  padding: 11px;
  border-radius: 17px;
  border: 1px solid rgba(17, 119, 255, 0.7);
  font-family: 'Inter-SemiBold';
`;

const StyledScrollView = styled.ScrollView`
  padding: 50px 20px;
  background-color: white;
`;

const StyledSelectPicker = styled(SelectPicker)`
  margin-bottom: 25px;

`;


export const CultureChoose = () => {
    return (
      <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
          <BigTitle>Введите информацию о поле</BigTitle>
          <View style={styles.card}>
            <CultureSelector
                options={options}
                placeholder={'Выбери вариант или впиши свой'}
                label={'Выберите культуру'}
            />
          </View>

        <View style={styles.card}>
          <StrainInput placeholder={'Название сорта'} label='Введите название сорта'/>
          <CultureSelector
              options={options}
              placeholder={'Выбери вариант или впиши свой'}
              label={'Выберите предыдущую культуру'}
          />
        </View>

        <View style={styles.card}>
          <DateInput title='Введите дату посева' style={{marginBottom: 30}} />
        </View>

        <View style={styles.card}>
          <DateInput title='Введите дату сбора предыдущей культуры' style={{marginBottom: 30}} />
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    paddingVertical: '10%',
  },

  card: {
    width: '99%',
    overflow: 'hidden',
    maxWidth: '100%',
    height: 120,
    marginVertical: 10,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 17,
    backgroundColor: '#fff',
    shadowColor: "#000",
    paddingHorizontal: 10,
    paddingVertical: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.20,
    shadowRadius: 2.25,
    elevation: 5,

    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
})
