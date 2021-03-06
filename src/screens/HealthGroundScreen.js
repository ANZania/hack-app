import React, {useState} from "react";
import {View, StyleSheet, Image} from 'react-native'
import {BigTitle} from "../ui/BigTitle";
import StrainInput from "../components/StrainInput";
import {AppButton} from "../ui/AppButton";
import {DateInput} from "../components/DateInput";
import {useDispatch, useSelector} from "react-redux";
import {choosePercentBadPlants, choosePercentIil} from "../store/actions/fieldsInfo";
import Toast from "react-native-root-toast";

export const HealthGroundScreen = ({navigation}) => {
  const [percentIil, setPercentIil] = useState('')
  const [percentBadPlants, setPercentBadPlants] = useState('')
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <BigTitle text='Введите информацию об заболеваемости' />

        <Image source={require('../../assets/img/agro8.png')} style={styles.promo} />
        <View style={styles.card}>
            <StrainInput
              label='Введите средний % поражения болезнями на поле'
              placeholder='Впишите числовое значение'
              value={percentIil}
              typeKeyBoard='numeric'
              onInputTextChange={(text) => {
                if (text > 100 || text < 0) {
                  let toast = Toast.show('Укажите корректное значение процента', {
                    duration: Toast.durations.SHORT,
                  });
                } else {
                  setPercentIil(text)
                }
              }}
            />
        </View>
        <View style={styles.card}>
            <StrainInput
              label='Введите средний % поражения сорняками на поле'
              placeholder='Впишите числовое значение'
              value={percentBadPlants}
              typeKeyBoard='numeric'
              onInputTextChange={(text) => {
                if (text > 100 || text < 0) {
                  let toast = Toast.show('Укажите корректное значение процента', {
                    duration: Toast.durations.SHORT,
                  });
                } else {
                  setPercentBadPlants(text)
                }
              }}
            />
        </View>
        <View style={styles.buttonWrap}>
            <AppButton
              text={'Далее'}
              onPress={() => {
                dispatch(choosePercentIil(percentIil))
                dispatch(choosePercentBadPlants(percentBadPlants))
                navigation.navigate('Last')
              }}
              disabled={!(!!percentIil && !!percentBadPlants)}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        alignItems: 'center'
    },

    buttonWrap: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 10,
        position: 'absolute',
        bottom: 0,
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