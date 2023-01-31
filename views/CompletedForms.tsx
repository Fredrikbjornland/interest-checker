import React from "react"
import { ScrollView, Text, View } from "react-native"
import { useRecoilState } from "recoil"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { Entypo } from "@expo/vector-icons"

import Button from "../components/Button"
import CompletedForm from "../components/CompletedForm"
import completedFormsAtom from "../recoil/forms/atom"
import { RootStackParamList } from "../interfaces"

export default function CompletedForms() {
    const [completedForms] = useRecoilState(completedFormsAtom)
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

    return (
        <ScrollView className="min-h-full p-6 bg-darkGray">
            <View className="pb-10">
                <View className="flex flex-row justify-between">
                    <Text className="text-2xl font-semibold text-white">Completed forms</Text>
                    <Button
                        size="medium"
                        text="New form"
                        onPress={() => navigation.navigate("Form")}
                        iconEnd={<Entypo name="plus" size={18} color="white" />}
                    />
                </View>
                {completedForms.map((completedForm, index: number) => (
                    <CompletedForm key={index} completedForm={completedForm} />
                ))}
            </View>
        </ScrollView>
    )
}
