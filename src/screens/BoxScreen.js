import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
  const {containerStyle, boxOneStyle, boxTwoStyle, boxThreeStyle} = styles
  return (
    <View style={containerStyle}>
      <View style={boxOneStyle} />
      <View style={boxTwoStyle} />
      <View style={boxThreeStyle} />
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle:{
    height:150,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  boxOneStyle:{
    height:75,
    width:100,
    backgroundColor:"red",
  },
  boxTwoStyle:{
    height:75,
    width:100,
    backgroundColor:"green",
    alignSelf:"flex-end"
  },
  boxThreeStyle:{
    height:75,
    width:100,
    backgroundColor:"purple",
  }

});

export default BoxScreen;
