import React, {useState} from "react";
import {ActivityIndicator, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View} from 'react-native'
import firebase from "./Firebase";
import {AppButton} from "../ui/AppButton";

export const SignUpForm = ({navigation}) => {
  const [login, onChangeLogin] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  const [confirmPass, onChangeConfirmPass] = React.useState(null);
  const [loading, setLoading] = useState(false)

  const RegHandler = async (email, pass, confPass) => {
    try {
      setLoading(true)
      if (pass !== confPass) {
        throw new Error('Пароли не совпадают')
      }
      await firebase.auth().createUserWithEmailAndPassword(email, pass)
      setLoading(false)
      navigation.navigate('LotList')
    } catch (e) {
      setLoading(false)
      const errorCode = e.code;
      if (errorCode === 'auth/email-already-in-use') {
        ToastAndroid.show('Пользователь с таким email уже существует', ToastAndroid.LONG);
      } else if (errorCode === 'auth/invalid-email') {
        ToastAndroid.show('Указан неверный email', ToastAndroid.LONG);
      } else if (errorCode === 'auth/weak-password') {
        ToastAndroid.show('Пароль слишком простой', ToastAndroid.LONG);
      } else if (e.message === 'Пароли не совпадают') {
        ToastAndroid.show('Пароли не совпадают', ToastAndroid.LONG);
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
            textContentType='emailAddress'
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

          <TextInput
            secureTextEntry={true}
            style={styles.input}
            onChangeText={onChangeConfirmPass}
            placeholder={'Повторите пароль'}
            value={confirmPass}
          />
        </View>
        <View style={styles.buttonWrap}>
          {
            loading ? <ActivityIndicator size="large" color="#459F40" /> : <AppButton text={'Войти'} onPress={() => RegHandler(login, password, confirmPass)}/>
          }
          <Text style={styles.registerText}>
            Есть аккаунт?
          </Text>
          <TouchableOpacity activeOpacity={0.7} style={styles.buttonWrapper} onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.registerLink}>
              Войти
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>)
}

const styles = StyleSheet.create({
  mainWrap: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  loginWrap: {
    height: '84%',
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
  buttonWrap: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingTop: '25%',
    alignItems: 'center'
  },
  registerText: {
    fontFamily: 'Inter-Regular',
    paddingTop: '5%',
    paddingBottom: '1.5%'
  },
  registerLink: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#1177FF'
  }
})