import React from 'react'
import {
    View,
    StyleSheet,
} from "react-native";
import {AppButton} from "../ui/AppButton";
import PolygonCreator from "../components/PoligonCreator";

export const MapChoice = ({navigation}) => {

    return (
        <View style={styles.container}>
            <PolygonCreator/>
            {/*<View style={styles.buttonWrap}>*/}
            {/*    <AppButton text='Продолжить' onPress={() => navigation.navigate('CultureSelect')} />*/}
            {/*</View>*/}

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
    buttonWrap: {
        position: 'absolute',
        width: '100%',
        paddingHorizontal: 20,
        bottom: 10,
        zIndex: 10,
        alignSelf: 'center',
    },
})