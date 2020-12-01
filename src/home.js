import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Modal from 'react-native-modals';
import {Calendar} from 'react-native-calendars';
import axios from 'axios';
export default function home({navigation}) {
  const [leaving, setLeaving] = useState('');
  const [destination, setDestination] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [date, setDate] = useState('DD/MM/YYYY');
  const [year, setYear] = useState('');
  const [day, setDay] = useState('');
  const place = [
    'Dhaka to Dinajpur',
    'Dhaka to Panchagor',
    'Dhaka to Nilphamari',
    'Dhaka to Kurigram',
    'Dhaka to Rangpur',
    'Dhaka to Thakurgaon',
    "Dhaka to Cox's Bazar",
    'Dhaka to Feni',
  ];

  const ticket = [
    'Buy bus tickets anytime from anywhere',
    'Pay by credit card, mobile banking or cash',
    'Get tickets delivered to your doorstep',
    'Dependable customer service (8 AM to 11 PM)',
  ];

  const handleSearch = async () => {
    let APIURL = '';
    if (leaving === 'dhaka' && destination === 'comilla') {
      APIURL = 'https://bdbusticket.firebaseio.com/buses/1109001.json';
    } else {
      APIURL = 'https://bdbusticket.firebaseio.com/buses/1109006.json';
    }

    try {
      const getAPI = await axios.get(APIURL);
      const values = Object.values(getAPI.data);
      console.log(values);
      navigation.navigate('Table', {values, date, day, year});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <View style={{backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image
            style={{width: 65, height: 65, marginLeft: 20}}
            source={{
              uri: 'https://i.ibb.co/YbY9Wtg/redbus-india-logo.png',
            }}
          />
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                backgroundColor: 'coral',
                borderColor: 'coral',
                marginTop: 20,
                marginBottom: 20,
                marginRight: 10,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  color: '#fff',
                  fontSize: 15,
                  padding: 5,
                }}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                backgroundColor: 'coral',
                borderColor: 'coral',
                margin: 20,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  color: '#fff',
                  fontSize: 15,
                  padding: 5,
                }}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            backgroundColor: 'coral',
            borderColor: 'coral',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              color: '#fff',
              fontSize: 20,
              padding: 5,
              marginLeft: 20,
            }}>
            Home
          </Text>
        </TouchableOpacity>

        <View>
          <ImageBackground
            source={{
              uri: 'https://i.ibb.co/P6cDwg9/slider.jpg',
            }}
            style={styles.image}>
            <Image
              style={{
                height: 200,
                width: 400,
                alignSelf: 'center',
                margin: 20,
              }}
              source={{
                uri: 'https://i.ibb.co/QCkGwds/red-Bus-coupons-offers-1586.png',
              }}
            />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                marginLeft: 25,
                marginRight: 25,
                borderRadius: 10,
              }}>
              <Text style={{fontSize: 20, marginTop: 10, padding: 5}}>
                Leaving From
              </Text>
              <View
                style={{
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '#bdc3c7',
                  overflow: 'hidden',
                  height: 40,
                  width: 170,
                }}>
                <Picker
                  selectedValue={leaving}
                  style={{height: 40, width: 160, marginLeft: 18, fontSize: 10}}
                  onValueChange={(itemValue, itemIndex) => {
                    setLeaving(itemValue);
                  }}>
                  <Picker.Item label="Select Place" value="" />
                  <Picker.Item label="Dhaka" value="dhaka" />
                  <Picker.Item label="Comilla" value="comilla" />
                  <Picker.Item label="Chittagon" value="chittagon" />
                </Picker>
              </View>
              <Text style={{fontSize: 20, marginTop: 10, padding: 5}}>
                Going To
              </Text>
              <View
                style={{
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: '#bdc3c7',
                  overflow: 'hidden',
                  height: 40,
                  width: 170,
                }}>
                {leaving === 'dhaka' ? (
                  <Picker
                    selectedValue={destination}
                    style={{
                      height: 40,
                      width: 160,
                      marginLeft: 18,
                      fontSize: 10,
                      borderWidth: 1,
                      borderColor: 'black',
                    }}
                    onValueChange={(itemValue, itemIndex) =>
                      setDestination(itemValue)
                    }>
                    <Picker.Item label="Select Destination" value="" />
                    <Picker.Item label="Comilla" value="comilla" />
                    <Picker.Item label="Chittagon" value="chittagon" />
                    <Picker.Item label="KuaKata" value="kuakata" />
                    <Picker.Item label="Coxs Bazar" value="coxs_bazar" />
                    <Picker.Item label="Rajshahi" value="rajshahi" />
                  </Picker>
                ) : leaving === 'comilla' ? (
                  <Picker
                    selectedValue={destination}
                    style={{
                      height: 40,
                      width: 160,
                      marginLeft: 18,
                      fontSize: 10,
                      borderWidth: 1,
                      borderColor: 'black',
                    }}
                    onValueChange={(itemValue, itemIndex) =>
                      setDestination(itemValue)
                    }>
                    <Picker.Item label="Select Destination" value="" />
                    <Picker.Item label="Chittagon" value="chittagon" />
                    <Picker.Item label="Dhaka" value="dhaka" />
                    <Picker.Item label="Rajshahi" value="Rajshahi" />
                  </Picker>
                ) : leaving === 'chittagon' ? (
                  <Picker
                    selectedValue={destination}
                    style={{
                      height: 40,
                      width: 160,
                      marginLeft: 18,
                      fontSize: 10,
                      borderWidth: 1,
                      borderColor: 'black',
                    }}
                    onValueChange={(itemValue, itemIndex) =>
                      setDestination(itemValue)
                    }>
                    <Picker.Item label="Select Destination" value="" />
                    <Picker.Item label="Mymensingh" value="mymensingh" />
                    <Picker.Item label="Dhaka" value="dhaka" />
                    <Picker.Item label="Sylet" value="stylet" />
                  </Picker>
                ) : (
                  <Picker
                    selectedValue={destination}
                    style={{
                      height: 40,
                      width: 160,
                      marginLeft: 18,
                      fontSize: 10,
                      borderWidth: 1,
                      borderColor: 'black',
                    }}
                    onValueChange={(itemValue, itemIndex) =>
                      setDestination(itemValue)
                    }>
                    <Picker.Item label="" value="" />
                  </Picker>
                )}
              </View>
              <Text style={{fontSize: 20, marginTop: 10}}>Departing On</Text>
              <View style={styles.SectionStyle}>
                <Text
                  style={{flex: 1, marginLeft: 10}}
                  onPress={() => setIsVisible(true)}>
                  {date}
                </Text>
                <Image
                  source={{
                    uri:
                      'https://image.freepik.com/free-icon/calendar-icon-black_318-9776.jpg',
                  }}
                  style={styles.ImageStyle}
                  onPress={() => setIsVisible(true)}
                />
              </View>

              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor: 'coral',
                    borderColor: 'coral',
                    width: 150,
                    borderRadius: 10,
                    marginBottom: 10,
                  }}>
                  <Image
                    source={{
                      uri:
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png',
                    }}
                    style={styles.ImageStyle}
                    onPress={() => console.log('test')}
                  />
                  <Text
                    style={{
                      alignSelf: 'center',
                      color: '#fff',
                      paddingRight: 15,
                    }}
                    onPress={() => handleSearch()}>
                    Search Buses
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text />
          </ImageBackground>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'black',
            alignItems: 'center',
            margin: 20,
          }}>
          <Text style={{paddingTop: 10, fontSize: 20, marginBottom: 10}}>
            Popular Road
          </Text>
          <FlatList
            data={place}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return (
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={{height: 45, width: 25}}
                    source={{
                      uri:
                        'https://www.pinclipart.com/picdir/middle/79-798120_orange-map-pin-orange-location-icon-png-clipart.png',
                    }}
                  />
                  <Text style={{padding: 10}}>{item}</Text>
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'black',
            alignItems: 'center',
            margin: 20,
          }}>
          <Text style={{paddingTop: 10, fontSize: 20, marginBottom: 10}}>
            Why buy tickets from us?
          </Text>
          <FlatList
            data={ticket}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return (
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={{height: 25, width: 25}}
                    source={{
                      uri:
                        'https://www.pikpng.com/pngl/m/39-396848_red-check-mark-3-icon-free-red-check.png',
                    }}
                  />
                  {item === 'Buy bus tickets anytime from anywhere' ? (
                    <Text style={{padding: 10}}>
                      <Text style={{fontWeight: 'bold'}}>Buy bus tickets</Text>
                      <Text> anytime from anywhere</Text>
                    </Text>
                  ) : item === 'Dependable customer service (8 AM to 11 PM)' ? (
                    <Text style={{padding: 10}}>
                      <Text> Dependable customer service</Text>
                      <Text style={{fontWeight: 'bold'}}>(8 AM to 11 PM)</Text>
                    </Text>
                  ) : (
                    <Text style={{padding: 10}}>{item}</Text>
                  )}
                </View>
              );
            }}
          />
        </View>

        <Image
          style={{height: 80, width: '100%'}}
          source={{
            uri: 'https://i.ibb.co/9yGPP6r/sslcommerz-logo.png',
          }}
        />

        <Modal
          visible={isVisible}
          style={{backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, margin: -10}}
          onTouchOutside={() => setIsVisible(false)}>
          <Calendar
            onDayPress={(day) => {
              setDate(day.day + '/' + day.month + '/' + day.year);
              setYear(day.year);
              setDay(day.day);
              setIsVisible(false);
            }}
            onDayLongPress={(day) => {
              setDate(day.day + '/' + day.month + '/' + day.year);
              setYear(day.year);
              setDay(day.day);
              setIsVisible(false);
            }}
          />
        </Modal>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  textOutput: {
    fontSize: 25,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 10,
  },

  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
  },
  button: {
    borderRadius: 3.6,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#8F32EB',
    alignSelf: 'center',
    width: '40%',
    height: 40,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    lineHeight: 20,
    textTransform: 'uppercase',
  },

  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
