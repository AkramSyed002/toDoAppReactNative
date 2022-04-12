import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { styles } from "./../styles/globalStyles";

const ViewAllNotes = ({ myNotes, handleDeleteNotes }) => {
  return (
    <View style={styles.notesContainer}>
      <FlatList
        data={myNotes}
        renderItem={({ item }) => (
          <>
            {myNotes.length === 1 ? (
              <View style={{ alignItems: "center" }}>
                <Text>No Notes to Show</Text>
              </View>
            ) : (
              <View style={styles.noteStyle}>
                <Text
                  style={styles.deleteIcon}
                  onPress={() => handleDeleteNotes(item.key)}
                >
                  X
                </Text>
                <Text style={{ fontSize: 20, color: "gray" }}>
                  {item.noteTitle + item.description}
                </Text>
              </View>
            )}
          </>
        )}
      />
    </View>
  );
};

export default ViewAllNotes;
