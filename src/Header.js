import React from 'react'
import { View, Text} from 'react-native'

const Header = ( props ) => {
    const { textStyle, viewStyle,containerStyle } = styles
    return (
        <View style={containerStyle}>
            <View style = {viewStyle}>
                <Text style={textStyle}>{props.headerText}</Text>
            </View>
            
        </View>
    )
}
const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
    },
    containerStyle: {
        height: 72,

        backgroundColor: '#b276ff',
    },
    textStyle: {
        fontSize: 16,
        color: '#fff'
    }
    
    
}
export default Header