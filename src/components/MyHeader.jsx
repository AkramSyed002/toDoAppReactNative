import React from "react";
import { Text, View } from "react-native";
import { styles } from "./../styles/globalStyles";

const MyHeader = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.header}>{title || "My Notes"}</Text>
    </View>
  );
};

export default MyHeader;
