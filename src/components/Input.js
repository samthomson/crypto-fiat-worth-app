import React from 'react';
import { Text, TextInput, View } from 'react-native';

// create component
const Input = (props) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    const {
        label,
        value,
        onChangeText = () => {},
        placeholder = '',
        secureTextEntry = false
    } = props

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                autoCapitalize={'none'}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
            />
        </View>
    );
}; 

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 0,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        borderWidth: 1,
        borderColor: 'black'
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 80,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

// expose component
export { Input }
