import React from "react"
import { ScrollView, Text } from "react-native"
import { useRecoilState } from "recoil"
import CompletedForm from "../components/CompletedForm"
import Layout from "../components/Layout"
import completedFormsAtom from "../recoil/forms/atom"

export default function CompletedForms() {
    const [completedForms] = useRecoilState(completedFormsAtom)

    return (
        <Layout>
            <ScrollView>
                <Text className="text-2xl font-semibold text-white">Completed forms</Text>
                {completedForms.map((completedForm, index: number) => (
                    <CompletedForm key={index} completedForm={completedForm} />
                ))}
            </ScrollView>
        </Layout>
    )
}
