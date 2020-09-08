import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import New from '../pages/New';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
    <AppDrawer.Navigator
    drawerStyle={{
        backgroundColor: '#171717'
    }}
    drawerContentOptions={{
        labelStyle: {
            fontWeight: 'bold'
        },
        activeTintColor: '#FFF',
        activeBackgroundColor: '#00b94a',
        inactiveBackgroundColor: '#000',
        inactiveTintColor: '#DDD',
        itemStyle: {
            marginVerdical: 5,
        }
    }}
    >
        <AppDrawer.Screen name="Home" component={Home}/>
        <AppDrawer.Screen name="Perfil" component={Perfil}/>
        <AppDrawer.Screen name="New" component={New}/>
    </AppDrawer.Navigator>
    );
}

export default AppRoutes;
