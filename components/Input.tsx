import React from "react"
import { Text, TextInput } from "react-native"

type InputProps = {
    label: string
    placeholder: string
    onBlur: () => void
    onChangeText: (v: any) => void
    value: string
}

export default function Input({ label, placeholder, onBlur, onChangeText, value }: InputProps) {
    return (
        <>
            <Text className="font-semibold">{label}</Text>
            <TextInput
                className="flex flex-row items-center p-2 border border-gray-300 rounded-md"
                placeholder={placeholder}
                onBlur={onBlur}
                onChangeText={onChangeText}
                value={value}
            />
        </>
    )
}
