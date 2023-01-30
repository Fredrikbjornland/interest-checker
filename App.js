import React from "react"
import { RecoilRoot } from "recoil"
import { Image, TouchableOpacity } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Form from "./views/Form"
import Landing from "./views/Landing"
import CompletedForms from "./views/CompletedForms"
import { grayBackground } from "./assets/colors"
import kyteLogo from "./images/kyte-logo-green.png"

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <RecoilRoot>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={({ navigation }) => ({
                        headerStyle: {
                            backgroundColor: grayBackground
                        },
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.navigate("Landing")}>
                                <Image source={kyteLogo} style={{ width: 50, height: 15 }} />
                            </TouchableOpacity>
                        )
                    })}
                >
                    <Stack.Screen name="Landing" component={Landing} options={{ title: "" }} />
                    <Stack.Screen name="Form" component={Form} options={{ title: "" }} />
                    <Stack.Screen
                        name="CompletedForms"
                        component={CompletedForms}
                        options={{ title: "" }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </RecoilRoot>
    )
}
