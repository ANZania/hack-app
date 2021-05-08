import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {AppButton} from "../ui/AppButton";


export const SignInForm = ({navigation}) => {
    const [login, onChangeLogin] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);

    return(
        <View style={styles.mainWrap}>
            <View style={styles.loginWrap}>
                <View>
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
                </View>
                <View style={styles.buttonWrap}>
                    <AppButton text={'Войти'} onPress={() => navigation.navigate('LotList')}/>
                    <Text style={styles.registerText}>
                        Нет аккаунта?
                    </Text>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                        <Text style={styles.registerLink}>
                            Зарегистрироваться
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>)
}


const styles = StyleSheet.create({
    mainWrap: {
        height: '80%',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: 0,
        left: 0

    },
    loginWrap: {
        height: '80%',
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: '10%',
        backgroundColor: '#fff',
        paddingTop: '5%',
        justifyContent: 'flex-start',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5.25,
        elevation: 13,
    },
    heading: {
        fontFamily: 'Inter-Bold',
        fontSize: 22,
        marginBottom: '3%',
        color: '#000'
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#459F40',
        marginVertical: '3%',
    },
    buttonWrap: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'relative',
        top: '22%'
    },
    registerText: {
        fontFamily: 'Inter-Regular',
        paddingTop: '5%',
        paddingBottom: '1.5%'
    },
    registerLink: {
        fontFamily: 'Inter-Medium',
        fontSize: 16,
        color: '#459F40'
    }
})