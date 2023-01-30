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
        value: "Appliances",
        label: "Appliances",
        icon: () => <FontAwesome5 name="hamburger" size={14} color={mainGreen} />
    },

    {
        key: "3",
        value: "Cameras",
        label: "Cameras",
        icon: () => <AntDesign name="check" size={14} color={mainGreen} />
    },
    {
        key: "4",
        value: "Groceries",
        label: "Groceries",
        icon: () => <MaterialIcons name="local-grocery-store" color={mainGreen} />
    }
]
