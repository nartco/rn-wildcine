import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {View, Text, Platform} from 'react-native';
import React from 'react';
import Colors from '../constants/colors';

//screens

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import ListingScreen from '../screens/ListingScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const headerOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  title: 'Wildciné',
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontFamily: Platform.OS === 'ios' ? 'Berkshire Swash' : 'Berk',
    fontSize: 30,
  },
  headerTintColor: '#000',
};

const barStyle = {
  backgroundColor: Colors.secondary,
  borderColor: Colors.primary,
};

const HomeTabs = () => (
  <Tab.Navigator barStyle={barStyle}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Search" component={SearchScreen} />
    <Tab.Screen name="Listing" component={ListingScreen} />
    <Tab.Screen name="Favorite" component={FavoriteScreen} />
  </Tab.Navigator>
);

const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" options={headerOptions} component={HomeTabs} />
      <Stack.Screen
        name="Details"
        options={headerOptions}
        component={DetailsScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
