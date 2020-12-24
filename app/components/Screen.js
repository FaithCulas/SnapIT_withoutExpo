//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView,Platform,StatusBar} from 'react-native';


 function Screen(props) {
  return (
    <SafeAreaView style={styles.content}>
        {props.children}
    </SafeAreaView>
        
     
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS==="android"?StatusBar.length:0

    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
export default Screen;
