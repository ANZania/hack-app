import React from 'react'
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native'

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
            <TouchableOpacity activeOpacity={0.7} style={styles.buttonWrapper}>
              <View style={styles.buttonStart}>
                <Text style={styles.buttonText}>Начать</Text>
              </View>
            </TouchableOpacity>
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
  },
  buttonWrapper: {
    flexDirection: "column",
    width: "100%",
    height: 72
  },
  buttonStart: {
    borderRadius: 16,
    height: 72,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#1177FF'
  },
  buttonText: {
    fontFamily: 'Italic-Bold',
    color: "#fff",
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 28,
  }
})