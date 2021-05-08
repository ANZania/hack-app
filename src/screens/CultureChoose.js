import React, {useState} from 'react'
import styled from 'styled-components/native'
import {StyleSheet, ScrollView, StatusBar, Button} from "react-native";
import SelectPicker from "react-native-form-select-picker";
import CultureSelector from "../components/CultureSelector";
import StrainInput from "../components/StrainInput";
import {DateInput} from "../components/DateInput";
import {store} from "../store";
import {fieldInfoReducer} from "../store/reducers/fieldsInfo";
import {
    chooseCulture,
    chooseHarvestDate,
    chooseLastCulture,
    chooseSeedDate,
    chooseStrain
} from "../store/actions/fieldsInfo";
import {Provider, useSelector} from "react-redux";

const options = ["Пшеница", "Рожь", "Пшено"];

const BigTitle = styled.Text`
  font-size: 35px;
  margin-bottom: 30px;
  font-family: 'Inter-ExtraBold';

`;

const StateInfo = styled.Text`
  font-size: 14px;
  margin: 30px;
  font-family: 'Inter-Medium';
`;
//
// const StyledTextInput = styled.TextInput`
//   font-size: 20px;
//   background-color: rgba(255, 255, 255, 0.68);
//   color: white;
//   margin-bottom: 25px;
//   padding: 11px;
//   border-radius: 17px;
//   border: 1px solid rgba(17, 119, 255, 0.7);
//   font-family: 'Inter-SemiBold';
// `;

// const StyledScrollView = styled.ScrollView`
//   padding: 50px 20px;
//   background-color: white;
// `;
//
// const StyledSelectPicker = styled(SelectPicker)`
//   margin-bottom: 25px;
//
// `;


export const CultureChoose = () => {
    const [culture, setCulture] = React.useState('')
    const [strain, setStrain] = React.useState('')
    const [lastCulture, setLastCulture] = React.useState('')
    const [seedDate, setSeedDate] = React.useState('')
    const [harvestDate, setHarvestDate] = React.useState('')

    // const storedCulture = useSelector((state) => state.culture)

    function handleSeedDateSet(date) {
        setSeedDate(_ => date);
    }

    function handleHarvestDateSet(date) {
        setHarvestDate(_ => date);
    }

    function handleStorageUploadPress() {
        store.dispatch(chooseCulture(culture))
        store.dispatch(chooseStrain(strain))
        store.dispatch(chooseLastCulture(lastCulture))
        store.dispatch(chooseSeedDate(seedDate))
        store.dispatch(chooseHarvestDate(harvestDate))

    }

    return (
        <ScrollView style={styles.container}>
            <StatusBar/>
            <BigTitle>Введите информацию о поле</BigTitle>
            <CultureSelector
                options={options}
                placeholder={'Выбери вариант или впиши свой'}
                label={'Выберите культуру'}
                value={culture}
                onSelectOptionChange={option => setCulture(option)}
            />

            <StrainInput
                value={strain}
                onInputTextChange={setStrain}
                placeholder={'Название сорта'}
                label='Введите название сорта'/>

            <CultureSelector
                options={options}
                placeholder={'Выбери вариант или впиши свой'}
                label={'Выберите предыдущую культуру'}
                value={lastCulture}
                onSelectOptionChange={option => setLastCulture(option)}
            />

            <DateInput
                title='Введите дату посева'
                style={{marginBottom: 30}}
                value={seedDate}
                onDateChange={handleSeedDateSet}
            />
            <DateInput
                title='Введите дату сбора предыдущей культуры'
                style={{marginBottom: 30}}
                value={harvestDate}
                onDateChange={handleHarvestDateSet}
            />
            {/* кнопка для сохранения state в store */}
            <Button onPress={handleStorageUploadPress} title={"save state"}/>
            {/*{<StateInfo>*/}
            {/*    {store.getState().culture}*/}
            {/*</StateInfo>}*/}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: 'white',
    }
})
