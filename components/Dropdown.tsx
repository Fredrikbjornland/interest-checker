import React from "react"
import { MultipleSelectList } from "react-native-dropdown-select-list"

type DropdownProps = {}

export default function Dropdown({}: DropdownProps) {
    const [selected, setSelected] = React.useState([])

    const data = [
        { key: "1", value: "Mobiles" },
        { key: "2", value: "Appliances" },
        { key: "3", value: "Cameras" },
        { key: "4", value: "Computers" },
        { key: "5", value: "Vegetables" },
        { key: "6", value: "Diary Products" },
        { key: "7", value: "Drinks" }
    ]

    return (
        <MultipleSelectList
            setSelected={(val: any) => setSelected(val)}
            data={data}
            save="value"
            onSelect={() => console.log(selected)}
            label="Categories"
        />
    )
}
