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
import NfcManager, {
  NfcEvents,
  NfcTech,
  NfcAdapter,
  NdefParser,
  Ndef,
} from 'react-native-nfc-manager';

import ListItem from './ListItem';
import MyIcon from './MyIcon'

class Nfc extends React.Component {
  getDataUsingPost = (inf) => {
    //console.log(inf);
    //POST json
    var dataToSend = inf;
    //var dataToSend = {date: '2020-10-22', time: '12-15-00', temp: 20, userid: 1, isid: '5f8bdbea7119bc007641a5c4'};
    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    console.log(formBody);
    //POST request
    fetch('https://snapit-api.herokuapp.com/api/setlog', {
      method: 'POST', //Request Type
      body: formBody, //post body
      headers: {
        //Header Defination
        'Content-Type': 
          'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
      alert(JSON.stringify(responseJson));
      console.log(responseJson);
    })
    //If response is not in json then in error
    .catch((error) => {
      alert(JSON.stringify(error));
      console.error(error);
    });
  };
  
  componentDidMount(){
    const id =this.props.id
    NfcManager.start();
    NfcManager.setEventListener(NfcEvents.DiscoverTag, this._onTagDiscovered);
  }
  componentWillUnmount() {
    this._cleanUp();
    NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    NfcManager.unregisterTagEvent().catch(() => 0);
  }
  _cleanUp = () => {
    NfcManager.cancelTechnologyRequest().catch(() => 0);
  }
  readData = async () => {
    try {
      await NfcManager.registerTagEvent()

    } catch (ex) {
      console.warn('ex', ex);
      NfcManager.unregisterTagEvent().catch(() => 0);
    }
  }
  _onTagDiscovered = tag => {
    this.setState({ tag });

    let parsed = null;
    if (tag.ndefMessage && tag.ndefMessage.length > 0) {
        // ndefMessage is actually an array of NdefRecords,
        // and we can iterate through each NdefRecord, decode its payload
        // according to its TNF & type
        const ndefRecords = tag.ndefMessage;

        function decodeNdefRecord(record) {
            if (Ndef.isType(record, Ndef.TNF_WELL_KNOWN, Ndef.RTD_TEXT)) {
                return Ndef.text.decodePayload(record.payload);
            }

            return ['unknown', '---']
        }

        parsed = ndefRecords.map(decodeNdefRecord);
    }
    this.setState({parsed});

    NfcManager.setAlertMessageIOS('Login Successful');
    NfcManager.unregisterTagEvent().catch(() => 0);

    // Decrypt the NFC data
    // lahiru change here what you want
    this.content = this.state.parsed[0].split(",");
    console.log('Content from read:', this.content, "id passed:", this.props.id)
    const values = {date: this.props.id[1], time: this.props.id[2], temp:this.content[0], userid: 1, isid: this.content[1]}
    this.getDataUsingPost(values);
    Alert.alert("scanned");

    // end here

    // var endOfIV = content.indexOf(' ~ ')
    // var iv = content.substring(0,endOfIV).trim()
    // var cipher = content.substring(endOfIV+3)

    // this.generateKey('dcnfjlkbd298SKDH', 'DCJKN278hdsb', 5000, 256).then(key => {
    //   this.asyncDecrypt(cipher, key, iv)

    // })
  }

  test = () => {
    console.log(this.props.id);
    const values = {date: this.props.id[1], time: this.props.id[2], temp: 20, userid: 1, isid: '5f8bdbea7119bc007641a5c4'}
    this.getDataUsingPost(values);
    //Alert.alert("scanned");
    

  }
 
render(){
  return (
    <SafeAreaView style={{padding: 20}}>
      <Text>NFC SCANNER</Text>
      <ListItem onPress={this.readData} icon={<MyIcon name= "scan" size={80} backColor="#f4f4f2" iconColor="black"/>}/>

    </SafeAreaView>
  );
}
}
  
export default Nfc;