// import libraries to make a component
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Input } from './Input'
import { Button } from './Button'

let state = {
    email: '',
    password: ''
}

class CredentialForm extends Component {

    onEmailChange(email) {
        this.setState({email})
    }

    onPasswordChange(password) {
        this.setState({password})
    }

    render () {
        const { inputStyle, buttonStyle, containerStyle } = styles
        const { submitText, onSubmit } = this.props

        return (
            <View style={containerStyle}>
                {/* email and password input, submit button with submit event raised */}
                <Input
                    label="email"
                    value={state.email}
                />
                <Input
                    label="password"
                    value={state.password}
                    secureTextEntry={true}
                />
                <Button 
                    onPress={onSubmit}
                    style={buttonStyle}
                >{submitText}</Button>
            </View>
        )
    }
}

const styles = {
    buttonStyle: {
        flex: 1
    },
    containerStyle: {
        height: 160,
        paddingLeft: 15,
        paddingRight: 15
    }
};

// expose component
export { CredentialForm }
