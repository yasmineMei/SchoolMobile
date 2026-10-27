import type { ReactNode } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { useTheme } from '../theme';

export function Screen({ children }: { children: ReactNode }) {
  const t = useTheme();
  return (
    <ScrollView
      style={{ backgroundColor: t.bg }}
      contentContainerStyle={styles.content}
      contentInsetAdjustmentBehavior="automatic"
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, gap: 12 },
});
