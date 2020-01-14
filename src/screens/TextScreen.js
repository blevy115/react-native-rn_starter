import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState("");
  const { input } = styles;

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput style={input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newValue) => setName(newValue)}
        value={name}
      />
      <Text>My name is {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth:1
  }
});

export default TextScreen;
