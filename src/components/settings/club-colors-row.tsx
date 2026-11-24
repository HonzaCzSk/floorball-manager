import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/shared/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ClubColor = {
  label: string;
  hex: string;
};

type ClubColorsRowProps = {
  colors: ClubColor[];
  onPressColor?: (index: number) => void;
};

export function ClubColorsRow({ colors, onPressColor }: ClubColorsRowProps) {
  const theme = useTheme();

  return (
    <View style={styles.row}>
      {colors.map((color, index) => (
        <Pressable
          key={color.label}
          onPress={() => onPressColor?.(index)}
          accessibilityRole="button"
          style={[styles.item, { backgroundColor: theme.background }]}>
          <View
            style={[
              styles.dot,
              { backgroundColor: color.hex },
              color.hex.toLowerCase() === '#ffffff' && { borderWidth: 1, borderColor: theme.backgroundSelected },
            ]}
          />
          <View>
            <ThemedText type="smallBold">{color.label}</ThemedText>
            <ThemedText type="code" themeColor="textSecondary">
              {color.hex.toUpperCase()}
            </ThemedText>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: Spacing.three,
    flexWrap: 'wrap',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    borderRadius: Spacing.four,
    paddingVertical: Spacing.one,
    paddingRight: Spacing.three,
    paddingLeft: Spacing.one,
  },
  dot: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
});
