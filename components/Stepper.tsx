import React, { useState } from "react"
import { SubmitErrorHandler, SubmitHandler } from "react-hook-form"
import { View } from "react-native"
import { useSetRecoilState } from "recoil"
import { FormValues, RootStackParamList } from "../interfaces"
import completedFormsAtom from "../recoil/forms/atom"
import Button from "./Button"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

type StepperProps = {
    children: React.ReactNode[]
    methods: any
}

export default function index({ children, methods }: StepperProps) {
    const [index, setIndex] = useState<number>(0)
    const setCompletedForms = useSetRecoilState(completedFormsAtom)
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

    const isFirstChild = () => index === 0
    const isLastChild = () => index === children.length - 1

    const onSubmit: SubmitHandler<FormValues> = (completedForm) => {
        setCompletedForms((oldForms) => [...oldForms, completedForm])
        navigation.navigate("CompletedForms")
        methods.reset()
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
                    <Button text="Back" outline onPress={() => setIndex(index - 1)} />
                )}
                {isLastChild() ? (
                    <Button text="Submit" onPress={methods.handleSubmit(onSubmit, onError)} />
                ) : (
                    <Button text="Next" onPress={() => setIndex(index + 1)} />
                )}
            </View>
        </View>
    )
}
