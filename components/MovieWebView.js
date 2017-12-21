import { View, WebView } from 'react-native'
import React, { Component } from 'react';

export default class MovieWebView extends Component {
  
    static navigationOptions = ({ navigation }) => ({
        headerTitle: `${navigation.state.params.title}`,
     });

    render() {
        
        const {params} = this.props.navigation.state; 
        
        console.debug(`Details params url : ", ${params.url}  - ${params.title}`);

        return (
            <View style={{
                backgroundColor : 'white',
                borderLeftColor : 'black',
                borderLeftWidth :1,
                flex:1
            }}>

            <WebView  style={{flex:1}} 
                source={{
                    uri : params.url,
                    method : 'GET'
                }} />

            </View>   

        );
  }
}



