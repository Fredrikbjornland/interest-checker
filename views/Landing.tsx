import React from "react"
import { useRef } from "react"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"

import Button from "../components/Button"
import { RootStackParamList } from "../interfaces"
import InfoKyte from "../sections/InfoKyte"
import { mainGreen } from "../assets/colors"

type Props = NativeStackScreenProps<RootStackParamList, "Landing">

export default function Landing({ navigation }: Props) {
    const navigateToForm = () => navigation.navigate("Form")

    return (
        <ScrollView className="min-h-full p-6 bg-darkGray">
            <View className="flex flex-col items-center justify-center h-screen space-y-12">
                <View className="w-full ">
                    <Text className="mb-2 text-4xl font-semibold text-white">
                        Kyte - Instant drone delivery
                    </Text>
                    <Text className="mb-12 font-semibold text-slate-300 text-large">
                        Help us make drone delivery arrive to your area by clicking the button below
                    </Text>
                </View>
                <Button
                    size="large"
                    text="I want Kyte"
                    onPress={navigateToForm}
                    iconEnd={<AntDesign name="arrowright" size={16} color="white" />}
                />
                <View className="flex flex-col items-center space-y-2">
                    <Text className="font-semibold text-white text-large">Learn more</Text>
                    <TouchableOpacity>
                        <AntDesign name="arrowdown" size={24} color={mainGreen} />
                    </TouchableOpacity>
                </View>
            </View>
            <InfoKyte />
        </ScrollView>
    )
}
