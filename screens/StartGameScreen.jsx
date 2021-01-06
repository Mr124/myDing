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
const PhotoStack = createStackNavigator();
const GalleryStack = createStackNavigator();

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
        <ProfileStack.Screen name="Home1" component={Home} options={{
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
  </ProfileStack.Navigator>
)

const PhotoStackScreen = () => (
  <PhotoStack.Navigator>
    <PhotoStack.Screen name="Photo1" component={Photo} options={{
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
    }} />
        <PhotoStack.Screen name="Gallery1" component={Gallery} options={{
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
    }} />
  </PhotoStack.Navigator>
)

const GalleryStackScreen = () => (
  <GalleryStack.Navigator>
    <GalleryStack.Screen name="Gallery2" component={Gallery} options={{
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
     }} />
  </GalleryStack.Navigator>
)

const StartGameScreen = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Who are we" component={HomeStackScreen} />
        <Tabs.Screen name="Bestellen" component={ProfileStackScreen} />
        <Tabs.Screen name="Photo" component={PhotoStackScreen} />
        <Tabs.Screen name="Gallery" component={GalleryStackScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
    );
};

const styles = StyleSheet.create({

});

export default StartGameScreen;
