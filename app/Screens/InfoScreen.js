import React, { useState } from 'react';
import {Formik} from 'formik';
import { Button ,TextInput,View} from 'react-native';

import AppPicker from '../components/AppPicker';
import AppTextInput from '../components/AppTextInput';
import RegisterButton from '../components/RegisterButton'

function InfoScreen(props) {
  const name='';
  const mobile='';
  const address='';
  const test='';
  const getDataUsingPost = (inf) => {
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
    fetch('https://snapit-api.herokuapp.com/api/setuser', {
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

    // const categories=[
    //     {label:"furniture",value:1},
    //     {label:"furniture2",value:2},
    //     {label:"furniture3",value:3},
    //   ]
    // const[category,setCategory]=useState(0);
    return (
        <>
    {/* <AppPicker 
      selectedItem={category}
      onSelectItem={item=>setCategory(item)}
      items ={categories} icon ="apps-outline" placeholder="Category"></AppPicker>
      <AppTextInput icon="mail-outline" placeholder="email"></AppTextInput> */}
      <Formik
          initialValues={{name: '',mobile:'', address: '',test:'negative'}}
          onSubmit={(values) => {
            values.name = name;
            values.address = address;
            values.mobile = mobile;
            console.log(values);
            getDataUsingPost(values);
          }}>
          {({handleChange, handleSubmit, values}) => (
            <View>
              <AppTextInput
                placeholder="Name"
                onChangeText={handleChange('name')}
                value={values.name}
              />
              <AppTextInput
                placeholder="Address"
                onChangeText={handleChange('address')}
                value={values.address}
              />
              <AppTextInput
                placeholder="Phone"
                onChangeText={handleChange('mobile')}
                value={values.mobile}
                keyboardType='numeric'
              />
              <RegisterButton title="submit " onPress={handleSubmit} />
            </View>
          )}
        </Formik>
      </>
    );
}

export default InfoScreen;