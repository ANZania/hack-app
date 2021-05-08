import React, {useState} from 'react'
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
`;


export default function StrainInput({options,
                                        placeholder,
                                        label,
                                        isLabel = true,
                                        isNested = false}) {

    return (
        <View style={isNested ? styles.wrapNested : styles.wrap}>
            {isLabel && <Label style={styles.label}>{label}</Label>}
            <StyledTextInput
                placeholder={placeholder}
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
    }
})
