import React from 'react'
import styled from 'styled-components/native'
import {View, Text, TextInput, StyleSheet} from "react-native";

const options = ["Пшеница", "Рожь", "Пшено"];

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
  max-height: 1100px;
  margin: 5px 0;
`

export default function MultilineStrainInput({
                                        onInputTextChange,
                                        value,
                                        placeholder,
                                        isLabel = true,
                                        label = "Введите название сорта",
                                        isNested = false
                                    }) {
    // const [value, onChangeText] = React.useState('');
    return (
        <View style={isNested ? styles.wrapNested : styles.wrap}>
            {isLabel && <Label style={styles.label}>{label}</Label>}
            <StyledTextInput
                placeholder={placeholder}
                placeholderPosition={'top'}
                value={value}
                multiline
                onChangeText={onInputTextChange}
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
})
