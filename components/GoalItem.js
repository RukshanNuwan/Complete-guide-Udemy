import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GoalItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginTop: 5,
        backgroundColor: '#59b1b3',
        borderColor: 'teal',
        borderWidth: 1,
        borderRadius: 3
    }
});

export default GoalItem;