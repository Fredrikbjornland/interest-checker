import React, { useState } from "react"
import { Text, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"

import Navbar from "../components/Navbar"
import Button from "../components/Button"
import { RootStackParamList } from "../interfaces"

type Props = NativeStackScreenProps<RootStackParamList, "Landing", "MyStack">

export default function Landing({ navigation }: Props) {
    const navigateToForm = () => navigation.navigate("Form")

    return (
        <View className="h-full p-12 bg-slate-50">
            <Navbar />
            <View className="flex flex-col items-center justify-center h-full pt-8 space-y-4">
                <Text className="mb-8 text-large">We are currently not in your location</Text>
                <Button
                    text="Show interest"
                    onPress={navigateToForm}
                    iconEnd={<AntDesign name="arrowright" size={18} color="white" />}
                />
            </View>
        </View>
    )
}
