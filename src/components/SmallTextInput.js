import React from 'react'
import styled from 'styled-components/native'

const StyledTextInput = styled.TextInput`
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.05);
  color: #919191;
  padding: 11px;
  border-radius: 12px;
  font-family: 'Inter-Regular';
  min-width: 44%;
  margin-right: 7px;
  height: 48px;
`

export function SmallInput({
                                      onInputTextChange,
                                      value,
                                      placeholder,
                                      typeKeyBoard = 'default',
                                      maxLength=1000
                                    }) {
  return (
      <StyledTextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onInputTextChange}
        keyboardType={typeKeyBoard}
        maxLength={maxLength}
      />
  )
}