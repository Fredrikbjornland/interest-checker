import React, { Children } from "react"
import { Text, View } from "react-native"

type AnswerProps = {
    label: string
    isAnswered: any | undefined
    answer?: string | undefined
    children?: React.ReactNode
}

export default function Answer({ label, isAnswered, answer, children }: AnswerProps) {
    return (
        <View className="mb-3">
            {isAnswered && <Text className="my-1 text-base font-semibold text-white">{label}</Text>}
            {answer && (
                <>
                    <Text className="text-gray-300">{answer}</Text>
                </>
            )}
            {children && isAnswered && <View className="my-1">{children}</View>}
        </View>
    )
}
