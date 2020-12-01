import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Colors from "../constants/colors";

const Subheader = props => {
    return (
        <View style={styles.subHeader}> 
            <Text style={styles.subHeaderTitle}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    subHeader: {
        width: "100%",
        height: "6%",
        backgroundColor: Colors.accent,
        alignItems: "center",
        justifyContent: "center"
    },
    subHeaderTitle: {
        color: "black",
        fontSize: 12
    }
});

export default Subheader;