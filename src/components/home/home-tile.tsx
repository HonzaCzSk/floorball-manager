import { SymbolView } from 'expo-symbols';
import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { ThemedText } from '@/components/shared/themed-text';
import { ThemedView } from '@/components/shared/themed-view';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type PlatformIconName = { ios: string; android: string; web: string };

type HomeTileProps = {
  title: string;
  subtitle: string;
  icon: PlatformIconName;
  onPress?: () => void;
  /** Marks the tile as the primary action (Taktická tabule) with an accent tint. */
  primary?: boolean;
  style?: StyleProp<ViewStyle>;
};

export function HomeTile({ title, subtitle, icon, onPress, primary, style }: HomeTileProps) {
  const theme = useTheme();

  return (
    <Pressable onPress={onPress} style={style}>
      {({ pressed }) => (
        <ThemedView
          type={primary ? undefined : 'backgroundElement'}
          style={[styles.tile, primary && { backgroundColor: theme.accentTint }, pressed && styles.pressed]}>
          <View
            style={[styles.iconWrap, { backgroundColor: primary ? theme.accent : theme.backgroundSelected }]}>
            <SymbolView name={icon} size={22} tintColor={primary ? '#FFFFFF' : theme.text} />
          </View>
          <ThemedText type="smallBold">{title}</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            {subtitle}
          </ThemedText>
        </ThemedView>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    borderRadius: Spacing.three,
    padding: Spacing.four,
    gap: Spacing.one,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: Spacing.three,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.one,
  },
  pressed: {
    opacity: 0.7,
  },
});
