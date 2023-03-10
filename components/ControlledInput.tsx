import React from "react"
import { useController, UseControllerProps } from "react-hook-form"
import { Text, TextInput, TextInputProps as RNTextInputProps, View } from "react-native"

/* EXTENDING PROPS TYPES TO INHERIT NAME AND RULES FROM USECONTROLLERPROPS */
interface TextInputProps extends RNTextInputProps, UseControllerProps {
    label: string
    icon?: React.ReactNode
    defaultValue?: string //ADD DEFAULT VALUE TO PROPS
}

const ControlledInput = (props: TextInputProps) => {
    const { name, label, rules, defaultValue, icon, ...inputProps } = props

    const {
        field,
        fieldState: { error }
    } = useController({ name, rules, defaultValue })

    return (
        <>
            {icon ? (
                <View className="flex flex-row items-center p-3 border border-gray-300 rounded-md">
                    {icon}
                    <TextInput
                        className="flex-1 ml-2 text-white"
                        placeholderTextColor="gray"
                        onChangeText={field.onChange}
                        onBlur={field.onBlur}
                        value={field.value}
                        {...inputProps}
                    />
                </View>
            ) : (
                <TextInput
                    className="flex flex-row items-center p-3 text-white border border-gray-300 rounded-md"
                    onChangeText={field.onChange}
                    placeholderTextColor="gray"
                    onBlur={field.onBlur}
                    value={field.value}
                    {...inputProps}
                />
            )}
            {error && <Text className="m-1 text-red-500">{error.message}</Text>}
        </>
    )
}

export default ControlledInput
