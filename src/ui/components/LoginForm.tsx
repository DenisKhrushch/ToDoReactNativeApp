/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Input, Button} from 'react-native-elements';
import {PASSWORD_IS_VALID, INPUT_RULE} from '../../constants/constants';
import {LoginingUser} from '../../interfaces/user';

const FormContainer = styled.View`
  border-radius: 7px;
  padding: 20px;
`;
const ServerErrorMessage = styled.Text`
  text-align: center;
  color: #dd3838;
`;

interface LoginFormProps {
  loginResponseMessage: string;
  onLoginUser: (user: LoginingUser) => void;
}

export const LoginForm = ({
  loginResponseMessage,
  onLoginUser,
}: LoginFormProps) => {
  const loginingUser: LoginingUser = {username: '', password: ''};
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const handleInputUsername = (text: React.SetStateAction<string>) => {
    setUsername(text);
    setUsernameError(false);
  };
  const handleInputPassword = (text: React.SetStateAction<string>) => {
    setPassword(text);
    setPasswordError(false);
  };

  const handleLoginSubmit = () => {
    INPUT_RULE.test(username)
      ? (loginingUser.username = username)
      : setUsernameError(true);
    PASSWORD_IS_VALID.test(password)
      ? (loginingUser.password = password)
      : setPasswordError(true);
    if (loginingUser.username && loginingUser.password) {
      onLoginUser(loginingUser);
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
      {loginResponseMessage ? (
        <ServerErrorMessage>{loginResponseMessage}</ServerErrorMessage>
      ) : null}
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
        errorMessage={usernameError ? 'Invalid Input' : loginResponseMessage}
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
        errorMessage={passwordError ? 'Invalid Input' : loginResponseMessage}
      />
      <Button
        title="Login"
        raised
        titleStyle={{textTransform: 'uppercase', fontSize: 18}}
        onPress={handleLoginSubmit}
        buttonStyle={{backgroundColor: '#31456a', borderRadius: 7, padding: 12}}
      />
    </FormContainer>
  );
};
