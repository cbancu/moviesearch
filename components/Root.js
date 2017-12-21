
import React, { Component } from 'react';
import  { StackNavigator }  from 'react-navigation';
import  Main   from './Main';
import  MovieWebView   from './MovieWebView';

const Root = StackNavigator({
  Home: {
    screen: Main,
    navigationOptions: {
      headerTitle: 'Search for movies',
    },
  },
  Details: {
    screen: MovieWebView,
    path :'details/:title/:url', 
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
},
{
  initialRouteName : 'Home',
  headerMode :'screen'
});

export default Root; 



