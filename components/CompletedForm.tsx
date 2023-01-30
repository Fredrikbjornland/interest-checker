import React, { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import MapView, { Marker } from "react-native-maps"
import { FormValues } from "../interfaces"
import { Entypo } from "@expo/vector-icons"
import { stringToCurrency } from "../utils/stringToCurrency"

type CompletedFormProps = {
    completedForm: FormValues
}

export default function CompletedForm({ completedForm }: CompletedFormProps) {
    const [isOpen, setIsOpen] = useState<boolean>(true)

    return (
        <View className="relative p-4 mt-4 bg-white rounded-lg shadow-large">
            {isOpen ? (
                <TouchableOpacity
                    className="absolute right-0 z-10 p-2"
                    onPress={() => setIsOpen(false)}
                >
                    <Entypo name="chevron-small-up" size={24} color="gray" />
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
                        color="gray"
                    />
                </TouchableOpacity>
            )}
            {isOpen && (
                <>
                    <Text className="my-1 font-semibold">Email adress</Text>
                    <Text>{completedForm.email}</Text>
                    <Text className="my-1 font-semibold">The location you want delivery</Text>
                    {completedForm.location && (
                        <MapView
                            className="w-full h-32"
                            initialRegion={{
                                latitude: completedForm.location.latitude,
                                longitude: completedForm.location.longitude,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421
                            }}
                        >
                            <Marker coordinate={completedForm.location} />
                        </MapView>
                    )}
                    {completedForm.products && (
                        <>
                            <Text className="my-1 font-semibold">
                                Products you would like to get delivered
                            </Text>
                            <View className="flex flex-row">
                                {completedForm.products?.map((product: string, index: number) => (
                                    <View className="px-2 py-1 m-1 rounded-lg bg-green" key={index}>
                                        <Text className="font-semibold text-white">{product}</Text>
                                    </View>
                                ))}
                            </View>
                        </>
                    )}
                    {completedForm.acceptablePrice && (
                        <View>
                            <Text className="my-1 font-semibold">Price willing to pay</Text>
                            <Text>{stringToCurrency(completedForm.acceptablePrice, "NOK")}</Text>
                        </View>
                    )}

                    {completedForm.additionalInfo && (
                        <View>
                            <Text className="my-1 font-semibold ">Additional info</Text>
                            <Text>{completedForm.additionalInfo}</Text>
                        </View>
                    )}
                </>
            )}
        </View>
    )
}
