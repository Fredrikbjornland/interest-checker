import React from "react"
import { TextInput, View } from "react-native"

type InputWithIconProps = {
    icon: React.ReactNode
    placeholder: string
    onBlur: () => void
    onChangeText: (v: any) => void
    value: string
    isNumber?: boolean
}

export default function InputWithIcon({
    icon,
    placeholder,
    onBlur,
    onChangeText,
    value,
    isNumber
}: InputWithIconProps) {
    return (
        <View className="flex flex-row items-center p-2 border border-gray-300 rounded-md">
            {icon}
            <TextInput
                className="flex-1 ml-2"
                autoCorrect={false}
                placeholder={placeholder}
                onChangeText={onChangeText}
                onBlur={onBlur}
                value={value}
                keyboardType={isNumber ? "numeric" : "default"}
            />
        </View>
    )
}
