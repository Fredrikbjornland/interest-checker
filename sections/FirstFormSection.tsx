import React from "react"
import ControlledInput from "../components/ControlledInput"
import { AntDesign } from "@expo/vector-icons"
import Question from "../components/Question"

export default function FirstFormSection() {
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
        </>
    )
}
