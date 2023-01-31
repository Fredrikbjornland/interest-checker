import { Keyboard, TouchableWithoutFeedback, View } from "react-native"
import React from "react"

type HideKeyboardProps = {
    children: React.ReactNode
}

const HideKeyboard = ({ children }: HideKeyboardProps) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {/* Need this view to make sure the keyboard hides when clicking on the input fields */}
        <View>{children}</View>
    </TouchableWithoutFeedback>
)

export default HideKeyboard
