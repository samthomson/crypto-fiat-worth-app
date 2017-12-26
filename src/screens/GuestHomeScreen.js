import React, { Component } from 'react'
import { StatusBar, Text, View, TouchableOpacity } from 'react-native'
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

            <TouchableOpacity
                style={styles.registerLink}
                onPress={() => navigate("RegisterScreen", {screen: "Register"})}
            >
                <Text style={styles.registerLinkText}>or register</Text>
            </TouchableOpacity>
        </View>
      );
    }
}

const styles = {
    registerLink: {
        paddingTop: 10,
        alignItems: 'center'
    },
    registerLinkText: {
        fontSize: 18,
        borderColor: 'black',
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#000"
    }
};

export default GuestHomeScreen