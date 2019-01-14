import React from 'react'
import { View, Image, Text} from 'react-native'

const Thumbnail = (props) => {
    const { thumbnailContainerStyle, thumbnailStyle } = styles 
    return (
        <View style={thumbnailContainerStyle}>
            <Image 
            source={props.image}
            style={thumbnailStyle}
            />
        </View>
    )
}
const styles = {
    thumbnailStyle: {
        height: 58,
        width: 58,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#fff',
        borderBottomWidth: 0,
    },
    thumbnailContainerStyle: {
        marginLeft: 16,
        marginRight: 10,
        position: 'absolute',
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',   
        


    }
}
export default Thumbnail
