import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Alert,
  Dimensions,
} from "react-native";
import colors from "../constants/colors";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as action from "../store/action";
import { useDispatch } from "react-redux";

const ImgPicker = (props) => {
  const [pickedImage, setPickedImage] = useState();

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    );
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant permissions",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };
  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setPickedImage(image.uri);
  };

  const dispatch = useDispatch();

  const [titleValue, setTitleValue] = useState("");

  const titleChangeHandler = (text) => {
    setTitleValue(text);
  };

  const saveChangeHandler = () => {
      dispatch(action.addItem(titleValue));
      props.navigation.goBack();
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!pickedImage ? (
          <Text>No image picked yet</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedImage }} />
        )}
      </View>
      <Button
        title="Objekt scannen"
        color={colors.primary}
        onPress={takeImageHandler}
      />
      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
        />
        <Button
          title="Objekt speichern"
          color={colors.primary}
          onPress={saveChangeHandler}
        />
      </View>
    </View>
  );
};

const dimensions = Dimensions.get("window");
const imageHeight = Math.round((dimensions.width * 9) / 16);
const imageWidth = dimensions.width;

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: "center",
  },
  imagePreview: {
    width: imageWidth,
    height: imageHeight,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    margin: 0,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  form: {
    margin: 5,
  },
  textInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 1,
  },
});

export default ImgPicker;
