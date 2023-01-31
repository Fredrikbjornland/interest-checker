import React, { useState } from "react"
import { View } from "react-native"
import { useSetRecoilState } from "recoil"
import { SubmitErrorHandler, SubmitHandler, UseFormReturn } from "react-hook-form"
import completedFormsAtom from "../recoil/forms/atom"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

import { FormValues, RootStackParamList } from "../interfaces"
import Button from "./Button"

type StepperProps = {
    children: React.ReactNode[]
    methods: UseFormReturn<FormValues>
}

export default function index({ children, methods }: StepperProps) {
    const [index, setIndex] = useState<number>(0)
    const setCompletedForms = useSetRecoilState(completedFormsAtom)
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

    const isFirstChild = () => index === 0
    const isLastChild = () => index === children.length - 1

    const onSubmit: SubmitHandler<FormValues> = (completedForm) => {
        setCompletedForms((oldForms) => [...oldForms, completedForm])
        methods.reset()
        navigation.navigate("CompletedForms")
    }

    const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
        return console.log("error", errors)
    }

    return (
        <View>
            <View key={index}>{children[index]}</View>
            <View className="flex flex-row items-center justify-between px-8 mt-8">
                {isFirstChild() ? (
                    <View />
                ) : (
                    <Button size="large" text="Back" outline onPress={() => setIndex(index - 1)} />
                )}
                {isLastChild() ? (
                    <Button
                        size="large"
                        text="Submit"
                        onPress={methods.handleSubmit(onSubmit, onError)}
                    />
                ) : (
                    <Button size="large" text="Next" onPress={() => setIndex(index + 1)} />
                )}
            </View>
        </View>
    )
}
