import React, { Component } from "react";
import { Button, Text, StyleSheet, View, Image, TextInput } from "react-native";
import Colors from "../constants/colors";
import { AuthContext } from "./context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  desText: {
    width: "100%",
    height: "20%",
    backgroundColor: Colors.desText,
    alignItems: "center",
    justifyContent: "center",
  },
  desTitle: {
    color: "black",
    fontSize: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  subHeader: {
    width: "100%",
    height: "6%",
    backgroundColor: Colors.accent,
    alignItems: "center",
    justifyContent: "center",
  },
  subHeaderTitle: {
    color: "black",
    fontSize: 12,
  },
  fillText: {
    width: "100%",
    padding: 10,
    backgroundColor: Colors.fillText,
    alignItems: "center",
    justifyContent: "center",
  },
  fillText1: {
    width: "100%",
    height: "48%",
    backgroundColor: Colors.tag,
    alignItems: "center",
    justifyContent: "center",
  },
  fillTitle1: {
    color: "black",
    fontSize: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  tag: {
    justifyContent: "center",
    alignItems: "center",
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const SignIn = ({ navigation }) => {
  return (
    <ScreenContainer>
      <View style={styles.desText}>
        <Text style={styles.desTitle}>
          "Suchst du ständig die Sachen deiner Kinder? {"\n"}
          {"\n"}
          Kostet dich die Suche viel Zeit? {"\n"}
          {"\n"}Wüsstest du gerne, wem all die Sachen im Kinderzimmer gehören?"
        </Text>
      </View>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => signIn()} />
      <Button
        title="Create Account"
        onPress={() => navigation.push("CreateAccount")}
      />
    </ScreenContainer>
  );
};

export const CreateAccount = () => {
  const { signUp } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => signUp()} />
    </ScreenContainer>
  );
};

export const Home = ({ navigation }) => (
  <ScreenContainer>
    <Text>Master List Screen12</Text>
    <View style={styles.subHeader}>
      <Text style={styles.subHeaderTitle}>Tag - Scan - Find</Text>
    </View>
    <View style={styles.desText}>
      <Text style={styles.desTitle}>
        "Suchst du ständig die Sachen deiner Kinder? {"\n"}
        {"\n"}
        Kostet dich die Suche viel Zeit? {"\n"}
        {"\n"}Wüsstest du gerne, wem all die Sachen im Kinderzimmer gehören?"
      </Text>
    </View>
    <View style={styles.fillText}>
      <Text style={styles.fillTitle}>Dann...</Text>
    </View>
    <View style={styles.fillText1}>
      <Text style={styles.fillTitle1}>Tag sie doch!!!</Text>
      <Image stlye={styles.tag} source={require("../assets/QR.png")} />
    </View>
    <Button
      title="React Native by Example"
      onPress={() =>
        navigation.push("Details", { name: "React Native by Example " })
      }
    />
    <Button
      title="React Native School"
      onPress={() =>
        navigation.push("Details", { name: "React Native School" })
      }
    />
    <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
  </ScreenContainer>
);

export const Profile = ({ navigation }) => {
  return (
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
        <Text style={styles.fillTitle}>Dann...</Text>
        <TextInput
          style={{ height: 20, borderColor: "black", borderWidth: 1 }}
          onChangeText={(text) => onChangeText(text)}
          value={"Vorname"}
        />
        <TextInput
          style={{ height: 20, borderColor: "black", borderWidth: 1 }}
          onChangeText={(text) => onChangeText(text)}
          value={"Nachname"}
        />
        <TextInput
          style={{ height: 20, borderColor: "black", borderWidth: 1 }}
          onChangeText={(text) => onChangeText(text)}
          value={"Straße"}
        />
        <TextInput
          style={{ height: 20, borderColor: "black", borderWidth: 1 }}
          onChangeText={(text) => onChangeText(text)}
          value={"Postleitzahl"}
        />
        <TextInput
          style={{ height: 20, borderColor: "black", borderWidth: 1 }}
          onChangeText={(text) => onChangeText(text)}
          value={"Ort"}
        />
      </View>
      <View style={styles.fillText1}>
        <Text style={styles.fillTitle1}>...because we love moms!!!</Text>
       {/* <Image stlye={styles.tag} source={require("../assets/QR.png")} /> */}
      </View>
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Sign Out" onPress={() => signOut()} />
    </ScreenContainer>
  );
};

export const Photo = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Hier kommt ne Kamera...Klick!</Text>
    </ScreenContainer>
  );
};
