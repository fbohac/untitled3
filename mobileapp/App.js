import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';


import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';
import welcome from './screens/welcome.js'
import menu from './screens/menu.js'
import priklady from './screens/priklady.js'
import test from './screens/test.js'
import form from './screens/form.js'

const RootStack = createStackNavigator({
    welcome: {
        screen: welcome
    },
    menu: {
        screen: menu
    },
    test: {
        screen: test
    },
    priklady: {
        screen: priklady
    },
    form: {
        screen: form
    }

});

const App = createAppContainer(RootStack);

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
