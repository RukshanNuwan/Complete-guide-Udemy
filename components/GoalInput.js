import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };


    return (
        <Modal visible={props.visible} animationType="fade">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goals" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        width: '80%',
        padding: 10,
        marginBottom: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 3
    },

    buttonContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    button: {
        width: '40%'
    }
});

export default GoalInput;