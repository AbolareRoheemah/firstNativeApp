import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'



const AddTodo = ({submitHandler}) => {
    const [text, setText] = useState('')

    const changeHandler = (val) => {
        setText(val)
    }


    return ( 
        <View>
            <TextInput 
            style={styles.input}
            placeholder='new todo...'
            onChangeText={changeHandler}

            />
            <View style={styles.button}>
            <Button 
            onPress={() => submitHandler(text)}
            title='Add Todo'
            color='coral'/>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    button: {
        borderWidth: 1,
        borderColor: 'coral',
        padding: 4,
    }
})
 
export default AddTodo;