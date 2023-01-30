import React from "react"
import { Text, View } from "react-native"
import { useRecoilState } from "recoil"
import CompletedForm from "../components/CompletedForm"
import Layout from "../components/Layout"
import completedFormsAtom from "../recoil/forms/atom"

export default function CompletedForms() {
    const [completedForms] = useRecoilState(completedFormsAtom)

    return (
        <Layout>
            <View className="p-8">
                <Text className="text-2xl font-semibold text-white">Completed Forms</Text>
                <View className="">
                    {completedForms.map((completedForm, index: number) => (
                        <CompletedForm key={index} completedForm={completedForm} />
                    ))}
                </View>
            </View>
        </Layout>
    )
}
