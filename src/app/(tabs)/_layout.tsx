import { Tabs } from 'expo-router';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="index" options={{ title: 'Domů' }} />
            <Tabs.Screen name="tabule" options={{ title: 'Tabule' }} />
            <Tabs.Screen name="hraci" options={{ title: 'Hráči' }} />
            <Tabs.Screen name="nastaveni" options={{ title: 'Nastavení' }} />
            <Tabs.Screen name="soupeři" options={{ href: null }} />
            <Tabs.Screen name="sestava" options={{ href: null }} />
        </Tabs>
    );
}