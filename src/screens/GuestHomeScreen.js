import React, { Component } from 'react'
import { StatusBar, Text, TouchableHighlight, View } from 'react-native'
import globalStyles from '../styles/global'

import {CredentialForm} from '../components/CredentialForm'

class GuestHomeScreen extends Component {
    static navigationOptions = {
      title: "Login"
    }
    render() {
      const { navigate } = this.props.navigation
      return (
        <View style={globalStyles.container}>

            <CredentialForm
                submitText="Login"
                onSubmit={(state) => console.log('login form submitted') }
            />

            <TouchableHighlight
                style={globalStyles.button}
                onPress={() => navigate(
                    "ListCurrenciesScreen",
                    {
                        screen: "List Currencies"
                    }
                )}
            >
                <Text>login</Text>

            </TouchableHighlight>

            <TouchableHighlight
                style={globalStyles.button}
                onPress={() => navigate("RegisterScreen", {screen: "Register"})}
            >
                <Text>register</Text>

            </TouchableHighlight>
        </View>
      );
    }
}

export default GuestHomeScreen