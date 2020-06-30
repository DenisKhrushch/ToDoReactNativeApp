/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Input, Button} from 'react-native-elements';
import {PASSWORD_IS_VALID, INPUT_RULE} from '../../constants/constants';
import {RegisteringUser} from '../../interfaces/user';

const FormContainer = styled.View`
  border-radius: 7px;
  padding: 20px;
`;
const ServerErrorMessage = styled.Text`
  text-align: center;
  color: #dd3838;
`;

interface SignUpFormProps {
  onRegisterUser: (user: RegisteringUser) => void;
  registerResponseMessage: string;
}

export const SignUpForm = ({
  onRegisterUser,
  registerResponseMessage,
}: SignUpFormProps) => {
  const user: RegisteringUser = {
    name: '',
    surname: '',
    username: '',
    password: '',
  };

  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [nameError, setNameError] = useState<boolean>(false);
  const [surnameError, setSurnameError] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const handleInputName = (text: React.SetStateAction<string>) => {
    setName(text);
    setNameError(false);
  };
  const handleInputSurname = (text: React.SetStateAction<string>) => {
    setSurname(text);
    setSurnameError(false);
  };
  const handleInputUsername = (text: React.SetStateAction<string>) => {
    setUsername(text);
    setUsernameError(false);
  };
  const handleInputPassword = (text: React.SetStateAction<string>) => {
    setPassword(text);
    setPasswordError(false);
  };

  const handleSignUpSubmit = () => {
    INPUT_RULE.test(name) ? (user.name = name) : setNameError(true);
    INPUT_RULE.test(surname) ? (user.surname = surname) : setSurnameError(true);
    INPUT_RULE.test(username)
      ? (user.username = username)
      : setUsernameError(true);
    PASSWORD_IS_VALID.test(password)
      ? (user.password = password)
      : setPasswordError(true);
    if (user.name && user.surname && user.username && user.password) {
      onRegisterUser(user);
    }
  };

  return (
    <FormContainer
      style={{
        shadowColor: '#f3f3f3',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.52,
        shadowRadius: 3.46,
        elevation: 5,
      }}>
      {registerResponseMessage ? (
        <ServerErrorMessage>{registerResponseMessage}</ServerErrorMessage>
      ) : null}
      <Input
        placeholder="Name"
        placeholderTextColor={'#31456a'}
        leftIcon={{
          type: 'font-awesome',
          name: 'user',
          color: nameError ? '#dd3838' : '#31456a',
        }}
        defaultValue={name}
        onChangeText={handleInputName}
        errorStyle={{color: '#dd3838'}}
        errorMessage={nameError ? 'Invalid Input' : ''}
      />
      <Input
        placeholder="Surname"
        placeholderTextColor={'#31456a'}
        leftIcon={{
          type: 'font-awesome',
          name: 'user',
          color: surnameError ? '#dd3838' : '#31456a',
        }}
        defaultValue={surname}
        onChangeText={handleInputSurname}
        errorStyle={{color: '#dd3838'}}
        errorMessage={surnameError ? 'Invalid Input' : ''}
      />
      <Input
        placeholder="Username"
        placeholderTextColor={'#31456a'}
        leftIcon={{
          type: 'font-awesome',
          name: 'user',
          color: usernameError ? '#dd3838' : '#31456a',
        }}
        defaultValue={username}
        onChangeText={handleInputUsername}
        errorStyle={{color: '#dd3838'}}
        errorMessage={usernameError ? 'Invalid Input' : ''}
      />
      <Input
        placeholder="Password"
        placeholderTextColor={'#31456a'}
        leftIcon={{
          type: 'font-awesome',
          name: 'lock',
          color: passwordError ? '#dd3838' : '#31456a',
        }}
        secureTextEntry={true}
        defaultValue={password}
        onChangeText={handleInputPassword}
        errorStyle={{color: '#dd3838'}}
        errorMessage={passwordError ? 'Invalid Input' : ''}
      />
      <Button
        title="Register"
        raised
        titleStyle={{textTransform: 'uppercase', fontSize: 18}}
        onPress={handleSignUpSubmit}
        buttonStyle={{backgroundColor: '#31456a', borderRadius: 7, padding: 12}}
      />
    </FormContainer>
  );
};
