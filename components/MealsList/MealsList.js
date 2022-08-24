import React from 'react'
import {View,FlatList,StyleSheet} from 'react-native'
import MealsItem from './MealsItem'

const MealsList = ({items}) => {
    const renderMealItem = ({item})=>{
        const params = {
            title:item.title,
            imageUrl:item.imageUrl,
            duration:item.duration,
            affordability:item.affordability,
            complexity:item.complexity,
            id:item.id
        }
        return <MealsItem {...params}/>
    }

  return (
    <View style={styles.container}>
        <FlatList 
            data={items}
            keyExtractor={(item)=>item.id}
            renderItem={renderMealItem}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})

export default MealsList
