import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput placeholder="Course Goals" style={{padding: 10, borderColor: 'black', borderWidth: 1, width: '80%'}} />
        <Button title="Click" />
      </View>

      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});
