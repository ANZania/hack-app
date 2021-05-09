import React, {useState} from "react";
import {View, StyleSheet, StatusBar, Text, ScrollView} from 'react-native'
import {BigTitle} from "../ui/BigTitle";
import { Ionicons } from '@expo/vector-icons';
import {AppButton} from "../ui/AppButton";
import {useSelector} from "react-redux";

export const DetailScreen = ({navigation}) => {
  const [done, setDone] = useState(false);
  const [timer, setTimer] = useState(86400000);
  const [timerStr, setTimerStr] = useState('00:00:00')

  const timerFunc = setInterval(() => {
    let newTimer = timer;
    newTimer--;
    setTimer(newTimer)
  })

  if (done || timer === 0) {
    setTimer(0);
    clearInterval(timerFunc)
  }


  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={{ alignItems: 'center' }}>
        <View style={styles.mainContainer}>
          <BigTitle text='Спасибо, Александр!' />
          <View style={styles.titleStatus}>
            <Text style={styles.statusStyle}>{done ? 'Ответ получен' : 'Ожидайте ответ специалиста'}</Text>
            {
              done
                  ? <Ionicons name='checkmark-sharp' size={35} color='#459F40' />
                  : <Ionicons name='ios-timer-outline' size={35} color='#459F40' />
            }
          </View>
        </View>

        {
          done
              ? <ScrollView style={styles.decisionWrap}>
                <Text style={styles.decisionTitle}>Рекомендации</Text>
              </ScrollView>
              : timer ?
              <View style={{
                width: '100%',
                paddingHorizontal: 20
              }}>
                <View style={styles.timerWrap}>
                  <Text style={styles.timerText}>Специалист должен ответить в течении</Text>
                  <Text style={styles.timerText}>24 часов</Text>
                </View>
              </View>
              : <></>
        }
        <View style={styles.infoWrap}>
          <View style={styles.card}>
            <Text style={styles.title}>
              Информация об участке:
            </Text>
            <View style={styles.infoLotWrap}>
              <Text style={styles.infoLotHeading} numberOfLines={3}>
                Московская область, Наро-Фоминский район, ЗАО"Татищево", уч-к 20
              </Text>
              <View>
                <Text style={styles.infoLotText}>
                  50:26:0061004:37
                </Text>
              </View>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.infoHeading}>
                Выращиваемая культура:
              </Text>
              <Text style={styles.infoText}>
                Пшеница
              </Text>
            </View>
          </View>

        </View>
        <View style={styles.buttonWrap}>
          <AppButton text={'К списку участков'} onPress={() => navigation.navigate('LotList')}/>
        </View>
      </ScrollView>



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    width: '100%'
  },
  scrollContainer: {
    width: '100%',
    padding: 0
  },
  mainContainer: {
    marginBottom: 30
  },
  titleStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  statusStyle: {
    fontFamily: "Inter-Regular",
    fontSize: 18,
    maxWidth: '80%',
    color: '#459F40'
  },
  decisionWrap: {
    flex: 1,
    backgroundColor: '#459F40',
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
    paddingTop: 29
  },
  decisionTitle: {
    color: 'white',
    paddingHorizontal: 20,
    fontFamily: 'Inter-Bold',
    fontSize: 35
  },

  card: {
    width: '99%',
    overflow: 'hidden',
    maxWidth: '100%',
    maxHeight: 1200,
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
  infoBlock: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 5,
  },
  infoHeading: {
    width: '100%',
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#000'
  },
  infoText: {
    width: '100%',
    fontFamily: 'Inter-Light',
    fontSize: 16,
    color: '#919191',
  },
  infoWrap: {
    paddingHorizontal: 20
  },
  infoLotWrap: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  infoLotHeading: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    lineHeight: 18,
    color: '#000'
  },
  infoTag: {
    fontFamily: 'Inter-Light',
    fontSize: 12,
    lineHeight: 18,
  },
  infoLotText: {
    fontFamily: 'Inter-Light',
    fontSize: 16,
    lineHeight: 18,
    color: '#459F40',
    paddingTop: '3%'
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    lineHeight: 18,
    color: '#000',
    paddingBottom: '5%',
    paddingTop: 5
  },
  buttonWrap: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  timerWrap: {
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 10

  },
  timerText: {
    fontFamily: 'Inter-Light',
    fontSize: 16
  }
})