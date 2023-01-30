import React, { useState } from "react"
import Navbar from "../components/Navbar"
import { useForm, FormProvider, SubmitErrorHandler, SubmitHandler } from "react-hook-form"
import { ScrollView, Text, View } from "react-native"
import Button from "../components/Button"
import { AntDesign } from "@expo/vector-icons"
import MapInput from "../components/MapInput"
import { FormValues, Product, RootStackParamList } from "../interfaces"
import ControlledInput from "../components/ControlledInput"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { useSetRecoilState } from "recoil"
import completedFormsAtom from "../recoil/forms/atom"
import Dropdown from "../components/Dropdown"

type Props = NativeStackScreenProps<RootStackParamList, "Form", "MyStack">

export default function Form({ navigation }: Props) {
    const setCompletedForms = useSetRecoilState(completedFormsAtom)

    const { ...methods } = useForm<FormValues>({
        defaultValues: {} as FormValues
    })
    const onSubmit: SubmitHandler<FormValues> = (completedForm) => {
        setCompletedForms((oldForms) => [...oldForms, completedForm])
        navigation.navigate("CompletedForms")
        methods.reset()
    }

    const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
        return console.log("error", errors)
    }

    const setProducts = (products: string[]) => {
        methods.setValue("products", products)
    }

    return (
        <View className="min-h-full p-8 bg-slate-50">
            <FormProvider {...methods}>
                <ControlledInput
                    name="email"
                    label="Email"
                    autoComplete={"off"}
                    icon={<AntDesign name="mail" size={18} color="gray" />}
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
                {/* <View className="mt-4">
                    <Text className="mb-1 font-semibold">
                        Which location do you want us to delivery to?
                    </Text>
                    <MapInput setValue={methods.setValue} />
                </View> */}
                <View className="z-10 mt-4">
                    <Text className="mb-1 font-semibold">
                        What products would you to get delivered?{" "}
                    </Text>
                    <Dropdown
                        text="Select products"
                        setProducts={setProducts}
                        chosenProducts={methods.getValues("products")}
                    />
                </View>
                <ControlledInput
                    name="acceptablePrice"
                    label="Acceptable price for this service"
                    placeholder="1,000"
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
            <View className="flex items-center mt-4 mb-12">
                <Button text="Submit" onPress={methods.handleSubmit(onSubmit, onError)} />
            </View>
        </View>
    )
}
