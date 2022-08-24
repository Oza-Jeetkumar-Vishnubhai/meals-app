import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Pressable, Image, StyleSheet } from 'react-native'

function MealsItem({ title, imageUrl, duration, affordability, complexity,id }) {
    const navigation = useNavigation();
    return (
        <View>
            <Pressable android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => [styles.button, pressed ? styles.pressedBtn : null]} 
                onPress={()=>{
                    navigation.navigate('mealDetailScreen',{
                        mealId:id
                    })
                }}
            >
                <View>
                    <View style={styles.textView}><Text style={styles.title}>{title}</Text></View>
                    <View style={styles.innerContainer}>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <View style={styles.text}>
                            <Text style={styles.textHeading}>Duration</Text>
                            <Text>{duration}min</Text>
                        </View>
                        <View style={styles.text}>
                            <Text style={styles.textHeading}>Complexity</Text>
                            <Text>{complexity.toUpperCase()}</Text>
                        </View>
                        <View style={styles.text}>
                            <Text style={styles.textHeading}>Affordability</Text>
                            <Text>{affordability.toUpperCase()}</Text>
                        </View>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:30,
        letterSpacing:2,
        
    },
    textView:{
        backgroundColor:"white",
        borderRadius:20,
        marginTop:15,
        marginBottom:5,
        padding:5,
    },
    innerContainer:{
        backgroundColor:"white",
        padding:8,
        borderRadius:10,
        shadowColor:"gray",
        shadowOffset:{width:4,height:4},
        shadowOpacity:0.35,
        shadowRadius:10,
    },
    image: {
        width: "100%",
        height: 150,
        marginVertical: 8
    },
    text: {
        justifyContent: "space-around",
        flexDirection: "row"
    },
    textHeading: {
        fontSize: 18,
        fontWeight: "bold"
    },
    pressedBtn: {
        opacity: 0.5
    },
    button: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
})

export default MealsItem
