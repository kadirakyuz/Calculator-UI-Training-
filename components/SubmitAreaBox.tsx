import { View, Text } from 'react-native'
import React from 'react'
 const SubmitAreaBox = ( props) => {
  return (
    <View style={{ backgroundColor:'black',justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'aqua',fontSize:35}}>{props.input}</Text>   

    </View>
  ) ;
}

export default SubmitAreaBox