import React from "react"
import { UseFormSetValue } from "react-hook-form"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import { Coordinate, FormValues } from "../interfaces"

type MapInputProps = {
    setValue: UseFormSetValue<FormValues>
}

const LocationSearch = ({ setValue }: MapInputProps) => {
    return (
        <GooglePlacesAutocomplete
            placeholder="Search"
            fetchDetails
            styles={{
                textInputContainer: {
                    backgroundColor: "transparent"
                },
                textInput: {
                    height: 38,
                    color: "#5d5d5d",
                    fontSize: 16,
                    // backgroundColor: "transparent",
                    borderColor: "#ebebeb"
                },
                predefinedPlacesDescription: {
                    color: "#1faadb"
                }
            }}
            onFail={(error) => console.error(error)}
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                const location = details?.geometry?.location
                if (!location?.lat || !location?.lng) return
                const coordinate: Coordinate = { latitude: location.lat, longitude: location.lng }
                setValue("location", coordinate)
            }}
            query={{
                key: "AIzaSyC3tjnD2uaJn0u5oIpRK7mYpuEFwtX28mA",
                language: "en"
            }}
        />
    )
}

export default LocationSearch
