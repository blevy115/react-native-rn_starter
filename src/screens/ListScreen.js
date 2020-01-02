import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { age: Math.floor(Math.random() * 50), name: 'Friend #1'},
    { age: Math.floor(Math.random() * 50), name: 'Friend #2'},
    { age: Math.floor(Math.random() * 50), name: 'Friend #3'},
    { age: Math.floor(Math.random() * 50), name: 'Friend #4'},
    { age: Math.floor(Math.random() * 50), name: 'Friend #5'},
    { age: Math.floor(Math.random() * 50), name: 'Friend #6'},
    { age: Math.floor(Math.random() * 50), name: 'Friend #7'},
    { age: Math.floor(Math.random() * 50), name: 'Friend #8'},
    { age: Math.floor(Math.random() * 50), name: 'Friend #9'},
    { age: Math.floor(Math.random() * 50), name: 'Friend #10'},
  ]


  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator = {false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({item}) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
      }}
    />
  )
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
