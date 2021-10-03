import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState(0)
    console.log(activeTab)
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Button isActive={activeTab === 0} onPress={() => setActiveTab(0)}>Delivery</Button>
            <Button isActive={activeTab === 1} onPress={() => setActiveTab(1)}>Pickup</Button>
        </View>
    )
}

function Button({ children, isActive, onPress }) {
    const styles = {
        touchableOpacity: { backgroundColor: isActive ? 'black' : 'white', paddingHorizontal: 16, paddingVertical: 6, borderRadius: 25, fontWeight: '900' },
        text: { color: isActive ? 'white' : 'black', fontSize: 15 }
    }
    return (
        <TouchableOpacity style={styles.touchableOpacity} onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )
}
