import React  from 'react'
import { AppRegistry, Text, View, YellowBox } from 'react-native'
import Header from './src/Header'
import Body from './src/Body'
import thumbnail_image from './ava1.jpg'
const App = () => {
    
    return (
        <View style={{flex: 1}}>
            <Header headerText={'Add Memory'} />
            <Body image={thumbnail_image}/>
        </View>
    )
    
}

YellowBox.ignoreWarnings(['Remote debugger']);
AppRegistry.registerComponent('coupleMobile', () => App)