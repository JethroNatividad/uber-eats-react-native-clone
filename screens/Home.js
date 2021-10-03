import React from 'react'
import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import HeaderTabs from '../components/HeaderTabs'

export default function Home() {
    return (
        <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }} >
            <HeaderTabs />
        </SafeAreaView >
    )
}
