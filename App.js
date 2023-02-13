/* ASSIGNMENT WEEK 2 */
import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);

  const saveNote = () => {
    setNotes([...notes, text]);
    setText('');
  };

  const handleNotePress = (index) => {
    setSelectedNote(notes[index]);
  };

  const handleCloseModal = () => {
    setSelectedNote(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxOne}>
        <TextInput
          style={styles.textInput}
          placeholder="Skriv din note..."
          value={text}
          onChangeText={setText}
        />
        <View style={{ height: 40, width: 100, alignItems: "center", marginStart: "40%"}}>
          <Button title="Gem note" onPress={saveNote} />
        </View>
      </View>

      <View style={styles.boxTwo}>
        <Text style={{fontWeight: "bold", marginHorizontal: 8}}>Dine noter:</Text>
        {notes.map((note, index) => {
          const shortNote = note
            .split(' ')
            .slice(0, 3)
            .join(' ');
          return (
            <TouchableOpacity style={{margin: 5}} key={index} onPress={() => handleNotePress(index)}>
              <Text>-{shortNote}...</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Modal visible={selectedNote !== null} animationType="slide">
        <View style={{marginTop: 50}}>
          <Text style={{marginBottom: 25, marginHorizontal: 8}}>{selectedNote}</Text>
          <View style={{ height: 40, width: 80, marginStart: "40%"}}>
            <Button title="Luk" onPress={handleCloseModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    marginHorizontal: 8,
    marginBottom: 8,
  },
  buttonCenter: {
    alignItems: "center"
  },
  boxOne: {
    flex: 1
  },
  boxTwo: {
    flex:5
  }
});

export default App;

/* ASSIGNMENT WEEK 1
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Image, Linking } from 'react-native';

export default function App() {

  const incrementCounter = () => {
    Linking.openURL('https://forlagetmarx.dk/');
  };

  return (
    <View style={styles.container}>
      <Image
      source={require("./assets/Marx_forlag.png")}
      style={{ width: `100%`, height: 150}}
      resizeMode="contain"
      />
      <Text style={styles.headerText}>Med Forlaget Marx håber vi at fasttømre vores position som en af de mest pålidelige kilder til marxistisk litteratur, både historisk og nutidig.</Text>
      <Text style={{fontWeight: "bold", textAlign: 'center', marginTop: 10}}>God læsning, kammerater!</Text>
      <Pressable  style={styles.button} onPress={incrementCounter}>
        <Text style={styles.text}>Besøg os</Text>
      </Pressable>

      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f75959',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontStyle: "italic",
    padding: 2
  },
  button: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
}); */