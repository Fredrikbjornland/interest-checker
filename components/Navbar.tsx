import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React from "react"
import { Text, View } from "react-native"

export default function Navbar() {
    return (
        <View className="flex flex-row justify-between w-full p-4">
            <Text className="text-2xl font-bold text-green">Kyte</Text>
        </View>
    )
}
