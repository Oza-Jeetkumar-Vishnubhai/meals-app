import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

function Heading({children}) {
  return (
    <View style={styles.heading}>
        <Text style={styles.text}>{children}</Text>
        <View style={styles.line}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        fontSize:25,
        color:"white"
    },
    line:{
        width:"80%",
        height:1,
        borderRadius:"50%",
        borderColor:"white",
        borderWidth:1,
    }
})

export default Heading
