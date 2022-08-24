import React from 'react'
import { FlatList } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'
import { useNavigation } from '@react-navigation/native'

function CategoriesScreens() {
  const navigation = useNavigation();
  const renderCategoryItem = ({ item }) => {
    return <CategoryGridTile title={item.title} color={item.color}
      press={() => {
        navigation.navigate('mealsOverviewScreens', {
          categoryId: item.id,
          categoryName: item.title
        })
      }} />
    // return <CategoryGridTile title={item.title} color={item.color} press={()=>{navigation.navigate('mealsOverviewScreens')}}/>
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  )
}

export default CategoriesScreens
