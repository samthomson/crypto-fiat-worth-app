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
        const { inputStyle, labelStyle, containerStyle } = styles
        const { submitText, onSubmit } = this.props

        return (
            <View style={{ height: 40}}>
                {/* email and password input, submit button with submit event raised */}
                <Input label="email" value={state.email}/>
                <Input label="password" value={state.password} secureTextEntry={true} />
                <Button onPress={onSubmit}>{submitText}</Button>
            </View>
        )
    }
}

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center' 
    }
};

// expose component
export { CredentialForm }
