import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import SubmitAreaBox from './SubmitAreaBox';   

const InputNumericAritmatical = (props) => {
  const [input, setInput] = useState('');

  const touchItButton = () => {
    setInput(props.title);
    Alert.alert(props.title);
  };

  return (
    <React.Fragment> 
      <TouchableOpacity onPress={touchItButton} style={[styles.inputNumeric, { backgroundColor: props.boxColor }]}>
        <Text style={styles.textInputNumeric}>{props.title}</Text>
      </TouchableOpacity>
     
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  inputNumeric: {
    flex: 1,
    backgroundColor: '#28282A',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },
  textInputNumeric: {
    fontSize: 35,
    color: 'white',
    alignItems: 'center',
  },
});

export default InputNumericAritmatical;
