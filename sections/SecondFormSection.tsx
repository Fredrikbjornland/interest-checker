import React from "react"
import { Text, View } from "react-native"
import ControlledInput from "../components/ControlledInput"
import { AntDesign } from "@expo/vector-icons"
import MapInput from "../components/MapInput"
import Dropdown from "../components/Dropdown"

type FirstFormSectionProps = {
    methods: any
}

export default function FirstFormSection({ methods }: FirstFormSectionProps) {
    const setProducts = (products: string[]) => {
        methods.setValue("products", products)
    }
    return (
        <View>
            <View className="z-10 mt-4">
                <Text className="mb-1 font-semibold text-white">
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
                icon={<Text className="text-gray-200">NOK</Text>}
                keyboardType="number-pad"
            />

            <ControlledInput
                name="additionalInfo"
                label="Add more info"
                placeholder="Enter your thoughts here..."
                rules={{
                    maxLength: 400
                }}
            />
        </View>
    )
}
