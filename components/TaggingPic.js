import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import Colors from "../constants/colors";

const TaggingPic = props => {
    return (
        <View style={styles.fillText}> 
            <Text style={styles.fillTitle}>Tag sie doch!!!</Text>
            <Image stlye={styles.tag} source={require("../assets/QR.png")} />
        </View>
    )
};

const styles = StyleSheet.create({
    fillText: {
        width: "100%",
        height: "48%",
        backgroundColor: Colors.tag,
        alignItems: "center",
        justifyContent: "center"
    },
    fillTitle: {
        color: "black",
        fontSize: 12,
        justifyContent: "center",
        alignItems: "center"
    },
    tag: {
        justifyContent: "center",
        alignItems: "center"
    }
});

export default TaggingPic;