import { Tabs } from 'expo-router';
import { SymbolView } from 'expo-symbols';

import { useTheme } from '@/hooks/use-theme';

export default function TabsLayout() {
    const theme = useTheme();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.accent,
                tabBarInactiveTintColor: theme.textSecondary,
                tabBarStyle: {
                    backgroundColor: theme.background,
                    borderTopColor: theme.backgroundElement,
                },
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Domů',
                    tabBarIcon: ({ color }) => (
                        <SymbolView
                            name={{ ios: 'house.fill', android: 'home', web: 'home' }}
                            tintColor={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="tabule"
                options={{
                    title: 'Tabule',
                    tabBarIcon: ({ color }) => (
                        <SymbolView
                            name={{ ios: 'pencil.and.outline', android: 'edit', web: 'edit' }}
                            tintColor={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="hraci"
                options={{
                    title: 'Hráči',
                    tabBarIcon: ({ color }) => (
                        <SymbolView
                            name={{ ios: 'person.2.fill', android: 'group', web: 'group' }}
                            tintColor={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="nastaveni"
                options={{
                    title: 'Nastavení',
                    tabBarIcon: ({ color }) => (
                        <SymbolView
                            name={{ ios: 'gearshape.fill', android: 'settings', web: 'settings' }}
                            tintColor={color}
                            size={24}
                        />
                    ),
                }}
            />
            <Tabs.Screen name="soupeři" options={{ href: null }} />
            <Tabs.Screen name="sestava" options={{ href: null }} />
        </Tabs>
    );
}