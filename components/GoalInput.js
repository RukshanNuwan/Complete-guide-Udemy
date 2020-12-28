import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = props => {
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Course Goals" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
            <Button title="Add" onPress={addGoalHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    input: {
        padding: 10,
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 3
    }
});

export default GoalInput;