import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const Header = ({isPlantSelected, setPlantSelected}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        // onPress={() => setPlantSelected(true)}
        onPress={() => setPlantSelected(true)}
        style={[styles.headerButton]}>
        <Text
          style={[styles.headerText, isPlantSelected && styles.selectedOption]}>
          Plants
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.headerButton}
        onPress={() => setPlantSelected(false)}>
        <Text
          style={[
            styles.headerText,
            !isPlantSelected && styles.selectedOption,
          ]}>
          Devices
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'white',
    height: 115,
  },
  headerButton: {
    //    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: -75,
  },
  input: {
    color: 'black',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    padding: 6,
    fontSize: 17,
    color: 'lightgray',
  },
  selectedOption: {
    fontWeight: 'bold',
    color: 'black',
    borderBottomWidth: 2,
    padding: 2,
    paddingBottom: 4,
    fontSize: 20,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInputContainer: {
    backgroundColor: '#ebebeb',
    borderColor: 'lightgray',
    borderRadius: 10,
    // fontSize:3,
    height: 40,
  },
});
