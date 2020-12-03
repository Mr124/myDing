import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from "./components/Header";
import Subheader from "./components/Subheader";
import StartGameScreen from './screens/StartGameScreen';
import SecondScreen from "./screens/SecondScreen";
import Navigator from "./routes/homeStack";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <Navigator />;

  if(userNumber) {
    content = <SecondScreen userChoice={userNumber}/>;
  }

  return (
    <View style={styles.screen}>
      <Header title="myDing"/>
      <Subheader title="Scan - Tag - Find"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
