import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, } from 'react-native'
import  FadeInView  from './FadeInView';
import { Card, ListItem, Button } from 'react-native-elements';

const placeholder =  require('../assets/placeholder.jpg');

MovieItem = ({index, text, imageUrl, movieInfo, navigation }) => { 

    const image = imageUrl ? { uri : imageUrl } : placeholder;

    return (
        // <TouchableOpacity
        //     underlayColor='grey'
        //     onPress= { () => navigation.navigate(movieInfo.routeId, { title : movieInfo.title, url : movieInfo.url}) } >

        //     <FadeInView delay={index * 25}>
        //         <View style={styles.mediaObject}>
        //             <Image source={image} style={styles.image} />
        //             <Text style={styles.text}>{text}</Text>
        //         </View>
        //     </FadeInView>
        
        // </TouchableOpacity>

        <FadeInView delay={index * 25}>
            <Card
                title={movieInfo.title}
                image={image}>
                <Text style={{marginBottom: 10, textAlign : "center"}}>
                    {movieInfo.type} ({movieInfo.year}) 
                </Text>
                <Button
                    icon={{name: 'code'}}
                    onPress={() => navigation.navigate(movieInfo.routeId, { title : movieInfo.title, url : movieInfo.url}) } 
                    backgroundColor='#03A9F4'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Details' />
            </Card>
        </FadeInView>
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
  
