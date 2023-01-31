import React from "react"
import { useForm, FormProvider } from "react-hook-form"

import { FormValues } from "../interfaces"
import Stepper from "../components/Stepper"
import FirstFormSection from "../sections/FirstFormSection"
import SecondFormSection from "../sections/SecondFormSection"
import { View } from "react-native"
import ThirdFormSection from "../sections/ThirdFormSection"

export default function Form() {
    const { ...methods } = useForm<FormValues>({
        defaultValues: {} as FormValues
    })

    return (
        <View className="min-h-full p-6 bg-darkGray">
            <FormProvider {...methods}>
                <Stepper methods={methods}>
                    <FirstFormSection />
                    <SecondFormSection methods={methods} />
                    <ThirdFormSection methods={methods} />
                </Stepper>
            </FormProvider>
        </View>
    )
}
