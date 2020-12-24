import React, { useState } from 'react';

import AppPicker from '../components/AppPicker';
import AppTextInput from '../components/AppTextInput'

function InfoScreen(props) {
    const categories=[
        {label:"furniture",value:1},
        {label:"furniture2",value:2},
        {label:"furniture3",value:3},
      ]
    const[category,setCategory]=useState(0);
    return (
        <>
    <AppPicker 
      selectedItem={category}
      onSelectItem={item=>setCategory(item)}
      items ={categories} icon ="apps-outline" placeholder="Category"></AppPicker>
      <AppTextInput icon="mail-outline" placeholder="email"></AppTextInput>
      </>
    );
}

export default InfoScreen;