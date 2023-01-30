import React from "react"
import { Pressable, Text } from "react-native"

type ButtonProps = {
    text: string
    onPress: () => void
    className?: string
    iconStart?: React.ReactNode
    iconEnd?: React.ReactNode
    outline?: boolean
}

export default function Button(props: ButtonProps) {
    const { text, onPress, iconStart, iconEnd, className, outline } = props
    return (
        <Pressable
            onPress={onPress}
            accessibilityLabel={text}
            className={`flex flex-row items-center px-4 py-2 space-x-2 
            font-medium rounded-lg shadow-md  focus:outline-none border-2 border-green focus:ring-2 disabled:bg-gray-500 ${className}
            ${outline ? "bg-white" : "bg-green"}`}
        >
            {iconStart}
            <Text className={`font-bold ${outline ? "text-green" : "text-white"}`}>{text}</Text>
            {iconEnd}
        </Pressable>
    )
}
