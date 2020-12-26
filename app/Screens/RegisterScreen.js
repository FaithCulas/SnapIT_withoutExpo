import React from 'react';
import { Text , Button} from 'react-native';

import Screen from '../components/Screen';
import AppNavigator from '../navigation/AppNavigator';

function RegisterScreen({navigation}) {
    return (
        <Screen>
            <Text>register here</Text>
            <Button title="submit" onPress={()=>navigation.navigate("profile")}></Button>
        </Screen>
        
    );
}

export default RegisterScreen;