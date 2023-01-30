import React from "react"
import { Text, View } from "react-native"
import MapView, { Marker } from "react-native-maps"
import { FormValues } from "../interfaces"

type CompletedFormProps = {
    completedForm: FormValues
}

export default function CompletedForm({ completedForm }: CompletedFormProps) {
    return (
        <View className="p-4 mt-4 bg-white rounded-lg shadow-large">
            <Text className="font-semibold">Email adress</Text>
            <Text>{completedForm.email}</Text>
            <Text className="font-semibold">The location you want delivery</Text>
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
            <Text>Products you would like to get delivered</Text>
            <View className="flex flex-row">
                {completedForm.products.map((product: string, index: number) => (
                    <View className="px-2 py-1 m-1 rounded-lg bg-green" key={index}>
                        <Text className="font-semibold text-white">{product}</Text>
                    </View>
                ))}
            </View>
            <Text className="font-semibold">Price willing to pay</Text>

            <Text>{completedForm.acceptablePrice}</Text>
            <Text className="font-semibold">Additional info</Text>

            <Text>{completedForm.additionalInfo}</Text>
        </View>
    )
}
