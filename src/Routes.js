import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ClassPage from './Pages/ClassPage';
import Schools from './Pages/Schools';
import CardsPage from './Pages/CardsPage';
import Favorites from './Pages/Favorites';
import Learned from './Pages/Learned';

import Icon from 'react-native-vector-icons/Ionicons';

const StackScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="ClassPage">
      <Stack.Screen
        name="ClassPage"
        component={ClassPage}
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
  );
};

const Routes = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarInactiveBackgroundColor: 'black',
          tabBarActiveBackgroundColor: 'black',
        }}>
        <Tab.Screen
          name="Favoritos"
          component={Favorites}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'star' : 'star-outline'}
                size={20}
                color={'white'}
              />
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Home"
          component={StackScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'home' : 'home-outline'}
                size={20}
                color={'white'}
              />
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Aprendidas"
          component={Learned}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'book' : 'book-outline'}
                size={20}
                color={'white'}
              />
            ),
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
