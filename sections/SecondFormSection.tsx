import React from "react"
import MapInput from "../components/LocationInput"
import Question from "../components/Question"
import { StepProps } from "../interfaces"

export default function FirstFormSection({ methods }: StepProps) {
    return (
        <Question label="Where should Kyte deliver to?">
            <MapInput setValue={methods.setValue} />
        </Question>
    )
}
