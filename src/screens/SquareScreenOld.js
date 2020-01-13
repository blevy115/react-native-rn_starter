import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColorBounds = (colorAmount) => {
    if (colorAmount >= 255) return 255
    else if (colorAmount <= 0) return 0
    else return colorAmount
  }

  return(
    <View>
    <ColorCounter color="Red"
    onIncrease={()=> {setRed(setColorBounds(red + COLOR_INCREMENT))}}
    onDecrease={()=> {setRed(setColorBounds(red - COLOR_INCREMENT))}}
    />
    <ColorCounter color="Green"
    onIncrease={()=> {setGreen(setColorBounds(green + COLOR_INCREMENT))}}
    onDecrease={()=> {setGreen(setColorBounds(green - COLOR_INCREMENT))}}
    />
    <ColorCounter color="Blue"
    onIncrease={()=> {setBlue(setColorBounds(blue + COLOR_INCREMENT))}}
    onDecrease={()=> {setBlue(setColorBounds(blue - COLOR_INCREMENT))}}
    />
    <View style={{ height: 150, width:150, backgroundColor:`rgb(${red}, ${green}, ${blue})` }} />
    </View>
  )
}

const styles = StyleSheet.create({});

export default SquareScreen;
