import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
    <ImageDetail
      title="Forest"
      imageScore={7}
      imageSource={require("../../assets/forest.jpg")}
    />
    <ImageDetail
      title="Mountain"
      imageScore={8}
      imageSource={require("../../assets/mountain.jpg")}
    />
    <ImageDetail
      title="Beach"
      imageScore={9}
      imageSource={require("../../assets/beach.jpg")}
    />
    </View>
  )
}

const styles = StyleSheet.create({});

export default ImageScreen;
