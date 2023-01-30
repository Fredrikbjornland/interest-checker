import React from "react"
import { Text, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"

import Button from "../components/Button"
import Layout from "../components/Layout"
import { RootStackParamList } from "../interfaces"

type Props = NativeStackScreenProps<RootStackParamList, "Landing", "MyStack">

export default function Landing({ navigation }: Props) {
    const navigateToForm = () => navigation.navigate("Form")

    return (
        <Layout>
            <View className="h-full p-12 ">
                <View className="flex flex-col items-center justify-center h-full pt-8 space-y-4">
                    <View>
                        <Text className="mb-2 text-4xl font-semibold text-white">Kyte</Text>
                        <Text className="mb-12 font-semibold text-slate-200 text-large">
                            Instant drone delivery
                        </Text>
                    </View>
                    <Button
                        text="I want Kyte"
                        onPress={navigateToForm}
                        iconEnd={<AntDesign name="arrowright" size={16} color="white" />}
                    />
                </View>
            </View>
        </Layout>
    )
}
