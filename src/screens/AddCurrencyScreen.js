import React, { Component } from 'react'
import { Text, View } from 'react-native'
import globalStyles from '../styles/global'

class AddCurrencyScreen extends Component {
    static navigationOptions = {
      title: "Register"
    }
    render() {
      const { navigate } = this.props.navigation
      return (
        <View style={globalStyles.container}>
            <Text>add currency</Text>
        </View>
      );
    }
}

export default AddCurrencyScreen