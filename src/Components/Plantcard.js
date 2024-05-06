import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Plantcard = ({ onPress, text, style ,textColor }) => {
  return (
    <TouchableOpacity style={[styles.touchableOpacity, style]} onPress={onPress}>
      <Text style={[styles.btntxt, { color: textColor || 'gray' }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    backgroundColor: 'white',
    marginBottom: 2,
    width: 380,
    height: 60,
  },
  btntxt: {
    color: 'gray',
    fontSize: 15,
    marginLeft: 20,
    marginTop: 15,
  },
});

export default Plantcard;
