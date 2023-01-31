import React from "react"
import { Text, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { Feather } from "@expo/vector-icons"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { mainGreen } from "../assets/colors"

const steps = [
    { text: "Choose a product", icon: <Feather name="shopping-bag" size={24} color={mainGreen} /> },
    {
        text: "Specify drop-off point",
        icon: <MaterialCommunityIcons name="target" size={24} color={mainGreen} />
    },
    {
        text: "Track your flight",
        icon: <MaterialCommunityIcons name="airplane-takeoff" size={24} color={mainGreen} />
    },
    {
        text: "Receive the package",
        icon: <AntDesign name="checksquareo" size={24} color={mainGreen} />
    }
]

export default function InfoKyte() {
    return (
        <View className="w-full pb-10">
            <View>
                <Text className="mb-2 text-2xl font-semibold text-white underline decoration-green">
                    Info
                </Text>
                <Text className="mb-2 text-base text-white font-nomal">
                    Kyte is a home delivery service that is faster, greener and more accessible than
                    traditional services. We are now delivering to selected customers in Norway,
                    proving that the future is already here.
                </Text>
            </View>
            <View className="mt-6">
                <Text className="mb-2 text-2xl font-semibold text-white underline decoration-green ">
                    How it works
                </Text>
            </View>
            <View className="grid w-full grid-cols-2">
                {steps.map((step, index: number) => (
                    <View
                        key={index}
                        className="flex flex-row items-center justify-between p-2 m-2 bg-gray-700 rounded"
                    >
                        <Text className="text-green">{index + 1}.</Text>
                        <Text className="mx-2 text-white">{step.text}</Text>
                        {step.icon}
                    </View>
                ))}
            </View>
        </View>
    )
}
