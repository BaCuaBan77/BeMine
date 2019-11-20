import React, { Component } from "react"
import { View, ImageBackground,Text } from "react-native";
import {Image} from "react-native";

interface LoginProp {

}

interface LoginState {
  username: string;
  password: string;
}

// export default class LoginScreen extends Component<LoginProp,LoginState> {
//   constructor(props: LoginProp) {
//     super(props);
//     this.setState({
//       username: "",
//       password: ""
//     })
//   }
import Amplify, { Auth } from 'aws-amplify';
import config from 'aws-exports.js';
Amplify.configure(config)

import {
  // ..existing imports commented out
  Button,
  TextInput
} from 'react-native'

export default class App extends Component<{}> {
    state = { // 1
      authCode: ''
    }
    // onChangeText(authCode) { // 2
    //   this.setState({ authCode })
    // }
    signUp() {
      Auth.signUp({ // 3
        username: 'myCoolUsername',
        password: 'MyCoolP@ssword2!',
        attributes: {
          phone_number: '+15555555555',
          email: 'yourcoolemail@gmail.com'
        }
      })
      .then(res => {
        console.log('successful signup: ', res)
      })
      .catch(err => {
        console.log('error signing up: ', err)
      })
    }
    confirmUser() { // 4
      const { authCode } = this.state
      Auth.confirmSignUp('myCoolUsername', authCode)
        .then(res => {
          console.log('successful confirmation: ', res)
        })
        .catch(err => {
          console.log('error confirming user: ', err)
        })
    }

  render() {
    return(
      <View style={{flex: 1}}>
        <Image source={require('./assert/background.png')} />
      </View>
    );
  }
}