import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Colors from "../constants/colors";
import DescriptionText from "../components/DescriptionText";
import FillerText from "../components/FillerText";
import TaggingPic from "../components/TaggingPic";

const StartGameScreen = ({navigation}) => {

  const pressHandler = () => {
    navigation.navigate("SecondScreen");
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <DescriptionText />
        <FillerText title="Dann..." />
        <TaggingPic title="Tag sie doch!!!" />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Kostenlos bestellen!"
              onPress={pressHandler}
              color={Colors.desText}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
