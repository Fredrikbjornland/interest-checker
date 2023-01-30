import React, { useState } from "react"
import DropDownPicker from "react-native-dropdown-picker"
import { borderGray, mainGreen } from "../assets/colors"
import { products } from "../assets/products"

type DropdownProps = {
    text: string
}

export default function Dropdown({ text }: DropdownProps) {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(null)
    const [items, setItems] = useState(products)

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
