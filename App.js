/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
// import {
//   StyleSheet,
//     TouchableWithoutFeedback,
//     Image,
//     View,
//     Text,
//     Alert,
// } from 'react-native';

import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator,createMaterialTopTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './src/component/HomePage/homeScreen';


import YourCard from './src/component/yourCard/yourCard';
import Cards from './src/component/card/Cards';
import Teams from './src/component/teams/Teams';


import {View,Text} from 'react-native';
import {Icon,Avatar} from 'react-native-elements';


import Edit from "./src/component/yourCard/edit";
import Summary from "./src/component/yourCard/summary";
import Recipient from "./src/component/yourCard/recipient";





// const RootStack = createStackNavigator(
//     {
//
//
//     },
//     {
//         initialRouteName: 'Home',
//
//     }
// );

const MainTab = createBottomTabNavigator({
    Cards: {
        screen: Cards,
        navigationOptions:{
            tabBarIcon: ()=> <Icon name='account-box' type='material' size={30} />
        }
    },
    Teams:{
        screen: Teams,
        navigationOptions:{
            tabBarIcon: ()=> <Icon name='supervisor-account' type='material' size={30} />
        }
    },
    YourCard: {
        screen: YourCard,
        tabBarLabel: 'Your Card',
        navigationOptions:{
            tabBarIcon: ()=> <Icon name='assignment-ind' type='material' size={30} />
        }
    }
},{
    navigationOptions:{

    },
    tabBarOptions: {
        activeTintColor: '#000',
        labelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
        },
        style: {
            backgroundColor: 'White',
            height: 63
        },

    }});



//card route tab navigation
const YourCardNavigator = createMaterialTopTabNavigator({
    Summary: Summary,
    Recipient: Recipient,
    Edit: Edit,
},{
    headerMode: 'float',
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: '#C7C7C7',
        showLabel: 'false',
        indicatorStyle:{
            backgroundColor: '#000'
        },
        labelStyle: {
            fontSize: 20,
            textTransform: 'capitalize'
        },
        style: {
            backgroundColor: 'white',
        },
    }
});





//card tab wraps the navigation displaying the header
const TabNavigator =  createStackNavigator({
    MainTabs:{
        screen: MainTab,
        navigationOptions: () =>  ({
            headerTitle: 'Hello David David',
            headerTitleStyle: {fontSize: 20, fontWeight:'400'},
            headerStyle:{height: 85,},
            headerRight: <Avatar
                size='medium'
                rounded
                title='la'
                containerStyle={{marginRight: 15}}
            />
        })
    },

    mainCards:{
        screen: YourCardNavigator,
        navigationOptions: () =>  ({
            headerTitle: 'home',
            headerTitleStyle:{color: 'black',fontSize: 22,textTransform: "capitalize",marginLeft: 40},
            headerStyle:{height: 90},
            headerLeft: <Avatar
                size='medium'
                rounded
                title='la'
                containerStyle={{marginLeft: 35}}
            />,
            headerBackTitle: true
        })
    }

},{
    // initialRouteName: HomeScreen
});




const App = createSwitchNavigator({

    Home: {
        screen: HomeScreen,
    },
    Card: {
        screen: TabNavigator
    },
    Main:{
        screen: MainTab
    },

},{
    // initialRouteName: Home
});





export default createAppContainer(App);


