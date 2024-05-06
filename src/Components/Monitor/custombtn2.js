// CustomTouchableOpacity.js

import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomTouchableOpacity2 = ({onPress, text, isSelected}) => {
  return (
    <TouchableOpacity
      style={[styles.touchableOpacity1, isSelected && styles.pressed1]}
      onPress={onPress}>
      <Text style={[styles.text2, isSelected && styles.textpress1]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomTouchableOpacity2;

const styles = StyleSheet.create({
  touchableOpacity1: {
    backgroundColor: 'white',
    width: 100,
    height: 40,
    marginTop: 5,

    borderColor: 'lightgray',
  },
  text2: {
    color: 'gray',
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
  },

  textpress1: {
    color: 'red',
  },
});
