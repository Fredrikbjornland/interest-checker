import React from "react"
import { View } from "react-native"

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return <View className="min-h-full bg-darkGray">{children}</View>
}
