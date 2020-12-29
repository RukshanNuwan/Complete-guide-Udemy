import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }


    return (
        <Modal visible={props.visible} animationType="fade">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goals" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
                <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} />
            </View>
        </Modal>
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