import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ClubColorsRow } from '@/components/settings/club-colors-row';
import { LogoPicker, type LogoContrast } from '@/components/settings/logo-picker';
import { SettingsRow } from '@/components/settings/settings-row';
import { SettingsSection } from '@/components/settings/settings-section';
import { SegmentedControl } from '@/components/shared/segmented-control';
import { ThemedText } from '@/components/shared/themed-text';
import { MaxContentWidth, Spacing } from '@/constants/theme';

type DisplayMode = 'light' | 'dark' | 'system';
type Language = 'cz' | 'en';

export default function Nastaveni() {
    // TODO: wire these to real persisted app-wide state once a settings store exists;
    // for now this screen only reflects local UI state.
    const [displayMode, setDisplayMode] = useState<DisplayMode>('system');
    const [language, setLanguage] = useState<Language>('cz');
    const [logoContrast, setLogoContrast] = useState<LogoContrast>('white');

    return (
        <ScrollView contentContainerStyle={styles.content}>
            <View style={styles.inner}>
                <ThemedText type="subtitle" style={styles.title}>
                    Nastavení
                </ThemedText>

                <SettingsSection label="Zobrazení">
                    <SettingsRow
                        title="Motiv aplikace"
                        hint="Ovlivňuje barvy v celé aplikaci"
                        control={
                            <SegmentedControl
                                value={displayMode}
                                onChange={setDisplayMode}
                                options={[
                                    { value: 'light', label: 'Světlý' },
                                    { value: 'dark', label: 'Tmavý' },
                                    { value: 'system', label: 'Systém' },
                                ]}
                            />
                        }
                    />
                </SettingsSection>

                <SettingsSection label="Jazyk">
                    <SettingsRow
                        title="Jazyk rozhraní"
                        control={
                            <SegmentedControl
                                value={language}
                                onChange={setLanguage}
                                options={[
                                    { value: 'cz', label: 'Čeština' },
                                    { value: 'en', label: 'English' },
                                ]}
                            />
                        }
                    />
                </SettingsSection>

                <SettingsSection label="Klubové logo">
                    <LogoPicker clubName="Florbal Hradec Králové" contrast={logoContrast} onContrastChange={setLogoContrast} />
                </SettingsSection>

                <SettingsSection label="Klubové barvy">
                    <ClubColorsRow
                        colors={[
                            { label: 'Hlavní', hex: '#000000' },
                            { label: 'Doplňková', hex: '#FFFFFF' },
                        ]}
                    />
                </SettingsSection>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    content: {
        paddingVertical: Spacing.five,
        paddingHorizontal: Spacing.three,
    },
    inner: {
        width: '100%',
        maxWidth: MaxContentWidth,
        alignSelf: 'center',
    },
    title: {
        marginBottom: Spacing.five,
    },
});