import { Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./../styles/globalStyles";

const AddNotesButton = ({ handleAddUpdate, btnTitle }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleAddUpdate}
      >
        <Text style={styles.buttonContent}>{btnTitle || "Add Note"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddNotesButton;
