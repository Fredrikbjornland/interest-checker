import React from "react"
import { Text, View } from "react-native"
import MapView, { Marker } from "react-native-maps"
import { FormValues } from "../interfaces"

type CompletedFormProps = {
    completedForm: FormValues
}

export default function CompletedForm({ completedForm }: CompletedFormProps) {
    console.log(completedForm)
    return (
        <View className="p-4 mt-4 bg-white rounded-lg shadow-large">
            <Text>{completedForm.email}</Text>
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
            <Text>{completedForm.acceptablePrice}</Text>
            <Text>{completedForm.additionalInfo}</Text>
        </View>
    )
}
