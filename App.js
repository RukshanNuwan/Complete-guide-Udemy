import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goals" style={styles.input} />
        <Button title="Click" />
      </View>

      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  input: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    width: '80%'
  }
});
