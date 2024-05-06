import React, {useState, useEffect, useMemo, useRef, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
  ScrollView,
  UIManager,
  StatusBar,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SearchBar} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getPlants, setPlants, deleteUser} from '../db/createdb';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FilterBottomSheet from '../Components/FilterBottomSheet';
import ParametersBottomSheet from '../Components/ParametersBottomSheet';
import Header from '../Components/Monitor/header.js';
import CustomTouchableOpacity from '../Components/Monitor/custombtn.js';
import CustomTouchableOpacity2 from '../Components/Monitor/custombtn2.js';
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const Monitor = () => {
  const [pressedIndex, setPressedIndex] = useState(null);
  const [add, setAdd] = useState(null);
  const navigation = useNavigation();
  const [plants, setPlants] = useState([]);
  const BottomSheetRef = useRef(null);
  const BottomSheetRef1 = useRef(null);
  const [isPlantSelected, setPlantSelected] = useState(true);
  updateSearch = search => {
    this.setState({search});
  };
  var r = 0;
  const handlefilters = () => {
    BottomSheetRef.current.close();
    r++;
    if (r == 1) {
      BottomSheetRef.current.expand();
    } else {
      r = 0;
      BottomSheetRef.current.close();
    }
  };
  var p = 0;
  const handleParameters = () => {
    BottomSheetRef1.current.close();
    p++;
    if (p == 1) {
      BottomSheetRef1.current.expand();
    } else {
      p = 0;
      BottomSheetRef1.current.close();
    }
  };
  const handleAddButtonPress = () => {
    navigation.navigate('CreateAplant');
  };

  const openFilters = () => {
    navigation.navigate('Parameters');
  };
  const handlePress = index => {
    setPressedIndex(index);
  };
  // to set coutrycode in textinput
  // const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState({cca2: 'IN', callingCode: '91'});
  useEffect(() => {
    LayoutAnimation.easeInEaseOut();
    getPlants();
  }, []);

  const handleCountrySelect = country => {
    setCountry(country);
  };

  const renderPlant = ({item}) => {
    return (
      <View style={{backgroundColor: 'lightgray', marginVertical: 10}}>
        <TouchableOpacity style={styles.card}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            ID : {item.id}
          </Text>
          <Text style={{color: 'green', fontWeight: 'bold'}}>{item.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            deleteUser(item.id);
          }}
          style={{marginLeft: 360, marginTop: -34}}>
          <Icons name="delete" size={25} color="tomato" />
        </TouchableOpacity>
      </View>
    );
  };
  useEffect(() => {
    getPlants(setPlants);
  }, []);
  return (
    <GestureHandlerRootView style={{flex: 1, color: 'white '}}>
      <View style={{}}>
        <StatusBar backgroundColor={'white'} />
        <Header
          isPlantSelected={isPlantSelected}
          setPlantSelected={setPlantSelected}
        />
        <View>
          {isPlantSelected && (
            <>
              <View>
                <TouchableOpacity
                  style={styles.headerButton}
                  onPress={handleAddButtonPress}>
                  <Text
                    style={{
                      color: 'black',
                      marginTop: -68,
                      marginLeft: 320,
                      fontSize: 40,
                      fontWeight: '400',
                    }}>
                    +
                  </Text>
                </TouchableOpacity>
                <SearchBar
                  placeholder="Search"
                  onChangeText={updateSearch}
                  inputContainerStyle={styles.searchInputContainer}
                  containerStyle={styles.searchContainer}
                  inputStyle={styles.searchInput}
                  placeholderTextColor="gray"
                  placeholderTextSize
                />
                <TouchableOpacity
                  onPress={handlefilters}
                  style={{marginTop: -28, marginLeft: 270, color: 'black'}}>
                  <Ionicons name={'filter-sharp'} size={20} color="gray" />
                  <Text style={{color: 'gray', fontSize: 9, marginLeft: -4}}>
                    Filters
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleParameters}
                  style={{marginTop: -33, marginLeft: 330, color: 'black'}}>
                  <Ionicons name={'options-outline'} size={20} color="gray" />
                  <Text style={{color: 'gray', fontSize: 9, marginLeft: -20}}>
                    Select Parameters
                  </Text>
                </TouchableOpacity>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.touchableContainer}>
                  <CustomTouchableOpacity
                    onPress={() => handlePress(0)}
                    text="All"
                    isSelected={pressedIndex === 0}
                  />
                  <CustomTouchableOpacity
                    onPress={() => handlePress(1)}
                    text="Connecting"
                    isSelected={pressedIndex === 1}
                  />
                  <CustomTouchableOpacity
                    onPress={() => handlePress(2)}
                    text="All Devices offline"
                    isSelected={pressedIndex === 2}
                  />
                  <CustomTouchableOpacity
                    onPress={() => handlePress(3)}
                    text="Some devices offline"
                    isSelected={pressedIndex === 3}
                  />
                  <CustomTouchableOpacity
                    onPress={() => handlePress(4)}
                    text="Alert"
                    isSelected={pressedIndex === 4}
                  />
                  <CustomTouchableOpacity
                    onPress={() => handlePress(5)}
                    text="No Alerts"
                    isSelected={pressedIndex === 5}
                  />
                  <CustomTouchableOpacity
                    onPress={() => handlePress(6)}
                    text="Online"
                    isSelected={pressedIndex === 6}
                  />
                </View>
              </ScrollView>
              <View style={styles.touchableContainer1}>
                <CustomTouchableOpacity2
                  onPress={() => handlePress(10)}
                  text="Plant Name"
                  isSelected={pressedIndex === 10}
                />
                <CustomTouchableOpacity2
                  onPress={() => handlePress(11)}
                  text="Power"
                  isSelected={pressedIndex === 11}
                />
                <CustomTouchableOpacity2
                  onPress={() => handlePress(12)}
                  text="Daily"
                  isSelected={pressedIndex === 12}
                />
                <CustomTouchableOpacity2
                  onPress={() => handlePress(13)}
                  text="Capacity"
                  isSelected={pressedIndex === 13}
                />
              </View>
              <SafeAreaProvider>
                <View
                  style={{
                    backgroundColor: 'lightgray',
                    flexDirection: 'column',
                    paddingBottom: 10,
                  }}>
                  <FlatList
                    data={plants}
                    renderItem={renderPlant}
                    keyExtractor={item => item.id.toString()}
                  />
                </View>
              </SafeAreaProvider>
              <ScrollView>
                <Text
                  style={{
                    color: 'black',
                    marginTop: 20,
                    flex: 1,
                    textAlign: 'center',
                  }}>
                  All Data Loaded
                </Text>
              </ScrollView>
            </>
          )}

          {!isPlantSelected && (
            <>
              <TouchableOpacity style={styles.headerButton}>
                <Text
                  style={{
                    color: 'black',
                    marginTop: -68,
                    marginLeft: 320,
                    fontSize: 40,
                  }}>
                  =
                </Text>
              </TouchableOpacity>
              <SearchBar
                placeholder="Enter Device SN"
                onChangeText={updateSearch}
                inputContainerStyle={styles.searchInputContainer}
                containerStyle={styles.searchContainer1}
                inputStyle={styles.searchInput}
                placeholderTextColor="gray"
                placeholderTextSize
              />
            </>
          )}
        </View>
      </View>
      <FilterBottomSheet BottomSheetRef={BottomSheetRef} />
      <ParametersBottomSheet BottomSheetRef={BottomSheetRef1} />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '97%',
    paddingLeft: 10,
    marginLeft: 6,
    backgroundColor: '#fff',
    padding: 50,
    borderRadius: 8,
  },

  headerButton: {
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
    height: 40,
  },
  searchContainer: {
    backgroundColor: 'white',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    marginLeft: 5,
    marginRight: 5,
    height: 40,
    fontSize: 7,
    width: 250,
  },
  searchContainer1: {
    backgroundColor: 'white',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    marginLeft: 5,
    marginRight: 5,
    height: 40,
    fontSize: 7,
    width: 380,
  },
  searchInput: {
    color: 'black',
    fontSize: 14,
  },
  touchableContainer: {
    marginTop: -4,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginRight: 10,
  },

  touchableContainer1: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 6,
  },
});

export default Monitor;
