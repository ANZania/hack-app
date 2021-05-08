import React from 'react';
import {View, StyleSheet, Text, ScrollView, Image, TextInput} from 'react-native';
import {AppButton} from "../ui/AppButton";

export const LotChoice = ({navigation}) => {
    const [cad, onChangeCad] = React.useState(null);

    return (
        <View style={styles.mainWrap}>
            <Text style={styles.heading}>
                Добавить участок
            </Text>
            <View style={{width: '100%', marginTop: -75}}>
                <View style={styles.imgWrap}>
                    <Image source={require('../../assets/img/agro_tekh_5.png')} style={styles.promo} />
                </View>
                <View style={styles.inputWrap}>
                    <Text style={styles.tag}>
                        Введите кадастровый номер участка:
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeCad}
                        placeholder={'00:00:0000000:00'}
                        value={cad}/>
                </View>
            </View>
            <View style={styles.buttonWrap}>
                <AppButton text={'Далее'} onPress={() => navigation.navigate('Map')}/>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    mainWrap: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: '10%',
        width: '100%',
        paddingHorizontal: 20
    },
    heading: {
        fontFamily: 'Inter-Bold',
        fontSize: 24,
    },
    imgWrap: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    promo: {
        resizeMode: 'contain',
        width: '100%',
        zIndex: -100
    },
    inputWrap: {
        marginTop: -75,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    tag: {
        fontFamily: 'Inter-Medium',
        fontSize: 18,
        maxWidth: '90%'
    },
    input: {
        height: 40,
        minWidth: '90%',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginVertical: '3%',
    },
    buttonWrap: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        alignItems: 'center',
    }
})