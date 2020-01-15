import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState("");
  const { input } = styles;

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput style={input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newValue) => setPassword(newValue)}
        value={password}
      />
      <Text>Password is {password}</Text>
      {password.length < 4 ?
        <Text>Password must be at least 4 characters</Text>:
        null
      }
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
