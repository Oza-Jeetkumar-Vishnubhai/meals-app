import { useRoute, useNavigation } from '@react-navigation/native'
import React, { useLayoutEffect } from 'react'
import { View, Text, Image, StyleSheet,ScrollView } from 'react-native'
import Heading from '../components/Heading';
import List from '../components/List';
import IconBtn from '../components/IconBtn';
import { MEALS } from '../data/dummy-data';
import { addFavourite, remFavourite } from '../actions';
import { useSelector,useDispatch } from 'react-redux';

function MealDetailScreen() {
    const favMeals = useSelector((states)=>states.favouriteReducer);
    const dispatch = useDispatch();

    const route = useRoute();
    const mealId = route.params.mealId;
    const navigation = useNavigation();
    var isFav = favMeals.includes(mealId);
    console.log('favMeals',favMeals)
    console.log('mealId',mealId)
    const changeFavHandler = ()=>{
        if(!isFav)
        {
            dispatch(addFavourite(mealId))
            isFav=!isFav;
        }  
        else
        {
            dispatch(remFavourite(mealId))
            isFav=!isFav;
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconBtn name={isFav?"star":"star-outline"} color="white" onPress={changeFavHandler}/>
            }
        })
    }, [navigation,changeFavHandler])


    const displayedMeal = MEALS.find((data) => {
        return data.id == mealId;
    })

    return (
        <ScrollView style={{marginBottom:10}}>
            <View style={styles.container}>
                <Image source={{ uri: displayedMeal.imageUrl }} style={styles.image} />
                <Text style={styles.heading}>{displayedMeal.title}</Text>
            </View>
            <Heading>Ingredients</Heading>
            {
                displayedMeal.ingredients.map((ele,index) => {
                    return <List textalign={true} key={index}>{ele}</List>
                })
            }
            <Heading>Steps</Heading>
            {
                displayedMeal.steps.map((ele,index) => {
                    return <List key={index}>{ele}</List>
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 150
    },
    container:{
        backgroundColor:"white",
        borderRadius:20,
        overflow:"hidden",
        marginVertical:10,
    },
    heading:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:30
    }
})

export default MealDetailScreen
