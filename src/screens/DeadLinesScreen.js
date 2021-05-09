
import React, {useState} from "react";
import {View, StyleSheet, Image, ScrollView} from 'react-native'
import {BigTitle} from "../ui/BigTitle";
import StrainInput from "../components/StrainInput";
import {AppButton} from "../ui/AppButton";
import {useDispatch, useSelector} from "react-redux";
import MultilineStrainInput from "../components/MultilineStrainInput";
import {chooseDeadlines} from "../store/actions/fieldsInfo";


export const DeadLinesScreen = ({navigation}) => {
  const [deadlines, setDeadlines] = useState('')
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
          <BigTitle text='Введите информацию об сроках наступления основных фенологических стадий развития культуры' />

            <Image source={require('../../assets/img/agro9.png')} style={styles.promo} />
          <MultilineStrainInput isLabel={false} placeholder='Впишите информацию' maxHeight={240} onInputTextChange={setDeadlines} value={deadlines}/>
            <View style={styles.buttonWrap}>
                <AppButton
                  text={'Далее'}
                  onPress={() => {
                    dispatch(chooseDeadlines(deadlines))
                    navigation.navigate('Health')
                  }}
                  disabled={!deadlines}
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
})