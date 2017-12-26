import React, { Component } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import { Header } from './components/Header'

import GuestHomeScreen from './screens/GuestHomeScreen'
import RegisterScreen from './screens/RegisterScreen'
import ListCurrenciesScreen from './screens/ListCurrenciesScreen'
import AddCurrencyScreen from './screens/AddCurrencyScreen'

import globalStyles from './styles/global'

export const AppNavigator = StackNavigator({
    LoginScreen: { screen: GuestHomeScreen},
    RegisterScreen: { screen: RegisterScreen},
    ListCurrenciesScreen: { screen: ListCurrenciesScreen},
    AddCurrencyScreen: {screen: AddCurrencyScreen}
})

class App extends Component {

    render() {

        return (
            <View style={globalStyles.container}>
                <AppNavigator />
            </View>
        )
    }
}

export default App