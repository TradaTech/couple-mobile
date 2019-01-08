import React  from 'react'
import { AppRegistry, Text, View, YellowBox } from 'react-native'
import Header from './src/Header'

const App = () => {
    
    return (
        <View>
            <Header headerText={'Add Memory'} />
        </View>
    )
    
}

YellowBox.ignoreWarnings(['Remote debugger']);
AppRegistry.registerComponent('coupleMobile', () => App)