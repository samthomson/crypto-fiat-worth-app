import React, { Component } from 'react'
import { Text, TouchableHighlight, View } from 'react-native'
import globalStyles from '../styles/global'

class ListCurrenciesScreen extends Component {
    static navigationOptions = {
      title: "Currencies"
    }
    render() {
      const { navigate } = this.props.navigation
      return (
        <View style={globalStyles.container}>
            <Text>Currency list</Text>
            <TouchableHighlight
                onPress={() => navigate("AddCurrencyScreen", {screen: "Add Currency Holding"})}
            >
                <Text>add Currency holding</Text>
            </TouchableHighlight>
        </View>
      );
    }
}

export default ListCurrenciesScreen