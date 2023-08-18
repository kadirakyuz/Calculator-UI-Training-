import React, { useState } from 'react';
import {
  StatusBar,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TextInput,
  Alert,
  FlatList,
} from 'react-native';
import InputNumeric from './components/InputNumeric';
import InputNumericAritmatical from './components/InputNumericAritmatical';
import SubmitAreaBox from './components/SubmitAreaBox';
StatusBar.setHidden(true, 'slide');

const App = ( ) => {
  const [input, setInput] = useState('');

   

 /* const [input, setinput] = useState( )

  const touchItButton  = (props) =>{
  
    setinput(props.title);
    Alert.alert(props.title);
  }*/



  return (
    <SafeAreaView style={styles.backDesign}>
      <View style={styles.navBarDesign}>
        {/*<Text style={styles.navtextDesign}>CALCULATE</Text>
        <Text style={styles.navtextDescription}>by SkyBullet</Text>*/}
      </View>
      <View style={styles.areaDesign}>
        <View style={styles.submitArea}>

        <SubmitAreaBox input={input } />         


        </View>
        <View style={styles.inputArea}>


          <View style={styles.numericData1}>
            <InputNumeric title='AC' boxColor= 'orange' />
            <InputNumeric title='7'  boxColor= '#504e52'/>
            <InputNumeric title='4'  boxColor= '#504e52'/>
            <InputNumeric title='1'  boxColor= '#504e52'/>
            <InputNumeric title='C'  boxColor= 'orange'/>
          </View>

          <View style={styles.numericData1}>
            <InputNumeric title='%'  boxColor= '#28282A' />
            <InputNumeric title='8'  boxColor= '#504e52'/>
            <InputNumeric title='5'  boxColor= '#504e52'/>
            <InputNumeric title='2'  boxColor= '#504e52'/>
            <InputNumeric title='0'  boxColor= '#28282A'/>
          </View>

          <View style={styles.numericData1}>
            <InputNumeric title='/'  boxColor= '#28282A' />
            <InputNumeric title='9'  boxColor= '#504e52'/>
            <InputNumeric title='6'  boxColor= '#504e52'/>
            <InputNumeric title='3'  boxColor= '#504e52'/>
            <InputNumeric title='00' boxColor= '#28282A'/>
          </View>

          <View style={styles.numericData1}>
            <InputNumericAritmatical title='x'  boxColor='#28282A' />
            <InputNumericAritmatical title='-'  boxColor= '#28282A'/> 
            <InputNumericAritmatical title='+'  boxColor= '#28282A'/>
            <InputNumericAritmatical title=','  boxColor= '#28282A'/>
            <InputNumericAritmatical title='='  boxColor= 'orange'/> 
          </View>
           




        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navtextDesign: {
    fontSize: 18,
    color: 'red',
    fontWeight: '800',
  },
  navtextDescription: {
    fontSize: 12,
    color: 'red',
    fontWeight: '400',
  },
  backDesign: {
    backgroundColor: 'white',
    flex: 1,
  },
  navBarDesign: {
    backgroundColor: 'black',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  areaDesign: {
    backgroundColor: 'black',
    flex: 1,
  },
  submitArea: {
    backgroundColor: 'black',
    margin: 5,
    justifyContent: 'center',
    flex: 0.55,
  },
  inputArea: {
    backgroundColor: 'black',
    height: 420,
    margin: 5,
    flex: 1,
    flexDirection:'row'
  },
  numericData1: {
    width: 100,
    height: 'auto',
    backgroundColor: 'black',
    flexDirection: 'column',
    flex: 1,
    margin: 2,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor:'red',
    
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
