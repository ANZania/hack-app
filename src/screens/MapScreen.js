import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions
} from "react-native";
import React, {useEffect, useState} from "react";
import {AppButton} from "../ui/AppButton";
import * as Location from 'expo-location';
import MapView, {
  MAP_TYPES,
  Polygon,
  ProviderPropType,
} from 'react-native-maps';

export const MapScreen = ({navigation}) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imgWrap}>
        {/*<Image source={require('../../assets/img/map.png')} style={styles.img} />*/}
        <View style={styles.mapWrap}>
          <MapView
              style={styles.map}
              mapType={'satellite'}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}/>
        </View>
      </View>
      <TouchableOpacity style={styles.wrap} activeOpacity={0.0}>
        <Text style={styles.heading}>Здравствуйте, Александр!</Text>
        <Text style={styles.subTitle}>Ваш участок:</Text>
        <View style={styles.infoWrap}>
          <Text style={styles.infoHeading} numberOfLines={3}>
            Московская область, Наро-Фоминский район, ЗАО"Татищево", уч-к 20
          </Text>
          <View>
            <Text style={styles.infoText}>
              50:26:0061004:37
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.buttonWrap}>
        <AppButton text='Продолжить' onPress={() => navigation.navigate('CultureSelect')} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: '10%',
    backgroundColor: 'white'
  },
  wrap: {
    paddingBottom: '2%',
    paddingTop: '10%',
    width: '100%',
    height: '50%',
    backgroundColor: '#fff',
    borderTopRightRadius: 120,
    position: 'absolute',
    bottom: 0
  },
  mapWrap: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  heading: {
    fontFamily: "Inter-Bold",
    color: "#000000",
    fontSize: 24,
    paddingHorizontal: 20,
    marginBottom: '2%'
  },
  subTitle: {
    fontFamily: "Inter-Medium",
    color: "#000000",
    fontSize: 18,
    paddingHorizontal: 20,
    marginBottom: 10
  },
  imgWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    zIndex: -100
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  buttonWrap: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 20,
    bottom: 10,
    zIndex: 10,
    alignSelf: 'center',
  },
  infoWrap: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  infoHeading: {
    fontFamily: 'Inter-Medium',
    fontSize: 18,
    lineHeight: 18,
    paddingRight: '3%',

  },
  infoTag: {
    fontFamily: 'Inter-Light',
    fontSize: 12,
    lineHeight: 18,
  },
  infoText: {
    fontFamily: 'Inter-Light',
    fontSize: 16,
    lineHeight: 18,
    color: '#459F40',
    paddingTop: '3%'
  },
})