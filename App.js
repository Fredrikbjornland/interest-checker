import React from "react"
import { RecoilRoot } from "recoil"
import { Image, TouchableOpacity } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Form from "./views/Form"
import Landing from "./views/Landing"
import { grayBackground } from "./assets/colors"
import CompletedForms from "./views/CompletedForms"
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
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "bold"
                        },
                        headerLeft: () => (
                            <TouchableOpacity onPress={navigation.goBack}>
                                <Image source={kyteLogo} style={{ width: 50, height: 15 }} />
                            </TouchableOpacity>
                        )
                    })}
                >
                    <Stack.Screen name="Home" component={Landing} />
                    <Stack.Screen name="Form" component={Form} />
                    <Stack.Screen name="CompletedForms" component={CompletedForms} />
                </Stack.Navigator>
            </NavigationContainer>
        </RecoilRoot>
    )
}
