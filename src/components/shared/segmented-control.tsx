import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from './themed-text';

import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type SegmentedOption<T extends string> = {
    label: string;
    value: T;
};

type SegmentedControlProps<T extends string> = {
    options: SegmentedOption<T>[];
    value: T;
    onChange: (value: T) => void;
};

export function SegmentedControl<T extends string>({ options, value, onChange }: SegmentedControlProps<T>) {
    const theme = useTheme();

    return (
        <View style={[styles.track, { backgroundColor: theme.background }]}>
            {options.map((option) => {
                const isActive = option.value === value;

                return (
                    <Pressable
                        key={option.value}
                        onPress={() => onChange(option.value)}
                        accessibilityRole="button"
                        accessibilityState={{ selected: isActive }}
                        style={[styles.segment, isActive && { backgroundColor: theme.backgroundSelected }]}>
                        <ThemedText
                            type="small"
                            themeColor={isActive ? 'text' : 'textSecondary'}
                            style={isActive && styles.activeLabel}>
                            {option.label}
                        </ThemedText>
                    </Pressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    track: {
        flexDirection: 'row',
        borderRadius: Spacing.four,
        padding: Spacing.half,
        gap: Spacing.half,
    },
    segment: {
        paddingVertical: Spacing.two,
        paddingHorizontal: Spacing.three,
        borderRadius: Spacing.three,
    },
    activeLabel: {
        fontWeight: '700',
    },
});