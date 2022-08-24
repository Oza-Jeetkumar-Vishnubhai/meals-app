import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
function FavouritesScreen() {
  const favMealsIds = useSelector((states)=>states.favouriteReducer);
  console.log(favMealsIds)
  
  const favMeals = MEALS.filter((meal)=>favMealsIds.includes(meal.id));
  
  if(favMeals.length == 0){
    return (
      <View style={styles.rootcontainer}>
        <Text style={styles.text}>You have no Favourite meals yet.</Text>
      </View>
    )
  }

  return (
    <MealsList items={favMeals} />
  )
}

const styles = StyleSheet.create({
  rootcontainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    color:"white",
    fontWeight:"bold",
    fontSize:20
  }
})

export default FavouritesScreen
