import React, {useState} from 'react'
import styled from 'styled-components/native'
import {StyleSheet, ScrollView, StatusBar, View, Image} from "react-native";
import SelectPicker from "react-native-form-select-picker";
import CultureSelector from "../components/CultureSelector";
import StrainInput from "../components/StrainInput";
import {DateInput} from "../components/DateInput";
import {AppButton} from "../ui/AppButton";

const options = ["Пшеница", "Рожь", "Пшено"];

const BigTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 30px;
  margin-top: 10%;
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


export const CultureChoose = ({navigation}) => {
    return (
      <View style={styles.containerWrap}>
        <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }}>
          <BigTitle>Введите информацию об участке</BigTitle>
          <Image source={require('../../assets/img/agro6.png')} style={styles.promo} />
          <View style={styles.card}>
            <CultureSelector
                options={options}
                placeholder={'Выберите вариант или впишите свой'}
                label={'Выращиваемая культура:'}
            />
          </View>

          <View style={styles.card}>
            <StrainInput placeholder={'Название сорта:'} label='Введите название сорта:'/>
            <CultureSelector
                options={options}
                placeholder={'Выберите вариант или впишите свой'}
                label={'Предыдущая культура:'}
            />
          </View>

          <View style={styles.card}>
            <DateInput title='Дата посева:' style={{marginBottom: 30}} />
          </View>

          <View style={styles.card}>
            <DateInput title='Дата сбора предыдущей культуры' style={{marginBottom: 30}} />
          </View>
          <View style={styles.buttonWrap}>
            <AppButton text={'Далее'} onPress={() => navigation.navigate('Ground')}/>
          </View>
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
  containerWrap: {
    flexGrow: 1,
  },
  container: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },

  card: {
    width: '99%',
    overflow: 'hidden',
    maxWidth: '100%',
    maxHeight: 500,
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
    justifyContent: 'space-between'
  },
  buttonWrap: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10
  },
  promo: {
    resizeMode: 'contain',
    width: '100%',
    height: 220,
    zIndex: -100,
  },
})
