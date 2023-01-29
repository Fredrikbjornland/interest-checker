import React from "react"
import Navbar from "../components/Navbar"
import { useForm, Controller } from "react-hook-form"
import { Text, View, TextInput } from "react-native"
import Button from "../components/Button"
import InputWithIcon from "../components/InputWithIcon"
import { AntDesign } from "@expo/vector-icons"
import Input from "../components/Input"
import Dropdown from "../components/Dropdown"

export default function Landing() {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            email: "",
            location: "",
            products: [],
            aditionalInfo: ""
        }
    })
    const onSubmit = (data: any) => console.log(data)
    return (
        <View className="h-full p-12 bg-slate-50">
            <Navbar />
            <View className="">
                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <>
                            <Text className="font-semibold">Email</Text>
                            <InputWithIcon
                                icon={<AntDesign name="mail" size={18} color="gray" />}
                                placeholder="alex@kyte.com"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        </>
                    )}
                    name="email"
                />
                {errors.email && <Text>This is required.</Text>}
                <Controller
                    control={control}
                    rules={{
                        maxLength: 100
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <>
                            <Text className="font-semibold">Products we should deliver</Text>
                            <Dropdown />
                        </>
                    )}
                    name="aditionalInfo"
                />
                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <>
                            <Text className="font-semibold">Price willing to pay</Text>
                            <InputWithIcon
                                icon={<Text className="text-gray-600">Kr</Text>}
                                placeholder="10000"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                isNumber
                            />
                        </>
                    )}
                    name="email"
                />
                <Controller
                    control={control}
                    rules={{
                        maxLength: 100
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <>
                            <Text className="font-semibold">Add more info</Text>
                            <Input
                                placeholder="Enter your thoughts here..."
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        </>
                    )}
                    name="aditionalInfo"
                />
                <Button text="Submit" onPress={handleSubmit(onSubmit)} />
            </View>
        </View>
    )
}
