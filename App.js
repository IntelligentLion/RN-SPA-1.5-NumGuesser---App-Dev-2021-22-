import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export default function App() {
  const [entries, setEntries] = React.useState(0);
  const [guess, setGuess] = React.useState(Number);
  const [mystery, setMystery] = React.useState(
    Math.floor(Math.random() * 1000)
  );
  const [result, setResult] = React.useState('Guess my number');
  const onGuess = (newGuess) => {
    setGuess(newGuess);
    if (newGuess == mystery) {
      setResult('Great Job! You magically guessed it!');
      setMystery(Math.floor(Math.random() * 1000));
    } else {
      if (newGuess > mystery) {
        setResult('Ur guess is high!');
      }
      if (newGuess < mystery) {
        setResult('Ur guess is low!');
      }
    }
      setEntries(entries + 1)
  };


  return (
    <View style={(styles.container, styles.input)}>
      <Text style={styles.paragraph}>{result}</Text>
      <Text style={styles.paragraph}>Number of Tries: {entries} </Text>

      <TextInput
        onChangeText={onGuess}
        value={guess}
        keyboardType="number-pad"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
