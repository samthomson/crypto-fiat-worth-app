import React, { Component } from 'react'
import { StatusBar, Text, View } from 'react-native'
import { Header } from './components/Header'

class App extends Component {

    render() {

        return (
            <View>
                <Header />
                <Text>home</Text>
            </View>
        )
    }
}

export default App