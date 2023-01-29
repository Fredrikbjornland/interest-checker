import React, { useState } from "react"
import Navbar from "../components/Navbar"
import { useForm, FormProvider, SubmitErrorHandler, SubmitHandler } from "react-hook-form"
import { Text, TextInput, View } from "react-native"
import Button from "../components/Button"
import { AntDesign } from "@expo/vector-icons"
import MapInput from "../components/MapInput"
import { FormValues, RootStackParamList } from "../interfaces"
import ControlledInput from "../components/ControlledInput"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useSetRecoilState } from "recoil"
import completedFormsAtom from "../recoil/forms/atom"

type Props = NativeStackScreenProps<RootStackParamList, "Form", "MyStack">

export default function Form({ navigation }: Props) {
    const setCompletedForms = useSetRecoilState(completedFormsAtom)

    const { ...methods } = useForm<FormValues>({
        defaultValues: {} as FormValues
    })
    const onSubmit: SubmitHandler<FormValues> = (completedForm) => {
        setCompletedForms((oldForms) => [...oldForms, completedForm])
        navigation.navigate("CompletedForms")
    }

    const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
        return console.log("error", errors)
    }
    return (
        <View className="min-h-full p-8 bg-slate-50">
            <Navbar />
            <View className="">
                <FormProvider {...methods}>
                    <Text className="font-semibold">
                        Which location do you want us to delivery to?
                    </Text>
                    <MapInput setValue={methods.setValue} />
                    <ControlledInput
                        name="email"
                        label="Email"
                        autoComplete={"off"}
                        icon={<AntDesign name="mail" size={18} color="gray" />}
                        placeholder="axel@kyte.com"
                        keyboardType="email-address"
                        rules={{
                            required: "Email is required",
                            pattern: {
                                value: /\b[\w\\.+-]+@[\w\\.-]+\.\w{2,4}\b/,
                                message: "Must be formatted: john.doe@email.com"
                            }
                        }}
                    />
                    <ControlledInput
                        name="acceptablePrice"
                        label="Acceptable price for this service"
                        placeholder="1000"
                        icon={<Text className="text-gray-600">NOK</Text>}
                        keyboardType="numeric"
                    />
                    <ControlledInput
                        name="additionalInfo"
                        label="Add more info"
                        placeholder="Enter your thoughts here..."
                        rules={{
                            maxLength: 400
                        }}
                    />
                </FormProvider>

                <Button text="Submit" onPress={methods.handleSubmit(onSubmit, onError)} />
            </View>
        </View>
    )
}
