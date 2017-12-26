import React, { Component } from 'react'
import { Text, View } from 'react-native'
import globalStyles from '../styles/global'

import {CredentialForm} from '../components/CredentialForm'

class RegisterScreen extends Component {
    static navigationOptions = {
      title: "Register"
    }
    render() {
      const { navigate } = this.props.navigation
      return (
        <View style={globalStyles.container}>
            <CredentialForm
                submitText="Register"
                onSubmit={(state) => console.log('register form submitted') }
            />
        </View>
      );
    }
}

export default RegisterScreen