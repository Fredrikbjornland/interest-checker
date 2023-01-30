import React from "react"
import { ScrollView, Text, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"

import Button from "../components/Button"
import { RootStackParamList } from "../interfaces"

type Props = NativeStackScreenProps<RootStackParamList, "Landing", "MyStack">

export default function Landing({ navigation }: Props) {
    const navigateToForm = () => navigation.navigate("Form")

    return (
        <ScrollView className="min-h-full p-6 bg-darkGray">
            <View className="flex flex-col items-center justify-center h-full pt-8 space-y-4">
                <View>
                    <Text className="mb-2 text-4xl font-semibold text-white">Kyte</Text>
                    <Text className="mb-12 font-semibold text-slate-200 text-large">
                        Instant drone delivery
                    </Text>
                </View>
                <Button
                    text="I want Kyte"
                    onPress={navigateToForm}
                    iconEnd={<AntDesign name="arrowright" size={16} color="white" />}
                />
                <Text className="text-white">Learn more</Text>
                <Button
                    text="I want Kyte"
                    onPress={navigateToForm}
                    iconEnd={<AntDesign name="arrowright" size={16} color="white" />}
                />
                <View className="h-[500px] w-[500px] bg-green" />
            </View>
        </ScrollView>
    )
}
