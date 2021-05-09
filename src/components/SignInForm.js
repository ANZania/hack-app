import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, ToastAndroid, ActivityIndicator} from 'react-native';
import {AppButton} from "../ui/AppButton";
import firebase from './Firebase'
import Toast from 'react-native-root-toast';

export const SignInForm = ({navigation}) => {
    const [login, onChangeLogin] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    const [loading, setLoading] = useState(false)

    const AuthHandler = async (email, pass) => {
      try {
        setLoading(true)
        await firebase.auth().signInWithEmailAndPassword(email, pass)
        setLoading(false)
        navigation.navigate('LotList')
      } catch (e) {
        setLoading(false)
        const errorCode = e.code;
        if (errorCode === 'auth/invalid-email') {
          // ToastAndroid.show('Указан неверный email', ToastAndroid.LONG);
          let toast = Toast.show('Указан неверный email', {
            duration: Toast.durations.LONG,
          });
        } else if (errorCode === 'auth/user-not-found') {
          // ToastAndroid.show('Пользователь с данный адресом не найдем', ToastAndroid.LONG);
          let toast = Toast.show('Пользователь с данный адресом не найдем', {
            duration: Toast.durations.LONG,
          });
        } else if (errorCode === 'auth/wrong-password') {
          // ToastAndroid.show('Указан неверный пароль', ToastAndroid.LONG);
          let toast = Toast.show('Указан неверный пароль', {
            duration: Toast.durations.LONG,
          });
        }
      }
    }

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
                        placeholder={'Логин/Адрес электронной почты'}
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
                  {
                    loading ? <ActivityIndicator size="large" color="#459F40" /> : <AppButton text={'Войти'} onPress={() => AuthHandler(login, password)}/>
                  }
                    <Text style={styles.registerText}>
                        Нет аккаунта?
                    </Text>
                    <TouchableOpacity activeOpacity={0.7} style={styles.buttonWrapper} onPress={() => navigation.navigate('SignUp')}>
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