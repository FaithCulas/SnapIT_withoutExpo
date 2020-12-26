import React, { useState } from 'react';
import {Formik} from 'formik';
import { Button ,TextInput,View} from 'react-native';

import AppPicker from '../components/AppPicker';
import AppTextInput from '../components/AppTextInput';
import RegisterButton from '../components/RegisterButton'

function InfoScreen(props) {
  const [currentName, setName] = useState('');
  const [currentAddress, setAddress] = useState('');
  const [currentPhone, setPhone] = useState('');
    const categories=[
        {label:"furniture",value:1},
        {label:"furniture2",value:2},
        {label:"furniture3",value:3},
      ]
    const[category,setCategory]=useState(0);
    return (
        <>
    {/* <AppPicker 
      selectedItem={category}
      onSelectItem={item=>setCategory(item)}
      items ={categories} icon ="apps-outline" placeholder="Category"></AppPicker>
      <AppTextInput icon="mail-outline" placeholder="email"></AppTextInput> */}
      <Formik
          initialValues={{Name: '', Address: '', Phone:''}}
          onSubmit={(values) => {
            values.Name = currentName;
            values.Address = currentAddress;
            values.Phone = currentPhone;
            console.log(values);
            //getDataUsingPost(values);
          }}>
          {({handleChange, handleSubmit, values}) => (
            <View>
              <AppTextInput
                placeholder="Name"
                onChangeText={handleChange('Name')}
                value={values.Name}
              />
              <AppTextInput
                placeholder="Address"
                onChangeText={handleChange('Address')}
                value={values.Address}
              />
              <AppTextInput
                placeholder="Phone"
                onChangeText={handleChange('Phone')}
                value={values.Phone}
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