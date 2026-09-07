import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppBrand } from '@/components/home/app-brand';
import { ClubHeader } from '@/components/home/club-header';
import { HomeTile } from '@/components/home/home-tile';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function Domu() {
    const router = useRouter();
    const theme = useTheme();

    return (
        <SafeAreaView
            style={[styles.safeArea, { backgroundColor: theme.background }]}
            edges={['top', 'left', 'right']}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
                <AppBrand />

                <View style={[styles.divider, { backgroundColor: theme.backgroundElement }]} />

                <ClubHeader />

                <HomeTile
                    title="Taktická tabule"
                    subtitle="Kresli formace a taktiky"
                    icon={{ ios: 'pencil.and.outline', android: 'edit', web: 'edit' }}
                    primary
                    onPress={() => router.push('/tabule')}
                />

                <View style={styles.row}>
                    <HomeTile
                        title="Soupiska"
                        subtitle="18 hráčů"
                        icon={{ ios: 'person.2.fill', android: 'group', web: 'group' }}
                        onPress={() => router.push('/hraci')}
                        style={styles.halfTile}
                    />
                    <HomeTile
                        title="Soupeři"
                        subtitle="3 týmy"
                        icon={{ ios: 'binoculars.fill', android: 'visibility', web: 'visibility' }}
                        onPress={() => router.push('/soupeři')}
                        style={styles.halfTile}
                    />
                </View>

                <HomeTile
                    title="Přehled sestavy"
                    subtitle="Aktivní formace a náhradníci"
                    icon={{ ios: 'person.3.fill', android: 'groups', web: 'groups' }}
                    onPress={() => router.push('/sestava')}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    content: {
        padding: Spacing.four,
        gap: Spacing.four,
    },
    divider: {
        height: 1,
    },
    row: {
        flexDirection: 'row',
        gap: Spacing.three,
    },
    halfTile: {
        flex: 1,
    },
});