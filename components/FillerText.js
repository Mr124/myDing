import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Colors from "../constants/colors";

const FillerText = props => {
    return (
        <View style={styles.fillText}> 
            <Text style={styles.fillTitle}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    fillText: {
        width: "100%",
        height: "12%",
        backgroundColor: Colors.fillText,
        alignItems: "center",
        justifyContent: "center"
    },
    filTitle: {
        color: "black",
        fontSize: 12,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default FillerText;