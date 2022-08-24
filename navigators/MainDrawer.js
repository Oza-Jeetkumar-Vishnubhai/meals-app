// import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import CategoriesScreens from '../screens/CategoriesScreens';
import FavouritesScreen from '../screens/FavouritesScreen';


function MainDrawer() {
    const Drawer = createDrawerNavigator();
    return (
        // <NavigationContainer>
            <Drawer.Navigator screenOptions={{
                headerStyle: { backgroundColor: '#631b1b' },
                headerTintColor: "white",
                sceneContainerStyle: { backgroundColor: "#734343" },
                drawerStyle:{backgroundColor:"#631b1b"},
                drawerActiveBackgroundColor:"#ffe7a3",
                drawerInactiveBackgroundColor:"#802f2f",
                drawerActiveTintColor:"black",
                drawerInactiveTintColor:"white",
            }}>
                <Drawer.Screen name="All Categories" component={CategoriesScreens}
                    options={{
                        title: "All Categories",
                    }}
                />
                <Drawer.Screen name="Favourites" component={FavouritesScreen}
                    options={{
                        title: "Favourites",
                    }}
                />
            </Drawer.Navigator>
        // </NavigationContainer>
    )
}

export default MainDrawer
