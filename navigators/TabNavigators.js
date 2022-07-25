/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function TabNavigators(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator
      // screenOptions={{
      //   tabBarHideOnKeyboard: true,
      //   tabBarActiveTintColor: "#FFBF00",
      //   tabBarInactiveTintColor: "black",
      // }}
      >
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" size={24} color="black" />
            ),
          }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="magnify" size={24} color="black" />
            ),
            headerShown: false,
          }}
          name="Search"
          component={SearchScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default TabNavigators;
