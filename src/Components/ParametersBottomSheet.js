import React, {useMemo, useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetTextInput,
} from '@gorhom/bottom-sheet';
import {ScrollView} from 'react-native-gesture-handler';

const ParametersBottomSheet = ({BottomSheetRef}) => {
  const snapPoints = useMemo(() => ['25%', '50%', '70%'], []);
  const [selectedButton, setSelectedButton] = useState(null);
  const [ongridStatus, setongridStatus] = useState(null);
  const [textInput1Value, setTextInput1Value] = useState('');
  const [textInput2Value, setTextInput2Value] = useState('');
  const [values, setValues] = useState(null);
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    [],
  );

  const handleButtonPress = buttonName => {
    setSelectedButton(buttonName);
  };

  const gridStatus = buttonName => {
    setongridStatus(buttonName);
  };

  const handleValueAssign = value => {
    setValues(value);
    // Assigning values based on the button pressed
    switch (value) {
      case 'Button A':
        setTextInput1Value('0');
        setTextInput2Value('5');
        break;
      case 'Button B':
        setTextInput1Value('5');
        setTextInput2Value('9');
        break;
      case 'Button C':
        setTextInput1Value('9');
        setTextInput2Value('16');
        break;
      case 'Button D':
        setTextInput1Value('16');
        setTextInput2Value('30');
        break;
      case 'Button E':
        setTextInput1Value('30');
        setTextInput2Value('100');
        break;
      case 'Button F':
        setTextInput1Value('100');
        setTextInput2Value('500');
        break;
      case 'Button G':
        setTextInput1Value('500');
        setTextInput2Value('Maximum');
        break;
      default:
        break;
    }
  };

  return (
    <BottomSheet
      index={-1}
      ref={BottomSheetRef}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}>
      <ScrollView>
        <Text
          style={{
            color: 'black',
            padding: 10,
            marginTop: 20,
            marginLeft: 12,
            fontWeight: 'bold',
            marginBottom: -50,
            fontSize: 15,
          }}>
          Plant Display
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            marginHorizontal: 10,
            flex: 1,
            flexDirection: 'row',
            maringLeft: -20,
          }}>
          <TouchableOpacity
            style={[
              styles.button,
              selectedButton === 'button1' && {backgroundColor: '#e3aab3'},
            ]}
            onPress={() => handleButtonPress('button1')}>
            <Text
              style={[
                styles.buttonText,
                selectedButton == 'button1' && styles.selectedbtn,
              ]}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selectedButton === 'button2' && {backgroundColor: '#e3aab3'},
            ]}
            onPress={() => handleButtonPress('button2')}>
            <Text
              style={[
                styles.buttonText,
                selectedButton == 'button2' && styles.selectedbtn,
              ]}>
              Plant created by the merchant
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              selectedButton === 'button3' && {backgroundColor: '#e3aab3'},
            ]}
            onPress={() => handleButtonPress('button3')}>
            <Text
              style={[
                styles.buttonText,
                selectedButton == 'button3' && styles.selectedbtn,
              ]}>
              Plants authorized to the merchant
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <Text
          style={{
            color: 'black',
            padding: 10,
            marginTop: 20,
            marginLeft: 12,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          Capacity (KWp)
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            marginBottom: 20,
            marginLeft: 10,
          }}>
          <BottomSheetTextInput
            style={[styles.textInput, {marginLeft: 20}]}
            value={textInput1Value}
            onChangeText={setTextInput1Value}
            placeholder="Minimum"
            placeholderTextColor={'gray'}
          />
          <Text
            style={{
              color: 'gray',
              marginTop: 5,

              fontSize: 20,
            }}>
            -
          </Text>
          <BottomSheetTextInput
            style={styles.textInput}
            value={textInput2Value}
            onChangeText={setTextInput2Value}
            placeholder="Maximum"
            placeholderTextColor={'gray'}
          />
        </View>
        <ScrollView
          horizontal
          style={{
            flexDirection: 'row',
            marginTop: -50,
            marginLeft: 10,
            borderBottomColor: 'lightgray',
            borderBottomWidth: 1,
            paddingBottom: 10,
          }}>
          <TouchableOpacity
            style={[
              styles.button,
              values == 'Button A' && {backgroundColor: '#e3aab3'},
            ]}
            onPress={() => handleValueAssign('Button A')}>
            <Text
              style={[
                styles.buttonText,
                values == 'Button A' && styles.selectedbtn,
              ]}>
              0 - 5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              values == 'Button B' && {backgroundColor: '#e3aab3'},
            ]}
            onPress={() => handleValueAssign('Button B')}>
            <Text
              style={[
                styles.buttonText,
                values == 'Button B' && styles.selectedbtn,
              ]}>
              5 - 9
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              values == 'Button C' && {backgroundColor: '#e3aab3'},
            ]}
            onPress={() => handleValueAssign('Button C')}>
            <Text
              style={[
                styles.buttonText,
                values == 'Button C' && styles.selectedbtn,
              ]}>
              9 - 16
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              values == 'Button D' && {backgroundColor: '#e3aab3'},
            ]}
            onPress={() => handleValueAssign('Button D')}>
            <Text
              style={[
                styles.buttonText,
                values == 'Button D' && styles.selectedbtn,
              ]}>
              16-30
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              values == 'Button E' && {backgroundColor: '#e3aab3'},
            ]}
            onPress={() => handleValueAssign('Button E')}>
            <Text
              style={[
                styles.buttonText,
                values == 'Button E' && styles.selectedbtn,
              ]}>
              30-100
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              values == 'Button F' && {backgroundColor: '#e3aab3'},
            ]}
            onPress={() => handleValueAssign('Button F')}>
            <Text
              style={[
                styles.buttonText,
                values == 'Button F' && styles.selectedbtn,
              ]}>
              100-500
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              values == 'Button G' && {backgroundColor: '#e3aab3'},
            ]}
            onPress={() => handleValueAssign('Button G')}>
            <Text
              style={[
                styles.buttonText,
                values == 'Button G' && styles.selectedbtn,
              ]}>
              > 500
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <View
          style={{paddingBottom: 10, borderColor: 'lightgray', borderWidth: 1}}>
          <Text
            style={{
              color: 'black',
              padding: 10,
              marginTop: 20,
              marginLeft: 12,
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            Region
          </Text>
          <Text
            style={{
              color: 'black',
              padding: 10,
              marginTop: 20,
              marginLeft: 12,
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            Follow
          </Text>
          <View style={{marginTop: -50, marginBottom: -10, marginLeft: 10}}>
            <TouchableOpacity
              style={[
                styles.button1,
                selectedButton === 'FollowPlant' && {
                  backgroundColor: '#e3aab3',
                },
              ]}
              onPress={() => handleButtonPress('FollowPlant')}>
              <Text
                style={[
                  styles.buttonText,
                  selectedButton == 'FollowPlant' && styles.selectedbtn,
                ]}>
                Plants I Follow
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: 'black',
              padding: 10,
              marginTop: 20,
              marginLeft: 12,
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            Tag
          </Text>
        </View>

        <Text
          style={{
            color: 'black',
            padding: 10,
            marginTop: 20,
            marginLeft: 12,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          On-grid Status
        </Text>
        <View style={{flexDirection: 'row', marginLeft: 10, marginTop: -40}}>
          <TouchableOpacity
            style={[
              styles.button,
              ongridStatus === 'Ongrid' && {backgroundColor: '#e3aab3'},
            ]}
            onPress={() => gridStatus('Ongrid')}>
            <Text
              style={[
                styles.buttonText,
                ongridStatus == 'Ongrid' && styles.selectedbtn,
              ]}>
              On-grid
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              ongridStatus === 'NotOngrid' && {backgroundColor: '#e3aab3'},
            ]}
            onPress={() => gridStatus('NotOngrid')}>
            <Text
              style={[
                styles.buttonText,
                ongridStatus == 'NotOngrid' && styles.selectedbtn,
              ]}>
              Not on-grid
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: 'black',
            padding: 10,
            marginTop: 20,
            marginLeft: 12,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          System Type
        </Text>
        <View style={{marginTop: -40, marginLeft: 10, flexDirection: 'row'}}>
          <TouchableOpacity
            style={[
              styles.button,
              ongridStatus === 'button4' && {backgroundColor: '#e3aab3'},
            ]}
            onPress={() => gridStatus('button4')}>
            <Text
              style={[
                styles.buttonText,
                ongridStatus == 'button4' && styles.selectedbtn,
              ]}>
              PV+Grid
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              ongridStatus === 'button5' && {backgroundColor: '#e3aab3'},
            ]}
            onPress={() => gridStatus('button5')}>
            <Text
              style={[
                styles.buttonText,
                ongridStatus == 'button5' && styles.selectedbtn,
              ]}>
              PV + Grid + Consumption
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              ongridStatus === 'button6' && {backgroundColor: '#e3aab3'},
            ]}
            onPress={() => gridStatus('button6')}>
            <Text
              style={[
                styles.buttonText,
                ongridStatus == 'button6' && styles.selectedbtn,
              ]}>
              PV + Grid + Consumption + Battery
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: 'black',
            padding: 10,
            marginTop: 20,
            marginLeft: 12,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          Plant Type
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            marginTop: -40,
            paddingBottom: 15,
          }}>
          <TouchableOpacity
            style={[
              styles.button,
              ongridStatus === 'button7' && {backgroundColor: '#e3aab3'},
            ]}
            onPress={() => gridStatus('button7')}>
            <Text
              style={[
                styles.buttonText,
                ongridStatus == 'button7' && styles.selectedbtn,
              ]}>
              Not on-grid
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              ongridStatus === 'button8' && {backgroundColor: '#e3aab3'},
            ]}
            onPress={() => gridStatus('button8')}>
            <Text
              style={[
                styles.buttonText,
                ongridStatus == 'button8' && styles.selectedbtn,
              ]}>
              Not on-grid
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              ongridStatus === 'button9' && {backgroundColor: '#e3aab3'},
            ]}
            onPress={() => gridStatus('button9')}>
            <Text
              style={[
                styles.buttonText,
                ongridStatus == 'button9' && styles.selectedbtn,
              ]}>
              Not on-grid
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              ongridStatus === 'button10' && {backgroundColor: '#e3aab3'},
            ]}
            onPress={() => gridStatus('button10')}>
            <Text
              style={[
                styles.buttonText,
                ongridStatus == 'button10' && styles.selectedbtn,
              ]}>
              Not on-grid
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightgray',
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
    borderRadius: 25,
    marginRight: 10,
    width: 110,
    justifyContent: 'center',
    marginTop: 60,
  },
  button1: {
    backgroundColor: 'lightgray',
    padding: 8,
    borderRadius: 5,
    marginBottom: 10,
    borderRadius: 25,
    marginRight: 10,
    width: 110,
    justifyContent: 'center',
    marginTop: 60,
  },
  buttonText: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
  },
  selectedbtn: {
    textAlign: 'center',
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth: 0.5,
    borderColor: 'gray',
    padding: 6,
    borderRadius: 20,
    width: 120,
    borderRadius: 5,
    color: 'black',
  },
});

export default ParametersBottomSheet;
