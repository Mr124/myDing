import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Colors from "../constants/colors";

const DescriptionText = props => {
    return (
        <View style={styles.desText}> 
            <Text style={styles.desTitle}>"Suchst du ständig die Sachen deiner Kinder? {"\n"}{"\n"}
       Kostet dich die Suche viel Zeit? {"\n"}{"\n"}Wüsstest du gerne, wem all die Sachen im Kinderzimmer gehören?"</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    desText: {
        width: "100%",
        height: "20%",
        backgroundColor: Colors.desText,
        alignItems: "center",
        justifyContent: "center"
    },
    desTitle: {
        color: "black",
        fontSize: 12,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default DescriptionText;