import React,{useState} from 'react';
import { Text,Alert } from 'react-native';
import Auth0 from 'react-native-auth0';

import Screen from '../components/Screen';
import LoginButton from '../components/LoginButton'

const auth0 = new Auth0(
    { domain: 'dev-wxf2dldy.us.auth0.com', 
    clientId: 'enKTnDziZOeOZomNcSHXwehfxymZl0aY' });

class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = { accessToken: false };
        
      };

        
    Login =()=>{
        auth0
        .webAuth
        .authorize({scope: 'openid profile email'})
        .then(credentials =>{
            Alert.alert(
                'Logged in!'
            );
            
            //this.setState({ accessToken: credentials.accessToken });
            this.setState({
                accessToken: true
              });
            console.log(this.state.accessToken)
        }
          // Successfully authenticated
          // Store the accessToken
          
        )
        .catch(error => console.log(error));
        //console.log("hello")
    }


        render (){
            return(<>
                <LoginButton title="Login" onPress={this.Login} />
                </>)
        }
}

// LoginScreen.abc = function(){
//     console.log("hello")
    
// }
// module.exports = {
//   functions: LoginScreen
// };


export default LoginScreen;