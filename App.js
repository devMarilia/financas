import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'
import { View, StatusBar } from 'react-native';


export default function App(){
    return(
        <NavigationContainer>
            <StatusBar backgroundColor="#131313" barStyle="ligth-content" />
            <Routes/>
        </NavigationContainer>
    )
}
