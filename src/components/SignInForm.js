import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import {AppButton} from "../ui/AppButton";


export const SignInForm = () => {
    const [login, onChangeLogin] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);

    return(
        <View style={styles.mainWrap}>
            <View style={styles.loginWrap}>
                <Text style={styles.heading}>
                    Вход
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeLogin}
                    placeholder={'Логин/номер телефона'}
                    value={login}
                />

                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={onChangePassword}
                    placeholder={'Пароль'}
                    value={password}
                />
                <AppButton/>
            </View>
        </View>)
}


const styles = StyleSheet.create({
    mainWrap: {
        height: '100%',
        width: '100%',
        bottom: 0,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
    },
    loginWrap: {
        height: '80%',
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: '10%',
        backgroundColor: '#f7f7f7',
        paddingTop: '5%'
    },
    heading: {
        fontFamily: 'Inter-Medium',
        fontSize: 20,
        marginBottom: '3%'
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginVertical: '3%',
    },
})