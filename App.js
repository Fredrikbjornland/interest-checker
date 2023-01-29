import Landing from "./views/Landing"
import Form from "./views/Form"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Landing} />
                <Stack.Screen name="Form" component={Form} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
