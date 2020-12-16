import React from "react";
import {
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Colors from "../constants/colors";
import DescriptionText from "../components/DescriptionText";
import FillerText from "../components/FillerText";
import TaggingPic from "../components/TaggingPic";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SignIn, CreateAccount, Home, Profile, Photo} from "../components/Screens";


const AuthStack = createStackNavigator();
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
        marginBottom: 35
      },
    }}
      />
  </HomeStack.Navigator>
)
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
)
const PhotoStackScreen = () => (
  <PhotoStack.Navigator>
    <PhotoStack.Screen name="Photo" component={Photo} />
  </PhotoStack.Navigator>
)

const StartGameScreen = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeStackScreen} />
        <Tabs.Screen name="Profile" component={ProfileStackScreen} />
        <Tabs.Screen name="Photo" component={PhotoStackScreen} />
      </Tabs.Navigator>
{/*      <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={SignIn} options={{title:"Sign In"}}/>
        <AuthStack.Screen name="CreateAccount" component={CreateAccount} options={{title:"Create Account"}}/>
          <View style={styles.screen}>
            <DescriptionText />
            <FillerText title="Dann..." />
            <TaggingPic title="Tag sie doch!!!" />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  title="Kostenlos bestellen!"
                  color={Colors.desText}
                />
              </View>
            </View>
  </View> 
      </AuthStack.Navigator>*/}
    </NavigationContainer>
    );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    height: "12%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.bottom,
  },
  button: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
});

export default StartGameScreen;
