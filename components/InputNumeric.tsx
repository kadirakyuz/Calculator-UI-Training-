import {TextInput, TouchableOpacity,View, Text, StyleSheet, Keyboard, Alert } from 'react-native'
import React, { useState } from 'react'
import SubmitAreaBox from './SubmitAreaBox';
 
 

const InputNumeric: React.FC<{ boxColor: string; title: string }> = (props) => {
  const [input, setInput] = useState('');
const [second, setsecond] = useState('');
  const touchItButton = () => {
    setInput(props.title);
    Alert.alert(props.title);
  };

    


    return (
    <React.Fragment>
    <TouchableOpacity onPress={touchItButton} style={[styles.inputNumeric  , {backgroundColor:props.boxColor}]}>
    <Text style={styles.textinputNumeric }>{props.title}</Text>
    </TouchableOpacity>
    
    </React.Fragment> 
  )
} 
const styles = StyleSheet.create({

    inputNumeric: {
        flex: 1,
        backgroundColor: '#28282A',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 10,
      },
    textinputNumeric: {
        fontSize: 35,
        color: 'white',
        alignItems: 'center',
      },
})
export default InputNumeric;

 