import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goals" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
        <Button title="Add" onPress={addGoalHandler} />
      </View>

      <View>
        {courseGoals.map((goal) => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </View>
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
  },

  listItem: {
    padding: 10,
    marginTop: 5,
    backgroundColor: '#59b1b3',
    borderColor: 'teal',
    borderWidth: 1
  }
});
