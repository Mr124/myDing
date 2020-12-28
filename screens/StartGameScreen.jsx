import React from "react";
import {StyleSheet} from "react-native";
import Colors from "../constants/colors";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Home, Bestellen, Photo, Gallery} from "../components/Screens";


const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home1" component={Home} options={{
      title:"myDing",
      headerStyle: {
        backgroundColor: Colors.primary,
        height: 60
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: "black",
        fontSize: 20,
        textAlign: "center",
        marginBottom: 60
      },
    }}
      />
    <HomeStack.Screen name="Profile2" component={Bestellen} options={{
      title:"myDing",
      headerStyle: {
        backgroundColor: Colors.primary,
        height: 60
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: "black",
        fontSize: 20,
        textAlign: "center",
        marginBottom: 60
      },
    }}/>
  </HomeStack.Navigator>
)
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Bestellen} options={{
      title:"myDing",
      headerStyle: {
        backgroundColor: Colors.primary,
        height: 60
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: "black",
        fontSize: 20,
        textAlign: "center",
        marginBottom: 60
      },
    }}/>
  </ProfileStack.Navigator>
)

const StartGameScreen = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Who are we" component={HomeStackScreen} />
        <Tabs.Screen name="Bestellen" component={ProfileStackScreen} />
        <Tabs.Screen name="Photo" component={Photo} />
        <Tabs.Screen name="Gallery" component={Gallery} />
      </Tabs.Navigator>
    </NavigationContainer>
    );
};

const styles = StyleSheet.create({

});

export default StartGameScreen;
