import React, { useState } from "react"
import DropDownPicker from "react-native-dropdown-picker"

import { Product } from "../interfaces"
import { products } from "../assets/products"
import { borderGray } from "../assets/colors"
export type ValueType = string | number | boolean

type DropdownProps = {
    text: string
    chosenProducts: string[]
    setProducts: (products: string[]) => void
}

export default function Dropdown({ text, chosenProducts, setProducts }: DropdownProps) {
    const [open, setOpen] = useState(false)
    const [items, setItems] = useState(products)
    // Suboptimal but had to use setvalue
    const [value, setValue] = useState(chosenProducts)

    const handleChange = (value: ValueType[] | null) => {
        setProducts(value as string[])
    }

    return (
        <DropDownPicker
            placeholder={text}
            multiple={true}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            onChangeValue={(value) => handleChange(value)}
            mode="BADGE"
            showBadgeDot={false}
            extendableBadgeContainer={true}
            dropDownContainerStyle={{
                borderColor: borderGray
            }}
            style={{
                borderColor: borderGray
            }}
            badgeStyle={{
                paddingVertical: 3,
                paddingHorizontal: 5
            }}
        />
    )
}
