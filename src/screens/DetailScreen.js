import React, {useState} from "react";
import {View, StyleSheet, StatusBar, Text, ScrollView} from 'react-native'
import {BigTitle} from "../ui/BigTitle";
import { Ionicons } from '@expo/vector-icons';
import {AppButton} from "../ui/AppButton";
import {useSelector} from "react-redux";

export const DetailScreen = ({navigation}) => {
  const [done, setDone] = useState(true);
  let store = useSelector(state => state.info)
  // store = {
  //       "avgPlantGrow": "20",
  //       "badPlants": "25",
  //       "culture": "Рожь",
  //       "comment": "Сделайте красиво",
  //       "deadlines": "Я не знаю что это",
  //       "harvestDate": "13.08.2020",
  //       "lastCulture": "Кукуруза",
  //       "nitrogen": "45",
  //       "percentIil": "20",
  //       "percentWater": "38",
  //       "ph": "29",
  //       "phosphor": "282",
  //       "potassium": "2882",
  //       "projectPok": "38",
  //       "rootDeep": "33",
  //       "seedDate": "03.05.2020",
  //       "snowDeep": "29",
  //       "strain": "Яровая",
  //       "temp": "20",
  //       "typeGround": "Чернозём",
  //       "unit": "Т/Га",
  //       "weekTemp": {
  //           "25.05.2021": "2",
  //           "26.05.2021": "3",
  //           "27.05.2021": "3",
  //           "28.05.2021": "2",
  //           "29.05.2021": "3",
  //           "30.05.2021": "3",
  //           "31.05.2021": "4",
  //       },
  //       "yield":  {
  //         "": "",
  //           "03.05.2021": "",
  //           "04.05.2021": "3",
  //           "05.05.2021": "5",
  //           "06.05.2021": "4",
  //           "08.05.2021": "",
  //       }
  //   }



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
                  <View style={styles.descCard}>
                    <Text style={styles.descCardTitle} >Заключение состояния поля</Text>
                    <Text numberOfLines={5} style={styles.descDescription}>
                      Иалпоывадлывоалоыдатолукиащцфруаофвытдалоывфлаоифывлоаиылвоалываоывлоатылвоаывл
                    </Text>
                  </View>
                  <View style={styles.descCard}>
                    <Text style={styles.descCardTitle} >Рекомендации</Text>
                    <Text numberOfLines={5} style={styles.descDescription}>
                      Иалпоывадлывоалоыдатолукиащцфруаофвытдалоывфлаоифывлоаиылвоалываоывлоатылвоаывл
                    </Text>
                  </View>
                  <View style={styles.descCard}>
                    <Text style={styles.descCardTitle} >Ожидаемый результат</Text>
                    <Text numberOfLines={5} style={styles.descDescription}>
                      Иалпоывадлывоалоыдатолукиащцфруаофвытдалоывфлаоифывлоаиылвоалываоывлоатылвоаывл
                    </Text>
                  </View>
              </ScrollView>
              :
              <View style={{
                width: '100%',
                paddingHorizontal: 20
              }}>
                <View style={styles.timerWrap}>
                  <Text style={styles.timerText}>Специалист должен ответить в течении</Text>
                  <Text style={styles.timerText}>24 часов</Text>
                </View>
              </View>

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
                {store.culture}
              </Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.infoHeading}>
                Сорт:
              </Text>
              <Text style={styles.infoText}>
                {store.strain}
              </Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.infoHeading}>
                Дата посева:
              </Text>
              <Text style={styles.infoText}>
                {store.seedDate}
              </Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.infoHeading}>
                Дата сбора урожая:
              </Text>
              <Text style={styles.infoText}>
                {store.harvestDate}
              </Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.infoHeading}>
                Предыдущая культура:
              </Text>
              <Text style={styles.infoText}>
                {store.lastCulture}
              </Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.infoHeading}>
                Тип почвы:
              </Text>
              <Text style={styles.infoText}>
                {store.typeGround}
              </Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.infoHeading}>
                Процент содержания влаги в почве:
              </Text>
              <Text style={styles.infoText}>
                {store.percentWater + ' %'}
              </Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.infoHeading}>
                Желаемый Ph:
              </Text>
              <Text style={styles.infoText}>
                {store.ph}
              </Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.infoHeading}>
                Концентрация фосфора:
              </Text>
              <Text style={styles.infoText}>
                {store.phosphor}
              </Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.infoHeading}>
                Концентрация азота:
              </Text>
              <Text style={styles.infoText}>
                {store.nitrogen}
              </Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.infoHeading}>
                Концентрация калия:
              </Text>
              <Text style={styles.infoText}>
                {store.potassium}
              </Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.infoHeading}>
                Средняя длина корней:
              </Text>
              <Text style={styles.infoText}>
                {store.rootDeep + ' см'}
              </Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.infoHeading}>
                Средняя толщина снежного покрова:
              </Text>
              <Text style={styles.infoText}>
                {store.snowDeep + ' см'}
              </Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.infoHeading}>
                Процент поражения болезнями:
              </Text>
              <Text style={styles.infoText}>
                {store.percentIil + ' %'}
              </Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.infoHeading}>
                Комментарий специалисту:
              </Text>
              <Text style={styles.infoText} numberofLines={10}>
                {store.comment}
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
    borderRadius: 17,
    paddingTop: 10,
    paddingBottom: 10,
    maxWidth: '90%'
  },
  decisionTitle: {
    color: 'white',
    paddingHorizontal: 20,
    fontFamily: 'Inter-Bold',
    fontSize: 35,
    marginBottom: 10
  },
  descCard: {
    marginHorizontal:10,
    borderRadius: 17,
    backgroundColor: '#fff',
    borderColor: 'rgba(0, 0, 0, 0.05)',
    maxWidth: '95%',
    marginBottom: 10
  },
  descCardTitle: {
    paddingHorizontal: 20,
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    marginBottom: 8,
    marginTop: 4
  },
  descDescription: {
    paddingHorizontal: 20,
    fontFamily: 'Inter-Regular',
    marginBottom: 4
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
    maxWidth: '100%',
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