import React, {useState} from "react";
import {View, StyleSheet, StatusBar, Text, ScrollView} from 'react-native'
import {BigTitle} from "../ui/BigTitle";
import { Ionicons } from '@expo/vector-icons';

export const DetailScreen = () => {
  const [done, setDone] = useState(false)

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.mainContainer}>
        <BigTitle text='Спасибо, Александр!' />
        <View style={styles.titleStatus}>
          <Text style={styles.statusStyle}>{done ? 'Ответ получен' : 'Ожидайте ответ специалиста'}</Text>
          {
            done
              ? <Ionicons name='checkmark-sharp' size={35} color='#1177FF' />
              : <Ionicons name='ios-timer-outline' size={35} color='rgba(0, 0, 0, .31)' />
          }
        </View>
      </View>
      {
        done
          ? <ScrollView style={styles.decisionWrap}>
              <Text style={styles.decisionTitle}>Рекомендации</Text>
            </ScrollView>
          : null
      }


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContainer: {
    paddingHorizontal: 20,
    marginBottom: 30
  },
  titleStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  statusStyle: {
    fontWeight: "600",
    fontFamily: "Inter-SemiBold",
    fontSize: 30,
    maxWidth: '80%'
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
  }
})