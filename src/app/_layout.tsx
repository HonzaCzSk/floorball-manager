import { Tabs } from 'expo-router';

export default function RootLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen name="index" />
            <Tabs.Screen name="(tabs)" />
        </Tabs>
    );
}