import { View, Alert } from "react-native";
import React, { useState } from "react";
import About from "./src/screen/About";
import ViewAllNotes from "./src/components/ViewAllNotes";
import AddNotesButton from "./src/components/AddNotesButton";
import MyInputField from "./src/components/MyInputField";
import { styles } from "./src/styles/globalStyles";
import MyHeader from "./src/components/MyHeader";


const App = () => {
  const [myNotes, setMyNotes] = useState([
    { key: 1, noteTitle: 'note 1', description: ' lorem lorem lorem lorem lorem' },
    { key: 2, noteTitle: 'note 2', description: ' lorem lorem lorem lorem lorem' },
    { key: 3, noteTitle: 'note 3', description: ' lorem lorem lorem lorem lorem' },
    { key: 4, noteTitle: 'note 4', description: ' lorem lorem lorem lorem lorem' },
  ])
  const [note, setNote] = useState('');

  const handleAddNotes = () => {
    console.log(note.length);

    if (note.length === 0) { Alert.alert('OOPS', 'note must be a length of four char', [{ text: 'ok', onPress: () => console.log('ok pressed') }]) }
    else {
      setMyNotes([...myNotes, { key: Math.random(), noteTitle: note, description: 'lorem lorem lorem lorem lorem' }]); setNote('');
    }
  }
  const handleDeleteNotes = (key) => setMyNotes((prev) => prev.filter((note) => note.key !== key));





  return (
    <View style={styles.body}>
      {/* Header */}
      <MyHeader />
      {/* input Here */}
      <MyInputField note={note} setNote={setNote} />
      {/*  */}

      {/* add btn */}
      <AddNotesButton handleAddUpdate={handleAddNotes} />
      {/* view all notes */}
      <ViewAllNotes myNotes={myNotes} handleDeleteNotes={handleDeleteNotes} />

    </View>
  );
};
export default App;


