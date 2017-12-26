import React, { Component } from 'react'
import { Text, View } from 'react-native'
import globalStyles from '../styles/global'

class RegisterScreen extends Component {
    static navigationOptions = {
      title: "Register"
    }
    render() {
      const { navigate } = this.props.navigation
      return (
        <View style={globalStyles.container}>
            <Text>register here</Text>
        </View>
      );
    }
}

export default RegisterScreen