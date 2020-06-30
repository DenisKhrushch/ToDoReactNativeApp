import 'react-native-gesture-handler';
import React from 'react';
import {connect} from 'react-redux';
import {ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ToDoListPage from './src/ui/screens/ToDoListPage';
import {RootState} from './src/interfaces/rootState';
import {logout} from './src/user/actions';
import AuthPage from './src/ui/screens/AuthPage';

const Stack = createStackNavigator();

interface AppProps {
  token: string;
  onLogout: () => Object;
  loading: boolean;
}

const App = ({token, loading}: AppProps) => {
  return loading ? (
    // eslint-disable-next-line react-native/no-inline-styles
    <ActivityIndicator size={70} color="#31456a" style={{flex: 1}} />
  ) : (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {token ? (
          <Stack.Screen name="todos" component={ToDoListPage} />
        ) : (
          <Stack.Screen name="auth" component={AuthPage} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = (state: RootState) => {
  return {
    token: state.userReducer.accessToken,
    loading: state.userReducer.loading,
  };
};

const mapDispatchToProps = {
  onLogout: logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
