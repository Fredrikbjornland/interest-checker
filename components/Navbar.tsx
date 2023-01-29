import React from "react"
import { Image, Text, View } from "react-native"
var yourPicture = require("../assets/kyte-logo.svg")

export default function Navbar() {
    return (
        <View className="flex flex-row justify-between w-full">
            <Text className="text-2xl font-bold text-green">Kyte</Text>
        </View>
    )
}
