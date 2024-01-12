import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ButtonNew from "../components/ButtonNew";

import Home from "../screens/Home";
import NewRequests from "../screens/NewRequests";

import { Entypo, Feather } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export default function Routes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false ,
        tabBarStyle: {
          backgroundColor: "#121212",
          borderTopColor: "trasparent",
        }
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="NewRequest"
        component={NewRequests}
        options={{
          title: "NewRequest",
          tabBarIcon: ({ focused,  color }) => (
            <ButtonNew size={30} color={color} focused={focused}/>
          ),
          tabBarLabel: ""
        }}
      />

      <Screen
        name="Perfil"
        component={NewRequests}
        options={{
          title: "Perfil",
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
