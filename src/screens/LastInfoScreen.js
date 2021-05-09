import React, {useState} from "react";
import {View, StyleSheet, Image, ScrollView} from 'react-native'
import {BigTitle} from "../ui/BigTitle";
import StrainInput from "../components/StrainInput";
import CultureSelector from "../components/CultureSelector";
import {AppButton} from "../ui/AppButton";
import {useDispatch, useSelector} from "react-redux";
import {chooseAvgPlantGrow, chooseProjectPok, chooseUnit} from "../store/actions/fieldsInfo";

const options = ["Г/м^2", "Кг/Га", "Т/Га", "Г/м^3"];

export const LastInfoScreen = ({navigation}) => {
  const [avgPlantGrow, setAvgPlantGrow] = useState('')
  const [projectPok, setProjectPok] = useState('')
  const [unit, setUnit] = useState('')
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
        <ScrollView style={styles.scrollContainer} contentContainerStyle={{ alignItems: 'center' }}>
            <BigTitle text='Введите информацию' />
            <Image source={require('../../assets/img/agro5.png')} style={styles.promo} />
            <View style={styles.card}>
                <StrainInput
                  label='Введите средний рост растений по полю (в см)'
                  placeholder='Впишите числовое значение'
                  value={avgPlantGrow}
                  typeKeyBoard='numeric'
                  onInputTextChange={setAvgPlantGrow}
                />
            </View>
            <View style={styles.card}>
                <StrainInput
                  label='Введите процент проективного покрытия'
                  placeholder='Впишите числовое значение'
                  value={projectPok}
                  typeKeyBoard='numeric'
                  onInputTextChange={setProjectPok}
                />
            </View>
            <View style={styles.card}>
                <CultureSelector
                    options={options}
                    placeholder={'Единица измерения'}
                    label='Выберите единицу измерения фитомассы'
                    value={unit}
                    onSelectOptionChange={option => {
                      setUnit(option)
                    }}
                />
            </View>

            <View style={styles.buttonWrap}>
                <AppButton
                  text={'Далее'}
                  onPress={() => {
                    dispatch(chooseAvgPlantGrow(avgPlantGrow))
                    dispatch(chooseProjectPok(projectPok))
                    dispatch(chooseUnit(unit))
                    navigation.navigate('Detail')
                  }}
                  disabled={!(!!avgPlantGrow && !!projectPok && !!unit)}
                />
            </View>
        </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center'
    },
    scrollContainer: {
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },
    buttonWrap: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 10,
    },
    promo: {
        resizeMode: 'contain',
        width: '100%',
        height: 220,
        zIndex: -100,
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
})