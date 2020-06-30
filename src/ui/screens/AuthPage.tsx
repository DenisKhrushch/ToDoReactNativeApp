/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components/native';
import {Button} from 'react-native-elements';
import {RootState} from '../../interfaces/rootState';
import {registerUser} from '../../user/actions';
import {loginUser} from '../../user/actions';
import {Header} from '../components/Header';
import {LoginForm} from '../components/LoginForm';
import {SignUpForm} from '../components/SignUpForm';
import {RegisteringUser, LoginingUser} from '../../interfaces/user';

const AuthScreen = styled.View`
  padding: 0 20px;
  justify-content: center;
`;
const ButtonContainer = styled.View`
  border-radius: 7px;
  flex-direction: row;
  margin: 0 7px 40px;
  justify-content: space-between;
`;

interface AuthProps {
  onRegisterUser: (user: RegisteringUser) => void;
  registerResponseMessage: string;
  onLoginUser: (user: LoginingUser) => void;
  loginResponseMessage: string;
}

const SignUpLoginPage = ({
  onRegisterUser,
  registerResponseMessage,
  onLoginUser,
  loginResponseMessage,
}: AuthProps) => {
  const [mode, setMode] = useState<boolean>(false);
  const handleLoginMode = () => {
    setMode(false);
  };
  const handleSignUpMode = () => {
    setMode(true);
  };
  return (
    <AuthScreen>
      <Header />
      <ButtonContainer>
        <Button
          title="SignUp"
          titleStyle={{color: '#31456a'}}
          buttonStyle={{
            backgroundColor: '#f3f3f3',
            width: 165,
            shadowColor: '#f3f3f3',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 9,
          }}
          containerStyle={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
          disabled={mode}
          onPress={handleSignUpMode}
        />
        <Button
          title="Login"
          titleStyle={{color: '#31456a'}}
          buttonStyle={{
            backgroundColor: '#f3f3f3',
            width: 180,
            shadowColor: '#f3f3f3',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 9,
          }}
          containerStyle={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
          disabled={!mode}
          onPress={handleLoginMode}
        />
      </ButtonContainer>
      {mode ? (
        <SignUpForm
          registerResponseMessage={registerResponseMessage}
          onRegisterUser={onRegisterUser}
        />
      ) : (
        <LoginForm
          loginResponseMessage={loginResponseMessage}
          onLoginUser={onLoginUser}
        />
      )}
    </AuthScreen>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    loginResponseMessage: state.userReducer.loginResponseMessage,
    registerResponseMessage: state.userReducer.registerResponseMessage,
  };
};

const mapDispatchToProps = {
  onLoginUser: loginUser,
  onRegisterUser: registerUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpLoginPage);
