import React from 'react'
import {View, StyleSheet, Image, Text} from 'react-native'
import {AppButton} from "../ui/AppButton";

export const StartScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
          <View style={styles.banner}>

            <View style={styles.bannerBcg}>
              <Image source={require('../../assets/img/start_logo.png')} style={styles.bannerImg} />
            </View>
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.heading}>
              Экспертные рекомендации
            </Text>
            <Text style={styles.description}>
              Наш сервис позволяет получить комментарии специалиста о состоянии ваших
            </Text>
            <AppButton text='Начать' onPress={() => navigation.navigate('Map')} />
          </View>
        </View>
    )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  banner: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: 'center'
  },
  bannerImg: {
    zIndex: 100,
    resizeMode: "cover"
  },
  bannerBcg: {
    width: "100%",
    height: "100%",
    zIndex: 0,
    backgroundColor: '#1177FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 120
  },
  contentWrapper: {
    paddingTop: "8%",
    paddingBottom: "8%",
    paddingLeft: "6%",
    paddingRight: "6%",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
  },
  heading: {
    fontFamily: 'Italic-Bold',
    color: '#383842',
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 32,
    paddingBottom: "5%"
  },
  description: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: 'Italic-Regular',
    color: '#888891',
    paddingBottom: "12%"
  }
})