import React from 'react'
import {MEALS} from '../data/dummy-data'
import { StyleSheet,View,Text,FlatList } from 'react-native'
import {useRoute} from '@react-navigation/native'
import MealsList from '../components/MealsList/MealsList';

// function MealsOverviewScreens({route}) {
function MealsOverviewScreens() {
    const route = useRoute();
    const cid = route.params.categoryId;

    const displayedMeals = MEALS.filter((data)=>{
        return data.categoryIds.indexOf(cid)>=0;
    })

 return <MealsList items={displayedMeals}/>
}



export default MealsOverviewScreens
