export type Coordinate = {
    latitude: number
    longitude: number
}

export type FormValues = {
    email: string
    location: Coordinate
    products: string[]
    acceptablePrice: number
    additionalInfo: string
}

export type RootStackParamList = {
    Landing: undefined
    Form: undefined
    CompletedForms: undefined
}
