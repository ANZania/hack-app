import React from "react";
import {View, StyleSheet, Image, ScrollView} from 'react-native'
import {BigTitle} from "../ui/BigTitle";
import StrainInput from "../components/StrainInput";
import CultureSelector from "../components/CultureSelector";
import {AppButton} from "../ui/AppButton";
import MultilineStrainInput from "../components/MultilineStrainInput";

const options = ["Г/м^2", "Кг/Га", "Т/Га", "Г/м^3"];

export const CommentScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer} contentContainerStyle={{ alignItems: 'center' }}>
                <BigTitle text='Всё почти готово!' />
                <Image source={require('../../assets/img/agro1.png')} style={styles.promo} />
                <View style={styles.card}>
                    <MultilineStrainInput label='Введите комментаий для специалиста:' placeholder='Введите текст' />
                </View>
                <View style={styles.buttonWrap}>
                    <AppButton text={'Завершить'} onPress={() => navigation.navigate('Detail')}/>
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
})