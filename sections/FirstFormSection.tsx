import React from "react"
import { Text, View } from "react-native"
import ControlledInput from "../components/ControlledInput"
import { AntDesign } from "@expo/vector-icons"
import MapInput from "../components/MapInput"
import Question from "../components/Question"

type FirstFormSectionProps = {
    methods: any
}

export default function FirstFormSection({ methods }: FirstFormSectionProps) {
    return (
        <>
            <Question
                label="Email"
                description="What email should we contact you on when we launch in your area"
            >
                <ControlledInput
                    name="email"
                    label="Email"
                    autoComplete={"off"}
                    icon={<AntDesign name="mail" size={18} color="white" />}
                    placeholder="axel@kyte.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    rules={{
                        required: "Email is required",
                        pattern: {
                            value: /\b[\w\\.+-]+@[\w\\.-]+\.\w{2,4}\b/,
                            message: "Must be formatted: john.doe@email.com"
                        }
                    }}
                />
            </Question>

            <Question
                label="Where should Kyte deliver to?"
                description="Move the marker to the palce you want Kyte to deliver"
            >
                <MapInput setValue={methods.setValue} />
            </Question>
        </>
    )
}
