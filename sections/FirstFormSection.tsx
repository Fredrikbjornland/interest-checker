import React from "react"
import { Text, View } from "react-native"
import ControlledInput from "../components/ControlledInput"
import { AntDesign } from "@expo/vector-icons"
import MapInput from "../components/MapInput"

type FirstFormSectionProps = {
    methods: any
}

export default function FirstFormSection({ methods }: FirstFormSectionProps) {
    return (
        <View>
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
            <View className="mt-4">
                <Text className="mb-1 font-semibold text-white">
                    Which location do you want us to delivery to?
                </Text>
                <MapInput setValue={methods.setValue} />
            </View>
        </View>
    )
}
