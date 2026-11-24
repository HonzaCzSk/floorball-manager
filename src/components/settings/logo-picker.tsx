import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/shared/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type LogoContrast = 'white' | 'black' | 'transparent';

type LogoPickerProps = {
  clubName: string;
  contrast: LogoContrast;
  onContrastChange: (value: LogoContrast) => void;
  onPickLogo?: () => void;
};

const CONTRAST_OPTIONS: { value: LogoContrast; label: string }[] = [
  { value: 'white', label: 'Bílé' },
  { value: 'black', label: 'Černé' },
  { value: 'transparent', label: 'Průhledné' },
];

export function LogoPicker({ clubName, contrast, onContrastChange, onPickLogo }: LogoPickerProps) {
  const theme = useTheme();

  return (
    <View>
      <View style={styles.row}>
        <Pressable
          onPress={onPickLogo}
          accessibilityRole="button"
          accessibilityLabel="Nahrát logo klubu"
          style={[styles.dropzone, { borderColor: theme.backgroundSelected, backgroundColor: theme.background }]}>
          <SymbolView
            name={{ ios: 'photo.badge.plus', android: 'add_photo_alternate', web: 'add_photo_alternate' }}
            size={26}
            tintColor={theme.textSecondary}
          />
        </Pressable>

        <View style={styles.meta}>
          <ThemedText>{clubName}</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            PNG nebo SVG, doporučeno 512×512
          </ThemedText>
          <Pressable onPress={onPickLogo} hitSlop={Spacing.two}>
            <ThemedText type="linkPrimary" style={styles.uploadLink}>
              Nahrát nové logo
            </ThemedText>
          </Pressable>
        </View>
      </View>

      <View style={[styles.swatchRow, { borderTopColor: theme.backgroundSelected }]}>
        {CONTRAST_OPTIONS.map((option) => {
          const isActive = option.value === contrast;

          return (
            <Pressable
              key={option.value}
              onPress={() => onContrastChange(option.value)}
              accessibilityRole="button"
              accessibilityState={{ selected: isActive }}
              style={styles.swatchOption}>
              <ContrastSwatch value={option.value} active={isActive} accent={theme.accent} borderColor={theme.backgroundSelected} />
              <ThemedText type="small" themeColor={isActive ? 'text' : 'textSecondary'} style={isActive && styles.activeLabel}>
                {option.label}
              </ThemedText>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

function ContrastSwatch({
  value,
  active,
  accent,
  borderColor,
}: {
  value: LogoContrast;
  active: boolean;
  accent: string;
  borderColor: string;
}) {
  return (
    <View style={[styles.swatch, { borderColor: active ? accent : borderColor, borderWidth: active ? 2 : 1 }]}>
      {value === 'white' && <View style={[StyleSheet.absoluteFill, { backgroundColor: '#ffffff' }]} />}
      {value === 'black' && <View style={[StyleSheet.absoluteFill, { backgroundColor: '#000000' }]} />}
      {value === 'transparent' && <Checkerboard />}
    </View>
  );
}

function Checkerboard() {
  return (
    <View style={[StyleSheet.absoluteFill, styles.checkerboard]}>
      {[0, 1, 2, 3].map((index) => (
        <View key={index} style={[styles.checkerCell, { backgroundColor: index % 3 === 0 ? '#E3E5EA' : '#F6F7F9' }]} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.four,
  },
  dropzone: {
    width: 96,
    height: 96,
    borderRadius: Spacing.three,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  meta: {
    flex: 1,
    gap: Spacing.half,
  },
  uploadLink: {
    marginTop: Spacing.one,
  },
  swatchRow: {
    flexDirection: 'row',
    gap: Spacing.three,
    marginTop: Spacing.three,
    paddingTop: Spacing.three,
    borderTopWidth: 1,
  },
  swatchOption: {
    alignItems: 'center',
    gap: Spacing.one,
  },
  swatch: {
    width: 40,
    height: 40,
    borderRadius: 10,
    overflow: 'hidden',
  },
  activeLabel: {
    fontWeight: '700',
  },
  checkerboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  checkerCell: {
    width: '50%',
    height: '50%',
  },
});
