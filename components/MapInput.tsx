import React, { useEffect, useState } from "react"
import { UseFormSetValue } from "react-hook-form"
import MapView, { Marker, MarkerDragStartEndEvent } from "react-native-maps"
import * as Location from "expo-location"
import { Platform, View } from "react-native"
import Device from "expo-device"

import { Coordinate, FormValues } from "../interfaces"

type MapInputProps = {
    setValue: UseFormSetValue<FormValues>
}

export default function MapInput({ setValue }: MapInputProps) {
    const [errorMsg, setErrorMsg] = useState<string | null>(null)
    const [markerCoordinates, setMarkerCoordinates] = useState<Coordinate>({
        latitude: 37.78825,
        longitude: -122.4324
    })
    const [initialCoordinates, setInitialCoordinates] = useState<Coordinate>({
        latitude: 37.78825,
        longitude: -122.4324
    })

    // Not that nessesary when you have showsUserLocationbut it's nice to have
    useEffect(() => {
        ;(async () => {
            /* @hide */
            if (Platform.OS === "android" && !Device.isDevice) {
                setErrorMsg(
                    "Oops, this will not work on Snack in an Android Emulator. Try it on your device!"
                )
                return
            }
            /* @end */
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied")
                return
            }

            let { coords } = await Location.getCurrentPositionAsync({})
            const { longitude, latitude } = coords
            setMarkerCoordinates({ longitude, latitude })
            setInitialCoordinates({ longitude, latitude })
        })()
    }, [])

    const handleMarkerDragEnd = (e: MarkerDragStartEndEvent) => {
        setMarkerCoordinates(e.nativeEvent.coordinate)
        setValue("location", e.nativeEvent.coordinate)
    }

    return (
        <View>
            <MapView
                className="w-full h-48"
                region={{ ...initialCoordinates, latitudeDelta: 0.5, longitudeDelta: 0.5 }}
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
