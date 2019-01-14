import React from 'react'
import { View, Text, Image } from 'react-native'
import Thumbnail from './Thumbnail'

const Button = (props) => {
    const {  containerStyle } = styles
    return (
        <View style={containerStyle}>
            <Thumbnail image = {props.image}/>
        </View>   
    )
}

const styles = {
    containerStyle: {
        flex: 1,
        marginTop: 19
    }
}
export default Button