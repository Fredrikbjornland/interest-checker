import React, { useState } from "react"
import { UseFormSetValue } from "react-hook-form"
import { StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { SegmentedButtons } from "react-native-paper"

import { FormValues } from "../interfaces"
import Button from "./Button"
import LocationSearch from "./LocationSearch"
import MapInput from "./MapInput"

type MapInputProps = {
    setValue: UseFormSetValue<FormValues>
}
export default function LocationInput({ setValue }: MapInputProps) {
    return (
        <View>
            <Text className="mb-2 text-sm text-gray-300">
                Place the marker where you want Kyte to deliver to
            </Text>
            <MapInput setValue={setValue} />
            <Text className="py-2 text-base font-bold text-center text-white">Or</Text>
            <View className="relative h-[150px]">
                <Text className="mb-2 text-sm text-gray-300 ">
                    Type in the location that Kyte should deliver to
                </Text>
                <LocationSearch setValue={setValue} />
            </View>
        </View>
    )
}
