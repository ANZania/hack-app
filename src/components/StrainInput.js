import React from 'react'
import styled from 'styled-components/native'
import {View, Text, TextInput, StyleSheet} from "react-native";
import SelectPicker from "react-native-form-select-picker";

const options = ["Пшеница", "Рожь", "Пшено"];

const BigTitle = styled.Text`
  font-size: 35px;
  margin-bottom: 30px;
  font-family: 'Inter';

`;

const Label = styled.Text`
  font-size: 28px;
  width: 100%;
  letter-spacing: 0;
  font-family: 'Inter-Medium';
`;

const StyledTextInput = styled.TextInput`
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.05);
  color: #919191;
  padding: 11px;
  border-radius: 12px;
  font-family: 'Inter-Regular';
  width: 100%;
  height: 48px;
  margin: 5px 0;
`

export default function StrainInput({
                                        onInputTextChange,
                                        value,
                                        placeholder,
                                        isLabel = true,
                                        label = "Введите название сорта",
                                        isNested = false,
                                        typeKeyBoard = 'default',
                                        maxLength=1000,
                                        animation=false
}) {
    // const [value, onChangeText] = React.useState('');
    return (
        <View style={isNested ? styles.wrapNested : styles.wrap}>
            {isLabel && <Label style={styles.label}>{label}</Label>}
            <TextInput
                placeholder={placeholder}
                value={value} 
                onChangeText={onInputTextChange}
                keyboardType={typeKeyBoard}
                maxLength={maxLength}
                style={animation ? {...styles.input, ...styles.animation } : styles.input}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        marginBottom: 11,
        marginLeft: 12,
        fontFamily: 'Inter-Medium'
    },
    wrap: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 5
    },
    wrapNested: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
    },
  input: {
    fontSize: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    color: '#919191',
    padding: 11,
    borderRadius: 12,
    fontFamily: 'Inter-Regular',
    width: '100%',
    height: 48,
    marginVertical: 5
  },
  animation: {
      borderWidth: 1,
    borderColor: '#459F40'
  }
})
