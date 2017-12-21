import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, } from 'react-native'
import  FadeInView  from './FadeInView';

const placeholder =  require('../assets/placeholder.jpg');

MovieItem = ({index, text, imageUrl, movieInfo, navigation }) => { 

    const image = imageUrl ? { uri : imageUrl } : placeholder;

    return (
        <TouchableOpacity
            underlayColor='grey'
            onPress= { () => navigation.navigate(movieInfo.routeId, { title : movieInfo.title, url : movieInfo.url}) } >

            <FadeInView delay={index * 25}>
                <View style={styles.mediaObject}>
                    <Image source={image} style={styles.image} />
                    <Text style={styles.text}>{text}</Text>
                </View>
            </FadeInView>
        
        </TouchableOpacity>
        
    );   
}

export default  MovieItem;


const styles = StyleSheet.create({
    mediaObject: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 10,
    },
    text: { flex: 1 },
    image: {
      backgroundColor: 'grey',
      width: 40,
      height: 40,
      marginRight: 16,
      marginLeft: 16,
    },
  });
  
