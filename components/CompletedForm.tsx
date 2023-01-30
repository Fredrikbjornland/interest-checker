import React, { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import MapView, { Marker } from "react-native-maps"
import { FormValues } from "../interfaces"
import { Entypo } from "@expo/vector-icons"
import { stringToCurrency } from "../utils/stringToCurrency"
import Answer from "./Answer"

type CompletedFormProps = {
    completedForm: FormValues
}

export default function CompletedForm({ completedForm }: CompletedFormProps) {
    const [isOpen, setIsOpen] = useState<boolean>(true)

    return (
        <View className="relative px-4 pt-4 mt-4 bg-gray-700 rounded-lg shadow-large min-h-[40px]">
            {isOpen ? (
                <TouchableOpacity
                    className="absolute right-0 z-10 p-2"
                    onPress={() => setIsOpen(false)}
                >
                    <Entypo name="chevron-small-up" size={24} color="white" />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    className="absolute right-0 z-10 p-2"
                    onPress={() => setIsOpen(true)}
                >
                    <Entypo
                        className="absolute top-0 right-0 "
                        name="chevron-small-down"
                        size={24}
                        color="white"
                    />
                </TouchableOpacity>
            )}
            {isOpen && (
                <>
                    <Answer
                        isAnswered={completedForm.email}
                        label="Email adress"
                        answer={completedForm.email}
                    />
                    <Answer
                        isAnswered={completedForm.location}
                        label="The location you want delivery"
                    >
                        <MapView
                            className="w-full h-32"
                            initialRegion={{
                                latitude: completedForm.location?.latitude,
                                longitude: completedForm.location?.longitude,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421
                            }}
                        >
                            <Marker coordinate={completedForm.location} />
                        </MapView>
                    </Answer>
                    <Answer
                        isAnswered={completedForm.products}
                        label="Products you would like to get delivered"
                    >
                        <View className="flex flex-row flex-wrap justify-center">
                            {completedForm.products?.map((product: string, index: number) => (
                                <View className="px-2 py-1 mx-1 rounded-lg bg-green" key={index}>
                                    <Text className="font-semibold text-white">{product}</Text>
                                </View>
                            ))}
                        </View>
                    </Answer>
                    <Answer
                        isAnswered={completedForm.acceptablePrice}
                        label="Price you are willing to pay"
                        answer={
                            completedForm.acceptablePrice
                                ? stringToCurrency(completedForm.acceptablePrice, "NOK")
                                : undefined
                        }
                    />
                    <Answer
                        isAnswered={completedForm.additionalInfo}
                        label="Additional info"
                        answer={completedForm.additionalInfo}
                    />
                </>
            )}
        </View>
    )
}
