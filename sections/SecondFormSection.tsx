import React from "react"
import { Text, View } from "react-native"
import ControlledInput from "../components/ControlledInput"
import { AntDesign } from "@expo/vector-icons"
import MapInput from "../components/MapInput"
import Dropdown from "../components/Dropdown"
import Question from "../components/Question"

type FirstFormSectionProps = {
    methods: any
}

export default function FirstFormSection({ methods }: FirstFormSectionProps) {
    const setProducts = (products: string[]) => {
        methods.setValue("products", products)
    }
    return (
        <>
            {/* Need this z index to keep dropdown menu above other input fields for some reason */}
            <View className="z-10">
                <Question label="What products would you like to get delivered?">
                    <Dropdown
                        text="Select products"
                        setProducts={setProducts}
                        chosenProducts={methods.getValues("products")}
                    />
                </Question>
            </View>
            <Question
                label="Acceptable price for this service"
                description="How much would you be willing to pay as a delivery fee to this location?"
            >
                <ControlledInput
                    name="acceptablePrice"
                    label="Acceptable price for this service"
                    placeholder="1,000"
                    icon={<Text className="text-gray-200">NOK</Text>}
                    keyboardType="number-pad"
                />
            </Question>
            <Question label="Additional info" description="Do you want to tell us anything else?">
                <ControlledInput
                    name="additionalInfo"
                    label="Add more info"
                    placeholder="Enter your thoughts here..."
                    rules={{
                        maxLength: 400
                    }}
                />
            </Question>
        </>
    )
}
