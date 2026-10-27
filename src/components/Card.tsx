import type { ReactNode } from 'react';
import { Pressable, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import { useTheme } from '../theme';

type Props = {
  children: ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export function Card({ children, onPress, style }: Props) {
  const t = useTheme();
  const base = [styles.card, { backgroundColor: t.card, borderColor: t.border }, style];

  if (onPress) {
    return (
      <Pressable onPress={onPress} style={({ pressed }) => [...base, pressed && styles.pressed]}>
        {children}
      </Pressable>
    );
  }
  return <View style={base}>{children}</View>;
}

const styles = StyleSheet.create({
  card: { borderWidth: 1, borderRadius: 14, padding: 14 },
  pressed: { opacity: 0.7 },
});
