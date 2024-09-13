import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import PlayScreen from '../screens/PlayScreen';
import BookScreen from '../screens/BookScreen';
import ProfileScreen from '../screens/ProfileScreen';
import VenueInfoCard from '../components/VenueInfoCard';

type RootStackParamList = {
  Main: undefined;
  Venue:undefined;
};

type BottomTabParamList = {
  HOME: undefined;
  PLAY: undefined;
  BOOK: undefined;
  PROFILE:undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

// Define the Tab Icon outside the render
const TabBarIcon: React.FC<{ name: string; focused: boolean }> = ({ name, focused }) => {
  return (
    <Ionicons
      name={name}
      size={24}
      color={focused ? 'green' : '#989898'}
    />
  );
};

const BottomTabs: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HOME"
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: 'green',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="home-outline" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="PLAY"
        component={PlayScreen}
        options={{
          tabBarActiveTintColor: 'green',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="play-outline" focused={focused} />
          ),
          headerShown: false, // Hide the header for this tab as well
        }}
      />
      <Tab.Screen
        name="BOOK"
        component={BookScreen}
        options={{
          tabBarActiveTintColor: 'green',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="book-outline" focused={focused} />
          ),
          headerShown: false, // Hide the header for this tab
        }}
      />
      <Tab.Screen
        name="PROFILE"
        component={ProfileScreen}
        options={{
          tabBarActiveTintColor: 'green',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="person-outline" focused={focused} />
          ),
          headerShown: false, // Hide the header for this tab
        }}
      />
    </Tab.Navigator>
  );
};

const MainStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={BottomTabs}
        options={{ headerShown: false }} // This is correct for hiding the stack navigator header
      />
       <Stack.Screen
        name="Venue"
        component={VenueInfoCard}
        options={{ headerShown: false }} // This is correct for hiding the stack navigator header
      />
    </Stack.Navigator>
  );
};

const StackNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default StackNavigation;
