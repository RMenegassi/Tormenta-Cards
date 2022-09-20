import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import App from './Pages/First';
import Schools from './Pages/Schools';
import CardsPage from './Pages/CardsPage';

const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="First">
        <Stack.Screen
          name="First"
          component={App}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Schools"
          component={Schools}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CardsPage"
          component={CardsPage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
