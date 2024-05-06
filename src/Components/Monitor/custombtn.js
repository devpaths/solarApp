// CustomTouchableOpacity.js

import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomTouchableOpacity = ({onPress, text, isSelected}) => {
  return (
    <TouchableOpacity
      style={[styles.touchableOpacity, isSelected && styles.pressed]}
      onPress={onPress}>
      <Text style={[styles.text1, isSelected && styles.textpress]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomTouchableOpacity;

const styles = StyleSheet.create({
  touchableOpacity: {
    backgroundColor: 'white',
    width: 94,
    height: 55,
    marginTop: 5,
    borderWidth: 0.6,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginRight: 10,
    borderRadius: 6,
    padding: 6,
    borderColor: 'lightgray',
  },
  pressed: {
    backgroundColor: 'rgba(225, 23, 46, 0.16)',
    borderWidth: 1,
    borderLeftWidth: 1,

    borderColor: 'red', // Change to the desired pressed color
  },
  text1: {
    color: 'gray',
    marginTop: 8,
    textAlign: 'center',
    fontSize: 12,
  },
  textpress: {
    color: 'red',
  },
});
