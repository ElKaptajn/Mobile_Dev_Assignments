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
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});
