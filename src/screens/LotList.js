import React from 'react';
import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {AppButton} from "../ui/AppButton";

export const LotList = ({navigation}) => {
    return (
        <View style={styles.mainWrap}>
            <Text style={styles.heading}>
                Ваши участки
            </Text>
            <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>
                <TouchableOpacity activeOpacity={0.7} style={styles.card} onPress={() => navigation.navigate('Detail')}>
                    <Image source={require('../../assets/img/card_img_1.png')} style={styles.cardImg}/>
                    <View style={styles.infoWrap}>
                        <Text style={styles.infoHeading} numberOfLines={3}>
                            Московская область, Раменский район, сельское поселение Рыболовское
                        </Text>
                        <View>
                            <Text style={styles.infoTag}>
                                Кадастровый номер
                            </Text>
                            <Text style={styles.infoText}>
                                50:23:0050445:633
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={styles.card} onPress={() => navigation.navigate('Detail')}>
                    <Image source={require('../../assets/img/card_img_2.png')} style={styles.cardImg}/>
                    <View style={styles.infoWrap}>
                        <Text style={styles.infoHeading} numberOfLines={3}>
                            Московская область, Наро-Фоминский район, ЗАО"Татищево", уч-к 20
                        </Text>
                        <View>
                            <Text style={styles.infoTag}>
                                Кадастровый номер
                            </Text>
                            <Text style={styles.infoText}>
                                50:26:0061004:37
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.buttonWrap}>
                    <AppButton text={'+'} onPress={() => navigation.navigate('LotChoice')}/>
                </View>
            </ScrollView>

        </View>
    )
};

const styles = StyleSheet.create({
    mainWrap: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: '10%',
        width: '100%',
        paddingHorizontal: 20
    },
    heading: {
        fontFamily: 'Inter-Bold',
        fontSize: 24,
        marginBottom: '5%'
    },
    card: {
        width: '99%',
        overflow: 'hidden',
        maxWidth: '100%',
        height: 120,
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

        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    cardImg: {
        resizeMode: 'cover',
        height: '100%',
        width: '30%',
        borderRadius: 17,
        marginRight: '3%'
    },
    infoWrap: {
        width: '67%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    infoHeading: {
        fontFamily: 'Inter-Bold',
        fontSize: 14,
        lineHeight: 18,
        paddingRight: '3%',

    },
    infoTag: {
        fontFamily: 'Inter-Light',
        fontSize: 12,
        lineHeight: 18,
        paddingRight: '3%'
    },
    infoText: {
        fontFamily: 'Inter-Light',
        fontSize: 12,
        lineHeight: 18,
        paddingRight: '3%',
        color: '#459F40'
    },
    buttonWrap: {
        marginVertical: 10,
        width: '100%',
        alignItems: 'center',
    }
})