import React from "react"
import { AntDesign } from "@expo/vector-icons"
import { FontAwesome5 } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"

import { Product } from "../interfaces"
import { mainGreen } from "./colors"

export const products: Product[] = [
    {
        key: "1",
        value: "Mobiles",
        label: "Mobiles",
        icon: () => <AntDesign name="mobile1" size={14} color={mainGreen} />
    },
    {
        key: "2",
        value: "Medicine",
        label: "Medicine",
        icon: () => <AntDesign name="medicinebox" size={14} color={mainGreen} />
    },
    {
        key: "3",
        value: "Food",
        label: "Food",
        icon: () => <FontAwesome5 name="hamburger" size={14} color={mainGreen} />
    },

    {
        key: "4",
        value: "Cameras",
        label: "Cameras",
        icon: () => <AntDesign name="camera" size={14} color={mainGreen} />
    },
    {
        key: "5",
        value: "Groceries",
        label: "Groceries",
        icon: () => <MaterialIcons name="local-grocery-store" color={mainGreen} />
    }
]
