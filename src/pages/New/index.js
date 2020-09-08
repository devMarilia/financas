import React from 'react';
import { View, Text , StyleSheet } from 'react-native'

export default function New(){
    return(
        <View style={styles.container}>
            <Text>NEW</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }
})