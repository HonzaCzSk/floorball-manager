import { SymbolView } from 'expo-symbols';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/shared/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type ClubHeaderProps = {
  clubName?: string;
  category?: string;
};

// TODO: once logo upload lands in Nastavení, swap this placeholder for the
// user's uploaded image (with white/black/transparent background options).
export function ClubHeader({
  clubName = 'Florbal Hradec Králové',
  category = 'Muži A',
}: ClubHeaderProps) {
  const theme = useTheme();

  return (
    <View style={styles.row}>
      <View style={[styles.logo, { backgroundColor: theme.backgroundElement }]}>
        <SymbolView
          name={{ ios: 'shield.fill', android: 'shield', web: 'shield' }}
          size={28}
          tintColor={theme.textSecondary}
        />
      </View>
      <View style={styles.textCol}>
        <ThemedText type="subtitle" numberOfLines={1} style={styles.clubName}>
          {clubName}
        </ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          {category}
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  logo: {
    width: 64,
    height: 64,
    borderRadius: Spacing.three,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCol: {
    flex: 1,
    gap: Spacing.half,
  },
  clubName: {
    fontSize: 22,
    lineHeight: 26,
  },
});
