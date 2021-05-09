import React, {useEffect, useState} from 'react'
import {
    View,
    StyleSheet, Text, TouchableOpacity,
} from "react-native";
import {AppButton} from "../ui/AppButton";
import PolygonCreator from "../components/PoligonCreator";
import {BigTitle} from "../ui/BigTitle";
import * as Location from 'expo-location';

export const MapChoice = ({navigation}) => {
    const [popup, setPopup] = useState(true);


    return (
        <View style={styles.container}>
            <PolygonCreator/>
            {/*<View style={styles.buttonWrap}>*/}
            {/*    <AppButton text='Продолжить' onPress={() => navigation.navigate('CultureSelect')} />*/}
            {/*</View>*/}
            {popup &&
                <View style={styles.popup}>
                    <BigTitle text={'Функция в разработке'}/>
                    <Text style={styles.popupDescr}>
                        Данная функция находится в разработке и может работать некорректно. 😞
                    </Text>
                    <View style={styles.buttonWrap}>
                        <TouchableOpacity activeOpacity={0.7} style={styles.buttonWrapper} onPress={() => navigation.goBack()}>
                            <Text style={styles.registerLink}>
                                Назад
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} style={styles.buttonWrapper} onPress={() => setPopup(false)}>
                            <Text style={styles.registerLink}>
                                Продолжить
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: '10%',
    },
    popup: {
        position: 'absolute',
        height: '40%',
        top: '5%',
        width: '90%',
        left: '5%',
        borderRadius: 17,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    popupDescr: {
        fontFamily: 'Inter-Regular',
        fontSize: 16
    },
    buttonWrap: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        position: 'absolute',
        bottom: 10,
        left: 20
    },
    buttonWrapper: {
        height: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '49%'
    }
})