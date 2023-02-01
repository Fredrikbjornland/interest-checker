import React from "react"
import { UseFormSetValue } from "react-hook-form"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import { Coordinate, FormValues } from "../interfaces"
import Config from "react-native-config"

type MapInputProps = {
    setValue: UseFormSetValue<FormValues>
}

const LocationSearch = ({ setValue }: MapInputProps) => {
    console.log(Config.REACT_APP_GOOGLE_SEARCH_API_TOKEN)
    console.log(Config)
    console.log(process.env)
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
                key: Config.GOOGLE_SEARCH_API_TOKEN,
                language: "en"
            }}
        />
    )
}

export default LocationSearch
