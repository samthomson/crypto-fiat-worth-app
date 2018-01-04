import React, { Component } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import firebase from 'firebase'

import { Header } from './components/Header'

import GuestHomeScreen from './screens/GuestHomeScreen'
import RegisterScreen from './screens/RegisterScreen'
import ListCurrenciesScreen from './screens/ListCurrenciesScreen'
import AddCurrencyScreen from './screens/AddCurrencyScreen'

import globalStyles from './styles/global'
import config from 'config.js'

export const AppNavigator = StackNavigator({
    LoginScreen: { screen: GuestHomeScreen},
    RegisterScreen: { screen: RegisterScreen},
    ListCurrenciesScreen: { screen: ListCurrenciesScreen},
    AddCurrencyScreen: {screen: AddCurrencyScreen}
})

class App extends Component {

    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: config.apiKey,
            authDomain: config.authDomain,
            databaseURL: config.databaseURL,
            projectId: config.projectId,
            storageBucket: config.storageBucket,
            messagingSenderId: config.messagingSenderId
        };
        firebase.initializeApp(config);
    }

    render() {

        return (
            <View style={globalStyles.container}>
                <AppNavigator />
            </View>
        )
    }
}

export default App