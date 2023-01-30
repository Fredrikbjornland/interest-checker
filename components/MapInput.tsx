import React, { useState } from "react"
import { UseFormSetValue } from "react-hook-form"
import { View } from "react-native"
import MapView, { Marker, MarkerDragStartEndEvent } from "react-native-maps"
import { Coordinate, FormValues } from "../interfaces"

type MapInputProps = {
    setValue: UseFormSetValue<FormValues>
}
export default function MapInput({ setValue }: MapInputProps) {
    const [markerCoordinates, setMarkerCoordinates] = useState<Coordinate>({
        latitude: 37.78825,
        longitude: -122.4324
    })

    const handleMarkerDragEnd = (e: MarkerDragStartEndEvent) => {
        setMarkerCoordinates(e.nativeEvent.coordinate)
        setValue("location", e.nativeEvent.coordinate)
    }

    return (
        <View>
            <MapView
                className="w-full h-64"
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            >
                <Marker
                    draggable
                    coordinate={markerCoordinates}
                    onDragEnd={(e) => handleMarkerDragEnd(e)}
                />
            </MapView>
        </View>
    )
}
