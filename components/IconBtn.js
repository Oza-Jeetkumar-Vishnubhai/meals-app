import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Pressable,StyleSheet } from 'react-native'

function IconBtn({name,color,onPress}) {
  return (
    <Pressable style={({pressed})=>{return pressed ? styles.pressed : null}}
      onPress={onPress}
    >
        <Ionicons name={name} color={color} size={24}/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    pressed:{
        opacity:0.5
    }
})

export default IconBtn
