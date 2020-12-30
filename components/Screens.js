import React from "react";
import {
  Button,
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import Colors from "../constants/colors";
import ImagePicker from "./ImagePicker";
import GalleryItem from "./GalleryItem";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  desText: {
    width: "100%",
    height: 200,
    backgroundColor: Colors.desText,
    alignItems: "center",
    justifyContent: "center",
  },
  desTitle: {
    color: "black",
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  subHeader: {
    width: "100%",
    height: 100,
    backgroundColor: Colors.accent,
    alignItems: "center",
    justifyContent: "center",
  },
  subHeaderTitle: {
    color: "black",
    fontSize: 20,
  },
  fillText: {
    width: "100%",
    padding: 50,
    backgroundColor: Colors.fillText,
    alignItems: "center",
    justifyContent: "center",
  },
  fillText1: {
    width: "100%",
    height: 350,
    backgroundColor: Colors.tag,
    alignItems: "center",
    justifyContent: "center",
  },
  fillTitle1: {
    color: "black",
    fontSize: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  tag: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonView: {
    width: "100%",
    color: "blue",
    backgroundColor: "red",
  },
  forms: {
    height: 25,
    borderColor: "black",
    borderWidth: 1,
    width: 300,
    paddingLeft: 5,
    backgroundColor: "white",
  },
  padding: {
    fontSize: 3,
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);
export const Home = ({ navigation }) => (
  <ScrollView>
    <ScreenContainer>
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderTitle}>Tag - Scan - Find</Text>
      </View>
      <View style={styles.desText}>
        <Text style={styles.desTitle}>
          "Suchst du ständig die Sachen deiner Kinder? {"\n"}
          {"\n"}
          Kostet dich die Suche viel Zeit? {"\n"}
          {"\n"}
          Wüsstest du gerne, wem {"\n"}
          {"\n"}
          all die Sachen im Kinderzimmer gehören?"
        </Text>
      </View>
      <View style={styles.fillText}>
        <Text style={styles.fillTitle1}>Dann...</Text>
      </View>
      <View style={styles.fillText1}>
        <Text></Text>
        <Text style={styles.fillTitle1}>Tag sie doch!!!</Text>
        <Text></Text>
        <Image stlye={styles.tag} source={require("../assets/QR.png")} />
      </View>
      <View style={styles.buttonView}>
        <Button
          title="Jetzt bestellen!"
          onPress={() => navigation.push("Profile2")}
        />
      </View>
    </ScreenContainer>
  </ScrollView>
);

export const Bestellen = ({ navigation }) => {
  return (
    <ScrollView>
      <ScreenContainer>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderTitle}>Tag - Scan - Find</Text>
        </View>
        <View style={styles.desText}>
          <Text style={styles.desTitle}>
            Wir schicken dir 25 kostenlose Tags, mit {"\n"}
            {"\n"}
            denen du alle deine Sachen ganz einfach {"\n"}
            {"\n"}kennzeichnen kannst.
          </Text>
        </View>
        <View style={styles.fillText}>
          <View>
            <TextInput
              style={styles.forms}
              onChangeText={(text) => onChangeText(text)}
              value={"Vorname"}
            />
            <Text style={styles.padding}> </Text>
            <TextInput
              style={styles.forms}
              onChangeText={(text) => onChangeText(text)}
              value={"Nachname"}
            />
            <Text style={styles.padding}> </Text>
            <TextInput
              style={styles.forms}
              onChangeText={(text) => onChangeText(text)}
              value={"Straße"}
            />
            <Text style={styles.padding}> </Text>
            <TextInput
              style={styles.forms}
              onChangeText={(text) => onChangeText(text)}
              value={"Postleitzahl"}
            />
            <Text style={styles.padding}> </Text>
            <TextInput
              style={styles.forms}
              onChangeText={(text) => onChangeText(text)}
              value={"Ort"}
            />
          </View>
        </View>
        <View style={styles.fillText1}>
          <Text style={styles.fillTitle1}>...because we love moms!!!</Text>
          {/* <Image stlye={styles.tag} source={require("../assets/QR.png")} /> */}
        </View>
        <View style={styles.buttonView}>
          <Button title="Abschicken!" onPress={() => alert("abgeschickt")} />
        </View>
      </ScreenContainer>
    </ScrollView>
  );
};

export const Photo = () => (
  <ScreenContainer>
    <ImagePicker style={styles.photo} />
  </ScreenContainer>
);

export const Gallery = () => (
  <ScreenContainer>
    <ScrollView>
      <Text>hi there</Text>
      <GalleryItem />
    </ScrollView>
  </ScreenContainer>
);
