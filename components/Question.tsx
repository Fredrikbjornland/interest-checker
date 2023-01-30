import React from "react"
import { Text, View } from "react-native"

type QuestionProps = {
    label: string
    children: React.ReactNode
    description?: string
}

export default function Question({ label, children, description }: QuestionProps) {
    return (
        <View className="mt-4">
            <Text className="mb-2 text-base font-semibold text-white">{label}</Text>
            {children}
            <Text className="mt-2 text-sm text-gray-300">{description}</Text>
        </View>
    )
}
