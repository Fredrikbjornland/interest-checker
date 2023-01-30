import React from "react"
import { View } from "react-native"

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return <View className="min-h-full p-6 bg-darkGray">{children}</View>
}
