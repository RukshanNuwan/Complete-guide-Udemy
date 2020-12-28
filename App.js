import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View>
        <TextInput placeholder="Course Goals" style={{padding: 10, borderColor: 'black', borderWidth: 1}} />
        <Button title="Click" />
      </View>

      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});
