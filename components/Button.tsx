import React from "react"
import { Pressable, Text } from "react-native"

type ButtonProps = {
    text: string
    onPress: () => void
    className?: string
    iconStart?: React.ReactNode
    iconEnd?: React.ReactNode
}

export default function Button(props: ButtonProps) {
    const { text, onPress, className, iconStart, iconEnd } = props
    return (
        <Pressable
            onPress={onPress}
            accessibilityLabel={text}
            className="flex flex-row items-center px-4 py-2 space-x-2 font-medium rounded-lg shadow-md bg-green focus:outline-none focus:ring-2 disabled:bg-gray-500"
        >
            {iconStart}
            <Text className="font-bold text-white">{text}</Text>
            {iconEnd}
        </Pressable>
    )
}
