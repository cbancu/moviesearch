
import React, { Component } from 'react';
import {Text, View, 
    StatusBar , 
    ActivityIndicator, 
    ListView, 
    ListViewDataSource, 
    StyleSheet, 
    TextInput,
    TouchableWithoutFeedback, 
    Keyboard, 
    ScrollView } from 'react-native'
import { debounce }  from 'lodash';
import MovieItem from './MovieItem';


export default class Main extends Component {

    static API_KEY = 'cba092ad'; 

    static MOVIE_NOT_FOUND = { 

    };

    constructor(props) { 
        super(props); 

        const dataSource = new ListView.DataSource({
            rowHasChanged : (r1,r2) => r1.imdbID !== r2.imdbID,
        });

        this.state = { 
            isLoading:false,
            movies : dataSource 
        }; 
    }


    renderRow = (movie, sId, id) => { 
        
        const movieInfo = { 
            routeId: 'Details',
            title : movie.Title,
            url : `http://www.imdb.com/title/${movie.imdbID}/`,
            year : movie.Year, 
            type : movie.Type
        }; 

        const imageUrl = movie.Poster ? movie.Poster : null; 

        return (
            <MovieItem index={ id }
                text={movie.Title}
                imageUrl={ imageUrl }
                movieInfo={ movieInfo }
                navigation={ this.props.navigation } />
        );
    }

    render() {
        const { movies } = this.state;

        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />

                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                        <TextInput 
                            underlineColorAndroid='rgba(0,0,0,0)' 
                            placeholder="Search by movie name" 
                            placeholderTextColor='grey' 
                            style={ styles.searchBox } 
                            onChangeText={ this.searchForMovies } />
                </TouchableWithoutFeedback>

                {this.state.isLoading && 
                    <View style={{flex:1,  paddingTop:20}}>
                        <ActivityIndicator/>
                    </View>
                }

                {this.state.isLoading===false &&   
                    <ScrollView style={styles.listView}>
                        <ListView  enableEmptySections={true}  dataSource= { movies } style={ styles.listView } renderRow={ this.renderRow } />
                    </ScrollView>
                }   
            </View>
        )
    }

    searchForMovies = debounce(query => {
        this.setState({
            isLoading:true
        }); 
        this.getMoviesAsync(query);
    }, 800);

    async  getMoviesAsync(movieTitle) { 
        try { 
            const response = await fetch(`http://www.omdbapi.com/?s=${movieTitle}&plot=full&apikey=${Main.API_KEY}`);
            const responseJson = await response.json();
            if(responseJson.Response === 'True') { 
                this.setState({
                    movies: this.state.movies.cloneWithRows(responseJson.Search),
                  });
            }
            else { 
                this.setState({ 
                    movies : this.state.movies.cloneWithRows([]),
                })
            }
            
        }
        catch(error) { 
            console.error(error); 
        }
        finally { 
            this.setState(
                {
                    isLoading :false
                }
            )
        }
    }
}



const styles = StyleSheet.create({

    container : {
      paddingTop:20,
      flex:1,
      justifyContent : 'center',
      alignItems : 'center',
      backgroundColor : 'white'
    },
    searchBox : { 
      alignSelf:'stretch',
      borderBottomWidth : 1,
      borderBottomColor : 'grey',
      margin :16,
      paddingLeft : 10,
    },
    listView : { 
      flex:1,
      alignSelf : 'stretch'
    }
  });