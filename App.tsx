import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './src/pages/Dashboard/Dashboard';
import SignInPage from './src/pages/SignInPage/SignInPage';
import SignUpPage from './src/pages/SignUpPage/SignUpPage';
import CharacterList from './src/pages/CharacterList/CharacterList';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignInPage"
          component={SignInPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpPage"
          component={SignUpPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CharacterList"
          component={CharacterList}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
