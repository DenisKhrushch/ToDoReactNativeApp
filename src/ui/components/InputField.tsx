/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Input} from 'react-native-elements';
import {INPUT_RULE} from '../../constants/constants';
import styled from 'styled-components/native';

const Container = styled.View`
  border-radius: 7px;
  padding: 0px 20px;
  background-color: #fff;
`;

interface InputFieldProps {
  addItem: (value: string) => void;
}

export const InputField = ({addItem}: InputFieldProps) => {
  const [value, setValue] = useState<string>('');
  const [valid, setValidity] = useState<boolean>(true);

  const validate = (text: string) => {
    if (INPUT_RULE.test(text)) {
      setValidity(true);
      setValue(text);
    } else {
      setValidity(false);
    }
  };
  const handleSubmit = () => {
    if (valid && INPUT_RULE.test(value)) {
      addItem(value);
      setValue('');
    }
  };

  return (
    <Container
      style={{
        padding: 8,
        shadowColor: '#f3f3f3',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
      }}>
      <Input
        placeholder="What needs to be done?"
        placeholderTextColor={'#31456a'}
        leftIcon={{
          type: 'font-awesome-5',
          name: 'keyboard',
          color: !valid ? '#dd3838' : '#31456a',
        }}
        defaultValue={value}
        onChangeText={text => validate(text)}
        errorStyle={{color: '#dd3838'}}
        errorMessage={!valid ? 'Empty input' : ''}
        onSubmitEditing={handleSubmit}
      />
    </Container>
  );
};
