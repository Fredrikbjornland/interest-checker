import React from "react"
import { Text, View } from "react-native"
import { useRecoilState } from "recoil"
import CompletedForm from "../components/CompletedForm"
import completedFormsAtom from "../recoil/forms/atom"

export default function CompletedForms() {
    const [completedForms] = useRecoilState(completedFormsAtom)

    return (
        <View className="p-8">
            <Text className="text-2xl">Completed Forms</Text>
            <View className="">
                {completedForms.map((completedForm, index: number) => (
                    <CompletedForm key={index} completedForm={completedForm} />
                ))}
            </View>
        </View>
    )
}
