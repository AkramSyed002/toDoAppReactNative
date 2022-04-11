import { Button, Linking, StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import About from "./src/screen/About";


const App = () => {
  const [myNotes, setMyNotes] = useState([
    { key: 1, noteTitle: 'note 1', description: ' lorem lorem lorem lorem lorem' },
    { key: 2, noteTitle: 'note 2', description: ' lorem lorem lorem lorem lorem' },
    { key: 3, noteTitle: 'note 3', description: ' lorem lorem lorem lorem lorem' },
    { key: 4, noteTitle: 'note 4', description: ' lorem lorem lorem lorem lorem' },
  ])
  const [note, setNote] = useState('')


  const handleAddNotes = () => {
    setMyNotes([...myNotes, { key: Math.random(), noteTitle: note, description: 'lorem lorem lorem lorem lorem' }])

  }
  const handleDeleteNotes = (key) => {
    setMyNotes(prev => prev.filter(note => note.key !== key))
  }
  return (
    <View style={styles.body}>
      {/* Header */}
      <View style={styles.header} ><Text style={styles.header}>My Notes</Text>

      </View>
      {/* input Here */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputField} placeholder='enter your note' value={note} onChangeText={
          (e) => setNote(e)} />
      </View>

      {/* add btn */}
      <TouchableOpacity style={styles.buttonContainer} onPress={handleAddNotes}>
        <Text style={styles.buttonContent}>Add Note</Text>
      </TouchableOpacity>

      <View style={styles.notesContainer}>
        <FlatList data={myNotes}
          renderItem={({ item }) => ((
            <>
              {myNotes.length === 1 ?
                <View style={{ alignItems: 'center' }}><Text >No Notes to Show</Text></View> :
                <View style={styles.noteStyle}>
                  <Text style={styles.deleteIcon} onPress={() => handleDeleteNotes(item.key)}>X</Text>
                  <Text style={{ fontSize: 20, color: 'gray' }}>{item.noteTitle + item.description}</Text>
                </View>

              }
            </>
          )



          )}
        />




      </View>
      {/* view all notes */}




    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "coral",
    // alignItems: "center",
    // justifyContent: "center",
  },
  firstParagraph: { color: "white", fontSize: 30 },
  buttonContainer: { flex: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 8, borderRadius: 8, width: '100%', marginVertical: 25 },
  buttonContent: { backgroundColor: 'tomato', color: 'white', fontSize: 20, padding: 12, width: '80%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', borderRadius: 8 },
  header: { justifyContent: 'center', alignItems: 'center', color: "white", fontSize: 30, paddingTop: 10 },
  inputContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 8 },
  inputField: { border: '1px solid #ddde', borderRadius: 8, width: 300, padding: 16 },
  notesContainer: { flex: 1, backgroundColor: 'white' },
  noteStyle: { flexDirection: "row", borderBottomColor: '#ddde', borderBottomWidth: 1, padding: 10, marginVertical: 5, alignItems: 'center', },
  deleteIcon: { fontWeight: 'bold', fontSize: 20, color: 'red', marginRight: 8 }
});







{/* <Text style={styles.firstParagraph}>
        my first react native app {first}
      </Text>

      <View style={styles.buttonUpdate}>
        <Button
          title="Link to google"
          onPress={() => Linking.openURL("https://www.google.com")}
        />
      </View>
      <Button title="Counter" onPress={clickHandler} /> */}
{/* <About /> */ }
