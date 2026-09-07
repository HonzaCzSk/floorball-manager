import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/shared/themed-text';
import { Spacing } from '@/constants/theme';

export function AppBrand() {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.name}>Placeholder</ThemedText>
      <ThemedText type="small" themeColor="textSecondary" style={styles.slogan}>
        Tvůj tým, tvé taktiky, tvoje vítězství.
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.half,
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
    lineHeight: 30,
  },
  slogan: {
    fontStyle: 'italic',
  },
});
