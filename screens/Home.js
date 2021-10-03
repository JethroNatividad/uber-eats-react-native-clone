import React from 'react'
import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import HeaderTabs from '../components/HeaderTabs'
import Search from '../components/Search'

export default function Home() {
    return (
        <SafeAreaView style={{ paddingTop: StatusBar.currentHeight, backgroundColor: '#eee', flex: 1 }} >
            <View style={{ backgroundColor: '#fff', padding: 15 }}>
                <HeaderTabs />
                <Search />
            </View>
        </SafeAreaView >
    )
}
