import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import Colors from "../constants/colors";
import * as Font from "expo-font";
import {AppLoading} from "expo";

const getFonts =() => Font.loadAsync({
        "fatface": require("../assets/fonts/AbrilFatface-Regular.ttf")
    });

const Header = props => {

    const [fontsLoaded, setFontsLoaded] = useState(false);
    if (fontsLoaded) {
        return (
            <View style={styles.header}> 
                <Text style={styles.headerTitle}>{props.title}</Text>
            </View>
        )
    } else {
        return (<AppLoading 
            startAsync={getFonts}
            onFinish={()=>setFontsLoaded(true)}
        />)
    }
};

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "12%",
        paddingTop: 2,
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        color: "black",
        fontSize: 20,
        fontFamily: "fatface"
    }
});

export default Header;