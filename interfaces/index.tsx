import { UseFormReturn } from "react-hook-form"

export type Coordinate = {
    latitude: number
    longitude: number
}

export type FormValues = {
    email: string
    location: Coordinate
    products: string[]
    acceptablePrice: number
    additionalInfo?: string
}

export type RootStackParamList = {
    Landing: undefined
    Form: undefined
    CompletedForms: undefined
}

export type Product = {
    key: string
    label: string
    value: string
    // Call back function to fit the interface of the dropdown component
    icon: () => JSX.Element
}

export type StepProps = {
    methods: UseFormReturn<FormValues>
}
