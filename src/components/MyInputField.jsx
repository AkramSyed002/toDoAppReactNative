import { StyleSheet, View, TextInput } from "react-native";
import React from "react";
import { styles } from "./../styles/globalStyles";

const MyInputField = ({ setNote, note }) => {
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="enter your note"
          value={note}
          onChangeText={(e) => setNote(e)}
        />
      </View>
    </View>
  );
};

export default MyInputField;
