import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

// function CategoryGridTile({ title, color, press }) {
function CategoryGridTile({ title, color ,press}) {
    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => [styles.button, pressed ? styles.pressedBtn : null]}
                onPress={press}
            >
                <View style={[styles.innerView, { backgroundColor: color }]}>
                    <Text style={styles.fontStyle}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        height: 150,
        margin: 16,
        elevation: 4,
        borderRadius: 8,
        shadowColor: "black",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        backgroundColor: "white"
    },
    button: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    innerView: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    fontStyle: {
        fontWeight: "bold",
        fontSize: 18
    },
    pressedBtn: {
        opacity: 0.5
    }
})

export default CategoryGridTile
