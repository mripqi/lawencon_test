import React, {useState, useEffect} from 'react';
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
import {Table, Row, Rows} from 'react-native-table-component';
import axios from 'axios';
export default function home({route}) {
  const [leaving, setLeaving] = useState('');
  const [values, setValues] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [final, setFinal] = useState('');

  const data_table = route.params.values;
  const dates = route.params.date;
  const day = route.params.day;
  const year = route.params.year;
  let destination = route.params.values[1].location;
  let Title = destination.replace('to', '-');

  useEffect(() => {
    console.log('data', data_table);
    let result = [];
    data_table.map((item) => {
      let a = Object.values(item);
      a.splice(2, 1);
      result.push(a);
    });
    console.log(result);
    setValues(result);
    console.log(Title);

    console.log('dates', dates);
    convertDate();
  }, []);

  const monthNumberToLabelMap = {
    [1]: 'January',
    [2]: 'February',
    [3]: 'March',
    [4]: 'April',
    [5]: 'May',
    [6]: 'June',
    [7]: 'July',
    [8]: 'August',
    [9]: 'September',
    [10]: 'October',
    [11]: 'November',
    [12]: 'December',
  };

  const convertDate = () => {
    let str = dates.slice(2, 4);
    let month = monthNumberToLabelMap[str];
    let final = Title + ' On ' + month + ' ' + day + ', ' + year;
    setFinal(final);
  };
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

  const data = {
    tableHead: [
      'Coach Type',
      'Fare',
      'Bus Name',
      'Seats Available',
      'Dept. Time',
    ],
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
              }}
              onPress={() => console.log(values)}>
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
        <Text
          style={{
            padding: 10,
            fontSize: 20,
            alignSelf: 'center',
          }}>
          {' '}
          {final}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
            marginLeft: 10,
            marginRight: 10,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginRight: 15,
              padding: 10,
            }}>
            Filter By{' '}
          </Text>
          <View
            style={{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#bdc3c7',
              overflow: 'hidden',
              height: 40,
              width: 120,
            }}>
            <Picker
              selectedValue={leaving}
              style={{height: 30, width: 120, fontSize: 10}}
              //   onValueChange={(itemValue, itemIndex) => setLeaving(itemValue)}
            >
              <Picker.Item label="By Bus" value="" />
            </Picker>
          </View>
          <View
            style={{
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#bdc3c7',
              overflow: 'hidden',
              height: 40,
              width: 120,
            }}>
            <Picker
              selectedValue={leaving}
              style={{height: 30, width: 120, fontSize: 10}}
              //   onValueChange={(itemValue, itemIndex) => setLeaving(itemValue)}
            >
              <Picker.Item label="By Type" value="" />
            </Picker>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            padding: 16,
            paddingTop: 30,
            backgroundColor: '#fff',
          }}>
          <ScrollView horizontal={true}>
            <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
              <Row
                data={data.tableHead}
                style={{
                  width: 700,
                }}
                textStyle={{padding: 10, fontSize: 20}}
              />
              <Rows
                data={values}
                textStyle={{padding: 10, fontSize: 15}}
                style={{width: 700}}
              />
            </Table>
          </ScrollView>
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
