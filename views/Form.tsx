import React from "react"
import { useForm, FormProvider } from "react-hook-form"

import { FormValues } from "../interfaces"
import Layout from "../components/Layout"
import Stepper from "../components/Stepper"
import FirstFormSection from "../sections/FirstFormSection"
import SecondFormSection from "../sections/SecondFormSection"

export default function Form() {
    const { ...methods } = useForm<FormValues>({
        defaultValues: {} as FormValues
    })

    return (
        <Layout>
            <FormProvider {...methods}>
                <Stepper methods={methods}>
                    <FirstFormSection methods={methods} />
                    <SecondFormSection methods={methods} />
                </Stepper>
            </FormProvider>
        </Layout>
    )
}
