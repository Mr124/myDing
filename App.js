import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import reducer from "./store/reducer";

const rootRecucer = combineReducers({
  textInputs: reducer,
});

const store = createStore(rootRecucer, applyMiddleware(ReduxThunk));

export default function App() {
  let content = <StartGameScreen />;

  return (
    <Provider store={store}>
      <View style={styles.screen}>{content}</View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
