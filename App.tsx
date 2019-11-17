import React, { Component } from "react"
import { View, ImageBackground,Text } from "react-native";
import {Image} from "react-native";

interface LoginProp {

}

interface LoginState {
  username: string;
  password: string;
}

export default class LoginScreen extends Component<LoginProp,LoginState> {
  constructor(props: LoginProp) {
    super(props);
    this.setState({
      username: "",
      password: ""
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