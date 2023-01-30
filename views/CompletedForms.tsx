import React from "react"
import { ScrollView, Text, View } from "react-native"
import { useRecoilState } from "recoil"
import CompletedForm from "../components/CompletedForm"
import completedFormsAtom from "../recoil/forms/atom"

export default function CompletedForms() {
    const [completedForms] = useRecoilState(completedFormsAtom)

    return (
        <ScrollView className="min-h-full p-6 bg-darkGray">
            <View className="pb-10">
                <Text className="text-2xl font-semibold text-white">Completed forms</Text>
                {completedForms.map((completedForm, index: number) => (
                    <CompletedForm key={index} completedForm={completedForm} />
                ))}
            </View>
        </ScrollView>
    )
}
