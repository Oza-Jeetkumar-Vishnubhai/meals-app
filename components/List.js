import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

function List({children,textalign}) {
  return (
    <View style={styles.container}>
        <Text style={[styles.text,textalign?styles.textCenter:null]}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ffe6a8",
        borderRadius:"5%",
        margin:5,
        padding:5,
        width:"90%",
        alignSelf:"center"
    },
    textCenter:{
        textAlign:"center"
    },
    text:{
        fontSize:17
    }
})

export default List
