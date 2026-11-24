import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/shared/themed-text';
import { Spacing } from '@/constants/theme';

type SettingsRowProps = {
  title: string;
  hint?: string;
  control: ReactNode;
};

export function SettingsRow({ title, hint, control }: SettingsRowProps) {
  return (
    <View style={styles.row}>
      <View style={styles.text}>
        <ThemedText>{title}</ThemedText>
        {hint ? (
          <ThemedText type="small" themeColor="textSecondary" style={styles.hint}>
            {hint}
          </ThemedText>
        ) : null}
      </View>
      {control}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.three,
  },
  text: {
    flex: 1,
  },
  hint: {
    marginTop: Spacing.half,
  },
});
