import React  from 'react'
import { AppRegistry, Text, View, YellowBox } from 'react-native'

const App = () => {
    const { textStyle, viewStyle } = styles
    console.log("ahihi")
    return (
        <View style={viewStyle}>
            <Text >Hello World</Text>
        </View>
    )
    
}
const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        paddingTop: 15,
        backgroundColor: '#F8F8F8',
        fontSise: 40
    },
    textStyle: {
        fontSise: 20
    }
}
YellowBox.ignoreWarnings(['Remote debugger']);
AppRegistry.registerComponent('coupleMobile', () => App)