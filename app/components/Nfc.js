/* eslint-disable no-alert */
/* eslint-disable no-bitwise */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  ToastAndroid,
  Platform,
  Alert,
  Button
} from 'react-native';

class Nfc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id:"14"};
  }
  componentDidMount(){
    const id =this.props.id
  }
  test = () => {
    console.log(this.props.id);
    Alert.alert("scanned");
  }
 
render(){
  return (
    <SafeAreaView style={{padding: 20}}>
      <Text>NFC SCANNER</Text>
      <Button title="Scanner" onPress={this.test}></Button>

    </SafeAreaView>
  );
}
}
  
export default Nfc;