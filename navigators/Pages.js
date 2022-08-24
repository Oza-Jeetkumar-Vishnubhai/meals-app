import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import MealsOverviewScreens from '../screens/MealsOverviewScreens';
import MealDetailScreen from '../screens/MealDetailScreen';
// import CategoriesScreens from '../screens/CategoriesScreens';
import MainDrawer from './MainDrawer';

function Pages() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='mealsCategories' screenOptions={{
                headerStyle: { backgroundColor: '#631b1b' },
                headerTintColor: "white",
                contentStyle: { backgroundColor: "#734343" }
            }}>
                <Stack.Screen name="drawer" component={MainDrawer}
                    options={{ 
                        // title: "All Categories",
                        headerShown:false,
                     }}
                />
                {/* <Stack.Screen name="mealsCategories" component={CategoriesScreens}
                    options={{ title: "All Categories" }}
                /> */}
                <Stack.Screen name="mealsOverviewScreens" component={MealsOverviewScreens}
                    options={({ route, navigation }) => {
                        return { title: route.params.categoryName }
                    }}
                />
                <Stack.Screen name="mealDetailScreen" component={MealDetailScreen}
                // options={({route,navigation})=>{
                //   return {title:route.params.categoryName}
                // }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Pages
