import React from "react"
import { RecoilRoot } from "recoil"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Form from "./views/Form"
import Landing from "./views/Landing"
import CompletedForms from "./views/CompletedForms"

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <RecoilRoot>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Landing} />
                    <Stack.Screen name="Form" component={Form} />
                    <Stack.Screen name="CompletedForms" component={CompletedForms} />
                </Stack.Navigator>
            </NavigationContainer>
        </RecoilRoot>
    )
}
