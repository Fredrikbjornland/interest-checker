import React from "react"
import { useSetRecoilState } from "recoil"
import completedFormsAtom from "../recoil/forms/atom"
import { useForm, FormProvider, SubmitErrorHandler, SubmitHandler } from "react-hook-form"
import { ScrollView, Text, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

import { FormValues, RootStackParamList } from "../interfaces"
import Button from "../components/Button"
import MapInput from "../components/MapInput"
import ControlledInput from "../components/ControlledInput"
import Dropdown from "../components/Dropdown"
import Layout from "../components/Layout"
import Stepper from "../components/Stepper"
import FirstFormSection from "../sections/FirstFormSection"
import SecondFormSection from "../sections/SecondFormSection"

type Props = NativeStackScreenProps<RootStackParamList, "Form", "MyStack">

export default function Form({ navigation }: Props) {
    const { ...methods } = useForm<FormValues>({
        defaultValues: {} as FormValues
    })

    return (
        <Layout>
            <View className="p-6">
                <FormProvider {...methods}>
                    <Stepper methods={methods}>
                        <FirstFormSection methods={methods} />
                        <SecondFormSection methods={methods} />
                    </Stepper>
                </FormProvider>
            </View>
        </Layout>
    )
}
