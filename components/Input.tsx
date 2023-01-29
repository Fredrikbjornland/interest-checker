import React from "react"
import { TextInput } from "react-native"

type InputProps = {
    placeholder: string
    onBlur: () => void
    onChangeText: (v: any) => void
    value: string
}

export default function Input({ placeholder, onBlur, onChangeText, value }: InputProps) {
    return (
        <TextInput
            className="flex flex-row items-center p-2 border border-gray-300 rounded-md"
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChangeText}
            value={value}
        />
    )
}
