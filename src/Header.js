import React from 'react'
import { View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
//import { Icon, Button } from 'react-native-elements';

const Header = ( props ) => {
    const { textStyle, textContainerStyle,containerStyle,iconContainerStyle} = styles
    return (
        <View style={containerStyle}>
            <View style={iconContainerStyle}>
                <Icon name='arrow-left' size={30} color='#fff' />
            </View>
            <View style = {textContainerStyle}>
                <Text style={textStyle}>{props.headerText}</Text>
            </View>

            
        
 
        </View>
    )
}
const styles = {
    containerStyle: {
        height: 80	,
        backgroundColor: '#b276ff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    textContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainerStyle: {
        position: 'absolute',
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    textStyle: {
        fontSize: 16,
        color: '#fff'
    }
    

    
    
}
export default Header