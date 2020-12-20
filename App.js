import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Writingscreen from '../Screens/Writingscreen';
import Readstoryscreen from '../Screens/Readstoryscreen';

export default class App extends React.Component {
    render(){
    return (
     <AppContainer/>
    )
    }
}

const TabNavigator = createBottomTabNavigator({
    Write: {screen: Writingscreen},
    ReadStory: {screen: Readstoryscreen}
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
     tabBarIcon : () => {
       const routeName = navigation.state.routeName;
       console.log(routeName);
       if(routeName === "Write"){
         return(
           <Image source = {require("./assets/book.png")} style = {{width:20,height:20}} />
         )
       }
       else if(routeName === "ReadStory"){
        return(
          <Image source = {require("./assets/booklogo.jpg")} style = {{width:20,height:20}}/>
        )
       }
     }
    })
  }
  )
  
  const AppContainer = createAppContainer(TabNavigator);
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  