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
            <TouchableHighlight
                onPress={() => navigate("ListCurrencies", {screen: "List Currencies Screen"})}
            >
                <Text>Guest - login</Text>

            </TouchableHighlight>
        </View>
      );
    }
}

export default ListCurrenciesScreen