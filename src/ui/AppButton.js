import {Text, TouchableOpacity, View, StyleSheet, Keyboard} from "react-native";
import React, {useEffect, useState} from "react";

export const AppButton = ({text = 'Начать', onPress, disabled, style={}}) => {
  const disabledStyle = disabled ? {
    backgroundColor: 'rgba(0, 0, 0, 0.1)'
  } : {}
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const [keyboardStatus, setKeyboardStatus] = useState(undefined);
  const _keyboardDidShow = () => setKeyboardStatus("Keyboard Shown");
  const _keyboardDidHide = () => setKeyboardStatus("Keyboard Hidden");
  return (
     <>
       {keyboardStatus === 'Keyboard Shown' ?
           <></> :
           <TouchableOpacity activeOpacity={0.7} style={styles.buttonWrapper} onPress={onPress} disabled={disabled}>
             <View style={{...styles.buttonStart, ...disabledStyle, style }}>
               <Text style={styles.buttonText}>{text}</Text>
             </View>
           </TouchableOpacity>       }
     </>
  )
};

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: "column",
    width: "100%",
    height: 72
  },
  buttonStart: {
    borderRadius: 16,
    height: 72,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#459F40'
  },
  buttonText: {
    fontFamily: 'Inter-Bold',
    color: "#fff",
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 28,
  }
})